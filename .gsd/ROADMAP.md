# ROADMAP.md

> **Current Phase**: Not started
> **Milestone**: BeeStay Landing Page v1.0 — Branch Debut
> **Timeline**: 3 days (Launch: 2026-01-23)

## Must-Haves (from SPEC)

- [ ] Mobile performance score ≥90
- [ ] All content updates implemented (logo, copy, FAQ, mockup)
- [ ] Next.js static export deployed to hosting
- [ ] Bitrix24 form integration with custom CSS
- [ ] SEO optimization complete

## Phases

### Phase 1: Next.js Setup & Migration
**Status**: ✅ **COMPLETE**
**Objective**: Create Next.js project with static export, migrate existing HTML structure and assets
**Duration**: 4-6 hours
**Requirements**: Technical foundation

**Tasks**:
- ✅ Initialize Next.js project with TypeScript and Tailwind CSS
- ✅ Configure for static export (`output: 'export'`)
- ✅ Migrate existing HTML structure to React components
- ✅ Copy and optimize SVG assets
- ✅ Set up Image optimization with next/image
- ✅ Verify local build and export works

---

### Phase 2: Performance Optimization
**Status**: ⬜ Not Started
**Objective**: Achieve >90 mobile PageSpeed score by optimizing images, fonts, and critical rendering path
**Duration**: 4-6 hours
**Requirements**: Phase 1 complete

**Tasks**:
- Implement next/image for all images (logo, mockup assets)
- Optimize SVG files (Airbnb, Booking, Decolar, Expedia logos)
- Configure font optimization (Google Fonts preconnect, font-display: swap)
- Implement lazy loading for below-fold content
- Remove unused Tailwind CSS with purge
- Minimize JavaScript bundle size
- Add performance monitoring setup
- Test with PageSpeed Insights and fix issues until ≥90

---

### Phase 3: Content Refinement & SEO
**Status**: ✅ **COMPLETE**
**Objective**: Implement all content updates from stakeholder feedback and optimize for SEO
**Duration**: 3-4 hours
**Requirements**: Phase 1 complete

**Tasks**:
- ✅ Increase logo size (feedback #1)
- ✅ Update hero headline to softer approach (feedback #2 - options a/b/c)
- ✅ Update Hub card copy to "Um anúncio, múltiplas plataformas..." (feedback #5)
- ✅ Clarify service offerings in feature cards (feedback #6)
- ✅ Fix contract flexibility statement (feedback #7)
- ✅ Update all 5 FAQ questions with accurate answers
- ✅ Add 6 new FAQ questions from provided content
- ✅ Remove absolute financial values from mobile mockup (feedback #4)
- ✅ Remove "24h response" promise (feedback #3)
- ✅ Implement comprehensive meta tags (title, description, OG tags)
- ✅ Add structured data (JSON-LD) for organization and service
- ✅ Optimize for target keywords (gestão imóveis short stay, etc.)

---

### Phase 4: Bitrix24 Form Integration
**Status**: ⬜ Not Started
**Objective**: Replace static contact form with Bitrix24 embed and apply custom CSS styling
**Duration**: 2-3 hours
**Requirements**: Phase 1 complete, Bitrix24 form embed code available

**Tasks**:
- Get Bitrix24 form embed code from client
- Integrate Bitrix24 form in CTA section
- Apply custom CSS to match BeeStay design (bee-gold, rounded corners, etc.)
- Test form submission flow
- Ensure mobile responsiveness
- Verify form tracking in Bitrix24

---

### Phase 5: Build, Test & Deploy
**Status**: ⬜ Not Started
**Objective**: Final verification, static export, and deployment to Hostinger via GitHub
**Duration**: 2-3 hours
**Requirements**: All previous phases complete

**Tasks**:
- Run final PageSpeed Insights tests (mobile & desktop)
- Cross-browser testing (Chrome, Safari, Firefox)
- Mobile device testing (iOS, Android)
- Accessibility audit (basic WCAG compliance)
- Run `next build && next export`
- Create GitHub repository (if not exists)
- Set up Hostinger Git auto-deploy integration
- Push to GitHub and trigger deployment
- Verify production deployment on Hostinger
- Test Google Analytics tracking
- Document deployment process for future updates
