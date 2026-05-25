import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-10 py-12 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-serif italic text-lg bg-accent text-[#0a0908]">
            f
          </div>
          <div>
            <div className="font-serif italic text-lg leading-none">{PROFILE.name}</div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
              Engineered with care · {new Date().getFullYear()}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          <a href="#about" className="magnetic-link hover:text-fg">About</a>
          <a href="#projects" className="magnetic-link hover:text-fg">Projects</a>
          <a href="#contact" className="magnetic-link hover:text-fg">Contact</a>
        </div>
      </div>
    </footer>
  );
}
