"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Command, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { openCommandPalette } from "@/components/command-palette";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid || open
          ? "bg-bg/80 backdrop-blur-xl backdrop-saturate-150 border-b border-border"
          : "border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Back to top">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-serif italic text-lg bg-accent text-[#0a0908]">
            f
          </div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition">
            faizan.mir
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 font-mono text-[11px] tracking-[0.18em] uppercase">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "magnetic-link transition",
                active === l.href ? "opacity-100 text-accent" : "opacity-60 hover:opacity-100"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={openCommandPalette}
            className="hidden md:flex items-center gap-2 h-9 px-3 rounded-full border border-border-strong text-muted hover:text-fg transition font-mono text-[10.5px]"
            aria-label="Open command palette"
          >
            <Command size={12} /> K
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 h-9 text-xs font-mono uppercase tracking-[0.15em] px-4 rounded-full border border-border-strong transition hover:bg-accent hover:text-[#0a0908] hover:border-accent"
          >
            Let&apos;s talk <ArrowUpRight size={13} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border-strong"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-bg h-[calc(100dvh-69px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-2 group"
                >
                  <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
                  <span
                    className={cn(
                      "font-serif italic text-3xl transition",
                      active === l.href ? "text-accent" : "group-hover:text-accent"
                    )}
                  >
                    {l.label}
                  </span>
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openCommandPalette();
                }}
                className="mt-6 self-start flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
              >
                <Command size={12} /> Quick actions
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
