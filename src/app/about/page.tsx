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
            Engineer with a vision.
          </Heading>
          <Lead className="mt-6 text-gray-500">
            Combining computer vision expertise with full-stack development to build intelligent systems.
          </Lead>
        </div>
      </Container>

      {/* Bio Section */}
      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-6 text-sm/7 text-gray-600">
              <p>
              My journey into technology started with a fascination for how we can teach machines to see and understand the world.
</p>
<p>
With a BSc in Computer Science and Chemistry from Tel Aviv University, and an MSc with Honours in Semiconductor Spectroscopy, I've built a strong foundation in both the theoretical and practical aspects of imaging systems and software development.
</p>
<p>
At Israel Aerospace Industries and TriEye, I developed advanced computer vision algorithms for NUC, denoising, motion correction, and object tracking. I prototyped solutions in Python and implemented production-ready code in C++ with CUDA acceleration—always pushing the boundaries of what's possible with image processing.
</p>
<p>
Currently, I'm expanding my expertise through roles at Abili-Tech (building transformer neural networks for ASL translation), JobHuntingU (AI workflow automation), and CashGrow (full-stack development with React and TypeScript).
</p>
<p>
I thrive in environments where complex technical challenges meet real-world impact. Whether it's building ML pipelines, optimizing GPU-accelerated algorithms, or creating scalable web applications, I bring analytical rigor and a passion for elegant solutions.
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