# Empathize Artifacts: Curry Cruiser

## Purpose

Translate the Stage 02 research dossier into human-centered artifacts for Curry Cruiser's digital Thai curry ordering experience. The project goal is to reduce friction for both lunch customers and food truck operators through a digital, mobile-first customization flow with predefined options.

## Evidence Basis

- Evidence: Mobile-first access is plausible because U.S. smartphone ownership is broad.
- Evidence: Food truck ordering is speed-sensitive and location-dependent.
- Evidence: Digital restaurant ordering is established, but only works when it reduces real effort.
- Evidence: Mobile typing is slow and error-prone, supporting predefined customization.
- Evidence + risk: Dietary and allergen handling requires clear predefined information and operational care.
- Evidence: WCAG AA accessibility affects tap targets, labels, focus order, and error states.
- Assumption: Curry Cruiser's menu can be modeled through a small set of curry customization choices.
- Assumption: Most orders are individual lunch orders.
- Research limit: No direct customer or operator interviews have been conducted yet.

## Interview Plan

### Learning Goal

Understand how customers and operators experience friction during a quick food truck order, and what a digital flow must do to feel faster, clearer, and less error-prone than ordering verbally.

### Participants

- 5 to 7 busy lunch customers who buy quick meals during workdays
- 2 Curry Cruiser operators or comparable food truck staff
- 1 customer with dietary restrictions or allergy concerns

### Customer Questions

- Tell me about the last time you bought lunch from a food truck or quick-service counter.
- What made the order easy or annoying?
- When would you use a digital ordering flow instead of ordering verbally?
- What information do you need before choosing a curry?
- Which customization choices would you expect?
- What would make you trust that your order was received correctly?
- How do you handle allergies or dietary needs when ordering quick food?

### Operator Questions

- What order details do you need to make a curry correctly?
- Which customizations cause mistakes or slowdowns?
- What options should customers not be allowed to combine?
- How do you handle unavailable ingredients during a rush?
- How do you want submitted orders displayed?

### Design Implication

Testing must validate both sides of the service: customer completion speed and operator readability.

### Confidence

Medium. The plan is grounded in research questions from Stage 02, but not yet executed with real participants.

## Hypothesis-Based Interview Summary: Busy Lunch Customer

- Context: Orders lunch during a short work break and may be standing near a truck, walking, or waiting in line.
- Goals: Choose quickly, avoid mistakes, understand pickup timing, and get back to work.
- Pain points: Menu uncertainty, pressure from the line, repeating choices verbally, unclear spice levels, and not knowing whether the order was captured.
- Workarounds: Orders the same familiar item, asks staff for recommendations, avoids customization, or abandons the truck if the line looks slow.
- Representative user language to validate:
  - "I do not want to hold up the line."
  - "Just show me the choices and let me get it done."
  - "I need to know what I actually ordered before it goes in."
- Surprises to investigate: Some users may prefer verbal ordering if the menu is short; others may prefer digital only if payment and pickup are also clear.
- Design implications: Keep the order path short, show progress, make customization choices scannable, and include a review-before-submit step.
- Confidence: Medium. Supported by lunch time-pressure and mobile form evidence, but not direct interviews.

## Hypothesis-Based Interview Summary: First-Time Curry Customer

- Context: Wants Thai curry but may not understand the difference between curry types, spice levels, bases, or proteins.
- Goals: Make a confident choice without asking many questions or feeling embarrassed.
- Pain points: Unclear menu names, fear of too much spice, uncertainty about ingredients, and concern about dietary restrictions.
- Workarounds: Picks the safest or most familiar option, asks staff what is popular, or chooses another vendor.
- Representative user language to validate:
  - "What is the difference between red and green curry?"
  - "How spicy is medium?"
  - "Can I tell if this is vegetarian?"
- Surprises to investigate: Helpful explanations may slow experienced customers unless the interface keeps them optional.
- Design implications: Add concise option descriptions, spice guidance, dietary/allergen badges, and sensible defaults.
- Confidence: Low-Medium. Plausible for Thai curry ordering, but needs direct validation.

## Hypothesis-Based Interview Summary: Food Truck Operator

- Context: Works during lunch rush, takes orders, prepares food, manages ingredient availability, and handles customer questions.
- Goals: Receive complete, standardized orders; avoid remakes; keep the line moving; and reduce repeated explanations.
- Pain points: Misheard orders, incomplete customization, unclear dietary requests, customers changing orders late, and operators needing to translate messy notes into prep actions.
- Workarounds: Limits customization, repeats orders verbally, uses shorthand on tickets, or pushes customers toward common combinations.
- Representative operator language to validate:
  - "I need the order in the same order every time."
  - "Do not let customers pick combinations we cannot make."
  - "If something is sold out, I need that reflected immediately."
