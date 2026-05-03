# Stage 07: React App Build

Build the optional local React app from approved wireframes.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Wireframes | `../05-ideation-and-wireframes/output/[project-slug]-ideation-wireframes.md` | Full file | App scope |
| Case study | `../06-case-study-assembly/output/[project-slug]-ux-case-study.md` | Design decisions and final direction | UX rationale |
| Shared context | `../../shared/project-profile.md` | App Defaults | Stack and deployment |
| Shared context | `../../shared/design-system.md` | Full file | Design constants |
| Skill | `../../skills/frontend-skill/SKILL.md` | Full file | Frontend quality guidance |
| Shared context | `../../SOUL.md` | Full file | Workspace credo |
| Reference | `references/node-react-setup.md` | Full file | Tool prerequisites |
| Reference | `references/build-conventions.md` | Full file | Code build rules |

## Process

1. Confirm app build is enabled and Stage 05 approval was given.
2. Define visual thesis, content plan, and interaction thesis.
3. Translate wireframe requirements into React/Vite/Tailwind structure.
4. Implement the local app using shared design constants.
5. Add realistic content, states, and interactions.
6. Run build and browser checks when tools are available.
7. Write run instructions and deployment notes.
8. If refining an existing app, append an entry to `output/[project-slug]-app-refinements.md`.
9. Run the audit, revise if needed, then save to output/.

## App Refinements

Use app refinement entries when Stage 07 app behavior, flow, UI, copy, visual direction, or implementation is changed after the original app build.

Each app has its own refinement log:

```text
output/[project-slug]-app-refinements.md
```

Each entry should include:

- Trigger: What prompted the adjustment.
- Changed: What changed in the app.
- UX reason: Why the change improves the product experience.
- App files: Main files touched.
- Verification: Build, browser test, responsive check, or other QA performed.
- Open follow-up: Remaining app-specific question or `None`.

## Audit

| Check | Pass Condition |
|-------|---------------|
| Scope fidelity | App matches approved wireframes and feature scope |
| Frontend skill | Visual thesis, content plan, and interaction thesis are reflected in the UI |
| Build health | App installs and builds when tools are available |
| UX quality | Main flows, states, responsive behavior, and accessibility are checked |
| Refinement trace | Existing app changes are documented in the app-specific refinement log |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| React app | `output/[project-slug]-app/` | Vite React source tree |
| App handoff | `output/[project-slug]-app-handoff.md` | Setup, run, test, and deployment notes |
| App refinement log | `output/[project-slug]-app-refinements.md` | Markdown refinement history |
