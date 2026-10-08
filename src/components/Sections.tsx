import { useState } from "react";
import { faqs, process, testimonials, why } from "../content";
import { Reveal } from "./ui";

export function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="on-dark bg-ink py-20 text-paper md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-mint">Why Diligent</p>
            <h2 id="why-title" className="display mt-3 text-[clamp(2.2rem,5vw,4rem)]">A partner who takes ownership.</h2>
            <p className="mt-5 max-w-md text-lg text-paper/75">Concrete working practices, agreed up front, so you always know where the project stands.</p>
          </div>
        </Reveal>
        <ul className="lg:col-span-7">
          {why.map((w) => (
            <li key={w.title} className="border-t border-paper/20 py-7 first:border-t-2 first:border-mint">
              <Reveal className="flex gap-5">
                <span aria-hidden="true" className="mt-2 h-3 w-3 shrink-0 rounded-sm bg-mint" />
                <div>
                  <h3 className="display text-2xl md:text-3xl">{w.title}</h3>
                  <p className="mt-2 max-w-xl text-paper/75">{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-mint-deep">Process</p>
          <h2 id="process-title" className="display mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4rem)]">From first conversation to what’s next.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <li key={s.n} className="relative border-t-2 border-ink pt-5">
              <Reveal>
                <span className="display inline-block rounded-full bg-mint px-4 py-1.5 text-xl">{s.n}</span>
                <h3 className="display mt-5 text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-2 text-mute">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Renders nothing until genuine, attributed testimonials are supplied in content.ts. */
export function Voices() {
  if (!testimonials.length) return null;
  return (
    <section id="voices" aria-labelledby="voices-title" className="bg-paper-2/60 py-20 md:py-28">
      <div className="wrap">
        <h2 id="voices-title" className="display text-[clamp(2.2rem,5vw,4rem)]">Client voices</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="rounded-3xl bg-paper p-6">
              <blockquote className="text-lg">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-mute">{t.name}, {t.role}, {t.company}. <a className="underline" href={t.sourceUrl} rel="noopener noreferrer">Source</a></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper-2/60 py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-mint-deep">FAQ</p>
          <h2 id="faq-title" className="display mt-3 text-[clamp(2.2rem,4.5vw,3.5rem)]">Questions, answered.</h2>
          <p className="mt-4 text-mute">Scope, pricing and timelines are agreed after we review your requirements.</p>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-ink/30 last:border-b">
                <h3>
                  <button type="button" id={`faq-b${i}`} aria-expanded={isOpen} aria-controls={`faq-p${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left text-lg font-semibold md:text-xl">
                    {f.q}
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-xl leading-none">{isOpen ? "–" : "+"}</span>
                  </button>
                </h3>
                <div id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`} hidden={!isOpen} className="pb-6 pr-12 text-mute">{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
