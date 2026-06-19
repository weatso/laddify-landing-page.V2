# LADDIFY: COMPREHENSIVE ENGINEERING & PRODUCT REQUIREMENTS DOCUMENT (PRD) v1.0

## 1. SYSTEM ORCHESTRATION INSTRUCTIONS FOR GEMINI 3.1 PRO (ANTIGRAVITY)
**Role:** You are an Elite Staff-Level Frontend Architect, CRO Expert, and UI/UX Engineer.
**Task:** Generate production-ready, highly optimized, and accessible Next.js code for the "LADDIFY" project based on this document.
**Constraint Checklist & Confidence Score:** 
Before generating any code, you must internally parse these constraints:
1.  **NO DARK MODE.** The UI is strictly Light-Glassmorphism.
2.  **FONT:** Strictly use the local custom font `Gerhaus`.
3.  **HOSTING:** Target environment is Hostinger (Standard Node.js/VPS). Avoid Vercel-exclusive edge features (like Vercel KV or Edge Middleware) unless polyfilled.
4.  **ANIMATION:** Strict separation of concerns (Lenis for scroll, GSAP for scroll-triggers, Framer Motion for layout/micro-interactions).

---

## 2. BUSINESS LOGIC & POSITIONING
*   **Brand:** LADDIFY
*   **Tagline:** Scale It, Laddify It.
*   **Target Market:** Small to Medium-Sized Enterprises (UMKMs), Local F&B, Retail, and Startups. DO NOT target large international corporations. The language should be premium yet approachable.
*   **Primary Conversion Goal:** Drive traffic to a WhatsApp Consultation CTA.
*   **Psychological Framework:** Utilize Loss Aversion (Problem Section), Authority Bias (Social Proof Marquee), and Decoy Effect (Pricing Toggle).

---

## 3. TECH STACK & CORE CONFIGURATION
*   **Framework:** Next.js 15 (App Router). Strict `React Server Components (RSC)` by default. Use `"use client"` only at the leaf nodes (interactive components).
*   **Language:** TypeScript (Strict mode enabled, no `any` types).
*   **CSS Engine:** Tailwind CSS v4.
*   **UI Primitives:** Shadcn UI (Radix UI under the hood).
*   **Animation Ecosystem:**
    *   `@studio-freight/react-lenis` (Global smooth scroll wrap).
    *   `gsap` & `ScrollTrigger` (For reveal animations on scroll).
    *   `framer-motion` (For interactive UI, toggle states, and floating 3D spheres).
*   **CMS:** Sanity CMS (configured via `sanity/client` for fetching).

---

## 4. STRICT DESIGN SYSTEM & CSS TOKENS
### A. Typography Setup
*   **Font Family:** `Gerhaus` (Local Custom Font).
*   **Next.js Implementation Rule:** Must be imported in `src/app/layout.tsx` using `next/font/local` with variable CSS custom properties.
```typescript
    import localFont from 'next/font/local';
    const gerhaus = localFont({
      src: [
        { path: '../../public/fonts/Gerhaus-Regular.woff2', weight: '400', style: 'normal' },
        { path: '../../public/fonts/Gerhaus-SemiBold.woff2', weight: '600', style: 'normal' },
        { path: '../../public/fonts/Gerhaus-Bold.woff2', weight: '700', style: 'normal' },
      ],
      variable: '--font-gerhaus',
    });
    ```

### B. Color Palette
*   **Background:** `#F8F9FA` or `#FAFAFC` (with an absolute positioned SVG noise overlay layer set to 3-5% opacity, `mix-blend-mode: overlay`).
*   **Card Background:** `#FFFFFF` (Solid white with opacity tweaks for glass effect).
*   **Text Primary:** `#1D1D1F` (Apple Dark Gray).
*   **Text Secondary:** `#86868B`.
*   **Brand Gradient:** `#FF73C3` (Pink) -> `#7B4DFF` (Purple) -> `#20D6FF` (Cyan).

### C. The "Apple-Glass" Core Component Class
All cards, bento grids, and containers MUST inherit this visual logic. Do NOT use heavy `shadow-lg` or `shadow-xl`.
*   **Tailwind Utilities:** `bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)] rounded-2xl`

---

