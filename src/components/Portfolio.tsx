"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Command,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { label: "Projects", href: "#projects", number: "01" },
  { label: "Stack", href: "#stack", number: "02" },
  { label: "Education", href: "#education", number: "03" },
  { label: "Recognition", href: "#recognition", number: "04" },
  { label: "GitHub", href: "#github", number: "05" },
  { label: "Contact", href: "#contact", number: "06" },
];

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=gayemmartin%40gmail.com&su=Portfolio%20Inquiry";

const projects = [
  {
    number: "01",
    title: "Noble 3D Chess",
    description:
      "A fully playable 3D chess game with an interactive board and a standalone rules engine, built as a complete solo project.",
    tags: ["Next.js", "TypeScript", "Three.js"],
    repo: "https://github.com/Mateeoow/3D-Chess-Game",
    live: "https://3d-chess-game-alpha.vercel.app",
    visual: "chess",
  },
  {
    number: "02",
    title: "InTravel",
    description:
      "An offline-ready travel dashboard packaged as a Flutter Android app, with maps, trip planning, saved places, and dark mode.",
    tags: ["Flutter", "Dart", "Offline-first"],
    repo: "https://github.com/Mateeoow/intravel",
    visual: "travel",
  },
  {
    number: "03",
    title: "Salary Manager",
    description:
      "A personal-finance dashboard for tracking salary, deductions, savings, and custom categories with persistent cloud-backed data.",
    tags: ["JavaScript", "Supabase", "Netlify"],
    repo: "https://github.com/Mateeoow/salary-manager",
    live: "https://salary-manager-ebon.vercel.app",
    visual: "finance",
  },
  {
    number: "04",
    title: "Sushi Bae",
    description:
      "A Flutter mobile application project exploring cross-platform interface development, reusable screens, and app structure.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    repo: "https://github.com/Mateeoow/sushi_bae",
    visual: "sushi",
  },
  {
    number: "05",
    title: "Tetris",
    description:
      "A compact browser recreation of the classic falling-block puzzle, created as a hands-on JavaScript game project.",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Mateeoow/Tetris",
    visual: "tetris",
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++"],
  },
  {
    label: "Web & mobile",
    skills: ["HTML", "CSS", "Next.js", "Node.js", "Three.js", "Flutter"],
  },
  {
    label: "Data & cloud",
    skills: [
      "Supabase",
      "Cloudflare",
      "Google Cloud",
      "Vercel",
      "Netlify",
    ],
  },
  {
    label: "Tools & design",
    skills: ["Git", "GitHub", "Figma", "Canva", "Photoshop"],
  },
];

