# Research Dossier: Curry Cruiser Second Revision

## Research Questions

- How do customers currently decide what to order from food trucks when customization is involved?
- What parts of a Thai curry order do customers expect to customize?
- Which predefined option categories would cover most valid Curry Cruiser orders without creating a slow or cluttered flow?
- What language, grouping, and sequencing help customers make curry customization decisions quickly and confidently?
- What information do Curry Cruiser staff need at a glance to prepare a customized order accurately?
- What order details most often cause clarification, mistakes, delays, or unsupported requests?
- How do customers respond to QR-code ordering in a food truck context?
- What failure states must the experience handle, such as incomplete orders, unavailable items, dietary restrictions, or unclear pickup timing?

## Key Findings

- Evidence, medium confidence: Off-premise ordering is a mainstream behavior. The National Restaurant Association's 2025 off-premises report says 47% of adults pick up takeout at least weekly, 37% order delivery at least weekly, and younger adults report higher growth in takeout, drive-thru, and delivery behavior. Design implication: Curry Cruiser should be optimized for fast, to-go decision-making rather than leisurely menu browsing. Source: https://restaurant.org/research-and-media/research/research-reports/off-premises-restaurant-trends-2025/
- Evidence, medium confidence: Speed, good service, intuitive ordering/payment technology, value offers, and loyalty are described as off-premise "must-haves" by the National Restaurant Association. Design implication: the ordering flow should minimize decision steps, make totals visible, and treat digital convenience as part of the service experience rather than a novelty. Source: https://restaurant.org/research-and-media/research/research-reports/off-premises-restaurant-trends-2025/
- Evidence, medium confidence: The U.S. mobile food services category includes businesses preparing and serving meals or snacks for immediate consumption from vehicles or carts. Design implication: Curry Cruiser's order model should reflect immediate-prep constraints: short tickets, item availability, pickup handoff, and low staff overhead. Source: https://www.census.gov/naics/resources/archives/sect72.html
- Evidence, low-to-medium confidence: IBISWorld describes U.S. food trucks as dependent on foot traffic and competing through quality, taste, convenience, and location. Design implication: the solution should not assume customers will patiently create accounts, compare many options, or complete a long checkout while standing near a truck. Source: https://www.ibisworld.com/united-states/industry/food-trucks/4322/
- Evidence, medium confidence: Restaurant QR-code menu research and reporting show a mixed signal: QR menus can support operational adaptation, but customer backlash includes effort, privacy, readability, and technology-friction concerns. Design implication: QR access should be optional and supported by fallback entry methods; the experience should work quickly after entry rather than making QR itself the hero. Sources: https://www.sciencedirect.com/science/article/abs/pii/S1878450X25001519 and https://www.wsj.com/business/hospitality/restaurant-menus-qr-codes-33f777c8
- Evidence, high confidence: WCAG 2.2 Level AA includes minimum contrast, labels/instructions, error identification, and target-size requirements relevant to mobile ordering controls. Design implication: predefined choices should use clear labels, visible selected states, error messages for missing required choices, and touch targets at least 24 by 24 CSS pixels or spaced equivalently. Source: https://www.w3.org/TR/WCAG22/
- Assumption, medium confidence: Curry ordering can be represented as a sequence of bounded choices: curry, protein, base, spice, add-ons, dietary flags, review, and submit. Design implication: Stage 03 interviews must test whether that sequence matches customer thinking and staff preparation.
- Risk, medium confidence: Removing all free-text fields may reduce ambiguity but also block valid needs such as allergies or substitutions. Design implication: the design needs structured exception handling, not just omission of special requests.

## Evidence Table

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

## Assumption Log

- Curry Cruiser has a small enough menu for a guided customization flow rather than search-first browsing.
- Most customers order one meal at a time, not large group orders.
- Payment is outside scope unless later validation proves payment friction is central.
- Staff can fulfill orders more reliably when each ticket follows the same option order.
- Customers will tolerate a digital flow if it is faster than verbal ordering and does not feel like extra work.
- QR access is useful in line or near the truck, but direct link or staff-assisted entry may be needed for accessibility and adoption.
- Dietary and allergy handling needs structured choices plus an honest boundary for unsupported requests.

## Competitive Landscape

| Competitor / Alternative | Pattern | Strength | Weakness / Gap | Implication For Curry Cruiser |
|---|---|---|---|---|
| Toast Online Ordering | Menu hierarchy, online visibility, pickup/dining configuration, POS-connected menus. | Operationally mature; maps orders into restaurant systems. | Can be heavier than a focused food-truck customization flow. | Borrow the menu/modifier hierarchy, but keep the customer experience narrower. |
| ChowNow menu/modifier tools | Categories, menu items, modifier groups, reusable modifiers, item availability toggles. | Strong support for structured choices and disabling unavailable items. | Generic menus can still overwhelm customers if too many modifiers appear. | Use required/optional modifier groups with clear limits and sold-out handling. |
| DoorDash / marketplace ordering | Familiar menu browsing, item modifiers, fees, pickup/delivery expectations. | Customers understand the pattern. | Marketplace overhead, fees, and browsing complexity may not fit an independent truck. | Borrow review/confirmation conventions, not the whole marketplace model. |
| Square / lightweight ordering tools | Small-business-friendly ordering and modifier patterns. | Familiar to independent food businesses. | May still require platform setup and payment decisions outside this project. | Keep solution compatible with simple POS handoff if built later. |
| Verbal counter ordering | Human clarification, staff can guide choices live. | Flexible and inclusive when staff have time. | Slow during rush; inconsistent details; customer pressure in line. | Preserve clarity and human fallback while reducing routine back-and-forth. |
| Static paper/menu board | Fast scanning and no phone barrier. | Low technical friction; good for quick orientation. | Hard to handle customization complexity and availability changes. | Pair digital ordering with visible menu-board language and short option labels. |

## Participant Sample Plan

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

## Interview Questions

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

## Implications For Empathize

- Build at least three customer/user groups: fast default seekers, careful customizers, and staff operators.
- Include one participant profile that challenges the QR assumption.
- Treat dietary handling as a core empathy topic because the no-free-text constraint could either help or harm trust.
- Probe the full journey from menu awareness to pickup handoff, not only the customization screen.
- Distinguish customer emotions from staff emotions: customers may feel rushed or uncertain; staff may feel interrupted or exposed to error.
- Carry evidence labels into every empathy map because real user interviews have not yet been conducted.

## Research Limits

- No real Curry Cruiser menu, staff workflow, pricing, allergy policy, or service-volume data was provided.
- No live customer or staff interviews were conducted in this stage.
- Desk research validates the broader need for fast off-premise ordering and structured mobile controls, but it does not prove Curry Cruiser's exact friction points.
- Competitor analysis is pattern-based and not a formal usability benchmark.
- QR-code findings are mixed and context-dependent; adoption must be tested with Curry Cruiser's actual customers.
