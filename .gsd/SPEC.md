# SPEC.md — BeeStay Institutional Landing Page

> **Status**: `FINALIZED`

## Vision

Transform the current BeeStay landing page into a high-performance, conversion-optimized institutional website using Next.js static export. The page must effectively communicate BeeStay's value proposition to potential property owners (especially those who haven't purchased yet) while achieving >90 mobile performance score and professional SEO standards. Launch in 3 days for branch debut.

## Goals

1. **Achieve >90 Mobile Performance Score** — Optimize from current 67 score by improving LCP (5.3s→<2.5s) and FCP (5.2s→<1.8s)
2. **Maximize Lead Conversion** — Refine copy, value propositions, and Bitrix24 form integration to increase form submissions
3. **Professional SEO Foundation** — Implement best practices for organic discovery by property investors and owners
4. **Maintain Design Excellence** — Preserve the premium, modern aesthetic while improving performance and clarity

## Non-Goals (Out of Scope)

- Multi-page website architecture (keeping single-page conversion focus)
- Custom CMS or content management system
- Backend development or API integration (beyond Bitrix24 forms)
- A/B testing implementation (framework setup in future phase)
- BeeHouse property listing integration (mentioned as context, not in v1)
- Analytics beyond Google Analytics (keeping existing GA setup)

## Users

**Primary**: Property owners who don't own property yet but are considering investing
- Looking to buy AND have it professionally managed
- Need confidence in ROI and professional service quality
- Mobile-first research behavior (hence performance priority)

**Secondary**: Existing property owners seeking professional management
- Comparing BeeStay against DIY or amateur management
- Need transparency about contracts, costs, and processes

## Constraints

### Technical
- Static hosting only (no VPS available)
- Must use Next.js with static export (`next export`)
- Bitrix24 forms with custom CSS (forced integration)
- 3-day delivery timeline for branch debut

### Content
- All content in Portuguese (Brazil)
- Specific copy changes required (detailed feedback provided)
- Tone must be professional, transparent, avoid overpromising
- Must clarify realistic expectations (setup fees, contract terms, insurance responsibilities)

### Business
- Cannot promise 24h response time
- Cannot guarantee minimum ROI
- Must accurately represent contract flexibility and cancellation terms
- Must clarify what BeeStay provides vs. what owner provides

## Success Criteria

- [ ] Mobile PageSpeed Insights score ≥90
- [ ] Desktop PageSpeed Insights score ≥95
- [ ] LCP <2.5s on mobile
- [ ] FCP <1.8s on mobile
- [ ] All content updates from feedback implemented
- [ ] Bitrix24 form successfully integrated with custom styling
- [ ] Deployed to static hosting and accessible
- [ ] Logo size increased (per feedback item #1)
- [ ] FAQ updated with accurate information (7 questions revised)
- [ ] Service clarity improved in feature cards (item #6)
- [ ] Soft 51% claim implementation (item #2)
- [ ] Mobile mockup shows only graph, not absolute values (item #4)
- [ ] SEO meta tags optimized for target keywords
