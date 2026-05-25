import { Sparkles } from "lucide-react";
import { STATS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";
import { Counter } from "@/components/ui/counter";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="01" title="About" />
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em]">
              I&apos;m a backend engineer who treats{" "}
              <span className="italic text-accent">reliability</span> as a craft, and{" "}
              <span className="italic text-accent">simplicity</span> as the goal.
            </h2>
            <div className="mt-10 space-y-5 text-[15px] leading-[1.7] text-muted max-w-xl">
              <p>
                At Amazon, I work on services that have to be both fast and forgettable — the kind that just work, at any scale, in any region. My day-to-day is a mix of Java, Python, and a healthy amount of AWS.
              </p>
              <p>
                Before that, I spent a season at IIT Guwahati doing ML research on Bose–Einstein Condensates — which taught me that the cleanest systems often hide the deepest physics. That instinct carries over to everything I build now.
              </p>
              <p>
                Outside of work, I&apos;m building side projects, reading distributed systems papers, and slowly converging on the perfect pour-over.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="md:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-border rounded-sm overflow-hidden">
              {STATS.map((s, i) => (
                <div key={i} className="bg-bg p-7">
                  <div className="font-serif text-4xl md:text-5xl text-accent">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 border border-border rounded-sm bg-bg-elev">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-accent" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                  currently
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Exploring AI-driven systems and how foundation models reshape backend architecture.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
