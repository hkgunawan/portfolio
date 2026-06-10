import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { HeroTerminal } from "./hero-terminal";
import { TerminalWindow } from "./terminal";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mono mb-5 text-sm text-accent">{"// senior software engineer"}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {profile.availability.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              View work <ArrowRight size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <Mail size={16} /> Get in touch
            </a>
          </div>
        </div>

        <TerminalWindow title="bash — hendra@portfolio: ~">
          <HeroTerminal />
        </TerminalWindow>
      </div>
    </section>
  );
}
