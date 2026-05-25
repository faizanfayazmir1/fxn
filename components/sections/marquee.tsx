import { MARQUEE_WORDS } from "@/lib/data";

export function Marquee() {
  return (
    <div className="relative py-8 overflow-hidden border-y border-border">
      <div className="flex gap-12 whitespace-nowrap font-serif italic text-3xl md:text-5xl text-muted animate-marquee">
        {[...Array(2)].flatMap((_, j) =>
          MARQUEE_WORDS.map((w, i) => (
            <span key={`${j}-${i}`} className="flex items-center gap-12">
              {w}
              <span className="text-accent">✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
