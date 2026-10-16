import { CAPABILITIES } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

export function Capabilities() {
  return (
    <section id="focus" className="relative px-6 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="02" title="What I Do" />
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-14 max-w-3xl">
            Four things I&apos;m <span className="italic text-accent">reliably good at</span> — from
            the database up to the dashboard.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 90} className="h-full">
                <div className="group relative bg-bg h-full p-8 md:p-10 hover:bg-bg-elev transition-colors">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center bg-surface border border-border group-hover:border-accent transition">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif italic text-3xl mb-3">{c.title}</h3>
                  <p className="text-[14.5px] text-muted leading-[1.7] mb-6">{c.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] px-2.5 py-1 rounded-full border border-border text-muted"
                      >
                        {t}
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
