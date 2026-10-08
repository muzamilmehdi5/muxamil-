import type { MockKind } from "../content";

/** Lightweight, decorative interface mockups (CSS only). Sample content is illustrative. */

const Dot = ({ c }: { c: string }) => <span className="h-2 w-2 rounded-full" style={{ background: c }} />;

export function Browser({ children, url = "yourbrand.com", className = "" }: { children: React.ReactNode; url?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-white text-ink shadow-[0_24px_50px_-24px_rgba(27,32,30,.45)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-paper-2 px-3 py-2">
        <Dot c="#d9d4c7" /><Dot c="#d9d4c7" /><Dot c="#d9d4c7" />
        <span className="ml-3 truncate rounded bg-white px-2 py-0.5 text-[10px] text-mute">{url}</span>
      </div>
      {children}
    </div>
  );
}

export function StoreMock() {
  const tones = ["#e7dfcf", "#c9f5e2", "#d8d2c3", "#1b201e"];
  return (
    <Browser url="shop.yourbrand.com">
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between text-[10px] font-semibold text-ink">
          <span className="font-display text-xs">Your Brand</span>
          <span className="flex gap-3 text-mute"><span>Shop</span><span>Story</span><span>Cart (2)</span></span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 flex flex-col justify-center rounded-lg bg-paper p-3">
            <div className="font-display text-base font-bold leading-none tracking-tight sm:text-xl">Everyday<br />essentials</div>
            <div className="mt-2 h-1.5 w-3/4 rounded bg-line" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-line" />
            <span className="mt-3 w-fit rounded-full bg-mint px-3 py-1 text-[10px] font-semibold">Shop collection</span>
          </div>
          <div className="col-span-2 rounded-lg" style={{ background: "linear-gradient(160deg,#c9f5e2,#37de9b)" }}>
            <div className="mx-auto mt-5 h-14 w-10 rounded-t-full bg-ink/85 sm:h-20 sm:w-14" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {tones.map((t, i) => (
            <div key={i}>
              <div className="aspect-square rounded-md" style={{ background: t }} />
              <div className="mt-1.5 h-1.5 w-4/5 rounded bg-line" />
              <div className="mt-1 text-[9px] font-semibold text-ink">$00.00</div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

export function SaasMock() {
  const cols = [
    { t: "New", n: 3 },
    { t: "In review", n: 2 },
    { t: "Approved", n: 2 },
  ];
  return (
    <Browser url="app.yourcompany.com">
      <div className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr]">
        <div className="space-y-2 border-r border-line bg-ink p-2 sm:p-3">
          <div className="h-5 w-5 rounded bg-mint" />
          {[0, 1, 2, 3].map((i) => <div key={i} className="h-1.5 rounded bg-white/25" />)}
        </div>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="font-display text-sm font-bold">Pipeline</div>
            <span className="rounded-md bg-ink px-2 py-1 text-[10px] font-semibold text-paper">+ New record</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {cols.map((c) => (
              <div key={c.t} className="rounded-lg bg-paper p-2">
                <div className="mb-2 flex justify-between text-[9px] font-semibold uppercase tracking-wide text-mute"><span>{c.t}</span></div>
                <div className="space-y-1.5">
                  {Array.from({ length: c.n }).map((_, i) => (
                    <div key={i} className="rounded-md border border-line bg-white p-1.5">
                      <div className="h-1.5 w-4/5 rounded bg-line" />
                      <div className="mt-1.5 flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-mint-soft" /><span className="h-1 w-1/3 rounded bg-line" /></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[150px] rounded-[26px] border-[5px] border-ink bg-ink shadow-[0_24px_50px_-20px_rgba(27,32,30,.6)] sm:w-[168px] ${className}`}>
      <div className="overflow-hidden rounded-[20px] bg-paper p-3 pb-4">
        <div className="mx-auto mb-3 h-1 w-10 rounded bg-ink/20" />
        <div className="font-display text-sm font-bold leading-tight">Today</div>
        <div className="mt-2 rounded-xl bg-ink p-3 text-paper">
          <div className="text-[9px] uppercase tracking-wider text-mint">Next task</div>
          <div className="mt-1 text-[11px] font-semibold leading-snug">Confirm appointment</div>
          <span className="mt-2 block w-fit rounded-full bg-mint px-2.5 py-1 text-[9px] font-bold text-ink">Approve</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-line bg-white p-2">
              <span className="h-5 w-5 shrink-0 rounded-md bg-mint-soft" />
              <span><span className="block h-1.5 w-14 rounded bg-line" /><span className="mt-1 block h-1 w-9 rounded bg-line/70" /></span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-around">{[0, 1, 2, 3].map((i) => <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-ink" : "bg-line"}`} />)}</div>
      </div>
    </div>
  );
}

export function WorkflowMock({ className = "" }: { className?: string }) {
  const node = (label: string, tone: string) => (
    <div className={`rounded-lg border border-line px-2.5 py-1.5 text-[10px] font-semibold ${tone}`}>{label}</div>
  );
  return (
    <div className={`rounded-xl border border-line bg-white p-3 shadow-[0_20px_40px_-22px_rgba(27,32,30,.5)] ${className}`}>
      <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-mute">Workflow</div>
      <div className="flex items-center gap-1.5">
        {node("App request", "bg-paper")}
        <span className="h-px w-3 bg-ink" />
        {node("Check", "bg-mint-soft")}
        <span className="h-px w-3 bg-ink" />
        {node("Notify team", "bg-ink text-paper border-ink")}
      </div>
    </div>
  );
}

export function Mock({ kind }: { kind: MockKind }) {
  if (kind === "store") return <StoreMock />;
  if (kind === "saas") return <SaasMock />;
  return (
    <div className="relative flex items-center justify-center gap-4 py-4">
      <PhoneMock />
      <WorkflowMock className="hidden w-[250px] sm:block" />
    </div>
  );
}
