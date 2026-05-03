# Ideation And Wireframes: Curry Cruiser

## Purpose

Generate solution directions, prioritize features, and define wireframe requirements for Curry Cruiser's mobile-first digital Thai curry ordering experience.

## Inputs

- Research dossier: `stages/02-research-and-validation/output/curry-cruiser-research-dossier.md`
- Definition brief: `stages/04-define-artifacts/output/curry-cruiser-definition-brief.md`
- Design system: `shared/design-system.md`
- Ideate reference: `skills/design-thinking/references/ideate.md`

## Guiding Problem

Design a mobile-first digital ordering flow that helps Curry Cruiser customers build a valid curry order quickly and confidently, while giving operators a standardized, readable order handoff that reduces clarification, mistakes, and rush-hour workload.

## Competitive Audit Summary

- Audit goal: Identify useful ordering patterns and gaps for a food truck flow that reduces customer and operator friction.
- Competitors reviewed: Square Online Ordering, Toast Mobile Order & Pay, delivery marketplace ordering patterns, paper/menu-board plus counter ordering.
- Direct competitors: Square and Toast self-ordering flows for restaurants and food trucks.
- Indirect competitors: DoorDash/Uber Eats-style item customization, verbal counter ordering, printed menus, staff shorthand tickets.
- Common patterns: Menu browsing, item cards, option groups, cart review, order confirmation, pickup/payment expectation, POS or kitchen handoff.
- Notable strengths: Familiar mobile ordering mental models, standardized modifiers, review-before-submit, order status/pickup confirmation.
- Notable weaknesses: Generic restaurant flows may be too heavy for a short lunch order; QR-only framing can feel like extra work; allergy handling can be overconfident; customer-facing flows often ignore operator ticket readability.
- Market gaps: A focused, food-truck-specific order builder that treats operator handoff as part of the user experience.
- Implications for Curry Cruiser: Borrow familiar menu, option, review, and confirmation patterns, but keep the flow shorter than marketplace apps and design the submitted ticket as a first-class artifact.
- Risks of copying competitors: Importing account creation, large menus, promo clutter, delivery marketplace complexity, or QR dependence would weaken the core friction-reduction goal.

## Product Goals

1. Curry Cruiser's digital ordering experience will let lunch customers build a valid curry order quickly so they can submit with confidence during a short break. Success is measured by standard order completion under two minutes and successful order recall after submission.
2. Curry Cruiser's digital ordering experience will let first-time customers understand curry, spice, and dietary choices so they can choose without slowing the line. Success is measured by fewer clarification questions and correct understanding of selected options.
3. Curry Cruiser's order handoff will let operators read every order in a consistent structure so they can prepare food with less interpretation. Success is measured by operator comprehension of sample tickets without clarification.
4. Curry Cruiser's flow will preserve flexible digital entry so access method does not become the success condition. Success is measured by users starting the flow from a link, sign, QR code, or saved shortcut without confusion.

## How Might We Questions

- How might we help rushed lunch customers customize a curry quickly without making the flow feel like extra work?
- How might we give first-time curry customers just enough guidance without slowing regulars down?
- How might we make every submitted order readable and actionable for operators during rush service?
- How might we prevent unsupported combinations before the customer submits?
- How might we handle dietary and allergen concerns clearly without unsafe free-text promises?
- How might we make the pickup moment feel confirmed and calm?
- How might we keep digital access flexible so QR scanning remains optional?
- How might we make the operator handoff as intentionally designed as the customer menu?

## Rapid Sketch Set

### Sketch 1: One-Page Builder

- Screen/workflow idea: A single page with curry cards, option sections, sticky summary, and submit.
- User value: Very fast for regulars.
- Risk: First-time users may feel overwhelmed by too many choices at once.

### Sketch 2: Step-By-Step Order Wizard

- Screen/workflow idea: One decision per step: curry, base, protein, spice, extras, review.
- User value: Clear, low cognitive load, easy to validate required choices.
- Risk: Could feel slower if there are too many steps.

### Sketch 3: Popular Combos First

- Screen/workflow idea: Start with recommended curry combos, then allow edits.
- User value: Fast path for uncertain customers.
- Risk: May hide customization or bias users toward limited options.

### Sketch 4: Split Customer And Operator Preview

