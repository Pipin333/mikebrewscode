import { useState } from "react";

const setlist = [
  { title: "Self Control", artist: "Laura Branigan", url: "https://www.youtube.com/embed/np0solnL1XY" },
  { title: "Catcher in the Rye", artist: "Guns N' Roses", url: "https://www.youtube.com/embed/Y8WlF9y6X2g" },
  { title: "September", artist: "Earth, Wind & Fire", url: "https://www.youtube.com/embed/Gs069dndIYk" },
  { title: "Remember the Time", artist: "Michael Jackson", url: "https://www.youtube.com/embed/LeiFF0gvqcc" },
  { title: "You Could Be Mine", artist: "Guns N' Roses", url: "https://www.youtube.com/embed/VlzptZ9wieQ" },
  { title: "Paradise City", artist: "Guns N' Roses", url: "https://www.youtube.com/embed/Rbm6GXllBiw" },
  { title: "Last Train to London", artist: "ELO", url: "https://www.youtube.com/embed/Up4WjdabA2c" },
  { title: "Still Loving You", artist: "Scorpions", url: "https://www.youtube.com/embed/EegRh9IAZbY" },
  { title: "Turista", artist: "Bad Bunny", url: "https://www.youtube.com/embed/F3OZUsV2C6Q" },
  { title: "Bokete", artist: "Bad Bunny", url: "https://www.youtube.com/embed/SzzWXv3b59s" }
];

function AboutPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">MikeBrewsCode</h1>
      <p className="text-lg mb-6">Barista, programador y soñador digital.</p>
      <img src="/assets/foto.jpg" alt="Foto de Mike" className="rounded-full w-40 h-40 object-cover border-4 border-green-400" />
    </div>
  );
}

function ToodlesPage() {
  return (
    <div className="max-w-xl mx-auto text-left p-4">
      <h2 className="text-2xl font-bold mb-2">Toodles – Bot musical</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Arquitectura modular con Cogs (UI, Core, DB)</li>
        <li>Streaming en tiempo real con FFmpeg</li>
        <li>Integración con YouTube y Spotify</li>
        <li>Modo radio con recomendaciones automáticas</li>
        <li><a href="https://github.com/Pipin333/toodles-discord" className="text-green-400 underline">Ver en GitHub</a></li>
      </ul>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="text-left p-4">
      <h2 className="text-2xl font-bold mb-2">Contacto</h2>
      <p>📧 Correo: f.riquelmesalvo@uandresbello.edu</p>
      <p>🔗 <a href="https://www.linkedin.com/in/friquelmes" className="text-green-400 underline">LinkedIn</a></p>
      <p>🐙 <a href="https://github.com/Pipin333" className="text-green-400 underline">GitHub</a></p>
    </div>
  );
}

export default function HomePage() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [section, setSection] = useState("about");

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % setlist.length);
  };

  const renderSection = () => {
    switch (section) {
      case "toodles": return <ToodlesPage />;
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
            <option value="contact">Contacto</option>
          </select>
        </div>
      </div>

      <div
        className="absolute bottom-2 left-2 cursor-pointer"
        onClick={() => {
          alert("🏆 Toodles te está observando.\nThese aren't the cookies you're clicking for.");
          localStorage.setItem("cookiesAccepted", true);
        }}
      >
        <img src="/assets/cookie.png" alt="Tiny Cookie" className="w-8 h-8" />
      </div>
    </main>
  );
}
