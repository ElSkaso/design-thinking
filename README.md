# Design Thinking Case Study Pipeline

This repository shows how a rough product idea can be turned into a clear UX case study and a small working prototype.

The example project in this repository is **Curry Cruiser**, a mobile ordering concept for a Thai curry food truck.

## Why This Exists

Many product ideas start as a short sentence:

> "Make an app for ordering food from a food truck."

That is not enough to design a useful product. Before building screens, the idea needs to be understood:

- Who is it for?
- What problem does it solve?
- What evidence supports the direction?
- What assumptions are still untested?
- What should the first prototype include?
- How does each design decision connect back to user needs?

This repository documents that process step by step.

## Methodology

This pipeline was created using the **Interpreted Context Methodology**:

[https://github.com/RinDig/Interpreted-Context-Methdology](https://github.com/RinDig/Interpreted-Context-Methdology)

In simple terms, the methodology treats context as something that should be built deliberately. Each stage produces a concrete artifact, and each artifact becomes input for the next stage. This makes the work easier to review, refine, and explain.

## What Is Inside

The repository contains two things:

1. A reusable staged process for developing UX case studies.
2. A complete example project called **Curry Cruiser**.

Curry Cruiser explores a digital ordering flow for a Thai curry food truck. Customers can choose a curry, customize it with predefined options, add one or more dishes to a cart, confirm the full order, and receive an order number.

The project focuses on reducing friction for both:

- customers ordering during a short lunch break
- food truck operators who need clear, standardized order details

## The 7 Stages

| Stage | What it means in plain language | Curry Cruiser output |
|-------|---------------------------------|----------------------|
| 01. Problem intake | Turn the rough idea into a clear project brief. | `stages/01-problem-intake/output/curry-cruiser-project-brief.md` |
| 02. Research and validation | Gather evidence, assumptions, risks, and research questions. | `stages/02-research-and-validation/output/curry-cruiser-research-dossier.md` |
| 03. Empathize artifacts | Describe users, journeys, needs, pains, and service context. | `stages/03-empathize-artifacts/output/curry-cruiser-empathize-artifacts.md` |
| 04. Define artifacts | Define the UX problem, hypotheses, and value proposition. | `stages/04-define-artifacts/output/curry-cruiser-definition-brief.md` |
| 05. Ideation and wireframes | Explore solution directions and decide what the prototype needs. | `stages/05-ideation-and-wireframes/output/curry-cruiser-ideation-wireframes.md` |
| 06. Case study assembly | Combine the work into a readable portfolio-style case study. | `stages/06-case-study-assembly/output/curry-cruiser-ux-case-study.md` |
| 07. App build | Build a small frontend prototype from the design work. | `stages/07-react-app-build/output/curry-cruiser-app/` |

## Best Place To Start

If you only read one file, start here:

`stages/06-case-study-assembly/output/curry-cruiser-ux-case-study.md`

That file summarizes the full Curry Cruiser project and links the design decisions back to the research and earlier artifacts.

## Curry Cruiser In One Minute

Curry Cruiser is a frontend-only prototype for ordering Thai curry from a food truck.

The intended customer flow:

1. Choose a curry.
2. Customize the dish with predefined options.
3. Add the dish to the cart.
4. Add another dish or go to the cart.
5. Review all dishes.
6. Confirm the full order.
7. Receive an order number and order state.

The prototype does not include payment, accounts, backend order submission, or real inventory management. Those are intentionally outside the current scope.

## Run The Prototype

The Curry Cruiser app is a React/Vite prototype.

From the repository root:

```bash
cd stages/07-react-app-build/output/curry-cruiser-app
npm install
npm run dev
```

Then open the local URL shown in the terminal.

To create a production build:

```bash
npm run build
```

## Repository Structure

```text
design-thinking/
├── setup/                    # Starting questionnaire
├── shared/                   # Shared standards and project defaults
├── skills/                   # Method and frontend guidance used by the workspace
└── stages/
    ├── 01-problem-intake/
    ├── 02-research-and-validation/
    ├── 03-empathize-artifacts/
    ├── 04-define-artifacts/
    ├── 05-ideation-and-wireframes/
    ├── 06-case-study-assembly/
    └── 07-react-app-build/
```

Each stage has:

- a `CONTEXT.md` file explaining what that stage does
- an `output/` folder containing the generated project artifact

## What Makes This Different

This is not just a design mockup and not just a code project.

It shows the reasoning chain:

```text
rough idea -> research -> user needs -> product definition -> prototype requirements -> case study -> app
```

The goal is to make every design choice explainable. For example, Curry Cruiser does not use free-text order notes because mobile typing adds friction and open-ended notes create ambiguity for operators. That decision is documented in the research, definition, wireframes, and prototype.

## Current Limitations

The Curry Cruiser project is still a prototype. Important next steps would be:

- interview real lunch customers
- interview or observe food truck operators
- validate the real Curry Cruiser menu and ingredients
- test the order summary with staff
- define payment and order-locking rules
- validate allergy and dietary language operationally

## Notes

- `node_modules/` and build outputs are intentionally not committed.
- The React app is frontend-only.
- The case study is meant to be readable by designers, developers, product people, and non-technical reviewers.
