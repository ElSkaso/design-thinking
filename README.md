# Design Thinking App Workspace

A structured UX/product workspace that turns a rough idea into an evidence-backed case study and, when useful, a working React prototype.

This repository currently includes the full **Curry Cruiser** project: a mobile-first ordering concept for a Thai curry food truck.

## What This Project Does

The workspace follows a staged design-thinking pipeline:

1. **Problem intake**  
   Turns a raw idea into a researchable project brief.

2. **Research and validation**  
   Collects evidence, assumptions, risks, and validation questions.

3. **Empathize artifacts**  
   Creates personas, journeys, empathy maps, and user stories.

4. **Define artifacts**  
   Produces the problem frame, user needs, hypotheses, and value proposition.

5. **Ideation and wireframes**  
   Explores solution directions and defines prototype requirements.

6. **Case study assembly**  
   Builds a portfolio-ready UX case study with an evidence chain and artifact inventory.

7. **React app build**  
   Builds an optional local prototype from the design artifacts.

## Current Example: Curry Cruiser

**Curry Cruiser** is a digital ordering experience for a Thai curry food truck.

The core product idea:

- customers choose a curry
- customize it with predefined options
- add one or more dishes to a cart
- confirm the full order
- receive an order number and order state

The app avoids free-text fields and focuses on reducing friction for both customers and food truck operators.

## Key Files

| Area | File |
|------|------|
| Project brief | `stages/01-problem-intake/output/curry-cruiser-project-brief.md` |
| Research dossier | `stages/02-research-and-validation/output/curry-cruiser-research-dossier.md` |
| Empathize artifacts | `stages/03-empathize-artifacts/output/curry-cruiser-empathize-artifacts.md` |
| Definition brief | `stages/04-define-artifacts/output/curry-cruiser-definition-brief.md` |
| Ideation and wireframes | `stages/05-ideation-and-wireframes/output/curry-cruiser-ideation-wireframes.md` |
| UX case study | `stages/06-case-study-assembly/output/curry-cruiser-ux-case-study.md` |
| React prototype | `stages/07-react-app-build/output/curry-cruiser-app/` |
| App refinements log | `stages/07-react-app-build/output/curry-cruiser-app-refinements.md` |

## Run The Curry Cruiser App

From the repository root:

```bash
cd stages/07-react-app-build/output/curry-cruiser-app
npm install
npm run dev
```

Then open the local URL shown in the terminal. By default, the app runs with Vite on `127.0.0.1`.

To create a production build:

```bash
npm run build
```

## Repository Structure

```text
design-thinking-app-workspace/
├── setup/                    # Onboarding questionnaire
├── shared/                   # Shared standards and project defaults
├── skills/                   # Design thinking and frontend guidance
└── stages/
    ├── 01-problem-intake/
    ├── 02-research-and-validation/
    ├── 03-empathize-artifacts/
    ├── 04-define-artifacts/
    ├── 05-ideation-and-wireframes/
    ├── 06-case-study-assembly/
    └── 07-react-app-build/
```

Each stage has its own `CONTEXT.md` and writes outputs to its own `output/` folder.

## Design Principles

The workspace is built around a simple credo:

> Truth, Order and Presence

In practice, that means:

- separate evidence from assumptions
- keep outputs readable and useful
- make every artifact lead to a decision
- avoid decorative process for its own sake
- build prototypes only when they clarify the product

## Notes

- `node_modules/` and build outputs are intentionally ignored.
- The Curry Cruiser app is a frontend-only prototype.
- Payment, backend order submission, accounts, and real inventory management are outside the current scope.
- Research artifacts are honest about their limits: direct customer and operator validation is still needed.
