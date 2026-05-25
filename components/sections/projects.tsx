"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionNumber } from "@/components/ui/section-number";

type Project = (typeof PROJECTS)[number];

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
          {project.tag} · {project.year}
        </div>
        <h3 className="font-serif italic text-4xl md:text-5xl mb-6 leading-[1.05]">
          {project.title}
        </h3>
        <p className="text-muted leading-relaxed mb-8 text-[15px]">
          {project.longDescription}
        </p>
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            Highlights
          </div>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <span className="text-accent mt-1.5">◆</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] px-3 py-1 rounded-full border border-border"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 pt-4 border-t border-border">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-accent text-[#0a0908]"
          >
            Live Demo <ExternalLink size={14} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border"
          >
            Source <Github size={14} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 md:px-10 py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionNumber n="04" title="Selected Projects" />
        <Reveal>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-16 max-w-2xl">
            Things I&apos;ve built —{" "}
            <span className="italic text-accent">shipped, not just sketched</span>.
          </h2>
        </Reveal>
        <div className="space-y-px">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 150}>
              <button
                onClick={() => setOpenProject(p)}
                className="project-card w-full text-left grid md:grid-cols-12 gap-6 py-10 border-t border-border hover:bg-bg-elev transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="md:col-span-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
                  {p.year}
                </div>
                <div className="md:col-span-7">
                  <h3 className="project-title font-serif italic text-4xl md:text-5xl leading-[1.02] mb-3 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-muted leading-relaxed max-w-xl mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
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
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted flex items-center gap-2">
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
      </div>
      <AnimatePresence>
        {openProject && (
          <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
