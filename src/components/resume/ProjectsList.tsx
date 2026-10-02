import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/resume";

export function ProjectsList() {
  return (
    <section className="section-shell pb-6 pt-10 md:pb-8 md:pt-14">
      <div className="fade-up delay-3 mb-8">
        <p className="section-kicker">Projects</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
          Shipped work across real full stack products.
        </h2>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.title} className="resume-panel fade-up delay-3 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl tracking-[-0.03em] text-text">{project.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-400">
                  {project.summary.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {project.techUsed?.length ? (
                  <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-400/90">
                      Tech used
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {project.techUsed.map((row) => (
                        <p key={row.title} className="text-sm leading-6 text-slate-400">
                          <span className="font-medium text-slate-200">{row.title}</span>
                          <span className="text-slate-600"> — </span>
                          <span>{row.items.join(", ")}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
                    <ArrowUpRight className="h-4 w-4" />
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
