---
phase: 1
plan: 3
wave: 3
depends_on: ["1.2"]
files_modified:
  - app/page.tsx
  - app/layout.tsx
autonomous: true
user_setup: []

must_haves:
  truths:
    - "Build completes successfully with next build"
    - "Static HTML files are generated in out/ directory"
    - "Exported site functions identically to dev server"
  artifacts:
    - "out/index.html exists"
    - "out/_next/static/ contains assets"
    - "All SVG files copied to out/"
---

# Plan 1.3: Verify Build and Static Export

<objective>
Validate that the Next.js migration builds successfully and exports to static HTML/CSS/JS files ready for deployment.

Purpose: Ensure the static export process works correctly before proceeding to performance optimization and content updates.

Output: Verified production build with functional static export in out/ directory.
</objective>

<context>
Load for context:
- .gsd/SPEC.md (static hosting requirement)
- .gsd/DECISIONS.md (ADR-001: Next.js static export)
- next.config.js (verify output: 'export' is set)
</context>

<tasks>

<task type="auto">
  <name>Run production build and verify static export</name>
  <files>out/index.html, out/_next/</files>
  <action>
    Execute the full static export pipeline and verify output:
    
    1. Clean previous builds:
       ```bash
       rm -rf .next out
       ```
    
    2. Run production build:
       ```bash
       npm run build
       ```
       This should compile TypeScript, optimize assets, and export static files.
    
    3. Verify out/ directory structure:
       - out/index.html should exist
       - out/_next/static/ should contain CSS and JS chunks
       - All SVG files should be in out/
       - No server-side code should be present
    
    4. Check build output for warnings or errors:
       - No TypeScript errors
       - No missing dependencies
       - No dynamic rendering warnings (everything should be static)
    
    AVOID: Don't use `next export` command - it's deprecated. `next build` with output: 'export' does export automatically.
    AVOID: Don't commit the out/ directory - it's in .gitignore and should be regenerated for deployment.
  </action>
  <verify>npm run build completes successfully, out/index.html exists</verify>
  <done>Production build completes with static HTML in out/ directory</done>
</task>

<task type="auto">
  <name>Test static export locally</name>
  <files>N/A</files>
  <action>
    Serve the static export locally to verify it functions correctly:
    
    1. Install serve globally if not present:
       ```bash
       npm install -g serve
       ```
    
    2. Serve the out/ directory:
       ```bash
       npx serve out
       ```
       This should start a local server (typically http://localhost:3000 or 5000)
    
    3. Open browser and verify:
       - Page loads completely
       - All images/SVGs load
       - FAQ accordion works
       - All links navigate correctly
       - No console errors
       - Google Analytics script loads (check Network tab)
       - Custom CSS (phone mockup, glow pulse) works
    
    4. Test anchor navigation:
       - Click navigation links (#home, #recursos, etc.)
       - Verify smooth scroll to sections works
    
    AVOID: Don't test with `npm run dev` - that's the dev server, not static export.
    Must test the actual out/ directory to simulate production deployment.
  </action>
  <verify>Static site loads and functions correctly when served from out/</verify>
  <done>Static export verified working locally with all features functional</done>
</task>

<task type="checkpoint:human-verify">
  <name>Visual verification of migrated page</name>
  <files>N/A</files>
  <action>
    User should visually compare:
    1. Original landing-page-v3.html (open in browser)
    2. Static export from out/ (served via npx serve out)
    
    Verify visual parity:
    - All sections present and identical
    - Colors match (bee-gold, etc.)
    - Typography matches (Inter font)
    - Spacing and layout identical
    - Phone mockup renders correctly
    - FAQ animation works
    - Responsive behavior matches on mobile sizes
    
    If differences found, document them for immediate fix.
  </action>
  <verify>User confirms visual parity between original HTML and Next.js export</verify>
  <done>User approves migration quality, no visual regressions</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] `npm run build` completes without errors
- [ ] out/index.html file exists and is ~50KB
- [ ] Static export loads correctly in browser
- [ ] All interactive features work (FAQ accordion)
- [ ] All assets load (SVGs, fonts, scripts)
- [ ] No console errors when running static export
- [ ] Anchor navigation works
- [ ] Page is visually identical to original HTML
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] Build process is reproducible
- [ ] Static export is deployment-ready
- [ ] User approves visual quality
</success_criteria>
