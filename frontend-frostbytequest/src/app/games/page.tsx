import Link from 'next/link'

export default function GamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">🎮 Games</h1>
      <p className="text-gray-400 mb-12">
        Browser-based games and interactive experiments.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/games/memory"
          className="group p-8 rounded-xl border border-gray-700 hover:border-cyan-700 transition-colors text-center"
        >
          <div className="text-4xl mb-4">🧊</div>
          <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Frost Match</h3>
          <p className="text-sm text-gray-500">Flip cards and match pairs of frost creatures. 4×5 grid, 10 pairs.</p>
        </Link>
        <div className="p-8 rounded-xl border border-dashed border-gray-700 text-center">
          <div className="text-4xl mb-4">🧩</div>
          <h3 className="font-semibold mb-2">Coming Soon</h3>
          <p className="text-sm text-gray-500">More games on the way.</p>
        </div>
      </div>
    </div>
  )
}
