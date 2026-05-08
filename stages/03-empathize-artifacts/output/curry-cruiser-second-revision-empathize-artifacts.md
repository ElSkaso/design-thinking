# Empathize Artifacts: Curry Cruiser Second Revision

## Participant Sample

This stage uses hypothesis-based synthetic participants because real Curry Cruiser customers and staff were not available in the workspace. The profiles are grounded in the Stage 02 desk research and must be validated through real interviews before final design decisions are treated as proven.

| Label | Participant Fit | Sample Criteria | Recruitment Rationale | Evidence Limit |
|---|---|---|---|---|
| P1 Fast Lunch Customer | Orders food while time-pressured near work or errands. | Mobile-comfortable, values speed, usually chooses familiar meals. | Validates the rushed ordering context and default-choice needs. | Synthetic; needs real food-truck customer validation. |
| P2 Careful Customizer | Has dietary preferences and strong spice/protein expectations. | Customizes meals often; needs confidence before submitting. | Validates whether predefined options can replace free-text requests. | Synthetic; allergy/dietary needs require real participant input. |
| P3 QR-Skeptical Customer | Uses mobile web but dislikes QR-only ordering or low-readable menus. | Mixed technology comfort; may be older, low-bandwidth, privacy-sensitive, or under glare. | Challenges the QR-access assumption and tests fallback needs. | Synthetic; adoption risk must be observed. |
| P4 Staff Operator | Takes or prepares food truck orders during busy service. | Small-team counter-service or food truck operator. | Validates staff ticket clarity, availability, and kitchen workflow. | Synthetic proxy until Curry Cruiser staff can be interviewed. |

## Interview Questions

- Tell me about the last time you ordered from a food truck. What happened from deciding to order through getting your food?
- When you order a customizable meal, what choices do you expect to make?
- What makes a food-truck menu easy or hard to understand when you are in a hurry?
- Tell me about a time your order needed clarification. What caused the confusion?
- How do you feel about scanning a QR code to order at a food truck?
- What would make you abandon a mobile ordering flow before submitting?
- How do you handle dietary restrictions, allergies, spice preferences, or substitutions when ordering quickly?
- What do you need to see before you feel confident submitting an order?
- After submitting, what confirmation or pickup information would you expect?
- For staff: What order details are most often missing, unclear, or wrong?
- For staff: Which customization choices are easy to support, and which slow the kitchen down?
- For staff: What does a good ticket look like during a rush?

## Interview Summaries

### Interview Summary: P1 Fast Lunch Customer

- Participant fit: Time-pressured customer ordering a single lunch near the truck.
- Context: Has a short lunch window and wants food without holding up the line.
- Goals: Pick a reliable curry quickly, avoid awkward verbal back-and-forth, know when to pick up.
- Needs: Clear recommended defaults, fast required choices, visible total, confirmation.
- Pain points: Too many options, unclear spice labels, uncertainty about whether an order went through.
- Behaviors: Chooses familiar items, scans for "popular" or "recommended," abandons flows that ask for account setup.
- Workarounds: Orders verbally with minimal customization or repeats a previous safe choice.
- Quotes: "I do not want to build a masterpiece; I just want lunch that tastes right."
- Emotions: Rushed, hungry, mildly anxious about slowing other people down.
- Surprises: Speed matters more than maximum customization.
- Design implications: Offer a recommended path, limit required choices, and show a concise review before submit.
- Confidence: Medium as a synthetic profile based on off-premise and food truck context.

### Interview Summary: P2 Careful Customizer

- Participant fit: Customer with dietary preferences and strong control over spice/protein choices.
- Context: Wants Thai curry but needs to know what is safe or appropriate before ordering.
- Goals: Customize confidently without explaining needs aloud in a line.
- Needs: Ingredient cues, dietary tags, spice descriptions, explicit support boundaries.
- Pain points: Generic "mild/medium/hot" labels, hidden ingredients, no way to represent dietary needs.
- Behaviors: Reads details before choosing; may abandon if allergens or substitutions are unclear.
- Workarounds: Asks staff directly, sticks to vegetarian options, or avoids ordering if unsure.
- Quotes: "If there is no place for my restriction, I assume they do not want me to order that way."
- Emotions: Cautious, alert, sometimes embarrassed by needing extra clarification.
- Surprises: Removing free text can feel safer only if the predefined options are complete and honest.
- Design implications: Use structured dietary choices, ingredient notes, and an escalation path for unsupported needs.
- Confidence: Medium as a synthetic profile; low for exact dietary categories until menu data exists.

### Interview Summary: P3 QR-Skeptical Customer

