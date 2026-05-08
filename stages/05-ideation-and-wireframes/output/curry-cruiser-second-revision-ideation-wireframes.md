# Ideation And Wireframes: Curry Cruiser Second Revision

## Goal Statements

- The Curry Cruiser ordering experience will let customers submit a complete Thai curry order through predefined choices so they can order quickly without creating ambiguous requests. Success will be measured by standard-order completion time, order validity, and reduced clarification loops.
- The experience will help careful customizers understand supported dietary, ingredient, and spice choices so they can decide whether the meal fits their needs before submission. Success will be measured by restriction-recognition tasks and confidence ratings.
- The experience will give Curry Cruiser staff kitchen-readable orders so they can prepare customized dishes accurately during rush service. Success will be measured by staff ability to interpret test tickets without follow-up questions.
- The entry model will support QR access without depending on it so customers can still order when scanning, connectivity, or comfort becomes a barrier. Success will be measured by successful fallback-path discovery.

## How Might We Questions

- How might we help time-pressed customers order a satisfying curry quickly when customization choices could otherwise slow them down?
- How might we make predefined customization feel flexible enough without letting unsupported requests reach staff?
- How might we help customers understand spice, dietary, and ingredient implications before they submit?
- How might we make QR access useful without making QR scanning the only door into ordering?
- How might we translate a customer-friendly order flow into a staff-friendly ticket format?
- How might we handle sold-out items and unsupported combinations before they become counter-service problems?
- How might we make the review step catch errors without becoming a long checkout page?

## Competitive Design Patterns

- Review goal: Identify ordering and menu-configuration patterns that reduce decision friction and operational ambiguity for a small food truck.
- Competitors reviewed: Toast Online Ordering, ChowNow menu/modifier tools, DoorDash marketplace ordering, Square-style lightweight ordering, verbal counter ordering, static menu boards.
- Direct competitors: Food truck ordering tools, independent restaurant online ordering, QR ordering flows.
- Indirect competitors: Verbal ordering, menu boards, marketplace pickup ordering.
- Common patterns: Menu categories, item details, required modifier groups, optional add-ons, disabled unavailable items, cart/review screen, order confirmation, pickup/delivery selection.
- Notable strengths: Modifier groups can enforce required choices; online menus can hide unavailable items; confirmation screens set pickup expectations; familiar review screens reduce anxiety.
- Notable weaknesses: Generic ordering tools can create too many choices, bury dietary details, require accounts, or make QR access feel mandatory.
- Market gaps: A focused food-truck flow can be narrower than marketplace ordering and more structured than verbal ordering.
- Implications for our product: Use required groups for curry type, protein/base, spice, and pickup identity; keep optional add-ons limited; make unavailable states explicit; avoid account creation.
- Risks of copying competitors: Marketplace-style browsing may slow the lunch context, and generic modifier lists may expose kitchen complexity instead of guiding customers.

## Concept Directions

1. Guided Curry Builder
   - Screen/workflow idea: Step-by-step flow with required choices first: curry, protein, base, spice, dietary flags, review.
   - User value: Reduces hesitation and prevents incomplete orders.
   - Staff value: Produces consistent ticket structure.
   - Risk: Too many steps may feel slow if each choice gets its own screen.

2. Recommended Combos First
   - Screen/workflow idea: Start with "House picks" or popular combinations, then let users adjust.
   - User value: Helps fast default seekers submit quickly.
   - Staff value: Promotes operationally simple combinations.
   - Risk: Could hide customization for careful users if not balanced.

3. Menu Board Companion
   - Screen/workflow idea: Digital flow mirrors posted truck menu and supports direct URL/QR entry.
   - User value: Makes digital choices match what customers see in person.
   - Staff value: Reduces mismatch between verbal and digital menu language.
   - Risk: Requires accurate menu-board coordination.

