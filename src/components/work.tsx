import { selectedWork } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Work() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="01" title="Selected Work" />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {selectedWork.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="card flex h-full flex-col">
              <p className="mono text-xs text-accent">{item.context}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="mono text-muted-2">problem · </span>
                {item.problem}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="mono text-accent-2">solution · </span>
                {item.solution}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {item.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
