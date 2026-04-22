import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  Link,
} from '@react-pdf/renderer'
import type { ResumeData } from '@/lib/resume-data'

Font.register({
  family: 'NotoSansTC',
  fonts: [
    { src: '/fonts/NotoSansTC-Regular.woff', fontWeight: 400 },
    { src: '/fonts/NotoSansTC-Bold.woff', fontWeight: 700 },
  ],
})

const ACCENT = '#0c0a09'
const MUTED = '#57534e'
const DIVIDER = '#e7e5e4'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'NotoSansTC',
    fontSize: 9.5,
    paddingTop: 36,
    paddingBottom: 32,
    paddingHorizontal: 40,
    color: '#1c1917',
    lineHeight: 1.5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: DIVIDER,
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    objectFit: 'cover',
  },
  headerTextCol: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: ACCENT,
    lineHeight: 1.15,
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    color: MUTED,
    lineHeight: 1.3,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
    fontSize: 8.5,
    color: MUTED,
  },
  contactLink: {
    color: MUTED,
    textDecoration: 'none',
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    color: ACCENT,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: DIVIDER,
  },
  summaryText: { color: '#292524' },
  skillRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  skillCategory: {
    width: 90,
    fontWeight: 700,
    color: ACCENT,
  },
  skillItems: {
    flex: 1,
    color: '#292524',
  },
  expItem: { marginBottom: 8 },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  expRole: { fontWeight: 700, color: ACCENT, fontSize: 10 },
  expCompany: { color: MUTED, fontSize: 9.5 },
  expPeriod: { color: MUTED, fontSize: 9 },
  bullet: {
    flexDirection: 'row',
    marginLeft: 4,
    marginTop: 1,
  },
  bulletDot: { width: 8, color: MUTED },
  bulletText: { flex: 1, color: '#292524' },

  // Featured project with image (two-column: image + body)
  featuredRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
  featuredImage: {
    width: 200,
    height: 125,
    objectFit: 'cover',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: DIVIDER,
  },
  featuredBody: {
    flex: 1,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  projectName: {
    fontWeight: 700,
    color: ACCENT,
    fontSize: 10,
    marginRight: 6,
  },
  projectUrl: {
    fontSize: 8,
    color: MUTED,
    textDecoration: 'none',
  },
  projectDesc: { color: '#292524', fontSize: 9 },
  projectTech: {
    color: MUTED,
    fontSize: 8.5,
    marginTop: 2,
  },

  // Additional projects grid (3-column)
  compactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  compactCard: {
    width: '32%',
    marginRight: '2%',
    marginBottom: 8,
  },
  compactCardLast: {
    width: '32%',
    marginBottom: 8,
  },
  compactCardImage: {
    width: '100%',
    height: 95,
    objectFit: 'cover',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: DIVIDER,
    marginBottom: 4,
  },
  compactCardName: {
    fontSize: 8.5,
    fontWeight: 700,
    color: ACCENT,
    lineHeight: 1.2,
  },
  compactCardMeta: {
    fontSize: 7.5,
    color: MUTED,
    lineHeight: 1.25,
    marginTop: 1,
  },

  eduItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  eduLeft: { flex: 1 },
  eduSchool: { fontWeight: 700, color: ACCENT },
  eduDegree: { color: MUTED },
})

const t = {
  zh: {
    summary: '自我簡介',
    skills: '專業技能',
    experience: '工作經歷',
    projects: '代表作品',
    additionalProjects: '其他作品',
    education: '學歷',
    certifications: '證照與其他',
  },
  en: {
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Featured Projects',
    additionalProjects: 'Additional Work',
    education: 'Education',
    certifications: 'Certifications & Others',
  },
} as const

type Lang = 'zh' | 'en'

