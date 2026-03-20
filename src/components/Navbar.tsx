import { useState, useEffect } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.toLowerCase())
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 120 && r.bottom >= 120) { setActive(link.toLowerCase()); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur border-b border-hack-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-hack-green text-base font-bold glow-green-text hover:opacity-80 transition-opacity"
        >
          &lt;milan.dev /&gt;
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm transition-all duration-200 hover:text-hack-green tracking-widest ${
                active === link.toLowerCase() ? 'text-hack-green glow-green-text' : 'text-gray-500'
              }`}
            >
              <span className="text-hack-green/40 mr-1 text-xs">./</span>{link}
            </button>
          ))}
          <a
            href="mailto:milan@outlook.at"
            className="btn-primary text-xs py-2 px-4"
          >
            Hire Me
          </a>
        </div>

        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-0.5 bg-hack-green transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-hack-green transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-hack-green transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-b border-hack-border px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-300 hover:text-hack-green transition-colors py-1 text-sm tracking-wider"
            >
              <span className="text-hack-green mr-2 text-xs">$</span>{link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