## 5. DIRECTORY & ARCHITECTURE STRUCTURE
Initialize the repository with this exact structure:
```
text
/src
  /app
    (routes)
      /page.tsx               # Home Funnel
      /services/page.tsx
      /pricing/page.tsx
      /portfolio/page.tsx
      /case-studies/page.tsx
      /blog/page.tsx
    layout.tsx                # Lenis Provider, Local Font Wrapper, Navbar, Footer
    globals.css               # Tailwind v4 directives, Noise texture CSS
  /components
    /ui                       # Shadcn Primitives (Buttons, Accordion, etc.)
    /marketing                # Custom Sections (Hero, Marquee, PricingToggle)
    /animations               # Framer Motion Wrappers, GSAP Hooks
    /layout                   # Header, Footer, NoiseOverlay
  /lib
    utils.ts                  # cn (clsx + tailwind-merge)
    sanity.ts                 # Sanity client config
  /hooks
    use-scroll-trigger.ts     # Custom GSAP hooks
/public
  /fonts                      # Gerhaus.woff2 files
  noise.svg                   # Background noise texture

  6. HOME PAGE (SALES FUNNEL) COMPONENT SPECIFICATIONS
The Home Page (/src/app/page.tsx) must flow in this exact order:

Section 1: Hero (<HeroSection />)
Visuals: min-h-[90vh]. Background contains "Orbit Circles" (SVG rotating duration-10000) and 3-5 "Floating Spheres" (animated slowly on the Y-axis via Framer Motion).

Copy: Headline: "Scale Your Brand, Laddify It." Subheadline targets UMKM pain points.

Action: Primary Button ("Get Free Consultation") routed to WhatsApp link.

Section 2: Trust / Social Proof (<ClientMarquee />)
Behavior: Auto-scrolling infinite loop.

Visuals: Logos are grayscale opacity-50 by default. On hover: grayscale-0 opacity-100 transition-all.

Section 3: Problem Identification (<PainPoints />)
Psychology: Loss Aversion. Headline: "Still Struggling with Social Media?"

Behavior: Use GSAP ScrollTrigger to stagger fade-up 6 glassmorphism cards (e.g., "Inconsistent posting", "Low engagement").

Section 4: Solution / Services (<BentoGridServices />)
Layout: CSS Grid / Tailwind Grid. Asymmetrical "Bento Box" layout.

Content: IG/TikTok Management, Content Design, Video Editing, Copywriting.

Interaction: On card hover, trigger a subtle scale-[1.02] and slightly increase the blur/shadow using Framer Motion.

Section 5: Pricing Strategy (<PricingSection />)
Psychology: Decoy Effect & Anchoring.

State Management: Create a client component <PricingToggle />. Use useState<'basic' | 'premium'>.

Animation: Wrap the card map in Framer Motion's <AnimatePresence mode="wait"> to smoothly transition between the 3 Basic packages and 3 Premium packages.

Data Structure:

Basic: Elite (Rp 2.4M), Core (Rp 3.6M), Prime (Rp 4.8M).

Premium: Elite (Rp 3.6M), Core (Rp 7.2M), Prime (Rp 10.8M).

The Decoy: The middle card of each tier MUST have a subtle absolute positioned pseudo-element border using the Brand Gradient and a "Most Popular" badge.

Section 6: Objections / FAQ (<FAQSection />)
Component: Use Shadcn UI <Accordion>.

Styling: Clean lines, border-b only. No boxy backgrounds for the accordion items.

Section 7: Final Push (<FinalCTA />)
Visuals: Massive padding (py-32). Centered content. Background takes a very light, diffuse radial gradient from the brand colors (opacity 5%) at the center.

Button: WhatsApp CTA with a Framer Motion pulse animation loop.

7. SANITY CMS INTEGRATION OUTLINE
Set up schemas in Sanity (separate studio folder) for the following:

portfolio: Images (Before/After), Client Name, Category (F&B, Retail).

caseStudy: Title, Client Name, Challenge, Solution, Results (Metrics like +40% Growth), Rich Text Body.

blog: SEO Title, Slug, Featured Image, Content, Publish Date.

8. BUILD & DEPLOYMENT INSTRUCTIONS
Ensure next.config.mjs is configured to output a build compatible with Hostinger's standard Node environment.

Ensure all SVG assets (like noise and orbit lines) are optimized and passed correctly to prevent hydration mismatch.

Strictly check that custom fonts (Gerhaus) pre-load correctly to prevent Cumulative Layout Shift (CLS).