import { useEffect, useState } from "react";
import { nav } from "../content";
import { Logo } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); document.getElementById("menu-btn")?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-dark sticky top-0 z-40 bg-ink text-paper">
      <a href="#main" className="absolute left-3 top-[-60px] z-50 rounded bg-mint px-4 py-2 font-semibold text-ink focus:top-2">Skip to content</a>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" aria-label="Diligent Technologies, home"><Logo height={30} /></a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="py-2 text-[15px] font-medium text-paper/85 hover:text-mint">{n.label}</a>
          ))}
          <a href="#contact" className="btn btn-mint !min-h-11">Let’s Talk</a>
        </nav>
        <button id="menu-btn" type="button" className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}</svg>
        </button>
      </div>
      <div id="mobile-menu" hidden={!open} className="border-t border-paper/15 md:hidden">
        <nav aria-label="Mobile" className="wrap flex flex-col py-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display flex min-h-14 items-center border-b border-paper/10 text-2xl font-semibold">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-mint my-4">Let’s Talk</a>
        </nav>
      </div>
    </header>
  );
}
