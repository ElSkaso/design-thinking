# UX Case Study: Curry Cruiser Second Revision

## Executive Summary

Curry Cruiser is a Thai curry food truck concept that needs a digital ordering experience for structured curry customization. Customers should be able to open the experience, choose from predefined options, review their order, and submit without free-text fields.

The core UX challenge is dual-sided: customers need speed and confidence, while staff need complete, kitchen-readable tickets that reduce clarification during rush service. Research suggests that off-premise ordering is common, speed and intuitive technology matter, and QR access can help only when it is not the only path.

The final direction is a mobile-first guided curry builder with optional QR/direct entry, recommended combos, structured dietary handling, required predefined modifier groups, a staff-ticket-style review, and a clear confirmation handoff. Evidence confidence is medium: the work is grounded in desk research and synthetic interviews, but the menu, staff workflow, and real customer behavior still need validation.

## Stage 01: Problem

This phase answered what the project should investigate before jumping into screens. The framing shifted from a possible QR ordering tool to a broader friction problem across customers and staff. The artifact produced was a focused project brief.

### Problem Frame

Curry Cruiser needs a digital ordering experience that lets customers customize Thai curry through predefined options and submit a complete order without free-text fields. The challenge is to reduce customer ordering friction while also reducing the interpretation, clarification, and fulfillment friction placed on food truck staff.

The research should validate which parts of the curry ordering process create the most friction, which customization choices are essential, and how a structured order flow can stay fast, clear, and operationally realistic for a food truck context.

### Target Users

Target users should be derived from research, not assumed as fixed personas at intake.

Provisional user groups to validate:

- Customers ordering Thai curry from Curry Cruiser in a food truck setting.
- Customers who need to make customization decisions quickly, possibly while near the truck, in a line, or during a short meal break.
- Customers with dietary preferences or restrictions who need clear predefined choices.
- Curry Cruiser staff who receive, interpret, prepare, and hand off customized curry orders during service.

### Context And Constraints

- Domain: food, specifically Thai curry ordering for a food truck.
- Core flow: open ordering experience, choose from predefined curry customization options, review the order, and submit it.
- Free-text fields should not be used for customer customization.
- QR-code access may be used, but it is not mandatory and should not drive the solution prematurely.
- The workspace default disables the optional app build stage, so this run should prioritize research, UX artifacts, and case study outputs unless implementation is explicitly reopened.
- The experience should account for food truck constraints such as limited service time, small staff capacity, variable item availability, and customer queue pressure.
- Research should distinguish customer-facing friction from staff-facing operational friction.

### Known Facts

- The project is for a Thai curry food truck called Curry Cruiser.
- The solution direction is a digital food order customization experience.
- Customers should customize curry orders through predefined options.
- Customers should submit orders without using free-text fields.
- QR-code access is allowed but not required.
- The core goal is to reduce ordering friction for customers and operational friction for Curry Cruiser staff.

### Assumptions

- Current ordering friction may come from unclear customization choices, verbal back-and-forth, unsupported requests, or staff needing to interpret ambiguous orders.
- Predefined customization options can reduce errors if the option set reflects the actual menu and kitchen workflow.
- Customers are likely using mobile devices in a time-sensitive, public, or semi-public ordering context.
- Curry customization may include choices such as curry type, protein, spice level, base, toppings, dietary preference, and pickup timing.
- Staff need submitted orders to be structured, readable, and easy to fulfill during peak service.
- Some edge cases, such as allergies, sold-out items, substitutions, or special requests, may be hard to support without free text and need explicit design decisions.

### Open Questions

- What exact curry customization options does Curry Cruiser offer?
- Which customization choices are most important to customers, and which create operational strain?
- Where does ordering friction currently happen for customers?
- Where does operational friction currently happen for staff?
- Should the ordering experience support payment, or only structured order submission?
- How should dietary restrictions, allergens, substitutions, and sold-out items be handled without free-text fields?
- Should orders be submitted only while customers are physically near the truck, or also before arrival?
- What confirmation, pickup timing, and order identification information do customers and staff need?
- What access method would customers actually use: QR code, direct link, kiosk, staff-shared link, or another entry point?

### Research Questions

- How do customers currently decide what to order from food trucks when customization is involved?
- What parts of a Thai curry order do customers expect to customize?
- Which predefined option categories would cover most valid Curry Cruiser orders without creating a slow or cluttered flow?
- What language, grouping, and sequencing help customers make curry customization decisions quickly and confidently?
- What information do Curry Cruiser staff need at a glance to prepare a customized order accurately?
- What order details most often cause clarification, mistakes, delays, or unsupported requests?
- How do customers respond to QR-code ordering in a food truck context?
- What failure states must the experience handle, such as incomplete orders, unavailable items, dietary restrictions, or unclear pickup timing?

### Success Signals

