import { Container } from '@/components/container'
import { SiteLayout } from '@/components/site-layout'
import { GradientBackground } from '@/components/gradient'
import { ResumeActions } from './resume-actions'

export const metadata = {
  title: 'Guy Paiss - Resume',
}

export default function ResumePage() {
  return (
    <SiteLayout variant="dark" className="overflow-x-hidden">
      <GradientBackground />
      <Container>
        <div className="mt-16 pb-24">
          <div id="resume-content" className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 print:shadow-none print:p-0 print:rounded-none">
            {/* Header */}
            <div className="text-center border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Guy Paiss</h1>
              <p className="mt-2 text-gray-600">Vancouver, BC</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-500">
                <a href="https://www.linkedin.com/in/guy-paiss/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">LinkedIn</a>
                <a href="https://github.com/PaissGuy" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">GitHub</a>
                <a href="https://guypaiss.com" className="hover:text-accent-500 transition-colors">guypaiss.com</a>
              </div>
            </div>

            {/* Profile */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3">Profile</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                AI Developer and Research Engineer with 5+ years of professional experience and a Master&apos;s of Science in Optics and Microscopy and deep interest in imaging technologies and AI image manipulation. Adept at analytical problem solving, versatile and can handle more than one layer of the stack.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3">Technical Skills</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold">Languages:</span> Python, C, C++, TypeScript, PHP, SQL, Matlab, R</p>
                <p><span className="font-semibold">ML & Deep Learning:</span> PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, NumPy, Pandas, OpenCV, CUDA, CuPy; embedded C deployment</p>
                <p><span className="font-semibold">AI Engineering:</span> Claude Code (agentic AI-assisted development), LLM & generative AI APIs, prompt engineering, n8n, Zapier</p>
                <p><span className="font-semibold">Backend:</span> FastAPI, Flask, Laravel, Node.js, Celery, Prefect, Redis, REST APIs</p>
                <p><span className="font-semibold">Frontend:</span> React, Next.js</p>
                <p><span className="font-semibold">Databases:</span> PostgreSQL, MySQL, SQLite</p>
                <p><span className="font-semibold">Cloud & DevOps:</span> GCP, Azure, Docker, Git, Linux</p>
                <p><span className="font-semibold">Visualisation:</span> Power BI, Tableau</p>
                <p><span className="font-semibold">Optics & CAD:</span> Zemax, Lumerical, SolidWorks</p>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3">Professional Experience</h2>

              {/* Roomvu */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">Roomvu <span className="font-normal text-gray-600">— Full-Stack & AI Software Engineer</span></h3>
                  <span className="text-sm text-gray-500">March 2026 – June 2026</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Vancouver, BC</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Develop across Roomvu&apos;s three-service platform: a Laravel 12 (PHP 8.4) core API with MariaDB and Redis, a Next.js/TypeScript agent dashboard, and a FastAPI, Celery and Prefect video-generation microservice.</li>
                  <li>Built AI immersive property-tour videos: vertical/horizontal aspect ratios, pluggable overlay templates, cinematic camera styles and lip-synced talking-head narration using generative video models (Veo, Vidu, OmniHuman); sped up rendering with ffmpeg post-processing.</li>
                  <li>Led a second voice-cloning engine (Fish Audio) alongside ElevenLabs end to end: async cloning, a side-by-side engine comparison UI, a staged rollout from test users to 10%, 30% and all agents, and backfill tooling.</li>
                  <li>Extended the automated local-news and explainer video pipeline: Remotion templates, per-scene narration, weighted multi-dimension footage selection with prompt retries, and an admin panel showing per-run and per-video outcomes.</li>
                  <li>Implemented AI image and video processing: background removal and replacement (BiRefNet, RMBG), validation of agent body-shot photos, and an avatar-capture flow that turns selfie recordings into voice clones and AI avatars.</li>
                </ul>
              </div>

              {/* Nohayo */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">Nohayo <span className="font-normal text-gray-600">— Signal Processing & AI Developer</span></h3>
                  <span className="text-sm text-gray-500">March 2025 – Present</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Vancouver, BC (Remote)</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Fall Detection: built a three-stage detector (8-channel GRU classifier on 2 s windows, followed by inactivity and extended-idle confirmation) that runs in ~2.5 KB RAM and 16 KB flash, with 97.9% sensitivity, 91.9% accuracy, 0.915 AUC and an 11% false-positive rate across three public datasets.</li>
                  <li>Vertical Oscillation: designed a two-stage estimator (harmonic-sum spectral cadence detection, combined with a PyTorch GRU ensemble and an optional per-user calibration; reached 0.63 cm MAE uncalibrated and 0.37 cm calibrated, and shipped it in C (219 KB flash, 61 KB RAM).</li>
                  <li>Ground Contact Time: replaced a feature-based XGBoost pipeline with a GRU sequence model on accelerometer windows (5.8 ms MAE, R² 0.79 on running) and exported it to embedded C.</li>
                  <li>Running Power: audited a GPS, accelerometer and barometer model, found evaluation leaks and re-scored it with leave-one-person-out validation; built a hybrid physics (GOVSS) + GRU/1D-CNN residual model reaching 14.5 W MAE (R² 0.81) against Garmin, and a reentrant C library.</li>
                </ul>
              </div>

              {/* Abili-Tech */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">Abili-Tech <span className="font-normal text-gray-600">— AI Researcher Intern</span></h3>
                  <span className="text-sm text-gray-500">September 2024 – February 2025</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Vancouver, BC</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Designing and implementing transformer (encoder-decoder) neural network for transforming text to sign language (ASL).</li>
                  <li>Makes use of pretrained models for natural language processing (transformer for text/gloss), image-to-image translation (pix2pixHD), and body pose estimation.</li>
                  <li>Experience building ML solutions with scikit-learn, TensorFlow, and PyTorch to build deep neural networks.</li>
                </ul>
              </div>

              {/* JobHuntingU */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">JobHuntingU <span className="font-normal text-gray-600">— AI Integrator Internship</span></h3>
                  <span className="text-sm text-gray-500">October 2024 – February 2025</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Vancouver, BC</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Automate company workflows using N8N, Mindpal, Zapier and Buffer to automatically generate and post social media advertisements.</li>
                  <li>Perform web scraping to gather and analyze potential client&apos;s data.</li>
                  <li>Working with webhooks, sockets, and RESTful APIs.</li>
                </ul>
              </div>

              {/* CashGrow */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">CashGrow <span className="font-normal text-gray-600">— Full-Stack Engineer</span></h3>
                  <span className="text-sm text-gray-500">August 2024 – February 2025</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Vancouver, BC</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Developing the app using TypeScript, Node.js and React as frontend and backend technologies.</li>
                  <li>Experience working with PostgreSQL platforms as the app OLTP.</li>
                  <li>Containerized and distributed applications using Docker. Deployed backend on GCP, frontend on Netlify.</li>
                </ul>
              </div>

              {/* TriEye */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">TriEye <span className="font-normal text-gray-600">— Computer Vision Developer</span></h3>
                  <span className="text-sm text-gray-500">February 2023 – April 2024</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Tel Aviv, IL</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Designed and implemented advanced algorithms for NUC, denoising, motion correction and image stitching.</li>
                  <li>Created an image stitching algorithm that leveraged Poisson reconstruction and GPU acceleration (CuPy), optimizing the seamless merging of image regions.</li>
                  <li>Implemented motion correction algorithms using CUDA (CuPy), leveraging ego-motion estimation (homography) and image registration techniques (SIFT).</li>
                  <li>Prototyped algorithms in Python (POC) and implemented them in C++ using OpenCV in Linux environment.</li>
                </ul>
              </div>

              {/* IAI */}
              <div className="mb-5">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">Israel Aerospace Industries <span className="font-normal text-gray-600">— Computer Vision Developer</span></h3>
                  <span className="text-sm text-gray-500">December 2021 – February 2023</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Be&apos;er Yaakov, IL</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                  <li>Led the design and implementation of algorithms for NUC, denoising and tracking.</li>
                  <li>Developed motion correction algorithms using optical flow techniques.</li>
                  <li>Designed tracking algorithms using RANSAC and Kalman filters.</li>
                  <li>Conducted research and prototyping for object detection and recognition algorithms.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3">Education</h2>

              <div className="mb-3">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">Microsoft Azure AI900 Professional Certificate</h3>
                  <span className="text-sm text-gray-500">Vancouver, BC</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">MSc with Honours in Semiconductor Spectroscopy</h3>
                  <span className="text-sm text-gray-500">2018 – 2021</span>
                </div>
                <p className="text-xs text-gray-500">Tel Aviv University</p>
                <p className="text-sm text-gray-700 mt-1">Publication: Time-resolved circularly polarized luminescence of Eu3+-based systems</p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">BSc in Computer Science and Chemistry</h3>
                  <span className="text-sm text-gray-500">2011 – 2014</span>
                </div>
                <p className="text-xs text-gray-500">Tel Aviv University</p>
              </div>
            </section>

            <ResumeActions />
          </div>
        </div>
      </Container>
    </SiteLayout>
  )
}
