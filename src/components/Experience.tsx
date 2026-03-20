import { useRef, useEffect, useState } from 'react'

const ITEMS = [
  {
    role: 'Binance Angel',
    company: 'Binance',
    period: '2023 – 2024',
    duration: '~1 year',
    desc: 'Community representative and ambassador for the Binance ecosystem. Supported the global Binance community, organized educational events, and provided user support for trading platforms and DeFi products.',
    tags: ['Community', 'Crypto', 'DeFi', 'BNB', 'Trading'],
    color: '#f0b90b',
    icon: '🟡',
  },
  {
    role: 'Self-Taught Developer',
    company: 'Freelance / Personal Projects',
    period: '2022 – Present',
    duration: '3+ years',
    desc: 'Building full-stack web apps, 2D browser games and crypto analytics tools. Mastered React, Node.js, TypeScript, Canvas API and Web3 integrations through hands-on project development.',
    tags: ['React', 'Node.js', 'TypeScript', 'Web3', 'Canvas API'],
    color: '#00ff41',
    icon: '💻',
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-hack-green font-mono text-sm">//</span>
            <h2 className="section-title">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-hack-green/30 to-transparent" />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-hack-green/50 via-hack-green/20 to-transparent" />

            <div className="space-y-10">
              {ITEMS.map((item, i) => (
                <div
                  key={item.role}
                  className="relative pl-14"
                  style={{ transitionDelay: vis ? i * 150 + 'ms' : '0ms' }}
                >
                  <div
                    className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-lg border"
                    style={{ background: item.color + '15', borderColor: item.color + '50' }}
                  >
                    {item.icon}
                  </div>

                  <div className="hack-card rounded-xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="text-white font-display font-bold text-base" style={{ letterSpacing: '0.05em' }}>
                          {item.role}
                        </h3>
                        <p className="font-mono mt-0.5" style={{ color: item.color, fontSize: '0.8rem' }}>
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-500 text-xs font-mono">{item.period}</div>
                        <div className="text-xs font-mono mt-0.5" style={{ color: item.color + 'aa' }}>{item.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-4">{item.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(t => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{ background: item.color + '10', border: '1px solid ' + item.color + '30', color: item.color }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