- Customers can submit a complete customized curry order without free-text input.
- Customers understand the available options and constraints before submitting.
- Customers can review and correct their order before submission.
- Staff receive structured order details that are easy to scan and fulfill.
- The flow reduces clarification loops between customers and staff.
- The customization model reflects real Curry Cruiser menu and kitchen constraints.
- Research identifies target users, priority friction points, and validated customization categories for Stage 02.

### What This Unlocked

The brief made the next phase about validating friction and option structure, not simply confirming a preferred ordering mechanism.

## Stage 02: Research

This phase answered whether the ordering problem is credible in the broader restaurant and food truck context. The key human-centered move was separating validated off-premise and accessibility signals from Curry Cruiser-specific assumptions. The artifact produced was a research dossier.

### Research Questions

- How do customers currently decide what to order from food trucks when customization is involved?
- What parts of a Thai curry order do customers expect to customize?
- Which predefined option categories would cover most valid Curry Cruiser orders without creating a slow or cluttered flow?
- What language, grouping, and sequencing help customers make curry customization decisions quickly and confidently?
- What information do Curry Cruiser staff need at a glance to prepare a customized order accurately?
- What order details most often cause clarification, mistakes, delays, or unsupported requests?
- How do customers respond to QR-code ordering in a food truck context?
- What failure states must the experience handle, such as incomplete orders, unavailable items, dietary restrictions, or unclear pickup timing?

### Key Findings

- Evidence, medium confidence: Off-premise ordering is a mainstream behavior. The National Restaurant Association's 2025 off-premises report says 47% of adults pick up takeout at least weekly, 37% order delivery at least weekly, and younger adults report higher growth in takeout, drive-thru, and delivery behavior. Design implication: Curry Cruiser should be optimized for fast, to-go decision-making rather than leisurely menu browsing. Source: https://restaurant.org/research-and-media/research/research-reports/off-premises-restaurant-trends-2025/
- Evidence, medium confidence: Speed, good service, intuitive ordering/payment technology, value offers, and loyalty are described as off-premise "must-haves" by the National Restaurant Association. Design implication: the ordering flow should minimize decision steps, make totals visible, and treat digital convenience as part of the service experience rather than a novelty. Source: https://restaurant.org/research-and-media/research/research-reports/off-premises-restaurant-trends-2025/
- Evidence, medium confidence: The U.S. mobile food services category includes businesses preparing and serving meals or snacks for immediate consumption from vehicles or carts. Design implication: Curry Cruiser's order model should reflect immediate-prep constraints: short tickets, item availability, pickup handoff, and low staff overhead. Source: https://www.census.gov/naics/resources/archives/sect72.html
- Evidence, low-to-medium confidence: IBISWorld describes U.S. food trucks as dependent on foot traffic and competing through quality, taste, convenience, and location. Design implication: the solution should not assume customers will patiently create accounts, compare many options, or complete a long checkout while standing near a truck. Source: https://www.ibisworld.com/united-states/industry/food-trucks/4322/
- Evidence, medium confidence: Restaurant QR-code menu research and reporting show a mixed signal: QR menus can support operational adaptation, but customer backlash includes effort, privacy, readability, and technology-friction concerns. Design implication: QR access should be optional and supported by fallback entry methods; the experience should work quickly after entry rather than making QR itself the hero. Sources: https://www.sciencedirect.com/science/article/abs/pii/S1878450X25001519 and https://www.wsj.com/business/hospitality/restaurant-menus-qr-codes-33f777c8
- Evidence, high confidence: WCAG 2.2 Level AA includes minimum contrast, labels/instructions, error identification, and target-size requirements relevant to mobile ordering controls. Design implication: predefined choices should use clear labels, visible selected states, error messages for missing required choices, and touch targets at least 24 by 24 CSS pixels or spaced equivalently. Source: https://www.w3.org/TR/WCAG22/
- Assumption, medium confidence: Curry ordering can be represented as a sequence of bounded choices: curry, protein, base, spice, add-ons, dietary flags, review, and submit. Design implication: Stage 03 interviews must test whether that sequence matches customer thinking and staff preparation.
- Risk, medium confidence: Removing all free-text fields may reduce ambiguity but also block valid needs such as allergies or substitutions. Design implication: the design needs structured exception handling, not just omission of special requests.

### Evidence Table

| Signal | Type | Confidence | Design Implication |
|---|---|---:|---|
| 47% of U.S. adults pick up takeout at least weekly; younger adults report increased off-premise use. | Evidence | Medium | Prioritize mobile, fast, to-go ordering behavior. |
| Off-premise "must-haves" include speedy service, good service, intuitive tech for ordering/payment, value, and loyalty. | Evidence | Medium | Keep interaction simple, total cost visible, and confirmation clear. |
| Mobile food services prepare and serve food from vehicles or carts for immediate consumption. | Evidence | Medium | Design for immediate prep, queue pressure, pickup clarity, and constrained staff capacity. |
| Food trucks compete on quality, taste, convenience, and location, and depend on foot traffic. | Evidence | Low-to-medium | Avoid account-heavy or long-form flows that do not fit high-foot-traffic moments. |
| QR menus have operational benefits but can create customer effort, privacy concern, readability issues, or tech friction. | Evidence | Medium | Treat QR as one entry path, not the only path; provide non-QR alternatives. |
| WCAG 2.2 AA defines requirements for contrast, labels, error identification, and target size. | Evidence | High | Build wireframe requirements around readable text, labeled controls, clear errors, and usable tap targets. |
| Thai curry customization likely includes curry type, protein, base, spice, add-ons, and dietary needs. | Assumption | Medium | Validate option categories with customers and staff before finalizing the order model. |
| Staff need standardized tickets more than rich narrative order notes. | Assumption | Medium | Emphasize structured order summary and kitchen-readable grouping. |
| No free text could hide important allergy needs. | Risk | Medium | Provide predefined allergy/dietary choices and a clear escalation path if a need is not supported. |