4. Staff Ticket Preview
   - Screen/workflow idea: Customer review screen displays the same structured order sections staff will receive.
   - User value: Builds confidence that key details are visible.
   - Staff value: Reduces missing or buried modifiers.
   - Risk: Kitchen terminology could confuse customers if not translated well.

5. Dietary Gate
   - Screen/workflow idea: Early dietary/allergy prompt routes users to supported options or staff fallback.
   - User value: Prevents unsafe hidden assumptions.
   - Staff value: Flags critical constraints early.
   - Risk: Too much caution could slow simple orders.

Selected direction:

Combine Guided Curry Builder, Recommended Combos First, Staff Ticket Preview, and optional Menu Board Companion. Dietary handling should be embedded as a clear structured step, not a free-text field or hidden footer.

## Feature Prioritization

| Priority | Feature | Evidence Basis | UX Reason | Notes |
|---|---|---|---|---|
| Must | Guest entry via QR or direct link | QR mixed-signal evidence; P3 | Prevent QR-only abandonment. | No account wall. |
| Must | Guided curry builder with required predefined choices | P1, P4, definition hypotheses | Reduces hesitation and incomplete orders. | Required groups: curry, protein, base, spice. |
| Must | Structured dietary/allergen/preference choices | P2, no-free-text risk | Makes no-free-text safer and more inclusive. | Include "I need staff help" fallback. |
| Must | Review and submit screen | P1, P2, P4 | Lets customer catch mistakes and staff receive clean data. | Mirror staff ticket structure. |
| Must | Confirmation with order ID and next step | P1, P4 | Supports pickup handoff and payment expectations. | Clarify if payment happens at truck. |
| Must | Unavailable/disabled option states | P4, competitor patterns | Prevents invalid orders. | Include short reason. |
| Should | Recommended combo shortcut | P1 | Speeds default orders. | Allow edit after selection. |
| Should | Spice-level explanations | P2 | Reduces ambiguity. | Short labels such as "warm," "medium heat," "very spicy." |
| Should | Staff ticket format spec | P4 | Makes service impact explicit. | Not necessarily a customer screen. |
| Could | Order timing estimate | P1 | Reduces post-submit uncertainty. | Needs operational validation. |
| Could | Saved favorites | P1 | Helps repeat customers. | Defer; not validated and may imply accounts. |
| Won't for now | Payment, loyalty, delivery, user accounts | Definition limits | Adds scope and friction without current evidence. | Revisit only if research proves central. |

## User Flow

1. Customer sees Curry Cruiser sign, QR, short URL, or staff-shared link.
2. Customer opens the ordering experience as a guest.
3. Landing/start screen confirms Curry Cruiser, current ordering availability, and primary action: "Build a curry."
4. Customer chooses either a recommended combo or custom build.
5. Customer completes required predefined choices:
   - Curry type
   - Protein or main component
   - Base
   - Spice level
   - Add-ons, if available
   - Dietary/allergen/preference choices
6. System prevents missing required choices and unavailable combinations.
7. Customer reviews the order in staff-ticket order.
8. Customer enters/selects pickup identifier using predefined-safe input rules. If no text fields are allowed at all, use order number generated after submit and optional initials selector only if validated.
9. Customer submits order.
10. Confirmation shows order number, summary, estimated pickup/payment instruction, and fallback instruction if something is wrong.
11. Staff receives a structured ticket:
   - Order ID
   - Curry
   - Protein/main
   - Base
   - Spice
   - Add-ons
   - Dietary/allergy flags
   - Payment/pickup status if in scope

## Screen Requirements

### Screen 1: Entry / Start

- Content: Curry Cruiser name, service status, short explanation, QR/direct access support, primary "Build a curry" action.
- Main actions: Start order; view fallback instruction.
- States: Closed/unavailable, loading, connection error.
- Accessibility: Large primary action, readable contrast, no account prompt.
- Evidence link: P1 speed, P3 access fragility.

### Screen 2: Recommended Or Custom Choice