- Participant fit: Customer who may use a phone but resists QR-only ordering.
- Context: Standing outdoors with glare, spotty signal, or low patience for phone-based setup.
- Goals: Understand the menu and place an order without feeling forced into a fragile digital path.
- Needs: Non-QR entry option, readable pages, no account requirement, clear fallback to staff.
- Pain points: Tiny menus, privacy worries, slow loading, uncertainty after scanning.
- Behaviors: Tries QR if it looks quick; asks staff or walks away if it creates work.
- Workarounds: Orders from posted menu, asks a companion to scan, chooses a different vendor.
- Quotes: "If scanning is step one and it fails, I am already annoyed."
- Emotions: Skeptical, impatient, sensitive to feeling excluded.
- Surprises: QR is not the problem by itself; mandatory QR with no fallback is the problem.
- Design implications: Treat QR as optional access, not core value; keep pages lightweight and readable.
- Confidence: Medium, supported by mixed QR-code research signals.

### Interview Summary: P4 Staff Operator

- Participant fit: Food truck order taker or prep worker handling customized orders.
- Context: Small team, peak rush, limited counter space, changing availability.
- Goals: Receive complete orders, reduce repeated questions, avoid unsupported modifications.
- Needs: Standard ticket format, required fields, sold-out controls, simple pickup identifiers.
- Pain points: Ambiguous verbal requests, missing spice level, unclear allergies, last-minute substitutions.
- Behaviors: Standardizes shorthand, asks clarifying questions, prioritizes tickets that are easy to read.
- Workarounds: Limits options verbally, refuses complicated requests during rush, writes notes manually.
- Quotes: "The best ticket is the one I do not have to interpret."
- Emotions: Focused, pressured, frustrated by preventable errors.
- Surprises: Staff value fewer valid choices over many theoretically possible customizations.
- Design implications: Make each order kitchen-readable, enforce required selections, and prevent unsupported combinations.
- Confidence: Medium as a synthetic operator proxy; real Curry Cruiser workflow is still unknown.

## Empathy Maps

### Empathy Map: P1 Fast Lunch Customer

- Says: "I just want lunch that tastes right." "How long is this going to take?"
- Thinks: I need a safe choice; I do not want to hold up the line.
- Does: Picks familiar options, scans for popular choices, skips optional detail.
- Feels: Rushed, hungry, mildly exposed in public.
- Pains: Too many choices, unclear order status, account setup, long review screens.
- Gains: Fast defaults, clear progress, pickup estimate, visible confirmation.
- Evidence: Stage 02 off-premise speed/intuitive-tech findings plus synthetic interview.
- Design implications: Prioritize a fast recommended path and short review.

### Empathy Map: P2 Careful Customizer

- Says: "If there is no place for my restriction, I assume they do not want me to order that way."
- Thinks: Is this option safe? Will staff understand my need?
- Does: Reads ingredients, checks spice and dietary labels, asks staff if uncertain.
- Feels: Cautious, self-conscious, motivated to avoid mistakes.
- Pains: Hidden ingredients, vague spice levels, no structured allergy handling.
- Gains: Dietary tags, ingredient cues, explicit unsupported-request guidance.
- Evidence: Stage 02 no-free-text risk plus synthetic interview.
- Design implications: Include structured dietary and allergen choices with clear limits.

### Empathy Map: P3 QR-Skeptical Customer

- Says: "If scanning is step one and it fails, I am already annoyed."
- Thinks: Why do I have to use my phone for this? Is this going to load?
- Does: Tries QR only when it seems fast; uses posted menu or asks staff if not.
- Feels: Skeptical, impatient, excluded when fallback is unclear.
- Pains: Small text, glare, privacy concern, poor signal, mandatory QR entry.
- Gains: Direct URL, staff fallback, readable layout, no account requirement.
- Evidence: Stage 02 QR-code mixed-signal findings plus synthetic interview.
- Design implications: Do not make QR the only path; make the first screen fast and reassuring.

### Empathy Map: P4 Staff Operator

- Says: "The best ticket is the one I do not have to interpret."
- Thinks: Is this complete? Can we make this? What is the pickup name or number?
- Does: Reads tickets, clarifies missing details, manages sold-out items, prepares in sequence.
- Feels: Pressured, focused, irritated by preventable ambiguity.
- Pains: Unsupported requests, inconsistent order details, missing required options.
- Gains: Consistent ticket order, required selections, sold-out flags, simple identifiers.
- Evidence: Stage 02 staff/operator research questions plus synthetic interview.
- Design implications: Design the order summary as much for staff as for customers.

## User Groups

