# UX Case Study: Curry Cruiser

## Project Overview

Curry Cruiser began as a simple request: design a digital food order customization solution for a Thai curry food truck. The work quickly became more specific. The real product challenge was not QR scanning, menu browsing, or digital novelty. It was the service handoff between a hurried lunch customer and a food truck operator who needs a clear, fulfillable order during rush service.

The resulting direction is a mobile-first curry ordering experience where customers choose a curry, customize it through predefined options, review the order, submit it, and receive a pickup number and order state. The concept stays frontend-only for the first prototype and avoids free-text fields, payment, accounts, and backend-heavy operational tooling until the real Curry Cruiser menu and workflow are validated.

Source outputs used:

- `stages/01-problem-intake/output/curry-cruiser-project-brief.md`
- `stages/02-research-and-validation/output/curry-cruiser-research-dossier.md`
- `stages/03-empathize-artifacts/output/curry-cruiser-empathize-artifacts.md`
- `stages/04-define-artifacts/output/curry-cruiser-definition-brief.md`
- `stages/05-ideation-and-wireframes/output/curry-cruiser-ideation-wireframes.md`

## 1. Problem

### Project Title

Curry Cruiser.

### Raw Problem Or Idea

The problem phase framed Curry Cruiser as a mobile-first ordering challenge for busy adults, workers, customers who want fast curry customization, and food truck staff who need standardized order details. The raw idea was a digital ordering experience where customers open the flow, customize curry using predefined options, and submit without free-text fields. QR-code access was allowed, but it was not treated as the product's core value.

### Target Users

The target users were busy adults ordering during short breaks, workers buying lunch near the truck, customers who want a fast low-friction way to customize curry, and Curry Cruiser staff who need clear standardized order details.

### Context And Constraints

The initial context made the product constraints concrete:

- Primary platform: mobile-first responsive web app.
- Entry point: digital ordering, with QR as one optional access method.
- Core flow: open ordering experience, customize order, review order, submit order.
- Customization model: predefined choices only.
- No additional text fields.
- Likely use context: outdoor or semi-public lunch environment, limited time, possible queue pressure.
- Default backend assumption: none/frontend-only unless later stages require otherwise.
- Accessibility target: WCAG AA.

### Known Facts

The known facts kept the team anchored. Curry Cruiser is a Thai curry food truck, the main task is order customization, the users are busy adults and lunch workers, the app should be mobile-first, and the experience should reduce friction for customers and operators. The app must use predefined options and avoid additional text fields.

### Assumptions

The assumptions named what still needed validation. Customers were assumed to be near the truck, speed and clarity were assumed to matter more than browsing, the menu was assumed to fit a limited set of curry options, and payment was assumed to happen outside the app unless later stages changed that. The team also assumed that staff would need a consistent order format that could be read and fulfilled quickly.

### Open Questions

The open questions became the first pressure test for the project:

- What curry types and customization options does Curry Cruiser offer?
- Should the app support payment, or only order preparation?
- Does the customer receive an order number, pickup estimate, or confirmation screen?
- How should unavailable items be handled during service?
- Should dietary needs such as vegan, vegetarian, gluten-free, or allergies be represented as predefined options?
- Does the truck need an admin/staff view, or is the app only customer-facing?
- Should the app support repeat orders or saved preferences?
- What languages should the ordering flow support?

### Desired Outcomes

The desired outcomes translated the brief into product intent. Customers should be able to place a customized curry order quickly from their phone, the flow should reduce lunch-rush hesitation, predefined options should make customization controlled, staff should receive consistent information, and the experience should feel simple, trustworthy, and appropriate for a food truck.

### Research Questions

Those outcomes shaped the research questions:

- What decisions do customers need to make when ordering Thai curry from a food truck?
- Which customization options are essential, and which would slow the flow down?
- How much information do lunch-break customers need before submitting an order?
- What causes friction or errors in food truck ordering today?
- Which digital ordering entry points feel lowest-friction in a fast lunch context?
- What confirmation, pickup, and payment expectations do customers have after placing an order?
- How should dietary restrictions be handled without free-text input?
- What information do operators need to fulfill customized curry orders accurately and efficiently?

### Success Signals

The success signals were intentionally operational, not cosmetic. A standard curry order should take under two minutes. Users should understand each customization step, review and correct their order, avoid invalid combinations, and staff should be able to read and fulfill submitted orders without clarification. The mobile interface also needed accessible contrast, labels, tap targets, and screen-reader structure.

### Stage 01 Audit

The Stage 01 audit passed because the problem was specific enough to research, known facts and assumptions were separated, and Stage 02 had concrete research questions about customer behavior, operator friction, customization, dietary needs, and staff fulfillment.

## 2. Research

### Purpose

The research phase asked whether a digital, mobile-first ordering and predefined customization flow was credible for Curry Cruiser. Since real user interviews were not available, behavioral claims were labeled by evidence strength.

### Inputs

The research input was the Stage 01 brief, the shared evidence standards, and desk research accessed on April 27, 2026.

### Research Questions

The same eight research questions from the problem phase guided the work: customer decisions, essential customization, lunch-break information needs, ordering friction, digital entry points, confirmation expectations, dietary handling without text fields, and operator fulfillment needs.

### Findings

Seven findings shaped the product:

#### Finding 1: The food truck context supports a speed-first ordering product.

IBISWorld estimated the U.S. food truck industry around $2.8bn in 2025, with convenience and foot traffic as meaningful factors. This did not prove Curry Cruiser's local demand, but it validated the context. The design implication was direct: treat the app as an operational ordering tool, not a marketing site.

#### Finding 2: Mobile-first access is a reasonable default for the target audience.

Pew Research Center reported that 91% of U.S. adults owned smartphones in 2025. That made mobile-first plausible for adult lunch customers, while still requiring a counter-order fallback for users who cannot or do not want to use a digital path.

#### Finding 3: Lunch ordering is time-constrained.

U.S. Department of Labor guidance and older OfficeTeam lunch-break survey data supported the idea that lunch customers often operate inside a narrow time window. The implication was a sub-two-minute standard order, minimal reading, and no account creation before ordering.

#### Finding 4: Digital self-ordering is established, but it must reduce real friction.

