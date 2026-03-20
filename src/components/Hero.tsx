import { useState, useEffect, useRef } from 'react'

const ROLES = [
  'Full Stack Developer',
  'Web3 Builder',
  'Game Developer',
  'React Specialist',
  'Node.js Engineer',
]

function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const ref = useRef({ words, speed, pause })

  useEffect(() => {
    ref.current = { words, speed, pause }
  })

  useEffect(() => {
    const { words: w, speed: s, pause: p } = ref.current
    const current = w[idx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), s)
      } else {
        timeout = setTimeout(() => setDeleting(true), p)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), s / 2)
      } else {
        setDeleting(false)
        setIdx(i => (i + 1) % w.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, idx])

  return text
}

export default function Hero() {
  const role = useTypewriter(ROLES)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden">
      {/* corner decorations */}
      <div className="absolute top-20 left-6 text-hack-green/20 text-xs font-mono hidden lg:block select-none">
        <div>{'> SYSTEM ONLINE'}</div>
        <div>{'> LOADING PROFILE...'}</div>
        <div>{'> ACCESS GRANTED'}</div>
      </div>
      <div className="absolute top-20 right-6 text-hack-green/20 text-xs font-mono text-right hidden lg:block select-none">
        <div>v2.0.26</div>
        <div>STATUS: OPEN_TO_WORK</div>
        <div>LOC: TOPOLA, RS</div>
      </div>

      {/* main content */}
      <div className={`text-center px-6 max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-hack-green/70 text-xs tracking-[0.4em] mb-6 font-mono uppercase">
          {'// initializing...'} <span className="animate-pulse">█</span>
        </p>

        <h1
          className="glitch font-display font-black text-white mb-4 leading-tight"
          data-text="MILAN SREMCEVIC"
          style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)', letterSpacing: '0.08em' }}
        >
          MILAN SREMCEVIC
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8 min-h-[2rem]">
          <span className="text-hack-green/50 text-lg font-mono">&gt;</span>
          <span className="text-hack-cyan text-lg md:text-2xl font-mono glow-cyan-text cursor">
            {role}
          </span>
        </div>

        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Self-taught developer from Serbia building{' '}
          <span className="text-hack-green/80">Web3 apps</span>,{' '}
          <span className="text-hack-cyan/80">2D games</span> and{' '}
          <span className="text-hack-green/80">crypto analytics tools</span>.
          One commit at a time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Contact Me
          </button>
          <a
            href="https://github.com/milanethdev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-hack-green transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            milanethdev
          </a>
        </div>

        {/* stats */}
        <div className="flex flex-wrap justify-center gap-8 border-t border-hack-border pt-8">
          {[
            { val: '3+', label: 'Projects' },
            { val: '1yr', label: 'Binance' },
            { val: '2022', label: 'Coding Since' },
            { val: 'Open', label: 'To Work' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-hack-green text-xl font-bold glow-green-text">{s.val}</div>
              <div className="text-gray-600 text-xs mt-1 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-hack-green/60 to-transparent" />
      </div>
    </section>
  )
}