- Content: 2-3 recommended curry combinations and a custom-build option.
- Main actions: Choose recommended combo, customize combo, start custom.
- States: Recommended item unavailable; all recommended combos unavailable.
- Accessibility: Do not rely on photos alone; include text labels and dietary tags.
- Evidence link: P1 fast default seeker, P2 careful choice maker.

### Screen 3: Curry Builder

- Content: Grouped predefined choices for curry type, protein/main, base, spice, add-ons.
- Main actions: Select required options, continue, go back.
- States: Missing required choice, disabled unavailable option, incompatible combination.
- Accessibility: Use radio/checkbox semantics, clear selected states, visible errors, adequate target spacing.
- Evidence link: P4 staff ticket needs, WCAG controls.

### Screen 4: Dietary And Restrictions

- Content: Structured options such as vegetarian, vegan, contains nuts, gluten-conscious, shellfish/fish sauce note, no listed restriction, need staff help.
- Main actions: Select supported preference/restriction, continue.
- States: Unsupported need; staff-help route; restriction conflicts with selected item.
- Accessibility: Plain language, labels and instructions, no hidden critical text.
- Evidence link: P2 no-free-text trust risk.

### Screen 5: Review Order

- Content: Order summary in kitchen-readable sequence, total if pricing is known, pickup/payment note, edit links.
- Main actions: Edit section, submit order.
- States: Missing required detail, unavailable option changed since selection, submit error.
- Accessibility: Section headings, clear button labels, error identification.
- Evidence link: P1 confirmation need, P4 readable ticket.

### Screen 6: Confirmation

- Content: Order number, concise summary, pickup instruction, payment instruction if payment is outside the flow, staff fallback if changes are needed.
- Main actions: Show order number, start another order only if validated.
- States: Submitted, submission uncertain, duplicate submission warning.
- Accessibility: Large order ID, text-based confirmation, status message.
- Evidence link: Pickup handoff needs from P1 and P4.

### Staff Ticket Requirement

- Content: Order ID, timestamp, item sequence, key modifiers, dietary flags, unavailable override status if any.
- Main actions: Mark received/preparing/ready if a staff interface is later built.
- States: New order, error/invalid, item sold out after submit.
- Accessibility: High contrast, scannable grouping, minimal visual noise.
- Evidence link: P4 staff operator journey.

## Wireframe Requirements

- Layout should be mobile-first, single-column, and suitable for outdoor one-handed use.
- The first viewport must make Curry Cruiser identity, order availability, and the next action obvious.
- Required choice groups should be visually separated with concise labels and helper text.
- Use segmented cards, radio groups, checkboxes, or steppers for predefined choices; do not use free-text customization fields.
- The customer should always know progress through the order without needing a complex progress tracker.
- Recommended combos should be editable, not locked.
- Dietary and allergy choices must appear before final review and remain visible in the summary.
- Disabled options must show why they are unavailable.
- Review should display choices in the same order staff will read them.
- Submit should be blocked until required fields are complete.
- Confirmation should show a large order number and the next physical action: wait, pay at truck, or see staff.
- Error states should be specific: missing selection, sold out, connection/submission uncertainty, unsupported dietary need.
- Accessibility requirements: WCAG AA contrast, visible focus, labeled controls, clear error messages, target sizes meeting or exceeding WCAG 2.2 AA minimum guidance, and no color-only meaning.
- No-app constraint: This artifact is ready for design/prototype planning, but Stage 07 implementation remains disabled by workspace setup unless explicitly reopened.

## Ideation Limits

- The menu, pricing, ingredients, allergen policy, and payment model are still unknown.
- Wireframes are requirements-level, not high-fidelity visual screens.
- Staff ticket requirements are based on synthetic operator needs and need Curry Cruiser validation.
- Recommended combos should not be finalized without menu and sales/prep input.
- The no-free-text constraint remains risky for allergies and unusual needs; the design must provide structured fallback rather than silently rejecting complexity.
