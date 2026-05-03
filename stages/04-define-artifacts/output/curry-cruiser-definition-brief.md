# Definition Brief: Curry Cruiser

## Purpose

Define the UX problem, user needs, testable hypotheses, and value proposition for Curry Cruiser's digital Thai curry ordering experience.

## Inputs

- Research dossier: `stages/02-research-and-validation/output/curry-cruiser-research-dossier.md`
- Empathize artifacts: `stages/03-empathize-artifacts/output/curry-cruiser-empathize-artifacts.md`
- Define reference: `skills/design-thinking/references/define.md`

## Core Problem Frame

Busy Curry Cruiser customers and operators both need a clearer, faster way to turn a customized curry choice into a fulfillable order, because lunch service creates time pressure, verbal ordering can introduce ambiguity, and digital ordering only helps if it reduces work for both sides of the transaction.

Evidence basis: Stage 02 found that lunch ordering is time-constrained, mobile-first access is plausible, mobile typing creates friction, and digital ordering must prove it is faster or clearer than existing counter workflows. Stage 03 identified shared customer/operator needs around speed, confidence, standardized order information, and reduced back-and-forth.

Confidence: Medium. The frame is grounded in desk research and hypothesis-based synthesis, but needs validation with real Curry Cruiser customers and operators.

## 5W And H Check

- Who: Busy lunch customers, first-time curry customers, and Curry Cruiser operators.
- What: Customers need to customize and submit curry orders without confusion; operators need accurate, standardized, fulfillable order details.
- Where: At or near a Thai curry food truck, likely on a mobile device in a public lunch setting.
- When: During lunch rush or short work breaks.
- Why: Mistakes, hesitation, unclear options, and repeated explanations slow both customers and operators.
- How users currently cope: Customers order verbally, pick familiar items, avoid customization, ask staff questions, or leave if the line feels slow. Operators repeat details, use shorthand, limit customization, and manually resolve unclear orders.

## Problem Statements

### Primary Customer Problem

I am a lunch customer trying to order a customized curry quickly, but I hesitate when options, spice levels, dietary details, or pickup expectations are unclear, because I do not want to hold up the line or receive the wrong meal, which makes me feel rushed and uncertain.

Evidence trace: Time-Pressed Regular and Curious First-Timer personas; customer journey stages for browse, customize, review, and submit; Stage 02 findings on lunch constraints, mobile friction, and dietary risk.

Confidence: Medium.

### Operator Problem

Curry Cruiser operators are rush-hour staff who need complete, standardized, and operationally valid order details because ambiguous customizations, unsupported combinations, unavailable items, and unclear dietary requests slow prep and increase the risk of mistakes.

Evidence trace: Rush-Hour Operator persona; operator fulfillment journey; Stage 02 staff research questions and digital ordering competitor patterns.

Confidence: Medium-Low. Operator needs are plausible but require direct staff validation.

### Service-Level Problem

Curry Cruiser needs the digital ordering experience to improve the full customer-to-operator handoff, because a customer-facing flow that looks polished but produces unclear tickets will simply move friction from the line to the kitchen.

Evidence trace: Aggregated empathy map insight that the design must optimize the complete service loop; Stage 02 risk that digital ordering may be perceived as extra work.

Confidence: Medium.

## User Needs Statements

### Time-Pressed Customer

Maya needs a way to choose, customize, review, and submit a curry order quickly because her lunch break is short and she wants confidence that the order is correct before it reaches the truck.

Success means a standard order can be completed in under two minutes, with users able to review and edit choices before submitting.

### First-Time Customer

Jordan needs a way to understand curry types, spice levels, and dietary signals without asking many questions because unfamiliar menu language and line pressure can make ordering feel risky.

Success means first-time users can explain their selected curry, spice level, and dietary assumptions after ordering.

### Operator

Sam needs a way to receive orders in a consistent, compact, and fulfillable format because rush-hour prep depends on quickly reading the same kinds of details in the same order every time.

Success means operators can identify curry type, base, protein, spice, add-ons, exceptions, and pickup identifier without clarification.

### Accessibility And Situational Needs

Customers need an ordering flow that remains usable with one hand, outdoor glare, background noise, time pressure, and small screens because the food truck environment is not a calm desktop setting.

Success means primary choices meet mobile tap-target expectations, labels remain visible, selected states are clear, and the flow has no typing-dependent steps.

## Key Insights

1. Digital entry is not the product. Reduced friction is the product.
2. Customer confidence depends on review, confirmation, and plain-language choices.
3. Operator trust depends on standardized ticket structure and valid customization rules.
4. Predefined options can reduce ambiguity, but only if they reflect the actual Curry Cruiser menu and prep constraints.
5. Allergy and dietary handling must be cautious; the interface should not imply safety that operations cannot guarantee.
6. The best flow must balance two opposite needs: fast defaults for regulars and enough explanation for first-time customers.

## Hypothesis Statements

### Hypothesis 1: Guided Predefined Customization

If Curry Cruiser uses predefined choice groups for curry type, base, protein, spice, add-ons, and dietary signals, then customers will complete orders with less hesitation and fewer invalid requests because they will not need to type, invent, or verbally explain customizations.

Observable signals:

- Standard order completion time under two minutes.
- Fewer incomplete or unsupported order combinations in prototype tests.
- Users can identify their selected choices on the review screen.

Confidence: Medium.

