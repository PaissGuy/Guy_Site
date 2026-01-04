# Guy Paiss | Software Developer & Computer Vision Engineer - Personal Portfolio

A modern portfolio website showcasing software development and computer vision expertise, featuring intelligent systems built with machine learning and full-stack development.

## Features

- **Animated Sand Dunes Background** - Beautiful fluid animations with sage/forest green palette
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Dynamic Projects** - Markdown-based project management with automatic routing
- **Interactive Components** - 3D profile cards with holographic effects
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Shadcn UI
- **Fast Performance** - Optimized for speed and user experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI with Radix primitives
- **Animations**: Framer Motion
- **Content**: Markdown with gray-matter parsing
- **Icons**: Lucide React, Heroicons
- **Deployment**: Vercel

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
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with hero section
│   ├── about/             # About page
│   ├── projects/          # Projects listing and detail pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── container.tsx     # Layout container
│   ├── text.tsx          # Typography components
│   └── sand-dunes-background.tsx
├── content/              # Markdown content
│   └── projects/         # Project case studies
├── lib/                  # Utility functions
│   ├── utils.ts          # Tailwind class merging
│   └── projects.ts       # Project content management
└── public/               # Static assets
    └── images/           # Profile and project images
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
   technologies: ["Python", "OpenCV", "React"]
   featured: true
   image: "/projects/image.jpg"
   link: "https://github.com/..."
   ---
   ```
3. Write your project content in markdown
4. The project will automatically appear in the projects listing

## Customization

### Colors
The site uses a sage/forest green color palette. Custom colors defined in Tailwind:
- Sage greens for highlights and accents
- Forest greens for depth and shadows
- Moss greens for mid-tones

### Content
- Update personal information in page components
- Modify the hero headline in `app/page.tsx`
- Update contact information in `app/contact/page.tsx`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

---

Built by Guy Paiss - Vancouver, BC
