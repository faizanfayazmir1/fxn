import { GraduationCap, MapPin } from "lucide-react";
import { ACHIEVEMENTS, EDUCATION } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Education() {
  return (
    <section id="education" className="relative px-6 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="06" title="Education & Recognition" />

        {EDUCATION.map((e) => (
          <Reveal key={e.school}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end pb-14 mb-14 border-b border-border">
              <div className="md:col-span-8">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted mb-5">
                  <GraduationCap size={14} className="text-accent" /> {e.period}
                </div>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">
                  {e.school}
                </h2>
                <p className="mt-4 text-[15px] text-muted leading-relaxed">{e.degree}</p>
                <div className="mt-3 font-mono text-[11px] text-muted flex items-center gap-1.5">
                  <MapPin size={11} /> {e.location}
                </div>
              </div>
              <div className="md:col-span-4 md:text-right">
                <div className="font-serif text-7xl md:text-8xl leading-none text-accent">
                  {e.score}
                  <span className="text-3xl md:text-4xl text-muted">/{e.scoreOf}</span>
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                  {e.scoreLabel}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 80} className="h-full">
                <div className="bg-bg p-7 h-full hover:bg-bg-elev transition group">
                  <Icon size={20} className="text-accent mb-5 group-hover:scale-110 transition" />
                  <div className="font-serif italic text-xl leading-tight mb-1.5">{a.title}</div>
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