- Surprises to investigate: Operators may care more about ticket format and unavailable-item controls than customer-facing polish.
- Design implications: Output an operator-readable order summary with consistent option order, clear modifiers, and unavailable state handling.
- Confidence: Medium. Supported by operational logic and restaurant ordering evidence, but not direct operator interviews.

## Personas

### Persona 1: Time-Pressed Regular

- Name: Maya
- Role/context: Office worker buying lunch during a short break.
- Goals: Order quickly, get a reliable meal, and avoid losing time to the line.
- Needs: Fast selection, clear defaults, visible total/order summary, pickup expectation.
- Pain points: Slow queues, unclear options, having to repeat choices, uncertainty after submitting.
- Behaviors: Reorders familiar meals, scans quickly, skips optional complexity, abandons slow flows.
- Motivations: Speed, predictability, and getting back to work with minimal hassle.
- Accessibility or situational constraints: One-handed phone use, outdoor glare, background noise, time pressure.
- Evidence notes: Supported by Stage 02 findings on lunch time constraints, mobile access, and mobile checkout friction.
- Design implication: Prioritize a short path from menu to reviewed order; avoid account creation and typed notes.
- Confidence: Medium.

### Persona 2: Curious First-Timer

- Name: Jordan
- Role/context: New or occasional customer trying Curry Cruiser for the first time.
- Goals: Understand the menu, avoid a bad spice or ingredient choice, and feel confident ordering.
- Needs: Plain-language curry descriptions, spice guidance, dietary/allergen visibility, staff fallback.
- Pain points: Menu unfamiliarity, fear of picking the wrong spice level, hidden allergens, lack of confidence.
- Behaviors: Reads descriptions, looks for popular choices, may choose default recommendations.
- Motivations: Trying something good without making the lunch break stressful.
- Accessibility or situational constraints: Cognitive load, limited attention, possible dietary needs.
- Evidence notes: Supported by research questions around curry decisions, dietary handling, and predefined customization.
- Design implication: Use concise helper text and badges without turning the app into a long educational menu.
- Confidence: Low-Medium.

### Persona 3: Rush-Hour Operator

- Name: Sam
- Role/context: Curry Cruiser staff member taking or fulfilling orders during peak lunch service.
- Goals: Prepare accurate orders quickly and keep customer flow moving.
- Needs: Standardized tickets, clear option order, no unsupported combinations, sold-out controls, pickup identifiers.
- Pain points: Ambiguous customizations, late changes, unavailable ingredients, allergy ambiguity, and unreadable notes.
- Behaviors: Uses shorthand, repeats order details, steers customers to simpler options during rushes.
- Motivations: Throughput, fewer remakes, smoother service, less mental switching.
- Accessibility or situational constraints: Busy environment, noise, multitasking, limited screen attention.
- Evidence notes: Supported by Stage 02 implications for operator-readable tickets and reduced staff workload; still requires direct operator validation.
- Design implication: Design the submitted order format as carefully as the customer UI.
- Confidence: Medium.

## User Stories

- As a time-pressed lunch customer, I want to select a curry and complete customization quickly, so that I can get lunch without spending my break in line.
- As a customer customizing a curry, I want predefined options, so that I do not have to type or explain my order.
- As a first-time customer, I want short explanations of curry type and spice level, so that I can choose confidently.
- As a customer with dietary needs, I want visible dietary and allergen indicators, so that I know when I need to ask staff before ordering.
- As a customer, I want to review my order before submitting, so that I can catch mistakes before the kitchen receives it.
- As an operator, I want orders displayed in a consistent structure, so that I can prepare them without interpretation.
- As an operator, I want unavailable options blocked or marked, so that customers do not submit orders we cannot fulfill.
- As an operator, I want fewer open-ended requests, so that the rush stays manageable.

## Journey Map: Customer Digital Order

Scenario: A lunch customer opens Curry Cruiser's digital ordering experience, customizes one curry, submits the order, and picks it up.

