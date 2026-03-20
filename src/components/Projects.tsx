import { useRef, useEffect, useState } from "react";

interface Project {
  name: string;
  desc: string;
  stack: string[];
  status: "In Progress" | "Live" | "Completed";
  github?: string;
  demo?: string;
  emoji: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    name: "Recenzije Knjiga",
    desc: "A full-stack book review blog platform where readers discover, rate and review books. Features a custom CMS, user comments, search and a clean reading-focused UI.",
    stack: ["React", "Node.js", "TypeScript", "Tailwind", "PHP"],
    status: "In Progress",
    github: "https://github.com/milanethdev",
    demo: "https://recenzijeknjiga.blog",
    emoji: "📚",
    color: "#00ff41",
  },
  {
    name: "Arena",
    desc: "Advanced 2D game.",
    stack: ["JavaScript", "React"],
    status: "In Progress",
    github: "https://github.com/milanethdev",
    emoji: "🏟️",
    color: "#00e5ff",
  },
  {
    name: "Blokscope",
    desc: "Crypto analytics platform with real-time whale tracking, mempool analysis, token contract verification, and price prediction dashboards.",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "CoinGecko API",
      "Etherscan API",
      "Redis",
    ],
    status: "In Progress",
    github: "https://github.com/milanethdev",
    emoji: "📊",
    color: "#bd00ff",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div
        className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="text-hack-green font-mono text-sm">//</span>
          <h2 className="section-title">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-hack-green/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="hack-card rounded-xl p-6 flex flex-col group"
              style={{
                transitionDelay: vis ? i * 100 + "ms" : "0ms",
                borderColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = p.color + "60")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "transparent")
              }
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{p.emoji}</div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    background: p.color + "12",
                    border: "1px solid " + p.color + "40",
                    color: p.color,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <h3
                className="text-white font-display font-bold text-lg mb-3 group-hover:text-hack-green transition-colors"
                style={{ letterSpacing: "0.05em" }}
              >
                {p.name}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="tech-tag">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-hack-border pt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-hack-green transition-colors text-xs"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Source
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-hack-cyan transition-colors text-xs"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/milanethdev"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-block text-sm"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
