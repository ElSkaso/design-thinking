# UX Case Study: Curry Cruiser Revised

## Executive Summary

Curry Cruiser Revised is a UX case study for a Thai curry food truck ordering experience. The target users are customers ordering under food truck time pressure and Curry Cruiser staff who need clear, fulfillable order details during service.

The core problem is not simply "make ordering digital." Customers need to choose and submit a complete curry order with confidence, while staff need structured order details that do not require interpreting free-text notes or unsupported requests.

The final direction is **Curry Builder With Staff-Ready Review**: a mobile-first ordering flow with predefined customization groups, short curry and spice guidance, review-before-submit, optional QR/direct/staff fallback entry, confirmation, and staff-readable ticket output.

Evidence confidence is mixed. Desk research gives medium support for mobile/off-premises ordering, structured modifiers, QR feasibility, food truck speed pressure, and accessible form patterns. Direct Curry Cruiser customer and staff validation is still needed.

## Stage 01: Problem

Purpose: Turn a rough ordering idea into a researchable UX challenge.

Key move: Separate facts, assumptions, constraints, open questions, and success signals before proposing screens.

Output: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

### Project Brief

Why this artifact matters: It sets the project frame and prevents the process from treating QR access or app implementation as the core problem.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Project title: Curry Cruiser Revised
- Project slug: curry-cruiser-revised
- Raw idea: design a digital food order customization solution for a Thai curry food truck.
- Core goal: reduce ordering friction for customers and operational friction for Curry Cruiser staff.
- Platform assumption: responsive web ordering flow.

Design consequence:
- The project focused on structured ordering and staff handoff, not digital novelty.
- The optional app build stage remained disabled by default.

### Raw Problem Or Idea

Why this artifact matters: It defines the starting challenge in user and operational terms.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

Customers open the ordering experience, customize their curry using predefined options, and submit an order without using free-text fields. QR-code access may be used, but it is not mandatory.

Design consequence:
- Free-text avoidance became a core design constraint.
- QR became an optional entry method rather than a mandatory solution.

### Target Users

Why this artifact matters: It keeps the case study focused on both sides of the service exchange.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Primary customers: food truck customers who want to place a Thai curry order quickly, confidently, and with minimal back-and-forth.
- Secondary users: Curry Cruiser staff who need clear, standardized orders they can prepare accurately during busy service windows.

Design consequence:
- Staff readability shaped the ordering flow and final ticket structure.

### Context And Constraints

Why this artifact matters: It names the boundaries that later ideation must respect.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Support Thai curry customization through predefined choices.
- Avoid free-text fields.
- Treat QR-code access as allowed but optional.
- Prioritize a responsive web ordering flow.
- Prioritize UX case study artifacts unless implementation is explicitly reopened.

Design consequence:
- Payment, accounts, loyalty, and app implementation stayed out of first scope.

### Known Facts

Why this artifact matters: It separates supplied truths from inferred details.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Curry Cruiser is a Thai curry food truck concept.
- Customers need a way to customize curry orders.
- Orders should be submitted using predefined options rather than free-text input.
- The intended outcome is lower friction for both customers and staff.
- QR-code access is a possible access method, not a mandatory requirement.

Design consequence:
- Later research avoided claiming real menu, payment, or workflow details as facts.

### Assumptions

Why this artifact matters: It turns uncertainty into validation targets.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Current ordering creates friction through unclear or verbal customization.
- Standardized order structures reduce staff interpretation work.
- Predefined choices can be faster when options are clear.
- Likely categories include curry type, protein, spice, base, add-ons, and pickup details.
- Customers may order under time pressure.

Design consequence:
- Stage 02 tested broad plausibility and Stage 05 flagged actual menu validation as required.

### Open Questions

Why this artifact matters: It defines what research must answer before final product decisions.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- What options does Curry Cruiser actually offer?
- Where does ordering friction happen most?
- Are customers ordering before arrival, at the truck, or both?
- Does payment belong in scope?
- What ticket information do staff need?
- How should allergies, sold-out items, and special requests be handled without free text?

Design consequence:
- Payment was excluded from first scope and complex allergies route to staff.

### Desired Outcomes

Why this artifact matters: It defines success in customer and operational terms.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Customers understand available options and submit complete orders.
- Staff receive structured orders that are easy to scan.
- Clarification loops and unsupported requests decrease.
- The case study shows how research shaped the customization model.

Design consequence:
- Stage 05 included review-before-submit and a staff-readable ticket.

### Research Questions

Why this artifact matters: It creates the handoff from intake to validation.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- How do customers decide what to order from food trucks?
- Which curry choices should be customizable?
- What wording, grouping, and sequencing help customers decide?
- What order information do staff need at a glance?
- How does QR ordering affect adoption and workload?
- What failure states matter most?

Design consequence:
- Stage 02 researched market context, QR feasibility, structured modifiers, and form usability.

### Success Signals