Square and Toast validate digital ordering, QR entry, payment, pickup instructions, POS routing, and kitchen handoff as established restaurant patterns. The risk is that QR-only or digital-only experiences can feel like extra work. Curry Cruiser therefore needed a short menu, visible cart, pickup expectation, operator-readable tickets, and human fallback.

#### Finding 5: Predefined customization is well aligned with mobile form constraints.

Baymard's mobile checkout research reinforced that typing on mobile is slow and error-prone. Curry Cruiser's no-free-text constraint became a strength if the predefined options matched real menu and prep constraints.

#### Finding 6: Dietary and allergen handling cannot be hand-waved.

The FDA identifies nine major food allergens, and Thai curry may involve fish sauce, shellfish, peanuts, soy, wheat, dairy, egg, sesame, or other concerns. The design implication was cautious predefined dietary and allergen signals, never medical-safety promises without operational support.

#### Finding 7: Accessibility requirements affect the ordering controls directly.

WCAG 2.2 AA target-size and labeling guidance made accessibility part of the ordering mechanics. Choice buttons needed generous touch areas, visible labels, selected states, accessible names, and unambiguous submit and review states.

### Evidence Table

The evidence table made the research basis reviewable:

| Source | Signal | Label | Confidence | Implication |
|--------|--------|-------|------------|-------------|
| [IBISWorld Food Trucks in the US](https://www.ibisworld.com/united-states/industry/food-trucks/4322/) | U.S. food truck revenue estimated around $2.8bn in 2025; convenience and foot traffic matter. | Evidence | Medium | Food truck ordering is a real market context; speed and location matter. |
| [Pew Research Center Mobile Fact Sheet](https://www.pewresearch.org/internet/fact-sheet/mobile/) | 91% of U.S. adults report smartphone ownership in 2025. | Evidence | High | Mobile-first digital ordering is broadly plausible for adult lunch customers. |
| [U.S. Department of Labor: Breaks and Meal Periods](https://www.dol.gov/general/topic/workhours/breaks) | Meal periods, when offered, are typically at least 30 minutes; short breaks are 5 to 20 minutes. | Evidence | Medium | Lunch customers may be operating inside a narrow time window. |
| [OfficeTeam lunch break survey via PR Newswire](https://www.prnewswire.com/news-releases/more-than-half-of-workers-take-30-minutes-or-less-for-lunch-survey-says-300709216.html) | 56% of surveyed workers reported lunch breaks of 30 minutes or less. | Evidence | Low-Medium | Supports speed as a hypothesis; needs local validation due to age of source. |
| [Square QR code ordering](https://squareup.com/us/en/online-store/restaurants/self-serve-ordering) | QR ordering can map scans to ordering pages, payment, pickup instructions, POS, and kitchen routing. | Evidence | Medium | Confirms QR can be one useful access pattern inside a broader digital ordering flow. |
| [Square food truck POS](https://squareup.com/us/en/solutions/food-truck) | Square positions QR codes and online ordering as ways for food trucks to reduce lines. | Evidence | Medium | Curry Cruiser can plausibly use digital ordering to reduce queue pressure. |
| [Toast Mobile Order & Pay overview](https://support.toasttab.com/en/article/Mobile-Order-and-Pay-Overview) | Guests can browse, order, and pay from mobile; Toast cites operational benefits. | Evidence | Medium | Competitive systems normalize mobile order-and-pay flows. |
| [Toast Mobile Order & Pay FAQ](https://support.toasttab.com/article/Toast-Mobile-Order-and-Pay-FAQs) | Toast notes submitted mobile orders cannot be edited by guests afterward. | Evidence | Medium | Curry Cruiser needs strong review-before-submit and clear correction paths. |
| [Baymard mobile checkout research](https://baymard.com/blog/mobile-ecommerce-checkout-forms.6Apple) | Mobile checkout is constrained by slow typing, small viewport overview, and touch-keyboard friction. | Evidence | Medium | Predefined options and minimal typing are justified. |
| [FDA Food Allergies](https://www.fda.gov/food/food-labeling-nutrition/food-allergies) | FDA identifies nine major allergens and emphasizes clear allergen identification. | Evidence | High | Dietary/allergen choices should be explicit and predefined. |
| [W3C WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Pointer targets should meet minimum sizing or spacing requirements. | Evidence | High | Choice controls and submit actions need mobile-friendly tap targets. |
| [W3C Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html) | Inputs and options need labels or instructions. | Evidence | High | Every customization option needs clear, persistent labeling. |

### Assumption Log

The assumption log stayed visible so the case study would not overclaim:

| Assumption | Confidence | Validation Needed |
|------------|------------|-------------------|
| Customers are physically near the truck when ordering. | Medium | Observe ordering context or confirm business model. |
| Most orders are individual lunch orders rather than group orders. | Low | Ask staff and observe peak service. |
| Payment can happen outside the prototype for now. | Low | Confirm whether Curry Cruiser wants order-only, pay-at-window, or in-app payment. |
| The menu can be represented through a small set of curry customization options. | Medium | Collect actual menu and prep constraints. |
| Customers will use a digital ordering path if it is faster or clearer than ordering verbally. | Medium | Test with lunch-break users. |
| Staff can fulfill orders from standardized option strings. | Medium | Test with staff using sample tickets. |
| Dietary needs can be handled through predefined options without free text. | Low | Validate with customers and staff; allergy safety may require human confirmation. |

### Competitive Landscape Notes

The competitive landscape made one pattern clear: Curry Cruiser should borrow familiar mobile ordering conventions without inheriting unnecessary marketplace complexity. Square showed ordering pages, QR access, mobile payment, POS routing, kitchen tickets, and food-truck line reduction. Toast showed mobile browsing, ordering, payment, QR entry, and the importance of review because submitted orders may not be editable by guests. Delivery marketplace apps normalized item customization, cart review, price visibility, and status, but were less directly comparable because Curry Cruiser is in-person food truck ordering rather than delivery. Paper menus and counter ordering remained real competitors because a digital flow only succeeds if it is visibly faster and clearer.

### Problem Validation

The research validated enough of the problem to proceed: lunch customers likely value speed, mobile access is broadly plausible, digital ordering is established, and predefined customization fits mobile constraints. It did not fully validate Curry Cruiser-specific demand, menu structure, customer behavior, or staff workflow.

### User Research Plan

The user research plan answered that gap. It called for 5 to 7 lunch customers, 2 Curry Cruiser staff or comparable food truck operators, and 1 customer with dietary restrictions or allergy concerns. The methods were intercept interviews, short usability tests with a clickable mobile prototype, staff walkthroughs with sample order tickets, and observation of an existing lunch line if possible.

#### Customer Interview Prompts

Customer prompts focused on the last quick lunch order, what made ordering easy or annoying, when digital would beat verbal ordering, what information is needed before choosing curry, expected customization choices, trust after submission, and allergy/dietary behavior. Prototype tasks asked users to order green curry with tofu, medium spice, jasmine rice, and no extra toppings; change spice before submitting; check vegetarian status; find what happens after submission; and recover from an unavailable protein. Staff prompts asked what details are needed to make curry correctly, what customizations cause mistakes, what combinations should be blocked, how unavailable ingredients are handled, and how submitted orders should display.

#### Prototype Test Tasks

The prototype tasks focused on ordering green curry with tofu, medium spice, jasmine rice, and no extra toppings; changing spice before submitting; checking vegetarian status; finding what happens after submission; and recovering from an unavailable protein.

#### Staff Research Prompts

The staff prompts asked what details are needed to make curry correctly, what customizations cause mistakes, what combinations should be blocked, how unavailable ingredients are handled, and how submitted orders should display.

### Implications For Empathize Artifacts

The implications for empathize artifacts were already emerging. The primary persona would be a busy lunch-break worker; the secondary persona would be a first-time Thai curry customer; the staff persona would be an order fulfiller who needs standardized, readable tickets. The journey map needed to include digital entry, menu load, customization, review, submit, operator handoff, waiting, pickup, and fallback-to-counter moments. The empathy map needed to capture time pressure, fear of holding up the line, uncertainty about spice and allergens, and the desire for confirmation. Accessibility had to be treated as part of the lunch context: one-handed use, outdoor glare, large tap targets, clear states, and screen-reader-friendly option groups.

### Research Limits

The research limits stayed explicit: no direct customer interviews, no Curry Cruiser menu or price list, no prep workflow or payment model, mostly vendor-based competitor evidence, directional lunch-break data, and allergy handling that requires operational validation.

### Stage 02 Audit

The Stage 02 audit passed for evidence labeling, problem validation, and research honesty.

## 3. Empathize

### Purpose

The empathize phase translated the research dossier into human-centered artifacts.

### Evidence Basis

The evidence basis was deliberately mixed: broad smartphone ownership, food truck speed pressure, established digital ordering, mobile typing friction, allergen risk, and WCAG AA needs were evidence-backed; the exact menu model and individual-order assumption were still assumptions; no direct customer or operator interviews had been conducted yet.

### Interview Plan

The interview plan set the learning goal: understand how customers and operators experience friction during a quick food truck order, and what a digital flow must do to feel faster, clearer, and less error-prone than ordering verbally. The planned participants were 5 to 7 busy lunch customers, 2 Curry Cruiser operators or comparable food truck staff, and 1 customer with dietary restrictions or allergy concerns.

#### Customer Questions

Customer questions asked about recent food truck or quick-service orders, what made the order easy or annoying, when a digital flow would be preferable to verbal ordering, what information is needed before choosing curry, which customization choices are expected, what creates trust after submission, and how allergies or dietary needs are handled. Operator questions asked what details are needed, which customizations cause mistakes, what combinations should be blocked, how unavailable ingredients are handled, and how submitted orders should display. The design implication was that testing must validate both customer completion speed and operator readability. Confidence was medium because the plan was grounded in Stage 02 but not yet executed.

#### Operator Questions

Operator questions asked what details are needed, which customizations cause mistakes, what combinations should be blocked, how unavailable ingredients are handled, and how submitted orders should display.

#### Design Implication And Confidence

The design implication was that testing must validate both customer completion speed and operator readability. Confidence was medium because the plan was grounded in Stage 02 but not yet executed.

### Hypothesis-Based Interview Summaries

Three hypothesis-based interview summaries gave the team enough human texture to design responsibly before direct research.

#### Busy Lunch Customer

The busy lunch customer orders during a short break, often near the truck, walking, or waiting in line. This user wants to choose quickly, avoid mistakes, understand pickup timing, and get back to work. The pain points are menu uncertainty, line pressure, repeating choices verbally, unclear spice levels, and uncertainty that the order was captured. The workarounds are familiar orders, staff recommendations, avoiding customization, or abandoning the truck. The representative language to validate was: "I do not want to hold up the line," "Just show me the choices and let me get it done," and "I need to know what I actually ordered before it goes in." The design implication was a short path, visible progress, scannable customization, and review before submit.

#### First-Time Curry Customer

The first-time curry customer wants Thai curry but may not understand curry types, spice levels, bases, or proteins. This user needs confidence without feeling embarrassed. The pain points are unclear menu names, spice fear, ingredient uncertainty, and dietary concern. The workarounds are safe choices, asking staff what is popular, or choosing another vendor. The language to validate was: "What is the difference between red and green curry?", "How spicy is medium?", and "Can I tell if this is vegetarian?" The design implication was concise descriptions, spice guidance, dietary/allergen badges, and sensible defaults.

#### Food Truck Operator

The food truck operator works during rush, takes orders, prepares food, manages availability, and handles customer questions. This user needs complete, standardized orders, fewer remakes, moving lines, and fewer repeated explanations. The pain points are misheard orders, incomplete customization, unclear dietary requests, late changes, and messy notes. The language to validate was: "I need the order in the same order every time," "Do not let customers pick combinations we cannot make," and "If something is sold out, I need that reflected immediately." The design implication was an operator-readable summary with consistent option order, clear modifiers, and unavailable state handling.

### Personas

The personas sharpened those summaries:

#### Persona 1: Time-Pressed Regular

Maya is an office worker buying lunch during a short break. She wants to order quickly, get a reliable meal, and avoid losing time to the line. She needs fast selection, clear defaults, a visible total or summary, and pickup expectation. Her pains are slow queues, unclear options, repeated choices, and uncertainty after submitting. She reorders familiar meals, scans quickly, skips optional complexity, and abandons slow flows. One-handed phone use, outdoor glare, background noise, and time pressure shape her accessibility context. Her design implication is a short path from menu to reviewed order without account creation or typed notes. Confidence: medium.

#### Persona 2: Curious First-Timer

Jordan is a new or occasional customer trying Curry Cruiser for the first time. Jordan wants to understand the menu, avoid a bad spice or ingredient choice, and feel confident ordering. Jordan needs plain-language curry descriptions, spice guidance, dietary/allergen visibility, and staff fallback. Menu unfamiliarity, fear of wrong spice level, hidden allergens, and low confidence create friction. Jordan reads descriptions, looks for popular choices, and may choose defaults. The design implication is concise helper text and badges without turning the app into a long educational menu. Confidence: low-medium.

#### Persona 3: Rush-Hour Operator

Sam is Curry Cruiser staff working peak lunch service. Sam needs standardized tickets, clear option order, no unsupported combinations, sold-out controls, and pickup identifiers. Ambiguous customization, late changes, unavailable ingredients, allergy ambiguity, and unreadable notes are the pains. Sam scans tickets quickly, prioritizes prep, and handles exceptions under pressure. The design implication is to design the submitted order format as carefully as the customer UI. Confidence: medium.

### User Stories

The user stories made each need actionable:

- As a time-pressed lunch customer, I want to select a curry and complete customization quickly, so that I can get lunch without spending my break in line.
- As a customer customizing a curry, I want predefined options, so that I do not have to type or explain my order.
- As a first-time customer, I want short explanations of curry type and spice level, so that I can choose confidently.
- As a customer with dietary needs, I want visible dietary and allergen indicators, so that I know when I need to ask staff before ordering.
- As a customer, I want to review my order before submitting, so that I can catch mistakes before the kitchen receives it.
- As an operator, I want orders displayed in a consistent structure, so that I can prepare them without interpretation.
- As an operator, I want unavailable options blocked or marked, so that customers do not submit orders we cannot fulfill.
- As an operator, I want fewer open-ended requests, so that the rush stays manageable.

### Journey Map: Customer Digital Order

The customer journey mapped the digital order from entry through pickup:

| Stage | User Actions | Thoughts/Questions | Emotion | Pain Points | Opportunities | Design Implications |
|-------|--------------|--------------------|---------|-------------|---------------|---------------------|
| Entry | Opens the ordering experience from a link, sign, QR code, or saved shortcut. | "Is this faster than just ordering at the window?" | Cautious | Entry method may be unclear or feel like extra work. | Show immediate menu and short path. | Do not make QR the product; make the ordering flow valuable once opened. |
| Browse | Scans curry options and prices. | "What looks good? What is included?" | Interested but rushed | Too many choices can slow ordering. | Feature a small menu and defaults. | Present curry cards with concise descriptions and clear starting prices. |
| Customize | Chooses curry type, base, protein, spice, add-ons, and dietary indicators. | "Can they make it this way? Is medium too spicy?" | Focused | Hidden restrictions or unclear spice levels. | Use predefined options and simple guidance. | Use large option buttons, selected states, and unavailable states. |
| Review | Checks final order summary. | "Did I choose the right thing?" | Reassured or anxious | No chance to edit before submission causes mistrust. | Let users edit each section. | Include a clear review screen before submit. |
| Submit | Sends order to the truck. | "Did they get it? What happens now?" | Relief if confirmed | Confirmation may be vague. | Provide pickup number/status expectation. | Show order received, pickup identifier, and what to do next. |
| Operator Handoff | Order appears for Curry Cruiser staff. | Customer does not see this directly. | N/A | Ticket could be hard to read or operationally incomplete. | Standardize ticket layout. | Use consistent order sequence and highlight exceptions. |
| Pickup | Waits and receives food. | "Is this mine? How long will it take?" | Impatient if unclear | Pickup confusion can recreate the line problem. | Clear pickup identifier and status. | Show pickup name/number and support staff callout. |

### Journey Map: Operator Fulfillment

The operator journey exposed the other half of the service loop:

| Stage | Operator Actions | Thoughts/Questions | Emotion | Pain Points | Opportunities | Design Implications |
|-------|------------------|--------------------|---------|-------------|---------------|---------------------|
| Receive | Views incoming order. | "What do I make first?" | Alert | New orders may interrupt existing work. | Use clear order queue and timestamps. | Keep ticket compact and scannable. |
| Parse | Reads curry, base, protein, spice, add-ons, and dietary markers. | "Any exceptions?" | Focused | Inconsistent modifier order slows prep. | Standardize order structure. | Always show options in the same sequence. |
| Prepare | Makes order. | "Can this be fulfilled as submitted?" | Under pressure | Unsupported combinations or sold-out items cause rework. | Block invalid choices before submission. | Add unavailable and incompatible-option logic. |
| Confirm | Marks order ready or calls pickup. | "How does the customer know?" | Relieved | No pickup identifier causes confusion. | Use simple pickup code/name. | Add confirmation state and pickup handoff pattern. |
| Resolve Issue | Handles missing/invalid info or allergy concern. | "Do I need to talk to the customer?" | Stressed | Digital flow may overpromise safety. | Route risky cases to staff confirmation. | Use allergy disclaimers and staff-check prompts where needed. |

### Empathy Map: Time-Pressed Regular

The empathy maps gave each persona emotional and behavioral texture.

Maya says, "I need lunch fast," "I do not want to repeat every detail," and "Just let me check it before I send it." She thinks about whether the flow saves time, whether the meal will be correct, and how long pickup will take. She chooses familiar items, skips optional information, and looks for confirmation. She feels rushed, reassured by short reviewable paths, and frustrated if digital ordering adds steps. Her pains are line pressure, tiny controls, unclear confirmation, and no edit opportunity. Her gains are fast repeat flow, pickup expectation, and less verbal back-and-forth.

### Empathy Map: Curious First-Timer

Jordan says, "What is the difference between these curries?", "How spicy is this?", and "Can I tell what is vegetarian?" Jordan thinks about trying something new without guessing wrong, slowing the line, or risking dietary needs. Jordan reads option descriptions, looks for popular/default choices, and hesitates at spice or allergen steps. The gains are confidence through concise guidance, a better first order, and less counter pressure.

### Empathy Map: Rush-Hour Operator

Sam says, "I need the order to be complete," "Do not let customers choose things we cannot make," and "I need to see the important modifiers fast." Sam thinks about whether the tool speeds the team up or creates another screen to manage. Sam scans tickets, prioritizes prep, and handles exceptions. The pains are open-ended notes, late changes, sold-out items still being ordered, and allergy ambiguity. The gains are standardized order format, fewer verbal clarifications, and easier queue management.

### Aggregated Empathy Map

The aggregated empathy map turned those individual artifacts into shared themes. Speed matters only if the digital flow is simpler than the existing path. Customers and operators both need clarity before submission. Predefined choices reduce typing and ambiguity only if they match the real menu. Confirmation is emotional as well as functional. Dietary and allergen information must be visible, cautious, and operationally truthful.

The common pains were lunch time pressure, fear of ordering incorrectly, ambiguous customization, small-screen interaction friction, and staff workload from repeated explanations or unclear tickets. The common goals were a fast confident order for customers, accurate standardized tickets for operators, and fewer corrections for both sides.

The contradictions mattered for design: some customers may prefer digital while others see it as friction; first-time customers need guidance while regulars need speed; allergy needs require clarity but no free text limits nuance; and operators may want fewer options than customers expect.

The prioritized insights became design criteria:

1. Optimize the complete service loop, not just the customer-facing menu.
2. Use review-before-submit because submitted orders may be hard to change.
3. Treat predefined customization as a strength only if the menu model is accurate.
4. Keep entry flexible; digital value comes from reduced friction, not QR scanning.
5. Treat accessibility and situational constraints together: glare, one-handed use, time pressure, and tap accuracy all push toward clear, large controls.

### Accessibility And Edge Cases

Accessibility and edge cases were built into the empathize phase rather than deferred. Touch and motor needs called for large targets, spacing, no drag-only interactions, and sticky actions that do not cover content. Vision needs called for high contrast, non-color-only meaning, and outdoor-readable hierarchy. Cognitive and stress needs called for short labeled steps, persistent selected choices, and avoiding overwhelming first-time users. Dietary needs called for explicit operationally true badges, major allergen warnings where known, staff confirmation for uncertain cases, and no unsafe free-text allergy handling. Device and environment needs called for lightweight mobile pages, fallback for non-digital users, and no account prerequisite. Operator edge cases included sold-out options, invalid combinations, duplicate pickup names, post-submit changes, and rush mode where fewer options may be exposed.

### Stage 03 Audit

The Stage 03 audit passed because each major artifact traced to Stage 02 evidence or was marked as an assumption, the artifacts covered customer and operator goals, every artifact carried design implications, and the pack honestly labeled interview summaries as hypothesis-based.

## 4. Define

### Purpose

The define phase converted the research and empathize artifacts into a problem frame, user needs, hypotheses, and value proposition.

### Inputs

Its inputs were the research dossier, empathize artifacts, and define reference.

### Core Problem Frame

The core problem frame was:

Busy Curry Cruiser customers and operators both need a clearer, faster way to turn a customized curry choice into a fulfillable order, because lunch service creates time pressure, verbal ordering can introduce ambiguity, and digital ordering only helps if it reduces work for both sides of the transaction.

The confidence was medium because the frame was grounded in desk research and hypothesis-based synthesis but still needed validation with real customers and operators.

### 5W And H Check

The 5W/H check kept the frame human and contextual:

- Who: Busy lunch customers, first-time curry customers, and Curry Cruiser operators.
- What: Customers need to customize and submit curry orders without confusion; operators need accurate, standardized, fulfillable order details.
- Where: At or near a Thai curry food truck, likely on a mobile device in a public lunch setting.
- When: During lunch rush or short work breaks.
- Why: Mistakes, hesitation, unclear options, and repeated explanations slow both customers and operators.
- How users currently cope: Customers order verbally, pick familiar items, avoid customization, ask staff questions, or leave if the line feels slow. Operators repeat details, use shorthand, limit customization, and manually resolve unclear orders.

### Problem Statements

Three problem statements separated customer, operator, and service-level friction.

#### Primary Customer Problem

The primary customer problem: A lunch customer trying to order customized curry quickly hesitates when options, spice levels, dietary details, or pickup expectations are unclear. They do not want to hold up the line or receive the wrong meal, which makes them feel rushed and uncertain. This traced to the Maya and Jordan personas, customer journey stages, and Stage 02 findings on lunch constraints, mobile friction, and dietary risk.

#### Operator Problem

The operator problem: Curry Cruiser operators need complete, standardized, operationally valid order details because ambiguous customization, unsupported combinations, unavailable items, and unclear dietary requests slow prep and increase mistake risk. This traced to Sam, the operator journey, staff research questions, and digital ordering patterns. Confidence was medium-low until direct staff testing.

#### Service-Level Problem

The service-level problem: Curry Cruiser needs digital ordering to improve the full customer-to-operator handoff because polished customer UI that creates unclear tickets only moves friction from the line to the kitchen. This traced to the aggregated empathy map and the Stage 02 risk that digital ordering may become extra work.

### User Needs Statements

The user needs statements became the bridge from problem to solution:

- Maya needs a way to choose, customize, review, and submit a curry order quickly because her lunch break is short and she wants confidence before the order reaches the truck. Success means a standard order in under two minutes with review and edit before submit.
- Jordan needs a way to understand curry types, spice levels, and dietary signals without asking many questions because unfamiliar menu language and line pressure feel risky. Success means first-time users can explain their selected curry, spice level, and dietary assumptions.
- Sam needs a way to receive orders in a consistent, compact, fulfillable format because rush-hour prep depends on reading the same details in the same order every time. Success means operators can identify curry type, base, protein, spice, add-ons, exceptions, and pickup identifier without clarification.
- Customers also need an ordering flow that works with one hand, outdoor glare, background noise, time pressure, and small screens. Success means large tap targets, visible labels, clear selected states, and no typing-dependent steps.

### Key Insights

The key insights were concise:

1. Digital entry is not the product. Reduced friction is the product.
2. Customer confidence depends on review, confirmation, and plain-language choices.
3. Operator trust depends on standardized ticket structure and valid customization rules.
4. Predefined options can reduce ambiguity only if they reflect the real menu and prep constraints.
5. Allergy and dietary handling must be cautious and operationally truthful.
6. The best flow must balance fast defaults for regulars with enough explanation for first-time customers.

### Hypothesis Statements

The hypotheses turned those insights into testable product bets.

#### Hypothesis 1: Guided Predefined Customization

If Curry Cruiser uses predefined choice groups for curry type, base, protein, spice, add-ons, and dietary signals, customers will complete orders with less hesitation and fewer invalid requests because they will not need to type, invent, or verbally explain customizations. Signals: order completion under two minutes, fewer incomplete or unsupported combinations, and users identifying selected choices on review. Confidence: medium.

#### Hypothesis 2: Review Before Submit

If customers see a concise review screen before submission, they will feel more confident and catch more mistakes because submitted mobile orders may be difficult to edit. Signals: successful edit controls, fewer post-submit doubts, and correct order recall. Confidence: medium-high.

#### Hypothesis 3: Operator-Readable Ticket Format

If orders follow a consistent ticket format, staff will parse and fulfill orders faster because curry, base, protein, spice, add-ons, dietary markers, exceptions, and pickup ID appear in the same sequence. Signals: operator comprehension without clarification, quick exception recognition, and staff readability ratings. Confidence: medium-low until staff testing.

#### Hypothesis 4: Progressive Help For First-Time Users

If the flow includes concise descriptions, spice guidance, and visible dietary/allergen cues without forcing long reading, first-time customers will choose more confidently while regulars stay fast. Signals: first-time users distinguish curry options and spice levels, regulars do not report slowdowns, and dietary-concern users know when to ask staff. Confidence: low-medium.

#### Hypothesis 5: Flexible Digital Access

If Curry Cruiser treats QR, link, signage, and saved shortcuts as interchangeable entry methods, the project can focus on ordering friction rather than scanning behavior. Signals: users can begin without specific access-method instruction, tests focus on ordering clarity rather than QR mechanics, and counter fallback remains available. Confidence: medium.

### Problem/Hypothesis Pairs

The problem/hypothesis pairs made the test logic compact:

| Problem | Hypothesis | Test Signal |
|---------|------------|-------------|
| Customers hesitate when curry options, spice levels, or dietary signals are unclear. | Guided predefined customization and concise helper text will reduce hesitation. | Time on task, fewer clarification questions, user confidence rating. |
| Customers worry that a submitted order may be wrong. | Review-before-submit will increase confidence and catch mistakes. | Successful edits, fewer post-submit doubts, correct order recall. |
| Operators lose time interpreting inconsistent or ambiguous orders. | Standardized ticket structure will improve operator readability. | Staff comprehension test, fewer clarification needs, faster ticket parsing. |
| Digital ordering can become extra work if it does not improve the full service loop. | Flexible access plus short customer flow plus operator-ready handoff will reduce friction across the whole service. | Customer completion speed, operator readability, perceived effort from both sides. |
| Dietary/allergen needs are risky without free text. | Explicit badges plus staff-confirmation prompts for uncertain cases will be safer than silent assumptions. | Users identify when to ask staff; operators confirm whether language is operationally accurate. |

### Value Proposition

The value proposition synthesized the phase:

For busy lunch customers and Curry Cruiser operators who need fast, accurate curry orders during food truck service, Curry Cruiser's digital ordering experience helps customers customize confidently and helps operators fulfill orders clearly by turning menu choices into predefined, reviewable, operator-readable order details, unlike purely verbal ordering or generic digital menus that can leave ambiguity in the customer-to-kitchen handoff.

### Difference From Current Workarounds

The definition also clarified how the product differed from current workarounds. Unlike verbal ordering, it shows selected choices before submission. Unlike free-text notes, it reduces interpretation work. Unlike QR-only thinking, it does not depend on one entry method. Unlike customer-only ordering interfaces, it includes operator ticket readability. Unlike generic menu browsing, it must enforce real Curry Cruiser prep constraints.

### Human Factors Rationale

The human factors rationale explained why the flow should be grouped and feedback-rich. Hick's Law supported limited grouped choices under lunch pressure. Feedback loops supported selected choices, review state, submission confirmation, and pickup expectation. Mental models supported familiar menu, cart, edit, and confirmation patterns without marketplace complexity. Serial position effect supported essential choices early and final summary at the end. Isolation effect supported making exceptions, unavailable choices, dietary warnings, and submit actions visually distinct.

### Define Risks And Open Questions

The risks and open questions stayed attached to the definition: the real menu may not fit the assumed model, staff may need different ticket details, payment remains undefined, allergy claims require operational validation, customers may prefer counter ordering, and helper content could slow regulars.

### Guiding Definition For Ideation

The guiding definition for ideation was:

Design a mobile-first digital ordering flow that helps Curry Cruiser customers build a valid curry order quickly and confidently, while giving operators a standardized, readable order handoff that reduces clarification, mistakes, and rush-hour workload.

### Stage 04 Audit

The Stage 04 audit passed because the user needs stayed focused on speed, confidence, clarity, and fulfillment; the hypotheses were observable; the value proposition named users, problem, outcome, and difference; and the evidence traced back to Stage 02 and Stage 03.

## 5. Ideate

### Purpose

The ideation phase generated solution directions, prioritized features, and defined wireframe requirements.

### Inputs

Its inputs were the research dossier, definition brief, shared design system, and ideate reference.

### Guiding Problem

The guiding problem was the Stage 04 definition: help customers build a valid curry order quickly and confidently while giving operators a standardized handoff.

### Competitive Audit Summary

The competitive audit reinforced that Square Online Ordering, Toast Mobile Order & Pay, delivery marketplace patterns, and paper/menu-board plus counter ordering all shaped user expectations. The common patterns were menu browsing, item cards, option groups, cart review, order confirmation, pickup/payment expectation, and POS or kitchen handoff. The strengths were familiar mental models, standardized modifiers, review-before-submit, and pickup confirmation. The weaknesses were overly generic restaurant flows, QR-only friction, overconfident allergy handling, and customer-facing flows that ignore operator readability. The market gap was a focused food-truck order builder that treats operator handoff as part of UX.

### Product Goals

The product goals translated research and definition into outcomes:

1. Let lunch customers build a valid curry order quickly, measured by standard order completion under two minutes and successful recall after submission.
2. Help first-time customers understand curry, spice, and dietary choices, measured by fewer clarification questions and correct understanding.
3. Let operators read every order in a consistent structure, measured by staff comprehension of sample tickets without clarification.
4. Preserve flexible digital entry, measured by users starting from link, sign, QR code, or saved shortcut without confusion.

### How Might We Questions

The How Might We questions opened solution space without losing constraints:

- How might we help rushed lunch customers customize a curry quickly without making the flow feel like extra work?
- How might we give first-time curry customers just enough guidance without slowing regulars down?
- How might we make every submitted order readable and actionable for operators during rush service?
- How might we prevent unsupported combinations before the customer submits?
- How might we handle dietary and allergen concerns clearly without unsafe free-text promises?
- How might we make the pickup moment feel confirmed and calm?
- How might we keep digital access flexible so QR scanning remains optional?
- How might we make the operator handoff as intentionally designed as the customer menu?

### Rapid Sketch Set

The rapid sketch set explored eight directions:

1. One-page builder: one page with curry cards, option sections, sticky summary, and submit. Fast for regulars, but overwhelming for first-time users.
2. Step-by-step order wizard: one decision per step. Clear and low cognitive load, but possibly slower.
3. Popular combos first: recommended combos with edits. Fast for uncertain customers, but may hide customization.
4. Split customer and operator preview: review includes what the truck receives. Trust-building, but possibly too technical.
5. Rush mode menu: operators simplify lunch-rush options. Prevents impossible choices, but needs operator controls outside prototype scope.
6. Dietary first filter: users optionally choose dietary concerns before browsing. Helpful, but may create false safety.
7. Quick reorder shortcut: local repeat order. Strong for regulars, but premature and storage-dependent.
8. Counter-fallback support: show the order at the counter if submission/payment is unavailable. Preserves value, but blurs whether the app submits or only prepares a summary.

### Selection

The selected direction combined the wizard, popular combos, operator preview, and rush constraints into a guided mobile order builder. Users select and customize one dish, confirm it into a cart, repeat for multiple dishes, then confirm the full order and track order state. This direction fit the evidence because it reduced typing, supported time pressure, kept guidance lightweight, gave operators standardized information, and avoided making QR scanning the core feature.

### Feature Candidates

The feature candidates defined MVP discipline:

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

### Selected MVP Direction

The selected MVP direction became a cart-based order loop. A customer chooses one dish, customizes it through predefined controls, adds it to the cart, repeats until all dishes are added, confirms the full order, and receives an order number with state tracking.

### Primary User Flow

The primary user flow was:

1. Customer opens Curry Cruiser digital ordering experience.
2. Customer selects one dish and customizes it as part of selection.
3. Customer confirms the customization, adding that dish to the cart.
4. Customer returns to dish selection and either adds another dish or moves forward to the cart.
5. Customer reviews the cart and confirms the full order.
6. Customer receives an order number and order state: Confirmed, In progress, or Finished.
7. Finished order numbers are called out at the truck.

### Wireframe Requirements

The wireframe requirements defined six screens.

#### Screen 1: Menu / Start Order

Purpose: get users into ordering quickly while showing product context. The screen needs the Curry Cruiser name, open/available status, pickup expectation, curry cards or popular combos, and flexible access note if needed without QR dependency. Main actions are starting with a curry, viewing dietary info, and counter fallback. States include loading menu, sold-out curry card, closed/unavailable, and empty menu. The first viewport should be actionable, not a marketing hero.

#### Screen 2: Curry Selection

Purpose: let users choose a curry or recommended combo. Content includes red curry, green curry, yellow curry or real menu options, popular combo labels, flavor descriptions, and a dietary/allergen caution entry point. Actions include select curry, continue, and back to menu. States include selected curry, unavailable curry, and expanded/collapsed help. Large tap targets and persistent selected state are required.

#### Screen 3: Customize Order

Purpose: build a valid curry through predefined options. Content includes current curry, base options such as jasmine rice, brown rice, noodles, or no base; proteins such as chicken, tofu, vegetables, shrimp, or beef; spice options from mild to Thai hot; add-ons like vegetables, herbs, crispy shallots, and extra sauce; and dietary indicators such as vegetarian possible, vegan ask staff, contains fish sauce, contains peanuts, contains soy, or contains sesame. States include required option missing, invalid combination, sold-out option, and allergy caution. No free-text fields are allowed.

#### Screen 4: Cart / Confirm Order

Purpose: let users review all customized dishes before confirming the full order. Content includes every dish, the structured sequence of curry, base, protein, spice, add-ons, dietary/allergen flags, edit and remove actions, estimated total, and pickup reminder. States include missing required information, unavailable price, and disabled submission until valid. The summary sequence must match the operator ticket.

#### Screen 5: Order Received / Status

Purpose: confirm the order and show order number plus state. Content includes order received, order number, Confirmed/In progress/Finished state, confirmed cart contents, and reminder that finished order numbers will be called out. States include submission loading, submission failed, and order received. The success state must avoid vague confirmation and tell users how to resolve changes after submission.

#### Screen 6: Order State Simulation

Purpose: represent the post-confirmation state. Content includes Confirmed, In progress, and Finished states plus the finished-number callout instruction. States include confirmed, in progress, finished, confirmation failed, and empty cart.

### Text-Only Wireframe Pack

The text-only wireframes made the prototype direction concrete.

#### Wireframe A: Mobile Menu

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

#### Wireframe B: Customize

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

#### Wireframe C: Review

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

#### Wireframe D: Confirmation

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

#### Wireframe E: Operator Ticket

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

### Interaction Requirements

The interaction requirements preserved the product boundaries: predefined controls only, no free-text fields, selected/unselected/disabled/error states for required groups, edit before submit, simulated loading/success/failure, pickup identifier, consistent operator field order, cautious dietary/allergen language, and no mandatory QR assumption.

### Accessibility Requirements

The accessibility requirements stayed core to the flow: WCAG AA, visible labels, large touch targets, non-color-only state communication, focus order aligned with visual order, sticky actions that do not obscure content, plain language for spice and dietary guidance, and usability on small screens in outdoor glare.

### Design System Direction

The design system direction called for a clean, accessible, product-focused interface with a neutral base and restrained Thai-food-inspired accent such as green or chili red. The layout should be dense but calm mobile utility, not a decorative landing page. Components include menu cards, segmented/button groups, dietary/allergen badges, sticky bottom action, and compact ticket layout. The tone should be direct, warm, and operational.

### Feature Scope For App Build

The first prototype scope includes a customer menu/start screen, curry selection, predefined customization, sold-out/disabled option example, dietary/allergen badges, review with edit links, simulated submit loading, confirmation with pickup number, operator ticket preview or queue, and responsive mobile-first layout.

Deferred items are real payment, real backend order submission, account creation, saved favorites or reorder history, full operator admin console, real-time inventory management, and multilingual support.

### App Readiness Notes

The app readiness notes made build defaults explicit: use green curry, jasmine rice, tofu, medium spice, and herbs as the default task; make shrimp the sold-out state; use "For allergy concerns, speak to staff before ordering"; generate an order number such as `#24`; and measure success by completion under two minutes, order recall on review, and understanding of pickup next step.

### Stage 05 Audit

The Stage 05 audit passed because ideas traced to the Stage 04 definition, features were prioritized, wireframe requirements covered screens and states, and QR remained optional.

## 6. Prototype Direction

### Prototype Direction

The prototype direction is a mobile-first, cart-based Curry Cruiser ordering experience. The first screen is an ordering surface, not a landing page. Curry cards begin the task immediately. Customization happens through predefined option groups, and every dish is added to a cart before final confirmation.

### Evidence Chain

The key design decisions trace across the process:

- Food truck speed pressure and lunch constraints led to an actionable first screen and sub-two-minute task goal.
- Mobile typing friction and no-free-text constraints led to predefined choice groups.
- Customer uncertainty and submitted-order risk led to review before submit.
- Operator ambiguity led to a standardized ticket sequence.
- Dietary and allergen risk led to cautious badges and staff-check language.
- QR backlash risk led to flexible entry rather than QR dependence.
- Accessibility and situational constraints led to large controls, visible labels, clear states, and no color-only meaning.

### Prototype Scope

The prototype should build only what the evidence supports now: menu, selection, customization, cart review, simulated submit, confirmation, order status, unavailable states, dietary caution, and operator preview. Backend order routing, payment, accounts, saved orders, inventory management, and full operator admin belong after customer and staff validation.

## 7. Validation / Testing Plan

### Validation Focus

Validation should now test the linked assumptions rather than merely ask whether the prototype looks good.

### Customer Prototype Tasks

Customer prototype tasks:

- Order a green curry with tofu, jasmine rice, medium spice, and herbs.
- Add a second dish before confirming the full order.
- Change the spice level before submitting.
- Edit a dish from the cart.
- Remove a dish from the cart.
- Identify whether the selected curry is vegetarian possible.
- Explain what happens after the order is submitted.
- Recover from a sold-out curry or protein option.

### Operator Validation Tasks

Operator validation tasks:

- Read a sample multi-dish order summary and explain what to prepare.
- Identify curry, base, protein, spice, add-ons, dietary flags, exceptions, and pickup identifier.
- Compare the summary against a verbal or handwritten order.
- Name missing details needed during rush service.
- Confirm whether Confirmed, In progress, and Finished match the truck's real pickup workflow.

### Success Measures

Success measures:

- Standard one-dish order completed in under two minutes.
- Users can add more than one dish without losing their place.
- Users can review and correct choices before confirming.
- Users understand selected options and pickup state.
- Operators can parse sample orders without clarification.
- Customers and operators rate the flow as easier or clearer than the current workaround.

### Next Research Actions

The most important research to run next is direct: observe or interview lunch customers, test the clickable flow with 5 to 7 target users, walk through order tickets with 2 operators, and validate the actual menu, prices, ingredients, unavailable-combination rules, and allergen handling language.

## 8. Outcome, Limits, and Next Steps

### Outcome

The case study outcome is a validated direction, not a finished production system: Curry Cruiser should become a mobile-first curry order builder that reduces friction by turning menu choices into predefined, reviewable, operator-readable order details.

### Core Product Insight

The strongest product insight is that the interface must serve both sides of the transaction. If the customer UI is fast but the ticket is unclear, the work has only moved downstream. If the operator ticket is precise but the customer flow is slow, users will return to the counter. The chosen direction works because it keeps the customer and operator artifacts connected.

### Research Limits

Research limits remain meaningful:

- No direct customer interviews were completed.
- No direct operator interviews were completed.
- No real Curry Cruiser menu, ingredient list, price rules, prep constraints, or payment model was supplied.
- Group-order needs are plausible but not validated.
- Competitor research includes vendor documentation, which may overstate benefits.
- Lunch-break evidence is directional and not Curry Cruiser-specific.
- Allergy and dietary claims require operational validation before they can be presented as safe.
- Operator state needs beyond Confirmed, In progress, and Finished remain open.

### Next Steps

Next steps:

1. Collect the real Curry Cruiser menu, prices, ingredients, and unavailable-combination rules.
2. Define the order model: curry type, base, protein, spice, extras, dietary flags, price rules, and inventory constraints.
3. Define cart/order rules: edit, remove, lock point, payment boundary, and sold-out behavior while in cart.
4. Define operator state needs: customer-visible states and any internal operator exceptions.
5. Test the prototype with 5 to 7 lunch customers.
6. Test sample order summaries with 2 Curry Cruiser operators or comparable food truck staff.
7. Revise the prototype based on completion time, confidence, cart comprehension, and operator readability.

## Stage 06 Audit

- Evidence chain: Pass. Major design decisions trace from problem framing through research, empathize, define, and ideate.
- Phase completeness: Pass. Problem, Research, Empathize, Define, and Ideate each include their generated stage artifacts inside the relevant section.
- Artifact consequence: Pass. Artifacts explain what insight, decision, risk, or prototype requirement they shaped.
- Portfolio readability: Pass. The case study follows the design thinking process as a story rather than a detached audit table.
- Limits named: Pass. User research gaps, staff validation gaps, menu gaps, payment uncertainty, allergen risk, and operator workflow assumptions are explicit.