### Assumption Log

- Curry Cruiser has a small enough menu for a guided customization flow rather than search-first browsing.
- Most customers order one meal at a time, not large group orders.
- Payment is outside scope unless later validation proves payment friction is central.
- Staff can fulfill orders more reliably when each ticket follows the same option order.
- Customers will tolerate a digital flow if it is faster than verbal ordering and does not feel like extra work.
- QR access is useful in line or near the truck, but direct link or staff-assisted entry may be needed for accessibility and adoption.
- Dietary and allergy handling needs structured choices plus an honest boundary for unsupported requests.

### Competitive Landscape

| Competitor / Alternative | Pattern | Strength | Weakness / Gap | Implication For Curry Cruiser |
|---|---|---|---|---|
| Toast Online Ordering | Menu hierarchy, online visibility, pickup/dining configuration, POS-connected menus. | Operationally mature; maps orders into restaurant systems. | Can be heavier than a focused food-truck customization flow. | Borrow the menu/modifier hierarchy, but keep the customer experience narrower. |
| ChowNow menu/modifier tools | Categories, menu items, modifier groups, reusable modifiers, item availability toggles. | Strong support for structured choices and disabling unavailable items. | Generic menus can still overwhelm customers if too many modifiers appear. | Use required/optional modifier groups with clear limits and sold-out handling. |
| DoorDash / marketplace ordering | Familiar menu browsing, item modifiers, fees, pickup/delivery expectations. | Customers understand the pattern. | Marketplace overhead, fees, and browsing complexity may not fit an independent truck. | Borrow review/confirmation conventions, not the whole marketplace model. |
| Square / lightweight ordering tools | Small-business-friendly ordering and modifier patterns. | Familiar to independent food businesses. | May still require platform setup and payment decisions outside this project. | Keep solution compatible with simple POS handoff if built later. |
| Verbal counter ordering | Human clarification, staff can guide choices live. | Flexible and inclusive when staff have time. | Slow during rush; inconsistent details; customer pressure in line. | Preserve clarity and human fallback while reducing routine back-and-forth. |
| Static paper/menu board | Fast scanning and no phone barrier. | Low technical friction; good for quick orientation. | Hard to handle customization complexity and availability changes. | Pair digital ordering with visible menu-board language and short option labels. |

### Participant Sample Plan

Target participant groups:

- Food truck customers who order during lunch, event, or commute windows.
- Customers who frequently customize meals or have dietary preferences.
- Customers who avoid QR-code or mobile ordering when it feels cumbersome.
- Curry Cruiser staff or proxy food truck operators who prepare, call out, and hand off customized orders.

Sample criteria:

- 5-7 customer participants, including at least two people who order food while time-pressured, one person with a dietary restriction or strong preference, and one person who is less comfortable with QR ordering.
- 2-3 operator participants, ideally Curry Cruiser staff; if unavailable, interview food truck, fast-casual, or small counter-service workers.
- Mix of mobile comfort, age range, ordering context, and dietary complexity.

Recruitment rationale:

- The product affects both sides of the service exchange. Customer-only research would miss preparation friction; staff-only research would miss adoption and decision friction.
- Because the workspace currently has no live user access, Stage 03 may use clearly labeled synthetic interview profiles based on this dossier. Those profiles must remain hypothesis-based until real interviews validate them.

Synthetic participant profiles for Stage 03 if real users are unavailable:

- P1: Time-pressed lunch customer who wants a reliable default order fast.
- P2: Customization-heavy customer with spice, protein, and dietary preference decisions.
- P3: QR-skeptical or low-bandwidth customer who needs an obvious fallback.
- P4: Curry Cruiser order taker/prep staff member who needs standardized tickets under rush pressure.

### Interview Questions

Customer questions:

- Tell me about the last time you ordered from a food truck. What happened from deciding to order through getting your food?
- When you order a customizable meal, what choices do you expect to make?
- What makes a food-truck menu easy or hard to understand when you are in a hurry?
- Tell me about a time your order needed clarification. What caused the confusion?
- How do you feel about scanning a QR code to order at a food truck?
- What would make you abandon a mobile ordering flow before submitting?
- How do you handle dietary restrictions, allergies, spice preferences, or substitutions when ordering quickly?
- What do you need to see before you feel confident submitting an order?
- After submitting, what confirmation or pickup information would you expect?

