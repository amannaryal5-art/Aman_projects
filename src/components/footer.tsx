import { developer } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="section-shell scroll-mt-24 pb-10 pt-8 md:pb-12">
      <div className="fade-up delay-4 grid gap-6 rounded-[1.5rem] border border-hairline bg-graphite-900 px-6 py-6 text-sm text-graphite-400 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div className="space-y-3">
          <p className="font-display text-2xl text-graphite-100">{developer.name}</p>
          <a
            href={`mailto:${developer.email}`}
            className="block transition-colors hover:text-spark"
          >
            {developer.email}
          </a>
          <a
            href={`tel:+91${developer.phone}`}
            className="block transition-colors hover:text-spark"
          >
            {developer.phone}
          </a>
          <a
            href={developer.github}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-spark"
          >
            github.com/amannaryal5-art
          </a>
          <a
            href={developer.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-spark"
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

