import { certifications, education } from "@/data/resume";

export function EducationSection() {
  return (
    <section className="section-shell pb-6 pt-10 md:pb-8 md:pt-14">
      <div className="fade-up delay-2 mb-8">
        <p className="section-kicker">Education</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
          Academic foundation and certifications.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {education.map((entry, index) => (
            <article key={`${entry.institution}-${entry.period}`} className={`resume-panel fade-up delay-${Math.min(index + 2, 5)} p-6 md:p-8`}>
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-[36rem]">
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-text md:text-3xl">
                    {entry.institution}
                  </h3>
                  <p className="mt-2 text-base font-medium text-slate-200">{entry.degree}</p>
                  {entry.campus ? <p className="mt-2 text-sm leading-6 text-slate-400">{entry.campus}</p> : null}
                </div>
                <div className="shrink-0 text-sm text-slate-400 md:max-w-[13rem] md:text-right">
                  <p>{entry.period}</p>
                  {entry.result ? <p className="mt-2 font-medium text-slate-300">{entry.result}</p> : null}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span key={tag} className="resume-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="resume-panel fade-up delay-3 p-6 md:p-8">
          <p className="section-kicker">Certifications</p>
          <div className="mt-6 space-y-6">
            {certifications.map((entry) => (
              <div key={entry.name} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                <h3 className="text-lg font-medium text-text">{entry.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{entry.issuer}</p>
                <p className="mt-3 text-sm text-slate-500">{entry.period}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{entry.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
