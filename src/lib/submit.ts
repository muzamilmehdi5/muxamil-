import { contact } from "../content";

export interface Inquiry {
  name: string;
  email: string;
  service: string;
  details: string;
  budget: string;
}

export type SubmitResult =
  | { status: "sent" }
  | { status: "demo"; mailto: string }
  | { status: "error"; message: string };

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export function buildMailto(i: Inquiry): string {
  const body = `Name: ${i.name}\nEmail: ${i.email}\nService: ${i.service}\nBudget: ${i.budget || "Not specified"}\n\n${i.details}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent("Project inquiry from " + i.name)}&body=${encodeURIComponent(body)}`;
}

/**
 * INTEGRATION POINT.
 * Set VITE_FORM_ENDPOINT (see .env.example) to any endpoint that accepts a JSON POST
 * (Formspree, Getform, a serverless function, your own API). Success is only reported
 * when that endpoint answers 2xx. With no endpoint, the form runs in demo mode:
 * nothing is sent and the visitor is offered a pre-filled email instead.
 */
export async function submitInquiry(i: Inquiry): Promise<SubmitResult> {
  if (!endpoint) return { status: "demo", mailto: buildMailto(i) };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(i),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { status: "sent" };
  } catch {
    return { status: "error", message: `We couldn't send that. Please email ${contact.email} directly.` };
  }
}
