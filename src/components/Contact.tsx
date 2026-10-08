import { useEffect, useRef, useState, type FormEvent } from "react";
import { budgetOptions, contact, serviceOptions, type ServiceId } from "../content";
import { submitInquiry, type SubmitResult } from "../lib/submit";
import { Reveal } from "./ui";

type Fields = "name" | "email" | "service" | "details";
const demoMode = !import.meta.env.VITE_FORM_ENDPOINT;
const field = "mt-2 block min-h-12 w-full rounded-xl border-2 border-ink/30 bg-white px-4 py-3 text-base text-ink placeholder:text-mute/70 focus:border-ink";

export default function Contact({ preset, presetKey }: { preset: ServiceId | ""; presetKey: number }) {
  const [service, setService] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [busy, setBusy] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => { if (preset) { setService(preset); setErrors((e) => ({ ...e, service: undefined })); } }, [preset, presetKey]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = { name: String(f.get("name") || "").trim(), email: String(f.get("email") || "").trim(), service: String(f.get("service") || ""), details: String(f.get("details") || "").trim(), budget: String(f.get("budget") || "") };
    const err: Partial<Record<Fields, string>> = {};
    if (!v.name) err.name = "Please enter your name.";
    if (!v.email) err.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) err.email = "That email doesn’t look right. Try name@company.com.";
    if (!v.service) err.service = "Please choose the service you need.";
    if (v.details.length < 10) err.details = "Tell us a little about the project (at least a sentence).";
    setErrors(err);
    setResult(null);
    const first = (["name", "email", "service", "details"] as Fields[]).find((k) => err[k]);
    if (first) { formRef.current?.querySelector<HTMLElement>(`[name=${first}]`)?.focus(); return; }
    setBusy(true);
    const label = serviceOptions.find((o) => o.value === v.service)?.label ?? v.service;
    setResult(await submitInquiry({ ...v, service: label }));
    setBusy(false);
  }

  const errProps = (k: Fields) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });
  const Err = ({ k }: { k: Fields }) => errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm font-semibold text-[#a3231b]">{errors[k]}</p> : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-ink py-20 text-paper md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-mint">Contact</p>
          <h2 id="contact-title" tabIndex={-1} className="display mt-3 text-[clamp(2.2rem,5vw,4rem)] outline-none">Tell us what you’re building.</h2>
          <p className="mt-5 max-w-md text-lg text-paper/75">Share a few details and we’ll follow up to talk through goals, scope and next steps.</p>
          <dl className="mt-8 space-y-5">
            <div><dt className="eyebrow text-mint">Email</dt><dd className="mt-1"><a className="display text-2xl underline decoration-mint underline-offset-4 break-all" href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt className="eyebrow text-mint">US phone</dt><dd className="mt-1"><a className="display text-2xl underline decoration-mint underline-offset-4" href={contact.phoneHref}>{contact.phone}</a></dd></div>
          </dl>
        </Reveal>

        <div className="lg:col-span-7">
          <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-[28px] bg-paper p-6 text-ink md:p-9">
            {demoMode && (
              <p className="mb-6 rounded-xl border-2 border-ink bg-mint-soft px-4 py-3 text-sm font-medium">
                <strong>Demo form:</strong> this page has no form backend connected yet, so submitting will not send anything. You can open a pre-filled email instead, or write to <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            )}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="f-name" className="font-semibold">Name</label>
                <input id="f-name" name="name" autoComplete="name" className={field} {...errProps("name")} />
                <Err k="name" />
              </div>
              <div>
                <label htmlFor="f-email" className="font-semibold">Work email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" className={field} {...errProps("email")} />
                <Err k="email" />
              </div>
              <div>
                <label htmlFor="f-service" className="font-semibold">Service needed</label>
                <select id="f-service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={field} {...errProps("service")}>
                  <option value="">Select a service…</option>
                  {serviceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <Err k="service" />
              </div>
              <div>
                <label htmlFor="f-budget" className="font-semibold">Budget range <span className="font-normal text-mute">(optional)</span></label>
                <select id="f-budget" name="budget" className={field} defaultValue="">
                  <option value="">Select a range…</option>
                  {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="f-details" className="font-semibold">Project details</label>
                <textarea id="f-details" name="details" rows={5} className={field} placeholder="What are you building, and what does success look like?" {...errProps("details")} />
                <Err k="details" />
              </div>
            </div>
            <button type="submit" disabled={busy} className="btn btn-ink mt-6 w-full sm:w-auto">{busy ? "Working…" : "Discuss My Project"}</button>

            <div aria-live="polite" role="status" className="mt-5">
              {Object.keys(errors).some((k) => errors[k as Fields]) && <p className="font-semibold text-[#a3231b]">Please fix the highlighted fields above.</p>}
              {result?.status === "demo" && (
                <div className="rounded-xl border-2 border-ink p-4">
                  <p className="font-semibold">Not sent: demo mode.</p>
                  <p className="mt-1 text-sm text-mute">Your details are valid, but nothing has been submitted because no backend is connected. Open a pre-filled email to send them yourself.</p>
                  <a href={result.mailto} className="btn btn-mint mt-3">Open email draft</a>
                </div>
              )}
              {result?.status === "sent" && <p className="rounded-xl bg-mint-soft p-4 font-semibold">Thanks, your message was sent. We’ll be in touch at the email you provided.</p>}
              {result?.status === "error" && <p className="rounded-xl border-2 border-[#a3231b] p-4 font-semibold text-[#a3231b]">{result.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
