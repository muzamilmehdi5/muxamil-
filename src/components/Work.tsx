import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../content";
import { Mock } from "./Mockups";
import { Arrow, Reveal } from "./ui";

function Panel({ p, onOpen, tone, big }: { p: Project; onOpen: () => void; tone: string; big?: boolean }) {
  const dark = tone.includes("bg-ink");
  return (
    <article className={`flex h-full flex-col rounded-[28px] p-6 md:p-9 ${tone} ${big ? "lg:grid lg:grid-cols-12 lg:items-center lg:gap-10" : ""}`}>
      <div className={big ? "lg:col-span-5" : ""}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`eyebrow ${dark ? "text-mint" : "text-mint-deep"}`}>{p.type}</span>
          {p.concept && <span className={`rounded-full border px-2.5 py-0.5 text-[13px] font-semibold ${dark ? "border-paper/40" : "border-ink/40"}`}>Concept preview</span>}
        </div>
        <h3 className="display mt-4 text-3xl md:text-4xl">{p.title}</h3>
        <dl className="mt-5 space-y-3 text-[15px] leading-relaxed">
          <div><dt className="font-semibold">Challenge</dt><dd className={dark ? "text-paper/80" : "text-ink/75"}>{p.challenge}</dd></div>
          <div><dt className="font-semibold">Solution</dt><dd className={dark ? "text-paper/80" : "text-ink/75"}>{p.solution}</dd></div>
        </dl>
        <button type="button" onClick={onOpen} className={`btn mt-6 ${dark ? "btn-mint" : "btn-ink"}`}>
          View concept details <Arrow />
          <span className="sr-only"> for {p.title}</span>
        </button>
      </div>
      <div className={`mt-8 ${big ? "lg:col-span-7 lg:mt-0" : "mt-auto pt-2"}`} aria-hidden="true">
        <Mock kind={p.kind} />
      </div>
    </article>
  );
}

function ProjectDialog({ p, onClose }: { p: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (p && !d.open) { d.showModal(); document.body.style.overflow = "hidden"; }
    if (!p && d.open) d.close();
    return () => { document.body.style.overflow = ""; };
  }, [p]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="dlg-title"
      onClose={() => { document.body.style.overflow = ""; onClose(); }}
      onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
      className="w-[min(680px,calc(100vw-24px))] max-h-[90vh] overflow-auto rounded-3xl bg-paper p-0 text-ink"
    >
      {p && (
        <div className="p-6 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-mint-deep">{p.type}</p>
              <span className="mt-2 inline-block rounded-full border border-ink/40 px-2.5 py-0.5 text-[13px] font-semibold">Concept preview</span>
            </div>
            <button type="button" onClick={() => ref.current?.close()} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink" aria-label="Close dialog">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3l12 12M15 3L3 15" /></svg>
            </button>
          </div>
          <h3 id="dlg-title" className="display mt-4 text-3xl md:text-4xl">{p.title}</h3>
          <p className="mt-4 leading-relaxed text-ink/80">{p.detail}</p>
          <h4 className="mt-6 font-semibold">What a project like this involves</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {p.scope.map((s) => <li key={s} className="rounded-lg bg-mint-soft px-3 py-2 text-sm font-medium">{s}</li>)}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" onClick={() => ref.current?.close()} className="btn btn-ink">Book a Discovery Call</a>
            <button type="button" onClick={() => ref.current?.close()} className="btn btn-line">Close</button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const open = (p: Project) => { opener.current = document.activeElement as HTMLElement; setActive(p); };
  const close = () => { setActive(null); opener.current?.focus(); };
  const [a, b, c] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-mint-deep">Selected work</p>
          <h2 id="work-title" className="display mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">See what we can build together.</h2>
          <p className="mt-4 max-w-2xl text-lg text-mute">Illustrative concepts showing the kinds of products we design and build. Real case studies will replace these as they are published.</p>
        </Reveal>
        <div className="mt-12 space-y-5">
          <Reveal><Panel p={a} big tone="bg-mint-soft" onOpen={() => open(a)} /></Reveal>
          <div className="grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7"><Panel p={b} tone="bg-ink text-paper on-dark" onOpen={() => open(b)} /></Reveal>
            <Reveal className="lg:col-span-5" delay={100}><Panel p={c} tone="bg-paper-2" onOpen={() => open(c)} /></Reveal>
          </div>
        </div>
      </div>
      <ProjectDialog p={active} onClose={close} />
    </section>
  );
}
