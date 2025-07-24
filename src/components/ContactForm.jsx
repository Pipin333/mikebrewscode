import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [emailTo, setEmailTo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const email = query.get("email");
    if (email) setEmailTo(email);
  }, [location.search]);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  // Puedes duplicar tu formulario en Formspree y asignar uno a cada correo si lo deseas
  const formspreeEndpoint = "https://formspree.io/f/meozawoa"; // Reemplaza por tu endpoint real

  return (
    <div className="max-w-xl mx-auto text-left p-4">
      <h2 className="text-3xl font-bold mb-4">Enviar mensaje</h2>

      {submitted ? (
        <div className="bg-green-700 text-white px-4 py-3 rounded-md shadow mb-6">
          ✅ ¡Tu mensaje fue enviado exitosamente!
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-400 mb-4">
            Este mensaje será enviado a: <span className="text-green-400 font-semibold">{emailTo}</span>
          </p>

          <form action={formspreeEndpoint} method="POST" onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="to" value={emailTo} />
            <div>
              <label className="block mb-1 font-medium">Tu nombre</label>
              <input type="text" name="name" required className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-green-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Tu correo electrónico</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-green-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Mensaje</label>
              <textarea name="message" rows="5" required className="w-full px-3 py-2 rounded-md bg-neutral-800 text-white border border-green-500"></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
              📩 Enviar mensaje
            </button>
          </form>
        </>
      )}
    </div>
  );
}