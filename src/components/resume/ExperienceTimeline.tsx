import { experience } from "@/data/resume";

export function ExperienceTimeline() {
  return (
    <section className="section-shell pb-6 pt-10 md:pb-8 md:pt-14">
      <div className="fade-up delay-2 mb-8">
        <p className="section-kicker">Experience</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
          Professional work, training, and self-driven growth.
        </h2>
      </div>

      <div className="space-y-5">
        {experience.map((entry, index) => (
          <article key={`${entry.company}-${entry.period}`} className={`resume-panel fade-up delay-${Math.min(index + 2, 5)} p-6 md:p-8`}>
            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div className="border-l border-white/10 pl-4 text-sm text-slate-400 md:border-l-0 md:pl-0">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Period</p>
                <p className="mt-3">{entry.period}</p>
                {entry.location ? <p className="mt-2">{entry.location}</p> : null}
              </div>

              <div>
                <h3 className="font-display text-3xl tracking-[-0.03em] text-text">{entry.company}</h3>
                <p className="mt-2 text-base text-slate-300">{entry.role}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">{entry.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="resume-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
