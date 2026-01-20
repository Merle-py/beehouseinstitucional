---
phase: 1
plan: 2
wave: 2
depends_on: ["1.1"]
files_modified:
  - app/page.tsx
  - app/layout.tsx
  - app/globals.css
  - public/logo.svg
  - public/icone.svg
  - public/Airbnb.svg
  - public/Booking.svg
  - public/Decolar.svg
  - public/Expedia.svg
autonomous: true
user_setup: []

must_haves:
  truths:
    - "HTML structure is migrated to React components"
    - "All SVG assets are in public/ directory"
    - "Custom CSS is preserved in globals.css"
  artifacts:
    - "app/page.tsx with complete landing page structure"
    - "app/layout.tsx with proper metadata and Google Fonts"
    - "All SVG files in public/ directory"
---

# Plan 1.2: Migrate HTML Structure to React Components

<objective>
Convert the existing landing-page-v3.html structure into React components within Next.js App Router architecture.

Purpose: Transform the static HTML into a React-based single-page application while preserving all existing styles, structure, and functionality.

Output: Complete landing page rendered in Next.js with all sections, styles, and assets.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (requirements)
- landing-page-v3.html (source HTML to migrate)
- .gsd/DECISIONS.md (ADR-002: Single-page architecture)
</context>

<tasks>

<task type="auto">
  <name>Move SVG assets to public directory</name>
  <files>public/logo.svg, public/icone.svg, public/Airbnb.svg, public/Booking.svg, public/Decolar.svg, public/Expedia.svg</files>
  <action>
    Move all SVG files from project root to public/ directory:
    - logo.svg
    - icone.svg
    - Airbnb.svg
    - Booking.svg
    - Decolar.svg
    - Expedia.svg
    
    In Next.js, files in public/ are served from the root path /, so references will be:
    - /logo.svg instead of logo.svg
    - /Airbnb.svg instead of Airbnb.svg
    - etc.
    
    AVOID: Don't use next/image for these SVGs yet - that's Phase 2 optimization.
    Use regular <img> tags for now to match current HTML exactly.
  </action>
  <verify>ls public/ shows all 6 SVG files</verify>
  <done>All SVG assets moved to public/ directory</done>
</task>

<task type="auto">
  <name>Configure root layout with metadata and fonts</name>
  <files>app/layout.tsx</files>
  <action>
    Update app/layout.tsx to match the HTML's <head> configuration:
    
    ```tsx
    import type { Metadata } from 'next'
    import { Inter } from 'next/font/google'
    import './globals.css'
    import Script from 'next/script'
    
    const inter = Inter({ 
      subsets: ['latin'],
      display: 'swap',
    })
    
    export const metadata: Metadata = {
      title: 'BeeStay - Transforme Seu Imóvel em um Negócio Rentável',
      description: 'Gestão profissional de Short Stay com IA. Aumente em até 51% sua rentabilidade.',
      icons: {
        icon: 'https://cdn.bitrix24.com.br/b18304167/landing/67b/67b11dc89fa4fa4409c38fa3469a09e6/logotipo_13_3_1.png'
      }
    }
    
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="pt-BR" className="scroll-smooth">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          </head>
          <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
            {children}
            
            {/* Google Analytics */}
            <Script 
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-522STP288V"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-522STP288V');
              `}
            </Script>
            
            {/* Phosphor Icons */}
            <Script 
              src="https://unpkg.com/@phosphor-icons/web"
              strategy="beforeInteractive"
            />
          </body>
        </html>
      )
    }
    ```
    
    AVOID: Don't use next/font/local - use next/font/google for optimal loading.
    AVOID: Don't load Tailwind CDN - it's already configured via PostCSS.
  </action>
  <verify>Page loads with Inter font and correct metadata in browser tab</verify>
  <done>Root layout configured with metadata, fonts, and scripts</done>
</task>

<task type="auto">
  <name>Migrate HTML body to page.tsx</name>
  <files>app/page.tsx</files>
  <action>
    Convert the entire HTML body content from landing-page-v3.html into app/page.tsx as a React component.
    
    Structure:
    1. Create a single default export function HomePage()
    2. Add 'use client' directive at top (needed for interactive FAQ accordion)
    3. Convert all HTML sections:
       - Navigation (fixed header)
       - Hero section with phone mockup
       - Logo bar (Airbnb, Booking, etc.)
       - Features section (3 cards)
       - Diferenciais section (4 cards grid)
       - FAQ section (5 questions)
       - Final CTA section with form
       - Footer
    
    4. Convert className attributes (already in Tailwind format, no changes needed)
    5. Convert self-closing tags: <img> → <img />, <br> → <br />
    6. Convert href="#" to href="#section-id" (preserve anchor navigation)
    7. Keep all inline styles and custom CSS classes exactly as-is
    
    8. Add state management for FAQ accordion at top of component:
       ```tsx
       'use client'
       import { useState } from 'react'
       
       export default function HomePage() {
         const [openFaq, setOpenFaq] = useState<number | null>(null)
         
         const toggleFaq = (index: number) => {
           setOpenFaq(openFaq === index ? null : index)
         }
         // ... rest of component
       }
       ```
    
    9. Update FAQ buttons to use onClick={()  => toggleFaq(index)}
    10. Update img src paths: logo.svg → /logo.svg (add leading slash)
    
    AVOID: Don't create separate component files yet - keep everything in page.tsx for Phase 1.
    AVOID: Don't modify the structure or styles - exact migration only.
    AVOID: Don't use next/image - regular img tags for now (Phase 2).
  </action>
  <verify>npm run dev shows complete landing page with all sections visible</verify>
  <done>Landing page fully rendered in Next.js with all sections and functionality</done>
</task>

<task type="auto">
  <name>Migrate custom CSS to globals.css</name>
  <files>app/globals.css</files>
  <action>
    Copy all custom CSS from the <style> tag in landing-page-v3.html to globals.css:
    
    1. Keep all Tailwind directives at top:
       ```css
       @tailwind base;
       @tailwind components;
       @tailwind utilities;
       ```
    
    2. Add all custom styles below:
       - Scrollbar styles (::-webkit-scrollbar-)
       - .phone-mockup classes and media queries
       - .phone-notch classes
       - .phone-screen classes
       - .logo-scroll-container and .logo-scroll animation
       - .logo-item styles
       - .faq-item, .faq-answer, .faq-icon accordion styles
       - .glow-pulse animation and @keyframes
    
    3. Ensure all responsive breakpoints match Tailwind (md: 768px, lg: 1024px)
    
    AVOID: Don't convert custom CSS to Tailwind utilities - keep as-is in globals.css.
    AVOID: Don't remove any CSS - complete migration for now, optimize in Phase 2.
  </action>
  <verify>Custom animations (FAQ accordion, glow-pulse) work correctly</verify>
  <done>All custom CSS migrated to globals.css</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] All 6 SVG files accessible at /logo.svg, /Airbnb.svg, etc.
- [ ] Page title and meta description render correctly
- [ ] Inter font loads from Google Fonts
- [ ] All sections render: nav, hero, logo bar, features, diferenciais, FAQ, CTA, footer
- [ ] FAQ accordion opens/closes on click
- [ ] Phone mockup displays correctly with all responsive sizes
- [ ] Glow pulse animation works on CTA button
- [ ] Google Analytics script loads
- [ ] Phosphor Icons display correctly
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Page renders identically to original HTML
- [ ] No console errors in browser
- [ ] All interactive elements work (FAQ, links)
</success_criteria>
