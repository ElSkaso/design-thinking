# UX Case Study Reference

Use this reference to create a beautiful, human-readable UX case study dossier. It is the UX designer's final artifact: directly assemble the prior-stage artifacts, then frame them with a polished, repeatable editorial structure.

## Required Structure

1. `# UX Case Study: [Project]`
2. `## Executive Summary`
3. `## Stage 01: Problem`
4. `## Stage 02: Research`
5. `## Stage 03: Empathize`
6. `## Stage 04: Define`
7. `## Stage 05: Ideate`
8. `## Evidence Chains`
9. `## Outcome, Limits, And Next Steps`

## Markdown Structure Contract

The Markdown output must be deterministic and structured. Use the required top-level sections in the exact order above.

Each stage section must use this repeatable structure:

```markdown
## Stage NN: [Phase]

[Stage intro paragraph: 2-3 sentences following the Stage Intro contract.]

### [Copied Source Section Heading]

[Copied source section content. Body content stays unchanged.]

### [Additional Copied Source Section Heading]

[Copied source section content. Body content stays unchanged.]

### What This Unlocked

[One short transition paragraph explaining why the next phase follows.]
```

Do not place source paths in the Markdown case study body. Keep machine-readable source references in the companion JSON `sources` field when useful.

## Narrative Contract

Only create these narrative elements:

- Executive Summary: 2-4 short paragraphs covering project, target users, core problem, final direction, and evidence confidence.
- Stage Intro: each stage starts with one short paragraph of 2-3 sentences. Sentence 1 explains what the phase was meant to answer. Sentence 2 explains the key human-centered move or decision that changed because of the phase. Sentence 3, when needed, names the artifact produced in natural language. Do not use literal `Purpose:`, `Key move:`, or `Output:` labels in the case study body.
- Phase Transition: after each stage, add one short paragraph explaining why the next phase follows.
- Evidence Chains: include 5-8 chains in the required format.
- Outcome / Limits / Next Steps: state what is proven, what remains unvalidated, and what to validate next.

## Presentation Standard

The Markdown case study must read like a polished portfolio artifact, not an internal worksheet.

- Keep the stage order, headings, artifact assembly rules, evidence chains, and outcome section deterministic.
- Use natural, human-centered prose for stage introductions and transitions.
- Keep source paths and mechanical trace details out of the Markdown reading flow.
- Copy source artifact sections directly, then use the deterministic case study frame to make the document readable.
- Make headings, tables, and artifact blocks scannable and visually calm.

## Content Routing

- Final Markdown case study: reader-facing story, direct-copied Stage 01-05 artifact content, design decisions, and meaningful research limits or next steps.
- Companion JSON: website-facing content only.
- Audit sidecar: QA/provenance content, pass/fail checks, source paths, coverage notes, JSON schema and slimness diagnostics, user-thread coherence checks, deduplication checks, generator/process notes, and follow-up fixes.
- Source paths may appear in the JSON `sources` field or the audit sidecar, but not in the final Markdown case study body.
- Research limitations that affect reader confidence belong in `## Outcome, Limits, And Next Steps`; mechanical QA phrasing belongs in the audit sidecar.

## Artifact Assembly

The Markdown case study must directly copy the Stage 01-05 artifact files. Stage 06 may add framing, but it must not recreate, shorten, merge, rename, summarize, or restructure source artifact sections.

For each Stage 01-05 source file:

1. Omit only the source file's top-level `#` title.
2. Copy every content section below that title into the matching case study stage.
3. Keep the original section order.
4. Apply only mechanical heading nesting: source `##` headings become case study `###` headings, source `###` headings become `####` headings, and deeper headings shift by one level.
5. Keep all body content, tables, lists, labels, field names, persona details, journey-map rows, evidence tables, assumptions, limits, and wireframe requirements unchanged.

These sections must be copied when they exist in the source artifacts:

- Research questions, findings, evidence tables, assumption logs, interview plans, and research limits
- Participant samples, interview questions, interview summaries, empathy maps, user groups, personas, user stories, journey maps, accessibility notes, and research limits
- Problem statements, needs, hypotheses, problem/hypothesis pairs, value proposition blocks, and definition limits
- Goal statements, HMWs, competitive design patterns, concept directions, feature priorities, user flows, screen requirements, wireframe requirements, and ideation limits

Do not use "key artifacts only" selection for the Markdown case study. If the assembled case study is too long, shorten the upstream Stage 01-05 artifact structures in a separate revision; Stage 06 must not solve length by omitting or rewriting copied source content.

## Evidence Chains

Use this exact format:

```text
Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome
```

## Companion JSON Output

Every Stage 06 run must create a sibling JSON file:

```text
output/[project-slug]-case-study-data.json
```

The JSON is the canonical website integration artifact. It summarizes and normalizes content for portfolio rendering, while the Markdown case study directly copies the full Stage 01-05 artifact detail.

The file must be valid UTF-8 JSON with no comments:

