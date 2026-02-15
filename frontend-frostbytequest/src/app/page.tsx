export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Carlos Froes
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Software Developer · Montréal
        </p>
      </section>

      {/* Sections */}
      <section className="py-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-gray-800 hover:border-cyan-800 transition-colors">
          <h2 className="text-lg font-semibold mb-2">🎮 Games</h2>
          <p className="text-sm text-gray-400">
            Browser-based games and interactive experiments.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-800 hover:border-cyan-800 transition-colors">
          <h2 className="text-lg font-semibold mb-2">💼 Projects</h2>
          <p className="text-sm text-gray-400">
            Open source work, side projects, and technical writing.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-gray-800 hover:border-cyan-800 transition-colors">
          <h2 className="text-lg font-semibold mb-2">🛠️ Tools</h2>
          <p className="text-sm text-gray-400">
            Utilities and dashboards for personal infrastructure.
          </p>
        </div>
      </section>
    </div>
  )
}
