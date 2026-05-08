# Ideation and Wireframes: Curry Cruiser Revised

## Purpose

Generate solution directions and wireframe requirements for Curry Cruiser's revised curry ordering experience. This pack translates the Stage 04 definition brief into a focused mobile-first ordering flow without assuming the optional app build stage will proceed.

## Inputs

- Stage 02 research dossier: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`
- Stage 04 definition brief: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`
- Design system: clean, accessible, product-focused, realistic, WCAG AA
- Evidence status: medium desk-research support; low direct-user confidence until real Curry Cruiser customers and staff are interviewed

## Design Intent

Create a lightweight ordering flow that helps customers build a complete curry order through predefined choices, understand unfamiliar options quickly, review the order before submission, and receive a clear pickup confirmation. The same flow must produce staff-readable order details without free-text interpretation.

## Goal Statements

- Our ordering experience will let customers complete required curry choices so they can submit a confident order without staff clarification. We will measure success by complete prototype orders and user confidence after review.
- Our ordering experience will let first-time customers understand curry and spice choices so they can choose without asking staff to explain the full menu. We will measure success by users accurately describing what they selected.
- Our ordering experience will let QR-comfortable and QR-cautious customers access the flow so they can order without feeling forced into one entry method. We will measure success by users identifying the QR path and a fallback path.
- Our ordering experience will let staff receive consistently structured order details so they can scan and prepare orders quickly. We will measure success by staff or proxy reviewers finding required details in five seconds or less.

## Competitive Audit Summary

- Audit goal: Identify ordering patterns worth adapting and gaps Curry Cruiser can address with a focused, food-truck-specific flow.
- Competitors reviewed: Square Online, Toast Mobile Order & Pay, Clover Scan to Order, third-party delivery apps, and verbal/in-person food truck ordering.
- Direct competitors: POS-enabled direct online ordering and QR ordering tools.
- Indirect competitors: Verbal ordering, printed menus, handwritten tickets, generic delivery apps, and staff-assisted recommendations.
- Common patterns: Item cards, modifier groups, required selections, cart review, QR entry, payment prompts, confirmation receipts, and pickup identifiers.
- Notable strengths: POS tools already support modifiers, selection limits, ticket display, and QR access. Delivery apps make review and confirmation familiar.
- Notable weaknesses: Generic tools may bury menu guidance, overemphasize payment/account flows, allow unclear notes, or present too many choices without food-truck context.
- Market gaps: A Curry Cruiser-specific flow can explain curry choices, limit customization to operationally valid options, and format orders in staff prep sequence.
- Implications for our product: Borrow familiar selection/review patterns, but avoid generic app heaviness, QR-only access, and open-ended special request fields.
- Risks of copying competitors: Copying broad POS patterns could create a technically valid flow that still fails first-time customers and staff during a rush.

## How Might We Questions

1. How might we help time-pressed customers complete curry customization quickly when they are ordering near a busy food truck?
2. How might we help first-time customers understand curry and spice choices without making the menu feel long?
3. How might we let customers verify a complete order before submission without adding unnecessary steps?
4. How might we support QR entry while keeping the ordering experience accessible to customers who prefer another path?
5. How might we structure customer choices so staff receive tickets in the order they prepare food?
6. How might we handle dietary needs and unavailable items without relying on free-text fields?
7. How might we make the final confirmation useful for both customer pickup and staff handoff?
8. How might we reduce staff interruptions while still giving customers enough choice to feel in control?

## Rapid Sketch Set: Structured Curry Ordering

1. Sketch label: Guided Builder
   - Screen/workflow idea: A step-by-step flow for curry, protein, spice, base, add-ons, and review.
   - User value: Reduces missing required choices and supports focused completion.
   - Risk: Too many screens could feel slow for repeat customers.

2. Sketch label: Single-Page Smart Form
   - Screen/workflow idea: One scrollable page with grouped sections and a sticky order summary.
   - User value: Lets users see the whole order structure and jump between sections.
   - Risk: Can become dense on small phones if guidance text is too long.

3. Sketch label: Recommended Combos First
   - Screen/workflow idea: Start with two or three recommended curry builds, then let users adjust predefined choices.
   - User value: Helps first-time customers choose quickly.
   - Risk: Could hide the customization model or overfit to assumed menu favorites.

