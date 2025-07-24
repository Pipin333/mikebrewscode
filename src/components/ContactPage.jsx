import { useState } from "react";

export default function ContactPage() {
  const [showEmails, setShowEmails] = useState(false);

  return (
    <div className="max-w-xl mx-auto text-center px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
      <p className="text-sm text-gray-400 mb-6">¿Tienes algo que decirme? Elige tu canal:</p>

      <div className="flex justify-center gap-8 text-4xl">
        <button onClick={() => setShowEmails(!showEmails)} title="Correo">
          📧
        </button>
        <a href="https://github.com/Pipin333" target="_blank" rel="noopener noreferrer" title="GitHub">
          🐙
        </a>
        <a href="https://www.linkedin.com/in/friquelmes" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          🔗
        </a>
      </div>

      {showEmails && (
        <div className="mt-6 space-y-4">
          <p className="text-sm text-gray-300">Selecciona a qué correo quieres escribirme:</p>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="/contact-form?email=f.riquelmes34@outlook.cl"
              className="text-green-400 underline text-sm hover:text-green-300"
            >
              Personal: f.riquelmes34@outlook.cl
            </a>
            <a
              href="/contact-form?email=f.riquelmesalvo@uandresbello.edu"
              className="text-green-400 underline text-sm hover:text-green-300"
            >
              Institucional: f.riquelmesalvo@uandresbello.edu
            </a>
          </div>
        </div>
      )}
    </div>
  );
}