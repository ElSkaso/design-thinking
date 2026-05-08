# Design Thinking Pipeline

This repository contains a reusable pipeline for turning a plain problem description into a structured UX case study and, optionally, a working frontend prototype.

It is meant to answer a simple question:

> How far can we get from only a problem description if we use a clear design-thinking process and specialized agents for research, synthesis, and artifact generation?

## Updates

### 2026-05-06

Found an inconsistency where user journey maps were derived from personas instead of user interviews. The empathize stage is now explicitly interview-led: Stage 02 must define a representative participant sample, recruitment rationale, and neutral open-ended interview questions. Stage 03 now derives every downstream artifact from interviews: each interview becomes an empathy map, users are grouped by shared traits or needs, each group gets a persona, and each persona gets a one-sentence user story plus a journey map.

## My Contribution

The main contribution of this project is the pipeline itself.

I defined a staged process that starts with almost nothing but a product problem and guides the work through research, empathy artifacts, problem definition, ideation, case study assembly, and optional app generation.

The important ideas behind this project are:

- a design-thinking pipeline can start from a short problem description
- research can be supported by dedicated research agents
- UX artifacts can be generated in a repeatable, reviewable structure
- every stage should produce a concrete output that becomes input for the next stage
- assumptions, evidence, and open questions should be kept separate
- the final result should be readable by humans, not just useful to software tools

In other words, this repository is not only a UX exercise. It is an attempt to make a repeatable system for moving from problem framing to product direction.

## Methodology Basis

This pipeline is based on two influences.

First, it uses the general design-thinking and sprint logic popularized by Google and Google Ventures: understand the problem, define the challenge, explore solutions, prototype, and validate with users.

Google's own Design Sprint history describes the sprint as a way to develop a hypothesis and test it quickly through designing, prototyping, and testing ideas with real customers:

[Google Design: 5-Day UX Design Sprint](https://design.google/library/design-sprints/)

Second, this repository was created using the **Interpreted Context Methodology**:

[Interpreted Context Methodology](https://github.com/RinDig/Interpreted-Context-Methdology)

The Interpreted Context Methodology treats context as something that should be built deliberately. Each stage adds structure, and every output becomes useful context for the next stage.

## What This Pipeline Produces

Starting from a rough product problem, the pipeline can produce:

- a project brief
- research questions
- evidence and assumption logs
- research synthesis
- interview plans
- personas
- user stories
- journey maps
- empathy maps
- problem statements
- user needs
- hypotheses
- value propositions
- ideation directions
- feature priorities
- wireframe requirements
- a portfolio-style UX case study
- an optional React prototype

The goal is not to replace human judgment. The goal is to make the process visible, structured, and easier to critique.

## The 7 Stages

| Stage | Plain-language purpose | Output |
|-------|------------------------|--------|
| 01. Problem intake | Turn a rough idea into a clear project brief. | `stages/01-problem-intake/output/` |
| 02. Research and validation | Gather evidence, assumptions, risks, and research questions. | `stages/02-research-and-validation/output/` |
| 03. Empathize artifacts | Describe users, journeys, needs, pains, and service context. | `stages/03-empathize-artifacts/output/` |
| 04. Define artifacts | Define the UX problem, hypotheses, and value proposition. | `stages/04-define-artifacts/output/` |
| 05. Ideation and wireframes | Explore solution directions and define prototype requirements. | `stages/05-ideation-and-wireframes/output/` |
| 06. Case study assembly | Combine the work into a readable UX case study. | `stages/06-case-study-assembly/output/` |
| 07. App build | Optionally build a frontend prototype from the design work. | `stages/07-react-app-build/output/` |

Each stage has a `CONTEXT.md` file that explains what the stage does and which inputs it should use.

## How The Pipeline Works

The pipeline creates a reasoning chain:

```text
problem description
-> project brief
-> research and assumptions
-> user understanding
-> problem definition
-> solution direction
-> case study
-> optional prototype
```

This structure makes it easier to see why a design decision exists.

For example, a prototype requirement should not appear out of nowhere. It should connect back to a user need, a research signal, a hypothesis, or a clearly marked assumption.

## Why Agents Are Used

Agents are useful in this project because different stages need different kinds of work.

For example:

- a research agent can gather and summarize external evidence
- an empathy-focused agent can turn evidence into personas and journeys
- a definition-focused agent can produce hypotheses and problem statements
- a frontend-focused agent can turn prototype requirements into an app

The pipeline is designed so that agent output is not treated as magic. It is saved as artifacts, reviewed stage by stage, and carried forward as explicit context.

## Repository Structure

```text
design-thinking/
├── setup/                    # Starting questionnaire
├── shared/                   # Shared standards and project defaults
├── skills/                   # Method and frontend guidance
└── stages/
    ├── 01-problem-intake/
    ├── 02-research-and-validation/
    ├── 03-empathize-artifacts/
    ├── 04-define-artifacts/
    ├── 05-ideation-and-wireframes/
    ├── 06-case-study-assembly/
    └── 07-react-app-build/
```

## Who This Is For

This repository may be useful for:

- UX designers who want a repeatable case-study workflow
- product people who want clearer problem framing
- developers who want better context before building
- students learning how research connects to design decisions
- people experimenting with agent-supported product work

## What This Is Not

This is not a replacement for real user research.

It is also not a guarantee that generated artifacts are correct. The pipeline helps organize thinking, but the results still need human review, real-world validation, and iteration.

The strongest use of this repository is as a structured starting point: it helps move from vague idea to reviewable product direction faster, while keeping assumptions visible.

## Notes

- `node_modules/` and build outputs are intentionally not committed.
- Stage outputs are meant to be read, edited, and improved.
- The optional app build is frontend-only unless a later project adds backend scope.
- The pipeline is intentionally generic and can be reused for different product ideas.