Why this artifact matters: It makes the problem measurable before screens exist.
Source: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`

- Customers complete a valid customized order without free text.
- Customers understand options before submission.
- Staff can read submitted orders without clarification.
- Research validates or challenges assumed customization categories.

Design consequence:
- Later hypotheses use order completeness, customer explain-back, fallback discovery, and staff scan speed.

Stage 01 made the problem specific enough to research. Stage 02 follows because the team needed to know whether mobile ordering, structured choices, QR access, and staff-readable tickets were plausible.

## Stage 02: Research

Purpose: Validate the problem space and build a research plan with evidence labels.

Key move: Support the broad direction with desk research while naming direct Curry Cruiser evidence gaps.

Output: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

### Research Purpose

Why this artifact matters: It clarifies that Stage 02 validates problem plausibility, not final product truth.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

Validate whether a predefined, no-free-text curry ordering flow is a meaningful UX problem for Curry Cruiser customers and staff, and define the research plan needed before empathize artifacts are created.

Design consequence:
- The case study proceeds with medium confidence for the broad problem and low confidence for Curry Cruiser-specific workflow details.

### Research Questions

Why this artifact matters: The questions connect desk research to later UX decisions.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

- How do customers decide what to order from food trucks when customization is involved?
- Which curry choices should be predefined?
- Where does ordering friction happen?
- Does QR access reduce friction or add adoption risk?
- What information do staff need on an order ticket?

Design consequence:
- Stage 05 includes both customer-facing flow requirements and staff ticket requirements.

### Finding: Off-Premises And Mobile Ordering

Why this artifact matters: It validates mobile ordering as a plausible behavior pattern.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

National Restaurant Association reporting from 2025 states that nearly 75% of restaurant traffic happens off-premises and mobile ordering was recently used by 57% of adults, including higher usage among millennials and Gen Z adults.

Design consequence:
- A mobile-first responsive web ordering flow is a reasonable direction.

### Finding: Food Truck Convenience

Why this artifact matters: It grounds the experience in food truck speed pressure.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

IBISWorld estimates the U.S. food truck industry at $2.8B in 2025 with many businesses competing through quality, taste, convenience, quick meals, and location.

Design consequence:
- The ordering flow prioritizes speed, scanability, and low operational ambiguity.

### Finding: Structured Modifiers

Why this artifact matters: It supports predefined customization as a practical ordering model.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

Square and Toast support restaurant modifiers, selectable limits, ordered modifier sets, and ticket display.

Design consequence:
- Curry customization is modeled as grouped choices, not blank notes.

### Finding: Optional QR Access

Why this artifact matters: It separates access method from core UX value.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

Square, Clover, and Toast all support QR-based ordering, but QR-only ordering can create adoption, accessibility, device, connectivity, and preference risks.

Design consequence:
- QR is supported alongside direct URL and staff fallback.

### Finding: Accessible Form Feedback

Why this artifact matters: It turns form usability into ordering requirements.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

Nielsen Norman Group guidance supports instructions before fields, descriptive labels, tap-friendly controls, and submit actions near final inputs.

Design consequence:
- Stage 05 specifies visible required states, inline errors, review-before-submit, and clear confirmation.

### Evidence Table

Why this artifact matters: It makes the reasoning reviewable.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

| Label | Evidence | Source | Confidence | Design Implication |
|---|---|---|---|---|
| Evidence | Off-premises dining accounts for nearly 75% of restaurant traffic; mobile ordering is used by a majority of adults recently. | National Restaurant Association, 2025 | Medium | A mobile-first ordering experience is worth exploring. |
| Evidence | Speed, service, intuitive ordering/payment tech, value, and loyalty are off-premises must-haves. | National Restaurant Association, 2025 | Medium | Prioritize fast completion and clear review over decorative content. |
| Evidence | U.S. food trucks are a sizable, competitive market where convenience and quick meals matter. | IBISWorld, 2025 | Medium | Reduce ordering and staff handoff friction. |
| Evidence | POS modifier systems support predefined choices, selection limits, ordering, and ticket display. | Square and Toast support documentation | Medium | Use structured modifier groups instead of free text. |
| Evidence | QR ordering can link customers to an online menu/order flow and tie orders to locations/stations. | Square, Clover, Toast support documentation | Medium | Use QR as optional access, not the only path. |
| Evidence | Accessible forms should keep instructions before fields and submit actions near the final input. | Nielsen Norman Group | Medium | Put guidance before controls and keep order review/submit near the end. |
| Risk | QR-only ordering may exclude customers with device, connectivity, comfort, privacy, or accessibility constraints. | Inference from QR adoption debates and accessibility concerns | Low | Provide fallback access and avoid making QR mandatory. |
| Open question | Whether Curry Cruiser takes payment digitally or only collects orders is unknown. | Stage 01 brief | Low | Keep payment out of core scope until validated. |

Design consequence:
- Major design decisions trace to evidence, risk, or open question labels.

### Assumption Log

Why this artifact matters: It prevents the case study from overstating confidence.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

| Assumption | Why It Exists | Validation Needed |
|---|---|---|
| Customers currently experience friction when customizing curry orders. | The brief names customer friction as the core problem. | Observe or interview customers about current ordering pain points. |
| Staff currently spend time clarifying or interpreting orders. | The brief names operational friction for staff. | Interview Curry Cruiser staff and review sample orders. |
| Common curry customization categories include curry type, protein, spice, base, add-ons, and pickup details. | These are plausible menu structures for Thai curry ordering. | Validate against Curry Cruiser's actual menu and prep workflow. |
| Free-text fields increase ambiguity and unsupported requests. | Structured ordering systems usually reduce interpretation load. | Compare staff handling of free-text orders vs predefined modifier orders. |
| A responsive web flow is sufficient. | Workspace default platform is responsive web. | Check customer device/context patterns and staff operations. |

Design consequence:
- Exact menu categories and staff workflow remain validation needs.

### Competitive Landscape Notes

Why this artifact matters: It identifies which market patterns to borrow and which to avoid.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

- Square: strong QR and modifier support; generic flow may not guide curry decisions.
- Toast: strong QR and modifier-heavy ordering support; feature limits suggest keeping scope simple.
- Clover: scan-to-order is familiar; dine-in table logic is less relevant to a food truck.
- Delivery apps: familiar review patterns; may add fees, accounts, and brand dilution.

Design consequence:
- Stage 05 borrows item selection, modifiers, review, and confirmation patterns without adding account or marketplace complexity.

### Problem Validity

Why this artifact matters: It states whether the project should continue.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

The problem is valid enough for continued UX work with medium confidence. Broad market signals support mobile/off-premises ordering, vendor tooling supports structured modifiers, and food trucks operate in speed-sensitive environments.

Design consequence:
- The project moves forward while keeping real menu and staff validation open.

### Participant Sample And Recruitment Rationale

Why this artifact matters: It defines the human evidence needed before validation.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

The sample should include recent food truck customers, people with customization experience, mixed digital comfort levels, staff/operators, and participants with accessibility or situational constraints. Recruitment covers both customer comprehension and staff fulfillment.

Design consequence:
- Stage 03 includes three customer perspectives and one staff perspective.

### Interview Plan

Why this artifact matters: It is ready to replace synthetic assumptions with real user evidence.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

Customer questions cover recent food truck ordering, decision-making, customization, confidence, QR sentiment, pickup timing, and friction. Staff questions cover order intake, clarification, ticket requirements, supported choices, allergy handling, rush moments, pickup communication, and invalid requests.

Design consequence:
- The validation plan can directly reuse the Stage 02 interview guide.

### Synthetic Participant Profiles

Why this artifact matters: It allows Stage 03 synthesis while labeling the evidence limit.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

- Time-Pressed Regular
- Curious First-Timer
- Low-Confidence QR User
- Peak-Service Expediter

Design consequence:
- These profiles become the basis for hypothesis-based empathy artifacts.

### Research Limits

Why this artifact matters: It protects credibility.
Source: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`