```ts
type CaseStudyWebsiteData = {
  title: string;
  slug: string;
  tagline: string;
  overview: string[];
  problem: string;
  solution: string;
  role?: string;
  timeline?: string;
  highlights: string[];
  process: ProcessStage[];
  userThreads: UserThread[];
  keyDecisions: KeyDecision[];
  validation: string[];
  outcome: string;
  nextSteps: string[];
  sources: SourceItem[];
};

type ProcessStage = {
  id: "research" | "empathize" | "define" | "ideate" | "prototype";
  title: string;
  summary: string;
  keyArtifacts: string[];
  insights: string[];
  relatedUserThreads?: string[];
};

type UserThread = {
  id: string;
  userGroup: string;
  sourceInsight: string;
  sourceArtifacts: string[];
  persona: {
    name: string;
    summary: string;
  };
  userStory: string;
  journeySummary: {
    scenario: string;
    stages: string[];
    keyPainPoint: string;
    opportunity: string;
  };
  designImpact: string;
};

type KeyDecision = {
  decision: string;
  why: string;
  impact: string;
  relatedUserThreads?: string[];
};

type SourceItem = {
  label: string;
  path: string;
};
```

JSON rules:

- Keep the JSON curated and website-ready, not archival.
- Do not mirror every Markdown artifact in JSON.
- Do not include full markdown blocks, full tables, full audits, or arbitrary content blobs.
- `overview` has max 3 short paragraphs.
- `highlights` has max 5 items.
- `process` has max 5 stages.
- `keyArtifacts` has max 3 items per process stage.
- `insights` has max 3 items per process stage.
- `userThreads` has max 3 items.
- `keyDecisions` has max 6 items.
- `validation` has max 5 items.
- `nextSteps` has max 5 items.
- Missing optional values should be omitted, not filled with fake content.

User thread coherence rules:

- Use `userThreads` as the only place where empathy-map-derived insights, user groups, personas, user stories, and journey summaries are surfaced.
- Each included user thread must connect `empathy/user insight -> user group -> persona -> user story -> journey summary -> design impact`.
- If an empathy-map-derived insight is selected, include the matching persona, user story, and journey summary inside the same `userThread`.
- Each included persona must have exactly one user story and one journey summary.
- Each journey summary must correspond to the same persona.
- If Stage 03 has more than 3 personas, select the 2-3 most important for the website story.
- If no reliable persona chain exists, set `userThreads` to `[]` and name the limitation in `outcome` or `nextSteps`.

Deduplication rules:

- Do not copy `userStory` text outside `userThreads`.
- Do not copy `journeySummary` text outside `userThreads`.
- Do not repeat persona summaries in `process.insights`, `highlights`, or `keyDecisions`.
- `process.relatedUserThreads` may reference thread IDs only.
- `keyDecisions.relatedUserThreads` may reference thread IDs only.
- `sourceArtifacts` should name related artifact titles without copying their full content.

## Audit Sidecar Output

Every Stage 06 run must create a separate audit sidecar:

```text
output/[project-slug]-case-study-audit.md
```

The audit sidecar is internal QA/provenance for the workflow. Do not include it in the final Markdown case study and do not copy it into the website JSON.

Use this structure:

```markdown
# Case Study Audit: [Project]

## Markdown Structure

## Artifact Coverage

## Evidence Chain Checks

## Source And Provenance

## JSON Schema And Slimness

## User Thread Coherence

## Generator Notes

## Limits And Follow-Up Fixes
```

## Portfolio Quality Bar

A strong case study:

- Shows why the problem matters.
- Directly includes the Stage 01-05 artifacts needed to review the reasoning.
- Adds concise, polished narrative context without rewriting artifacts into prose.
- Connects UX decisions to evidence and interview/user insights.
- Names research limits honestly.
- Includes next steps or a validation plan.

Avoid:

- Summarizing structured artifacts that should be copied directly.
- Treating design thinking phases as a checklist without decisions.
- Personas with no impact on the product.
- Journey maps rewritten as paragraphs.
- Evidence tables rewritten as vague research summaries.
- Polished screens with no evidence trail.

## Audit Sidecar Checks

- Structured artifacts from stages 01-05 are copied directly.
- Every Stage 01-05 source `##` section appears as a copied `###` section in the matching case study stage.
- Copied section bodies match the source content except for mechanical heading-depth changes; use exact text comparison when practical.
- Interviews, empathy maps, personas, user stories, journey maps, limits, evidence tables, assumptions, and wireframe requirements are not summarized, merged, omitted, or structurally rewritten in the Markdown.
- The case study reads as a beautiful, human-readable UX portfolio artifact.
- Stage introductions and transitions are present, concise, deterministic in structure, and written in natural language.
- Evidence chains trace research or interview insight to artifact, decision, and expected outcome.
- Companion JSON is valid, curated, and follows the website content limits.
- Source paths and provenance are captured outside the final Markdown reading flow.
- JSON schema, slimness, and deduplication checks are captured in the audit sidecar.
- User-thread coherence is checked in the audit sidecar.
- Generator/process notes are captured in the audit sidecar.
- Research limits are explicit.
- The final Markdown case study does not include an audit section.
- The audit sidecar is credible, reviewable, and useful for improving the generated outputs.