export function ResumeDocument({
  data,
  lang,
}: {
  data: ResumeData
  lang: Lang
}) {
  const L = t[lang]
  return (
    <Document
      title={`${data.name[lang]} - Resume`}
      author={data.name.en}
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          {data.photoPath && (
            <Image style={styles.photo} src={data.photoPath} />
          )}
          <View style={styles.headerTextCol}>
            <Text style={styles.name}>{data.name[lang]}</Text>
            <Text style={styles.title}>{data.title[lang]}</Text>
            <View style={styles.contactRow}>
              <Link src={`mailto:${data.contact.email}`} style={styles.contactLink}>
                {data.contact.email}
              </Link>
              <Text>·</Text>
              <Text>{data.contact.phone}</Text>
              <Text>·</Text>
              <Text>{data.contact.location[lang]}</Text>
              {data.contact.github && (
                <>
                  <Text>·</Text>
                  <Link src={data.contact.github} style={styles.contactLink}>
                    GitHub
                  </Link>
                </>
              )}
              {data.contact.linkedin && (
                <>
                  <Text>·</Text>
                  <Link src={data.contact.linkedin} style={styles.contactLink}>
                    LinkedIn
                  </Link>
                </>
              )}
              {data.contact.portfolio && (
                <>
                  <Text>·</Text>
                  <Link src={data.contact.portfolio} style={styles.contactLink}>
                    Portfolio
                  </Link>
                </>
              )}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{L.summary}</Text>
          <Text style={styles.summaryText}>{data.summary[lang]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{L.skills}</Text>
          {data.skills.map((group, i) => (
            <View key={i} style={styles.skillRow}>
              <Text style={styles.skillCategory}>{group.category[lang]}</Text>
              <Text style={styles.skillItems}>{group.items.join(' · ')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{L.experience}</Text>
          {data.experience.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <View style={styles.expHeader}>
                <View>
                  <Text style={styles.expRole}>{exp.role[lang]}</Text>
                  <Text style={styles.expCompany}>{exp.company[lang]}</Text>
                </View>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              {exp.highlights.map((h, j) => (
                <View key={j} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{h[lang]}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {data.projects.length > 0 && (
          <View style={styles.section} wrap>
            <Text style={styles.sectionTitle}>{L.projects}</Text>
            {data.projects.map((p, i) => (
              <View key={i} style={styles.featuredRow} wrap={false}>
                {p.image && <Image style={styles.featuredImage} src={p.image} />}
                <View style={styles.featuredBody}>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectName}>{p.name}</Text>
                    {p.url && (
                      <Link src={p.url} style={styles.projectUrl}>
                        {p.url}
                      </Link>
                    )}
                  </View>
                  <Text style={styles.projectDesc}>{p.description[lang]}</Text>
                  <Text style={styles.projectTech}>{p.tech.join(' · ')}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {data.additionalProjects && data.additionalProjects.length > 0 && (
          <View style={styles.section} wrap>
            <Text style={styles.sectionTitle}>{L.additionalProjects}</Text>
            <View style={styles.compactGrid}>
              {data.additionalProjects.map((p, i) => {
                const isLastInRow = (i + 1) % 3 === 0
                return (
                  <View
                    key={i}
                    style={isLastInRow ? styles.compactCardLast : styles.compactCard}
                    wrap={false}
                  >
                    {p.image && (
                      <Image style={styles.compactCardImage} src={p.image} />
                    )}
                    <Text style={styles.compactCardName}>{p.name}</Text>
                    <Text style={styles.compactCardMeta}>
                      [{p.category[lang]}] {p.tech.slice(0, 4).join(' · ')}
                    </Text>
                    {p.url && (
                      <Link src={p.url} style={styles.compactCardMeta}>
                        {p.url}
                      </Link>
                    )}
                  </View>
                )
              })}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{L.education}</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.eduItem}>
              <View style={styles.eduLeft}>
                <Text style={styles.eduSchool}>{edu.school[lang]}</Text>
                <Text style={styles.eduDegree}>{edu.degree[lang]}</Text>
              </View>
              <Text style={styles.expPeriod}>{edu.period}</Text>
            </View>
          ))}
        </View>

        {data.certifications && data.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{L.certifications}</Text>
            {data.certifications.map((c, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  {c.label[lang]}
                  {c.value ? `  ${c.value[lang]}` : ''}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  )
}