Staff/operator questions:

- Walk me through how a customized order reaches the person preparing the food today.
- What order details are most often missing, unclear, or wrong?
- Which customization choices are easy to support, and which slow the kitchen down?
- What does a good ticket look like during a rush?
- What happens when an item or modifier sells out mid-service?
- How do staff handle allergies, substitutions, and special requests today?
- What would make a digital order easier than a verbal one?
- What would make digital ordering create more work for staff?
- What information should never be optional on a submitted order?

### Implications For Empathize

- Build at least three customer/user groups: fast default seekers, careful customizers, and staff operators.
- Include one participant profile that challenges the QR assumption.
- Treat dietary handling as a core empathy topic because the no-free-text constraint could either help or harm trust.
- Probe the full journey from menu awareness to pickup handoff, not only the customization screen.
- Distinguish customer emotions from staff emotions: customers may feel rushed or uncertain; staff may feel interrupted or exposed to error.
- Carry evidence labels into every empathy map because real user interviews have not yet been conducted.

### Research Limits

- No real Curry Cruiser menu, staff workflow, pricing, allergy policy, or service-volume data was provided.
- No live customer or staff interviews were conducted in this stage.
- Desk research validates the broader need for fast off-premise ordering and structured mobile controls, but it does not prove Curry Cruiser's exact friction points.
- Competitor analysis is pattern-based and not a formal usability benchmark.
- QR-code findings are mixed and context-dependent; adoption must be tested with Curry Cruiser's actual customers.

### What This Unlocked

The research phase made the empathize phase deliberately two-sided: customer confidence and staff readability both had to appear in the user model.

## Stage 03: Empathize

This phase answered who is affected and what each group needs emotionally and practically. Because real participants were not available, the artifacts use synthetic but evidence-grounded profiles and state their limits clearly. The output was an empathize pack with interviews, empathy maps, user groups, personas, stories, journeys, and edge cases.

### Participant Sample

This stage uses hypothesis-based synthetic participants because real Curry Cruiser customers and staff were not available in the workspace. The profiles are grounded in the Stage 02 desk research and must be validated through real interviews before final design decisions are treated as proven.

| Label | Participant Fit | Sample Criteria | Recruitment Rationale | Evidence Limit |
|---|---|---|---|---|
| P1 Fast Lunch Customer | Orders food while time-pressured near work or errands. | Mobile-comfortable, values speed, usually chooses familiar meals. | Validates the rushed ordering context and default-choice needs. | Synthetic; needs real food-truck customer validation. |
| P2 Careful Customizer | Has dietary preferences and strong spice/protein expectations. | Customizes meals often; needs confidence before submitting. | Validates whether predefined options can replace free-text requests. | Synthetic; allergy/dietary needs require real participant input. |
| P3 QR-Skeptical Customer | Uses mobile web but dislikes QR-only ordering or low-readable menus. | Mixed technology comfort; may be older, low-bandwidth, privacy-sensitive, or under glare. | Challenges the QR-access assumption and tests fallback needs. | Synthetic; adoption risk must be observed. |
| P4 Staff Operator | Takes or prepares food truck orders during busy service. | Small-team counter-service or food truck operator. | Validates staff ticket clarity, availability, and kitchen workflow. | Synthetic proxy until Curry Cruiser staff can be interviewed. |

### Interview Questions

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

### Interview Summaries

#### Interview Summary: P1 Fast Lunch Customer

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

#### Interview Summary: P2 Careful Customizer

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

#### Interview Summary: P3 QR-Skeptical Customer

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

#### Interview Summary: P4 Staff Operator

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

### Empathy Maps

#### Empathy Map: P1 Fast Lunch Customer

- Says: "I just want lunch that tastes right." "How long is this going to take?"
- Thinks: I need a safe choice; I do not want to hold up the line.
- Does: Picks familiar options, scans for popular choices, skips optional detail.
- Feels: Rushed, hungry, mildly exposed in public.
- Pains: Too many choices, unclear order status, account setup, long review screens.
- Gains: Fast defaults, clear progress, pickup estimate, visible confirmation.
- Evidence: Stage 02 off-premise speed/intuitive-tech findings plus synthetic interview.
- Design implications: Prioritize a fast recommended path and short review.

#### Empathy Map: P2 Careful Customizer

- Says: "If there is no place for my restriction, I assume they do not want me to order that way."
- Thinks: Is this option safe? Will staff understand my need?
- Does: Reads ingredients, checks spice and dietary labels, asks staff if uncertain.
- Feels: Cautious, self-conscious, motivated to avoid mistakes.
- Pains: Hidden ingredients, vague spice levels, no structured allergy handling.
- Gains: Dietary tags, ingredient cues, explicit unsupported-request guidance.
- Evidence: Stage 02 no-free-text risk plus synthetic interview.
- Design implications: Include structured dietary and allergen choices with clear limits.

