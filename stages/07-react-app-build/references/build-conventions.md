# Build Conventions

## App Contract

Build a realistic prototype from approved wireframes and case study decisions. Do not invent unsupported features.

Name the app output folder `output/[project-slug]-app/` and the handoff file `output/[project-slug]-app-handoff.md`.

## Stack

Use `{{TECH_STACK}}` as the default stack. If unspecified, use React, Vite, and Tailwind.

## Design Constants

Create shared constants for:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Breakpoints

## Quality Floor

- Main user flow works locally.
- Empty, loading, success, and error states are represented when relevant.
- Layout is responsive.
- UI decisions match the design system.
- Accessibility level follows `{{ACCESSIBILITY_LEVEL}}`.
