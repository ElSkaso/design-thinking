# Project Brief: Curry Cruiser Revised

## Project Title

Curry Cruiser Revised

## Project Slug

curry-cruiser-revised

## Raw Problem or Idea

Design a digital food order customization solution for a Thai curry food truck. Customers open the ordering experience, customize their curry using predefined options, and submit an order without using free-text fields. QR-code access may be used, but it is not mandatory. The core goal is reducing ordering friction for customers and operational friction for Curry Cruiser staff.

## Target Users

- Primary customers: food truck customers who want to place a Thai curry order quickly, confidently, and with minimal back-and-forth.
- Secondary users: Curry Cruiser staff who need clear, standardized orders they can prepare accurately during busy service windows.

## Context and Constraints

- The ordering experience should support Thai curry customization through predefined choices.
- Free-text fields should be avoided to reduce ambiguity, staff interpretation work, and unsupported requests.
- QR-code access is allowed as an entry point but should not be treated as a required solution constraint.
- The experience should be suitable for a responsive web ordering flow unless later research identifies a better platform.
- The workspace default disables the optional app build stage, so this run should prioritize UX case study artifacts unless explicitly reopened for implementation.

## Known Facts

- Curry Cruiser is a Thai curry food truck concept.
- Customers need a way to customize curry orders.
- Orders should be submitted using predefined options rather than free-text input.
- The intended outcome is lower friction for both customers and staff.
- QR-code access is a possible access method, not a mandatory requirement.

## Assumptions

- Current ordering creates friction because customers must communicate choices verbally, manually, or through unclear channels.
- Staff benefit from standardized order structures because they reduce clarification, interpretation, and preparation errors.
- Customers can complete predefined customization flows faster than open-ended ordering when options are clear.
- The menu has repeatable customization categories such as curry type, protein, spice level, rice/noodle/base, add-ons, and pickup details.
- Customers may be ordering in line, near the truck, or shortly before pickup, often under time pressure.

## Open Questions

- What customization options does Curry Cruiser actually offer, and which choices are operationally feasible?
- Where does ordering friction happen most: menu comprehension, customization, payment, pickup timing, staff handoff, or order confirmation?
- Are customers expected to order before arrival, at the truck, or both?
- Does Curry Cruiser need payment inside the ordering experience, or only order submission?
- What information do staff need on each ticket to prepare orders accurately?
- What edge cases must be handled without free text, such as allergies, sold-out items, substitutions, or special requests?
- What devices and contexts are most common for customers using the flow?

## Desired Outcomes

- Customers can understand available curry options and submit a complete order with minimal hesitation.
- Staff receive structured orders that are easy to scan, prepare, and verify.
- The ordering flow reduces clarification loops and unsupported customization requests.
- The solution preserves operational simplicity for a small food truck environment.
- The case study clearly shows how research shaped the order customization model.

## Research Questions

- How do customers currently decide what to order from food trucks, especially when customization is involved?
- Which parts of a curry order must be customizable, and which should remain fixed to protect kitchen speed and consistency?
- What wording, grouping, and sequencing help customers complete predefined customization choices confidently?
- What order information do food truck staff need at a glance during peak service?
- How do QR-code ordering flows affect customer adoption, line behavior, and staff workload in food truck contexts?
- What failure states are most important to design for, such as incomplete orders, unavailable items, or unclear pickup timing?

## Success Signals

- Customers can complete a valid customized curry order without free-text input.
- Customers understand the available options before submission.
- Staff can read submitted orders without needing extra clarification.
- The flow reduces avoidable decision friction while keeping customization meaningful.
- Research artifacts in Stage 02 can validate or challenge the assumed customization categories, staff needs, and access method.

