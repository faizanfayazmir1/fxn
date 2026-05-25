import { SKILL_GROUPS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="03" title="Skills" />
        <div className="mb-12">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl">
              Tools I reach for, languages I think in.
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-bg p-8 md:p-10 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-surface border border-border">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <h3 className="font-serif italic text-2xl">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="skill-pill cursor-default font-mono text-[11.5px] px-3 py-1.5 rounded-full border border-border-strong text-fg"
                      >
                        {s}
                      </span>
                    ))}
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
