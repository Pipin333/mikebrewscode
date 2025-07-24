export default function ToodlesPage() {
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