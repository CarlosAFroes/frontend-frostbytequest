'use client'

import { useState, useEffect, useCallback } from 'react'

const ICONS: { name: string; path: string }[] = [
  { name: 'snowflake', path: 'M24 4v40M4 24h40M10.1 10.1l27.8 27.8M37.9 10.1L10.1 37.9M24 4l-4 6 4-2 4 2-4-6M24 44l-4-6 4 2 4-2-4 6M4 24l6-4-2 4 2 4-6-4M44 24l-6-4 2 4-2 4 6-4' },
  { name: 'penguin', path: 'M24 6c-6 0-10 4-10 10v4c-2 1-4 4-4 8 0 3 1 5 3 6v6c0 4 4 8 11 8s11-4 11-8v-6c2-1 3-3 3-6 0-4-2-7-4-8v-4c0-6-4-10-10-10zM20 22a2 2 0 1 1 0 4 2 2 0 0 1 0-4M28 22a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 30c1.5 2 4.5 2 6 0' },
  { name: 'mountain', path: 'M4 42L18 10l8 16 6-8 14 24H4zM18 10l-4 8M32 18l-3 5' },
  { name: 'crystal', path: 'M24 4l10 16v12L24 44 14 32V20L24 4zM14 20h20M14 32h20M24 4l-10 16M24 4l10 16M24 44l-10-12M24 44l10-12' },
  { name: 'tree', path: 'M24 4L10 20h6L8 34h6l-4 8h28l-4-8h6L32 20h6L24 4zM24 42v-8' },
  { name: 'bear', path: 'M16 10a5 5 0 0 1 0 10M32 10a5 5 0 0 0 0 10M14 18c0-4 4-8 10-8s10 4 10 8v10c0 8-4 14-10 14S14 36 14 28V18zM20 26a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M28 26a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 32c1 1.5 4 1.5 5 0' },
  { name: 'aurora', path: 'M4 40C10 20 16 14 24 14s14 6 20 26M8 38C14 22 19 18 24 18s10 4 16 20M12 36c5-12 8-14 12-14s7 2 12 14' },
  { name: 'fox', path: 'M12 12l-2-8 10 8M36 12l2-8-10 8M12 12c-4 4-6 10-6 16 0 8 8 16 18 16s18-8 18-16c0-6-2-12-6-16M19 28a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M29 28a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 34c1 1 3 1 4 0' },
  { name: 'moon', path: 'M32 8A16 16 0 1 0 32 40 12 12 0 0 1 32 8zM28 14a1 1 0 1 1 0 2M22 20a1 1 0 1 1 0 2M30 24a1 1 0 1 1 0 2' },
  { name: 'cabin', path: 'M6 26L24 10l18 16M10 26v14h28V26M20 40v-10h8v10M32 22v-6h6v12M14 32h4M14 36h4' },
]

interface Card {
  id: number
  iconIndex: number
  flipped: boolean
  matched: boolean
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function createDeck(): Card[] {
  const pairs = ICONS.map((_, i) => i)
  const deck = [...pairs, ...pairs].map((iconIndex, id) => ({
    id,
    iconIndex,
    flipped: false,
    matched: false,
  }))
  return shuffle(deck)
}

function CardIcon({ iconIndex }: { iconIndex: number }) {
  const icon = ICONS[iconIndex]
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={icon.path} />
    </svg>
  )
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [selected, setSelected] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [won, setWon] = useState(false)
  const [locked, setLocked] = useState(false)

  const initGame = useCallback(() => {
    setCards(createDeck())
    setSelected([])
    setMoves(0)
    setTime(0)
    setRunning(false)
    setWon(false)
    setLocked(false)
  }, [])

  useEffect(() => { initGame() }, [initGame])

  useEffect(() => {
    if (!running || won) return
    const t = setInterval(() => setTime(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [running, won])

  const handleClick = (id: number) => {
    if (locked || won) return
    const card = cards[id]
    if (card.flipped || card.matched) return

    if (!running) setRunning(true)

    const next = cards.map(c => c.id === id ? { ...c, flipped: true } : c)
    setCards(next)

    const newSelected = [...selected, id]
    setSelected(newSelected)

    if (newSelected.length === 2) {
      setMoves(m => m + 1)
      setLocked(true)
      const [a, b] = newSelected
      if (next[a].iconIndex === next[b].iconIndex) {
        const matched = next.map(c =>
          c.id === a || c.id === b ? { ...c, matched: true } : c
        )
        setCards(matched)
        setSelected([])
        setLocked(false)
        if (matched.every(c => c.matched)) setWon(true)
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.id === a || c.id === b ? { ...c, flipped: false } : c
            )
          )
          setSelected([])
          setLocked(false)
        }, 800)
      }
    }
  }

  const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🧊 Frost Match</h1>
        <button
          onClick={initGame}
          className="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          New Game
        </button>
      </div>

      <div className="flex gap-6 mb-6 text-sm text-gray-400">
        <div>Moves: <span className="text-white font-medium">{moves}</span></div>
        <div>Time: <span className="text-white font-medium">{fmt(time)}</span></div>
        <div>Pairs: <span className="text-white font-medium">{cards.filter(c => c.matched).length / 2}/10</span></div>
      </div>

      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`
              relative aspect-square rounded-xl transition-all duration-300 transform-gpu
              ${card.flipped || card.matched
                ? 'bg-gray-800 border-cyan-700 border rotate-y-0'
                : 'bg-gradient-to-br from-cyan-900/40 to-gray-800 border-gray-700 border hover:border-gray-500 hover:scale-105 cursor-pointer'
              }
              ${card.matched ? 'opacity-60 scale-95' : ''}
              flex items-center justify-center
            `}
            disabled={card.flipped || card.matched || locked}
          >
            <div className={`transition-opacity duration-200 ${card.flipped || card.matched ? 'opacity-100' : 'opacity-0'}`}>
              {(card.flipped || card.matched) && (
                <div className="text-cyan-400">
                  <CardIcon iconIndex={card.iconIndex} />
                </div>
              )}
            </div>
            {!card.flipped && !card.matched && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-lg">
                ❄
              </div>
            )}
          </button>
        ))}
      </div>

      {won && (
        <div className="mt-8 p-6 rounded-xl border border-cyan-800 bg-cyan-950/30 text-center">
          <h2 className="text-xl font-bold mb-2">🎉 You won!</h2>
          <p className="text-gray-400">
            Completed in <span className="text-white">{moves} moves</span> and{' '}
            <span className="text-white">{fmt(time)}</span>
          </p>
          <button
            onClick={initGame}
            className="mt-4 px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors text-sm font-medium"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}
