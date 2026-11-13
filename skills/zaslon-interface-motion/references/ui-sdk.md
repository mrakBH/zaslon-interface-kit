# UI SDK: optional behavior layer

Reviewed source: https://github.com/vercel-labs/ui and https://ui-sdk.dev/ (13–14 November 2026).

The upstream README describes UI SDK as beta. `@ui-sdk/core` owns behaviors (focus, keyboard navigation, selection, dismissal, popups and drag/drop); adapters support React, Vue, Svelte, Solid and Web Components. This is not a catalog of finished branded layouts.

Before implementation, read current upstream docs for the exact primitive and installed version. For React the upstream installation example is `npm install @ui-sdk/react @ui-sdk/core`; its agent skill is `npx skills add vercel-labs/ui --skill ui-sdk`. These are optional commands for the user's project, not commands this skill runs automatically.

Decide by behavior: a plain link uses an anchor; a disclosure usually uses a button with expanded state; a compound combobox may justify a behavior library. Test focus recovery, Escape, outside-click dismissal, Arrow keys, selection and disabled state for the chosen primitive. Keep semantic DOM and SSR behavior.

ZASLON's current marketing-site redesign uses native controls, CSS and GSAP. It does not claim UI SDK runtime integration. This pack adds guidance for choosing and integrating UI SDK in projects where it is needed.

Upstream code is Apache-2.0 (verify at the pinned/current revision before copying). No upstream source code is bundled here. If you later redistribute it, preserve license, notices and modification attribution. Slidshift and Designbookmark are visual references, not sources of licensed reusable assets in this pack.
