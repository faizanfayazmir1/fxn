"use client";

import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { Typewriter } from "@/components/ui/typewriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient gradient blobs */}
      <div
        aria-hidden
        className="absolute pointer-events-none animate-drift animate-pulse-glow"
        style={{
          top: "20%", left: "60%",
          width: 600, height: 600,
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none animate-drift"
        style={{
          bottom: "10%", left: "-10%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(74,58,138,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDirection: "reverse",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            Available for select work · {PROFILE.location}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="font-serif leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.2rem, 9.5vw, 9.5rem)" }}
          >
            {PROFILE.firstName}
            <br />
            <span className="italic text-accent">{PROFILE.middleName}</span>{" "}
            {PROFILE.lastName}
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
                {PROFILE.role} @ {PROFILE.company}
              </div>
              <div className="text-2xl md:text-3xl font-serif italic leading-snug min-h-[2.4em]">
                <Typewriter words={PROFILE.typewriter} />
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-muted leading-relaxed max-w-sm md:ml-auto">
                Currently engineering large-scale services at{" "}
                <span className="text-fg">{PROFILE.company}</span>. {PROFILE.tagline}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-accent text-[#0a0908] transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
              />
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border-strong hover:bg-surface transition"
            >
              View Resume <FileText size={15} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium hover:bg-surface transition"
            >
              Contact <Mail size={15} />
            </a>
            <div className="flex items-center gap-2 sm:ml-auto">
              {[
                { href: PROFILE.github, label: "GitHub", Icon: Github },
                { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-border hover:bg-accent hover:border-accent hover:text-[#0a0908] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden border border-border">
            {PROFILE.quickFacts.map((f) => (
              <div key={f.label} className="bg-bg/80 backdrop-blur px-5 py-4">
                <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
                  {f.label}
                </dt>
                <dd className="mt-1 text-[13.5px] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

      </div>
    </section>
  );
}
