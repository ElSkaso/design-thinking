# Research Dossier: Curry Cruiser

## Purpose

Validate whether a digital, mobile-first ordering and predefined customization flow is a credible UX direction for Curry Cruiser, a Thai curry food truck serving busy lunch customers. QR-code access is treated as one possible entry method, not a mandatory requirement.

## Inputs

- Stage 01 brief: `stages/01-problem-intake/output/curry-cruiser-project-brief.md`
- Evidence standards: `shared/evidence-standards.md`
- Desk research accessed on April 27, 2026
- Real user interviews were not available during this stage, so behavioral claims are labeled by evidence strength.

## Research Questions

- What decisions do customers need to make when ordering Thai curry from a food truck?
- Which customization options are essential, and which would slow the flow down?
- How much information do lunch-break customers need before submitting an order?
- What causes friction or errors in food truck ordering today?
- Which digital ordering entry points feel lowest-friction in a fast lunch context?
- What confirmation, pickup, and payment expectations do customers have after placing an order?
- How should dietary restrictions be handled without free-text input?
- What information do operators need to fulfill customized curry orders accurately and efficiently?

## Findings

### Finding 1: The food truck context supports a speed-first ordering product.

Label: Evidence  
Confidence: Medium

IBISWorld estimates the U.S. food truck industry at about $2.8bn in 2025, with convenience and foot traffic called out as meaningful competitive factors. This supports the idea that Curry Cruiser is operating in a context where fast, location-based service matters. The evidence does not prove Curry Cruiser's local demand, but it validates the broader market category.

Design implication: Treat the app as an operational ordering tool, not a marketing site. The first screen should get users into curry selection quickly.

### Finding 2: Mobile-first access is a reasonable default for the target audience.

Label: Evidence  
Confidence: High

Pew Research Center's 2025 mobile fact sheet reports that 91% of U.S. adults own a smartphone, with smartphone ownership especially high among adults under 50. Curry Cruiser's lunch-break audience is likely to include many smartphone-capable users, though the flow still needs fallback support for users who cannot or do not want to use a digital ordering path.

Design implication: Mobile-first is justified, but the food truck should still have a counter-order fallback.

### Finding 3: Lunch ordering is time-constrained.

Label: Evidence  
Confidence: Medium

The U.S. Department of Labor describes meal periods as typically at least 30 minutes when offered, and OfficeTeam's worker survey found that more than half of surveyed workers reported lunch breaks of 30 minutes or less. The OfficeTeam data is older, so it should be treated as directional rather than definitive. BLS time-use data also shows eating and drinking as a limited daily time budget, though it is not specific to food truck meals.

Design implication: The app should target a sub-two-minute standard order, minimize reading, and avoid account creation before ordering.

### Finding 4: Digital self-ordering is established, but it must reduce real friction.

Label: Evidence + Risk  
Confidence: Medium

Square and Toast both support digital restaurant ordering flows where guests browse, order, pay, and send orders to POS or kitchen systems, often using QR codes as one entry method. This validates digital self-ordering as commercially established. At the same time, recent restaurant coverage reports backlash against QR-only menus in some seated dining contexts, especially when they feel like extra work or replace hospitality.

Design implication: The digital experience should earn its place by being faster and clearer than a purely verbal order. Entry method is secondary; the product needs a short menu, clear steps, visible cart, pickup expectation, operator-readable tickets, and a human fallback.

### Finding 5: Predefined customization is well aligned with mobile form constraints.

Label: Evidence  
Confidence: Medium

Baymard's mobile checkout research highlights mobile typing as slow and error-prone, with limited page overview on small screens. Curry Cruiser's constraint of predefined customization with no free-text fields is therefore a strength, as long as the predefined options cover real user needs.

Design implication: Use tappable choice controls for curry type, base, protein, spice, add-ons, and dietary indicators. Avoid typed notes in the first version.

### Finding 6: Dietary and allergen handling cannot be hand-waved.

Label: Evidence + Risk  
Confidence: High

The FDA identifies nine major food allergens in U.S. food labeling context: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. A Thai curry menu may involve common allergen or dietary concerns such as shellfish/fish sauce, peanuts, soy, wheat, dairy, egg, or sesame. A no-text-field constraint increases the need for clear predefined dietary/allergen signals.

Design implication: Include a predefined dietary/allergen awareness step or item-level badges. Do not imply medical safety unless Curry Cruiser can operationally support it.

### Finding 7: Accessibility requirements affect the ordering controls directly.

Label: Evidence  
Confidence: High

WCAG 2.2 AA includes target-size guidance for pointer inputs and requires labels or instructions when content needs user input. Since the app will be used on phones in a public lunch environment, tap targets, visible labels, focus order, contrast, and clear error states are core flow requirements.

Design implication: Choice buttons need generous touch areas, visible labels, selected states, and accessible names. Review and submit states must be unambiguous.

## Evidence Table

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

## Assumption Log

