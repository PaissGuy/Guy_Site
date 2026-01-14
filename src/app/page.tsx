import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { SandDunesBackground } from '@/components/sand-dunes-background'
import Image from 'next/image'
import { Heading, Lead, Subheading } from '@/components/text'
import { Link } from '@/components/link'
import { ArrowUpRight, Linkedin, Github } from 'lucide-react'
import { getFeaturedProjects } from '@/lib/projects'
import { BlindishMiniDemo } from '@/components/blindish-mini-demo'
import { N8nAutoposterMiniDemo } from '@/components/n8n-autoposter-mini-demo'
import AnimatedBlurredPhoto from '@/components/animated-blurred-photo'
import { CapabilitiesShowcase } from '@/components/capabilities-showcase'

export default async function Home() {
  const featuredProjects = (await getFeaturedProjects()).slice(0, 3)
  return (
    <div className="overflow-x-hidden">
      {/* Navbar at top level - sibling to hero section */}
      <Container>
        <Navbar />
      </Container>

      {/* Hero Section - Content-Driven Layout */}
      <div className="relative pb-16 lg:pb-24">
        {/* Background wrapper - outside container for full width */}
        <div className="relative mx-2 mt-2 rounded-4xl ring-1 ring-black/5 ring-inset overflow-hidden">
          {/* Sand dunes background fills parent */}
          <SandDunesBackground className="absolute inset-0 -z-10" />

          {/* Container inside background */}
          <Container>
            {/* Content determines the height */}
            <div className="relative pt-40 pb-16 lg:pt-56 lg:pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                {/* Drone Image - First on mobile, right side on desktop */}
                <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center">
                  <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <Image
                      src="/images/drone.jpg"
                      alt="FPV Racing Drone"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Content - Second on mobile, left side on desktop */}
                <div className="order-2 lg:order-1 lg:col-span-2">
                  <Heading as="h1" className="mb-6 mt-2 !leading-[1.1] hero-text-gradient hero-heading-gradient">
                    Turning vision into reality.
                  </Heading>
                  <Lead className="hero-text-gradient hero-lead-gradient font-light">I build intelligent systems with computer vision, machine learning, and full-stack development—from algorithm design to deployment.</Lead>

                  {/* CTA Buttons */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/Guy-Paiss-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Guy-Paiss-Resume.pdf"
                      className="inline-flex text-accent-200 items-center justify-center rounded-full px-8 py-4 text-lg font-medium bg-accent-100/35 bg-blend-multiply hover:bg-accent-100/40 text-accent-50 hover:shadow-accent-500/30 transition-all duration-200 hover:text-accent-100"
                    >
                      View My Resume
                    </a>
                    <a
                      href="/projects"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium border-2 border-accent-100/50 text-accent-100 hover:bg-accent-50/10 hover:border-accent-100/50 transition-all duration-200"
                    >
                      View My Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* About Me Section */}
      <Container className="mt-16 pb-24 text-center">
        <div className="text-center">
          {/* Animated Blurred Photo - Centered above headline */}
          <div className="flex justify-center mb-12">
            <AnimatedBlurredPhoto
              src="/images/Guy_CashGrow.jpeg"
              alt="Guy Paiss"
              size={160}
            />
          </div>

          {/* Large Bold Headline */}
          <Heading as="h2" className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Who am I?
          </Heading>

          {/* Body Text - Center Aligned */}
          <div className="max-w-lg mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I'm Guy — a software developer with a passion for computer vision, machine learning, and building systems that solve real problems.
            </p>
            <p>
              With a background in optics and imaging, I move between algorithm development in Python/C++ and full-stack applications with React/TypeScript. I thrive on turning complex technical challenges into elegant, working solutions.
            </p>
          </div>

          {/* Learn More Link */}
          <div className="mt-8">
            
            
         

            <Link
            href="/about"
            className="inline-flex items-center justify-center w-full sm:w-1/3 rounded-full px-6 py-3 text-lg font-medium border-2 bg-black text-accent-50 hover:bg-zinc-800 transition-all duration-200"
          >
            Learn more about me
          </Link>

          </div>
        </div>
      </Container>

      {/* Interactive Capabilities Showcase - Dark Section */}
      <div className="mx-2 mt-16 py-32 rounded-4xl relative bg-gray-950">
        
       <Container className="mt-16"><Heading as="h2" className="mb-10 !leading-[1.1] text-white">
          Things I build.
        </Heading>
        </Container>
        <Container className="mt-16">
          <CapabilitiesShowcase />
          
        </Container>

        
      </div>

      {/* Featured Projects Section */}
      <Container className="mt-32 pb-24">
        <Subheading>Featured Projects</Subheading>
        <Heading as="h2" className="mt-2 mb-12">
          Recent Work
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <a
              key={project.slug}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col rounded-3xl bg-white/95 backdrop-blur-sm p-2 shadow-md ring-1 ring-gray-200/50 group hover:shadow-xl hover:shadow-accent-500/10 hover:ring-accent-200 transition-all duration-200"
            >
              {/* Thumbnail Image Section */}
              <div className="w-full aspect-[3/2] rounded-2xl mb-2 overflow-hidden relative">
                {project.slug === 'blindish-app' ? (
                  <BlindishMiniDemo />
                ) : project.slug === 'n8n-ai-autoposter' ? (
                  <N8nAutoposterMiniDemo />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-[0.98] contrast-[0.96] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-200"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-8">
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

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center w-full sm:w-1/3 rounded-full px-6 py-3 text-lg font-medium border-2 bg-black text-accent-50 hover:bg-zinc-800 transition-all duration-200"
          >
            View All Projects
          </Link>
        </div>
      </Container>

      {/* Work with Me CTA Section */}
      <div className="mx-2 mt-16 py-32 rounded-4xl relative bg-gray-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h2" className="text-white">
              Let's build together.
            </Heading>

            <p className="mt-6 text-xl/8 text-gray-300 font-medium">
              I work with teams tackling complex technical challenges — whether it's building computer vision systems, developing ML pipelines, or creating full-stack applications that scale.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-gray-950 transition-all duration-200"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/guy-paiss/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-accent-200 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/PaissGuy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-accent-200 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  )
}