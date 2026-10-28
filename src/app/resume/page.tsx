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
          <div id="resume-content" className="resume-doc max-w-[816px] mx-auto bg-white shadow-lg print:shadow-none print:p-0" style={{ padding: '40px 48px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

            {/* Name */}
            <h1 style={{ fontSize: '22px', fontWeight: 700, textAlign: 'center', margin: '0 0 2px 0', color: '#111' }}>
              Guy Paiss
            </h1>
            <p style={{ fontSize: '11px', textAlign: 'center', margin: '0 0 8px 0', color: '#555' }}>
              Vancouver, BC &nbsp;|&nbsp;{' '}
              <a href="https://www.linkedin.com/in/guy-paiss/" style={{ color: '#555', textDecoration: 'underline' }}>LinkedIn</a>
              &nbsp;|&nbsp;{' '}
              <a href="https://github.com/PaissGuy" style={{ color: '#555', textDecoration: 'underline' }}>GitHub</a>
              &nbsp;|&nbsp;{' '}
              <a href="https://guypaiss.com" style={{ color: '#555', textDecoration: 'underline' }}>guypaiss.com</a>
            </p>

            <hr style={{ border: 'none', borderTop: '1.5px solid #111', margin: '8px 0 12px 0' }} />

            {/* Technical Skills */}
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 6px 0', color: '#111' }}>Technical Skills</h2>
            <div style={{ fontSize: '11px', lineHeight: '1.55', color: '#333', marginBottom: '12px' }}>
              <p style={{ margin: '0 0 3px 0' }}><strong>Languages</strong> – Python, C, C++, TypeScript, PHP, SQL, Matlab, R.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>ML &amp; Deep Learning</strong> – PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, NumPy, Pandas, OpenCV, CUDA, CuPy; embedded C deployment.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>AI Engineering</strong> – Claude Code (agentic AI-assisted development), LLM &amp; generative AI APIs, prompt engineering, n8n, Zapier.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>Backend</strong> – FastAPI, Flask, Laravel, Node.js, Celery, Prefect, Redis, REST APIs.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>Frontend</strong> – React, Next.js.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>Databases</strong> – PostgreSQL, MySQL, SQLite.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>Cloud &amp; DevOps</strong> – GCP, Azure, Docker, Git, Linux.</p>
              <p style={{ margin: '0 0 3px 0' }}><strong>Visualisation</strong> – Power BI, Tableau.</p>
              <p style={{ margin: '0 0 0 0' }}><strong>Optics &amp; CAD</strong> – Zemax, Lumerical, SolidWorks.</p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '4px 0 10px 0' }} />

            {/* Profile */}
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 6px 0', color: '#111' }}>Profile</h2>
            <p style={{ fontSize: '11px', lineHeight: '1.55', color: '#333', margin: '0 0 12px 0' }}>
              AI Developer and Research Engineer with 5+ years of professional experience and a Master&apos;s of Science in Optics and Microscopy and deep interest in imaging technologies and AI image manipulation. Adept at analytical problem solving, versatile and can handle more than one layer of the stack.
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '4px 0 10px 0' }} />

            {/* Professional Experience */}
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px 0', color: '#111' }}>Professional Experience</h2>

            {/* Nohayo */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>Nohayo <span style={{ fontWeight: 400, color: '#555' }}>– Signal Processing &amp; AI Developer</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>March 2025 – Present</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Vancouver, BC (Remote)</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Fall Detection: built a three-stage detector (8-channel GRU classifier on 2 s windows, followed by inactivity and extended-idle confirmation) that runs in ~2.5 KB RAM and 16 KB flash, with 97.9% sensitivity, 91.9% accuracy, 0.915 AUC and an 11% false-positive rate across three public datasets.</li>
                <li style={{ marginBottom: '2px' }}>Vertical Oscillation: designed a two-stage estimator (harmonic-sum spectral cadence detection, combined with a PyTorch GRU ensemble and an optional per-user calibration; reached 0.63 cm MAE uncalibrated and 0.37 cm calibrated, and shipped it in C (219 KB flash, 61 KB RAM).</li>
                <li style={{ marginBottom: '2px' }}>Ground Contact Time: replaced a feature-based XGBoost pipeline with a GRU sequence model on accelerometer windows (5.8 ms MAE, R² 0.79 on running) and exported it to embedded C.</li>
                <li>Running Power: audited a GPS, accelerometer and barometer model, found evaluation leaks and re-scored it with leave-one-person-out validation; built a hybrid physics (GOVSS) + GRU/1D-CNN residual model reaching 14.5 W MAE (R² 0.81) against Garmin, and a reentrant C library.</li>
              </ul>
            </div>

            {/* Roomvu */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>Roomvu <span style={{ fontWeight: 400, color: '#555' }}>– Full-Stack &amp; AI Software Engineer</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>March 2026 – June 2026</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Vancouver, BC</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Develop across Roomvu&apos;s three-service platform: a Laravel 12 (PHP 8.4) core API with MariaDB and Redis, a Next.js/TypeScript agent dashboard, and a FastAPI, Celery and Prefect video-generation microservice.</li>
                <li style={{ marginBottom: '2px' }}>Built AI immersive property-tour videos: vertical/horizontal aspect ratios, pluggable overlay templates, cinematic camera styles and lip-synced talking-head narration using generative video models (Veo, Vidu, OmniHuman); sped up rendering with ffmpeg post-processing.</li>
                <li style={{ marginBottom: '2px' }}>Led a second voice-cloning engine (Fish Audio) alongside ElevenLabs end to end: async cloning, a side-by-side engine comparison UI, a staged rollout from test users to 10%, 30% and all agents, and backfill tooling.</li>
                <li style={{ marginBottom: '2px' }}>Extended the automated local-news and explainer video pipeline: Remotion templates, per-scene narration, weighted multi-dimension footage selection with prompt retries, and an admin panel showing per-run and per-video outcomes.</li>
                <li>Implemented AI image and video processing: background removal and replacement (BiRefNet, RMBG), validation of agent body-shot photos, and an avatar-capture flow that turns selfie recordings into voice clones and AI avatars.</li>
              </ul>
            </div>

            {/* Abili-Tech */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>Abili-Tech <span style={{ fontWeight: 400, color: '#555' }}>– AI Researcher Intern</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>September – February 2025</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Vancouver, BC</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Designing and implementing transformer (encoder-decoder) neural network for transforming text to sign language (ASL).</li>
                <li style={{ marginBottom: '2px' }}>Makes use of pretrained models for natural language processing (transformer for text/gloss), image-to-image translation (pix2pixHD), and body pose estimation.</li>
                <li>Experience building ML solutions with scikit-learn, TensorFlow, and PyTorch to build deep neural networks.</li>
              </ul>
            </div>

            {/* JobHuntingU */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>JobHuntingU <span style={{ fontWeight: 400, color: '#555' }}>– AI Integrator Internship</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>October 2024 – February 2025</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Vancouver, BC</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Automate company workflows using N8N, Mindpal, Zapier and Buffer to automatically generate and post social media advertisements.</li>
                <li style={{ marginBottom: '2px' }}>Perform web scraping to gather and analyze potential client&apos;s data.</li>
                <li>Working with webhooks, sockets, and RESTful APIs.</li>
              </ul>
            </div>

            {/* CashGrow */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>CashGrow <span style={{ fontWeight: 400, color: '#555' }}>– Full-Stack Engineer</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>August 2024 – February 2025</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Vancouver, Canada</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Experience working with PostgreSQL platforms as the app OLTP.</li>
                <li style={{ marginBottom: '2px' }}>Developing the app using TypeScript, Node.js and React as frontend and backend technologies.</li>
                <li style={{ marginBottom: '2px' }}>Containerized and distributed applications using Docker.</li>
                <li>Deployed the Backend project using Google Cloud Platform. Deployed the Frontend using Netlify.</li>
              </ul>
            </div>

            {/* TriEye */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>TriEye <span style={{ fontWeight: 400, color: '#555' }}>– Computer Vision Developer (start up)</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>February 2023 – April 2024</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Tel Aviv, IL</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Designed and implemented advanced algorithms for NUC, denoising, motion correction and image stitching.</li>
                <li style={{ marginBottom: '2px' }}>Developed NUC algorithms using SBNUC and LABNUC techniques, incorporating filters.</li>
                <li style={{ marginBottom: '2px' }}>Created an image stitching algorithm that leveraged Poisson reconstruction and GPU acceleration (CuPy), optimizing the seamless merging of image regions.</li>
                <li style={{ marginBottom: '2px' }}>Implemented motion correction algorithms using CUDA (CuPy), leveraging ego-motion estimation (homography) and image registration techniques (SIFT).</li>
                <li style={{ marginBottom: '2px' }}>Prototyped algorithms in Python (POC) and implemented them in C++ using OpenCV in Linux environment.</li>
                <li>Gained experience with IR imaging sensors and gated imaging techniques.</li>
              </ul>
            </div>

            {/* IAI */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>Israel Aerospace Industries <span style={{ fontWeight: 400, color: '#555' }}>– Computer Vision Developer</span></p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>December 2021 – February 2023</p>
              </div>
              <p style={{ fontSize: '10px', color: '#777', margin: '1px 0 4px 0' }}>Be&apos;er Yaakov, IL</p>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Led the design and implementation of algorithms for NUC, denoising and tracking.</li>
                <li style={{ marginBottom: '2px' }}>Developed motion correction algorithms using optical flow techniques.</li>
                <li style={{ marginBottom: '2px' }}>Designed tracking algorithms using RANSAC and Kalman filters.</li>
                <li style={{ marginBottom: '2px' }}>Worked with customers for proof of concept purposes while implementing cutting edge algorithms.</li>
                <li style={{ marginBottom: '2px' }}>Conducted research and prototyping for object detection and recognition algorithms.</li>
                <li>Performed data analysis queries using MySQL for large databases.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '4px 0 10px 0' }} />

            {/* Education */}
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 8px 0', color: '#111' }}>Education</h2>

            <div style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>Microsoft Azure AI900 Professional Certificate</p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>Vancouver, BC</p>
              </div>
            </div>

            <div style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>MSc with Honours in Semiconductor Spectroscopy</p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>Tel Aviv University, 2018–2021</p>
              </div>
              <ul style={{ fontSize: '11px', lineHeight: '1.5', color: '#333', margin: '2px 0 0 0', paddingLeft: '18px' }}>
                <li style={{ marginBottom: '2px' }}>Hands-on lab experience in designing and constructing optical microscope setups using Zemax and Thorlabs equipment.</li>
                <li style={{ marginBottom: '2px' }}>Integrated devices such as photodiodes, piezoelectric stages and lasers into custom C code; programmed a multithreaded UI in CVI (LabWindows). Developed UI using Qt and PyQt for Data Analysis.</li>
                <li style={{ marginBottom: '2px' }}>Designed and manufactured key laboratory components using 3D CAD programs such as SolidWorks and Autodesk.</li>
                <li>Publication: Time-resolved circularly polarized luminescence of Eu3+-based systems.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#111' }}>BSc in Computer Science and Chemistry</p>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>Tel Aviv University, 2011–2014</p>
              </div>
            </div>

            <ResumeActions />
          </div>
        </div>
      </Container>
    </SiteLayout>
  )
}
