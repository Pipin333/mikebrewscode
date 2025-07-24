export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto text-center px-4 py-8">
      <img
        src="/assets/foto.jpg"
        alt="Felipe Riquelme"
        className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-green-400 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">Felipe Sebastián Riquelme Salvo</h1>
      <p className="text-lg text-green-400 mb-6 italic">Programador por el dia, Barista por las noches, pick your poison.</p>

      <p className="text-base mb-4">
        Soy estudiante de Ingeniería Civil Informática con enfoque en ciencia de datos, inteligencia artificial y eficiencia operativa. 
        Me he formado tanto en aulas como detrás de la barra. 
        Y entre la crema del espresso y el módulo asyncio, descubrí que los sistemas bien hechos también pueden tener alma.
      </p>

      <p className="text-base mb-4">
        Este sitio no es un portafolio tradicional, y no busca serlo. es una representacion de quien soy, desde la paleta de colores
        hasta como interactuas con la página, es un reflejo de mi personalidad y también de mi atencion al detalle. fue hecho con todo el cariño del mundo y harta paciencia.
      </p>

      <div className="mt-6 bg-neutral-900 rounded-lg p-4 shadow-lg text-left">
        <h2 className="text-xl font-bold text-green-400 mb-2">🔧 Más sobre mi:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Lenguajes: Python, C++, Java, JavaScript, SQL</li>
          <li>Frameworks: React + Vite, TailwindCSS</li>
          <li>Que me enciende la ampolleta: Ciencia de datos, IA, Ciberseguridad</li>
          <li>Habilidades blandas: Atención al cliente, liderazgo operativo, optimización de procesos</li>
          <li>Cómo me comunico: Español (nativo), Inglés (intermedio)</li>
          <li>Qué me mueve: Música, Videojuegos, Perfumeria, Automovilismo</li>
        </ul>
      </div>
    </div>
  );
}
