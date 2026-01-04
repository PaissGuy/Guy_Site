import { getProjects } from '@/lib/projects'
import { Container } from '@/components/container'
import { SiteLayout } from '@/components/site-layout'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'
import { BlindishMiniDemo } from '@/components/blindish-mini-demo'
import { ArrowUpRight } from 'lucide-react'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <SiteLayout variant="dark" className="overflow-x-hidden">
      <GradientBackground />
      <Container>
        <div className="mt-16 max-w-4xl">
        <Subheading>Projects</Subheading>
        <Heading as="h1" className="mt-2">
          My Creations &amp; Collaborations
        </Heading>
        </div>
      </Container>

      <Container className="mt-16 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col rounded-3xl bg-white/95 backdrop-blur-sm p-2 shadow-md ring-1 ring-gray-200/50 group hover:shadow-xl hover:shadow-accent-500/10 hover:ring-accent-200 transition-all duration-200"
            >
              <div className="w-full aspect-[3/2] rounded-2xl mb-2 overflow-hidden relative">
                {project.slug === 'blindish-app' ? (
                  <BlindishMiniDemo />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-[0.98] contrast-[0.96] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-200"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
                <div className="mt-2 flex items-start justify-between">
                  <div className="text-base/7 font-medium group-hover:text-zinc-900 transition-colors">
                    {project.title}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-zinc-900 transition-colors flex-shrink-0 ml-2" />
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {project.description}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-600 bg-gray-100/80 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </SiteLayout>
  )
}