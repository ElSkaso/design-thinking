# Research Dossier: Curry Cruiser Revised

## Purpose

Validate whether a predefined, no-free-text curry ordering flow is a meaningful UX problem for Curry Cruiser customers and staff, and define the research plan needed before empathize artifacts are created.

## Inputs

- Stage 01 brief: `stages/01-problem-intake/output/curry-cruiser-revised-project-brief.md`
- Workspace evidence standard: separate evidence, assumptions, risks, and open questions
- Desk research from restaurant/off-premises, food truck, QR ordering, modifier, and UX form sources

## Research Questions

- How do customers currently decide what to order from food trucks when menus require customization?
- Which curry choices should be predefined because they are common, operationally feasible, and easy to understand?
- Where does ordering friction happen: menu comprehension, customization, payment, pickup timing, order review, or staff handoff?
- Does QR access reduce friction in this context, or does it add adoption and accessibility risk?
- What information do Curry Cruiser staff need on an order ticket to prepare food accurately during peak service?

## Findings

### Finding 1: Off-premises and mobile ordering are mainstream enough to justify a digital order flow.

Evidence: The National Restaurant Association reported in 2025 that nearly 75% of restaurant traffic happens off-premises, and that mobile ordering was used recently by 57% of adults, including 74% of millennials and 65% of Gen Z adults. The same reporting names speed, customer service, intuitive tech for ordering and paying, value offers, and loyalty programs as important off-premises attributes.

Implication: A mobile-first ordering experience is directionally valid, especially for younger and time-pressed customers. The design should optimize for speed, clarity, and low effort rather than a heavy app-like account experience.

Confidence: Medium. The source is credible and current, but it covers restaurants broadly, not Thai food trucks specifically.

### Finding 2: Food trucks are a competitive, convenience-driven environment where operational clarity matters.

Evidence: IBISWorld estimates the U.S. food truck industry at $2.8B in 2025 with 92,257 businesses, and describes food trucks as competing through quality, taste, convenience, quick meals, and optimal locations.

Implication: Curry Cruiser likely cannot afford a slow or ambiguous flow. The order experience should reduce staff interpretation work and support quick customer decisions in a crowded, mobile context.

Confidence: Medium. The source validates the market context, but not Curry Cruiser's specific workflow.

### Finding 3: Predefined modifiers match existing restaurant ordering infrastructure.

Evidence: Square defines modifiers as customizable item options such as toppings, add-ons, or special requests, with selectable limits and display on order tickets. Square also notes that modifier sets can be ordered, including putting base options or sauces first. Toast support documentation also frames multiple modifier selection as useful for build-your-own-style restaurants.

Implication: Curry customization should be modeled as ordered modifier groups, not a blank note field. Likely groups include curry, protein, spice, base, vegetables, toppings, utensils, and pickup details.

Confidence: Medium. Vendor documentation supports feasibility, but Curry Cruiser's real menu still needs validation.

### Finding 4: QR-code ordering is feasible but should remain optional.

Evidence: Square describes QR ordering as a way for customers to scan a code and order from a mobile device, with QR codes tied to ordering stations or locations. Clover describes a scan-to-order flow where guests scan, view a menu, order, and pay. Toast also supports QR access to online ordering.

Risk: QR access can create adoption, accessibility, device, connectivity, and preference issues. It is an entry method, not the product's core value.

Implication: Design the ordering experience as a mobile web flow that can be opened by QR code, direct URL, or staff-provided link. Do not make scanning the only success path.

Confidence: Medium. Vendor sources validate feasibility; customer preference must still be tested.

### Finding 5: Form usability matters because this is a short, task-focused ordering flow.

Evidence: Nielsen Norman Group accessibility guidance recommends placing form submit actions close to the last field or selection tool and putting field instructions before the field. NN/g menu guidance also emphasizes descriptive labels, tap-friendly links, and avoiding overly complex navigation patterns.

Implication: The order flow should use short sections, clear labels, visible requirements, and a final review/submit action near the end of the order. Instructions should appear before customization controls, not after them.

Confidence: Medium. The guidance is general UX evidence, but highly applicable to a mobile ordering form.

## Evidence Table

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

## Assumption Log

| Assumption | Why It Exists | Validation Needed |
|---|---|---|
| Customers currently experience friction when customizing curry orders. | The brief names customer friction as the core problem. | Observe or interview customers about current ordering pain points. |
| Staff currently spend time clarifying or interpreting orders. | The brief names operational friction for staff. | Interview Curry Cruiser staff and review sample orders. |
| Common curry customization categories include curry type, protein, spice, base, add-ons, and pickup details. | These are plausible menu structures for Thai curry ordering. | Validate against Curry Cruiser's actual menu and prep workflow. |
| Free-text fields increase ambiguity and unsupported requests. | Structured ordering systems usually reduce interpretation load. | Compare staff handling of free-text orders vs predefined modifier orders. |
| A responsive web flow is sufficient. | Workspace default platform is responsive web. | Check customer device/context patterns and staff operations. |

## Competitive Landscape Notes

### Square Online / Square for Restaurants

- Strength: QR ordering, item modifiers, required/limited modifier sets, modifier ordering, and order ticket display are directly relevant to Curry Cruiser's needs.
- Gap/opportunity: Generic POS ordering may not explain Curry Cruiser-specific curry decisions or guide customers through unfamiliar Thai curry choices.

### Toast Online Ordering / Mobile Order & Pay

- Strength: QR-based order/pay flow and support for modifier-heavy ordering.
- Gap/opportunity: Vendor documentation shows some online ordering feature limits, which reinforces the need to keep the Curry Cruiser flow simple and structured.

### Clover Online Ordering / Scan to Order