#### Empathy Map: P3 QR-Skeptical Customer

- Says: "If scanning is step one and it fails, I am already annoyed."
- Thinks: Why do I have to use my phone for this? Is this going to load?
- Does: Tries QR only when it seems fast; uses posted menu or asks staff if not.
- Feels: Skeptical, impatient, excluded when fallback is unclear.
- Pains: Small text, glare, privacy concern, poor signal, mandatory QR entry.
- Gains: Direct URL, staff fallback, readable layout, no account requirement.
- Evidence: Stage 02 QR-code mixed-signal findings plus synthetic interview.
- Design implications: Do not make QR the only path; make the first screen fast and reassuring.

#### Empathy Map: P4 Staff Operator

- Says: "The best ticket is the one I do not have to interpret."
- Thinks: Is this complete? Can we make this? What is the pickup name or number?
- Does: Reads tickets, clarifies missing details, manages sold-out items, prepares in sequence.
- Feels: Pressured, focused, irritated by preventable ambiguity.
- Pains: Unsupported requests, inconsistent order details, missing required options.
- Gains: Consistent ticket order, required selections, sold-out flags, simple identifiers.
- Evidence: Stage 02 staff/operator research questions plus synthetic interview.
- Design implications: Design the order summary as much for staff as for customers.

### User Groups

| User Group | Evidence Pattern | Core Need | Design Implication |
|---|---|---|---|
| Fast Default Seekers | P1 values speed, defaults, and minimal required interaction. | Complete a valid order quickly without hesitation. | Recommended combos, progressive steps, and short required choices. |
| Careful Choice Makers | P2 needs dietary, spice, and ingredient confidence before submit. | Understand what each option means and whether it fits their needs. | Structured dietary filters, spice descriptions, ingredient notes, and clear exceptions. |
| Access-Fragile Customers | P3 may resist QR-only access because of glare, loading, privacy, or comfort. | Start and complete the flow without being trapped by one entry method. | Optional QR, direct URL/fallback, lightweight mobile screens, no account wall. |
| Rush-Mode Staff | P4 needs complete, standardized, fulfillable tickets. | Receive orders that reduce interpretation and kitchen disruption. | Required fields, kitchen-readable summaries, availability handling, and pickup identifiers. |

### Personas

#### Persona: Maya, the Fast Default Seeker

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

#### Persona: Priya, the Careful Choice Maker

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

#### Persona: Andre, the Access-Fragile Customer

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

#### Persona: Lina, the Rush-Mode Staff Operator

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

### User Stories

- As a time-pressed lunch customer, I want a guided curry order with sensible defaults, so that I can submit confidently without slowing down the line.
- As a careful customizer, I want predefined dietary and spice choices that explain what they mean, so that I can order safely without typing special instructions.
- As a QR-skeptical customer, I want another obvious way to start or finish my order, so that a failed scan does not stop me from buying lunch.
- As a food truck staff member, I want every submitted order to arrive in a consistent kitchen-readable format, so that I can prepare it accurately during rush service.

### Journey Maps

#### Journey Map: Maya, the Fast Default Seeker

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Notice truck | Sees line and menu board. | Do I have time? | Interested, rushed | Queue pressure | Show short URL/QR and average wait cue. | Keep entry obvious and quick. |
| Start order | Opens flow from QR/direct link. | Will this be fast? | Guarded | Slow load or account prompt | Start with "build curry" and no account wall. | Reduce startup friction. |
| Choose defaults | Picks curry, protein, spice. | What is popular? | Focused | Too many equal options | Recommended combo and clear required steps. | Use guided choices. |
| Review | Checks total and pickup info. | Did I miss anything? | Relieved if clear | Long summary | Short structured review. | Highlight required fields and total. |
| Submit/pickup | Submits and waits for number/name. | How do I know it is mine? | Reassured | No confirmation | Order number and pickup status. | Confirmation must be explicit. |

#### Journey Map: Priya, the Careful Choice Maker

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Evaluate menu | Looks for vegetarian/dietary cues. | Can I eat this? | Cautious | Hidden ingredients | Dietary tags near options. | Surface ingredient constraints early. |
| Customize | Chooses base, protein, spice, add-ons. | What does hot mean here? | Alert | Vague spice labels | Spice descriptions and defaults. | Explain option meaning concisely. |
| Handle exceptions | Looks for allergy/substitution path. | What if my need is not listed? | Uneasy | No free-text path | Structured allergy/dietary selector plus staff fallback. | No-free-text needs honest boundaries. |
| Review | Verifies dietary selections. | Will they see this? | Hopeful | Dietary note buried | Dedicated dietary line in summary. | Make critical choices prominent. |
| Pickup | Confirms item matches order. | Is this mine and safe? | Relieved or anxious | No verification cue | Printed/displayed key modifiers. | Staff/customer confirmation must match. |

