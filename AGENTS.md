# Design Thinking App Workspace

This workspace turns a vague product problem into an evidence-backed UX case study and, optionally, a local React app.

## Folder Map

```text
design-thinking-app-workspace/
├── AGENTS.md          (you are here)
├── CONTEXT.md         (start here for task routing)
├── SOUL.md            (global credo)
├── setup/             (onboarding questionnaire)
├── skills/            (bundled design thinking and frontend skills)
├── shared/            (cross-stage project, design, and value files)
└── stages/
    ├── 01-problem-intake/
    ├── 02-research-and-validation/
    ├── 03-empathize-artifacts/
    ├── 04-define-artifacts/
    ├── 05-ideation-and-wireframes/
    ├── 06-case-study-assembly/
    └── 07-react-app-build/
```

## Global Context

Always read `SOUL.md` before working in this workspace.

## Triggers

| Keyword | Action |
|---------|--------|
| `setup` | Run onboarding questionnaire |
| `status` | Show pipeline completion for all stages |
| `refine app` | Update an existing Stage 07 app and document the adjustment |

## Routing

| Task | Go To |
|------|-------|
| Start a UX case study | `stages/01-problem-intake/CONTEXT.md` |
| Research and validate | `stages/02-research-and-validation/CONTEXT.md` |
| Build empathize artifacts | `stages/03-empathize-artifacts/CONTEXT.md` |
| Define the UX problem | `stages/04-define-artifacts/CONTEXT.md` |
| Ideate and wireframe | `stages/05-ideation-and-wireframes/CONTEXT.md` |
| Assemble case study | `stages/06-case-study-assembly/CONTEXT.md` |
| Build React app | `stages/07-react-app-build/CONTEXT.md` |
| Refine React app | `stages/07-react-app-build/CONTEXT.md` |

## What to Load

| Task | Load These | Do NOT Load |
|------|-----------|-------------|
| Problem intake | `SOUL.md`, `shared/project-profile.md`, `stages/01-problem-intake/CONTEXT.md` | Later stage outputs |
| Research | `SOUL.md`, stage 01 output, `skills/design-thinking/SKILL.md`, `shared/evidence-standards.md`, `stages/02-research-and-validation/references/research-plan.md` | Stage 03-07 outputs |
| Empathize | `SOUL.md`, stage 02 output, `skills/design-thinking/references/empathize.md` | Define or app files |
| Define | `SOUL.md`, stage 02-03 outputs, `skills/design-thinking/references/define.md` | Ideation or app files |
| Ideate | `SOUL.md`, stage 02 and 04 outputs, `skills/design-thinking/references/ideate.md`, `shared/design-system.md` | Case study or app files |
| Case study | `SOUL.md`, outputs from stages 01-05, `skills/design-thinking/references/case-study.md`, `shared/value-framework.md` | App source |
| App build | `SOUL.md`, stage 05-06 outputs, `shared/project-profile.md`, `shared/design-system.md`, `skills/frontend-skill/SKILL.md`, stage 07 references | Earlier outputs except 05-06 |
| App refinement | `SOUL.md`, stage 05-06 outputs, `shared/project-profile.md`, `shared/design-system.md`, `skills/frontend-skill/SKILL.md`, Stage 07 app files, Stage 07 app handoff and refinement log | Earlier outputs except 05-06 |

## Stage Handoffs

Each case study run uses a lowercase project slug, for example `curry-cruiser`. Stage outputs must be named `[project-slug]-[artifact].md`, and Stage 07 app folders must be named `[project-slug]-app/`. If more than one run exists, continue with the same slug or ask which run to use.

If you edit an output file, the next stage picks up your edits.

## App Refinement Documentation

When changing an existing Stage 07 app after its original build, append a short entry to `stages/07-react-app-build/output/[project-slug]-app-refinements.md`.

Each entry should name the trigger, app change, UX reason, touched app files, verification, and open follow-up. Keep the log factual and brief.
