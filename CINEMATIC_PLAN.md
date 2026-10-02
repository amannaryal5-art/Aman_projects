# CINEMATIC ARCHITECTURE PLAN: "A Film in Seven Scenes"

## 1. Vision & Core Philosophy
Transform the developer portfolio into a cohesive, cinematic scroll-driven journey where **code meets storytelling, design meets motion, and every scroll feels like a scene**.
- **WebGL Role**: Atmosphere, spatial depth, perspective cues, mood lighting, and cinematic framing. Never renders DOM text.
- **DOM Role**: Semantic, accessible (WCAG AA), SEO-safe, keyboard-navigable content and interactive forms.
- **Performance**: High fidelity on desktop GPUs, graceful degradation on integrated graphics (60fps target), respects `prefers-reduced-motion`.

---

## 2. Palette & Design Tokens
Strict adherence to the luxury Graphite & Lime Spark family:
- **Graphite Scale**:
  - `graphite-950`: `#111317` (deepest shadows, letterbox bars)
  - `graphite-900`: `#181A20` (vignettes, input fields)
  - `graphite-800`: `#23262F` (page base canvas)
  - `graphite-700`: `#2E323E` (cards, floating glass panels)
  - `graphite-600`: `#3B404F` (borders, muted dividers)
  - `graphite-400`: `#9499A8` (secondary text, labels)
  - `graphite-300`: `#B9BCC6` (subheadings, descriptions)
  - `graphite-100`: `#F1F2F4` (primary display text)
- **Lime Spark Tokens**:
  - `spark`: `#B6FF2E` (brand accent, cursor core, primary action)
  - `spark-hover`: `#C4FF57` (active states, button hover)
  - `spark-deep`: `#8DC91D` (subtle shadows, borders)
  - `spark-soft`: `#D4FF85` (gentle glows, particle accents)
- **System**:
  - `hairline`: `rgba(255, 255, 255, 0.08)`
  - `error`: `#FF7A7A`
  - Rule: Spark occupies <= 12% of screen area. Text on lime is always `graphite-950`.

---

## 3. Motion Architecture & Ownership
1. **Lenis**: Owns inertial smooth scrolling.
2. **GSAP ScrollTrigger**: Owns scroll choreography (scrubbed text masks, pinned card deck, sticky timeline rail).
3. **React Three Fiber (R3F)**: Owns 3D scene camera rig, procedural geometry, lighting, and ambient particle physics.
4. **Framer Motion**: Reserved strictly for local component micro-interactions (magnetic buttons, card hover glare, modal transitions).

---

## 4. The Seven Scenes
- **Scene 1: Prologue / Home (`#home`)**
  - Camera: Frontal close-up on wireframe nested icosahedra ("The Spark").
  - Environment: Soft top spotlight cone, drifting ambient dust.
  - DOM: Full-bleed hero, 2-line mask reveal title, mono micro-label (`SCENE 01 // PROLOGUE`), magnetic CTA buttons.
- **Scene 2: The Architect / About (`#about`)**
  - Camera: Tilts downward and drifts slightly right; icosahedron expands into orbital wireframe rings.
  - DOM: 2-line statement heading, scrubbed word-by-word paragraph highlight, interactive auto-typing code terminal.
- **Scene 3: The Matrix / Skills (`#skills`)**
  - Camera: Pulls back; floating instanced octahedra cluster into constellation patterns.
  - DOM: Asymmetric 12-column bento grid, cursor-following border spotlight, category headers.
- **Scene 4: The Journey / Experience (`#experience` & `#education`)**
  - Camera: Vertical tracking shot through luminous spatial ring gates.
  - DOM: Continuous 3-act chronological timeline (Act I: Work -> Act II: Education -> Act III: Certifications) with glowing fill line and category shape markers (circle/ring/diamond).
- **Scene 5: The Works / Projects (`#projects`)**
  - Camera: Settles over a reflective perspective grid floor.
  - DOM: Sticky stacking card deck (ThreadsApp & CRIE v3.0). Cards slide into view, earlier cards scale back to 0.94 and dim to 0.55 opacity. Generated dynamic SVG cover art.
- **Scene 6: Transmission / Contact (`#contact`)**
  - Camera: Particles converge toward a central point of light.
  - DOM: Left-aligned layout, glassmorphic contact form panel, security-verified form inputs, back-to-top trigger.

---

## 5. Global Overlays & Cinematic Polish
- **Preloader**: High-tech letterbox opening with 000-100 counter and lime progress hairline.
- **Scene HUD**: Bottom-left active scene name (`ACT 01 // PROLOGUE`), bottom-right scroll percentage.
- **Custom Cursor**: Precision dot with lagging ambient ring (hidden on touch/pointer-coarse devices).
- **Grain & Vignette**: Lightweight SVG noise filter and subtle perimeter darkness.
- **Floating Navbar**: Minimal graphite-800 pill with lime scene indicator dot.

---

## 6. Execution Roadmap & Checklist
- [x] Phase 0: Repository audit, verification, and architecture plan
- [ ] Phase 1: Core setup (Dependencies, Tailwind tokens, CSS vars, Motion config, Lenis + GSAP setup, HUD, Cursor, Preloader)
- [ ] Phase 2: WebGL Scene Engine (SceneCanvas, CameraRig, 3D Spark, Dust Cone, Rings, Grid floor)
- [ ] Phase 3: Scene-by-Scene DOM upgrade (Full bleed Hero, About scrub, Skills bento, Continuous Experience timeline, Stacking Projects deck, Contact realignment)
- [ ] Phase 4: Production verification, TypeScript strict check, build test, and git commit
