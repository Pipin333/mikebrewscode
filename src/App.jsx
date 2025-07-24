import { useState, useEffect } from "react";
import AboutPage from "./components/AboutPage";
import ToodlesPage from "./components/ToodlesPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import ContactForm from "./components/ContactForm";
import CookieEaster from "./components/CookieEaster";
import Player from "./components/Player";

export default function App() {
  const [section, setSection] = useState("about");

  useEffect(() => {
    const savedSection = localStorage.getItem("section");
    if (savedSection) setSection(savedSection);
  }, []);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case "toodles": return <ToodlesPage />;
      case "projects": return <ProjectsPage />;
      case "contact": return <ContactPage />;
      case "contact-form": return <ContactForm />;
      default: return <AboutPage />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative p-4">
      {renderSection()}
      <Player onSectionChange={setSection} section={section} />
      <CookieEaster />
    </main>
  );
}