const recognition = [
  {
    year: "SHS",
    title: "With Highest Honors",
    detail: "Manuel A. Roxas High School",
  },
  {
    year: "College",
    title: "Consistent Dean’s Lister",
    detail: "Pamantasan ng Lungsod ng Maynila",
  },
  {
    year: "Academic",
    title: "Science Quiz Bee Champion",
    detail: "School-level competition",
  },
  {
    year: "Academic",
    title: "Math Quiz Bee Champion",
    detail: "School-level competition",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "chess") {
    return (
      <div className="project-visual chess-visual" aria-hidden="true">
        {Array.from({ length: 25 }, (_, index) => (
          <span key={index} className={index % 2 === Math.floor(index / 5) % 2 ? "lit" : ""} />
        ))}
        <b>♞</b>
      </div>
    );
  }

  if (type === "travel") {
    return (
      <div className="project-visual travel-visual" aria-hidden="true">
        <span className="route route-a" />
        <span className="route route-b" />
        <span className="pin pin-a" />
        <span className="pin pin-b" />
        <span className="pin pin-c" />
        <small>MNL — NEXT STOP</small>
      </div>
    );
  }

  if (type === "finance") {
    return (
      <div className="project-visual finance-visual" aria-hidden="true">
        <small>MONTHLY OVERVIEW</small>
        <strong>₱ 24,800</strong>
        <div className="bars">
          {[32, 48, 41, 67, 56, 84, 73].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (type === "sushi") {
    return (
      <div className="project-visual sushi-visual" aria-hidden="true">
        <span className="plate" />
        <span className="roll roll-a" />
        <span className="roll roll-b" />
        <span className="roll roll-c" />
        <small>FLUTTER / MOBILE</small>
      </div>
    );
  }

  return (
    <div className="project-visual tetris-visual" aria-hidden="true">
      <span className="block b1" />
      <span className="block b2" />
      <span className="block b3" />
      <span className="block b4" />
      <small>LINES / 004</small>
    </div>
  );
}

export function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [commandOpen, setCommandOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const current = document.documentElement.dataset.theme;
      setTheme(current === "light" ? "light" : "dark");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let sequence = "";
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setQuery("");
        setCommandOpen((open) => !open);
        return;
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setMenuOpen(false);
        return;
      }

      if (!isTyping && event.key.length === 1) {
        sequence = `${sequence}${event.key.toLowerCase()}`.slice(-6);
        if (sequence === "martin") {
          setEasterEgg(true);
          window.setTimeout(() => setEasterEgg(false), 4500);
          sequence = "";
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let focusTimer: number | undefined;

    if (commandOpen) {
      focusTimer = window.setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (focusTimer) window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
    };
  }, [commandOpen]);

  const commands = useMemo(
    () => [
      ...navItems.map((item) => ({
        label: `Go to ${item.label}`,
        meta: item.number,
        action: () => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
          setCommandOpen(false);
        },
      })),
      {
        label: "Open GitHub profile",
        meta: "↗",
        action: () => {
          window.open("https://github.com/Mateeoow", "_blank", "noopener,noreferrer");
          setCommandOpen(false);
        },
      },
      {
        label: "Send Martin an email",
        meta: "↗",
        action: () => {
          window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
          setCommandOpen(false);
        },
      },
    ],
    [],
  );

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("martin-theme", nextTheme);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("gayemmartin@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Martin Gayem, back to top">
          <span>MG</span>
          <small>/26</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="command-trigger"
            type="button"
            onClick={() => {
              setQuery("");
              setCommandOpen(true);
            }}
            aria-label="Open quick navigation"
          >
            <Command size={14} />
            <span>Navigate</span>
            <kbd>⌘ K</kbd>
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="status-dot" />
              Portfolio / 2026
            </div>
            <h1>
              Martin
              <br />
              <span>Gayem.</span>
            </h1>
            <p className="hero-role">BSCS student · aspiring software engineer</p>
            <p className="hero-bio">
              I’m a second-year BSCS student learning through hands-on web, mobile,
              and interactive projects. I’m interested in software engineering,
              thoughtful interface design, and turning ideas into practical
              applications while continually improving my technical skills.
            </p>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Manila, Philippines
              </span>
              <span>Open to collaboration</span>
            </div>
            <div className="hero-cta">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>
              <a
                className="button button-ghost"
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Let’s talk <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="portrait-column" data-reveal>
            <div className="portrait-frame">
              <div className="portrait-label">
                <span>PORTRAIT / 01</span>
                <span>MANILA</span>
              </div>
              <Image
                src="/martin-gayem.png"
                alt="Portrait of Martin Gayem"
                fill
                sizes="(max-width: 850px) 76vw, 380px"
                preload
              />
              <div className="portrait-overlay" aria-hidden="true" />
              <div className="portrait-corners" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-numbers">
              <div>
                <strong>05</strong>
                <span>public projects</span>
              </div>
              <div>
                <strong>02</strong>
                <span>year in BSCS</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>room to grow</span>
              </div>
            </div>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-number">01</span>
              <p>Selected work</p>
            </div>
            <h2>Projects built to learn, test ideas, and solve real problems.</h2>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title} data-reveal>
                <div className="project-copy">
                  <span className="project-number">/{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <Code2 size={16} /> Source <ArrowUpRight size={14} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} /> Live demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <ProjectVisual type={project.visual} />
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-number">02</span>
              <p>Current stack</p>
            </div>
            <h2>Tools I use to move from an idea to a working project.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, groupIndex) => (
              <article className="skill-group" key={group.label} data-reveal>
                <div className="skill-group-head">
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.label}</h3>
                </div>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="stack-note" data-reveal>
            A practical toolkit, still growing with every project.
          </p>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-number">03</span>
              <p>Education</p>
            </div>
            <h2>Building a strong computer science foundation in Manila.</h2>
          </div>

          <article className="education-card" data-reveal>
            <div className="education-mark" aria-hidden="true">PLM</div>
            <div className="education-main">
              <span>2025 — Present</span>
              <h3>Pamantasan ng Lungsod ng Maynila</h3>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <div className="education-status">
              <span className="status-dot" />
              Second year · AY 2026–2027
            </div>
          </article>
        </section>

        <section className="section recognition-section" id="recognition">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-number">04</span>
              <p>Recognition & involvement</p>
            </div>
            <h2>Academic consistency, leadership, and creative contribution.</h2>
          </div>

          <div className="recognition-grid">
            {recognition.map((item) => (
              <article className="recognition-card" key={item.title} data-reveal>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="involvement-list" data-reveal>
            <article>
              <span className="involvement-year">2025–2026</span>
              <div>
                <h3>Google Developer Groups on Campus</h3>
                <p>Creatives Committee · First-year member</p>
              </div>
            </article>
            <article>
              <span className="involvement-year">Senior High</span>
              <div>
                <h3>Roxasian Moments Multimedia Organization</h3>
                <p>
                  Master of Peace / Protocol Officer · Supported publication work,
                  team cooperation, and a collaborative environment.
                </p>
              </div>
            </article>
            <article>
              <span className="involvement-year">School events</span>
              <div>
                <h3>Creative and event support</h3>
                <p>
                  Emcee for the TVL/TLE Month opening, facilitator for TechnoQuiz and
                  Art Tech, and support for the 2024 and 2025 SSLG elections.
                </p>
              </div>
            </article>
          </div>

          <div className="activity-strip" data-reveal>
            <span>Additional involvement</span>
            <p>Mr. & Ms. UN · Mr. & Ms. Sipnayan · Filipino Month · Student Achiever</p>
          </div>
        </section>

        <section className="section github-section" id="github">
          <div className="github-panel" data-reveal>
            <div className="github-copy">
              <span className="section-number">05</span>
              <p className="github-kicker">Public build log</p>
              <h2>See the work as it evolves.</h2>
              <p>
                My GitHub holds the source behind these projects, along with the
                experiments and iterations that shaped them.
              </p>
              <a
                className="button button-primary"
                href="https://github.com/Mateeoow"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} /> @Mateeoow <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="github-terminal" aria-label="GitHub profile summary">
              <div className="terminal-head">
                <span />
                <span />
                <span />
                <small>public-profile.log</small>
              </div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p>
                <strong>Mateeoow</strong>
                <p><b>$</b> focus --current</p>
                <strong>web · mobile · interactive builds</strong>
                <p><b>$</b> repos --featured</p>
                <strong>5 selected projects</strong>
                <p className="terminal-cursor"><b>$</b> <i /></p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true" />
          <div className="contact-content" data-reveal>
            <span className="section-number">06</span>
            <p>Have an idea, opportunity, or project?</p>
            <h2>Let’s build something worth learning from.</h2>
            <div className="contact-email-row">
              <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
                gayemmartin@gmail.com
              </a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
            <div className="contact-links">
              <a href="https://github.com/Mateeoow" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-gayem-70079138b"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={18} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
                <Mail size={18} /> Email <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Martin Gayem © {new Date().getFullYear()}</span>
        <span>Designed & built in Manila</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      {commandOpen && (
        <div
          className="command-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setCommandOpen(false);
          }}
        >
          <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Quick navigation">
            <div className="command-search">
              <Search size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Where do you want to go?"
                aria-label="Search navigation commands"
              />
              <kbd>ESC</kbd>
            </div>
            <div className="command-results">
              <span>QUICK LINKS</span>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command) => (
                  <button type="button" onClick={command.action} key={command.label}>
                    <span>{command.label}</span>
                    <kbd>{command.meta}</kbd>
                  </button>
                ))
              ) : (
                <p className="command-empty">No matching destination.</p>
              )}
            </div>
            <div className="command-footer">
              <span><kbd>Tab</kbd> to browse</span>
              <span><kbd>↵</kbd> to open</span>
            </div>
          </div>
        </div>
      )}

      {easterEgg && (
        <div className="easter-toast" role="status">
          <Terminal size={17} />
          <div>
            <strong>Easter egg unlocked.</strong>
            <span>Keep building. The next version is always better.</span>
          </div>
          <button type="button" onClick={() => setEasterEgg(false)} aria-label="Close message">
            <X size={15} />
          </button>
        </div>
      )}
    </>
  );
}