No real Curry Cruiser users or staff were interviewed. The actual menu, prep workflow, staffing model, payment model, and pickup process are unknown.

Design consequence:
- Later artifacts are treated as prototype direction, not validated product truth.

Stage 02 showed that the broad problem is plausible. Stage 03 follows because the team needed human-centered patterns to decide what kind of structured flow would actually help.

## Stage 03: Empathize

Purpose: Translate research into user groups, interview-led artifacts, personas, journeys, and edge cases.

Key move: Use clearly labeled synthetic participants because real interviews were unavailable.

Output: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

### Participant Sample

Why this artifact matters: It names the perspectives represented in the empathy work.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Label | Type | Fit | Evidence Status |
|---|---|---|---|
| P1: Time-Pressed Regular | Synthetic customer | Frequent lunch buyer, comfortable with mobile ordering | Hypothesis-based |
| P2: Curious First-Timer | Synthetic customer | Interested in Thai curry but unsure how to choose | Hypothesis-based |
| P3: Low-Confidence QR User | Synthetic customer | Prefers person-to-person ordering and needs reassurance | Hypothesis-based |
| P4: Peak-Service Expediter | Synthetic staff | Prepares and hands off orders during rush periods | Hypothesis-based |

Design consequence:
- The product direction covers speed, guidance, trust, and staff clarity.

### Interview Summary: P1, Time-Pressed Regular

Why this artifact matters: It reveals that fast users still need confidence and confirmation.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Context: orders while walking to the truck or standing nearby.
- Goals: choose quickly, avoid waiting, know when the order will be ready.
- Needs: fast defaults, visible required choices, easy order review, pickup signal.
- Pain points: too many taps, unclear prep times, forced accounts, missing confirmation.
- Quote: "I do not want to build a whole meal from scratch every time."
- Confidence: low; synthetic profile.

Design consequence:
- The selected flow uses concise steps and review/confirmation rather than account-heavy ordering.

### Empathy Map: P1, Time-Pressed Regular

Why this artifact matters: It shows that speed is emotional as well as functional.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Says: "I need this to be fast."
- Thinks: "If this takes longer than talking to staff, why am I using it?"
- Does: scans, chooses familiar options, checks final order.
- Feels: rushed, focused, relieved when confirmed.
- Pains: long decision trees, unclear submit state.
- Gains: fast repeatable ordering, clear confirmation.

Design consequence:
- Order review and confirmation are part of speed, not extra polish.

### Interview Summary: P2, Curious First-Timer

Why this artifact matters: It captures menu-comprehension friction.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Goals: understand options without holding up the line.
- Needs: plain-language descriptions, spice guidance, ingredient clarity, safe defaults.
- Pain points: unfamiliar dish names, hidden ingredients, spice uncertainty.
- Quote: "I do not know the difference between the curries just from the names."
- Confidence: low; synthetic profile.

Design consequence:
- Curry and spice options need short guidance, not only labels.

