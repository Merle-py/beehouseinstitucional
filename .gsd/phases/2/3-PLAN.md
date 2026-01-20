---
phase: 2
plan: 3
wave: 2
depends_on: ["2.1", "2.2"]
files_modified:
  - app/layout.tsx
  - package.json
autonomous: false

must_haves:
  truths:
    - "Mobile PageSpeed Insights score >= 90"
    - "Desktop PageSpeed Insights score >= 95"
    - "All Core Web Vitals in green range"
  artifacts:
    - "PageSpeed report showing mobile score >= 90"
    - "Performance monitoring configured"
    - "Exported static site tested"
---

# Plan 2.3: PageSpeed Testing & Verification

<objective>
Measure performance with PageSpeed Insights, identify remaining issues, and verify >90 mobile score achievement.

Purpose: Empirically validate all optimizations and ensure production-ready performance
Output: Performance report confirming >90 mobile score, production deployment ready
</objective>

<context>
Load for context:
- .gsd/SPEC.md
- .gsd/ROADMAP.md
</context>

<tasks>

<task type="auto">
  <name>Export and test static build locally</name>
  <files>N/A (build artifacts)</files>
  <action>
    1. Run full production build and export:
       ```bash
       npm run build
       ```
    
    2. Verify export succeeded at `/out` directory
    
    3. Test locally with http-server:
       ```bash
       npx http-server out -p 8080
       ```
    
    4. Open http://localhost:8080 in browser, verify all functionality works
    
    AVOID: Testing dev server instead of production build
    AVOID: Skipping manual verification before PageSpeed testing
  </action>
  <verify>Static files in /out directory, http-server runs successfully, page loads without errors</verify>
  <done>Production export successful, tested locally, all features functional</done>
</task>

<task type="checkpoint:human-verify">
  <name>Run PageSpeed Insights and verify score</name>
  <files>N/A</files>
  <action>
    USER ACTION REQUIRED:
    
    1. Deploy static site to temporary hosting (Netlify drop, Vercel, or similar)
       OR use localhost tunnel for PageSpeed testing:
       ```bash
       npx localtunnel --port 8080
       ```
    
    2. Run PageSpeed Insights on the URL:
       - Go to: https://pagespeed.web.dev/
       - Enter deployed URL or localtunnel URL
       - Run test for MOBILE and DESKTOP
    
    3. Check scores:
       - Mobile score must be >= 90
       - Desktop score should be >= 95
       - All Core Web Vitals (LCP, FID/INP, CLS) in green
    
    4. If score < 90:
       - Review "Opportunities" section
       - Screenshot the report
       - Document remaining issues
    
    ITERATE: If score < 90, identify top 2-3 issues and create targeted fixes
  </action>
  <verify>PageSpeed Insights report screenshot showing mobile >= 90</verify>
  <done>Mobile score >= 90, desktop >= 95, Core Web Vitals all green</done>
</task>

<task type="auto">
  <name>Add Web Vitals monitoring</name>
  <files>
    - app/layout.tsx
  </files>
  <action>
    Add Next.js Web Vitals reporting for ongoing monitoring:
    
    1. Create app/lib/vitals.ts:
       ```ts
       export function reportWebVitals(metric: any) {
         if (process.env.NODE_ENV === 'production') {
           console.log(metric)
           // Future: Send to analytics endpoint
         }
       }
       ```
    
    2. Use in layout.tsx if Next.js App Router supports it, OR
       Add web-vitals library manually:
       ```bash
       npm install web-vitals
       ```
       
       Then in a client component:
       ```ts
       import { useEffect } from 'react'
       import { onCLS, onFID, onLCP } from 'web-vitals'
       
       useEffect(() => {
         onCLS(console.log)
         onFID(console.log)
         onLCP(console.log)
       }, [])
       ```
    
    AVOID: Running vitals in development - adds overhead
    AVOID: Blocking render to send metrics - use requestIdleCallback or similar
  </action>
  <verify>Console shows Web Vitals metrics in production build</verify>
  <done>Web Vitals monitoring active, metrics logged for future analysis</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] Production build exports successfully
- [ ] PageSpeed Insights mobile score >= 90
- [ ] PageSpeed Insights desktop score >= 95
- [ ] Core Web Vitals all in green range (Good)
- [ ] Web Vitals monitoring configured
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed (mobile >= 90)
- [ ] Phase 2 complete, ready for Phase 3
</success_criteria>
