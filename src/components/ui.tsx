import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</div>;
}

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
);
export const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none"><circle cx="9" cy="9" r="9" fill="#37de9b" /><path d="M5 9.2l2.6 2.6L13 6.4" stroke="#1b201e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export function Logo({ height = 34 }: { height?: number }) {
  // Original logo asset, never retyped. Intrinsic size 372x112.
  return <img src="/diligent-logo.png" alt="Diligent Technologies" width={Math.round((372 / 112) * height)} height={height} style={{ height, width: "auto" }} />;
}
