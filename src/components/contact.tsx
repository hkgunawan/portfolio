import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { TerminalWindow } from "./terminal";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="04" title="Contact" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10">
          <TerminalWindow title="bash — contact">
            <div className="mono space-y-3 text-sm">
              <div>
                <span className="text-muted-2">$ </span>
                <span className="text-foreground">./say-hello.sh</span>
              </div>
              <p className="leading-relaxed text-muted">
                <span className="text-accent">{"> "}</span>
                Open to senior full-stack roles — remote (worldwide) or relocation to
                Singapore, Australia, or New Zealand. Fintech and product teams especially
                welcome.
              </p>
            </div>
          </TerminalWindow>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
