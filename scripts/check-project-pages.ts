import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import sharp from 'sharp'
import { projects, projectCount, projectSlugs, getProject } from '../src/lib/content/projects'
import { getAllCaseStudies } from '../src/lib/content/case-studies'
import { getAllProjectCaseStudies, getProjectCaseStudy } from '../src/lib/content/project-case-studies'
import { getService } from '../src/lib/content/services'
import { loadMessages } from '../src/lib/i18n/server'
import { makeTranslator } from '../src/lib/i18n/translate'
import { locales, localizedPath, languageInfo } from '../src/lib/i18n/config'
import { absoluteLocaleUrl } from '../src/lib/i18n/seo'
import { siteConfig } from '../src/lib/seo/site-config'

async function main() {
  const base = new URL(process.argv[2] ?? 'http://localhost:3100')
  assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Use a local production server')
  const studies = getAllProjectCaseStudies()
  assert.equal(studies.length, projectCount)
  assert.equal(new Set(projects.map(project => project.id)).size, projectCount)
  assert.equal(new Set(projectSlugs).size, projectCount)
  assert.equal(getProjectCaseStudy('not-a-project'), null)
  assert.deepEqual(getAllCaseStudies().map(study => study.slug), [
    'yizhenxiang-commerce-performance', 'gogocha-ai-dispatch', 'clinic-line-booking',
  ])
  for (const original of getAllCaseStudies()) {
    const current = getProjectCaseStudy(original.slug)!
    for (const key of Object.keys(original) as (keyof typeof original)[]) assert.deepEqual(current[key], original[key])
  }
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert(existsSync('public' + project.image), 'Missing image: ' + project.image)
    const image = await sharp('public' + project.image).metadata()
    assert(image.width && image.height, 'Invalid image: ' + project.image)
    assert(getService(project.serviceSlug), 'Missing service: ' + project.serviceSlug)
    assert(project.relatedSlugs.length > 0)
    for (const related of project.relatedSlugs) assert(related !== project.slug && getProject(related))
    const study = getProjectCaseStudy(project.slug)!
    assert(study.challenge && study.approach.length && study.workflow?.length)
  }

  const decode = (value: string) => value.replace(/&#x([0-9a-f]+);|&#(\d+);|&(amp|quot|lt|gt|apos);/gi, (_, hex, decimal, name) =>
    hex ? String.fromCodePoint(parseInt(hex, 16)) : decimal ? String.fromCodePoint(Number(decimal)) : ({ amp: '&', quot: '"', lt: '<', gt: '>', apos: "'" }[String(name).toLowerCase()] ?? _))
  const attribute = (tag: string, key: string) => decode(tag.match(new RegExp(`\\b${key}="([^"]*)"`, 'i'))?.[1] ?? '')
  const tags = (html: string, name: string) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(match => match[0])
  const meta = (html: string, key: string) => attribute(tags(html, 'meta').find(tag => attribute(tag, 'name') === key || attribute(tag, 'property') === key) ?? '', 'content')
  const text = (html: string) => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
  async function read(path: string, expected = 200) {
    const response = await fetch(new URL(path, base))
    assert.equal(response.status, expected, path)
    return response.text()
  }
  const sitemap = await read('/sitemap.xml')
  let checked = 0
  for (const locale of locales) {
    const t = makeTranslator(locale, locale === 'zh-tw' ? {} : await loadMessages(locale))
    const listing = await read(localizedPath('/case-studies', locale))
    assert(!meta(listing, 'description').includes('{0}'))
    assert(meta(listing, 'description').includes(String(projectCount)))
    const graph = JSON.parse(listing.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? '{}')['@graph']
    const itemList = graph.find((item: Record<string, unknown>) => item['@type'] === 'ItemList')
    assert.equal(itemList.numberOfItems, projectCount)
    assert.equal(itemList.itemListElement.length, projectCount)
    const summaries = await read(localizedPath('/llms.txt', locale))
    const full = await read(localizedPath('/llms-full.txt', locale))
    const titles = new Set<string>()
    const descriptions = new Set<string>()
    // Limit concurrency: each response contains complete localized HTML.
    for (let offset = 0; offset < studies.length; offset += 6) {
      await Promise.all(studies.slice(offset, offset + 6).map(async study => {
        const path = localizedPath('/case-studies/' + study.slug, locale)
        const canonical = absoluteLocaleUrl('/case-studies/' + study.slug, locale)
        assert(listing.includes(`href="${path}"`), 'Missing listing link: ' + path)
        assert(sitemap.includes(`<loc>${canonical}</loc>`), 'Missing sitemap URL: ' + path)
        assert(summaries.includes(canonical) && full.includes(canonical), 'Missing summary: ' + path)
        const html = await read(path)
        const head = html.split('</head>')[0]
        const title = text(head.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '')
        const description = meta(head, 'description')
        assert(title.includes(t(study.title)), path + ': title')
        assert.equal(description, t(study.summary), path + ': description')
        assert(!titles.has(title) && !descriptions.has(description), path + ': duplicate metadata')
        titles.add(title); descriptions.add(description)
        assert(!meta(head, 'robots').includes('noindex'), path + ': noindex')
        const links = tags(head, 'link')
        assert(links.some(tag => attribute(tag, 'rel') === 'canonical' && attribute(tag, 'href') === canonical))
        for (const alternate of locales) assert(links.some(tag => attribute(tag, 'hrefLang').toLowerCase() === languageInfo[alternate].lang.toLowerCase() && attribute(tag, 'href') === absoluteLocaleUrl('/case-studies/' + study.slug, alternate)), path + ': hreflang ' + alternate)
        assert.equal(meta(head, 'og:image'), new URL(study.image, siteConfig.url).href)
        assert.equal(meta(head, 'twitter:image'), new URL(study.image, siteConfig.url).href)
        assert.equal([...html.matchAll(/<h1\b/g)].length, 1)
        const article = text(html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? '')
        for (const field of [study.challenge, ...study.approach, ...(study.features ?? []), ...(study.workflow ?? [])]) assert(article.includes(text(t(field))), path + ': missing initial HTML content: ' + field)
        const schemas = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? '{}')['@graph']
        for (const type of ['WebPage', 'CreativeWork', 'BreadcrumbList']) assert(schemas.some((item: Record<string, unknown>) => item['@type'] === type), path + ': schema ' + type)
        assert(schemas.some((item: Record<string, unknown>) => item['@type'] === 'CreativeWork' && item.url === canonical))
        checked++
      }))
    }
    const missing = await read(localizedPath('/case-studies/not-a-project', locale), 404)
    assert(meta(missing, 'robots').includes('noindex'))
  }
  console.log(`PASS: ${projectCount} projects, ${checked} localized pages, initial HTML, metadata, schema, discovery and 404s`)
}
main().catch(error => { console.error(error); process.exitCode = 1 })
