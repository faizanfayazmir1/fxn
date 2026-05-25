import { ACHIEVEMENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Achievements() {
  return (
    <section className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="05" title="Recognition" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-bg p-7 h-full hover:bg-bg-elev transition group">
                  <Icon
                    size={20}
                    className="text-accent mb-5 group-hover:scale-110 transition"
                  />
                  <div className="font-serif italic text-xl leading-tight mb-1.5">
                    {a.title}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                    {a.org}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
