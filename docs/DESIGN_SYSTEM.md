# Design system

## Concept

A researcher's notebook meets a cinematic digital exhibition. Observation is the link between atmospheric research, software and visual attention.

## Tokens

Porcelain #f2f4f2; ink #182725; mineral #426963; muted #52635f; mist #dce5e1; night #102926. Accent use is restrained. Text contrast must meet WCAG AA; focus uses a two-pixel mineral outline with offset. Dark-surface text uses porcelain and pale sage.

## Typography and hierarchy

Newsreader variable (OFL) for display and major headings: fluid 64–144px hero, 42–80px sections, 32–60px project titles. Manrope variable (OFL) for body 16–19px, line-height 1.65, and navigation 14px. No remote font requests; latin WOFF2 only, font-display swap, two preloads. Serif creates reflective voice while the sans keeps methods legible. Text blocks max 65ch.

## Grid and spacing

Desktop twelve-column logic with 48px outer gutter and 32px gap, max-width 1440px. Opening uses a 55/45 split. Research studies alternate a large visual and offset narrative, not repeated cards. Scale: 8, 12, 16, 24, 32, 48, 64, 96, 144px. Align titles and reading columns; preserve deliberately unequal column widths.

## Responsive

At 900px reduce gutters to 28px; at 640px use 20px and single-column reading. Hero stacks identity then visual, never clips text. Mobile navigation is a native disclosure with visible links without JS. Touch targets at least 44px. No horizontal page scrolling at 375px; tables can scroll inside their container.

## Surfaces and imagery

Open surfaces, occasional tonal panels and dark research plates; no ornamental shadows. Original SVG contour artwork is an illustration, not measured data. Charts are original presentations of cited public numeric findings with units, zero baselines, textual values and captions. No borrowed Shanghai figures because redistribution permission is unconfirmed. Photography has an honest empty archive architecture until real images are supplied.

## Navigation and access

Home, Research, Projects, About, Photography; contact remains in footer and direct page. Active page state uses aria-current. Native links, skip link, semantic sections, visible focus, logical headings. No content hidden behind animation or JS. All controls have accessible names. Native details supply methodology disclosure. Motion preference is respected live. No custom cursor or scroll interception.
