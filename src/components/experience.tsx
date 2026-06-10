import { experience } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="02" title="Experience" />
      </Reveal>

      <div className="mt-10 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <article className="card">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mono text-sm text-accent">{job.company}</p>
                </div>
                <div className="mono text-xs text-muted-2 sm:text-right">
                  <div>{job.period}</div>
                  <div>{job.location}</div>
                </div>
              </div>

              <p className="mt-3 text-sm text-muted">{job.summary}</p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="mono mt-0.5 text-accent">▸</span>
                    <span className="text-muted">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
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
