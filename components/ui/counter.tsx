"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function Counter({ to, suffix = "", duration = 1400, decimals = 0 }: CounterProps) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(eased * to);
            if (p < 1) requestAnimationFrame(tick);
            else setN(to);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {decimals ? n.toFixed(decimals) : Math.floor(n)}
      {suffix}
    </span>
  );
}
