import { useRef, useEffect, useState } from 'react'

interface Skill { name: string; level: number; color: string; icon: string }

const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 82, color: '#f7df1e', icon: 'JS' },
  { name: 'React',      level: 80, color: '#61dafb', icon: 'Re' },
  { name: 'Node.js',    level: 72, color: '#339933', icon: 'No' },
  { name: 'TypeScript', level: 65, color: '#3178c6', icon: 'TS' },
  { name: 'Tailwind',   level: 78, color: '#06b6d4', icon: 'Tw' },
  { name: 'Canvas API', level: 70, color: '#ff6b35', icon: 'Cv' },
  { name: 'Web3 / Eth', level: 60, color: '#627eea', icon: 'W3' },
  { name: 'PHP',        level: 50, color: '#8892be', icon: 'Ph' },
]

const TOOLS = ['Vite', 'Git/GitHub', 'VS Code', 'npm/yarn', 'REST APIs', 'WebSockets', 'Redis', 'Etherscan API', 'CoinGecko API', 'Binance API', 'Figma', 'Postman']

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-hack-green font-mono text-sm">//</span>
            <h2 className="section-title">Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-hack-green/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {SKILLS.map((sk, i) => (
              <div
                key={sk.name}
                className="hack-card rounded-lg p-5"
                style={{ transitionDelay: vis ? i * 60 + 'ms' : '0ms' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center text-xs font-bold font-mono"
                      style={{ background: sk.color + '18', color: sk.color, border: '1px solid ' + sk.color + '35' }}
                    >
                      {sk.icon}
                    </div>
                    <span className="text-gray-300 text-sm font-mono">{sk.name}</span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: sk.color }}>{sk.level}%</span>
                </div>
                <div className="h-1.5 bg-hack-border rounded-full overflow-hidden">
                  {vis && (
                    <div
                      className="h-full rounded-full skill-bar"
                      style={{
                        '--target-w': sk.level + '%',
                        background: 'linear-gradient(90deg, ' + sk.color + '99, ' + sk.color + ')',
                        animationDelay: i * 80 + 'ms',
                      } as React.CSSProperties}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
              <span className="text-gray-500 text-xs font-mono ml-2">milan@portfolio:~$ ls tools/</span>
            </div>
            <div className="p-5 flex flex-wrap gap-2">
              {TOOLS.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
