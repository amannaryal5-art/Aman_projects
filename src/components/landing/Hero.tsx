import Link from "next/link";
import { landingProfile } from "@/data/products";

export function Hero() {
  return (
    <section className="section-shell relative pt-8 md:pt-12">
      <div className="hero-grid fade-up">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel px-6 py-10 shadow-hero md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,255,71,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />

          <div className="relative z-10 max-w-3xl">
            <span className="status-pill">Products Hub</span>
            <h1 className="mt-8 font-display text-5xl tracking-[-0.04em] text-text sm:text-6xl md:text-8xl">
              {landingProfile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {landingProfile.headline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/resume" className="button-primary">
                View Resume
              </Link>
              <a
                href={landingProfile.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span>{landingProfile.status}</span>
              <span className="px-2 text-slate-600" aria-hidden>
                &middot;
              </span>
              <span>{landingProfile.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
