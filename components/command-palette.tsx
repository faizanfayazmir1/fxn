"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Copy, FileText, Github, Hash, Linkedin, Mail, Moon, Search,
} from "lucide-react";
import { NAV_LINKS, PROFILE, PROJECTS } from "@/lib/data";
import { toggleTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  group: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  hint?: string;
  run: () => void;
};

export const OPEN_PALETTE_EVENT = "open-command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
}

function go(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", hash);
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const items: Item[] = useMemo(
    () => [
      ...NAV_LINKS.map((l) => ({
        id: `nav-${l.href}`,
        label: l.label,
        group: "Go to",
        icon: Hash,
        run: () => go(l.href),
      })),
      ...PROJECTS.map((p) => ({
        id: `proj-${p.id}`,
        label: p.title,
        group: "Projects",
        icon: ArrowRight,
        hint: p.tag,
        run: () => {
          go("#projects");
          window.dispatchEvent(new CustomEvent("open-project", { detail: p.id }));
        },
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        group: "Actions",
        icon: Copy,
        hint: PROFILE.email,
        run: () => {
          navigator.clipboard?.writeText(PROFILE.email).then(
            () => {
              setToast("Email copied");
              setTimeout(() => setToast(null), 1600);
            },
            () => {}
          );
        },
      },
      {
        id: "email",
        label: "Send an email",
        group: "Actions",
        icon: Mail,
        run: () => (window.location.href = `mailto:${PROFILE.email}`),
      },
      {
        id: "resume",
        label: "Open resume",
        group: "Actions",
        icon: FileText,
        run: () => window.open(PROFILE.resumeUrl, "_blank", "noopener"),
      },
      {
        id: "theme",
        label: "Toggle light / dark theme",
        group: "Actions",
        icon: Moon,
        run: toggleTheme,
      },
      {
        id: "github",
        label: "GitHub",
        group: "Elsewhere",
        icon: Github,
        hint: "faizanfayazmir1",
        run: () => window.open(PROFILE.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        group: "Elsewhere",
        icon: Linkedin,
        run: () => window.open(PROFILE.linkedin, "_blank", "noopener"),
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.group} ${i.hint ?? ""}`.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const run = (item: Item | undefined) => {
    if (!item) return;
    close();
    setTimeout(item.run, 60);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(filtered[active]);
    }
  };

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[110] flex items-start justify-center pt-[14vh] px-4 bg-[rgba(8,7,6,0.6)] backdrop-blur-md"
            onClick={close}
          >
            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              role="dialog"
              aria-label="Command palette"
              className="w-full max-w-lg rounded-md border border-border-strong bg-bg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-4 border-b border-border">
                <Search size={15} className="text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKey}
                  placeholder="Jump to a section, project or action…"
                  className="flex-1 bg-transparent py-4 text-sm outline-none focus:outline-none focus-visible:outline-none placeholder:text-muted"
                />
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-border text-muted">esc</kbd>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <li className="px-4 py-6 text-sm text-muted text-center">No matches.</li>
                )}
                {filtered.map((item, i) => {
                  const showGroup = item.group !== lastGroup;
                  lastGroup = item.group;
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      {showGroup && (
                        <div className="px-4 pt-3 pb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                          {item.group}
                        </div>
                      )}
                      <button
                        onMouseEnter={() => setActive(i)}
                        onClick={() => run(item)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors",
                          i === active ? "bg-surface text-fg" : "text-fg/80"
                        )}
                      >
                        <Icon size={14} className={i === active ? "text-accent" : "text-muted"} />
                        <span className="flex-1">{item.label}</span>
                        {item.hint && (
                          <span className="font-mono text-[10.5px] text-muted truncate max-w-[45%]">
                            {item.hint}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border font-mono text-[10px] text-muted">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span className="ml-auto">⌘K / Ctrl K</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="fixed bottom-6 inset-x-0 z-[120] flex justify-center pointer-events-none"
          >
            <span className="px-4 py-2 rounded-full bg-accent text-[#0a0908] text-sm font-medium">
              {toast}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