- Screen/workflow idea: Customer review includes a "what the truck receives" ticket preview.
- User value: Builds trust that the order is captured correctly.
- Risk: Operator-style detail may feel too technical if overexposed.

### Sketch 5: Rush Mode Menu

- Screen/workflow idea: Operators can mark a simplified lunch-rush menu with fewer active options.
- User value: Prevents impossible or slow choices.
- Risk: Requires operator controls outside the customer prototype scope.

### Sketch 6: Dietary First Filter

- Screen/workflow idea: Users optionally choose vegetarian, vegan, or allergen concerns before menu browsing.
- User value: Helps users avoid unsafe choices earlier.
- Risk: Could create false safety if the operation cannot guarantee allergen separation.

### Sketch 7: Quick Reorder Shortcut

- Screen/workflow idea: Returning customers can repeat a prior order from local device history.
- User value: Strong speed benefit for regulars.
- Risk: Needs storage and may be premature for first prototype.

### Sketch 8: Counter-Fallback Support

- Screen/workflow idea: Digital flow includes a "show this order at counter" fallback when submission/payment is unavailable.
- User value: Preserves value even without full backend integration.
- Risk: May blur whether the app submits orders or only prepares an order summary.

## Selection

- Strongest directions: Step-By-Step Order Wizard, Popular Combos First, Operator Ticket Preview, Rush Mode constraints.
- Combined idea: A guided mobile order builder where customization feels like part of selecting a dish. Users select and customize one dish, confirm it into a cart, repeat for multiple dishes, then confirm the full order and track order state.
- Why this direction fits the evidence: It reduces mobile typing, supports lunch time pressure, keeps guidance lightweight for first-timers, gives operators standardized information, and avoids making QR scanning the core feature.

## Feature Candidates

| Priority | Feature | User/Operator Value | Evidence Trace | Notes |
|----------|---------|---------------------|----------------|-------|
| Must | Mobile menu with curry options | Starts ordering quickly | Food truck speed, mobile-first evidence | Keep menu short and scannable. |
| Must | Predefined option groups | Reduces typing and ambiguity | Mobile checkout friction, no free text constraint | Curry, base, protein, spice, add-ons. |
| Must | Cart before final confirmation | Supports multi-dish orders and final review | Revised product flow | Users can add multiple dishes before confirming the order. |
| Must | Operator-readable ticket summary | Reduces staff interpretation | Operator persona and service problem | Same sequence every time. |
| Must | Confirmation and pickup identifier | Reduces uncertainty after submit | Journey map submit/pickup pain | Can be simulated in prototype. |
| Must | Unavailable/invalid option states | Prevents impossible orders | Operator risk and prep constraints | Prototype at least one sold-out state. |
| Must | Dietary/allergen badges and caution language | Supports safe decision-making | FDA/allergen risk | Do not imply guaranteed safety. |
| Should | Popular combo presets | Speeds regulars and guides first-timers | Progressive help hypothesis | Allow full edit after choosing. |
| Should | Lightweight helper text | Helps first-time customers | Curious First-Timer persona | Keep optional and concise. |
| Should | Operator queue concept | Shows staff-side value | Operator journey | May be a wireframe, not full app MVP. |
| Should | Flexible access message | Avoids QR dependence | User correction and Stage 04 | Entry can be link/sign/QR/saved shortcut. |
| Could | Local quick reorder | Helps regulars | Time-Pressed Regular persona | Defer unless app scope grows. |
| Could | Payment step | Completes order loop | Open question | Defer until payment model confirmed. |
| Could | Operator rush mode toggle | Strong staff value | Rush-Hour Operator persona | Defer to admin/staff iteration. |
| Won't for first prototype | Free-text notes | Adds ambiguity | User constraint | Excluded by project constraint. |
| Won't for first prototype | Account creation | Adds friction | Speed goal | Excluded from MVP. |

## Selected MVP Direction

Create a mobile-first customer ordering prototype with a cart-based order loop. The customer chooses one dish, customizes it through predefined controls, confirms the customization into the cart, repeats until all dishes are added, confirms the full order, and receives an order number with state tracking.

## Primary User Flow

1. Customer opens Curry Cruiser digital ordering experience.
2. Customer selects one dish and customizes it as part of selection.
3. Customer confirms the customization, adding that dish to the cart.
4. Customer returns to dish selection and either adds another dish or moves forward to the cart.
5. Customer reviews the cart and confirms the full order.
6. Customer receives an order number and order state: Confirmed, In progress, or Finished.
7. Finished order numbers are called out at the truck.

