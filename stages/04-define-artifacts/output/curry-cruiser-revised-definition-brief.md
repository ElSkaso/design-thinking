# Definition Brief: Curry Cruiser Revised

## Purpose

Define the UX problem, user needs, testable hypotheses, and value proposition for Curry Cruiser's revised food truck ordering experience. This brief narrows the design target for Stage 05 while preserving uncertainty from the research and empathize stages.

## Inputs

- Stage 02 research dossier: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`
- Stage 03 empathize artifacts: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`
- Evidence status: medium desk-research support, low direct-user confidence because Stage 03 participants are synthetic

## Definition Summary

Curry Cruiser customers need to submit complete, understandable curry orders under food truck time pressure, while staff need structured, operationally valid order details they can prepare without clarification. The core design challenge is not simply "make ordering digital." It is to balance customer confidence, speed, menu guidance, and staff-readable order structure without relying on free-text fields or making QR-code access mandatory.

## 5W and H Check

| Question | Working Definition |
|---|---|
| Who experiences the problem? | Time-pressed customers, first-time curry customers, cautious mobile-ordering customers, and Curry Cruiser staff. |
| What barrier are they facing? | Customers may hesitate or submit incomplete/unclear orders; staff may receive ambiguous, unsupported, or hard-to-scan requests. |
| Where does it occur? | In and around the food truck ordering context, often on mobile devices and during busy service windows. |
| When does it occur? | When customers choose curry options, review an order, submit it, and wait for pickup; for staff, when reading and preparing incoming orders. |
| Why is it important? | Ordering friction slows customers down, increases clarification loops, and adds operational load during rush periods. |
| How do users currently try to reach their goal? | Customers likely order verbally, ask staff for guidance, choose familiar/safe options, or use generic mobile ordering patterns; staff likely clarify, rewrite, or interpret order details. |

## Primary Problem Statement

Curry Cruiser customers are trying to place customized curry orders quickly and confidently, but unfamiliar menu choices, time pressure, and uncertainty about submission can make ordering feel risky or slow, which can create hesitation for customers and clarification work for staff.

Confidence: Medium for the broad problem, low for Curry Cruiser-specific details until real customer and staff interviews occur.

## Supporting Problem Statements

### Riley: Time-Pressed Regular

I am Riley, trying to customize my usual lunch quickly, but too many unclear steps and weak confirmation make me worry the order will take longer than speaking to staff.

Evidence: Stage 03 Riley persona and journey; Stage 02 off-premises/mobile ordering signals.

### Maya: Curious First-Timer

I am Maya, trying to choose a curry I will enjoy, but unfamiliar curry names and spice labels make me unsure what I am selecting.

Evidence: Stage 03 Maya persona and journey; Stage 02 assumption that menu comprehension must be validated.

### Sam: Cautious Scanner

I am Sam, trying to order without tech anxiety, but QR-only access, small controls, or unclear error recovery can make the digital flow feel mandatory and untrustworthy.

Evidence: Stage 03 Sam persona and journey; Stage 02 QR access risk.

### Jordan: Peak-Service Expediter

I am Jordan, trying to prepare orders accurately during a rush, but missing choices, free-text notes, and unsupported requests make tickets slower to read and harder to fulfill.

Evidence: Stage 03 Jordan persona and journey; Stage 02 structured modifier and operational clarity findings.

## User Needs Statements

### Customer Needs

- Time-pressed customers need a way to complete required curry choices quickly because food truck ordering often happens under time and attention pressure.
  - Success means customers can submit a complete order without backtracking through avoidable ambiguity.

- First-time customers need a way to understand curry, spice, and included options before choosing because unfamiliar menu language can cause hesitation or safe-but-unsatisfying choices.
  - Success means customers can explain what they selected and why before submission.

- Cautious mobile-ordering customers need a way to access, review, and confirm orders without feeling forced into QR-only self-service because trust is required before digital ordering reduces friction.
  - Success means customers can identify a fallback path and see clear confirmation after submission.

### Staff Needs

- Curry Cruiser staff need submitted orders to use complete, supported, consistently ordered choices because ambiguous tickets slow preparation and handoff during rush periods.
  - Success means staff can identify curry, protein, spice, base, exceptions, and pickup identifier at a glance.

- Curry Cruiser staff need unsupported choices and complex exceptions to be handled before submission because resolving them mid-service interrupts prep flow.
  - Success means staff receive fewer clarification-triggering orders.

## Key Insights

1. Speed depends on clarity, not just fewer screens.
   - Riley's synthetic interview shows that fast users still want review and confirmation. Removing friction should not remove confidence.

2. Guidance is a core ordering function for unfamiliar curry choices.
   - Maya's journey shows that predefined choices still need explanation. Structured options without plain-language guidance may shift friction from staff to the interface.

3. QR access is an entry method, not the value proposition.
   - Sam's journey and Stage 02 QR risk show that QR-only ordering could exclude or annoy customers. The core experience must work through multiple entry paths.

