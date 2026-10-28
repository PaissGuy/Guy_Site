import { Container } from '@/components/container'
import { SiteLayout } from '@/components/site-layout'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'

export default function AboutPage() {
  return (
    <SiteLayout variant="dark" className="overflow-x-hidden">
      <GradientBackground />

      {/* Hero Section */}
      <Container>
        <div className="mt-16 max-w-4xl">
          <Subheading>About</Subheading>
          <Heading as="h1" className="mt-2">
            AI Developer & Research Engineer.
          </Heading>
          <Lead className="mt-6 text-gray-500">
            5+ years building intelligent systems — from embedded ML on wearables to full-stack AI platforms and computer vision pipelines.
          </Lead>
        </div>
      </Container>

      {/* Bio Section */}
      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-6 text-sm/7 text-gray-600">
            <p>
              AI Developer and Research Engineer with 5+ years of professional experience and a Master's of Science in Optics and Microscopy. My journey into technology started with a fascination for imaging technologies and AI image manipulation — teaching machines to see and understand the world.
            </p>
            <p>
              With a BSc in Computer Science and Chemistry from Tel Aviv University, an MSc with Honours in Semiconductor Spectroscopy, and a Microsoft Azure AI900 certification, I've built a strong foundation in both the theoretical and practical aspects of imaging systems, machine learning, and software development.
            </p>
            <p>
              At Israel Aerospace Industries and TriEye, I developed advanced computer vision algorithms for NUC, denoising, motion correction, and object tracking. I prototyped solutions in Python and implemented production-ready code in C++ with CUDA acceleration.
            </p>
            <p>
              At Nohayo, I build embedded ML models for wearable signal processing — fall detection with 97.9% sensitivity running in 2.5 KB RAM, vertical oscillation estimation reaching 0.37 cm calibrated MAE, and running power models validated with leave-one-person-out cross-validation, all shipped as reentrant C libraries.
            </p>
            <p>
              At Roomvu, I worked across a three-service platform (Laravel, Next.js, FastAPI) building AI-powered video generation — immersive property tours with generative video models, voice cloning engines, automated content pipelines, and AI image processing with background removal and avatar capture flows.
            </p>
            <p>
              I thrive in environments where complex technical challenges meet real-world impact. Whether it's building embedded ML pipelines, optimizing GPU-accelerated algorithms, or creating full-stack applications that scale, I bring analytical rigor and a passion for elegant solutions.
            </p>
          </div>

          {/* Offset grid of images */}
          <div className="lg:pl-8">
            <div className="-mx-4 grid grid-cols-2 gap-3 sm:-mx-8 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-6">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10">
                <div className="block size-full bg-gradient-to-br from-accent-50 to-accent-100 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
              </div>
              <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10 lg:-mt-24">
                <div className="block size-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10">
                <div className="block size-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                  <span className="text-4xl">🧠</span>
                </div>
              </div>
              <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10 lg:-mt-24">
                <div className="block size-full bg-gradient-to-br from-accent-200 to-accent-300 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SiteLayout>
  )
}