### Empathy Map: P2, Curious First-Timer

Why this artifact matters: It turns uncertainty into design requirements.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Says: "What is the difference between red and green curry?"
- Thinks: "I want to try this, but I do not want to order wrong."
- Does: reads labels, compares options, hesitates before submitting.
- Feels: interested but uncertain.
- Pains: ambiguous option names, spice anxiety.
- Gains: confidence from guidance and defaults.

Design consequence:
- Option cards include plain descriptions and spice scale language.

### Interview Summary: P3, Low-Confidence QR User

Why this artifact matters: It tests the risk of QR-only access.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Goals: order successfully without feeling forced into unfamiliar tech.
- Needs: clear entry options, no account requirement, review, staff fallback.
- Pain points: QR-only access, small tap targets, unclear recovery.
- Quote: "Can I just tell someone my order?"
- Confidence: low; synthetic profile.

Design consequence:
- The entry screen includes direct URL and staff fallback.

### Empathy Map: P3, Low-Confidence QR User

Why this artifact matters: It makes trust a design requirement.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Says: "Is scanning required?"
- Thinks: "I do not want to be trapped."
- Does: checks for alternatives and seeks confirmation.
- Feels: wary, then reassured by review and confirmation.
- Pains: mandatory QR, tiny controls, vague errors.
- Gains: choice of access method and clear order receipt.

Design consequence:
- QR is optional and the flow needs visible recovery states.

### Interview Summary: P4, Peak-Service Expediter

Why this artifact matters: It represents the operational user.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Goals: receive complete orders, avoid unsupported requests, reduce clarification.
- Needs: consistent ticket structure, required fields, clear modifiers, pickup identifier.
- Pain points: free-text notes, missing choices, unclear spice levels, unsupported changes.
- Quote: "A bad ticket slows down the whole line."
- Confidence: low; synthetic profile.

Design consequence:
- Staff-readable output becomes a primary feature, not a back-office detail.

### Empathy Map: P4, Peak-Service Expediter

Why this artifact matters: It clarifies what staff need to reduce service friction.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Says: "Tell me exactly what to make."
- Thinks: "Can I read this ticket in two seconds?"
- Does: reads modifiers, checks details, sequences prep.
- Feels: pressured during rush, calm when tickets are complete.
- Pains: free-text ambiguity, missing choices, unsupported substitutions.
- Gains: standardized tickets and fewer clarifications.

Design consequence:
- Submitted order data follows a compact prep-readable sequence.

### User Groups

Why this artifact matters: It groups by behavior and need rather than demographics.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Fast Repeat Orderers: need speed, defaults, review, pickup timing.
- Guided Decision Makers: need short menu explanations and spice guidance.
- Trust-and-Fallback Customers: need optional QR, no account wall, visible review.
- Operational Clarity Staff: need complete, valid, compact tickets.

Design consequence:
- The final concept balances fast flow, guided choice, fallback, and staff ticketing.

### Persona: Riley, The Time-Pressed Regular

Why this artifact matters: Riley keeps speed and confirmation visible in design decisions.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Represented group: Fast Repeat Orderers.
- Role/context: lunch customer ordering near the food truck.
- Goals: order quickly, avoid the line, know pickup timing.
- Needs: fast defaults, clear required choices, review, confirmation.
- Pain points: forced accounts, long menus, unclear submission.
- User story: As a time-pressed food truck customer, I want to customize my usual curry quickly and review it before submission, so that I can skip avoidable line friction without worrying about mistakes.
- Confidence: low.

Design consequence:
- Accounts and loyalty are out of first scope; review and confirmation stay in.

### Journey Map: Riley

Why this artifact matters: It shows where time pressure and uncertainty peak.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities |
|---|---|---|---|---|---|
| Notice | Opens ordering link | Can I order before I reach the window? | Hopeful, hurried | Entry may be unclear | Fast visible start |
| Choose | Selects curry, protein, spice, base | Where are required choices? | Focused | Optional clutter | Required groups |
| Review | Checks final order | Did I choose correctly? | Cautious | Hidden modifiers | Plain review |
| Submit | Sends order | Did they get it? | Anxious then relieved | Weak confirmation | Clear pickup ticket |
| Pickup | Watches for order | When should I go up? | Waiting | No pickup cue | Number/status |

Design consequence:
- The final screen must bridge submission and pickup.

### Persona: Maya, The Curious First-Timer

Why this artifact matters: Maya ensures the flow teaches just enough.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Represented group: Guided Decision Makers.
- Goals: understand options, pick a safe spice level, feel good about the choice.
- Needs: descriptions, recommendation cues, ingredient clarity, spice guidance.
- Pain points: unfamiliar names, spice uncertainty, unclear included items.
- User story: As a first-time Curry Cruiser customer, I want short guidance on curry types and spice levels, so that I can choose confidently without asking staff to explain the whole menu.
- Confidence: low.

Design consequence:
- Curry cards include one-line taste descriptions and clear spice labels.

### Journey Map: Maya