### Hypothesis 2: Review Before Submit

If customers see a concise review screen before submission, then they will feel more confident and catch more mistakes because submitted mobile orders may be difficult to edit after reaching operators.

Observable signals:

- Users use edit controls successfully during test tasks.
- Fewer users express uncertainty after submission.
- Test participants can answer "what did you order?" without reopening previous steps.

Confidence: Medium-High.

### Hypothesis 3: Operator-Readable Ticket Format

If submitted orders follow a consistent operator ticket format, then Curry Cruiser staff will parse and fulfill orders faster because each ticket presents curry, base, protein, spice, add-ons, dietary markers, exceptions, and pickup ID in the same sequence.

Observable signals:

- Operators can read sample tickets without asking for clarification.
- Operators identify exceptions or unavailable items quickly.
- Staff rate ticket readability as better than handwritten or verbal shorthand.

Confidence: Medium-Low until staff testing occurs.

### Hypothesis 4: Progressive Help For First-Time Users

If the flow includes concise descriptions, spice guidance, and visible dietary/allergen cues without forcing long reading, then first-time customers will choose more confidently while regulars can still move quickly.

Observable signals:

- First-time users correctly distinguish curry options and spice levels.
- Regular users do not report that helper content slows them down.
- Users with dietary concerns know when they need staff confirmation.

Confidence: Low-Medium.

### Hypothesis 5: Flexible Digital Access

If Curry Cruiser treats QR, link, signage, and other entry points as interchangeable access methods, then the project can focus on reducing ordering friction rather than making scanning behavior the success condition.

Observable signals:

- Users can begin ordering without needing instruction about a specific access method.
- Usability tests focus failure points on ordering clarity, not QR mechanics.
- Customer fallback to counter ordering remains available when digital access fails.

Confidence: Medium.

## Problem/Hypothesis Pairs

| Problem | Hypothesis | Test Signal |
|---------|------------|-------------|
| Customers hesitate when curry options, spice levels, or dietary signals are unclear. | Guided predefined customization and concise helper text will reduce hesitation. | Time on task, fewer clarification questions, user confidence rating. |
| Customers worry that a submitted order may be wrong. | Review-before-submit will increase confidence and catch mistakes. | Successful edits, fewer post-submit doubts, correct order recall. |
| Operators lose time interpreting inconsistent or ambiguous orders. | Standardized ticket structure will improve operator readability. | Staff comprehension test, fewer clarification needs, faster ticket parsing. |
| Digital ordering can become extra work if it does not improve the full service loop. | Flexible access plus short customer flow plus operator-ready handoff will reduce friction across the whole service. | Customer completion speed, operator readability, perceived effort from both sides. |
| Dietary/allergen needs are risky without free text. | Explicit badges plus staff-confirmation prompts for uncertain cases will be safer than silent assumptions. | Users identify when to ask staff; operators confirm whether language is operationally accurate. |

## Value Proposition

For busy lunch customers and Curry Cruiser operators who need fast, accurate curry orders during food truck service, Curry Cruiser's digital ordering experience helps customers customize confidently and helps operators fulfill orders clearly by turning menu choices into predefined, reviewable, operator-readable order details, unlike purely verbal ordering or generic digital menus that can leave ambiguity in the customer-to-kitchen handoff.

## Difference From Current Workarounds

- Unlike verbal ordering, the flow can show all selected choices before submission.
- Unlike free-text notes, predefined options reduce interpretation work.
- Unlike QR-only menu thinking, the solution does not depend on one entry method.
- Unlike customer-only ordering interfaces, success includes operator ticket readability.
- Unlike generic menu browsing, the design must enforce real Curry Cruiser prep constraints.

## Human Factors Rationale

- Hick's Law: Keep choices grouped and limited so users do not slow down under lunch pressure.
- Feedback loops: Show selected choices, review state, submission confirmation, and pickup expectation.
- Mental models: Use familiar menu, cart, edit, and confirmation patterns from mobile ordering without importing marketplace complexity.
- Serial position effect: Put the most essential choices early and the final order summary at the end.
- Isolation effect: Make exceptions, unavailable choices, dietary warnings, and submit actions visually distinct.

## Define Risks And Open Questions

- Menu risk: The actual Curry Cruiser menu may not fit the assumed customization model.
- Operator risk: Staff may need different ticket details than the current artifact assumes.
- Payment risk: It remains unclear whether the digital solution should include payment or only ordering.
- Allergy risk: Dietary/allergen claims require operational validation before being presented as safe.
- Adoption risk: Customers may not use the digital flow if counter ordering feels faster.
- Complexity risk: First-time guidance could slow regulars if helper content is not optional or lightweight.

## Guiding Definition For Ideation

Design a mobile-first digital ordering flow that helps Curry Cruiser customers build a valid curry order quickly and confidently, while giving operators a standardized, readable order handoff that reduces clarification, mistakes, and rush-hour workload.

## Stage 04 Audit

- User need focus: Pass. Statements focus on speed, confidence, clarity, and operator fulfillment rather than prescribing a specific UI.
- Testability: Pass. Hypotheses include observable outcomes such as completion time, edit success, order recall, and operator readability.
- Value clarity: Pass. The value proposition names the users, problem, outcome, and difference from current workarounds.
- Evidence trace: Pass. Claims connect back to Stage 02 research and Stage 03 empathize artifacts, with unresolved risks named directly.
