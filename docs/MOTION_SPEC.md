# Motion specification

## Architecture decision

Reviewed GSAP/ScrollTrigger official docs (https://gsap.com/docs/v3/), Motion (https://motion.dev/docs), MDN View Transitions, and Astro static deployment docs. GSAP 3.15.0 is the only JS motion dependency; native CSS handles feedback and cross-document transitions. No React, Motion runtime, Three.js or smooth-scrolling library. Native scroll is preserved.

## Opening

Identity establishes immediately; a 900ms precision clip reveal opens the generative contour plate. Two text lines enter over 700ms with an 80ms separation. No loading screen, assets awaited or time gate. Markup starts readable; JS animates only after setup succeeds.

## Scroll

On desktop fine pointers only, the opening plate drifts at most 24px as the hero exits, with ScrollTrigger scrub 0.6. No pinning. A research visual frame changes its image scale very slightly on pointer hover (350ms). Sections themselves stay visible, avoiding repetitive fade-ups.

## Feedback and navigation

Links underline over 180ms; project arrows shift 4px, 220ms. Native details expose methods immediately. Mobile menu is an ordinary disclosure. Supported cross-document view transitions crossfade 180ms; unsupported browsers navigate normally. No artificial exit delay.

## Easing and fallback

Power3 out for opening; power1 in/out for scrub; cubic-bezier(.2,.7,.2,1) for UI. Animate transforms, opacity and clip-path only. prefers-reduced-motion disables entrance, scroll drift and view transitions, and shows final states. Narrow/touch devices have no parallax. No continuous ambient animation, so no pause control is necessary. MatchMedia reverts GSAP work when preferences change.
