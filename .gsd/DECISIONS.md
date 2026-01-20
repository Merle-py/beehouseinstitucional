# DECISIONS.md — Architecture Decision Records

> Track important technical and strategic decisions made during the project.

## ADR-001: Next.js with Static Export

**Date**: 2026-01-20
**Status**: Accepted
**Context**: Client only has static hosting (no VPS), but needs better performance and SEO than raw HTML.
**Decision**: Use Next.js with `output: 'export'` configuration to generate fully static HTML/CSS/JS.
**Consequences**:
- ✅ Can use next/image optimization (will generate optimized static assets)
- ✅ Better developer experience with components
- ✅ Built-in performance optimizations
- ✅ Easy to add dynamic features later if hosting changes
- ❌ No server-side features (API routes, ISR, etc.)
- ❌ Image optimization limited to static generation time

---

## ADR-002: Single-Page Architecture

**Date**: 2026-01-20
**Status**: Accepted
**Context**: Landing page is conversion-focused, client confirmed single-page approach.
**Decision**: Keep single-page design with anchor navigation, do not create multi-page architecture.
**Consequences**:
- ✅ Focused conversion funnel
- ✅ Simpler navigation
- ✅ Better mobile UX (no page loads)
- ❌ Limited SEO keyword targeting opportunities
- ❌ Cannot segment different user journeys

---

## ADR-003: Bitrix24 Forms (Not Custom)

**Date**: 2026-01-20
**Status**: Accepted
**Context**: Client requires Bitrix24 CRM integration for lead management.
**Decision**: Use Bitrix24 embedded forms with custom CSS overrides instead of building custom form.
**Consequences**:
- ✅ Direct CRM integration
- ✅ No backend development needed
- ✅ Form validation handled by Bitrix24
- ❌ Less control over form behavior
- ❌ Potential styling limitations
- ❌ Dependency on Bitrix24 uptime

---

## ADR-004: Tailwind CSS Retention

**Date**: 2026-01-20
**Status**: Accepted
**Context**: Existing design uses Tailwind, team familiar with it.
**Decision**: Continue using Tailwind CSS in Next.js project.
**Consequences**:
- ✅ Consistent with existing design
- ✅ Fast development
- ✅ Built-in purge for production
- ✅ Excellent mobile-first utilities

---

## ADR-005: GitHub + Hostinger Auto-Deploy

**Date**: 2026-01-20
**Status**: Accepted
**Context**: Client currently manually uploads files to Hostinger, looking for automation.
**Decision**: Set up GitHub repository with automatic deployment to Hostinger (using Hostinger's Git integration or GitHub Actions).
**Consequences**:
- ✅ Automated deployment pipeline
- ✅ Version control for production builds
- ✅ Easy rollback capability
- ✅ No manual file uploads
- ⚠️ Need to configure Hostinger Git integration in Phase 5
- ⚠️ Build artifacts (`out/` folder) must be committed or deployed separately
