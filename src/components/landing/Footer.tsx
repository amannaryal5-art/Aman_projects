import { landingProfile } from "@/data/products";

export function Footer() {
  return (
    <footer className="section-shell pb-12 pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-hairline font-mono text-xs text-graphite-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-spark shadow-spark-sm" />
          <span className="text-graphite-300 font-medium">{landingProfile.name}</span>
          <span>— Full Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={landingProfile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-spark transition-colors"
          >
            GitHub
          </a>
          <a
            href={landingProfile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-spark transition-colors"
          >
            LinkedIn
          </a>
          <span>&copy; {new Date().getFullYear()} Aman Naryal</span>
        </div>
      </div>
    </footer>
  );
}