Why this artifact matters: It identifies decision support moments for unfamiliar food.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities |
|---|---|---|---|---|---|
| Browse | Scans curry options | What do these taste like? | Curious | Names alone | Taste cues |
| Decide | Selects curry/spice | Will medium be too spicy? | Uncertain | Subjective spice | Spice scale |
| Customize | Chooses protein/base | What comes with this? | More confident | Hidden defaults | Included notes |
| Review | Checks order | Does this match what I wanted? | Reassured | Technical summary | Human language |
| Pickup | Receives food | I hope this is what I picked | Anticipatory | Weak order link | Pickup identifier |

Design consequence:
- Review copy should use food language, not POS terminology.

### Persona: Sam, The Cautious Scanner

Why this artifact matters: Sam protects against inaccessible or coercive QR-only design.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Represented group: Trust-and-Fallback Customers.
- Goals: order successfully, avoid mistakes, know staff received the order.
- Needs: optional QR, no account, clear review, readable controls, confirmation.
- Pain points: tiny tap targets, unclear errors, required scanning.
- User story: As a cautious mobile-ordering customer, I want a clear fallback and confirmation path, so that I can use the digital order flow without feeling trapped if scanning or submission fails.
- Confidence: low.

Design consequence:
- Entry, error, and confirmation states must make fallback visible.

### Journey Map: Sam

Why this artifact matters: It identifies trust and recovery moments.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Stage | User Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities |
|---|---|---|---|---|---|
| Entry | Considers QR | Is this required? | Wary | QR-only signage | Fallback |
| Navigate | Reads instructions | What do I do? | Careful | Dense instructions | Short guidance |
| Select | Taps slowly | Can I fix a mistake? | Cautious | Small controls | Editable steps |
| Submit | Reviews/submits | Will staff know this is mine? | Nervous | Weak confirmation | Pickup ID |
| Recover | Handles issue | Who can help me? | Frustrated | No fallback | Staff recovery |

Design consequence:
- Error states include retry and staff fallback.

### Persona: Jordan, The Peak-Service Expediter

Why this artifact matters: Jordan makes operational clarity part of the UX case.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Represented group: Operational Clarity Staff.
- Goals: receive complete orders and keep the line moving.
- Needs: compact tickets, required groups, supported choices, pickup identifier.
- Pain points: free-text notes, missing choices, unsupported substitutions.
- User story: As a Curry Cruiser staff member, I want every submitted order to use complete and supported choices, so that I can prepare it accurately without stopping service to clarify details.
- Confidence: low.

Design consequence:
- Customer choice structure is bounded by what staff can fulfill.

### Journey Map: Jordan

Why this artifact matters: It shows how customer input becomes staff work.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Stage | Staff Actions | Thoughts / Questions | Emotions | Pain Points | Opportunities |
|---|---|---|---|---|---|
| Receive | Gets ticket | Is everything here? | Focused | Missing choices | Required fields |
| Read | Scans modifiers | What curry/protein/spice/base? | Efficient or frustrated | Inconsistent format | Prep sequence |
| Prepare | Builds curry | Can we make this? | Pressured | Unsupported combos | Disable invalid options |
| Handoff | Calls pickup | Whose order is this? | Alert | Weak identity | Pickup number/name |
| Resolve | Handles issue | Do I need to ask? | Frustrated | Free text | Structured exceptions |

Design consequence:
- Staff-readable ticket sequence is specified in Stage 05.

### Accessibility And Edge Cases

Why this artifact matters: It prevents accessibility from becoming a late-stage pass.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

- Large tap targets and clear selected states.
- High contrast and readable labels.
- No verbal clarification required for routine ordering.
- Grouped choices to reduce memory load.
- Plain food language.
- Lightweight mobile web flow and no QR-only access.
- Structured dietary flags and staff fallback for complex needs.
- Sold-out choices disabled before submission.

Design consequence:
- Stage 05 includes state requirements for loading, errors, sold-out items, complex allergy, and success.

### Evidence Trace

