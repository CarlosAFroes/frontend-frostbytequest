export default function GamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">🎮 Games</h1>
      <p className="text-gray-400 mb-12">
        Browser-based games and interactive experiments. Coming soon.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 rounded-xl border border-dashed border-gray-700 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-semibold mb-2">Game Slot 1</h3>
          <p className="text-sm text-gray-500">Your first game will appear here.</p>
        </div>
        <div className="p-8 rounded-xl border border-dashed border-gray-700 text-center">
          <div className="text-4xl mb-4">🧩</div>
          <h3 className="font-semibold mb-2">Game Slot 2</h3>
          <p className="text-sm text-gray-500">Another game coming soon.</p>
        </div>
      </div>
    </div>
  )
}
