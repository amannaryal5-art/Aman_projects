import Image from "next/image";
import Link from "next/link";
import { landingProfile } from "@/data/products";

export function Hero() {
  return (
    <section className="section-shell relative pt-8 md:pt-12">
      <div className="hero-grid fade-up">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel px-6 py-10 shadow-hero md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,255,71,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
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

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-6 bottom-3 h-28 w-28 rounded-full bg-white/8 blur-3xl" />

              <div className="relative rounded-[2.2rem] border border-white/10 bg-[#111111] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.9rem] border border-white/10 bg-[#151515] p-3">
                  <div className="grain-overlay relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#efefef]">
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-[#8f8d88]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
                      Available
                    </div>

                    <div className="absolute bottom-5 left-4 z-10 max-w-[82%] rounded-[1.7rem] border border-white/10 bg-[#57575c]/82 px-4 py-3 backdrop-blur-md">
                      <p className="font-display text-lg tracking-[-0.03em] text-white">
                        Full Stack Developer
                      </p>
                      <p className="text-sm text-slate-200">
                        Clean builds, real products, sharp execution.
                      </p>
                    </div>

                    <div className="pointer-events-none absolute left-2 top-1/2 z-10 h-14 w-[3px] -translate-y-1/2 rounded-full bg-black/12" />

                    <Image
                      src="/aman-portrait.jpeg"
                      alt="Aman Naryal profile screenshot"
                      width={900}
                      height={1200}
                      priority
                      className="h-[460px] w-full object-cover object-top sm:h-[540px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
