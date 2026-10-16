"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let x = -400;
    let y = -400;
    const move = (e: MouseEvent) => {
      x = e.clientX - 190;
      y = e.clientY - 190;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (ref.current) ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="glow-cursor" style={{ left: 0, top: 0, transform: "translate3d(-400px,-400px,0)" }} />;
}
