# App Refinements: Curry Cruiser

## Purpose

Document adjustments made to the Curry Cruiser Stage 07 app after the original app build.

## Entry Format

```md
### YYYY-MM-DD — [short refinement name]

- Trigger:
- Changed:
- UX reason:
- App files:
- Verification:
- Open follow-up:
```

## Entries

### 2026-04-29 — Cart action controls

- Trigger: The cart needed a sticky bottom confirmation section, icon-only edit/delete controls, no "Truck ticket preview · Dish xyz" label, and full-width icon controls inside each cart card.
- Changed: Moved cart confirmation actions into a fixed bottom bar, replaced text edit/remove actions with Material Symbols edit/delete icon buttons, removed the truck-ticket preview label, and let the cart item icon buttons split the full action row width.
- UX reason: Cart actions now read as clear controls attached to each dish while the full-order confirmation remains persistently available at the bottom.
- App files: `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: added Green Curry, opened cart, confirmed the preview label is absent, edit/delete icon buttons are present, and the sticky cart confirmation actions remain available.
- Open follow-up: None.

### 2026-04-29 — Bottom CTA layer chrome

- Trigger: The "Ready to add" section should visually match the top Back section while preserving the primary add CTA.
- Changed: Restyled the fixed bottom ready-to-add area as edge-to-edge layer chrome with border, white background, and blur treatment; kept the "Add dish to cart" / "Update dish" button as a primary CTA.
- UX reason: The overlay now has consistent top and bottom controls while preserving a clear primary action.
- App files: `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: Green Curry opens the overlay and the bottom bar contains the primary "Add dish to cart" button. Browser console showed no warnings or errors.
- Open follow-up: None.

### 2026-04-29 — Customization overlay layer

- Trigger: The customize page needed to behave as a layer on top of the menu rather than another page with the app header.
- Changed: Moved customization into a full-screen overlay layer, removed the app header while customizing, added a full-width fixed Back control at the top, and removed the mid-screen Cancel button.
- UX reason: Back now functions as the single cancel path, and the customization task gets a focused layer without duplicate navigation chrome.
- App files: `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: Green Curry card opens the customization layer, the Curry Cruiser header is absent, Cancel is absent, Back is present and returns to Currys, and browser console showed no warnings or errors.
- Open follow-up: None.

### 2026-04-29 — Curry card as selection control

- Trigger: Page 1 no longer needed a separate CTA; pressing the dish card itself should open customization.
- Changed: Removed the visible curry-card CTA buttons and made each available curry card the interaction target with click and keyboard support. Sold-out cards remain non-interactive.
- UX reason: The card itself is the semantic selection object, reducing duplicated action surfaces and making dish selection more direct.
- App files: `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: confirmed no `Add to cart` buttons remain on Page 1, available curry cards expose button semantics, Green Curry card opens customization, and browser console showed no warnings or errors.
- Open follow-up: Consider whether the accessible card name should be shortened if screen-reader testing finds it too verbose.

### 2026-04-29 — Dish selection semantic cleanup

- Trigger: Page 1 and Page 2 needed clearer semantic distinction between curry selection and dish customization.
- Changed: Renamed Page 1 heading from "Choose a curry" to "Currys", removed the redundant Page 2 heading/instruction area, made the Page 2 top panel carry the same curry card information as Page 1, and changed the add/update dish action from sticky to fixed bottom placement.
- UX reason: The selected curry should remain the semantic anchor while users configure the dish, and the final dish action should stay persistently available.
- App files: `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: confirmed the "Currys" heading, Page 2 curry information, removed redundant text, and fixed bottom add action. Browser console showed no warnings or errors.
- Open follow-up: Validate the fixed bottom action on a narrow physical mobile viewport if more controls are added.

### 2026-04-29 — Menu action simplification

- Trigger: Page 1 needed less process explanation and a clearer cart access pattern.
- Changed: Added Material Symbols Outlined, removed the top step indicator, removed "Active menu" and explanatory process copy, changed curry card CTAs to icon plus "Add to cart", removed the refresh menu button, and moved cart access to a fixed icon-only shopping cart FAB on the bottom right.
- UX reason: The menu should feel like an active ordering surface, with dish cards as the primary action and cart access always available without adding extra page chrome.
- App files: `output/curry-cruiser-app/index.html`, `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/`: confirmed the simplified menu copy, icon CTA, disabled empty-cart FAB, adding Green Curry, returning to menu, and opening the cart via the FAB. Browser console showed no warnings or errors.
- Open follow-up: Check final visual spacing on narrow mobile after any further CTA or card changes.

### 2026-04-29 — Cart FAB sizing and fixed position

- Trigger: The cart FAB needed size and position tuning, then needed to stop shifting while scrolling.
- Changed: Set the cart FAB to 80px, placed it 32px from the bottom and right, removed translate movement on hover/press, and kept it fixed with stable offsets.
- UX reason: The cart control should remain visually anchored and predictable while customers browse the curry menu.
- App files: `output/curry-cruiser-app/src/styles.css`.
- Verification: `npm run build` passed.
- Open follow-up: None.

### 2026-04-28 — Ordering flow clarification

- Trigger: The order, review, and truck cards felt like filters rather than a clear ordering flow.
- Changed: Refined the app so users choose a curry, customize it as part of selection, add the dish to a multi-dish cart, return to dish selection, manually open the cart, confirm the full order, and receive an order number with state.
- UX reason: The app needed to match the intended food-truck ordering loop and make multi-dish ordering explicit.
- App files: `output/curry-cruiser-app/src/App.tsx`, `output/curry-cruiser-app/src/styles.css`, `output/curry-cruiser-app-handoff.md`.
- Verification: `npm run build` passed. Browser-tested at `http://127.0.0.1:5174/` with two dishes, edit, remove, re-add, full order confirmation, order number, and order state changes. Browser console showed no warnings or errors.
- Open follow-up: Continue visual and interaction refinements only if they improve the primary ordering loop.
