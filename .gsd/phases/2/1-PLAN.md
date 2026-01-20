---
phase: 2
plan: 1
wave: 1
depends_on: []
files_modified:
  - next.config.ts
  - app/layout.tsx
  - app/page.tsx
  - package.json
autonomous: true

must_haves:
  truths:
    - "All images use next/image with proper optimization"
    - "Fonts are preloaded with font-display: swap"
    - "Below-fold content is lazy-loaded"
  artifacts:
    - "next.config.ts configured for image optimization"
    - "Font preconnect tags in layout.tsx"
    - "Lazy loading implemented for FAQ and contact sections"
---

# Plan 2.1: Core Performance Optimizations

<objective>
Implement critical Next.js performance best practices: image optimization, font loading optimization, and lazy loading for below-fold content.

Purpose: Improve Core Web Vitals (LCP, CLS, FCP) by leveraging Next.js built-in optimizations
Output: Optimized images, fonts, and lazy-loaded components ready for measurement
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- app/layout.tsx
- app/page.tsx
- next.config.ts
</context>

<tasks>

<task type="auto">
  <name>Optimize all images with next/image</name>
  <files>
    - app/page.tsx
    - next.config.ts
  </files>
  <action>
    Replace ALL img tags with next/image Image component:
    
    1. Import Image from 'next/image' at top of page.tsx
    2. Replace:
       - Logo: <img src="/logo.svg" /> → <Image src="/logo.svg" alt="BeeStay" width={X} height={Y} priority />
       - Platform logos (Airbnb, Booking, etc): Add width/height based on current CSS
    3. Update next.config.ts:
       ```ts
       images: {
         formats: ['image/avif', 'image/webp'],
         dangerouslyAllowSVG: true,
         contentDispositionType: 'attachment',
         contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
       }
       ```
    
    AVOID: Using unoptimized or fill layout without proper parent constraints - causes CLS
    AVOID: Forgetting width/height props - causes layout shift
  </action>
  <verify>npm run build -- successfully compiles with Image components</verify>
  <done>All <img> tags replaced with <Image>, build successful, no layout shift warnings</done>
</task>

<task type="auto">
  <name>Optimize font loading</name>
  <files>app/layout.tsx</files>
  <action>
    Update font loading in layout.tsx:
    
    1. If using Google Fonts via link tags, add preconnect:
       ```tsx
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
       ```
    
    2. Add font-display: swap to all @font-face or link tags:
       ```tsx
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
       ```
    
    3. OR migrate to next/font/google (preferred):
       ```tsx
       import { Inter } from 'next/font/google'
       const inter = Inter({ subsets: ['latin'], display: 'swap' })
       // Use in className={inter.className}
       ```
    
    AVOID: Blocking font loads - use font-display: swap always
    AVOID: Loading multiple font weights not used (increases Transfer size)
  </action>
  <verify>Inspect page source shows preconnect tags OR next/font implementation</verify>
  <done>Fonts load without blocking render, font-display: swap confirmed</done>
</task>

<task type="auto">
  <name>Implement lazy loading for below-fold content</name>
  <files>app/page.tsx</files>
  <action>
    Add React lazy loading for FAQ and Contact sections:
    
    1. Import at top:
       ```tsx
       import dynamic from 'next/dynamic'
       ```
    
    2. Create lazy-loaded components:
       ```tsx
       const FAQSection = dynamic(() => import('./components/FAQSection').then(mod => ({ default: mod.FAQSection })), {
         loading: () => <div className="min-h-screen" />,
         ssr: true
       })
       ```
    
    3. Extract FAQ array and rendering logic into separate component file
    4. Apply same pattern to Contact form section
    
    AVOID: Using { ssr: false } - hurts SEO
    AVOID: Not providing loading placeholder - causes CLS
  </action>
  <verify>npm run build shows code splitting for FAQ and Contact, browser DevTools shows delayed load</verify>
  <done>FAQ and Contact sections lazy-load after hero, no CLS, bundle size reduced</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] next/image used for all images
- [ ] Fonts preloaded with font-display: swap
- [ ] Below-fold sections lazy-load
- [ ] npm run build succeeds
- [ ] No console warnings about layout shift
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Build successful with no warnings
</success_criteria>
