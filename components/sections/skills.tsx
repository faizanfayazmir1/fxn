"use client";

import { useState } from "react";
import { SKILL_GROUPS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";
import { cn } from "@/lib/utils";

export function Skills() {
  const [filter, setFilter] = useState<string>("All");
  const groups = filter === "All" ? SKILL_GROUPS : SKILL_GROUPS.filter((g) => g.title === filter);
  const total = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="relative px-6 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="04" title="Skills" />
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl">
              Tools I reach for, languages I <span className="italic text-accent">think in</span>.
            </h2>
          </Reveal>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
            {total} technologies · {SKILL_GROUPS.length} domains
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter skills">
          {["All", ...SKILL_GROUPS.map((g) => g.title)].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              onClick={() => setFilter(t)}
              className={cn(
                "font-mono text-[11px] tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border transition",
                filter === t
                  ? "bg-accent text-[#0a0908] border-accent"
                  : "border-border-strong text-muted hover:text-fg"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {groups.map((g, i) => {
            const Icon = g.icon;
            const lastAlone = filter === "All" && i === groups.length - 1 && groups.length % 3 === 1;
            return (
              <div
                key={g.title}
                className={cn("bg-bg p-8 h-full", lastAlone && "lg:col-span-3", filter !== "All" && "md:col-span-2 lg:col-span-3")}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-surface border border-border">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <h3 className="font-serif italic text-2xl">{g.title}</h3>
                  <span className="ml-auto font-mono text-[10px] text-muted">{g.items.length}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
