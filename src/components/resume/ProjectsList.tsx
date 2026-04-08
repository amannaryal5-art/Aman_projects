import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/resume";

export function ProjectsList() {
  return (
    <section className="section-shell pb-6 pt-10 md:pb-8 md:pt-14">
      <div className="fade-up delay-3 mb-8">
        <p className="section-kicker">Projects</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
          Shipped work with real backend depth.
        </h2>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.title} className="resume-panel fade-up delay-3 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h3 className="font-display text-3xl tracking-[-0.03em] text-text">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="resume-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  <ArrowUpRight className="h-4 w-4" />
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
