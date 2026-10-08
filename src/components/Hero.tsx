import { PhoneMock, SaasMock, StoreMock } from "./Mockups";
import { Arrow, Check } from "./ui";
import { trustCommitments } from "../content";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-6 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-6">
          <p className="eyebrow text-mint-deep">Design. Development. Digital Growth.</p>
          <h1 id="hero-title" className="display mt-5 text-[clamp(2.6rem,7vw,4.6rem)] !leading-[1.06]">
            Build better digital experiences.{" "}
            <span className="mark">Grow your business.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute md:text-xl">
            Custom websites, software, mobile apps, and digital marketing—built around your goals and delivered by one dedicated team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-ink">Book a Discovery Call <Arrow /></a>
            <a href="#work" className="btn btn-line">Explore Our Work</a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[470px] lg:ml-auto lg:h-[560px] lg:max-w-none" role="img" aria-label="Illustrative previews of a website, a software dashboard and a mobile app">
            <div aria-hidden="true" className="absolute bottom-0 right-0 top-8 w-[78%] rounded-[28px] bg-mint lg:top-12" />
            <div aria-hidden="true" className="absolute right-[2%] top-0 w-[88%] lg:right-[4%]"><StoreMock /></div>
            <div aria-hidden="true" className="drift absolute bottom-[6%] left-0 w-[62%] sm:w-[58%]"><SaasMock /></div>
            <div aria-hidden="true" className="drift absolute -bottom-2 right-0 [animation-delay:-2s] sm:right-[2%]"><PhoneMock /></div>
          </div>
          <p className="mt-3 text-center text-[13px] text-mute lg:text-right">Illustrative interface previews, not client work.</p>
        </div>
      </div>

      <div className="border-y border-line bg-paper-2/60">
        <div className="wrap flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="eyebrow text-mute">How we work with you</p>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:flex lg:gap-10">
            {trustCommitments.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-[15px] font-semibold"><Check />{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
