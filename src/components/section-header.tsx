type SectionHeaderProps = {
  index: string;
  title: string;
};

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}