Why this artifact matters: It connects empathy artifacts to research instead of treating personas as fiction.
Source: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`

| Artifact | Evidence or Assumption Source | Status |
|---|---|---|
| Riley persona and journey | Speed, mobile ordering, off-premises convenience | Hypothesis-based |
| Maya persona and journey | Menu comprehension and spice guidance assumptions | Hypothesis-based |
| Sam persona and journey | QR risk and accessibility concerns | Hypothesis-based |
| Jordan persona and journey | Structured modifiers and staff clarity | Hypothesis-based |

Design consequence:
- Every persona maps to a concrete design requirement and validation need.

Stage 03 created human-centered patterns. Stage 04 follows because those patterns needed to be narrowed into a focused problem frame and testable hypotheses.

## Stage 04: Define

Purpose: Convert research and empathy artifacts into problem statements, needs, hypotheses, and value proposition.

Key move: Define the problem without over-prescribing a single UI too early.

Output: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

### Definition Summary

Why this artifact matters: It names the core design tension.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

Curry Cruiser customers need to submit complete, understandable curry orders under food truck time pressure, while staff need structured, operationally valid order details they can prepare without clarification.

Design consequence:
- The final direction must serve customer confidence and staff clarity together.

### 5W And H

Why this artifact matters: It clarifies who experiences the problem and when.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

| Question | Working Definition |
|---|---|
| Who | Time-pressed customers, first-time customers, cautious mobile-ordering customers, and staff. |
| What | Incomplete, unclear, unsupported, or hard-to-scan orders. |
| Where | Around the food truck and on mobile devices. |
| When | During choice, review, submission, pickup, and staff prep. |
| Why | Friction slows customers and increases clarification loops. |
| How | Customers ask staff, choose safe options, or use familiar mobile patterns; staff clarify or interpret details. |

Design consequence:
- The flow covers entry through pickup, not just menu choice.

### Primary Problem Statement

Why this artifact matters: It gives ideation a single focused frame.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

Curry Cruiser customers are trying to place customized curry orders quickly and confidently, but unfamiliar menu choices, time pressure, and uncertainty about submission can make ordering feel risky or slow, which can create hesitation for customers and clarification work for staff.

Design consequence:
- Ideation prioritized confidence, completeness, speed, and staff readability.

### Supporting Problem Statements

Why this artifact matters: They preserve different user needs inside one project.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

- Riley needs speed and confirmation.
- Maya needs understandable curry and spice choices.
- Sam needs trust and fallback.
- Jordan needs complete, supported tickets.

Design consequence:
- The selected flow avoids optimizing only for confident repeat customers.

### User Needs Statements

Why this artifact matters: They translate empathy into design targets.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

- Time-pressed customers need a way to complete required curry choices quickly.
- First-time customers need a way to understand curry, spice, and included options.
- Cautious customers need a way to access, review, and confirm without QR-only pressure.
- Staff need complete, supported, consistently ordered choices.
- Staff need unsupported choices and complex exceptions handled before submission.

Design consequence:
- Stage 05 includes grouped choices, guidance, review, fallback, and operational guardrails.

### Key Insights

Why this artifact matters: They explain why the design should work.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

1. Speed depends on clarity, not just fewer screens.
2. Guidance is a core ordering function for unfamiliar curry choices.
3. QR access is an entry method, not the value proposition.
4. Staff clarity is a user need, not a back-office afterthought.

Design consequence:
- The product concept combines ordering flow and staff-ready output.

### Constraints

Why this artifact matters: They keep the solution disciplined.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

- No free-text fields for routine customization.
- Use predefined options for supported choices and common exceptions.
- QR may be used but must not be mandatory.
- Keep payment out of core scope until confirmed.
- Preserve staff-readable order structure.
- Treat synthetic interview claims as validation targets.

Design consequence:
- First scope excludes payment, accounts, loyalty, delivery, and free text.

### Hypothesis Statements

Why this artifact matters: They make the design testable.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

- Required grouped choices will reduce missing prep details.
- Plain-language option guidance will increase first-time choice confidence.
- Review before submit will increase submission confidence.
- Optional QR entry will reduce exclusion risk.
- Staff-readable ticket structure will reduce scan and clarification effort.

Design consequence:
- Stage 05 screens map directly to observable test signals.

### Problem / Hypothesis Pairs

Why this artifact matters: They connect each design direction to a specific risk.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

| Problem | Hypothesis | Test Signal |
|---|---|---|
| Incomplete or unclear orders | Required grouped choices reduce missing details | Prototype orders contain all required fields |
| Unfamiliar curry/spice labels | Plain descriptions increase confidence | Users can explain selected options |
| QR distrust | Optional entry and confirmation preserve trust | QR-hesitant users identify fallback |
| Staff interpretation effort | Staff-sequenced tickets reduce scan effort | Staff find details quickly |

Design consequence:
- The validation plan uses task completion, explain-back, fallback discovery, and ticket scan tests.

### Value Proposition

Why this artifact matters: It states the product promise for customers and staff.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

For Curry Cruiser customers ordering under food truck time pressure, the revised ordering experience helps them submit a complete, confident curry order by turning customization into clear, predefined choices with guidance and review, unlike verbal ordering or generic free-text notes that can create ambiguity for both customers and staff.

Design consequence:
- The concept is judged by reduced ambiguity, not by feature volume.

### Human Factors Rationale

Why this artifact matters: It grounds interaction choices in behavior.
Source: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`

- Mental models: use familiar selection, review, and confirmation.
- Feedback loops: show that staff received the order.
- Hick's Law: group choices to reduce complexity.
- Serial position effect: put foundational choices early and confirmation last.
- Isolation effect: emphasize required choices and selected states.

Design consequence:
- Stage 05 uses grouped steps, clear states, and receipt-like confirmation.

Stage 04 narrowed the product problem. Stage 05 follows because the team now had enough constraints and hypotheses to explore concrete solution directions.

## Stage 05: Ideate

Purpose: Generate solution directions, select feature scope, and define wireframe requirements.

Key move: Convert the definition brief into a mobile-first structured ordering concept.

Output: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

### Design Intent

Why this artifact matters: It states the product direction before screens.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

Create a lightweight ordering flow that helps customers build a complete curry order through predefined choices, understand unfamiliar options quickly, review the order before submission, and receive clear pickup confirmation. The same flow must produce staff-readable order details.

Design consequence:
- The selected direction is narrow, testable, and buildable.

### Goal Statements

Why this artifact matters: They make success observable.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- Customers complete required curry choices and submit confidently.
- First-time customers understand curry and spice choices.
- QR-comfortable and QR-cautious customers can both access the flow.
- Staff receive structured details they can scan quickly.

Design consequence:
- Test signals include completion, explain-back, fallback discovery, and staff scan time.

### Competitive Audit Summary

