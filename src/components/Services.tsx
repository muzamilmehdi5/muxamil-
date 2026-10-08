import { services, type ServiceId } from "../content";
import { Arrow, Reveal } from "./ui";

export default function Services({ onInquire }: { onInquire: (id: ServiceId) => void }) {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper-2/60 py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-mint-deep">Services</p>
          <h2 id="services-title" className="display mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4rem)]">One team. The capabilities to move you forward.</h2>
        </Reveal>
        <ol className="mt-12 border-t-2 border-ink">
          {services.map((s, i) => (
            <li key={s.id} className="border-b border-line">
              <Reveal className="grid gap-5 py-8 lg:grid-cols-12 lg:gap-8 md:py-10">
                <span className="display text-3xl text-mint-deep lg:col-span-1 md:text-4xl" aria-hidden="true">0{i + 1}</span>
                <div className="lg:col-span-5">
                  <h3 className="display text-2xl md:text-[2rem] md:leading-tight">{s.name}</h3>
                  <p className="mt-3 max-w-md text-lg text-mute">{s.summary}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-2 lg:col-span-4">
                  {s.items.map((it) => <li key={it} className="rounded-full border border-ink/25 bg-paper px-3.5 py-1.5 text-sm font-medium">{it}</li>)}
                </ul>
                <div className="lg:col-span-2 lg:text-right">
                  <button type="button" onClick={() => onInquire(s.id)} className="btn btn-line !px-5 text-[15px]">
                    Discuss this <Arrow /><span className="sr-only"> {s.name}</span>
                  </button>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-8 flex flex-col gap-3 rounded-3xl bg-mint p-6 md:flex-row md:items-center md:gap-8 md:p-8">
          <p className="display text-2xl md:w-1/3">UI/UX design, built into every engagement.</p>
          <p className="md:w-2/3 text-ink/85">Research, flows, wireframes and interface design are not a separate line item at the end. They shape the website, software, app and campaigns from the first conversation through launch.</p>
        </Reveal>
      </div>
    </section>
  );
}