| Stage | User Actions | Thoughts/Questions | Emotion | Pain Points | Opportunities | Design Implications |
|-------|--------------|--------------------|---------|-------------|---------------|---------------------|
| Entry | Opens the ordering experience from a link, sign, QR code, or saved shortcut. | "Is this faster than just ordering at the window?" | Cautious | Entry method may be unclear or feel like extra work. | Show immediate menu and short path. | Do not make QR the product; make the ordering flow valuable once opened. |
| Browse | Scans curry options and prices. | "What looks good? What is included?" | Interested but rushed | Too many choices can slow ordering. | Feature a small menu and defaults. | Present curry cards with concise descriptions and clear starting prices. |
| Customize | Chooses curry type, base, protein, spice, add-ons, and dietary indicators. | "Can they make it this way? Is medium too spicy?" | Focused | Hidden restrictions or unclear spice levels. | Use predefined options and simple guidance. | Use large option buttons, selected states, and unavailable states. |
| Review | Checks final order summary. | "Did I choose the right thing?" | Reassured or anxious | No chance to edit before submission causes mistrust. | Let users edit each section. | Include a clear review screen before submit. |
| Submit | Sends order to the truck. | "Did they get it? What happens now?" | Relief if confirmed | Confirmation may be vague. | Provide pickup number/status expectation. | Show order received, pickup identifier, and what to do next. |
| Operator Handoff | Order appears for Curry Cruiser staff. | Customer does not see this directly. | N/A | Ticket could be hard to read or operationally incomplete. | Standardize ticket layout. | Use consistent order sequence and highlight exceptions. |
| Pickup | Waits and receives food. | "Is this mine? How long will it take?" | Impatient if unclear | Pickup confusion can recreate the line problem. | Clear pickup identifier and status. | Show pickup name/number and support staff callout. |

Confidence: Medium. Journey is based on research signals and project constraints, but needs prototype testing.

## Journey Map: Operator Fulfillment

Scenario: Curry Cruiser operator receives a digital order during lunch rush and prepares it accurately.

| Stage | Operator Actions | Thoughts/Questions | Emotion | Pain Points | Opportunities | Design Implications |
|-------|------------------|--------------------|---------|-------------|---------------|---------------------|
| Receive | Views incoming order. | "What do I make first?" | Alert | New orders may interrupt existing work. | Use clear order queue and timestamps. | Keep ticket compact and scannable. |
| Parse | Reads curry, base, protein, spice, add-ons, and dietary markers. | "Any exceptions?" | Focused | Inconsistent modifier order slows prep. | Standardize order structure. | Always show options in the same sequence. |
| Prepare | Makes order. | "Can this be fulfilled as submitted?" | Under pressure | Unsupported combinations or sold-out items cause rework. | Block invalid choices before submission. | Add unavailable and incompatible-option logic. |
| Confirm | Marks order ready or calls pickup. | "How does the customer know?" | Relieved | No pickup identifier causes confusion. | Use simple pickup code/name. | Add confirmation state and pickup handoff pattern. |
| Resolve Issue | Handles missing/invalid info or allergy concern. | "Do I need to talk to the customer?" | Stressed | Digital flow may overpromise safety. | Route risky cases to staff confirmation. | Use allergy disclaimers and staff-check prompts where needed. |

Confidence: Medium-Low. Operator journey is inferred and must be validated with real staff.

## Empathy Map: Time-Pressed Regular

- Says:
  - "I need lunch fast."
  - "I do not want to repeat every detail."
  - "Just let me check it before I send it."
- Thinks:
  - "Is this going to save time?"
  - "Will they make it correctly?"
  - "How long until pickup?"
- Does:
  - Chooses familiar items.
  - Skips optional information.
  - Looks for visible progress and confirmation.
- Feels:
  - Rushed before ordering.
  - Reassured when the path is short and review is clear.
  - Frustrated if digital ordering adds steps.
- Pains:
  - Line pressure.
  - Tiny controls.
  - Unclear confirmation.
  - No edit opportunity before submit.
- Gains:
  - Fast repeated order flow.
  - Clear pickup expectation.
  - Less verbal back-and-forth.
- Evidence: Stage 02 lunch time pressure, mobile access, mobile form constraints, QR/digital ordering risk.
- Design implications: Build for speed, large tap targets, defaults, review, and confirmation.
- Confidence: Medium.

## Empathy Map: Curious First-Timer

- Says:
  - "What is the difference between these curries?"
  - "How spicy is this?"
  - "Can I tell what is vegetarian?"
- Thinks:
  - "I want to try this, but I do not want to guess wrong."
  - "Will asking questions slow everyone down?"
  - "Is this safe for my dietary needs?"
- Does:
  - Reads option descriptions.
  - Looks for popular/default choices.
  - May hesitate at spice and allergen steps.
- Feels:
  - Curious.
  - Slightly exposed when unfamiliar with the menu.
  - Relieved by plain language and badges.
- Pains:
  - Menu unfamiliarity.
  - Hidden ingredients.
  - Too much unexplained terminology.
- Gains:
  - Confidence through concise guidance.
  - Better first order.
  - Less pressure at the counter.
