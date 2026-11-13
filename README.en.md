# ZASLON · Interface Motion

**Less noise. Clearer hierarchy. Deliberate motion.**

[Русский](README.md) · [ZASLON](https://zelon.org/) · [Skill](skills/zaslon-interface-motion/SKILL.md)

Kalter's agent toolkit for original product-page composition, scoped React animation and accessible interaction behavior. Developed while redesigning ZASLON, with Slidshift and Designbookmark Motion as visual references.

## Install

```bash
npx skills add mrakBH/zaslon-interface-kit --skill zaslon-interface-motion
```

Or copy the skill folder into your agent's skills directory. A SKILL.md-compatible agent is required. The skill does not automatically install runtime dependencies.

For Claude Code:

```text
/plugin marketplace add mrakBH/zaslon-interface-kit
/plugin install zaslon-interface-kit@zaslon-interface
```

## Included

- A focused design-and-motion workflow.
- A scoped React/GSAP entry-animation hook with cleanup and reduced-motion handling.
- An optional UI SDK integration guide for keyboard, focus, selection and popup behavior.

You can also give your agent this repository URL and ask it to read the skill. Sharing a link provides context; it does not install software.

## Applied to ZASLON

| Before | After |
|---|---|
| ![Before](https://zelon.org/assets/interface-kit/home-before.jpg) | ![After](https://zelon.org/assets/interface-kit/home-after.jpg) |

[Case study (Russian)](https://zelon.org/blog/zaslon-motion-redesign-before-after/)

## Provenance and limits

An original ZASLON toolkit, not an official Vercel product or fork. UI SDK is a separate beta behavior library under Apache-2.0; its source is not bundled. The ZASLON marketing implementation uses CSS and GSAP, not the UI SDK runtime. Slidshift assets and copy are not included.

Original instructions and hook: MIT. Runtime dependencies retain their own licenses. No hooks, MCP services, secrets or hidden network calls. No unmeasured conversion or frame-rate guarantees.
