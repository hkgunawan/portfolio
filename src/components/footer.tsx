import { education, languages, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <p className="mono text-sm text-accent">{profile.name}</p>
            <p className="text-xs text-muted-2">
              {education.degree} · {education.school} · {education.year}
            </p>
            <p className="text-xs text-muted-2">{languages.join("  ·  ")}</p>
          </div>
          <div className="space-y-1.5 sm:text-right">
            <p className="text-xs text-muted-2">
              Built with Next.js, TypeScript &amp; Tailwind CSS ·{" "}
              <a
                href="https://github.com/hkgunawan/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
              >
                view source
              </a>
            </p>
            <p className="text-xs text-muted-2">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
