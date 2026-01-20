---
phase: 1
plan: 1
wave: 1
depends_on: []
files_modified:
  - package.json
  - next.config.js
  - tailwind.config.js
  - tsconfig.json
  - .gitignore
autonomous: true
user_setup: []

must_haves:
  truths:
    - "Next.js project initializes with TypeScript and Tailwind CSS"
    - "Static export is configured (output: 'export')"
    - "Can run dev server locally"
  artifacts:
    - "package.json with Next.js, TypeScript, Tailwind dependencies"
    - "next.config.js with output: 'export'"
    - "tailwind.config.js with bee-gold custom colors"
---

# Plan 1.1: Initialize Next.js Project with Static Export

<objective>
Bootstrap a new Next.js 14 project with TypeScript and Tailwind CSS configured for static export.

Purpose: Create the technical foundation for migrating the HTML landing page to a performant Next.js application.

Output: Working Next.js project with dev server, build process, and static export configured.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (requirements)
- .gsd/DECISIONS.md (ADR-001: Next.js static export, ADR-004: Tailwind CSS)
- landing-page-v3.html (current implementation to understand structure)
</context>

<tasks>

<task type="auto">
  <name>Initialize Next.js project with TypeScript and Tailwind</name>
  <files>package.json, next.config.js, tailwind.config.js, tsconfig.json</files>
  <action>
    Create a new Next.js 14 project with the following specifications:
    
    1. Initialize using: `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"`
       - Use TypeScript
       - Use Tailwind CSS
       - Use App Router (not Pages Router)
       - No src/ directory (keep app/ at root)
       - Set import alias to @/*
    
    2. Configure next.config.js for static export:
       ```js
       /** @type {import('next').NextConfig} */
       const nextConfig = {
         output: 'export',
         images: {
           unoptimized: true
         }
       }
       module.exports = nextConfig
       ```
    
    3. Configure tailwind.config.js with BeeStay custom colors (from existing HTML):
       ```js
       colors: {
         'bee-gold': '#f9b410',
         'bee-gold-dark': '#d99a0d',
         'bee-black': '#0a0a0a'
       }
       ```
    
    4. Add Google Fonts (Inter) to tailwind.config.js fontFamily.
    
    AVOID: Don't use create-next-app interactively - use flags for non-interactive setup.
    AVOID: Don't configure for server-side rendering - must use static export.
  </action>
  <verify>npm run dev starts without errors</verify>
  <done>Dev server runs on localhost:3000, Next.js project with TypeScript and Tailwind initialized</done>
</task>

<task type="auto">
  <name>Update .gitignore for Next.js</name>
  <files>.gitignore</files>
  <action>
    Add Next.js specific entries to .gitignore:
    ```
    # Next.js
    /.next/
    /out/
    
    # Dependencies
    /node_modules/
    
    # Production
    /build
    
    # Misc
    .DS_Store
    *.pem
    
    # Debug
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    
    # Local env files
    .env*.local
    
    # Vercel
    .vercel
    
    # TypeScript
    *.tsbuildinfo
    next-env.d.ts
    ```
    
    Keep existing .gsd/ and .agent/ entries if they exist.
  </action>
  <verify>git status shows .next/ and out/ are ignored</verify>
  <done>.gitignore file updated with Next.js entries</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] `npm run dev` starts development server successfully
- [ ] `npm run build` completes without errors
- [ ] `out/` directory is created with static HTML files
- [ ] Tailwind CSS bee-gold colors are available
- [ ] TypeScript compilation works
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] No build errors
- [ ] Static export produces HTML files in out/
</success_criteria>