Why this artifact matters: It positions the concept against tools and workarounds.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

The audit reviewed Square Online, Toast Mobile Order & Pay, Clover Scan to Order, third-party delivery apps, and verbal/in-person food truck ordering. The key gap was that generic tools may not explain Curry Cruiser-specific curry decisions or format orders around staff prep needs.

Design consequence:
- Borrow familiar menu, modifier, review, and confirmation patterns; avoid generic account/payment heaviness.

### How Might We Questions

Why this artifact matters: They open solution space while staying grounded in the defined problem.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

1. How might we help time-pressed customers complete curry customization quickly?
2. How might we help first-time customers understand curry and spice choices?
3. How might we let customers verify a complete order before submission?
4. How might we support QR entry while keeping access flexible?
5. How might we structure choices so staff receive prep-readable tickets?
6. How might we handle dietary needs and unavailable items without free text?
7. How might we make confirmation useful for pickup and handoff?
8. How might we reduce staff interruptions while preserving customer control?

Design consequence:
- Ideation covered access, choice, review, exception handling, and handoff.

### Rapid Sketch Concepts

Why this artifact matters: They show multiple solution shapes before narrowing.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- Guided Builder
- Single-Page Smart Form
- Recommended Combos First
- Staff Prep Sequence
- Confidence Review
- QR Plus Fallback Entry
- Allergy Guardrails
- Pickup Ticket

Design consequence:
- The final direction combines the strongest parts instead of relying on one sketch.

### Selected Direction

Why this artifact matters: It identifies the prototype concept.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

**Curry Builder With Staff-Ready Review**: a mobile-first structured builder with short option guidance, required modifier groups, persistent summary, receipt-like review, optional QR/fallback entry, and staff-readable confirmation.

Design consequence:
- This becomes the final case-study solution direction.

### Prioritized Feature Candidates

Why this artifact matters: It protects the first scope from bloat.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

| Priority | Feature | User / Staff Value |
|---|---|---|
| Must | Optional QR entry | Starts quickly without requiring QR |
| Must | Required grouped customization | Prevents missing prep details |
| Must | Plain-language guidance | Helps first-time customers |
| Must | Human-readable review | Builds trust before submit |
| Must | Staff-readable summary | Reduces prep interpretation |
| Should | Dietary/allergy flags | Handles common needs without free text |
| Should | Sold-out states | Prevents invalid choices |
| Should | Pickup confirmation | Supports handoff |
| Could | Recommended builds | Speeds first-time ordering |
| Could | Repeat order shortcut | Helps regulars |
| Won't | Payment/accounts/loyalty/delivery/order history/free text/dashboard/inventory | Not validated or out of core scope |

Design consequence:
- The first prototype remains focused on order completion and handoff.

### Primary Flow

Why this artifact matters: It defines the end-to-end customer path.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

1. Entry / start order
2. Choose curry
3. Choose protein and base
4. Choose spice and add-ons
5. Add structured dietary or pickup details
6. Review order
7. Submit order
8. Confirmation / pickup ticket

Design consequence:
- The prototype can be tested as a complete task, not disconnected screens.

### Secondary Flows

Why this artifact matters: It includes likely non-happy paths.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- QR fails or user prefers help.
- Sold-out item.
- Complex allergy.

Design consequence:
- Fallback, disabled, and staff-routing states are required.

### Screen Requirements

Why this artifact matters: They translate strategy into wireframe-ready screens.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- Entry / Start Order: start action, current service note, QR fallback.
- Choose Curry: required curry cards with taste descriptions and sold-out states.
- Protein And Base: core prep details.
- Spice And Add-Ons: plain spice scale and optional add-ons.
- Dietary And Pickup Details: structured flags, severe allergy staff path, pickup identifier.
- Review Order: receipt-like summary and edit actions.
- Confirmation / Pickup Ticket: order received, pickup number/name, readable summary.

Design consequence:
- The flow covers screens, states, content, and staff output.

### Text Wireframes

Why this artifact matters: They preserve the screen structure before high fidelity.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

```text
[Curry Cruiser]
 Thai curry, made to order
 [Start order]
 Trouble scanning?
 Use the short link or order with staff.
```

```text
Step 1 of 5
Choose your curry *
[Green Curry] Bright, herby, medium heat
[Red Curry] Rich, warm, classic spice
[Yellow Curry] Mild, cozy, turmeric-forward
[Continue]
```

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

```text
Order received
Pickup #24
Listen for your number at the window.
Green curry
Chicken, jasmine rice, medium
Show this screen if staff asks.
```

Design consequence:
- Review and confirmation are explicit screens, not implied states.

### Staff-Readable Ticket Requirement

Why this artifact matters: It connects customer input to staff prep.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

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

Design consequence:
- Staff scan testing becomes a validation method.

### Content Requirements

Why this artifact matters: Copy is part of reducing uncertainty.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- Use real menu language once confirmed.
- Keep descriptions short.
- Mark required choices.
- Avoid POS jargon.
- Avoid free-text routine ordering.
- Use direct fallback language.

Design consequence:
- The product voice is plain, operational, and confidence-building.

### Accessibility Requirements

Why this artifact matters: It makes access constraints part of the design.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

- WCAG AA contrast.
- Large touch targets.
- Visible selected, disabled, loading, error, and success states.
- Instructions before controls.
- Submit near final review content.
- No QR-only access.
- Screen-reader-friendly labels and errors.

