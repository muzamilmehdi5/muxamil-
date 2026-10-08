/**
 * Central content. Replace anything here without touching components.
 * - projects: swap `concept: true` entries for real case studies (set concept:false, add `url`).
 * - testimonials: leave empty to hide the section. Only add genuine, attributed quotes with a source link.
 */

export type ServiceId = "web" | "software" | "ai" | "marketing" | "teams";
export type MockKind = "store" | "saas" | "app";

export const contact = {
  email: "info@diligenttechnologies.co",
  phone: "+1 (717) 971-3798",
  phoneHref: "tel:+17179713798",
  website: "https://www.diligenttechnologies.co/",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Why Diligent", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const trustCommitments = [
  "Clear project scope",
  "Regular progress updates",
  "Launch and ongoing support",
  "One accountable point of contact",
];

export interface Project {
  id: string;
  kind: MockKind;
  concept: boolean;
  type: string;
  title: string;
  challenge: string;
  solution: string;
  detail: string;
  scope: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: "storefront",
    kind: "store",
    concept: true,
    type: "E-commerce website",
    title: "A storefront built to make buying easy",
    challenge: "A growing retail brand needs a store that feels as considered as its products and is simple to manage.",
    solution: "A fast, conversion-focused storefront with clear product storytelling, streamlined checkout and an admin team can run day to day.",
    detail:
      "This is an illustrative concept, not a delivered client project. It shows how we approach a Shopify or custom storefront: start from the customer's path to purchase, design the product and cart experience first, then build and test on real devices.",
    scope: ["UX and UI design", "Shopify or custom build", "Product and collection templates", "Checkout and payments setup", "SEO foundations", "QA and handover"],
  },
  {
    id: "platform",
    kind: "saas",
    concept: true,
    type: "Custom software / SaaS",
    title: "One workspace for the whole operation",
    challenge: "Teams juggling spreadsheets and disconnected tools need one place to track work, customers and approvals.",
    solution: "A role-based web platform with a pipeline view, a central record for each customer, and APIs into the tools already in use.",
    detail:
      "This is an illustrative concept, not a delivered client project. It shows how we scope a portal, CRM or SaaS product: agree the core workflow and milestones first, then design, build and test in review cycles you can see.",
    scope: ["Product discovery and scoping", "UI/UX design system", "Web application development", "API and integrations", "Testing and QA", "Documentation and support"],
  },
  {
    id: "mobile",
    kind: "app",
    concept: true,
    type: "Mobile app + automation",
    title: "An app that connects to real workflows",
    challenge: "Field and customer-facing teams need quick actions on a phone without re-entering data back at the office.",
    solution: "An iOS and Android app backed by automated workflows, so a request in the app triggers the right follow-up in your systems.",
    detail:
      "This is an illustrative concept, not a delivered client project. It shows how we pair a mobile app with automation: design the key screens, connect them to your systems through APIs, and test the whole flow end to end.",
    scope: ["Mobile UX and UI design", "iOS and Android development", "Backend and API work", "Workflow automation", "Device and flow testing", "Release support"],
  },
];

export interface Service {
  id: ServiceId;
  name: string;
  summary: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: "web",
    name: "Websites & E-commerce",
    summary: "Sites that explain what you do clearly and make the next step obvious.",
    items: ["Custom websites", "WordPress", "Shopify", "Conversion-focused experiences"],
  },
  {
    id: "software",
    name: "Custom Software & Mobile Apps",
    summary: "Software shaped around how your business actually works.",
    items: ["SaaS platforms", "Portals", "CRM", "APIs", "iOS and Android apps"],
  },
  {
    id: "ai",
    name: "AI & Automation",
    summary: "Remove repetitive work and connect the tools you already use.",
    items: ["Workflow automation", "Integrations", "Chat agents", "Voice agents"],
  },
  {
    id: "marketing",
    name: "SEO & Digital Marketing",
    summary: "Be found by the right people, then give them a reason to act.",
    items: ["Technical SEO", "On-page SEO", "Google Ads", "Paid social", "Content"],
  },
  {
    id: "teams",
    name: "Dedicated Teams & QA",
    summary: "Extra capacity and quality control that slots into your roadmap.",
    items: ["Developers", "Designers", "Testing", "Ongoing technical support"],
  },
];

export const why = [
  { title: "Clear scope and milestones", text: "Before development starts, we agree what is being built, in what stages, and how we will review it." },
  { title: "A defined point of contact", text: "One person who knows your project and answers your questions, so you are never chasing a team." },
  { title: "Regular updates and checkpoints", text: "Progress you can see, with review points built in so direction changes happen early." },
  { title: "Design, development and QA together", text: "The people who design it, build it and test it work as one team, not a relay." },
  { title: "Documentation, handover and support", text: "You receive what you need to run the product, and a route to help after launch." },
];

export const process = [
  { n: "01", title: "Discover", text: "Understand the business, its users and goals." },
  { n: "02", title: "Plan & Design", text: "Define scope, structure and user experience." },
  { n: "03", title: "Build & Test", text: "Develop, review and validate." },
  { n: "04", title: "Launch & Improve", text: "Launch, hand over and support continued improvements." },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  sourceUrl: string;
}
export const testimonials: Testimonial[] = [];

export const faqs = [
  {
    q: "Can you improve an existing website or application?",
    a: "Yes. We start by reviewing what you have: the design, code, content and performance. Then we recommend whether to refine, extend or rebuild. Scope, pricing and timelines are agreed after we review your requirements.",
  },
  {
    q: "Can you handle development and marketing together?",
    a: "Yes. Design, development, SEO and paid marketing can be planned together, so what we build is ready to be found and to convert. You can also start with just one of these.",
  },
  {
    q: "How do you estimate cost and timeline?",
    a: "We review your goals, features, integrations and content, then propose a scope with milestones. Pricing and timelines are agreed after that review, so there are no numbers until we understand the work.",
  },
  {
    q: "How will we communicate during the project?",
    a: "You get a defined point of contact, regular progress updates and scheduled review checkpoints. We agree the channels and cadence at the start.",
  },
  {
    q: "What happens after launch?",
    a: "We hand over documentation and walk you through what was built. From there we can provide ongoing support and continued improvements, agreed with you based on your needs.",
  },
];

export const serviceOptions: { value: ServiceId | "other"; label: string }[] = [
  ...services.map((s) => ({ value: s.id, label: s.name })),
  { value: "other", label: "Not sure yet" },
];

export const budgetOptions = [
  "Prefer to discuss",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];
