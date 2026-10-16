import { Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Experience() {
  return (
    <section id="work" className="relative px-6 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="03" title="Experience" />
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-14 max-w-2xl">
            Where I&apos;ve been <span className="italic text-accent">shipping</span>.
          </h2>
        </Reveal>
        <div className="relative">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 120}>
              <article className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-border">
                <div className="md:col-span-4 md:sticky md:top-28 self-start">
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
                  <h3 className="mt-5 font-serif italic text-4xl md:text-5xl leading-[1.02] text-fg">
                    {exp.company}
                  </h3>
                  <div className="mt-2 font-mono text-[11px] tracking-[0.15em] uppercase text-accent">
                    {exp.role}
                  </div>
                  <div className="mt-3 font-mono text-[11px] text-muted flex items-center gap-1.5">
                    <MapPin size={11} />
                    {exp.location}
                  </div>
                  <p className="mt-6 text-[14.5px] leading-[1.65] text-muted">{exp.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
                <ol className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden self-start">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={b.title}
                      className={
                        "bg-bg p-6 hover:bg-bg-elev transition-colors" +
                        (exp.bullets.length % 2 === 1 && j === exp.bullets.length - 1
                          ? " sm:col-span-2"
                          : "")
                      }
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-mono text-[10px] text-accent">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-medium text-[15px]">{b.title}</h4>
                      </div>
                      <p className="text-[13.5px] text-muted leading-[1.65]">{b.text}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
