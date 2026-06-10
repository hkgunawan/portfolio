"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { terminalLines } from "@/lib/data";

type Line = { cmd: string; out: string };

function Prompt() {
  return (
    <>
      <span className="text-accent">hendra@portfolio</span>
      <span className="text-muted-2">:</span>
      <span className="text-accent-2">~</span>
      <span className="text-muted-2">$ </span>
    </>
  );
}

export function HeroTerminal() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(terminalLines);
      setFinished(true);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    (async () => {
      await wait(400);
      for (const line of terminalLines) {
        for (let i = 1; i <= line.cmd.length; i++) {
          if (cancelled) return;
          setTyping(line.cmd.slice(0, i));
          await wait(36);
        }
        await wait(240);
        if (cancelled) return;
        setDone((prev) => [...prev, line]);
        setTyping("");
        await wait(380);
      }
      if (!cancelled) setFinished(true);
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduce]);

  return (
    <div className="mono min-h-[14.5rem] space-y-2.5 text-[13px] leading-relaxed sm:text-sm">
      {done.map((line, i) => (
        <div key={i} className="space-y-1">
          <div>
            <Prompt />
            <span className="text-foreground">{line.cmd}</span>
          </div>
          <div className="text-muted">
            <span className="text-accent">{"> "}</span>
            {line.out}
          </div>
        </div>
      ))}

      {!finished && (
        <div>
          <Prompt />
          <span className="text-foreground">{typing}</span>
          <span className="cursor" aria-hidden />
        </div>
      )}

      {finished && (
        <div>
          <Prompt />
          <span className="cursor" aria-hidden />
        </div>
      )}
    </div>
  );
}
