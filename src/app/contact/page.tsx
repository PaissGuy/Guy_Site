'use client'

import { useState } from 'react'
import { Container } from '@/components/container'
import { SiteLayout } from '@/components/site-layout'
import { GradientBackground } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import { Button } from '@/components/ui/button'
import { Field, Input, Label, Textarea } from '@headlessui/react'
import { Linkedin, Github } from 'lucide-react'
import { clsx } from 'clsx'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || 'Contact Form Submission',
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      e.currentTarget.reset()

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SiteLayout variant="dark" className="overflow-x-hidden">
      <GradientBackground />
      <Container>
        <div className="mt-16 max-w-4xl">
          <Subheading>Contact</Subheading>
          <Heading as="h1" className="mt-2">
            Let's connect.
          </Heading>
          <Lead className="mt-6 max-w-3xl">
            Got an opportunity or looking to collaborate? I'd love to hear from you. Fill out the form below or reach out on social media.
          </Lead>
        </div>
      </Container>

      <Container className="mt-16 pb-24">
        <div className="max-w-4xl">
          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-accent-200">
            <Subheading className="mb-6">Send a message</Subheading>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <Field className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Your Name
                </Label>
                <Input
                  required
                  autoFocus
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className={clsx(
                    'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-accent-200/50',
                    'px-3 py-2 text-base/6 sm:text-sm/6 bg-white',
                    'focus:outline-2 focus:-outline-offset-1 focus:outline-accent-500',
                    'placeholder:text-gray-400 transition-all'
                  )}
                />
              </Field>

              {/* Email Field */}
              <Field className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  className={clsx(
                    'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-accent-200/50',
                    'px-3 py-2 text-base/6 sm:text-sm/6 bg-white',
                    'focus:outline-2 focus:-outline-offset-1 focus:outline-accent-500',
                    'placeholder:text-gray-400 transition-all'
                  )}
                />
              </Field>

              {/* Subject Field */}
              <Field className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Subject <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Project inquiry"
                  className={clsx(
                    'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-accent-200/50',
                    'px-3 py-2 text-base/6 sm:text-sm/6 bg-white',
                    'focus:outline-2 focus:-outline-offset-1 focus:outline-accent-500',
                    'placeholder:text-gray-400 transition-all'
                  )}
                />
              </Field>

              {/* Message Field */}
              <Field className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  required
                  name="message"
                  rows={6}
                  minLength={10}
                  placeholder="Tell me about your project..."
                  className={clsx(
                    'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-accent-200/50',
                    'px-3 py-2 text-base/6 sm:text-sm/6 bg-white resize-none',
                    'focus:outline-2 focus:-outline-offset-1 focus:outline-accent-500',
                    'placeholder:text-gray-400 transition-all'
                  )}
                />
              </Field>

              {/* Submit Button */}
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/guy-paiss/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-accent-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="https://github.com/PaissGuy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-accent-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </Container>
    </SiteLayout>
  )
}
