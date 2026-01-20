---
phase: 2
plan: 2
wave: 1
depends_on: []
files_modified:
  - tailwind.config.ts
  - postcss.config.js
  - package.json
autonomous: true

must_haves:
  truths:
    - "Unused Tailwind CSS is purged from production bundle"
    - "CSS bundle size is minimized"
    - "JavaScript bundle is analyzed and optimized"
  artifacts:
    - "tailwind.config.ts has proper content paths for purge"
    - "Production CSS bundle < 50KB"
---

# Plan 2.2: Bundle Size Optimization

<objective>
Minimize CSS and JavaScript bundle sizes by removing unused code and optimizing build configuration.

Purpose: Reduce Transfer size and Total Blocking Time (TBT) for faster page loads
Output: Optimized production bundles with minimal unused code
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- tailwind.config.ts
- next.config.ts
- package.json
</context>

<tasks>

<task type="auto">
  <name>Optimize Tailwind CSS purge configuration</name>
  <files>
    - tailwind.config.ts
  </files>
  <action>
    Update Tailwind config to ensure all unused styles are purged:
    
    1. Verify content paths include ALL component files:
       ```ts
       content: [
         './pages/**/*.{js,ts,jsx,tsx,mdx}',
         './components/**/*.{js,ts,jsx,tsx,mdx}',
         './app/**/*.{js,ts,jsx,tsx,mdx}',
       ]
       ```
    
    2. Add safelist for dynamic classes if needed (rare):
       ```ts
       safelist: ['bg-bee-gold', 'text-bee-gold', 'border-bee-gold']
       ```
    
    3. Enable JIT mode (should be default in Tailwind 3+):
       ```ts
       mode: 'jit'
       ```
    
    AVOID: Adding entire class name patterns to safelist - defeats purge purpose
    AVOID: Missing content paths - causes missing styles in production
  </action>
  <verify>npm run build && ls -lh .next/static/css/*.css shows CSS < 50KB</verify>
  <done>Production CSS bundle is minimal, all used styles present, no unused styles</done>
</task>

<task type="auto">
  <name>Analyze and optimize JavaScript bundle</name>
  <files>
    - next.config.ts
    - package.json
  </files>
  <action>
    Add bundle analysis and optimization:
    
    1. Install bundle analyzer:
       ```bash
       npm install --save-dev @next/bundle-analyzer
       ```
    
    2. Update next.config.ts:
       ```ts
       const nextConfig = {
         output: 'export',
         // ... existing config
         
         // Production optimizations
         compiler: {
           removeConsole: process.env.NODE_ENV === 'production',
         },
         
         // Optional: Add bundle analyzer
         // Wrap with withBundleAnalyzer if installed
       }
       ```
    
    3. Run analyzer to identify large dependencies:
       ```bash
       ANALYZE=true npm run build
       ```
    
    4. Remove any unused dependencies from package.json
    
    AVOID: Removing console.log in development - hinders debugging
    AVOID: Premature micro-optimizations without measuring first
  </action>
  <verify>npm run build completes, check build output for bundle sizes</verify>
  <done>No unused dependencies in package.json, console removed from production, bundles analyzed</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Tailwind purge working (production CSS < 50KB)
- [ ] No unused dependencies
- [ ] Console logs removed from production
- [ ] Bundle sizes reasonable for static export
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Production build completes successfully
</success_criteria>
