# The Village — PRD

## Original Problem Statement
Build a landing page for "The Village — A Single-Parent & Family Support Network" from the founder's concept PDF (The_Village_Single_Parent_Platform_Idea.pdf). Goals confirmed via Q&A: attract parents AND businesses/sponsors; full-story informational showcase; working full-stack waitlist (recommended by agent, accepted); warm editorial design at Awwwards level (user said "surprise me").

## User Personas
- **Single / struggling parents** — seeking practical help (laundry, rides, food, tutoring, employment support) without stigma.
- **Businesses & sponsors** — laundromats, grocers, salons, dentists, employers; want measurable community impact, not just ads.
- **Founder (Christina)** — single mother of three; the letter carries her authentic story.

## Core Requirements (static)
1. Hero: "A parent should not have to do everything alone." + "It takes a village." + dual CTA
2. The Village Exchange (points economy: Help / Share / Teach / Receive + live calculator)
3. 8 coordinated services (bento)
4. Founder letter (first person, signed Christina) — user-requested addition
5. Safety & verification (4 pillars + community trust note)
6. For businesses & sponsors (6 sponsor examples + measurable impact card)
7. Transformation flywheel (needing help → receiving → gaining ground → paying it forward)
8. Long-term vision (community center site plan, 6 rooms)
9. Dual-audience waitlist form → POST /api/waitlist, dup-email protection, count display
10. Dark footer — "NOBODY HAS TO DO IT ALONE."

## Architecture
- FastAPI backend (server.py): /api/waitlist (POST), /api/waitlist/count (GET), status checks; PyObjectId/BaseDocument per Mongo adherence; unique email index; DuplicateKeyError → friendly "already on the list".
- React frontend: React 19, Tailwind (terracotta/sage/ivory palette, Playfair Display + Plus Jakarta Sans + JetBrains Mono), framer-motion (masked hero reveal, scroll reveals, scroll-linked progress line, parallax), Lenis smooth scroll, sonner toasts.
- Custom SVG logo mark (two roofs + sun) used as favicon and nav/footer brand.

## Implemented (2026-10-08)
- All 10 sections + navbar + footer, all with data-testids.
- Waitlist backend with dedupe + counts; verified via curl and real UI submit.
- Test data removed after verification (count = 0, clean launch state).

## Backlog / Next (P0–P2)
- P0: Deploy; owner reviews letter wording on live site.
- P1: Admin panel to view/export waitlist signups; email confirmation on signup (Resend).
- P2: Points-economy simulator v2 with community-set rates; community-center blueprint interactivity; sponsor impact dashboard (live counters).