| Assumption | Confidence | Validation Needed |
|------------|------------|-------------------|
| Customers are physically near the truck when ordering. | Medium | Observe ordering context or confirm business model. |
| Most orders are individual lunch orders rather than group orders. | Low | Ask staff and observe peak service. |
| Payment can happen outside the prototype for now. | Low | Confirm whether Curry Cruiser wants order-only, pay-at-window, or in-app payment. |
| The menu can be represented through a small set of curry customization options. | Medium | Collect actual menu and prep constraints. |
| Customers will use a digital ordering path if it is faster or clearer than ordering verbally. | Medium | Test with lunch-break users. |
| Staff can fulfill orders from standardized option strings. | Medium | Test with staff using sample tickets. |
| Dietary needs can be handled through predefined options without free text. | Low | Validate with customers and staff; allergy safety may require human confirmation. |

## Competitive Landscape Notes

### Square

Label: Evidence  
Square supports ordering pages, QR access, mobile payment, POS routing, and kitchen ticket flows. Square also markets food truck tools around reducing long lines and accepting orders in flexible locations.

Relevance for Curry Cruiser: Strong reference for a lightweight food truck digital ordering flow. A first prototype can borrow the pattern of menu selection, payment/pickup expectation, and kitchen-readable order details without needing to implement the full POS ecosystem.

### Toast

Label: Evidence  
Toast Mobile Order & Pay supports mobile menu browsing, ordering, and payment from a guest's phone, with QR codes often used as an entry method. Toast documentation also highlights that guests cannot edit submitted mobile orders afterward.

Relevance for Curry Cruiser: Reinforces the need for a review screen before submission. For a food truck, a simple "review curry" step is likely more important than account features, tabs, or group ordering.

### Delivery Marketplace Apps

Label: Assumption  
Apps such as DoorDash, Uber Eats, and similar services have trained users to expect item customization, cart review, price visibility, and order status. They are less directly comparable because Curry Cruiser's concept is an in-person food truck ordering flow rather than remote delivery.

Relevance for Curry Cruiser: Use familiar menu/cart/review conventions, but avoid marketplace-style complexity.

### Paper Menu + Counter Ordering

Label: Evidence + Risk  
QR backlash in some dining contexts shows that digital ordering can feel annoying when it adds friction or removes helpful human service. For a food truck, paper/menu-board and counter ordering remain real fallback competitors.

Relevance for Curry Cruiser: The app must be visibly faster, not just more digital.

## Problem Validation

The problem is real enough to proceed: lunch customers likely value speed, mobile access is broadly available, digital ordering is commercially established, and mobile typing constraints support predefined customization.

The problem is not fully validated yet: there is no Curry Cruiser-specific observation, no customer interview data, and no staff workflow evidence. The strongest risk is that a digital solution may be perceived as extra work if it does not clearly reduce friction for customers and operators.

## User Research Plan

### Participants

- 5 to 7 lunch customers or target users who regularly buy quick lunch
- 2 Curry Cruiser staff or food truck operators
- 1 user with a dietary restriction or allergy concern, if available

### Methods

- Intercept interviews near lunch context
- Short usability test with a clickable mobile prototype
- Staff walkthrough using sample order tickets
- Observation of an existing lunch ordering line, if possible

### Customer Interview Prompts

- Tell me about the last time you bought lunch from a food truck or quick-service counter.
- What made the order easy or annoying?
- When would you use a digital ordering flow instead of ordering verbally?
- What information do you need before choosing a curry?
- Which customization choices would you expect?
- What would make you trust that your order was received correctly?
- How do you handle allergies or dietary needs when ordering quick food?

### Prototype Test Tasks

- Order a green curry with tofu, medium spice, jasmine rice, and no extra toppings.
- Change the spice level before submitting.
- Check whether the order is vegetarian.
- Find what happens after submitting the order.
- Recover from an unavailable protein option.

### Staff Research Prompts

- What order details do you need to make a curry correctly?
- Which customizations cause mistakes or slowdowns?
- What options should customers not be allowed to combine?
- How do you handle unavailable ingredients during a rush?
- How do you want submitted orders displayed?

## Implications for Empathize Artifacts

- Primary persona: busy lunch-break worker who wants a fast, reliable meal without waiting to explain options.
- Secondary persona: first-time Thai curry customer who needs help understanding curry type, spice, protein, and base choices.
- Staff persona: food truck operator or order fulfiller who needs standardized, readable tickets.
- Journey map should include digital entry, menu load, customization, review, submit, operator handoff, confirmation, waiting, pickup, and fallback-to-counter moments.
- Empathy map should capture time pressure, fear of holding up the line, uncertainty about spice/allergens, and desire for confirmation.
- Accessibility considerations should be treated as part of the core lunch context: one-handed use, outdoor glare, large tap targets, clear states, and screen-reader-friendly option groups.

## Research Limits

- No direct customer interviews were conducted in this stage.
- No Curry Cruiser menu, price list, prep workflow, or payment model was supplied.
- Competitor evidence comes mostly from POS vendor documentation and public product pages, which may emphasize benefits.
- Lunch-break data is mixed in recency and specificity; use it as directional evidence only.
- Allergy handling requires operational validation before any design claims safety.

## Stage 02 Audit

- Evidence labeling: Pass. Claims are labeled as evidence, assumption, risk, or open question.
- Problem validation: Pass. The dossier addresses whether the ordering/customization problem is real and where validation is still weak.
- Research limits: Pass. Missing user, staff, menu, and operational evidence are named directly.
