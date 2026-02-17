import Link from 'next/link'

function MontrealDeconstructArt() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full max-w-3xl mx-auto"
      aria-label="Deconstructed art representing Montréal"
      role="img"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1a2b" />
          <stop offset="100%" stopColor="#1a2d4a" />
        </linearGradient>
        <linearGradient id="ice" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Background wash */}
      <rect width="800" height="400" fill="url(#sky)" rx="12" />

      {/* Geometric grid — deconstructed city blocks */}
      <g opacity="0.12" stroke="#67e8f9" strokeWidth="0.5" fill="none">
        {[...Array(14)].map((_, i) => (
          <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * i} x2="800" y2={50 * i} />
        ))}
      </g>

      {/* Mont Royal — fragmented triangles */}
      <g opacity="0.55">
        <polygon points="200,320 400,140 420,320" fill="#155e75" />
        <polygon points="350,320 400,140 450,200" fill="#164e63" />
        <polygon points="380,320 420,180 500,320" fill="#0e7490" opacity="0.4" />
        <polygon points="160,320 300,200 340,320" fill="#134e4a" opacity="0.5" />
      </g>

      {/* Deconstructed skyline — offset rectangles */}
      <g opacity="0.7">
        {/* Olympic Stadium inspired arc */}
        <path d="M580,310 Q600,220 620,310" stroke="#22d3ee" strokeWidth="2.5" fill="none" opacity="0.6" />
        <path d="M590,310 Q600,250 610,310" stroke="#67e8f9" strokeWidth="1.5" fill="none" opacity="0.4" />

        {/* Habitat 67 — stacked cubes */}
        <g transform="translate(120, 240)" opacity="0.65">
          <rect x="0" y="40" width="22" height="18" fill="#0891b2" transform="rotate(-3)" />
          <rect x="18" y="28" width="22" height="18" fill="#06b6d4" transform="rotate(2)" />
          <rect x="8" y="16" width="22" height="18" fill="#22d3ee" transform="rotate(-1)" />
          <rect x="26" y="6" width="22" height="18" fill="#67e8f9" transform="rotate(4)" opacity="0.7" />
          <rect x="-4" y="22" width="22" height="18" fill="#155e75" transform="rotate(-5)" />
          <rect x="36" y="20" width="22" height="18" fill="#0e7490" transform="rotate(1)" opacity="0.5" />
        </g>

        {/* Downtown towers — offset shards */}
        <rect x="460" y="200" width="18" height="110" fill="#0891b2" opacity="0.6" transform="rotate(-2 469 255)" />
        <rect x="485" y="180" width="14" height="130" fill="#22d3ee" opacity="0.45" transform="rotate(1 492 245)" />
        <rect x="505" y="210" width="20" height="100" fill="#06b6d4" opacity="0.5" transform="rotate(-1 515 260)" />
        <rect x="530" y="195" width="12" height="115" fill="#67e8f9" opacity="0.35" transform="rotate(3 536 252)" />
        <rect x="548" y="220" width="16" height="90" fill="#155e75" opacity="0.55" transform="rotate(-2 556 265)" />

        {/* Place Ville Marie — cross shape */}
        <g transform="translate(680, 230)" opacity="0.5">
          <rect x="-3" y="-40" width="6" height="80" fill="#22d3ee" />
          <rect x="-20" y="-3" width="40" height="6" fill="#22d3ee" />
        </g>
      </g>

      {/* St. Lawrence River — flowing fragments */}
      <g opacity="0.5">
        <path d="M0,340 Q200,320 400,345 Q600,365 800,335" stroke="url(#ice)" strokeWidth="30" fill="none" />
        <path d="M0,355 Q250,340 500,360 Q700,375 800,350" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.3" />
      </g>

      {/* Jacques-Cartier Bridge — deconstructed cables */}
      <g stroke="#67e8f9" opacity="0.3" strokeWidth="1" fill="none">
        <path d="M620,320 L660,260 L700,320" />
        <path d="M660,260 L660,320" />
        <path d="M635,295 L660,260 L685,295" strokeDasharray="3 3" />
        <line x1="620" y1="320" x2="700" y2="320" strokeWidth="1.5" />
      </g>

      {/* Floating geometric fragments — deconstructed fleur-de-lis motif */}
      <g opacity="0.25">
        <circle cx="100" cy="80" r="8" fill="#22d3ee" />
        <circle cx="720" cy="100" r="5" fill="#67e8f9" />
        <rect x="650" y="60" width="12" height="12" fill="#06b6d4" transform="rotate(45 656 66)" />
        <rect x="180" y="50" width="8" height="8" fill="#0891b2" transform="rotate(30 184 54)" />
        <polygon points="350,60 355,45 360,60" fill="#22d3ee" />
        <polygon points="740,180 746,168 752,180" fill="#67e8f9" opacity="0.5" />
      </g>

      {/* Snow / light particles */}
      <g fill="#e0f2fe" opacity="0.35">
        <circle cx="50" cy="120" r="1.5" />
        <circle cx="200" cy="40" r="1" />
        <circle cx="380" cy="90" r="1.5" />
        <circle cx="550" cy="50" r="1" />
        <circle cx="700" cy="130" r="1.5" />
        <circle cx="150" cy="180" r="1" />
        <circle cx="450" cy="160" r="1.2" />
        <circle cx="630" cy="70" r="0.8" />
        <circle cx="300" cy="120" r="1.3" />
        <circle cx="760" cy="40" r="1" />
      </g>

      {/* "MONTRÉAL" — fragmented typography */}
      <text
        x="400"
        y="380"
        textAnchor="middle"
        fill="#67e8f9"
        fontSize="14"
        fontFamily="monospace"
        letterSpacing="12"
        opacity="0.4"
      >
        MONTRÉAL
      </text>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 overflow-hidden">
      {/* Hero — Montréal deconstruct art */}
      <section className="relative py-16 flex flex-col items-center">
        <MontrealDeconstructArt />
      </section>

      {/* Sections */}
      <section className="relative py-16 grid md:grid-cols-3 gap-8">
        <Link href="/games" className="p-6 rounded-xl border border-gray-800 hover:border-cyan-800 transition-colors">
          <h2 className="text-lg font-semibold mb-2">🎮 Games</h2>
          <p className="text-sm text-gray-400">
            Browser-based games and interactive experiments.
          </p>
        </Link>
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