4. Sketch label: Staff Prep Sequence
   - Screen/workflow idea: Customer choices are ordered exactly like kitchen prep: curry, protein, base, spice, add-ons, pickup.
   - User value: Produces staff-readable tickets and lowers prep translation.
   - Risk: Prep sequence may not match customer decision sequence until validated.

5. Sketch label: Confidence Review
   - Screen/workflow idea: A receipt-like review screen uses plain food language, editable rows, and a strong submit action.
   - User value: Helps cautious and rushed users catch mistakes.
   - Risk: Review may feel redundant if earlier summary is strong.

6. Sketch label: QR Plus Fallback Entry
   - Screen/workflow idea: Landing state acknowledges QR scan but also shows short URL, staff fallback, and "start order" action.
   - User value: Keeps QR optional and reduces technology anxiety.
   - Risk: Too much fallback messaging could distract confident users.

7. Sketch label: Allergy Guardrails
   - Screen/workflow idea: A predefined dietary needs section with common flags and "talk to staff for severe allergies."
   - User value: Avoids risky free-text while not pretending complex needs are simple.
   - Risk: Requires Curry Cruiser to validate supported allergen handling.

8. Sketch label: Pickup Ticket
   - Screen/workflow idea: Confirmation screen shows order number, selected items, pickup cue, and staff-readable summary.
   - User value: Bridges customer confirmation and staff handoff.
   - Risk: Real pickup process may require name, phone, payment, or timing details not yet confirmed.

## Selection

- Strongest directions: Guided Builder, Staff Prep Sequence, Confidence Review, QR Plus Fallback Entry, Allergy Guardrails, Pickup Ticket.
- Combined idea: A mobile-first structured builder with short option guidance, required modifier groups, persistent summary, receipt-like review, optional QR/fallback entry, and staff-readable confirmation.
- Why this direction fits the evidence: It directly supports Stage 04 hypotheses around structured choices, plain-language guidance, review before submit, optional QR entry, and staff-readable tickets.

## Prioritized Feature Candidates

| Priority | Feature | User / Staff Value | Evidence Trace | Notes |
|---|---|---|---|---|
| Must | Start order entry with optional QR context | Lets users begin quickly without making QR mandatory | Stage 04 optional QR hypothesis | Include direct URL/staff fallback language. |
| Must | Required grouped customization | Prevents missing prep details | Stage 04 required structured choices hypothesis | Curry, protein, spice, base, add-ons, pickup identifier. |
| Must | Plain-language curry and spice guidance | Helps first-time customers choose confidently | Maya persona; Stage 04 guidance hypothesis | Keep copy short and scannable. |
| Must | Human-readable review screen | Builds trust before submit | Riley/Sam personas; review hypothesis | Editable rows, clear submit action near final content. |
| Must | Staff-readable order summary | Reduces prep interpretation | Jordan persona; staff ticket hypothesis | Same sequence as preparation once validated. |
| Should | Structured dietary/allergy flags | Supports common needs without free text | Accessibility and edge-case notes | Severe allergy path should direct to staff. |
| Should | Sold-out/unavailable states | Prevents invalid choices | Stage 04 constraints | Disable unavailable options with explanation. |
| Should | Pickup confirmation | Gives customer and staff a shared reference | Journey maps | Use pickup number unless real workflow says otherwise. |
| Could | Recommended builds | Speeds first-time ordering | Curious First-Timer needs | Needs menu validation before final content. |
| Could | Repeat order shortcut | Helps regulars | Time-Pressed Regular needs | Lower priority without accounts/history. |
| Won't for now | Digital payment | Payment model unknown | Stage 04 open question | Exclude from first wireframe scope. |
| Won't for now | Free-text special requests | Conflicts with core constraint | Stage 01 and Stage 04 | Complex requests route to staff. |
| Won't for now | Account creation / loyalty | Adds friction and is not validated | Stage 02 off-premises attributes mention loyalty broadly | Keep flow lightweight. |

## Selected Wireframe Direction

### Concept Name

Curry Builder With Staff-Ready Review

### Product Shape

A responsive mobile web ordering flow that can be launched from QR code, direct URL, or staff-provided link. It uses grouped predefined choices, short guidance, and a final review/confirmation sequence. It does not include payment or free-text special requests in the first scope.

### Primary Flow

1. Entry / start order
2. Choose curry
3. Choose protein and base
4. Choose spice and add-ons
5. Add structured dietary or pickup details
6. Review order
7. Submit order
8. Confirmation / pickup ticket

### Secondary Flow

