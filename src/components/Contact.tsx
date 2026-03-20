import { useRef, useEffect, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('milan@outlook.at')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 max-w-4xl mx-auto">
      <div className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-4 mb-16">
          <span className="text-hack-green font-mono text-sm">//</span>
          <h2 className="section-title">Contact</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-hack-green/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Terminal message */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
              <span className="text-gray-500 text-xs font-mono ml-2">contact.sh</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3 text-gray-400">
              <p><span className="text-hack-green">$</span> <span className="text-gray-300">./send_message.sh</span></p>
              <p className="text-gray-500"># Open to junior dev roles, freelance &</p>
              <p className="text-gray-500"># collaboration on Web3 / game projects.</p>
              <br />
              <p><span className="text-hack-cyan">echo</span> <span className="text-yellow-400">"Let's build something cool"</span></p>
              <br />
              <p className="text-hack-green">{'>'} Let's build something cool</p>
              <p className="cursor text-hack-green" />
            </div>
          </div>

          {/* Right: contact links */}
          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'Email',
                value: 'milan@outlook.at',
                action: copyEmail,
                hint: copied ? '✓ Copied!' : 'Click to copy',
                color: '#00ff41',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                ),
                label: 'GitHub',
                value: 'github.com/milanethdev',
                action: () => window.open('https://github.com/milanethdev', '_blank'),
                hint: 'View repositories',
                color: '#00e5ff',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'linkedin.com/in/milan-sremcevic',
                action: () => window.open('https://linkedin.com/in/milan-sremcevic', '_blank'),
                hint: 'Connect with me',
                color: '#0a66c2',
              },
            ].map(item => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full hack-card rounded-xl p-5 flex items-center gap-4 text-left group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: item.color + '15', color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-600 font-mono mb-0.5 uppercase tracking-widest">{item.label}</div>
                  <div className="text-gray-300 font-mono text-sm truncate group-hover:text-white transition-colors">{item.value}</div>
                </div>
                <div className="text-xs font-mono shrink-0" style={{ color: item.color + '80' }}>{item.hint}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-hack-border flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600 font-mono">
        <span>{'// '} Built with React + TypeScript + Tailwind</span>
        <span className="text-hack-green/50">Milan Sremcevic © 2026</span>
      </div>
    </section>
  )
}