#### Journey Map: Andre, the Access-Fragile Customer

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Encounter QR | Sees QR sign. | Do I have to scan? | Skeptical | Mandatory QR | Include short URL and staff fallback. | Support multiple entry methods. |
| Load page | Opens on phone outdoors. | Can I read this? | Impatient | Glare, tiny text, slow network | Lightweight page and high contrast. | Optimize mobile readability. |
| Decide path | Chooses digital or asks staff. | Is this easier than talking? | Testing patience | Account prompts | Guest ordering only. | Remove authentication. |
| Complete or exit | Submits or switches to staff. | Did it work? | Relieved if confirmed | Failed scan/load | Persist selections and offer fallback. | Failure states need recovery. |
| Pickup | Uses confirmation to collect. | What do I say? | Neutral | Unclear identifier | Large order number/name. | Confirmation supports handoff. |

#### Journey Map: Lina, the Rush-Mode Staff Operator

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities | Design Implications |
|---|---|---|---|---|---|---|
| Receive order | Reads ticket/order queue. | Is it complete? | Focused | Missing required choices | Required fields prevent incomplete tickets. | Validate before submit. |
| Prepare curry | Follows item sequence. | Can we make this now? | Pressured | Sold-out modifiers | Availability controls. | Remove unavailable options before ordering. |
| Resolve exceptions | Checks dietary or allergy line. | Is this safe/supportable? | Alert | Ambiguous requests | Structured exception categories. | Avoid hidden critical info. |
| Hand off | Calls order number/name. | Which order is this? | Busy | Weak identifiers | Simple pickup ID. | Handoff language matters. |
| Recover errors | Handles wrong/missing order. | How did this happen? | Frustrated | No correction path | Customer review and staff-readable summary. | Prevent errors upstream. |

### Accessibility And Edge Cases

- Touch and motor: Controls must be large, spaced, and easy to select one-handed; avoid tiny modifier chips.
- Vision: Use high contrast, readable type, clear focus states, and avoid relying only on color for selected/unavailable states.
- Cognition and stress: Show one decision group at a time or visually group related choices; keep labels concrete.
- Language: Thai curry terms may need brief descriptions or examples for unfamiliar customers.
- Connectivity: The ordering flow should load quickly and recover if the page is interrupted.
- QR access: Provide direct URL, staff-assisted ordering, and visible fallback for people who cannot or will not scan.
- Allergies and dietary restrictions: Predefined options must include critical restrictions or route users to staff before submission.
- Sold-out items: Unavailable options should be disabled with a short reason, not silently removed.
- No-payment path: If payment is out of scope, confirmation must explain where and how payment happens.

### Research Limits

- All interview summaries are synthetic and hypothesis-based.
- No real Curry Cruiser customer, menu, or staff workflow data has been collected.
- Personas are useful for design exploration but should be treated as provisional until interviews confirm or change the patterns.
- Dietary and allergy handling carries higher risk than other assumptions and needs direct validation.
- Staff-facing order needs are inferred from food truck context and should be tested with actual operators.

### What This Unlocked

The empathy work narrowed the design target from a generic order form to four moments: fast defaults, safe customization, resilient entry, and staff-readable fulfillment.

## Stage 04: Define

This phase answered which problem frames should guide ideation. The key move was making the customer-facing and staff-facing problems equally explicit, while treating no-free-text as both a constraint and a risk. The artifact produced was a definition brief.

### Problem Statements

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

### User Needs

- Fast Default Seekers need a way to complete a valid curry order with minimal decision overhead because food truck ordering often happens under time and line pressure. Success means users can submit a complete standard order without staff clarification.
- Careful Choice Makers need a way to understand dietary, ingredient, and spice implications before submitting because no-free-text ordering can otherwise hide important needs. Success means users can identify whether their needs are supported before checkout or submission.
- Access-Fragile Customers need a way to start and complete ordering without being trapped by QR-only access because mobile context, glare, privacy concern, or connectivity can block adoption. Success means customers can still order when scanning fails or is undesirable.
- Rush-Mode Staff need a way to receive complete, structured, fulfillable orders because ambiguity turns into delays and errors during peak service. Success means every submitted order includes required choices, pickup identity, and key modifiers in a consistent order.

### Hypotheses

- If the flow opens with a recommended curry path and only asks for essential choices first, then time-pressed customers will complete orders faster and with less hesitation, because the design reduces equal-weight decision overload.
- If dietary, spice, and allergen-related choices are structured and visibly summarized, then careful customizers will trust the no-free-text flow more, because they can see how their needs are represented before submission.
- If QR access is paired with direct URL and staff fallback language, then access-fragile customers will be less likely to abandon, because the experience does not depend on one fragile entry method.
- If the submitted order summary mirrors kitchen workflow, then staff will need fewer clarification loops, because required choices and modifiers arrive in a consistent readable sequence.
- If unavailable options are disabled with a reason before submission, then customers will submit fewer invalid orders, because the system prevents unsupported combinations at the point of choice.
- If payment remains outside the flow but confirmation clearly explains next steps, then customers will still feel oriented after submit, because the handoff expectation is explicit.

