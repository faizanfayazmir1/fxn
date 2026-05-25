"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-bg/70 backdrop-blur-xl backdrop-saturate-150 border-b border-border"
          : "border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-serif italic text-lg bg-accent text-[#0a0908]">
            f
          </div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition">
            faizan.mir
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.18em] uppercase">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="magnetic-link opacity-70 hover:opacity-100">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-border-strong transition hover:bg-accent hover:text-[#0a0908] hover:border-accent"
        >
          Let&apos;s talk <ArrowUpRight size={13} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full border border-border-strong"
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4 font-mono text-xs tracking-[0.18em] uppercase">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="opacity-70 hover:opacity-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
