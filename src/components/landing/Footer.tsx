import { landingProfile } from "@/data/products";

export function Footer() {
  return (
    <footer id="contact" className="section-shell scroll-mt-24 pb-10 pt-8 md:pb-12">
      <div className="fade-up delay-4 grid gap-6 rounded-[1.5rem] border border-white/10 bg-panel-soft px-6 py-6 text-sm text-slate-400 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div className="space-y-3">
          <p className="font-display text-2xl text-text">{landingProfile.name}</p>
          <a
            href={`mailto:${landingProfile.email}`}
            className="block transition-colors hover:text-accent"
          >
            {landingProfile.email}
          </a>
          <a
            href={landingProfile.github}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-accent"
          >
            github.com/amannaryal5-art
          </a>
          <a
            href={landingProfile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-accent"
          >
            linkedin.com/in/aman-naryal-608034221
          </a>
        </div>

        <div className="flex items-end md:justify-end">
          <p>&copy; 2026 Aman Naryal</p>
        </div>
      </div>
    </footer>
  );
}
