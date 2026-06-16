import { skills } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="04" title="Skills" />
      </Reveal>

      <div className="mt-10 space-y-5">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-6">
              <p className="mono pt-1 text-sm text-muted-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
