import { resumeProfile } from "@/data/resume";

export function ResumeHeader() {
  return (
    <section className="section-shell pt-6 md:pt-8">
      <div className="resume-panel fade-up p-7 md:p-10 border border-hairline bg-graphite-900/80 rounded-2xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-spark/30 bg-spark/10 font-mono text-xs text-spark">
              {resumeProfile.status}
            </span>
            <h1 className="mt-6 font-display text-5xl tracking-[-0.04em] text-graphite-100 md:text-7xl">
              {resumeProfile.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-graphite-300 md:text-xl">{resumeProfile.title}</p>

            <div className="mt-8 grid gap-3 text-sm text-graphite-400 sm:grid-cols-2">
              <p>{resumeProfile.location}</p>
              <a href={`mailto:${resumeProfile.email}`} className="transition-colors hover:text-spark">
                {resumeProfile.email}
              </a>
              <a href={`tel:+91${resumeProfile.phone}`} className="transition-colors hover:text-spark">
                {resumeProfile.phone}
              </a>
              <a href={resumeProfile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-spark">
                github.com/amannaryal5-art
              </a>
              <a href={resumeProfile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-spark">
                linkedin.com/in/aman-naryal-608034221
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

