'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'

export function ResumeActions() {
  const [generating, setGenerating] = useState(false)

  async function handleDownload() {
    setGenerating(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = document.getElementById('resume-content')
      if (!element) return

      const actionsEl = element.querySelector('[data-resume-actions]') as HTMLElement | null
      if (actionsEl) actionsEl.style.display = 'none'

      await html2pdf()
        .set({
          margin: [10, 10, 10, 10],
          filename: 'Guy-Paiss-Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        })
        .from(element)
        .save()

      if (actionsEl) actionsEl.style.display = ''
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div data-resume-actions className="mt-8 text-center print:hidden">
      <button
        onClick={handleDownload}
        disabled={generating}
        className="inline-flex items-center gap-2 justify-center rounded-full px-8 py-3 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-60"
      >
        <Download className="w-4 h-4" />
        {generating ? 'Generating PDF...' : 'Download as PDF'}
      </button>
    </div>
  )
}
