# App Handoff: Curry Cruiser

## Location

React app source: `stages/07-react-app-build/output/curry-cruiser-app/`

Refinement log: `stages/07-react-app-build/output/curry-cruiser-app-refinements.md`

## Stack

- React
- Vite
- TypeScript
- Tailwind
- Frontend-only prototype

## Implemented Scope

- Frontend-skill UI refactor with calmer surface hierarchy, stronger typography, fewer routine borders, and clearer workflow states
- Customer menu/start screen refined as an active curry menu, not a filter/dashboard surface
- Flexible digital entry language without QR dependency
- Curry selection with sold-out state
- Customization visually attached to the selected dish, with predefined groups and no free-text fields
- Add dish to cart returns to dish selection, keeping the user in the repeatable selection loop
- Multi-dish cart before final order confirmation
- Dietary/allergen badges and caution language
- Sticky order summary
- Editable/removable cart items before final confirmation
- Operator-readable ticket preview for every cart item
- Simulated submission loading and failure states
- Order received screen with order number
- Order state controls: Confirmed, In progress, Finished
- Mobile-first responsive layout
- Shared design constants in `src/designTokens.ts`

## Run Locally

```bash
cd stages/07-react-app-build/output/curry-cruiser-app
npm install
npm run dev
```

Default dev URL:

```text
http://127.0.0.1:5173
```

Verified on April 27, 2026: the dev server responded with HTTP 200 at this URL.

## Build

```bash
cd stages/07-react-app-build/output/curry-cruiser-app
npm run build
```

Verified on April 27, 2026: `npm run build` completed successfully.

Verified on April 28, 2026: `npm run build` completed successfully after the curry-flow refinement.

## Deployment Notes

The app is prepared as a static Vite app and can be deployed to Vercel. No backend, auth, or payment integration is included.

## Validation Notes

Recommended test path:

1. Choose Green Curry.
2. Keep jasmine rice, tofu, medium spice, and herbs.
3. Confirm the customization and return to dish selection.
4. Add another dish or move forward to the cart.
5. Confirm the full order.
6. Confirm the order number and state.
7. Switch the order state from Confirmed to In progress to Finished.

Verified browser flow on April 27, 2026: added two dishes to one cart, manually moved to cart, confirmed the order, and reached the order status screen with both dishes.

Verified after frontend-skill refactor: mobile viewport screenshot reviewed, two-dish cart flow passed, and browser console returned no errors or warnings.

Verified after curry-flow refinement on April 28, 2026 at `http://127.0.0.1:5174/`: selected Green Curry, added it to cart, returned to dish selection, added Red Curry, opened cart manually, edited one dish, removed and re-added a dish, confirmed the full order, verified order number `#26`, switched state to Finished, and saw no browser console warnings or errors.

## Stage 07 Audit

- Scope fidelity: App matches the Stage 05 wireframes and Stage 06 prototype scope.
- Build health: Dependencies installed and production build completed successfully.
- UX quality: Multi-dish selection loop, cart confirmation, order number, order state, calmer visual hierarchy, responsive behavior, and key states are represented; localhost smoke check returned HTTP 200.
