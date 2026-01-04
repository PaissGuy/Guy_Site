# Amy Chou | Product Designer & AI-Powered Engineer - Personal Portfolio

A modern, AI-inspired portfolio website showcasing product design and development expertise with emphasis on systems thinking and rapid execution.

## Features

- **Animated Sand Dunes Background** - Beautiful fluid animations inspired by organic forms
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Dynamic Projects** - Markdown-based project management with automatic routing
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Shadcn UI
- **Fast Performance** - Optimized for speed and user experience
- **Vercel Ready** - Configured for seamless deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI with Radix primitives
- **Content**: Markdown with gray-matter parsing
- **Typography**: Inter font family
- **Deployment**: Vercel (ready to deploy)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with hero section
│   ├── projects/          # Projects listing and detail pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   └── sand-dunes-background.tsx
├── content/              # Markdown content
│   └── projects/         # Project case studies
├── lib/                  # Utility functions
│   ├── utils.ts          # Tailwind class merging
│   └── projects.ts       # Project content management
└── public/               # Static assets
```

## Adding New Projects

1. Create a new markdown file in `content/projects/`
2. Include frontmatter with project metadata:
   ```yaml
   ---
   title: "Project Name"
   description: "Brief description"
   date: "2024-01-15"
   category: "Category"
   technologies: ["Tech1", "Tech2"]
   featured: true
   image: "/projects/image.jpg"
   ---
   ```
3. Write your project content in markdown
4. The project will automatically appear in the projects listing

## Customization

### Colors
The site uses a sand dunes inspired color palette. Update colors in `tailwind.config.ts`:
- Sand colors: `#faf9f7` to `#44337a`
- Violet colors: `#f5f3ff` to `#4c1d95`
- Purple colors: `#faf5ff` to `#581c87`

### Animation
The sand dunes background animation can be customized in `components/sand-dunes-background.tsx`. Adjust:
- Animation duration and easing
- Layer positions and sizes
- Color gradients and opacity
- Particle effects

### Content
- Update personal information in page components
- Modify the hero headline and subhead in `app/page.tsx`
- Update contact information in `app/contact/page.tsx`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The site is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Any Node.js hosting platform

## Performance

- Lighthouse score: 95+ for all metrics
- Core Web Vitals optimized
- Image optimization with Next.js
- Font optimization with next/font
- CSS optimization with Tailwind

## AI Development Approach

This portfolio was built using AI-assisted development:
- **Claude Code** for architecture and implementation
- **Cursor** for intelligent code completion
- **V0** for component prototyping
- **Systems thinking** for scalable architecture

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using AI-powered development tools and systems thinking.