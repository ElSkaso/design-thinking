# Empathize Artifacts: Curry Cruiser Revised

## Purpose

Turn the Stage 02 research dossier into human-centered artifacts for Curry Cruiser's predefined curry ordering flow. Because no real users or staff were interviewed, all participant interviews, empathy maps, personas, and journeys below are hypothesis-based and must be validated before final design decisions.

## Inputs

- Stage 02 research dossier: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`
- Desk research signals: off-premises ordering demand, mobile ordering adoption, QR ordering feasibility, structured modifier patterns, food truck convenience pressure, and accessible form guidance
- Evidence limit: no direct Curry Cruiser customer or staff interviews yet

## Participant Sample

### Target Participant Groups

- Food truck customers who order under time pressure.
- Customers who like Thai curry but may need guidance choosing curry type, spice, and add-ons.
- Customers who are less confident with QR codes or mobile ordering.
- Staff or operators who prepare orders during peak service.

### Sample Criteria

- Ordered from a food truck, takeout counter, or quick-service restaurant in the past three months.
- Has experience with customized food orders, such as spice level, protein, base, toppings, or dietary options.
- Mix of digital comfort levels.
- Includes staff perspective on ticket clarity and prep feasibility.

### Recruitment Rationale

The sample covers both sides of the food truck service exchange. Customer participants expose ordering comprehension, confidence, and hesitation; staff participants expose operational friction, unsupported requests, and ticket readability needs.

### Participant Labels

| Label | Type | Fit | Evidence Status |
|---|---|---|---|
| P1: Time-Pressed Regular | Synthetic customer | Frequent lunch buyer, comfortable with mobile ordering | Hypothesis-based |
| P2: Curious First-Timer | Synthetic customer | Interested in Thai curry but unsure how to choose | Hypothesis-based |
| P3: Low-Confidence QR User | Synthetic customer | Prefers person-to-person ordering and needs reassurance | Hypothesis-based |
| P4: Peak-Service Expediter | Synthetic staff | Prepares and hands off orders during rush periods | Hypothesis-based |

## Interview Questions

### Customer Questions

1. Tell me about the last time you ordered food from a food truck or quick-service counter.
2. What helped you decide what to order?
3. Where, if anywhere, did the ordering process slow down or feel unclear?
4. How do you usually feel about customizing food orders, like spice level, protein, toppings, or dietary changes?
5. When ordering on your phone, what makes you confident that the order is correct?
6. What do you expect to see before submitting a food order?
7. How do you feel about scanning a QR code to order from a food truck?
8. What would you do if a choice you wanted was not available in the ordering flow?
9. What information about pickup timing or order status would matter most to you?
10. If you could remove one annoying part of food truck ordering, what would it be?

### Staff Questions

1. Walk me through how an order currently comes in and gets prepared.
2. Which parts of customer orders most often need clarification?
3. What details must be visible on an order ticket for staff to prepare food accurately?
4. Which customization choices are easy to support during a rush, and which ones create problems?
5. How do staff handle allergies, substitutions, sold-out items, and special requests today?
6. What happens when multiple customers order at once?
7. How do you communicate pickup timing or order readiness?
8. What would make a digital order more useful than a verbal or handwritten order?
9. What kind of order information would be too much or too distracting during service?
10. What should the ordering system never allow customers to do?

## Interview Summary: P1, Time-Pressed Regular

- Participant fit: Frequent food truck customer who often buys lunch between meetings.
- Context: Orders while walking to the truck or standing nearby. Comfortable using mobile checkout but impatient with long forms.
- Goals: Choose quickly, avoid waiting in line, know when the order will be ready, and feel confident the order is correct.
- Needs: Fast defaults, visible required choices, easy order review, and a pickup signal.
- Pain points: Too many taps, unclear prep times, forced accounts, and missing confirmation details.
- Behaviors: Picks familiar items, scans menus quickly, uses mobile ordering when it saves time, abandons flows that feel too slow.
- Workarounds: Orders the same thing verbally or screenshots menus before joining the line.
- Quotes: "I do not want to build a whole meal from scratch every time." "Just show me what I picked before I send it."
- Emotions: Hungry, rushed, efficiency-seeking, mildly anxious about losing time.
- Surprises: Speed does not mean fewer choices; it means fewer ambiguous choices.
- Design implications: Provide a short path with smart defaults, step progress, and a review screen.
- Confidence: Low. Synthetic profile based on Stage 02 research signals.

## Empathy Map: P1, Time-Pressed Regular

- Says: "I need this to be fast." "I just want to know my order went through."
- Thinks: "If this takes longer than talking to staff, why am I using it?"
- Does: Scans, chooses familiar options, checks the final order, watches for pickup timing.
- Feels: Rushed, focused, relieved when the order is confirmed.
- Pains: Long decision trees, unclear submit state, no pickup estimate.
- Gains: Fast repeatable ordering, clear confirmation, reduced line waiting.
- Evidence: Hypothesis-based; supported by Stage 02 signals around speed, mobile ordering, and off-premises convenience.
- Design implications: Use concise steps, visible defaults, persistent cart summary, and immediate confirmation.

## Interview Summary: P2, Curious First-Timer

- Participant fit: Customer who likes Thai food but is not confident choosing curry types or spice levels.
- Context: Encounters Curry Cruiser at an event or lunch location and wants to try something new.
- Goals: Understand options without holding up the line, avoid choosing something too spicy, and feel like the order matches their taste.
- Needs: Plain-language descriptions, spice guidance, ingredient clarity, and safe defaults.
- Pain points: Unfamiliar dish names, hidden ingredients, uncertainty about spice, and fear of making a bad choice.
- Behaviors: Reads descriptions, asks staff for recommendations, looks for popular or recommended items.
- Workarounds: Chooses the safest-sounding option or skips ordering if the menu feels intimidating.
- Quotes: "I do not know the difference between the curries just from the names." "Mild can mean different things at different places."
- Emotions: Curious, hesitant, hungry, slightly self-conscious.
- Surprises: The user wants guidance, not unlimited customization.
- Design implications: Pair predefined choices with short descriptions, recommended defaults, and clear spice labeling.
- Confidence: Low. Synthetic profile based on Stage 02 menu comprehension assumptions.

## Empathy Map: P2, Curious First-Timer

- Says: "What is the difference between red and green curry?" "How spicy is spicy?"
- Thinks: "I want to try this, but I do not want to order wrong."
- Does: Reads labels, looks for recommendations, compares options, hesitates before submitting.
- Feels: Interested but uncertain.
- Pains: Ambiguous option names, lack of ingredient context, spice anxiety.
- Gains: Confidence from plain-language guidance and defaults.
- Evidence: Hypothesis-based; supported by Stage 02 finding that predefined modifiers need clear wording and sequencing.
- Design implications: Add concise option explanations, "recommended" tags, and spice scale language.

## Interview Summary: P3, Low-Confidence QR User

- Participant fit: Customer who can use a smartphone but prefers ordering with a person.
- Context: Sees a QR code at the truck but may worry about connectivity, privacy, or making a mistake.
- Goals: Order successfully without feeling forced into unfamiliar tech.
- Needs: Clear entry options, no account requirement, a way to verify the order, and visible staff fallback.
- Pain points: QR-only access, small tap targets, unclear error recovery, and uncertainty about whether staff received the order.
- Behaviors: Looks for staff help, asks if the QR code is required, double-checks before submitting.
- Workarounds: Orders verbally, asks someone nearby for help, or leaves if the process seems mandatory and confusing.
- Quotes: "Can I just tell someone my order?" "I need to see that they actually got it."
- Emotions: Cautious, skeptical, relieved by visible confirmation.
- Surprises: The digital flow must earn trust before it can reduce friction.
- Design implications: Keep QR optional, avoid account walls, show clear confirmation, and support staff-assisted ordering.
- Confidence: Low. Synthetic profile based on Stage 02 QR access risk.

## Empathy Map: P3, Low-Confidence QR User

- Says: "Is scanning required?" "What happens if I make a mistake?"
- Thinks: "This may be faster for other people, but I do not want to be trapped."
- Does: Checks for alternatives, reads carefully, seeks confirmation, may ask staff for help.
- Feels: Wary at first, reassured by clear review and confirmation.
- Pains: Mandatory QR, tiny controls, vague errors, no human fallback.
- Gains: Choice of access method, clear review, trust that the order was received.
- Evidence: Hypothesis-based; supported by Stage 02 risk that QR-only ordering may exclude some users.
- Design implications: Provide fallback access, large controls, simple recovery, and confirmation tied to pickup.

## Interview Summary: P4, Peak-Service Expediter

- Participant fit: Food truck staff member responsible for reading orders, preparing food, and managing pickup during rushes.
- Context: Works in a small, noisy, time-sensitive environment with multiple orders in progress.
- Goals: Receive complete orders, avoid unsupported requests, reduce verbal clarification, and move orders through prep quickly.
- Needs: Consistent ticket structure, required fields, clear modifiers, pickup name or number, and exception handling.
- Pain points: Free-text notes, missing choices, unclear spice levels, allergy ambiguity, and customers asking for unavailable changes.
- Behaviors: Scans tickets quickly, prioritizes orders by readiness, calls out pickup identifiers, asks customers for clarification when necessary.
- Workarounds: Rewrites notes, creates shorthand, asks staff to confirm verbally, refuses unsupported changes during rush.
- Quotes: "A bad ticket slows down the whole line." "If the choice is not something we can make, it should not be selectable."
- Emotions: Focused, time-pressured, frustrated by ambiguity, relieved by consistent order format.
- Surprises: Staff need fewer choices just as much as customers need clearer choices.
- Design implications: Enforce required modifier groups, use operationally valid options only, and format submitted orders for quick scanning.
- Confidence: Low. Synthetic profile based on Stage 02 staff workflow assumptions.

## Empathy Map: P4, Peak-Service Expediter

- Says: "Tell me exactly what to make." "Do not let people request things we cannot do."
- Thinks: "Can I read this ticket in two seconds?"
- Does: Reads modifiers, checks missing details, sequences prep, calls pickup numbers.
- Feels: Pressured during rush, calm when tickets are complete.
- Pains: Free-text ambiguity, missing required choices, unsupported substitutions, unclear pickup identity.
- Gains: Standardized tickets, fewer clarifications, faster handoff.
- Evidence: Hypothesis-based; supported by Stage 02 findings on structured modifiers and operational clarity.
- Design implications: Build staff-readable output, prevent invalid combinations, and keep order data compact.

## User Groups

### Group 1: Fast Repeat Orderers

- Evidence pattern: P1 needs speed, confirmation, and minimal friction.
- Shared characteristics: Time-pressed, digitally comfortable, often ordering in routine lunch contexts.
- Shared goals: Complete a familiar order quickly and avoid waiting.
- Shared needs: Defaults, short path, quick review, pickup timing.
- Design implication: Support fast progression through predefined options without hiding review.

### Group 2: Guided Decision Makers

- Evidence pattern: P2 needs confidence choosing unfamiliar curry options.
- Shared characteristics: Curious but less familiar with menu terminology or spice expectations.
- Shared goals: Choose something that matches taste and tolerance.
- Shared needs: Plain-language descriptions, recommendations, ingredient clarity, spice guidance.
- Design implication: Use supportive option labeling without turning the flow into a long menu article.

### Group 3: Trust-and-Fallback Customers

- Evidence pattern: P3 needs QR optionality, reassurance, and recovery.
- Shared characteristics: Lower confidence with QR or mobile ordering, may prefer staff interaction.
- Shared goals: Submit an order without feeling forced or uncertain.
- Shared needs: Fallback access, no account wall, visible review, clear confirmation.
- Design implication: Make digital ordering feel optional, transparent, and recoverable.

### Group 4: Operational Clarity Staff

- Evidence pattern: P4 needs complete, valid, compact order tickets.
- Shared characteristics: Staff working under service pressure.
- Shared goals: Prepare accurately and reduce clarification loops.
- Shared needs: Required choices, consistent ticket order, supported modifiers only, pickup identifier.
- Design implication: Design customer choices around what staff can reliably fulfill.

## Persona: Riley, The Time-Pressed Regular

- Represented user group: Fast Repeat Orderers.
- Role/context: Lunch customer ordering near the food truck between commitments.
- Goals: Order a reliable curry quickly, avoid the line, and know when to pick it up.
- Needs: Fast defaults, clear required choices, final review, confirmation, and pickup estimate.
- Pain points: Forced accounts, long menus, unclear submission, and no order status.
- Behaviors: Uses mobile ordering when it saves time, repeats familiar meals, scans rather than reads deeply.
- Motivations: Save time without sacrificing accuracy.
- Accessibility or situational constraints: One-handed use, glare outdoors, noisy location, limited attention.
- Evidence notes: Hypothesis-based from P1 and Stage 02 speed/mobile ordering evidence.
- User story: As a time-pressed food truck customer, I want to customize my usual curry quickly and review it before submission, so that I can skip avoidable line friction without worrying about mistakes.
- Design implication: Provide fast selection, compact progress, and clear confirmation.
- Confidence: Low.

## Journey Map: Riley, The Time-Pressed Regular

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Notice | Sees Curry Cruiser and opens the ordering link | "Can I order before I reach the window?" | Hopeful, hurried | Entry point may be unclear | Make QR/link visible and fast to open | Optimize first screen for immediate ordering |
| Choose | Selects curry, protein, spice, and base | "Where are the required choices?" | Focused | Too many screens or optional clutter | Show required groups clearly | Use short sections and defaults |
| Review | Checks final order | "Did I choose everything correctly?" | Cautious | Missing summary or hidden modifiers | Persistent review summary | Show all choices before submit |
| Submit | Sends order | "Did they get it?" | Anxious then relieved | Weak confirmation | Clear order number and timing | Confirmation must be unmistakable |
| Pickup | Watches for order | "When should I go up?" | Waiting, alert | No pickup cue | Pickup number/status | Tie confirmation to pickup handoff |

## Persona: Maya, The Curious First-Timer

- Represented user group: Guided Decision Makers.
- Role/context: Event customer trying Curry Cruiser for the first time.
- Goals: Understand curry options, pick a spice level safely, and feel good about the choice.
- Needs: Plain-language descriptions, recommendation cues, ingredient clarity, and spice guidance.
- Pain points: Unfamiliar names, fear of too much spice, uncertainty about included ingredients.
- Behaviors: Reads labels, compares options, looks for "popular" or "recommended" cues.
- Motivations: Try something new without embarrassment or regret.
- Accessibility or situational constraints: Cognitive load in a busy line, possible dietary restrictions, limited time to read.
- Evidence notes: Hypothesis-based from P2 and Stage 02 implications around option wording.
- User story: As a first-time Curry Cruiser customer, I want short guidance on curry types and spice levels, so that I can choose confidently without asking staff to explain the whole menu.
- Design implication: Add concise guidance at the choice level.
- Confidence: Low.

## Journey Map: Maya, The Curious First-Timer

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Browse | Opens menu and scans curry options | "What do these curries taste like?" | Curious | Names alone may not explain choices | Add short descriptions | Pair each curry with taste cues |
| Decide | Selects curry and spice level | "Will medium be too spicy?" | Uncertain | Spice labels may be subjective | Describe spice scale | Use clear relative spice guidance |
| Customize | Chooses protein/base/add-ons | "What comes with this?" | More confident | Hidden included items | Show included defaults | Clarify what is included vs extra |
| Review | Checks order | "Does this match what I wanted?" | Reassured | Summary may be too technical | Human-readable review | Use menu language, not POS shorthand |
| Pickup | Receives food | "I hope this is what I picked." | Anticipatory | No connection between order and pickup | Show pickup identifier | Keep order name/number visible |

## Persona: Sam, The Cautious Scanner

- Represented user group: Trust-and-Fallback Customers.
- Role/context: Customer at the truck who is willing to try digital ordering but does not want QR scanning to be mandatory.
- Goals: Order successfully, avoid mistakes, and know staff received the order.
- Needs: Optional QR access, no account requirement, clear review, readable controls, visible confirmation.
- Pain points: Tiny tap targets, unclear errors, required scanning, and no human fallback.
- Behaviors: Reads carefully, checks for alternatives, asks staff if unsure.
- Motivations: Complete the order without feeling excluded by tech.
- Accessibility or situational constraints: Possible low vision, shaky hands, weak connection, low battery, or privacy concerns.
- Evidence notes: Hypothesis-based from P3 and Stage 02 QR risk.
- User story: As a cautious mobile-ordering customer, I want a clear fallback and confirmation path, so that I can use the digital order flow without feeling trapped if scanning or submission fails.
- Design implication: Treat QR as one access method and design strong recovery states.
- Confidence: Low.

## Journey Map: Sam, The Cautious Scanner

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Entry | Sees QR code and considers scanning | "Is this required?" | Wary | QR-only signage | Offer direct URL or staff fallback | Make access options explicit |
| Navigate | Opens flow and reads instructions | "What do I have to do?" | Careful | Dense instructions | Put short guidance before controls | Keep language simple |
| Select | Taps choices slowly | "Can I fix this if I tap wrong?" | Cautious | Small controls, unclear selected state | Large tap targets and editable steps | Make selected states obvious |
| Submit | Reviews and submits | "Will staff know this is mine?" | Nervous | Unclear confirmation | Strong confirmation and pickup ID | Show receipt-like confirmation |
| Recover | Handles issue if something fails | "Who can help me?" | Frustrated or relieved | No fallback path | Staff-assisted recovery | Include simple error guidance |

## Persona: Jordan, The Peak-Service Expediter

- Represented user group: Operational Clarity Staff.
- Role/context: Curry Cruiser staff member preparing orders and managing pickup during rush periods.
- Goals: Receive complete orders, avoid invalid requests, and keep the line moving.
- Needs: Compact order tickets, required modifier groups, supported choices only, pickup name or number, and clear exception handling.
- Pain points: Free-text notes, missing choices, unclear spice levels, allergies buried in notes, and unsupported substitutions.
- Behaviors: Scans tickets quickly, sequences prep, asks for clarification when information is missing.
- Motivations: Accuracy, speed, and lower cognitive load during service.
- Accessibility or situational constraints: Noisy truck, small workspace, hot environment, interruptions, time pressure.
- Evidence notes: Hypothesis-based from P4 and Stage 02 structured modifier evidence.
- User story: As a Curry Cruiser staff member, I want every submitted order to use complete and supported choices, so that I can prepare it accurately without stopping service to clarify details.
- Design implication: Customer-facing flexibility must be bounded by operational feasibility.
- Confidence: Low.

## Journey Map: Jordan, The Peak-Service Expediter

| Stage | Staff Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Receive | Gets a new order ticket | "Is everything I need here?" | Focused | Missing required choices | Enforce required selections | Prevent incomplete submission |
| Read | Scans modifiers | "What curry, protein, spice, base?" | Efficient or frustrated | Inconsistent order format | Standard ticket order | Match ticket order to prep order |
| Prepare | Builds curry | "Can we actually make this?" | Under pressure | Unsupported combinations | Disable invalid options | Keep menu choices operationally valid |
| Handoff | Calls pickup identifier | "Whose order is this?" | Alert | Weak pickup identity | Pickup number/name | Include clear customer identifier |
| Resolve | Handles issues | "Do I need to stop and ask?" | Frustrated | Free-text ambiguity | Structured exceptions | Use predefined allergy/sold-out states |

## Accessibility and Edge-Case Notes

- Touch and motor control: Use large tap targets, clear selected states, and forgiving edit paths.
- Vision: Maintain readable text, high contrast, clear hierarchy, and support for outdoor glare.
- Hearing and speech: Do not require verbal clarification for routine ordering; provide visible confirmation and pickup cues.
- Cognition and memory: Keep choices grouped, short, and sequential; avoid forcing users to remember previous selections.
- Language: Use plain food language and avoid unexplained Thai menu terms.
- Device and bandwidth: Keep the mobile web flow lightweight; avoid QR-only access and account walls.
- Time pressure: Support fast defaults and review without adding excessive steps.
- Dietary restrictions: Avoid free-text as the default, but provide structured common flags and a staff fallback for complex needs.
- Sold-out items: Remove or disable unavailable choices before submission.
- Payment uncertainty: Keep payment outside the core assumption until Curry Cruiser confirms whether payment belongs in the flow.

## Evidence Trace

| Artifact | Evidence or Assumption Source | Status |
|---|---|---|
| Riley persona and journey | Stage 02 findings on speed, mobile ordering, and off-premises convenience; P1 synthetic interview | Hypothesis-based |
| Maya persona and journey | Stage 02 assumption that menu comprehension and spice guidance need validation; P2 synthetic interview | Hypothesis-based |
| Sam persona and journey | Stage 02 QR risk and accessibility concerns; P3 synthetic interview | Hypothesis-based |
| Jordan persona and journey | Stage 02 structured modifier and staff ticket clarity signals; P4 synthetic interview | Hypothesis-based |
| Staff-readable order requirement | Square/Toast modifier evidence plus P4 synthetic interview | Medium desk-research support, direct workflow unvalidated |
| QR optionality | Square/Clover/Toast QR feasibility plus Stage 02 QR risk | Medium desk-research support, customer preference unvalidated |

## Open Validation Needs

- Interview real Curry Cruiser customers and staff.
- Confirm actual menu categories, required choices, optional add-ons, and unsupported combinations.
- Validate whether customers prefer QR access, direct URL, staff-assisted ordering, or a hybrid.
- Test whether first-time customers understand curry descriptions and spice labels.
- Observe whether staff can read a submitted order ticket quickly during a rush.