- Evidence: Stage 02 dietary/allergen risk, curry customization research questions, mobile flow constraints.
- Design implications: Use short option descriptions, default recommendations, and dietary/allergen signals.
- Confidence: Low-Medium.

## Empathy Map: Rush-Hour Operator

- Says:
  - "I need the order to be complete."
  - "Do not let customers choose things we cannot make."
  - "I need to see the important modifiers fast."
- Thinks:
  - "Will this speed us up or create another screen to manage?"
  - "Can I trust this ticket?"
  - "What needs attention first?"
- Does:
  - Scans tickets quickly.
  - Prioritizes prep sequence.
  - Handles exceptions under time pressure.
- Feels:
  - Focused during normal flow.
  - Frustrated by ambiguous or impossible orders.
  - Relieved when orders are standardized.
- Pains:
  - Open-ended notes.
  - Late changes.
  - Sold-out items still being ordered.
  - Allergy ambiguity.
- Gains:
  - Standardized order format.
  - Fewer verbal clarifications.
  - Easier queue management.
- Evidence: Stage 02 staff fulfillment questions, digital ordering competitor patterns, mobile order edit limitations.
- Design implications: Create an operator-readable ticket model and validate it with staff.
- Confidence: Medium-Low.

## Aggregated Empathy Map

### Common Themes

- Speed matters, but only if the digital flow is visibly simpler than the existing order path.
- Customers and operators both need clarity before submission.
- Predefined choices reduce typing and ambiguity, but only if the choices match the real menu.
- Confirmation is emotional, not just functional: users need to trust the order was received.
- Dietary and allergen information must be visible, cautious, and operationally truthful.

### Common Pains

- Time pressure during lunch.
- Fear of ordering incorrectly.
- Ambiguous customization.
- Small-screen interaction friction.
- Staff workload from repeated explanations or unclear tickets.

### Common Goals

- Customers want a fast, confident order.
- Operators want accurate, standardized, fulfillable tickets.
- Both sides want fewer corrections and less back-and-forth.

### Contradictions

- Some customers may prefer digital ordering; others may see it as friction unless it is faster than ordering verbally.
- First-time customers need guidance; regulars need speed.
- Allergy needs require clarity, but the no-free-text constraint limits nuance.
- Operators may want fewer options than customers expect.

### Prioritized Insights

1. The design must optimize the complete service loop, not just the customer-facing menu.
2. Review-before-submit is critical because submitted orders may be hard to change.
3. Predefined customization is a strength if the menu model is accurate and constraints are enforced.
4. Entry method should remain flexible; digital value comes from reduced friction, not from QR scanning itself.
5. Accessibility and situational constraints overlap: glare, one-handed use, time pressure, and tap accuracy all push toward clear, large controls.

## Accessibility And Edge Cases

### Touch And Motor Control

- Large tap targets for all choices and actions.
- Enough spacing between spice, protein, and submit controls.
- No drag-only interactions.
- Sticky primary action should not cover content or focus.

### Vision

- High contrast for text, selected states, prices, and unavailable items.
- Do not rely on color alone for spice or dietary badges.
- Support outdoor glare through strong hierarchy and readable type.

### Cognition, Memory, And Stress

- Keep each step short and clearly labeled.
- Preserve visible labels; do not use placeholder-only instructions.
- Show selected choices persistently in the summary.
- Avoid presenting every customization at once if it overwhelms first-time users.

### Dietary And Allergy Needs

- Use explicit badges for common dietary categories when operationally true.
- Surface major allergen warnings where known.
- Route uncertain allergy cases to staff confirmation rather than allowing unsafe assumptions.
- Avoid free-text allergy notes unless operations can safely handle them.

### Device, Connectivity, And Environment

- Design for small mobile screens.
- Keep pages lightweight for spotty outdoor connectivity.
- Provide a fallback for users who cannot or do not want to use the digital flow.
- Avoid account creation as a prerequisite to ordering.

### Operator Edge Cases

- Sold-out protein, base, or curry type.
- Invalid combinations.
- Duplicate pickup names or unclear pickup identifiers.
- Order submitted but customer walks away.
- Customer needs to change order after submission.
- Rush mode where operators need fewer options exposed.

## Stage 03 Audit

- Evidence trace: Pass. Each major artifact links back to Stage 02 evidence or is marked as an assumption/hypothesis.
- Human-centered: Pass. Artifacts cover customer and operator goals, barriers, feelings, and workarounds.
- Design implication: Pass. Each artifact includes implications for the digital ordering experience.
- Research honesty: Pass. The pack clearly states that interview summaries are hypothesis-based and require validation.
