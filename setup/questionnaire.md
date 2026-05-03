# Onboarding Questionnaire: Design Thinking App Workspace

Read this file when the user types `setup`. First offer the user a fast path: they can answer "use defaults" to apply the default profile below and start immediately. If they want to customize, ask all questions in a single conversational pass. These answers configure workspace defaults and can be changed later by editing the listed files. Per-run details such as the specific project title and problem statement are collected by Stage 01.

## Default Profile

If the user says "use defaults", apply these values:

- `TARGET_USERS`: people affected by the specific problem being studied
- `PROBLEM_DOMAIN`: general digital product and service design
- `PRIMARY_PLATFORM`: responsive web app
- `CASE_STUDY_TONE`: concise, evidence-backed, professional, and portfolio-ready
- `RESEARCH_CONSTRAINTS`: use available desk research, clearly label assumptions, and create interview plans when real users are unavailable
- `APP_BUILD_ENABLED`: yes
- `TECH_STACK`: React, Vite, Tailwind, TypeScript
- `DATABASE_BACKEND`: none/frontend-only
- `AUTH_REQUIREMENTS`: no authentication unless a specific run requires it
- `DEPLOYMENT_TARGET`: Vercel
- `BRAND_STYLE`: clean, accessible, product-focused, and realistic rather than decorative
- `COLOR_PALETTE`: neutral base with one restrained accent color; final project-specific colors may override this per run
- `ACCESSIBILITY_LEVEL`: WCAG AA

---

### Q1: Who are the default target users for the UX projects this workspace will usually handle?
- Placeholder: `TARGET_USERS`
- Files: `shared/project-profile.md`
- Type: free text
- Default: people affected by the specific problem being studied

### Q2: What problem domain should this workspace assume by default?
- Placeholder: `PROBLEM_DOMAIN`
- Files: `shared/project-profile.md`
- Type: free text
- Default: general digital product and service design

### Q3: What primary platform should the design work target by default?
- Placeholder: `PRIMARY_PLATFORM`
- Files: `shared/project-profile.md`
- Type: selection
- Options: responsive web app, mobile web app, desktop web app, mobile app prototype
- Default: responsive web app

### Q4: What tone should the portfolio case study use?
- Placeholder: `CASE_STUDY_TONE`
- Files: `shared/project-profile.md`
- Type: free text
- Default: concise, evidence-backed, professional, and portfolio-ready

### Q5: What research constraints should agents assume unless a run says otherwise?
- Placeholder: `RESEARCH_CONSTRAINTS`
- Files: `shared/project-profile.md`
- Type: free text
- Default: use available desk research, clearly label assumptions, and create interview plans when real users are unavailable

### Q6: Should this workspace include the optional React app build stage by default?
- Placeholder: `APP_BUILD_ENABLED`
- Files: `shared/project-profile.md`
- Type: yes/no
- Default: yes
- If NO: remove `stages/07-react-app-build/` from the generated workspace and remove app-build routing from `AGENTS.md` and `CONTEXT.md`.

### Q7: What frontend stack should the app build stage use?
- Placeholder: `TECH_STACK`
- Files: `shared/project-profile.md`, `stages/07-react-app-build/references/build-conventions.md`
- Type: free text
- Default: React, Vite, Tailwind, TypeScript

### Q8: What backend or database should the app assume by default?
- Placeholder: `DATABASE_BACKEND`
- Files: `shared/project-profile.md`
- Type: selection
- Options: none/frontend-only, Supabase, Firebase
- Default: none/frontend-only

### Q9: What authentication requirements should the app assume by default?
- Placeholder: `AUTH_REQUIREMENTS`
- Files: `shared/project-profile.md`
- Type: free text
- Default: no authentication unless a specific run requires it

### Q10: What deployment target should the app be prepared for?
- Placeholder: `DEPLOYMENT_TARGET`
- Files: `shared/project-profile.md`
- Type: selection
- Options: local only, Vercel, Netlify, GitHub Pages, other static host
- Default: Vercel

### Q11: What brand or visual style should generated wireframes and apps prefer?
- Placeholder: `BRAND_STYLE`
- Files: `shared/design-system.md`
- Type: free text
- Default: clean, accessible, product-focused, and realistic rather than decorative

### Q12: What default color palette should the design system use?
- Placeholder: `COLOR_PALETTE`
- Files: `shared/design-system.md`
- Type: free text
- Default: neutral base with one restrained accent color; final project-specific colors may override this per run

### Q13: What accessibility level should all design and app work target?
- Placeholder: `ACCESSIBILITY_LEVEL`
- Files: `shared/design-system.md`, `stages/07-react-app-build/references/build-conventions.md`
- Type: selection
- Options: WCAG AA, WCAG AAA where practical, basic accessibility pass
- Default: WCAG AA

---

## After Onboarding

Replace all listed placeholders across the workspace. Then scan the entire workspace for remaining double-brace placeholder patterns. If any remain, ask for the missing information before continuing.

When setup is complete, tell the user: "Setup is complete. Start with Stage 01: Problem Intake."