### Problem / Hypothesis Pairs

| Problem | Hypothesis | Observable Outcome |
|---|---|---|
| Customers hesitate when every customization choice appears equally important. | A guided default path with essential choices first will reduce decision time. | Task completion under two minutes in usability testing for a standard order. |
| No-free-text ordering can exclude dietary or allergy needs. | Structured dietary options plus unsupported-need fallback will improve confidence. | Users can correctly identify whether their restriction is supported before submit. |
| QR-only access can create adoption friction. | Multiple entry methods will reduce abandonment from scan/load failure. | Users can name at least one fallback path when QR access does not work. |
| Staff lose time interpreting inconsistent order details. | Kitchen-readable summaries with required fields will reduce clarification needs. | Staff can read test orders and identify all prep details without follow-up questions. |
| Sold-out or unsupported combinations create avoidable service errors. | Disabled unavailable choices and validation will prevent invalid submitted orders. | Test users cannot submit known unsupported combinations. |

### Value Proposition

For Curry Cruiser customers who want Thai curry quickly but still need meaningful customization, the ordering experience helps them submit a complete, confident order through guided predefined choices, unlike verbal or open-ended ordering that can create hesitation, ambiguity, and staff clarification.

For Curry Cruiser staff working under food truck rush conditions, the same experience creates standardized, kitchen-readable tickets that reduce interpretation work and prevent unsupported requests before they reach prep.

Evidence basis: Desk research supports the importance of speedy, intuitive off-premise ordering; synthetic interviews identify distinct needs for fast customers, careful customizers, access-fragile customers, and staff. Confidence is medium until real Curry Cruiser interviews and menu validation are complete.

### Definition Limits

- The definition is still based on desk research and synthetic interviews, not real Curry Cruiser field research.
- The exact menu structure, ingredient list, allergy policy, and staff ticket format are unknown.
- The product direction includes digital ordering, but it should not yet assume payment, accounts, loyalty, delivery, or a full production app.
- QR access remains an option, not a validated requirement.
- The no-free-text constraint is accepted as part of the brief, but it creates an inclusion and safety risk that must be mitigated through structured choices and fallback guidance.

### What This Unlocked

The definition phase gave ideation a clear test: every solution idea had to reduce decision friction, representation risk, access fragility, or staff interpretation work.

## Stage 05: Ideate

This phase answered what solution direction best fits the defined problem. The strongest direction combined a guided curry builder, recommended combos, optional QR/direct entry, structured dietary handling, and a review screen that doubles as a staff-ticket preview. The artifact produced was an ideation and wireframe requirements pack.

### Goal Statements

- The Curry Cruiser ordering experience will let customers submit a complete Thai curry order through predefined choices so they can order quickly without creating ambiguous requests. Success will be measured by standard-order completion time, order validity, and reduced clarification loops.
- The experience will help careful customizers understand supported dietary, ingredient, and spice choices so they can decide whether the meal fits their needs before submission. Success will be measured by restriction-recognition tasks and confidence ratings.
- The experience will give Curry Cruiser staff kitchen-readable orders so they can prepare customized dishes accurately during rush service. Success will be measured by staff ability to interpret test tickets without follow-up questions.
- The entry model will support QR access without depending on it so customers can still order when scanning, connectivity, or comfort becomes a barrier. Success will be measured by successful fallback-path discovery.

### How Might We Questions

- How might we help time-pressed customers order a satisfying curry quickly when customization choices could otherwise slow them down?
- How might we make predefined customization feel flexible enough without letting unsupported requests reach staff?
- How might we help customers understand spice, dietary, and ingredient implications before they submit?
- How might we make QR access useful without making QR scanning the only door into ordering?
- How might we translate a customer-friendly order flow into a staff-friendly ticket format?
- How might we handle sold-out items and unsupported combinations before they become counter-service problems?
- How might we make the review step catch errors without becoming a long checkout page?

### Competitive Design Patterns

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

### Concept Directions

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

### Feature Prioritization

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

### User Flow

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

### Screen Requirements

#### Screen 1: Entry / Start

- Content: Curry Cruiser name, service status, short explanation, QR/direct access support, primary "Build a curry" action.
- Main actions: Start order; view fallback instruction.
- States: Closed/unavailable, loading, connection error.
- Accessibility: Large primary action, readable contrast, no account prompt.
- Evidence link: P1 speed, P3 access fragility.

#### Screen 2: Recommended Or Custom Choice

- Content: 2-3 recommended curry combinations and a custom-build option.
- Main actions: Choose recommended combo, customize combo, start custom.
- States: Recommended item unavailable; all recommended combos unavailable.
- Accessibility: Do not rely on photos alone; include text labels and dietary tags.
- Evidence link: P1 fast default seeker, P2 careful choice maker.

#### Screen 3: Curry Builder