| User Group | Evidence Pattern | Core Need | Design Implication |
|---|---|---|---|
| Fast Default Seekers | P1 values speed, defaults, and minimal required interaction. | Complete a valid order quickly without hesitation. | Recommended combos, progressive steps, and short required choices. |
| Careful Choice Makers | P2 needs dietary, spice, and ingredient confidence before submit. | Understand what each option means and whether it fits their needs. | Structured dietary filters, spice descriptions, ingredient notes, and clear exceptions. |
| Access-Fragile Customers | P3 may resist QR-only access because of glare, loading, privacy, or comfort. | Start and complete the flow without being trapped by one entry method. | Optional QR, direct URL/fallback, lightweight mobile screens, no account wall. |
| Rush-Mode Staff | P4 needs complete, standardized, fulfillable tickets. | Receive orders that reduce interpretation and kitchen disruption. | Required fields, kitchen-readable summaries, availability handling, and pickup identifiers. |

## Personas

### Persona: Maya, the Fast Default Seeker

- Represented user group: Fast Default Seekers
- Role/context: Lunch customer near the truck with limited break time.
- Goals: Order quickly, avoid line pressure, get a reliable curry.
- Needs: Clear defaults, fast choices, pickup confirmation.
- Pain points: Over-customization, unclear progress, account setup.
- Behaviors: Picks popular options and avoids optional detail.
- Motivations: Save time without sacrificing taste.
- Accessibility or situational constraints: One-handed mobile use, outdoor glare, time pressure.
- Evidence notes: Based on P1 synthetic interview and off-premise speed findings.
- One-sentence user story: As a time-pressed lunch customer, I want a guided curry order with sensible defaults, so that I can submit confidently without slowing down the line.
- Design implication: Put the recommended path first and make optional customization secondary.
- Confidence: Medium.

### Persona: Priya, the Careful Choice Maker

- Represented user group: Careful Choice Makers
- Role/context: Customer with dietary preferences and specific spice expectations.
- Goals: Know what is in the curry, choose safely, avoid awkward clarification.
- Needs: Ingredient cues, dietary tags, spice meanings, supported substitution boundaries.
- Pain points: Hidden ingredients, vague labels, no way to represent restrictions.
- Behaviors: Reads before choosing and asks staff if safety is unclear.
- Motivations: Enjoy flavorful food without risking an unsuitable order.
- Accessibility or situational constraints: Cognitive load from checking multiple constraints while in a rush.
- Evidence notes: Based on P2 synthetic interview and no-free-text risk.
- One-sentence user story: As a careful customizer, I want predefined dietary and spice choices that explain what they mean, so that I can order safely without typing special instructions.
- Design implication: Include structured dietary/allergen controls and clear unavailable/unsupported states.
- Confidence: Medium.

### Persona: Andre, the Access-Fragile Customer

- Represented user group: Access-Fragile Customers
- Role/context: Customer willing to use a phone but wary of QR-only ordering.
- Goals: See the menu, order without friction, keep control if the digital flow fails.
- Needs: Readable mobile interface, direct link or staff fallback, no account requirement.
- Pain points: Mandatory QR codes, tiny text, poor connectivity, privacy concern.
- Behaviors: Tries digital only if it looks faster than asking staff.
- Motivations: Avoid wasted effort and complete the meal purchase simply.
- Accessibility or situational constraints: Bright outdoor conditions, older phone, possible low bandwidth.
- Evidence notes: Based on P3 synthetic interview and mixed QR adoption evidence.
- One-sentence user story: As a QR-skeptical customer, I want another obvious way to start or finish my order, so that a failed scan does not stop me from buying lunch.
- Design implication: QR access must be optional and paired with visible fallback language.
- Confidence: Medium.

### Persona: Lina, the Rush-Mode Staff Operator

- Represented user group: Rush-Mode Staff
- Role/context: Curry Cruiser staff member taking, preparing, and handing off orders.
- Goals: Keep the line moving, make accurate dishes, avoid clarification loops.
- Needs: Complete tickets, consistent option order, visible exceptions, pickup identifiers.
- Pain points: Missing spice level, ambiguous allergies, unsupported substitutions, sold-out confusion.
- Behaviors: Standardizes shorthand and prioritizes readable tickets.
- Motivations: Protect service speed and food quality during rush.
- Accessibility or situational constraints: Noise, heat, divided attention, limited counter space.
- Evidence notes: Based on P4 synthetic interview and mobile food-service constraints.
- One-sentence user story: As a food truck staff member, I want every submitted order to arrive in a consistent kitchen-readable format, so that I can prepare it accurately during rush service.
- Design implication: Staff ticket structure is a primary design artifact, not an afterthought.
- Confidence: Medium.

## User Stories

- As a time-pressed lunch customer, I want a guided curry order with sensible defaults, so that I can submit confidently without slowing down the line.
- As a careful customizer, I want predefined dietary and spice choices that explain what they mean, so that I can order safely without typing special instructions.
- As a QR-skeptical customer, I want another obvious way to start or finish my order, so that a failed scan does not stop me from buying lunch.
- As a food truck staff member, I want every submitted order to arrive in a consistent kitchen-readable format, so that I can prepare it accurately during rush service.

