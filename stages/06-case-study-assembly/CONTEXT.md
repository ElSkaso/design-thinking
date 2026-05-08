# Stage 06: Case Study Assembly

Assemble all prior work into a structured case study dossier by directly copying prior-stage artifacts and adding controlled narrative around them.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Stage 01 | `../01-problem-intake/output/[project-slug]-project-brief.md` | Full file | Problem origin |
| Stage 02 | `../02-research-and-validation/output/[project-slug]-research-dossier.md` | Full file | Research evidence |
| Stage 03 | `../03-empathize-artifacts/output/[project-slug]-empathize-artifacts.md` | Full file | User artifacts |
| Stage 04 | `../04-define-artifacts/output/[project-slug]-definition-brief.md` | Full file | Problem definition |
| Stage 05 | `../05-ideation-and-wireframes/output/[project-slug]-ideation-wireframes.md` | Full file | Solution direction |
| Skill reference | `../../skills/design-thinking/references/case-study.md` | Full file | Case study format |
| Shared context | `../../shared/value-framework.md` | Full file | Portfolio value checks |
| Shared context | `../../SOUL.md` | Full file | Workspace credo |

## Process

1. Read all previous stage outputs.
2. Write an Executive Summary with 2-4 short paragraphs covering project, users, problem, final direction, and evidence confidence.
3. Create stage sections for Stage 01 Problem, Stage 02 Research, Stage 03 Empathize, Stage 04 Define, and Stage 05 Ideate.
4. Start each stage section with a deterministic 2-3 sentence stage intro: what the phase answered, what human-centered move changed because of it, and which artifact it produced in natural language.
5. For each Stage 01-05 source file, copy every content section below the source `#` title into the matching case study stage in the original order.
6. Apply only mechanical heading nesting while copying: source `##` headings become case study `###` headings, source `###` headings become `####` headings, and all body content, tables, lists, labels, persona fields, journey maps, evidence tables, and wireframe structures remain unchanged.
7. End each stage with `### What This Unlocked` and one short phase transition paragraph.
8. Add 5-8 evidence chains using `Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome`.
9. Add Outcome / Limits / Next Steps.
10. Create the companion JSON file using the schema in `../../skills/design-thinking/references/case-study.md`, bundling user-centered website content into deduplicated `userThreads`.
11. Create the audit sidecar for markdown structure, artifact coverage, evidence chain checks, source/provenance, JSON schema/slimness, user-thread coherence, generator notes, and follow-up fixes.
12. Route reader-facing story, artifacts, decisions, and meaningful limits to Markdown; website content to JSON; and QA/provenance diagnostics to the audit sidecar.
13. Run the audit, revise if needed, then save all outputs.

## Checkpoints

| After Step | Agent Presents | Human Decides |
|------------|---------------|---------------|
| 5 | Dossier outline and copied source section list | Whether the structure is portfolio-ready |

## Audit

| Check | Pass Condition |
|-------|---------------|
| Artifact assembly | Every Stage 01-05 source `##` section appears in the matching case study stage as a `###` section, with body content copied directly except for mechanical heading nesting |
| Markdown structure | Required top-level sections and repeatable stage structure are present in order |
| Narrative contract | Executive summary, human-readable stage intros, transitions, evidence chains, and outcome sections are present |
| Evidence chains | 5-8 chains trace research or interview insight to artifact, decision, and expected outcome |
| Reader-facing separation | Final Markdown has no pass/fail checks, source-path bookkeeping, coverage diagnostics, JSON/schema checks, or generator/process notes |
| Audit sidecar | Separate audit file captures QA/provenance, coverage, schema/slimness, user-thread coherence, generator notes, and follow-up fixes |
| Source section coverage | Audit sidecar lists all Stage 01-05 source `##` headings and confirms the matching case study `###` headings are present |
| Content fidelity | Copied section bodies match source content except for mechanical heading-depth changes; exact text comparison is used when practical |
| No artifact rewriting | Audit sidecar confirms interviews, empathy maps, personas, user stories, journey maps, limits, evidence tables, assumptions, and wireframe requirements were not summarized, merged, omitted, or structurally rewritten in the Markdown |
| JSON validity | Companion JSON is valid UTF-8 JSON and matches the required case study data shape |
| JSON concision | Companion JSON is curated for website rendering and does not mirror the full artifact archive |
| JSON user threads | User-centered content appears as coherent, deduplicated `userThreads` instead of repeated persona, story, or journey snippets |
| Portfolio readiness | Case study is credible, concise, and reviewable as a dossier |
| Limits named | Research gaps and next steps are explicit |
| Artifact focus | Outputs use only the case study, website content, and audit sidecar structures |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| UX case study | `output/[project-slug]-ux-case-study.md` | Deterministic, human-readable Markdown UX case study dossier with direct-copied Stage 01-05 artifacts and controlled narrative |
| Case study data | `output/[project-slug]-case-study-data.json` | JSON portfolio website data |
| Case study audit | `output/[project-slug]-case-study-audit.md` | Markdown QA sidecar for structure, coverage, evidence chains, provenance, JSON schema/slimness, user-thread coherence, generator notes, limits, and follow-up fixes |
