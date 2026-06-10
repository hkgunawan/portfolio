"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="mono text-sm font-medium" aria-label="Back to top">
          <span className="text-accent">hendra</span>
          <span className="text-muted-2">@dev</span>
          <span className="text-muted-2">:~$</span>
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary btn-sm ml-1"
            aria-label="Email Hendra"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">Get in touch</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
