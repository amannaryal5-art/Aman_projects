import { currentlyLearning, skillGroups } from "@/data/resume";

export function SkillsGrid() {
  return (
    <section className="section-shell pb-6 pt-10 md:pb-8 md:pt-14">
      <div className="fade-up delay-4 mb-8">
        <p className="section-kicker">Skills</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
          Tools, stacks, and systems I work with.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.title} className={`resume-panel fade-up delay-${Math.min(index + 2, 5)} p-6 md:p-8`}>
            <h3 className="font-display text-2xl tracking-[-0.03em] text-text">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="resume-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="resume-panel fade-up delay-5 mt-5 p-6 md:p-8">
        <p className="section-kicker">Currently Learning</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {currentlyLearning.map((item) => (
            <span key={item} className="resume-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
