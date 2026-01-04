# Claude Development Guide for Amy Prompts

## Reference Architecture: Radiant-TS

This project should ALWAYS follow the architectural patterns and conventions from the **radiant-ts** project located at `/Users/AmyChou/repo-depo/radiant-ts`.

## Current Amy Prompts Architecture (v2)

### Component System
Following radiant-ts patterns, we have implemented a consistent component architecture:

#### Core Layout Components
- `Container` - Provides consistent max-width and responsive padding
- `GradientBackground` - Amy Prompts signature sand dunes background
- `Navbar` - Universal navigation with PlusGrid system
- `Footer` - Consistent footer across all pages

#### Typography Components  
- `Heading` - Semantic headings with consistent sizing
- `Subheading` - Section headers and labels
- `Lead` - Larger descriptive text for introductions

#### Navigation Components
- `Link` - Enhanced Link with Headless UI integration
- `PlusGrid`, `PlusGridRow`, `PlusGridItem` - Grid layout system
- `Logo` - Brand identity component

#### Background Components
- `SandDunesBackground` - Animated background for home page
- `Gradient` - Utility gradient backgrounds

#### Interactive Components
- `ProfileCard` - Advanced 3D interactive holographic profile card with flip animations, mouse tracking, and dynamic visual effects

### Page Layout Patterns

All pages follow this consistent structure:
```tsx
export default function PageName() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Section</Subheading>
        <Heading as="h1" className="mt-2">
          Page Title
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Page description
        </Lead>
      </Container>
      
      <Container className="mt-16 pb-24">
        {/* Page content */}
      </Container>
      
      <Footer />
    </main>
  )
}
```

### Import Order Standards
```typescript
// 1. Next.js and React
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// 2. External libraries (including analytics)
import { Analytics } from '@vercel/analytics/next'
import { Mail, Linkedin, Github } from 'lucide-react'
import { clsx } from 'clsx'

// 3. Internal components (layout first)
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

// 4. Typography and UI components
import { Heading, Lead, Subheading } from '@/components/text'
import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'

// 5. Utilities and data
import { getProjects } from '@/lib/projects'
```

### Analytics Integration
Vercel Analytics is integrated for comprehensive site tracking:

```tsx
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${megrim.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Features:**
- Automatic page view tracking
- Performance metrics monitoring  
- User interaction analytics
- Privacy-friendly (no cookies required)
- Seamless integration with Vercel deployments

## Key Architectural Patterns from Radiant-TS

### 1. Project Structure
- Use `src/` directory for all source code
- App Router structure: `src/app/`
- Components in `src/components/`
- Utilities in `src/lib/`
- Styles in `src/styles/`

### 2. TypeScript Configuration
- Strict TypeScript settings
- Path aliases using `@/*` for `./src/*`
- ES2017 target
- Verbatim module syntax enabled

### 3. Component Architecture
- Functional components with TypeScript
- Use `'use client'` directive for client components
- Proper component composition patterns
- Consistent prop interfaces

### 4. Styling Patterns
- Tailwind CSS v4+ (latest)
- Custom CSS in dedicated files
- Utility-first approach
- Consistent class naming
- Amy Prompts color palette: sand/violet/purple gradients

### 5. Navigation System
- Uses `@headlessui/react` Disclosure for mobile menu
- PlusGrid system for consistent layout
- Framer Motion animations for mobile menu transitions
- Clean separation of desktop/mobile navigation logic

## Development Workflow

### Before Making Changes
1. **Check radiant-ts patterns** - Reference similar components or layouts
2. **Follow component system** - Use established Container, Typography, Layout components
3. **Maintain aesthetic** - Keep Amy Prompts sand dunes theme and color palette
4. **Test thoroughly** - Run build and lint commands

### Adding New Pages
1. Follow the standard page layout pattern above
2. Use `Container` for consistent spacing
3. Include `GradientBackground` and `Navbar`
4. Use semantic typography components (`Heading`, `Lead`, `Subheading`)
5. End with `Footer`

### Adding New Components
1. Check if similar component exists in radiant-ts
2. Follow established patterns for props and composition
3. Use consistent TypeScript interfaces
4. Include proper accessibility attributes
5. Follow import order standards

### Code Quality Standards
- Always run `npm run lint` and `npm run build` before completing tasks
- Follow existing code style and patterns
- Use TypeScript strictly
- Prefer functional components
- No comments unless explicitly requested

### File Organization
- Group related components together
- Use index files for clean imports when beneficial
- Keep components focused and single-purpose
- Follow Next.js App Router conventions

### Dependencies
Current key dependencies:
- `@headlessui/react` - Accessible UI components
- `@heroicons/react` - Icon system
- `framer-motion` - Animations
- `clsx` - Conditional classes
- `lucide-react` - Additional icons

## Key Files to Reference

### In Radiant-TS
- `src/app/pricing/page.tsx` - Complex page structure
- `src/components/navbar.tsx` - Navigation composition
- `src/components/container.tsx` - Layout utilities
- `src/components/text.tsx` - Typography system

### In Amy Prompts
- `src/components/navbar.tsx` - Navigation implementation
- `src/components/container.tsx` - Layout container
- `src/components/text.tsx` - Typography components
- `src/components/profile-card.tsx` - Interactive 3D card component
- `src/app/page.tsx` - Home page with sand dunes and profile section
- `src/app/projects/page.tsx` - Standard page layout

## Commands to Run

- `npm run dev` - Development server
- `npm run build` - Production build (always run before completion)
- `npm run lint` - Linting (always run before completion)
- `npm run start` - Production server

## Aesthetic Guidelines

### Amy Prompts Brand Identity
- **Colors**: Sand dunes palette with purple/violet accents
- **Typography**: Clean, modern hierarchy with proper contrast
- **Animations**: Subtle sand dune floating animations on home page
- **Layout**: Spacious, content-focused design
- **Aesthetic**: Professional yet creative, AI-forward branding

### Maintaining Consistency
- Always use the established component system
- Keep the sand dunes aesthetic throughout
- Use consistent spacing patterns (`mt-16`, `pb-24`, etc.)
- Follow radiant-ts layout patterns but with Amy Prompts visual identity

## Best Practices for CLAUDE.md Updates

### When to Update This File
- After major architectural changes
- When adding new component patterns
- When establishing new conventions
- After dependency updates
- When changing development workflow

### What to Include
- Current architecture overview
- Component inventory and usage
- Code standards and patterns
- Import conventions
- Layout patterns
- Development workflow
- Key reference files

### Update Process
1. Document new patterns immediately after implementation
2. Include examples of proper usage
3. Reference specific files for patterns
4. Update component inventory
5. Maintain chronological sections (v2, v3, etc.)
6. Keep radiant-ts references current

## Page Structure and Content Patterns

### About Page Design (v2)
The About page follows radiant-ts company page patterns with Amy Prompts aesthetic:

**Page Structure:**
```tsx
// Hero Section - Introduction and core message
<Container>
  <Subheading>About</Subheading>
  <Heading as="h1">Always curious, always finding new ways to optimize...</Heading>
  <Lead>Creative technologist introduction</Lead>
</Container>

// Bio Section - Origin story with offset image grid
<Container className="mt-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
    {/* Story content */}
    {/* Offset grid of 4 images (radiant-ts pattern) */}
  </div>
