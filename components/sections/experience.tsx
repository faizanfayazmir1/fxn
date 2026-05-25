import { Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Experience() {
  return (
    <section id="work" className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="02" title="Experience" />
        <div className="space-y-px">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group grid md:grid-cols-12 gap-6 py-10 border-t border-border hover:bg-bg-elev transition-colors px-2 -mx-2 rounded-sm">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted flex items-center gap-2">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  {exp.current && (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Current
                    </div>
                  )}
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-1">
                    <h3 className="font-serif italic text-3xl md:text-4xl leading-tight text-fg">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted">
                      — {exp.role}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-muted mb-4 flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </div>
                  <ul className="space-y-2.5 text-[14.5px] text-muted leading-[1.6] mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-accent mt-2 flex-shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10.5px] tracking-wide px-2.5 py-1 rounded-full border border-border text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
