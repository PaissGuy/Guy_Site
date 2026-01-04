import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export interface ProjectMetadata {
  title: string
  description: string
  date: string
  category: string
  technologies: string[]
  featured: boolean
  image: string
  link?: string
}

export interface Project extends ProjectMetadata {
  slug: string
  content: string
}

export interface ProjectSummary extends ProjectMetadata {
  slug: string
}

export async function getProjects(): Promise<ProjectSummary[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return []
    }
    const fileNames = fs.readdirSync(projectsDirectory)
    const projects = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          ...(data as ProjectMetadata),
        }
      })
    )

    return projects.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<ProjectSummary[]> {
  const projects = await getProjects()
  return projects.filter((project) => project.featured)
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      ...(data as ProjectMetadata),
    }
  } catch (error) {
    return null
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return []
    }
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error loading project slugs:', error)
    return []
  }
}