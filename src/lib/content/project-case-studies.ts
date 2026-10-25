import type { CaseEvidence } from './types'
import { getCaseStudy } from './case-studies'
import { projects, getProject } from './projects'
import { projectStories } from './project-stories'

export function getProjectCaseStudy(slug: string): CaseEvidence | null {
  const project = getProject(slug)
  if (!project) return null
  const evidence = getCaseStudy(slug)
  if (evidence) return { ...evidence, serviceSlug: project.serviceSlug, relatedSlugs: project.relatedSlugs }
  const story = projectStories[slug]
  if (!story) return null
  return {
    slug, title: story.seoTitle, clientName: project.title,
    summary: project.description, challenge: story.context,
    features: project.features, approach: project.highlights, workflow: story.workflow,
    technologies: project.tech, image: project.image, projectUrl: project.url,
    metrics: [], updatedAt: story.updatedAt, disclosure: story.note,
    serviceSlug: project.serviceSlug, relatedSlugs: project.relatedSlugs,
  }
}

export function getAllProjectCaseStudies(): CaseEvidence[] {
  return projects.map(project => {
    const study = getProjectCaseStudy(project.slug)
    if (!study) throw new Error('Missing project introduction: ' + project.slug)
    return study
  })
}
