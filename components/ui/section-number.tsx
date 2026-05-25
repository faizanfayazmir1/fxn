interface SectionNumberProps {
  n: string;
  title: string;
}

export function SectionNumber({ n, title }: SectionNumberProps) {
  return (
    <div className="flex items-baseline gap-4 mb-12 md:mb-16">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
        § {n}
      </span>
      <div className="h-px flex-1 bg-border" />
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
        {title}
      </span>
    </div>
  );
}