- Strength: QR scan-to-order and contactless payment patterns are established restaurant behaviors.
- Gap/opportunity: Dine-in table logic is less central to a food truck unless adapted to pickup windows, pickup numbers, or event locations.

### Generic third-party delivery apps

- Strength: Familiar mobile ordering patterns and customer expectations.
- Gap/opportunity: Delivery apps may add fees, account friction, menu constraints, and reduced control over the branded food truck experience. This project can focus on lightweight direct ordering.

## Problem Validity

The problem is valid enough for continued UX work, with medium confidence. The broader market supports mobile/off-premises ordering, vendor tooling supports structured modifiers, and food trucks operate in a speed-sensitive environment. The strongest unvalidated area is Curry Cruiser's actual workflow: menu structure, staff ticket needs, payment expectations, and pickup process must be confirmed before design decisions become final.

## Representative Participant Sample Criteria

- Customers who have ordered from food trucks in the past three months.
- Customers who have customized food orders before, such as choosing spice level, protein, toppings, dietary options, or substitutions.
- Mix of frequent and occasional food truck customers.
- Mix of digital-ordering comfort levels, including people who prefer in-person ordering.
- Staff or operators from Curry Cruiser or comparable small food vendors who handle peak-service orders.
- Include participants with accessibility considerations where possible, especially low vision, motor constraints, language barriers, dietary restrictions, or limited mobile data/connectivity.

## Target Participant Groups

- 5 customer participants who regularly order takeout or food truck meals.
- 3 customer participants who are less comfortable with QR codes or mobile ordering.
- 2 food truck or small restaurant staff participants who prepare or fulfill orders.
- 1 Curry Cruiser decision-maker, if available, to validate menu, operations, constraints, and business goals.

## Recruitment Rationale

The sample should cover both sides of the service interaction. Customers reveal comprehension, confidence, and completion friction; staff reveal ticket clarity, prep feasibility, and operational load. The sample intentionally includes digitally comfortable and less-comfortable customers because QR access and mobile ordering can help some users while excluding or annoying others.

## Interview Plan

### Customer Interview Questions

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

### Staff / Operator Interview Questions

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

## Synthetic Participant Profiles

Use these only if real interviews are unavailable. Mark all outputs derived from them as synthetic.

### Synthetic Customer A: Time-Pressed Regular

- Orders lunch from food trucks near work.
- Comfortable with mobile ordering.
- Wants to reorder quickly and avoid waiting in line.
- Likely need: fast path, clear default choices, pickup estimate.

### Synthetic Customer B: Curious First-Timer

- Likes Thai food but is unsure about curry types and spice levels.
- Needs simple explanations before choosing.
- Likely need: option guidance without long menu reading.

### Synthetic Customer C: Low-Confidence QR User

- Can use a smartphone but prefers ordering with a person.
- May worry about making a mistake or missing confirmation.
- Likely need: visible review step, fallback path, clear submit confirmation.

### Synthetic Staff A: Peak-Service Expediter

- Needs complete, standardized tickets.
- Wants fewer clarifications and fewer unsupported requests.
- Likely need: compact ticket format, consistent option order, clear pickup number.

## Implications for Empathize Artifacts

- Personas should not be based on demographics alone. Use ordering confidence, customization familiarity, time pressure, and staff role as primary segmentation signals.
- Empathy maps should capture both customer hesitation and staff cognitive load.
- Journey maps should include the physical context: seeing the truck/menu, opening the order flow, customizing, reviewing, submitting, waiting, and pickup.
- Accessibility considerations should include QR fallback, readable labels, tap targets, dietary/allergy handling, and non-free-text ways to communicate common constraints.
- Stage 03 should preserve contradictions, especially if some customers prefer staff interaction while others prefer self-service.

## Research Limits

- No real Curry Cruiser users or staff were interviewed in this stage.
- Curry Cruiser's actual menu, prep workflow, staffing model, payment model, and pickup process are unknown.
- Competitor research is based on vendor documentation and broad restaurant trends, not direct usability testing of competitor flows.
- QR-code sentiment is mixed and needs direct validation with Curry Cruiser's likely customers.

## Sources

- National Restaurant Association. "Off-Premises Restaurant Trends 2025." https://www.restaurant.org/research-and-media/research/research-reports/off-premises-restaurant-trends-2025/
- National Restaurant Association. "From Trend to Transformation: Off-Premises Dining Now Essential for Restaurant Consumers, Operators." https://restaurant.org/research-and-media/media/press-releases/from-trend-to-transformation-off-premises-dining-now-essential-for-restaurant-consumers%2C-operators/
- IBISWorld. "Food Trucks in the US - Market Research Report." https://www.ibisworld.com/united-states/industry/food-trucks/4322/
- Square Support Center. "Set up and manage QR code ordering for your website." https://squareup.com/help/us/en/article/7142-set-up-self-serve-ordering-and-qr-codes-with-square-online
- Square Support Center. "Create and edit modifiers." https://squareup.com/help/us/en/article/5119-create-and-edit-modifiers
- Toast Support. "Toast Mobile Order & Pay Overview." https://support.toasttab.com/en/article/Mobile-Order-and-Pay-Overview
- Toast Support. "Set Up and Use Multiple Modifier Selection." https://support.toasttab.com/article/Duplicate-Modifiers-in-Online-Ordering
- Clover. "Scan to Order." https://www.clover.com/pos-systems/scan-to-order
- Nielsen Norman Group. "Usability Guidelines for Accessible Web Design." https://media.nngroup.com/media/reports/free/Usability_Guidelines_for_Accesible_Web_Design.pdf
- Nielsen Norman Group. "Menu Design Checklist." https://media.nngroup.com/media/articles/attachments/PDF_Menu-Design-Checklist.pdf

