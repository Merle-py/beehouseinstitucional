# Phase 2 Planning Summary

**Phase**: 2 - Performance Optimization  
**Plans Created**: 3 (already exist)  
**Wave Structure**:
- Wave 1: Plan 2.1 (Core Performance Optimizations), Plan 2.2 (Bundle Size Optimization)
- Wave 2: Plan 2.3 (PageSpeed Testing & Verification)

## Plan Overview

### Plan 2.1: Core Performance Optimizations (Wave 1)
**Objective**: Implement critical Next.js performance best practices

**Tasks**:
1. **[auto]** Optimize all images with next/image
   - Replace all `<img>` tags with Next.js `<Image>` component
   - Configure `next.config.ts` for image optimization (AVIF, WebP)
   - Add proper width/height to prevent CLS
   - Use `priority` prop for above-fold images (logo)

2. **[auto]** Optimize font loading
   - Add preconnect tags for Google Fonts
   - Implement `font-display: swap` for all fonts
   - OR migrate to `next/font/google` (preferred)

3. **[auto]** Implement lazy loading for below-fold content
   - Use `dynamic` from Next.js for FAQ and Contact sections
   - Extract sections into separate components
   - Provide loading placeholders to prevent CLS

**Must-Haves**:
- All images use next/image with proper optimization
- Fonts preloaded with font-display: swap
- Below-fold content lazy-loaded

**Dependencies**: None  
**Files Modified**: `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `package.json`

---

### Plan 2.2: Bundle Size Optimization (Wave 1)
**Objective**: Minimize CSS and JavaScript bundle sizes

**Tasks**:
1. **[auto]** Optimize Tailwind CSS purge configuration
   - Verify content paths include all component files
   - Enable JIT mode (Tailwind 3+)
   - Add safelist only for dynamic classes if needed
   - Target: Production CSS < 50KB

2. **[auto]** Analyze and optimize JavaScript bundle
   - Install `@next/bundle-analyzer`
   - Configure `next.config.ts` to remove console logs in production
   - Run bundle analyzer to identify large dependencies
   - Remove unused dependencies from `package.json`

**Must-Haves**:
- Unused Tailwind CSS purged from production bundle
- CSS bundle size minimized (< 50KB)
- JavaScript bundle analyzed and optimized

**Dependencies**: None  
**Files Modified**: `tailwind.config.ts`, `postcss.config.js`, `next.config.ts`, `package.json`

---

### Plan 2.3: PageSpeed Testing & Verification (Wave 2)
**Objective**: Measure performance and verify >90 mobile score achievement

**Tasks**:
1. **[auto]** Export and test static build locally
   - Run `npm run build` for production export
   - Verify `/out` directory creation
   - Test locally with `npx http-server out -p 8080`
   - Verify all functionality works

2. **[checkpoint:human-verify]** Run PageSpeed Insights and verify score
   - Deploy to temporary hosting OR use localtunnel
   - Run PageSpeed Insights on deployed URL
   - Verify scores:
     - Mobile ≥ 90
     - Desktop ≥ 95
     - All Core Web Vitals in green
   - If score < 90, identify top issues and iterate

3. **[auto]** Add Web Vitals monitoring
   - Install `web-vitals` library
   - Create vitals reporting in client component
   - Log CLS, FID/INP, LCP metrics
   - Configure for production-only monitoring

**Must-Haves**:
- Mobile PageSpeed Insights score ≥ 90
- Desktop PageSpeed Insights score ≥ 95
- All Core Web Vitals in green range

**Dependencies**: Plans 2.1 and 2.2  
**Files Modified**: `app/layout.tsx`, `package.json`

---

## Execution Order

1. **Execute Plans 2.1 and 2.2 in parallel** (Wave 1):
   ```
   /execute 2.1
   /execute 2.2
   ```
   These can run concurrently as they modify different files.

2. **Execute Plan 2.3** (Wave 2):
   ```
   /execute 2.3
   ```
   Requires 2.1 and 2.2 to be complete for accurate performance testing.

---

## Success Criteria (from SPEC.md)

Phase 2 is complete when:
- [ ] Mobile PageSpeed Insights score ≥90
- [ ] Desktop PageSpeed Insights score ≥95
- [ ] LCP <2.5s on mobile
- [ ] FCP <1.8s on mobile
- [ ] All images optimized with next/image
- [ ] Fonts optimized with preconnect/font-display
- [ ] Below-fold content lazy-loaded
- [ ] CSS bundle < 50KB
- [ ] JavaScript bundle analyzed and optimized
- [ ] Web Vitals monitoring configured

---

## Notes

- **Image optimization**: All `<img>` tags will be replaced with Next.js `<Image>` component for automatic optimization
- **Font optimization**: Prefer `next/font/google` over manual Google Fonts links
- **Lazy loading**: FAQ and Contact sections will be code-split for faster initial load
- **Bundle analysis**: Use `ANALYZE=true npm run build` to visualize bundle composition
- **PageSpeed testing**: Requires temporary deployment or localhost tunnel for testing
- **Iteration**: If PageSpeed score < 90, identify top 2-3 issues and create targeted fixes

---

**Ready to execute**: Run `/execute 2.1` and `/execute 2.2` to begin Phase 2
