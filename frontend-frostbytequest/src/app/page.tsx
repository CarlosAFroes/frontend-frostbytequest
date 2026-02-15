export default function Home() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 overflow-hidden">
      {/* Montreal island background */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/montreal-island.svg"
          alt=""
          className="w-[140%] max-w-none opacity-60 text-cyan-400"
          style={{ filter: 'brightness(0) invert(0.7) sepia(0.3) hue-rotate(160deg)' }}
        />
      </div>

      {/* Hero */}
      <section className="relative py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Carlos Froes
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Software Developer · Montréal
        </p>
      </section>

      {/* Sections */}
      <section className="relative py-16 grid md:grid-cols-3 gap-8">
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