## Journey Maps

### Journey Map: Maya, the Fast Default Seeker

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Notice truck | Sees line and menu board. | Do I have time? | Interested, rushed | Queue pressure | Show short URL/QR and average wait cue. | Keep entry obvious and quick. |
| Start order | Opens flow from QR/direct link. | Will this be fast? | Guarded | Slow load or account prompt | Start with "build curry" and no account wall. | Reduce startup friction. |
| Choose defaults | Picks curry, protein, spice. | What is popular? | Focused | Too many equal options | Recommended combo and clear required steps. | Use guided choices. |
| Review | Checks total and pickup info. | Did I miss anything? | Relieved if clear | Long summary | Short structured review. | Highlight required fields and total. |
| Submit/pickup | Submits and waits for number/name. | How do I know it is mine? | Reassured | No confirmation | Order number and pickup status. | Confirmation must be explicit. |

### Journey Map: Priya, the Careful Choice Maker

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Evaluate menu | Looks for vegetarian/dietary cues. | Can I eat this? | Cautious | Hidden ingredients | Dietary tags near options. | Surface ingredient constraints early. |
| Customize | Chooses base, protein, spice, add-ons. | What does hot mean here? | Alert | Vague spice labels | Spice descriptions and defaults. | Explain option meaning concisely. |
| Handle exceptions | Looks for allergy/substitution path. | What if my need is not listed? | Uneasy | No free-text path | Structured allergy/dietary selector plus staff fallback. | No-free-text needs honest boundaries. |
| Review | Verifies dietary selections. | Will they see this? | Hopeful | Dietary note buried | Dedicated dietary line in summary. | Make critical choices prominent. |
| Pickup | Confirms item matches order. | Is this mine and safe? | Relieved or anxious | No verification cue | Printed/displayed key modifiers. | Staff/customer confirmation must match. |

### Journey Map: Andre, the Access-Fragile Customer

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Encounter QR | Sees QR sign. | Do I have to scan? | Skeptical | Mandatory QR | Include short URL and staff fallback. | Support multiple entry methods. |
| Load page | Opens on phone outdoors. | Can I read this? | Impatient | Glare, tiny text, slow network | Lightweight page and high contrast. | Optimize mobile readability. |
| Decide path | Chooses digital or asks staff. | Is this easier than talking? | Testing patience | Account prompts | Guest ordering only. | Remove authentication. |
| Complete or exit | Submits or switches to staff. | Did it work? | Relieved if confirmed | Failed scan/load | Persist selections and offer fallback. | Failure states need recovery. |
| Pickup | Uses confirmation to collect. | What do I say? | Neutral | Unclear identifier | Large order number/name. | Confirmation supports handoff. |

### Journey Map: Lina, the Rush-Mode Staff Operator

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Receive order | Reads ticket/order queue. | Is it complete? | Focused | Missing required choices | Required fields prevent incomplete tickets. | Validate before submit. |
| Prepare curry | Follows item sequence. | Can we make this now? | Pressured | Sold-out modifiers | Availability controls. | Remove unavailable options before ordering. |
| Resolve exceptions | Checks dietary or allergy line. | Is this safe/supportable? | Alert | Ambiguous requests | Structured exception categories. | Avoid hidden critical info. |
| Hand off | Calls order number/name. | Which order is this? | Busy | Weak identifiers | Simple pickup ID. | Handoff language matters. |
| Recover errors | Handles wrong/missing order. | How did this happen? | Frustrated | No correction path | Customer review and staff-readable summary. | Prevent errors upstream. |

## Accessibility And Edge Cases

- Touch and motor: Controls must be large, spaced, and easy to select one-handed; avoid tiny modifier chips.
- Vision: Use high contrast, readable type, clear focus states, and avoid relying only on color for selected/unavailable states.
- Cognition and stress: Show one decision group at a time or visually group related choices; keep labels concrete.
- Language: Thai curry terms may need brief descriptions or examples for unfamiliar customers.
- Connectivity: The ordering flow should load quickly and recover if the page is interrupted.
- QR access: Provide direct URL, staff-assisted ordering, and visible fallback for people who cannot or will not scan.
- Allergies and dietary restrictions: Predefined options must include critical restrictions or route users to staff before submission.
- Sold-out items: Unavailable options should be disabled with a short reason, not silently removed.
- No-payment path: If payment is out of scope, confirmation must explain where and how payment happens.

## Research Limits

- All interview summaries are synthetic and hypothesis-based.
- No real Curry Cruiser customer, menu, or staff workflow data has been collected.
- Personas are useful for design exploration but should be treated as provisional until interviews confirm or change the patterns.
- Dietary and allergy handling carries higher risk than other assumptions and needs direct validation.
- Staff-facing order needs are inferred from food truck context and should be tested with actual operators.
