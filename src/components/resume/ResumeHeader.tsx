import { resumeProfile } from "@/data/resume";

export function ResumeHeader() {
  return (
    <section className="section-shell pt-6 md:pt-8">
      <div className="resume-panel fade-up p-7 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <span className="status-pill">{resumeProfile.status}</span>
            <h1 className="mt-6 font-display text-5xl tracking-[-0.04em] text-text md:text-7xl">
              {resumeProfile.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-300 md:text-xl">{resumeProfile.title}</p>

            <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
              <p>{resumeProfile.location}</p>
              <a href={`mailto:${resumeProfile.email}`} className="transition-colors hover:text-accent">
                {resumeProfile.email}
              </a>
              <a href={resumeProfile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                github.com/amannaryal5-art
              </a>
              <a href={resumeProfile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                linkedin.com/in/aman-naryal-608034221
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
