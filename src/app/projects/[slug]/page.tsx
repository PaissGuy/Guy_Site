import { getProject, getProjectSlugs } from '@/lib/projects'
import { notFound } from 'next/navigation'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Guy Paiss',
    }
  }

  return {
    title: `${project.title} - Guy Paiss`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="overflow-x-hidden">
      <GradientBackground />
      <Container>
        <Navbar variant="dark" />

        {/* Back Button */}
        <div className="mt-8">
          <Button asChild variant="ghost" className="text-gray-700 hover:text-gray-900">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mt-8 pb-16">
        

          
<div className="grid grid-cols-2 gap-4">
          <Lead className="mb-8 max-w-3xl">
            <Heading as="h1" className="mb-6">
            {project.title}
          </Heading>
            {project.description}


          {/* Technologies */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </Lead>
          
  {/* Project Image Placeholder */}
  {project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img 
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover object-top mb-8 rounded-xl h-96"
      />
    </a>
  ) : (
    <img 
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover mb-8 rounded-xl h-96"
    />
  )}
         </div>

        
        </div>

        {/* Project Content */}
        <article className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-white/50 mb-16">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </Container>
      
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Subheading className="mb-4">Interested in working together?</Subheading>
            <Heading as="h2" className="mb-6">
              Let's build something amazing.
            </Heading>
            <Lead className="mb-8">
              Let's discuss how AI-powered development and systems thinking can help your next project.
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Conversation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}