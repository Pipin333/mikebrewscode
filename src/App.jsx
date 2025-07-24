import { useState, useEffect } from "react";
import AboutPage from "./components/AboutPage";
import ToodlesPage from "./components/ToodlesPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import CookieEaster from "./components/CookieEaster";
import { setlist } from "./utils/setlist";

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [section, setSection] = useState("about");

  useEffect(() => {
    const savedTrack = localStorage.getItem("trackIndex");
    const savedSection = localStorage.getItem("section");
    if (savedTrack !== null) setCurrentTrack(Number(savedTrack));
    if (savedSection) setSection(savedSection);
  }, []);

  useEffect(() => {
    localStorage.setItem("trackIndex", currentTrack);
  }, [currentTrack]);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % setlist.length);
  };

  const renderSection = () => {
    switch (section) {
      case "toodles": return <ToodlesPage />;
      case "projects": return <ProjectsPage />;
      case "contact": return <ContactPage />;
      default: return <AboutPage />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative p-4">
      {renderSection()}

      <div className="absolute bottom-4 right-4 bg-neutral-900 p-4 rounded-xl shadow-xl">
        <p className="text-sm mb-2">
          🎵 Reproduciendo: {setlist[currentTrack].title} – {setlist[currentTrack].artist}
        </p>
        <iframe
          width="0"
          height="0"
          src={`${setlist[currentTrack].url}?autoplay=1&controls=0`}
          allow="autoplay"
          title="Toodles Player"
        ></iframe>
        <button
          onClick={nextTrack}
          className="mt-2 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          ⏭️ Siguiente
        </button>

        <div className="mt-2">
          <select
            onChange={(e) => setSection(e.target.value)}
            value={section}
            className="bg-black border border-green-500 text-white px-2 py-1 rounded-md"
          >
            <option value="about">About</option>
            <option value="toodles">Toodles</option>
            <option value="projects">Proyectos</option>
            <option value="contact">Contacto</option>
          </select>
        </div>
      </div>

      <CookieEaster />
    </main>
  );
}