Design consequence:
- The concept is testable beyond the happy path.

### State Requirements

Why this artifact matters: It makes the wireframes app-ready if implementation is later reopened.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

| State | Requirement |
|---|---|
| Empty | Clear start and required sections |
| Loading | Menu-loading feedback |
| Error | Retry and staff fallback |
| Missing required choice | Inline message |
| Sold out | Disable and explain |
| Complex allergy | Route to staff |
| Submission loading | Prevent duplicate submit |
| Success | Pickup identifier and order summary |

Design consequence:
- Prototype requirements cover realistic interactions and failures.

### Feature Scope

Why this artifact matters: It defines what the first prototype should and should not include.
Source: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`

In scope: mobile ordering, optional QR/direct/staff fallback, predefined groups, curry/spice guidance, dietary flags, review, confirmation, staff-readable summary.

Out of scope: payment, accounts, loyalty, delivery, order history, free text, kitchen dashboard, inventory management.

Design consequence:
- The first direction remains focused and realistic.

Stage 05 produced the case-study concept and prototype requirements. The next step is validation, not more feature expansion.

## Evidence Chains

### Chain 1: Structured Choices

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

Structured restaurant modifiers are feasible -> Jordan needs complete, supported tickets -> Staff-readable ticket requirement -> Required grouped customization -> Fewer missing details and clarification loops.

### Chain 2: Curry Guidance

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

Predefined choices need clear wording -> Maya worries about curry and spice meaning -> Maya persona and journey -> Short curry descriptions and spice scale -> Higher first-time choice confidence.

### Chain 3: Optional QR

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

QR ordering is feasible but exclusion risk exists -> Sam fears being forced into scanning -> Sam empathy map -> QR/direct/staff fallback entry -> QR-comfortable users move fast while cautious users remain included.

### Chain 4: Review Before Submit

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

Accessible form guidance emphasizes clear labels and submit placement -> Riley and Sam need confidence before final action -> Review hypothesis and text wireframes -> Human-readable review screen -> Fewer mistaken submissions.

### Chain 5: Staff Handoff

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

Food trucks compete on quick meals and convenience -> Jordan says a bad ticket slows the line -> Jordan journey map -> Compact ticket sequence -> Faster prep scanning and pickup handoff.

### Chain 6: Scope Discipline

Research signal -> Interview/user insight -> Artifact -> Design decision -> Expected outcome

Payment model and pickup process are unknown -> Users need completion clarity, not account friction -> Assumption log and feature priorities -> Exclude payment/accounts/free text from first scope -> Lower prototype complexity and clearer validation.

## Outcome, Limits, And Next Steps

### Outcome

The case study produced a complete UX direction for Curry Cruiser Revised: a structured mobile ordering flow that helps customers build a curry order through predefined choices and gives staff a compact, fulfillable ticket.

### What This Proves

- A mobile-first ordering direction is plausible for the broader restaurant/food truck context.
- Structured modifier-style ordering fits the no-free-text constraint.
- Customer confidence and staff clarity need to be designed together.
- QR access should be optional, not the core value proposition.

### What Remains Unvalidated

- Curry Cruiser's real menu and prep constraints.
- Actual customer ordering behavior.
- Actual staff ticket needs.
- Payment and pickup process.
- Allergy handling policy.
- Whether the assumed screen sequence matches real service flow.

### Next Steps

1. Validate Curry Cruiser's menu categories and supported combinations.
2. Run customer interviews using the Stage 02 guide.
3. Test first-time understanding of curry and spice labels.
4. Run a staff ticket scan test with sample orders.
5. Prototype the flow in low fidelity.
6. Decide whether payment belongs in a later scope.
7. Reopen the optional app build stage only if implementation becomes necessary.

## Source Inventory

- Stage 01: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`
- Stage 02: `stages/02-research-and-validation/output/curry-cruiser-revised-research-dossier.md`
- Stage 03: `stages/03-empathize-artifacts/output/curry-cruiser-revised-empathize-artifacts.md`
- Stage 04: `stages/04-define-artifacts/output/curry-cruiser-revised-definition-brief.md`
- Stage 05: `stages/05-ideation-and-wireframes/output/curry-cruiser-revised-ideation-wireframes.md`
- Case study reference: `skills/design-thinking/references/case-study.md`
- Value framework: `shared/value-framework.md`

## Case Study Audit

- Artifact preservation: Pass. Structured artifacts from Stages 01-05 are preserved under stage sections.
- Narrative contract: Pass. Executive summary, phase intros, context notes, consequence notes, transitions, evidence chains, and outcomes are present.
- Source traceability: Pass. Each preserved artifact includes a source path.
- Evidence chains: Pass. Six chains trace research or synthetic user insight to artifact, decision, and expected outcome.
- JSON validity: Pass. The companion JSON is valid, curated for website rendering, and follows the current `CaseStudyWebsiteData` shape.
- JSON user threads: Pass. User-centered content is bundled into deduplicated Riley, Maya, and Jordan threads rather than repeated across process sections.
- Research limits: Pass. Direct-user and operational gaps are explicit.
- Portfolio readiness: Pass. The dossier is reviewable, evidence-aware, and action-oriented.