## Wireframe Requirements

### Screen 1: Menu / Start Order

- Purpose: Get users into ordering quickly while showing the product context.
- Key content:
  - Curry Cruiser name
  - Open/available status
  - Short pickup expectation
  - Curry cards or popular combos
  - Flexible access note if needed, but no QR dependency
- Main actions:
  - Start with a curry
  - View dietary info
  - Use counter fallback
- States:
  - Loading menu
  - Sold-out curry card
  - Closed/unavailable state
  - Empty menu state
- Design notes:
  - No marketing hero; first viewport should be actionable.
  - Curry cards should show name, short description, price, spice baseline, and dietary badges.

### Screen 2: Curry Selection

- Purpose: Let users choose a curry or recommended combo.
- Key content:
  - Red curry, green curry, yellow curry, or menu-specific options
  - Popular combo labels
  - Short flavor descriptions
  - Dietary/allergen caution entry point
- Main actions:
  - Select curry
  - Continue
  - Back to menu
- States:
  - Selected curry
  - Unavailable curry
  - Help expanded/collapsed
- Design notes:
  - Use large tap targets and persistent selected state.
  - Helper text should be concise enough for regulars to skip.

### Screen 3: Customize Order

- Purpose: Build a valid curry order through predefined options.
- Key content:
  - Current curry selection
  - Base options: jasmine rice, brown rice, noodles, no base
  - Protein options: chicken, tofu, vegetables, shrimp, beef or menu-specific options
  - Spice options: mild, medium, hot, Thai hot
  - Add-ons: extra vegetables, herbs, crispy shallots, extra sauce
  - Dietary indicators: vegetarian possible, vegan ask staff, contains fish sauce, contains peanuts, contains soy, contains sesame
- Main actions:
  - Select options
  - Continue to review
  - Edit curry
- States:
  - Required option missing
  - Invalid combination
  - Sold-out option
  - Allergy caution
- Design notes:
  - Use segmented controls or button groups, not dropdowns where choices are few.
  - No free-text fields.
  - Selected choices should be visible without relying on color alone.

### Screen 4: Cart / Confirm Order

- Purpose: Let users review all customized dishes before confirming the full order.
- Key content:
  - Every dish in the cart
  - Curry, base, protein, spice, add-ons, dietary/allergen flags per dish
  - Edit and remove actions per dish
  - Estimated total
  - Reminder that finished order numbers will be called out
- Main actions:
  - Add another dish
  - Edit dish
  - Remove dish
  - Confirm order
- States:
  - Missing required information
  - Price unavailable
  - Submission disabled until valid
- Design notes:
  - Summary sequence should match operator ticket sequence.
  - Submit action must be visually distinct and accessible.

### Screen 5: Order Received / Status

- Purpose: Confirm the order and show order number plus status.
- Key content:
  - Order received message
  - Order number
  - Order state: Confirmed, In progress, Finished
  - Confirmed cart contents
  - Message that finished order numbers will be called out
- Main actions:
  - View order
  - Place another order
  - Return to menu
- States:
  - Submission loading
  - Submission failed
  - Order received
- Design notes:
  - Avoid vague success states.
  - Tell users how to resolve changes after submission.

### Screen 6: Order State Simulation

- Purpose: Represent the state users should see after confirming an order.
- Key content:
  - Confirmed state
  - In progress state
  - Finished state
  - Finished-number callout instruction
- Main actions:
  - Start new order
- States:
  - Confirmed
  - In progress
  - Finished
  - Confirmation failed
  - Empty cart

## Text-Only Wireframe Pack

### Wireframe A: Mobile Menu

```text
[Curry Cruiser]                         [Open]
Thai curry, built fast for lunch.
Pickup today: about 8-12 min

[Start an order]

Popular now
[Green Curry Combo]
Tofu, jasmine rice, medium spice
Vegetarian possible        $12.50
[Choose]

[Red Curry]
Rich coconut curry, bold spice
Contains fish sauce        $12.00
[Choose]

[Yellow Curry]
Mild, warm, potato-forward
Vegetarian possible        $11.50
[Choose]

Need allergen help? Ask staff before ordering.
Counter ordering is always available.
```

### Wireframe B: Customize

