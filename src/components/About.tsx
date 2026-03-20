import { useRef, useEffect, useState } from "react";
import profileImg from "../assets/image.jpg";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div
        className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="text-hack-green font-mono text-sm">//</span>
          <h2 className="section-title">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-hack-green/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Profile picture ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-lg border-2 border-hack-green/40 glow-green floating overflow-hidden">
                <img
                  src={profileImg}
                  alt="Milan Sremcevic"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 w-full h-full border border-hack-green/15 rounded-lg pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-hack-green/08 rounded-lg pointer-events-none" />

              {/* OPEN TO WORK badge */}
              <div className="absolute -top-3 -left-3 bg-hack-card border border-hack-green/30 rounded px-3 py-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-hack-green animate-pulse" />
                <span className="text-hack-green text-xs font-mono">
                  OPEN TO WORK
                </span>
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-3 -left-3 bg-hack-card border border-hack-border rounded px-3 py-1 flex items-center gap-2">
                <span className="text-xs">📍</span>
                <span className="text-gray-400 text-xs font-mono">
                  Topola, Serbia
                </span>
              </div>
            </div>
          </div>

          {/* ── Terminal bio ── */}
          <div className="terminal">
            <div className="terminal-header">
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
              <span className="text-gray-500 text-xs font-mono ml-2">
                milan@portfolio:~$
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-hack-green/70 mb-1">
                <span className="text-hack-cyan">cat</span> about.txt
              </p>
              <div className="text-gray-400 mt-4 space-y-3">
                <p>
                  Hey! I'm{" "}
                  <span className="text-hack-green font-semibold">
                    Milan Sremcevic
                  </span>
                  , a self-taught Full Stack Developer from{" "}
                  <span className="text-hack-cyan">Topola, Serbia</span>.
                </p>
                <p>
                  Passionate about building{" "}
                  <span className="text-hack-green">Web3 applications</span>,
                  interactive <span className="text-hack-cyan">2D games</span>,
                  and real-time{" "}
                  <span className="text-hack-green">crypto analytics</span>{" "}
                  tools.
                </p>
                <p>
                  I work with React, Node.js and modern JavaScript — constantly
                  pushing what's possible in the browser. Former{" "}
                  <span className="text-hack-cyan">Binance Angel</span>.
                </p>
                <p>Currently building the future, one commit at a time. 🚀</p>
              </div>

              <div className="mt-5 pt-5 border-t border-hack-border grid grid-cols-2 gap-3 text-xs">
                {[
                  ["📍", "Topola, Serbia"],
                  ["📧", "milan@outlook.at"],
                  ["💼", "Open to Work"],
                  ["🐙", "github/milanethdev"],
                ].map(([icon, val]) => (
                  <div
                    key={val}
                    className="flex items-center gap-2 text-gray-500"
                  >
                    <span>{icon}</span>
                    <span className="text-gray-400">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
