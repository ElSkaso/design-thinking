---
name: frontend-skill
description: Use when building a visually strong website, app, prototype, demo, or UI. Guides frontend work toward intentional composition, restrained app surfaces, clear hierarchy, real content, tasteful motion, and visual QA instead of generic cards, clutter, or decorative filler.
metadata:
  short-description: Build polished, intentional frontend UI
---

# Frontend Skill

Use this skill during Stage 07 app build, or any task where frontend quality depends on art direction, hierarchy, layout restraint, imagery, copy, interaction, motion, and verification.

## Working Model

Before building, write:

- Visual thesis: one sentence describing mood, material, density, and energy.
- Content plan: what the user sees first, what supports it, what deepens it, and what action follows.
- Interaction thesis: two or three motions or interaction details that improve hierarchy or affordance.

Each screen or section gets one job, one dominant visual idea, and one primary takeaway or action.

## App UI Defaults

For product and prototype surfaces, favor:

- Calm surface hierarchy
- Strong typography and spacing
- Few colors
- Dense but readable information
- Minimal chrome
- Cards only when the card is the interaction
- Navigation, primary workspace, and secondary context arranged clearly
- One clear accent for action or state

Avoid:

- Dashboard card mosaics by default
- Thick borders around every region
- Decorative gradients behind routine product UI
- Multiple competing accent colors
- Ornamental icons that do not improve scanning
- Marketing-style hero sections inside operational app surfaces

If a panel can become plain layout without losing meaning, remove the card treatment.

## Landing And Portfolio Surfaces

Use landing-page composition only when the task actually calls for a landing, portfolio, or promotional surface.

Default sequence:

1. Hero: brand or product, promise, CTA, and one dominant visual.
2. Support: one concrete feature, offer, or proof point.
3. Detail: atmosphere, workflow, product depth, or story.
4. Final CTA: convert, start, visit, or contact.

Hero rules:

- One composition only.
- Brand or product must be unmistakable in the first screen.
- Use a dominant visual plane when the brief calls for a visually led landing page.
- No hero cards, stat strips, logo clouds, pill clusters, or floating dashboards by default.
- Keep headlines readable on desktop and mobile.
- Preserve strong contrast and clear tap targets.

## Design System

Define design tokens before broad implementation:

- Background
- Surface
- Primary text
- Muted text
- Accent
- Border
- Focus
- Display, headline, body, and caption text roles
- Spacing and radius scale

Use shared constants or CSS variables instead of repeating hardcoded values.

## Imagery

Imagery must do narrative work.

- Use real or generated imagery only when it clarifies product, place, context, or mood.
- Prefer in-context imagery over abstract filler.
- Choose images with stable tonal areas when text sits over them.
- Do not use images with embedded UI frames, signage, logos, or typographic clutter unless specifically required.
- Avoid collages when separate images would communicate more clearly.

## Copy

- Write in product language, not design commentary.
- Keep supporting copy short.
- Cut repetition between sections.
- Do not expose prompt language or implementation notes in the UI.
- For app surfaces, prioritize orientation, status, scope, and action over mood.
- If a sentence sounds like a homepage ad but the screen is an app workspace, rewrite it as utility copy.

## Motion

Use motion to improve presence and hierarchy, not to decorate.

Good motion:

- Reveals structure
- Clarifies state changes
- Improves affordance
- Feels smooth on mobile
- Is fast, restrained, and consistent

Use Framer Motion when available for section reveals, shared layout transitions, drawers, modals, menus, scroll-linked effects, and state transitions.

Remove motion that is ornamental only.

## Verification

Before finishing:

- Run the app locally when possible.
- Check desktop and mobile viewports.
- Verify that text fits its containers.
- Check that fixed or floating elements do not cover important content.
- Confirm main flows, empty states, loading states, success states, and error states where relevant.
- Confirm accessible contrast, focus states, labels, and tap targets.

## Litmus Checks

- Is the core product or workflow clear in the first screen?
- Is there one strong visual hierarchy?
- Can the UI be understood by scanning headings, labels, and actions?
- Does each section or screen have one job?
- Are cards actually necessary?
- Does motion improve hierarchy or usability?
- Would the design still feel strong if decorative shadows were removed?

## Source

Adapted for this workspace from OpenAI's curated `frontend-skill` and the OpenAI Developers article "Designing delightful frontends with GPT-5.4".

