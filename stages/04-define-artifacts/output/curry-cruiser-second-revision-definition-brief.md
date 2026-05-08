# Definition Brief: Curry Cruiser Second Revision

## Problem Statements

1. Maya, a time-pressed food truck customer, is trying to order a satisfying Thai curry quickly, but open-ended customization and unclear option priority make her hesitate, because she does not want to slow the line or submit the wrong order.
   - Evidence basis: P1 synthetic interview, off-premise speed findings.
   - Confidence: Medium.
   - Design implication: Prioritize guided defaults and a short required-choice path.

2. Priya, a careful customizer, needs to understand spice, dietary, and ingredient constraints before submitting, but a no-free-text flow can feel unsafe if her need is not represented, because she cannot trust that staff will see or support the exception.
   - Evidence basis: P2 synthetic interview, no-free-text risk, WCAG labels/instructions relevance.
   - Confidence: Medium.
   - Design implication: Convert common dietary needs into structured options and route unsupported needs to staff before submission.

3. Andre, an access-fragile customer, is willing to use digital ordering only if it feels faster and more reliable than speaking to staff, but QR-only entry, slow loading, or small mobile controls can make the ordering experience feel like extra work.
   - Evidence basis: P3 synthetic interview, mixed QR-code adoption signals, accessibility standards.
   - Confidence: Medium.
   - Design implication: Make QR optional, support direct/fallback entry, and keep the first screen lightweight.

4. Lina, a rush-mode staff operator, needs complete and standardized order information, but ambiguous choices, missing modifiers, and unsupported requests force staff to interpret orders during the busiest moments.
   - Evidence basis: P4 synthetic interview, mobile food-service context, competitor modifier patterns.
   - Confidence: Medium.
   - Design implication: Treat the staff-readable order ticket as a core UX output.

## User Needs

- Fast Default Seekers need a way to complete a valid curry order with minimal decision overhead because food truck ordering often happens under time and line pressure. Success means users can submit a complete standard order without staff clarification.
- Careful Choice Makers need a way to understand dietary, ingredient, and spice implications before submitting because no-free-text ordering can otherwise hide important needs. Success means users can identify whether their needs are supported before checkout or submission.
- Access-Fragile Customers need a way to start and complete ordering without being trapped by QR-only access because mobile context, glare, privacy concern, or connectivity can block adoption. Success means customers can still order when scanning fails or is undesirable.
- Rush-Mode Staff need a way to receive complete, structured, fulfillable orders because ambiguity turns into delays and errors during peak service. Success means every submitted order includes required choices, pickup identity, and key modifiers in a consistent order.

## Hypotheses

- If the flow opens with a recommended curry path and only asks for essential choices first, then time-pressed customers will complete orders faster and with less hesitation, because the design reduces equal-weight decision overload.
- If dietary, spice, and allergen-related choices are structured and visibly summarized, then careful customizers will trust the no-free-text flow more, because they can see how their needs are represented before submission.
- If QR access is paired with direct URL and staff fallback language, then access-fragile customers will be less likely to abandon, because the experience does not depend on one fragile entry method.
- If the submitted order summary mirrors kitchen workflow, then staff will need fewer clarification loops, because required choices and modifiers arrive in a consistent readable sequence.
- If unavailable options are disabled with a reason before submission, then customers will submit fewer invalid orders, because the system prevents unsupported combinations at the point of choice.
- If payment remains outside the flow but confirmation clearly explains next steps, then customers will still feel oriented after submit, because the handoff expectation is explicit.

## Problem / Hypothesis Pairs

| Problem | Hypothesis | Observable Outcome |
|---|---|---|
| Customers hesitate when every customization choice appears equally important. | A guided default path with essential choices first will reduce decision time. | Task completion under two minutes in usability testing for a standard order. |
| No-free-text ordering can exclude dietary or allergy needs. | Structured dietary options plus unsupported-need fallback will improve confidence. | Users can correctly identify whether their restriction is supported before submit. |
| QR-only access can create adoption friction. | Multiple entry methods will reduce abandonment from scan/load failure. | Users can name at least one fallback path when QR access does not work. |
| Staff lose time interpreting inconsistent order details. | Kitchen-readable summaries with required fields will reduce clarification needs. | Staff can read test orders and identify all prep details without follow-up questions. |
| Sold-out or unsupported combinations create avoidable service errors. | Disabled unavailable choices and validation will prevent invalid submitted orders. | Test users cannot submit known unsupported combinations. |

## Value Proposition

For Curry Cruiser customers who want Thai curry quickly but still need meaningful customization, the ordering experience helps them submit a complete, confident order through guided predefined choices, unlike verbal or open-ended ordering that can create hesitation, ambiguity, and staff clarification.

For Curry Cruiser staff working under food truck rush conditions, the same experience creates standardized, kitchen-readable tickets that reduce interpretation work and prevent unsupported requests before they reach prep.

Evidence basis: Desk research supports the importance of speedy, intuitive off-premise ordering; synthetic interviews identify distinct needs for fast customers, careful customizers, access-fragile customers, and staff. Confidence is medium until real Curry Cruiser interviews and menu validation are complete.

## Definition Limits

- The definition is still based on desk research and synthetic interviews, not real Curry Cruiser field research.
- The exact menu structure, ingredient list, allergy policy, and staff ticket format are unknown.
- The product direction includes digital ordering, but it should not yet assume payment, accounts, loyalty, delivery, or a full production app.
- QR access remains an option, not a validated requirement.
- The no-free-text constraint is accepted as part of the brief, but it creates an inclusion and safety risk that must be mitigated through structured choices and fallback guidance.
