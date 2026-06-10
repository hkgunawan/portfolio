import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/** A macOS-style terminal window frame. */
export function TerminalWindow({ title = "bash", children, className }: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mono ml-2 truncate text-xs text-muted-2">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