- Content: Grouped predefined choices for curry type, protein/main, base, spice, add-ons.
- Main actions: Select required options, continue, go back.
- States: Missing required choice, disabled unavailable option, incompatible combination.
- Accessibility: Use radio/checkbox semantics, clear selected states, visible errors, adequate target spacing.
- Evidence link: P4 staff ticket needs, WCAG controls.

#### Screen 4: Dietary And Restrictions

- Content: Structured options such as vegetarian, vegan, contains nuts, gluten-conscious, shellfish/fish sauce note, no listed restriction, need staff help.
- Main actions: Select supported preference/restriction, continue.
- States: Unsupported need; staff-help route; restriction conflicts with selected item.
- Accessibility: Plain language, labels and instructions, no hidden critical text.
- Evidence link: P2 no-free-text trust risk.

#### Screen 5: Review Order

- Content: Order summary in kitchen-readable sequence, total if pricing is known, pickup/payment note, edit links.
- Main actions: Edit section, submit order.
- States: Missing required detail, unavailable option changed since selection, submit error.
- Accessibility: Section headings, clear button labels, error identification.
- Evidence link: P1 confirmation need, P4 readable ticket.

#### Screen 6: Confirmation

- Content: Order number, concise summary, pickup instruction, payment instruction if payment is outside the flow, staff fallback if changes are needed.
- Main actions: Show order number, start another order only if validated.
- States: Submitted, submission uncertain, duplicate submission warning.
- Accessibility: Large order ID, text-based confirmation, status message.
- Evidence link: Pickup handoff needs from P1 and P4.

#### Staff Ticket Requirement

- Content: Order ID, timestamp, item sequence, key modifiers, dietary flags, unavailable override status if any.
- Main actions: Mark received/preparing/ready if a staff interface is later built.
- States: New order, error/invalid, item sold out after submit.
- Accessibility: High contrast, scannable grouping, minimal visual noise.
- Evidence link: P4 staff operator journey.

### Wireframe Requirements

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

### Ideation Limits

- The menu, pricing, ingredients, allergen policy, and payment model are still unknown.
- Wireframes are requirements-level, not high-fidelity visual screens.
- Staff ticket requirements are based on synthetic operator needs and need Curry Cruiser validation.
- Recommended combos should not be finalized without menu and sales/prep input.
- The no-free-text constraint remains risky for allergies and unusual needs; the design must provide structured fallback rather than silently rejecting complexity.

### What This Unlocked

The ideation phase produced a prototype-ready product shape while respecting the workspace's no-app setup: the next valuable step is validation or visual prototyping, not implementation by default.

## Evidence Chains

Off-premise ordering is frequent and speed-sensitive -> P1 and Maya need a fast lunch path with minimal hesitation -> Fast Default Seeker persona and guided-flow hypothesis -> Recommended combos plus required choices first -> Faster standard-order completion.

QR-code ordering has mixed customer adoption signals -> P3 and Andre may abandon if QR is mandatory or fragile -> Access-Fragile Customer persona and journey -> QR plus direct URL and staff fallback -> Lower abandonment when scanning fails.

No-free-text ordering can hide dietary needs -> P2 and Priya need visible representation of restrictions -> Careful Choice Maker persona and no-free-text risk statement -> Structured dietary/allergen choices and unsupported-need fallback -> Higher confidence before submit.

Staff need complete and readable details during rush -> P4 and Lina want tickets that do not need interpretation -> Rush-Mode Staff persona and staff ticket journey -> Review screen mirrors kitchen-readable ticket order -> Fewer clarification loops.

Food truck service depends on immediate prep and constrained capacity -> Customers and staff both suffer from unavailable or unsupported options -> Evidence table and feature prioritization -> Disabled sold-out states and validation before submit -> Fewer invalid orders.

WCAG AA requires accessible labels, errors, contrast, and target sizing -> Outdoor mobile users need readable, touchable controls -> Accessibility edge cases -> Large labeled controls and clear error states -> Broader usability under stress, glare, and one-handed use.

## Outcome, Limits, And Next Steps

Outcome: The case study defines a focused digital ordering concept for Curry Cruiser: a guided mobile curry builder that uses predefined choices, optional QR/direct entry, structured dietary handling, staff-ticket review, unavailable-option prevention, and a clear confirmation handoff.

What is proven: The broader problem space is credible. Off-premise ordering is common, speed and intuitive ordering matter, QR has mixed adoption risk, and accessibility standards support the need for clear labeled controls and error handling.

What remains unvalidated: Curry Cruiser's exact menu, pricing, dietary/allergy policy, staff workflow, service volume, payment expectations, and real customer adoption have not been tested. The personas are synthetic and should be treated as provisional.

Next steps:

- Interview 5-7 customers and 2-3 staff/operators using the Stage 02 plan.
- Validate the curry option taxonomy against Curry Cruiser's actual menu and prep workflow.
- Prototype the guided builder and staff-ticket review in low fidelity.
- Run task tests for standard order, dietary need, QR failure/fallback, and sold-out item handling.
- Decide whether payment belongs in scope only after observing where current ordering friction actually happens.
