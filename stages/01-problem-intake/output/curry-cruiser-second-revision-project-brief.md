# Project Brief: Curry Cruiser Second Revision

## Problem Frame

Curry Cruiser needs a digital ordering experience that lets customers customize Thai curry through predefined options and submit a complete order without free-text fields. The challenge is to reduce customer ordering friction while also reducing the interpretation, clarification, and fulfillment friction placed on food truck staff.

The research should validate which parts of the curry ordering process create the most friction, which customization choices are essential, and how a structured order flow can stay fast, clear, and operationally realistic for a food truck context.

## Target Users

Target users should be derived from research, not assumed as fixed personas at intake.

Provisional user groups to validate:

- Customers ordering Thai curry from Curry Cruiser in a food truck setting.
- Customers who need to make customization decisions quickly, possibly while near the truck, in a line, or during a short meal break.
- Customers with dietary preferences or restrictions who need clear predefined choices.
- Curry Cruiser staff who receive, interpret, prepare, and hand off customized curry orders during service.

## Context And Constraints

- Domain: food, specifically Thai curry ordering for a food truck.
- Core flow: open ordering experience, choose from predefined curry customization options, review the order, and submit it.
- Free-text fields should not be used for customer customization.
- QR-code access may be used, but it is not mandatory and should not drive the solution prematurely.
- The workspace default disables the optional app build stage, so this run should prioritize research, UX artifacts, and case study outputs unless implementation is explicitly reopened.
- The experience should account for food truck constraints such as limited service time, small staff capacity, variable item availability, and customer queue pressure.
- Research should distinguish customer-facing friction from staff-facing operational friction.

## Known Facts

- The project is for a Thai curry food truck called Curry Cruiser.
- The solution direction is a digital food order customization experience.
- Customers should customize curry orders through predefined options.
- Customers should submit orders without using free-text fields.
- QR-code access is allowed but not required.
- The core goal is to reduce ordering friction for customers and operational friction for Curry Cruiser staff.

## Assumptions

- Current ordering friction may come from unclear customization choices, verbal back-and-forth, unsupported requests, or staff needing to interpret ambiguous orders.
- Predefined customization options can reduce errors if the option set reflects the actual menu and kitchen workflow.
- Customers are likely using mobile devices in a time-sensitive, public, or semi-public ordering context.
- Curry customization may include choices such as curry type, protein, spice level, base, toppings, dietary preference, and pickup timing.
- Staff need submitted orders to be structured, readable, and easy to fulfill during peak service.
- Some edge cases, such as allergies, sold-out items, substitutions, or special requests, may be hard to support without free text and need explicit design decisions.

## Open Questions

- What exact curry customization options does Curry Cruiser offer?
- Which customization choices are most important to customers, and which create operational strain?
- Where does ordering friction currently happen for customers?
- Where does operational friction currently happen for staff?
- Should the ordering experience support payment, or only structured order submission?
- How should dietary restrictions, allergens, substitutions, and sold-out items be handled without free-text fields?
- Should orders be submitted only while customers are physically near the truck, or also before arrival?
- What confirmation, pickup timing, and order identification information do customers and staff need?
- What access method would customers actually use: QR code, direct link, kiosk, staff-shared link, or another entry point?

## Research Questions

- How do customers currently decide what to order from food trucks when customization is involved?
- What parts of a Thai curry order do customers expect to customize?
- Which predefined option categories would cover most valid Curry Cruiser orders without creating a slow or cluttered flow?
- What language, grouping, and sequencing help customers make curry customization decisions quickly and confidently?
- What information do Curry Cruiser staff need at a glance to prepare a customized order accurately?
- What order details most often cause clarification, mistakes, delays, or unsupported requests?
- How do customers respond to QR-code ordering in a food truck context?
- What failure states must the experience handle, such as incomplete orders, unavailable items, dietary restrictions, or unclear pickup timing?

## Success Signals

- Customers can submit a complete customized curry order without free-text input.
- Customers understand the available options and constraints before submitting.
- Customers can review and correct their order before submission.
- Staff receive structured order details that are easy to scan and fulfill.
- The flow reduces clarification loops between customers and staff.
- The customization model reflects real Curry Cruiser menu and kitchen constraints.
- Research identifies target users, priority friction points, and validated customization categories for Stage 02.