</Container>

// Values/Methods Section - Card grid layout
<Container className="mt-32">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Value cards with icons and descriptions */}
  </div>
</Container>
```

**Design Principles:**
- Uses `mt-32` for major section spacing (radiant-ts pattern)
- Responsive grids: `grid-cols-1 lg:grid-cols-2` and `md:grid-cols-2 lg:grid-cols-3`
- Card styling: `bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30`
- Typography hierarchy with consistent `Subheading`, `Heading`, `Lead` components
- Color scheme: Purple accents (`text-purple-500`) with gray text hierarchy
- Content tone: Confident but approachable, creative and reflective

**Offset Image Grid Pattern:**
Adapted from radiant-ts company page for visual interest:
```tsx
<div className="-mx-4 grid grid-cols-2 gap-3 sm:-mx-8 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-6">
  <div className="aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10">
    {/* Image or placeholder content */}
  </div>
  <div className="-mt-6 aspect-square overflow-hidden rounded-xl shadow-lg outline-1 -outline-offset-1 outline-black/10 lg:-mt-24">
    {/* Offset image with negative top margin */}
  </div>
  {/* Pattern repeats for 4 total images */}
</div>
```
- **Offset effect**: Images 2 & 4 use `-mt-6 lg:-mt-24` for staggered layout
- **Responsive**: 2 cols mobile → 4 cols tablet → 2 cols desktop
- **Visual styling**: `aspect-square`, `rounded-xl`, `shadow-lg`, subtle outline


## Interactive Component Patterns

### ProfileCard Usage
The `ProfileCard` component demonstrates advanced interactive patterns:

```tsx
// Basic usage - card centers itself within container
<div className="flex justify-center lg:justify-start">
  <ProfileCard />
</div>
```

#### Features
- **3D Flip Animation**: Click to flip between front and back sides
- **Holographic Effects**: Dynamic gradients respond to mouse movement
- **Performance Optimized**: Uses `requestAnimationFrame` for smooth 60fps animations
- **Responsive**: Adapts to container size and touch devices
- **Accessible**: Keyboard navigation and screen reader support

#### Architecture
- Uses React hooks for state management (`useState`, `useRef`, `useCallback`, `useEffect`)
- Linear interpolation (lerp) for smooth tilt transitions
- Global mouse tracking for back-side 3D effects
- Hardware-accelerated CSS transforms for performance
- Proper animation cleanup and memory management

#### When to Use
- Portfolio showcase sections
- Interactive profile displays
- Hero sections requiring engagement
- Sections highlighting personal branding

Always ensure this file reflects the current state of the project architecture and serves as a comprehensive guide for consistent development.