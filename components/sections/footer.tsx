import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-10 pt-16 pb-10 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-border">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-serif italic text-xl bg-accent text-[#0a0908]">
                f
              </div>
              <div className="font-serif italic text-2xl leading-none">{PROFILE.name}</div>
            </div>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-sm">
              {PROFILE.role} at {PROFILE.company}. Based in {PROFILE.location}.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-4">Sections</div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="magnetic-link text-fg/80 hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-4">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-fg/80 hover:text-accent transition">
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-fg/80 hover:text-accent transition">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 text-fg/80 hover:text-accent transition">
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          <span>© {new Date().getFullYear()} {PROFILE.name} · Built with Next.js</span>
          <span className="hidden md:inline">Press ⌘K for quick actions</span>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-accent transition">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
