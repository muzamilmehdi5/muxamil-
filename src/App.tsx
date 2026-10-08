import { useCallback, useState } from "react";
import type { ServiceId } from "./content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import { Faq, Process, Voices, Why } from "./components/Sections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [preset, setPreset] = useState<ServiceId | "">("");
  const [presetKey, setPresetKey] = useState(0);

  const inquire = useCallback((id: ServiceId) => {
    setPreset(id);
    setPresetKey((k) => k + 1);
    const el = document.getElementById("contact");
    el?.scrollIntoView();
    window.setTimeout(() => document.getElementById("contact-title")?.focus({ preventScroll: true }), 50);
    history.replaceState(null, "", "#contact");
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Services onInquire={inquire} />
        <Why />
        <Process />
        <Voices />
        <Faq />
        <Contact preset={preset} presetKey={presetKey} />
      </main>
      <Footer />
    </>
  );
}