4. Staff clarity is a user need, not a back-office afterthought.
   - Jordan's journey shows that order ticket design shapes service speed. Customer-facing customization must be bounded by operational feasibility.

## Constraints

- No free-text fields for routine customization.
- Use predefined options for supported curry choices, modifiers, and common exceptions.
- QR-code access may be used but must not be mandatory.
- Keep payment out of core scope until Curry Cruiser confirms payment requirements.
- Preserve staff-readable order structure as a primary design requirement.
- Treat all synthetic interview-derived claims as validation targets, not final proof.

## Hypothesis Statements

### Hypothesis 1: Required Structured Choices

If the ordering flow presents curry customization as required, clearly grouped choices, then customers will submit more complete orders because the system prevents missing critical prep details before submission.

Observable signal: Fewer incomplete orders in prototype testing; users can submit without staff clarification in task walkthroughs.

### Hypothesis 2: Plain-Language Option Guidance

If curry types, spice levels, and included items use short plain-language explanations, then first-time customers will choose with more confidence because they can understand taste and heat before committing.

Observable signal: First-time users can describe their chosen curry and spice level after completing the flow.

### Hypothesis 3: Review Before Submit

If users see a human-readable order review before submission, then both confident and cautious customers will feel safer submitting because they can verify the complete order in their own language.

Observable signal: Users report higher confidence and make fewer correction attempts after submission.

### Hypothesis 4: Optional QR Entry

If QR access is offered alongside a direct or staff-assisted fallback, then digital ordering can reduce friction for comfortable users without excluding cautious or constrained users.

Observable signal: Users can name at least one non-QR fallback path; QR-hesitant participants still complete or understand the flow.

### Hypothesis 5: Staff-Readable Ticket Structure

If submitted orders are formatted in the same sequence staff use to prepare curry, then staff can read and act on orders faster because cognitive translation is reduced.

Observable signal: Staff or proxy evaluators can identify required prep details in five seconds or less during ticket review.

## Problem / Hypothesis Pairs

| Problem | Hypothesis | Test Signal | Evidence Status |
|---|---|---|---|
| Customers may submit incomplete or unclear curry orders. | Required, grouped choices will reduce missing prep details. | Prototype orders contain all required fields. | Medium desk-research support; direct validation needed. |
| First-time customers may not understand curry names or spice labels. | Plain-language descriptions will increase choice confidence. | Users can explain selected options after task completion. | Low; synthetic persona signal. |
| Cautious customers may distrust QR-only or unclear mobile ordering. | Optional entry and clear confirmation will preserve trust. | QR-hesitant users identify fallback and confirmation. | Low-to-medium; QR risk plus synthetic signal. |
| Staff may lose time interpreting free-text or inconsistent tickets. | Staff-sequenced tickets will reduce scanning and clarification effort. | Staff can read required details quickly. | Medium vendor evidence; direct staff validation needed. |

## Value Proposition

For Curry Cruiser customers ordering under food truck time pressure, the revised ordering experience helps them submit a complete, confident curry order by turning customization into clear, predefined choices with guidance and review, unlike verbal ordering or generic free-text notes that can create ambiguity for both customers and staff.

For Curry Cruiser staff, the same experience creates operational value by converting customer choices into complete, consistently structured order details that are easier to prepare during busy service.

## Human Factors Rationale

- Mental models: Customers bring expectations from food delivery apps and counter ordering, so the flow should use familiar selection, review, and confirmation patterns.
- Feedback loops: Users need immediate confirmation that staff received the order and know how pickup will work.
- Hick's Law: Too many simultaneous curry choices can slow decisions; grouping choices by prep sequence can reduce perceived complexity.
- Serial position effect: Put the most foundational choices early, such as curry and protein, and the final confirmation last.
- Isolation effect: Use visual emphasis for required choices, selected states, and final submit confirmation.

## Definition Decision for Stage 05

Stage 05 should ideate around a mobile-first, structured curry ordering flow with:

- required grouped customization choices;
- short guidance for unfamiliar curry and spice options;
- visible order review before submit;
- optional QR entry with fallback;
- staff-readable order output;
- no routine free-text customization.

The chosen problem frame is broad enough for multiple interface directions but narrow enough to guide wireframes.

## Open Questions for Ideation

- What exact curry types, proteins, bases, spice levels, add-ons, and exceptions are operationally valid?
- Should allergy handling be predefined only, or should complex allergy cases route users to staff?
- Is pickup handled by name, number, timestamp, phone number, or another identifier?
- Should payment be included, deferred, or explicitly excluded from the first prototype?
- What fallback should customers see if the QR code fails or they prefer staff help?

## Confidence and Evidence Notes

- Medium confidence: mobile/off-premises ordering relevance, structured modifier feasibility, food truck need for speed and convenience.
- Low confidence: Curry Cruiser's exact customer behaviors, menu categories, staff workflow, payment model, and pickup process.
- Evidence gap: no real interviews or operational observations yet.

