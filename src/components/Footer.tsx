import { contact, nav } from "../content";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="on-dark border-t border-paper/15 bg-ink pb-10 pt-14 text-paper">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo height={34} />
          <p className="mt-5 max-w-sm text-paper/75">Design, development and digital growth for businesses that want one dependable team behind their website, software, apps and marketing.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow text-mint">Sections</h2>
          <ul className="mt-3 space-y-1">
            {nav.map((n) => <li key={n.href}><a className="inline-block py-2 hover:text-mint" href={n.href}>{n.label}</a></li>)}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="eyebrow text-mint">Contact</h2>
          <ul className="mt-3 space-y-1">
            <li><a className="inline-block break-all py-2 hover:text-mint" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a className="inline-block py-2 hover:text-mint" href={contact.phoneHref}>{contact.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-10 border-t border-paper/15 pt-6 text-sm text-paper/65">© {new Date().getFullYear()} Diligent Technologies. All rights reserved.</div>
    </footer>
  );
}
