# Dentello Recreation — Design Direction

## Reference Ground Truth

This project is a faithful recreation of the provided Dentello Webflow landing page and screenshot. The reference overrides alternative stylistic directions. Preserve the reference's airy white canvas, small centered navigation, black editorial serif headlines, cobalt-aqua CTA buttons, asymmetric image compositions, generous vertical rhythm, and dark footer.

## Design Movement

Contemporary dental editorial minimalism: an intersection of Swiss-inspired white-space discipline, warm healthcare photography, and restrained Webflow-style motion.

## Core Principles

1. **Air and asymmetry:** use wide negative space and off-center compositions rather than dense centered cards.
2. **Human reassurance:** photography carries the emotional tone; copy stays concise, calm, and direct.
3. **Quiet contrast:** near-black serif headlines, small sans-serif labels, and a single bright aqua-blue action color.
4. **Motion with restraint:** sections reveal upward on scroll, cards lift slightly on hover, and large imagery moves with subtle parallax rather than spectacle.

## Color Philosophy

The page is intentionally mostly white so the clinic imagery and the aqua-blue CTA color do the emotional work. Use #fbfbfa as the base, #121212 for typography, #0aa8d9 / #21b3df for action states, pale aqua surfaces for callout cards, and #070707 for the closing footer.

## Layout Paradigm

Use a narrow editorial frame (max-width around 1180px) with alternating split sections, cropped photo strips, offset testimonial compositions, and a wide CTA ribbon. The top hero uses an asymmetric 2-column composition; services use a four-up image rail; care plans use three narrow columns; footer uses a multi-column utility layout.

## Signature Elements

- Tiny uppercase labels and micro metadata paired with large serif display typography.
- Aqua-blue rounded rectangle CTA buttons with a slight dark offset/shadow on hover.
- Cropped healthcare photography with thin white gutters and occasional pale-aqua information panels.

## Interaction Philosophy

Actions should feel immediate and tactile. Buttons use a 150–180ms transform/opacity transition, hover slightly brighter, and active scale to 0.97. Navigation anchors scroll smoothly. Service and plan cards lift no more than 5px. Mobile navigation collapses into a compact menu without changing the visual language.

## Animation

Use Framer Motion for page and section entrances, with IntersectionObserver-driven viewport reveals: opacity 0 to 1 and y 28px to 0 using a 0.7s cubic-bezier(0.23,1,0.32,1). Stagger image strips by 60ms. Add a slow 1–2% vertical parallax to major hero imagery on pointer/scroll where motion is allowed. Honor prefers-reduced-motion and disable parallax/reveals when requested.

## Typography System

Use **DM Serif Display** for h1–h3 and **Manrope** for body, nav, metadata, buttons, and prices. Headlines should use tight line-height around 0.94–1.02 and body copy should remain compact at 14–16px. Keep small labels uppercase with 0.12em tracking.

## Brand Essence

A calm, human-first dental practice for people who want expert care without clinical coldness; different because every interaction is composed like a reassuring editorial story. Personality: **warm, precise, quietly optimistic**.

## Brand Voice

Headlines are direct and compassionate. CTAs are specific and active. Microcopy sounds like a human clinic team, never like generic SaaS filler.

Example lines:

> Care that makes the next visit feel easier.

> Book your consultation and transform your smile.

## Wordmark & Logo

Use a compact abstract smile-and-spark mark beside the word Dentello. The mark should remain recognizable at small sizes; the wordmark is set in a modest sans-serif with a slightly heavier first syllable.

## Signature Brand Color

**Dentello Aqua — #0AA8D9**, used selectively for action, progress, and small moments of optimism.