- QR fails or user prefers help: entry screen offers direct URL and "order with staff" fallback.
- Sold-out item: unavailable choice is disabled with short explanation and a suggested alternative.
- Complex allergy: user sees predefined allergy flags plus "please order with staff for severe allergies."

## Screen List and Requirements

### Screen 1: Entry / Start Order

- Purpose: Let users understand they are ordering from Curry Cruiser and start without making QR access feel mandatory.
- Key content:
  - Curry Cruiser name
  - Current location/service note if available
  - "Start order" primary action
  - Short fallback: "Having trouble scanning? Ask staff or use the short link."
- Main actions:
  - Start order
  - View menu/help fallback
- States:
  - Loading: brief loading state if menu data is unavailable
  - Error: "Menu is not loading. Please order with staff."
- Evidence trace: QR access is optional; cautious users need trust and fallback.

### Screen 2: Choose Curry

- Purpose: Help users pick the foundational curry option with enough guidance to reduce hesitation.
- Key content:
  - Required section label
  - Curry option cards with short taste descriptions
  - Recommended marker where validated
  - Included ingredients summary
- Main actions:
  - Select curry
  - Continue
- States:
  - Missing required selection: inline prompt
  - Sold out: disabled curry option with explanation
- Evidence trace: Maya needs plain-language guidance; required choices reduce incomplete orders.

### Screen 3: Choose Protein and Base

- Purpose: Collect core prep details in a structure staff can scan.
- Key content:
  - Protein choices
  - Base choices, such as rice or noodles if validated
  - Any included/default option notes
- Main actions:
  - Select protein
  - Select base
  - Continue
- States:
  - Missing required protein/base
  - Unavailable protein
- Evidence trace: Staff-readable order sequence and complete tickets.

### Screen 4: Choose Spice and Add-Ons

- Purpose: Support meaningful customization while keeping choices operationally valid.
- Key content:
  - Spice scale with plain labels
  - Optional add-ons with price/status if applicable
  - Clear limits if only certain add-ons can be chosen
- Main actions:
  - Select spice
  - Select optional add-ons
  - Continue
- States:
  - Spice required
  - Add-on unavailable
- Evidence trace: Spice anxiety for first-time users; modifier systems support predefined options and limits.

### Screen 5: Dietary and Pickup Details

- Purpose: Handle common exceptions and pickup identity without free text.
- Key content:
  - Structured dietary flags, such as vegetarian, vegan, contains peanuts warning, no fish sauce if supported
  - Severe allergy staff-warning message
  - Pickup identifier, preferably first name or generated number after validation
- Main actions:
  - Select dietary flags
  - Continue to review
- States:
  - Severe allergy path: "Please order with staff so we can confirm safety."
  - Missing pickup identifier if required
- Evidence trace: Free-text creates ambiguity; complex edge cases need staff path.

### Screen 6: Review Order

- Purpose: Let users verify every choice before submission.
- Key content:
  - Receipt-like summary in plain language
  - Edit actions per section
  - Estimated pickup note if available
  - No-payment note if payment is handled at truck
- Main actions:
  - Edit section
  - Submit order
- States:
  - Submit disabled until required details are complete
  - Submission loading state
  - Submission error with retry and staff fallback
- Evidence trace: Riley and Sam need confidence before submit; NN/g supports placing submit near final fields.

### Screen 7: Confirmation / Pickup Ticket

- Purpose: Confirm that staff received the order and give the customer a pickup reference.
- Key content:
  - Order received message
  - Pickup number or name
  - Human-readable order summary
  - Staff-readable compact summary
  - Pickup instruction, such as "Listen for order 24"
- Main actions:
  - Save/show ticket
  - Place another order if needed
- States:
  - Offline/failed confirmation: show "Check with staff" fallback
- Evidence trace: Confirmation reduces trust friction and supports staff handoff.

## Text Wireframes

### Mobile Wireframe A: Entry

```text
[Curry Cruiser]
 Thai curry, made to order

 [Start order]

 Trouble scanning?
 Use the short link or order with staff.
```

### Mobile Wireframe B: Choose Curry

```text
Step 1 of 5
Choose your curry *

[Green Curry]
 Bright, herby, medium heat

[Red Curry]
 Rich, warm, classic spice

[Yellow Curry]
 Mild, cozy, turmeric-forward

[Continue]
```

### Mobile Wireframe C: Customize

