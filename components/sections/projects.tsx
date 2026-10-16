"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles, X } from "lucide-react";
import { PROFILE, PROJECTS, type Project } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

function Pipeline({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span
            className={
              "font-mono rounded-sm border border-border-strong bg-bg-elev whitespace-nowrap " +
              (compact ? "text-[10.5px] px-2 py-1" : "text-[11.5px] px-2.5 py-1.5")
            }
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className="mx-1.5 text-accent text-xs">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[rgba(8,7,6,0.85)] backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-sm p-8 md:p-12 bg-bg border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
          {project.tag}
          {project.year && <> · {project.year}</>}
        </div>
        <h3 className="font-serif italic text-4xl md:text-5xl mb-2 leading-[1.05]">
          {project.title}
        </h3>
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted mb-6">
          {project.role}
        </div>
        <p className="text-muted leading-relaxed mb-8 text-[15px]">{project.longDescription}</p>

        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            How it fits together
          </div>
          <Pipeline steps={project.architecture} />
        </div>

        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            Highlights
          </div>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <span className="text-accent mt-1.5 text-[8px]">◆</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={project.demoUrl || project.repoUrl ? "mb-8" : ""}>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="font-mono text-[11px] px-3 py-1 rounded-full border border-border">
                {s}
              </span>
            ))}
          </div>
        </div>
        {(project.demoUrl || project.repoUrl) && (
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-accent text-[#0a0908]"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border"
              >
                Source <Github size={14} />
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => p !== featured);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      const p = PROJECTS.find((x) => x.id === id);
      if (p) setTimeout(() => setOpenProject(p), 450);
    };
    window.addEventListener("open-project", onOpen);
    return () => window.removeEventListener("open-project", onOpen);
  }, []);

  return (
    <section id="projects" className="relative px-6 md:px-10 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="05" title="Selected Projects" />
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-14 max-w-2xl">
            Things I&apos;ve built —{" "}
            <span className="italic text-accent">shipped, not just sketched</span>.
          </h2>
        </Reveal>

        {featured && (
          <Reveal>
            <button
              onClick={() => setOpenProject(featured)}
              className="project-card group relative w-full text-left rounded-sm border border-border bg-bg-elev overflow-hidden mb-6 hover:border-border-strong transition"
            >
              <div
                aria-hidden
                className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none opacity-60 group-hover:opacity-90 transition"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
              <div className="relative p-8 md:p-12 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 mb-5 font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent">
                    <Sparkles size={12} /> Featured · {featured.tag}
                  </div>
                  <h3 className="project-title font-serif italic text-4xl md:text-6xl leading-[1.0] mb-5 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed max-w-xl mb-6">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.stack.slice(0, 6).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10.5px] px-2.5 py-1 rounded-full border border-border text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-between gap-8">
                  <div className="flex md:justify-end">
                    <span className="project-arrow inline-flex w-12 h-12 rounded-full items-center justify-center border border-border-strong">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
                      Request path
                    </div>
                    <Pipeline steps={featured.architecture} compact />
                  </div>
                </div>
              </div>
            </button>
          </Reveal>
        )}

        <div className="space-y-px">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 150}>
              <button
                onClick={() => setOpenProject(p)}
                className="project-card w-full text-left grid md:grid-cols-12 gap-6 py-10 border-t border-border hover:bg-bg-elev transition-colors px-4 rounded-sm"
              >
                <div className="md:col-span-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                  {String(i + 2).padStart(2, "0")}
                  {p.year && <span className="block mt-1">{p.year}</span>}
                </div>
                <div className="md:col-span-7">
                  <h3 className="project-title font-serif italic text-4xl md:text-5xl leading-[1.02] mb-3 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed max-w-xl mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10.5px] px-2.5 py-1 rounded-full border border-border text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 flex md:items-start md:justify-end">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted flex items-center gap-3">
                    {p.tag}
                    <span className="project-arrow inline-flex w-10 h-10 rounded-full items-center justify-center border border-border-strong">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>

        <Reveal>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted hover:text-accent transition"
          >
            <Github size={14} /> More on GitHub <ArrowUpRight size={13} />
          </a>
        </Reveal>
      </div>
      <AnimatePresence>
        {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
