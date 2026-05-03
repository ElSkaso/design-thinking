# Project Brief: Curry Cruiser

## Project Title

Curry Cruiser

## Raw Problem or Idea

Design a digital food order customization solution for a Thai curry food truck. Customers open the ordering experience, customize their curry using predefined options, and submit an order without using free-text fields. QR-code access may be used, but it is not mandatory; the core goal is reducing ordering friction for customers and operational friction for Curry Cruiser staff.

## Target Users

- Busy adults ordering food during short breaks
- Workers buying lunch near the food truck
- Customers who want a fast, low-friction way to customize a curry order
- Curry Cruiser staff who need clear, standardized order details

## Context and Constraints

- Primary platform: mobile-first responsive web app
- Entry point: mobile-first digital ordering experience; QR code may be one access method but is not required
- Core flow: open ordering experience, customize order, review order, submit order
- Customization model: predefined choices only
- No additional text fields
- Likely use context: outdoor or semi-public lunch environment, limited time, possible queue pressure
- Default backend assumption: none/frontend-only unless later stages require otherwise
- Accessibility target: WCAG AA

## Known Facts

- The product is for a Thai curry food truck named Curry Cruiser.
- The main task is food order customization.
- Users are busy adults, workers, and people on their lunch break.
- The app should be mobile-first.
- Users access the ordering experience digitally, with QR code scanning as an optional entry method.
- Customization must use predefined options.
- The app should not include additional text fields.
- The desired outcome is to help customers order at the Curry Cruiser truck while reducing friction for both customers and operators.

## Assumptions

- Customers are physically near the truck when ordering.
- Speed and clarity matter more than browsing or discovery.
- The menu has a limited set of curry options, bases, proteins, spice levels, add-ons, and dietary choices.
- Predefined customization is intended to reduce customer hesitation, order errors, and staff workload.
- Customers may be ordering one meal at a time rather than building large group orders.
- Payment may happen outside the app unless later stages define an in-app checkout requirement.
- Staff need an order format that is easy to read and fulfill quickly.

## Open Questions

- What curry types and customization options does Curry Cruiser offer?
- Should the app support payment, or only order preparation?
- Does the customer receive an order number, pickup estimate, or confirmation screen?
- How should unavailable items be handled during service?
- Should dietary needs such as vegan, vegetarian, gluten-free, or allergies be represented as predefined options?
- Does the truck need an admin/staff view, or is the app only customer-facing?
- Should the app support repeat orders or saved preferences?
- What languages should the ordering flow support?

## Desired Outcomes

- Customers can place a customized curry order quickly from their phone.
- The ordering flow reduces hesitation during lunch rush.
- Predefined options make customization clear and controlled.
- Staff receive consistent order information.
- The experience feels simple, trustworthy, and appropriate for a food truck setting.

## Research Questions

- What decisions do customers need to make when ordering Thai curry from a food truck?
- Which customization options are essential, and which would slow the flow down?
- How much information do lunch-break customers need before submitting an order?
- What causes friction or errors in food truck ordering today?
- Which digital ordering entry points feel lowest-friction in a fast lunch context?
- What confirmation, pickup, and payment expectations do customers have after placing an order?
- How should dietary restrictions be handled without free-text input?
- What information do operators need to fulfill customized curry orders accurately and efficiently?

## Success Signals

- Users can complete a standard curry order in under two minutes.
- Users understand each customization step without staff explanation.
- Users can review and correct their order before submission.
- The flow prevents invalid or unsupported customizations.
- Staff can read and fulfill submitted orders without clarifying basic details.
- The interface remains usable on mobile screens in a rushed, public environment.
- The solution supports accessibility expectations for contrast, labels, tap targets, and keyboard/screen reader structure.

## Stage 01 Audit

- Problem clarity: Pass. The problem is specific enough to research while leaving the exact solution details open.
- Assumption labeling: Pass. Known facts, assumptions, and open questions are separated.
- Research readiness: Pass. Stage 02 has concrete research questions about customer behavior, operator friction, customization, dietary needs, and staff fulfillment.