```text
Step 2 of 5
Build your bowl *

Protein
( ) Chicken  ( ) Tofu  ( ) Shrimp

Base
( ) Jasmine rice  ( ) Noodles

Spice
( ) Mild  ( ) Medium  ( ) Hot

[Continue]
```

### Mobile Wireframe D: Dietary / Pickup

```text
Step 4 of 5
Before we make it

Dietary flags
[ ] Vegetarian
[ ] Vegan
[ ] No peanuts if possible

Severe allergy?
Please order with staff.

Pickup name
[ First name ]

[Review order]
```

### Mobile Wireframe E: Review

```text
Review your order

Green curry
Chicken, jasmine rice
Medium spice
No add-ons
Pickup: Riley

[Edit curry] [Edit details]

Payment happens at the truck.

[Submit order]
```

### Mobile Wireframe F: Confirmation

```text
Order received

Pickup #24
Listen for your number at the window.

Green curry
Chicken, jasmine rice, medium

Show this screen if staff asks.
```

## Staff-Readable Ticket Requirement

Submitted order data should be displayed or exportable in this sequence:

```text
Pickup: #24 / Riley
Curry: Green
Protein: Chicken
Base: Jasmine rice
Spice: Medium
Add-ons: None
Dietary flags: None
Status: New
```

The exact fields must be validated with Curry Cruiser staff before final design.

## Content Requirements

- Use real menu language once Curry Cruiser's menu is confirmed.
- Keep option descriptions under one short line where possible.
- Mark required choices clearly.
- Avoid technical POS language such as "modifier."
- Avoid free-text fields for routine ordering.
- Use direct fallback language for severe allergies, unavailable items, QR failure, and submission failure.

## Accessibility Requirements

- WCAG AA contrast.
- Large touch targets for option cards and controls.
- Visible selected, disabled, loading, error, and success states.
- Instructions before controls.
- Submit action close to final review content.
- No QR-only access.
- Plain-language labels for curry, spice, dietary flags, and pickup.
- Screen-reader-friendly required field labels and error messages.

## State Requirements

| State | Requirement |
|---|---|
| Empty | Show clear start state and required sections. |
| Loading | Show menu-loading feedback and avoid blank screens. |
| Error | Provide retry and staff fallback. |
| Missing required choice | Show inline message near the relevant section. |
| Sold out | Disable option, explain why, and suggest another choice if possible. |
| Complex allergy | Route to staff rather than accepting unsafe free text. |
| Submission loading | Prevent duplicate submission and show progress. |
| Success | Show pickup identifier and order summary. |

## Feature Scope for Approval

### In Scope

- Mobile-first ordering flow
- Optional QR/direct/staff fallback entry
- Required predefined curry customization groups
- Short guidance for curry and spice choices
- Structured dietary flags with severe allergy staff path
- Review before submit
- Confirmation and pickup ticket
- Staff-readable order summary

### Out of Scope for First Prototype

- Payment
- Accounts
- Loyalty
- Delivery
- Order history
- Free-text requests
- Real-time kitchen dashboard
- Backend inventory management

## Risks and Validation Needs

- Actual Curry Cruiser menu may not match assumed curry/protein/base/spice categories.
- Staff prep sequence may differ from the customer-friendly choice sequence.
- Payment and pickup process remain undefined.
- Allergy handling must be operationally and legally validated.
- QR fallback messaging should be tested with QR-hesitant customers.
- Recommended curry labels should not be used until Curry Cruiser validates popular/default builds.

## Design System Notes

- Visual direction: clean, accessible, product-focused, realistic.
- Palette: neutral base with one restrained accent color; final Curry Cruiser colors can override once brand direction is known.
- Interaction style: clear form states, direct labels, compact sections, no decorative complexity.
- Tone: warm, plain, concise, and confidence-building.

## Stage 06 Case Study Implications

The case study should show a reasoning chain from research to wireframes:

- Food truck speed and mobile ordering evidence led to a mobile-first flow.
- Structured modifier evidence led to predefined required choices.
- First-time customer uncertainty led to short curry and spice guidance.
- QR risk led to optional QR entry with fallback.
- Staff operational friction led to the staff-readable ticket sequence.

## Audit

- Problem trace: Each major idea maps to Stage 04 hypotheses and Stage 02 research signals.
- Feature discipline: Must/should/could/won't priorities separate essential flow requirements from future enhancements.
- App readiness: Key screens, states, primary flow, fallback flow, accessibility, and staff ticket output are specified.
- Evidence limits: Unvalidated Curry Cruiser-specific assumptions are named directly.

