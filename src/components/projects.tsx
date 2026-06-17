import { ArrowUpRight, Code2, Check } from "lucide-react";
import { liveProjects } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="02" title="Live Projects" />
      </Reveal>

      <Reveal>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Side projects I designed, built, and shipped end-to-end — data layer, UI, tests, CI, and production deploy.
          Both are live and open-source; click through to use them or read the code.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {liveProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="card flex h-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <span className="mono inline-flex items-center gap-1 text-xs text-accent-2">live ●</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>

              {p.highlights && (
                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent-2" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 pt-5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  {p.live.replace(/^https?:\/\//, "")} <ArrowUpRight size={14} />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
                >
                  <Code2 size={14} /> Code
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