```text
Customize: Green Curry
[Change curry]

Base
[Jasmine rice selected] [Brown rice] [Noodles] [No base]

Protein
[Tofu selected] [Chicken] [Vegetables] [Shrimp sold out]

Spice
[Mild] [Medium selected] [Hot] [Thai hot]
Medium has noticeable heat.

Add-ons
[Extra vegetables] [Herbs selected] [Crispy shallots]

Dietary notes
[Vegetarian possible selected]
[Contains soy]
[Ask staff for allergy concerns]

Order summary
Green curry, jasmine rice, tofu, medium, herbs
[Review order]
```

### Wireframe C: Review

```text
Review your curry

Truck receives:
Order #24
Green Curry
Base: Jasmine rice
Protein: Tofu
Spice: Medium
Add-ons: Herbs
Dietary flag: Vegetarian possible
Allergy note: Ask staff for allergy concerns

[Edit curry] [Edit base] [Edit protein] [Edit spice]

Estimated total: $12.50
Pickup: Listen for order #24

[Submit order]
```

### Wireframe D: Confirmation

```text
Order received

Pickup number: #24
Estimated wait: 8-12 min

Green Curry
Jasmine rice, tofu, medium spice, herbs

Need to change something?
Please speak to Curry Cruiser staff now.

[Place another order]
[Back to menu]
```

### Wireframe E: Operator Ticket

```text
New order     #24     12:18 PM

GREEN CURRY
Base      Jasmine rice
Protein   Tofu
Spice     Medium
Add-ons   Herbs

Dietary   Vegetarian possible
Notice    Allergy concerns require staff check

[Mark in progress] [Flag issue]
```

## Interaction Requirements

- All customization must use predefined controls.
- No free-text fields in the customer order flow.
- Each required option group must show selected, unselected, disabled, and error states.
- Users must be able to edit choices from review before submit.
- Submission should simulate loading, success, and failure states.
- Confirmation should include a pickup identifier.
- Operator ticket must preserve a consistent field order.
- Dietary/allergen language must be cautious and operationally honest.
- Digital entry must not assume QR scanning as mandatory.

## Accessibility Requirements

- Target WCAG AA.
- Use visible labels for every control group.
- Maintain large touch targets and adequate spacing.
- Do not rely on color alone for selected, unavailable, allergen, or spice states.
- Keep focus order aligned with visual order.
- Ensure sticky actions do not obscure content.
- Use plain language for spice and dietary guidance.
- Keep the flow usable on small mobile screens and in outdoor glare.

## Design System Direction

- Brand style: clean, accessible, product-focused, realistic.
- Palette: neutral base with a restrained Thai-food-inspired accent, such as green or chili red, used sparingly for primary action and selected states.
- Layout: dense but calm mobile utility, not a decorative landing page.
- Components: cards for menu items, segmented/button groups for options, badges for dietary/allergen states, sticky bottom action for primary next step, compact ticket layout for operator handoff.
- Tone: direct, warm, and operational. Avoid playful copy that slows decision-making.

## Feature Scope For App Build

### Build In First Prototype

- Customer menu/start screen
- Curry selection
- Customization with predefined option groups
- Sold-out and disabled option example
- Dietary/allergen badges and caution message
- Review screen with edit links
- Simulated submit loading state
- Confirmation screen with pickup number
- Operator ticket preview or queue screen
- Responsive mobile-first layout

### Defer

- Real payment processing
- Real backend order submission
- Account creation
- Saved favorites or reorder history
- Full operator admin console
- Real-time inventory management
- Multilingual support

## App Readiness Notes

- Suggested default order for prototype task: green curry, jasmine rice, tofu, medium spice, herbs.
- Suggested invalid/sold-out state: shrimp sold out.
- Suggested allergy caution: "For allergy concerns, speak to staff before ordering."
- Suggested pickup identifier: generated order number, such as `#24`.
- Suggested success metric for usability test: complete default order in under two minutes, identify selected choices on review, and understand pickup next step.

## Stage 05 Audit

- Problem trace: Pass. Ideas trace to the Stage 04 definition around customer confidence, operator readability, and reduced friction.
- Feature discipline: Pass. Features are prioritized into must, should, could, defer, and excluded scope.
- App readiness: Pass. Wireframe requirements cover screens, flows, empty/loading/error/success states, accessibility, and operator handoff.
- QR correction: Pass. QR remains optional and is not treated as the core success condition.
