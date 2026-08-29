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
  Images,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
    title: "VerifyPH",
    description:
      "A collaborative, evidence-first Philippine news and claim-verification platform that pairs trusted source attribution with Gemini-assisted evidence analysis.",
    tags: ["Next.js", "Supabase", "Gemini API"],
    repo: "https://github.com/Mateeoow/verify-ph",
    live: "https://verify-ph-eight.vercel.app",
    visual: "verify",
    images: [
      {
        src: "/projects/verify-ph/01-news-feed.png",
        alt: "VerifyPH news feed showing verified stories from Philippine sources",
        caption: "Curated Philippine news feed",
      },
      {
        src: "/projects/verify-ph/02-verification-result.png",
        alt: "VerifyPH verified claim result with evidence summaries and linked sources",
        caption: "Evidence-backed claim verification",
      },
      {
        src: "/projects/verify-ph/03-information-crisis.png",
        alt: "VerifyPH information-crisis page explaining why verification matters",
        caption: "Misinformation awareness and research",
      },
    ],
  },
  {
    number: "02",
    title: "InTravel",
    description:
      "An offline-ready travel dashboard packaged as a Flutter Android app, with maps, trip planning, saved places, and dark mode.",
    tags: ["Flutter", "Dart", "Offline-first"],
    repo: "https://github.com/Mateeoow/intravel",
    visual: "travel",
    images: [
      {
        src: "/projects/intravel/01-home.png",
        alt: "InTravel mobile home screen showing destinations around Intramuros",
        caption: "Destination discovery home screen",
      },
      {
        src: "/projects/intravel/02-planner.png",
        alt: "InTravel trip planner with a budget field and tourist-site list",
        caption: "Budget-aware trip planning",
      },
      {
        src: "/projects/intravel/03-place-details.png",
        alt: "InTravel Fort Santiago details with hours, ticket prices, and history",
        caption: "Detailed destination guide",
      },
    ],
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
    images: [
      {
        src: "/projects/salary-manager/01-overview.png",
        alt: "Salary Manager overview dashboard with salary, deductions, and balance cards",
        caption: "Personal-finance overview",
      },
      {
        src: "/projects/salary-manager/02-salary-history.png",
        alt: "Salary Manager salary-history screen",
        caption: "Salary history and paycheck records",
      },
      {
        src: "/projects/salary-manager/03-categories.png",
        alt: "Salary Manager custom categories screen",
        caption: "Custom expense categories",
      },
    ],
  },
  {
    number: "04",
    title: "Sushi Bae",
    description:
      "A Flutter mobile application project exploring cross-platform interface development, reusable screens, and app structure.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    repo: "https://github.com/Mateeoow/sushi_bae",
    visual: "sushi",
    images: [
      {
        src: "/projects/sushi-bae/01-order-form.png",
        alt: "Sushi Bae order form with flavor, quantity, and customer details",
        caption: "Customer ordering flow",
      },
      {
        src: "/projects/sushi-bae/02-customer-receipt.png",
        alt: "Sushi Bae customer order receipt",
        caption: "Customer-facing order receipt",
      },
      {
        src: "/projects/sushi-bae/03-kitchen-copy.png",
        alt: "Sushi Bae kitchen copy with order and tray details",
        caption: "Kitchen-ready order summary",
      },
    ],
  },
  {
    number: "05",
    title: "Tetris",
    description:
      "A compact browser recreation of the classic falling-block puzzle, created as a hands-on JavaScript game project.",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Mateeoow/Tetris",
    visual: "tetris",
    images: [
      {
        src: "/projects/tetris/02-main-menu.png",
        alt: "Stack Tetris main menu with solo, versus, and drop-speed controls",
        caption: "Solo and versus game selection",
      },
      {
        src: "/projects/tetris/01-versus-match.png",
        alt: "Stack Tetris two-player versus match with side-by-side game boards",
        caption: "Two-player versus gameplay",
      },
      {
        src: "/projects/tetris/03-winner-screen.png",
        alt: "Stack Tetris game-over screen showing score, level, and cleared lines",
        caption: "Game results and replay options",
      },
    ],
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
      "cron-job.org",
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
    year: "Scholarship",
    title: "CHED Merit Scholarship Program (CMSP) Scholar",
    detail: "Commission on Higher Education",
    logo: "/affiliations/ched-seal.png",
    logoAlt: "Commission on Higher Education seal",
    logoClass: "logo-contain",
  },
  {
    year: "SHS",
    title: "With Highest Honors",
    detail: "Manuel A. Roxas High School",
    logo: "/affiliations/manuel-roxas-high-school.png",
    logoAlt: "Manuel A. Roxas High School logo",
    logoClass: "logo-roxas",
  },
  {
    year: "College",
    title: "Consistent Dean’s Lister",
    detail: "Pamantasan ng Lungsod ng Maynila",
    logo: "/affiliations/plm-seal.png",
    logoAlt: "Pamantasan ng Lungsod ng Maynila seal",
    logoClass: "logo-contain",
  },
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const preview = project.images[0];

  return (
    <figure className={`project-visual project-preview project-preview-${project.visual}`}>
      <div className="project-preview-bar" aria-hidden="true">
        <span className="project-preview-dots">
          <i />
          <i />
          <i />
        </span>
        <small>PROJECT PREVIEW</small>
      </div>
      <div className="project-preview-media">
        {project.visual === "travel" && (
          <Image
            className="project-preview-backdrop"
            src={preview.src}
            alt=""
            fill
            sizes="(max-width: 850px) min(100vw - 2.2rem, 470px), 380px"
            aria-hidden="true"
          />
        )}
        <Image
          className="project-preview-image"
          src={preview.src}
          alt={preview.alt}
          fill
          sizes="(max-width: 850px) min(100vw - 2.2rem, 470px), 380px"
        />
      </div>
      <figcaption>
        <span>{project.title}</span>
        <span>GALLERY / {String(project.images.length).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}

export function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [commandOpen, setCommandOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [gallery, setGallery] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const galleryDialogRef = useRef<HTMLDivElement>(null);
  const galleryCloseRef = useRef<HTMLButtonElement>(null);
  const galleryTriggerRef = useRef<HTMLButtonElement | null>(null);
  const touchOriginRef = useRef<{ x: number; y: number } | null>(null);

  const changeGalleryImage = useCallback((direction: -1 | 1) => {
    setGallery((current) => {
      if (!current) return current;

      const imageCount = projects[current.projectIndex].images.length;
      return {
        ...current,
        imageIndex: (current.imageIndex + direction + imageCount) % imageCount,
      };
    });
  }, []);

  const galleryProjectIndex = gallery?.projectIndex;

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
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const activationLine = window.innerHeight * 0.35;
      let nextSection = "";

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) continue;

        const bounds = section.getBoundingClientRect();
        if (bounds.top <= activationLine && bounds.bottom > activationLine) {
          nextSection = item.href.slice(1);
          break;
        }
      }

      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;

      if (atPageEnd) {
        nextSection = navItems.at(-1)?.href.slice(1) ?? "";
      }

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
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

  useEffect(() => {
    if (galleryProjectIndex === undefined) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = galleryTriggerRef.current;
    const focusFrame = window.requestAnimationFrame(() => {
      galleryCloseRef.current?.focus();
    });

    document.body.style.overflow = "hidden";

    const handleGalleryKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setGallery(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeGalleryImage(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        changeGalleryImage(1);
        return;
      }

      if (event.key !== "Tab" || !galleryDialogRef.current) return;

      const focusableElements = Array.from(
        galleryDialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleGalleryKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleGalleryKeyDown);
      document.body.style.overflow = previousOverflow;
      window.requestAnimationFrame(() => trigger?.focus());
    };
  }, [changeGalleryImage, galleryProjectIndex]);

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

  const activeGalleryProject = gallery ? projects[gallery.projectIndex] : null;
  const activeGalleryImage =
    gallery && activeGalleryProject
      ? activeGalleryProject.images[gallery.imageIndex]
      : null;

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
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={isActive ? "is-active" : undefined}
                href={item.href}
                key={item.href}
                aria-current={isActive ? "location" : undefined}
              >
                <span>{item.number}</span>
                {item.label}
              </a>
            );
          })}
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
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={isActive ? "is-active" : undefined}
                href={item.href}
                key={item.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.number}</span>
                {item.label}
              </a>
            );
          })}
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
            {projects.map((project, projectIndex) => (
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
                    <button
                      className="project-gallery-button"
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={`View ${project.title} project gallery`}
                      onClick={(event) => {
                        galleryTriggerRef.current = event.currentTarget;
                        setGallery({ projectIndex, imageIndex: 0 });
                      }}
                    >
                      <Images size={16} /> Gallery
                      <span>{String(project.images.length).padStart(2, "0")}</span>
                    </button>
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
                <ProjectVisual project={project} />
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
            <div className="education-mark">
              <Image
                src="/affiliations/plm-seal.png"
                alt="Pamantasan ng Lungsod ng Maynila seal"
                fill
                sizes="(max-width: 620px) 84px, (max-width: 850px) 104px, 140px"
              />
            </div>
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
                <div className="recognition-card-top">
                  <span>{item.year}</span>
                  {item.logo && (
                    <div className={`recognition-logo ${item.logoClass ?? ""}`}>
                      <Image
                        src={item.logo}
                        alt={item.logoAlt ?? ""}
                        fill
                        sizes="68px"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="involvement-list" data-reveal>
            <article>
              <div className="involvement-meta">
                <span className="involvement-year">2025–2026</span>
                <div className="involvement-logo logo-contain">
                  <Image
                    src="/affiliations/gdgoc-plm.png"
                    alt="Google Developer Groups on Campus PLM logo"
                    fill
                    sizes="76px"
                  />
                </div>
              </div>
              <div>
                <h3>Google Developer Groups on Campus</h3>
                <p>Creatives Committee · First-year member</p>
              </div>
            </article>
            <article>
              <div className="involvement-meta">
                <span className="involvement-year">Senior High</span>
                <div className="involvement-logo logo-contain">
                  <Image
                    src="/affiliations/rmmo.png"
                    alt="Roxasian Moments Multimedia Organization logo"
                    fill
                    sizes="76px"
                  />
                </div>
              </div>
              <div>
                <h3>Roxasian Moments Multimedia Organization</h3>
                <p>
                  Master of Peace / Protocol Officer · Supported publication work,
                  team cooperation, and a collaborative environment.
                </p>
              </div>
            </article>
            <article>
              <div className="involvement-meta">
                <span className="involvement-year">School events</span>
                <div className="involvement-logo logo-roxas">
                  <Image
                    src="/affiliations/manuel-roxas-high-school.png"
                    alt="Manuel A. Roxas High School logo"
                    fill
                    sizes="76px"
                  />
                </div>
              </div>
              <div>
                <h3>Creative and event support</h3>
                <p>
                  Emcee for the TVL/TLE Month opening, facilitator for TechnoQuiz and
                  Art Tech, and support for the 2024 and 2025 SSLG elections.
                </p>
              </div>
            </article>
          </div>

          <div className="campus-moments" data-reveal>
            <div className="campus-moments-copy">
              <span>Beyond the classroom</span>
              <h3>Moments that taught me how to lead, support, and compete.</h3>
              <p>
                A small record of the events, service, and academic challenges that
                shaped how I work with people.
              </p>
            </div>
            <div className="moment-grid">
              <figure className="moment-card">
                <span className="moment-index">01</span>
                <div className="moment-media">
                  <Image
                    src="/affiliations/tvl-tle-month-opening.jpg"
                    alt="Martin Gayem with fellow students at the TVL/TLE Month opening"
                    width={200}
                    height={133}
                    sizes="200px"
                  />
                </div>
                <figcaption>
                  <span>Event hosting</span>
                  <strong>TVL/TLE Month opening</strong>
                  <p>Emcee</p>
                </figcaption>
              </figure>
              <figure className="moment-card">
                <span className="moment-index">02</span>
                <div className="moment-media">
                  <Image
                    src="/affiliations/sslg-election.jpg"
                    alt="Martin Gayem supporting an SSLG election activity"
                    width={200}
                    height={133}
                    sizes="200px"
                  />
                </div>
                <figcaption>
                  <span>Student service</span>
                  <strong>SSLG election</strong>
                  <p>RMMO support</p>
                </figcaption>
              </figure>
              <figure className="moment-card moment-card-square">
                <span className="moment-index">03</span>
                <div className="moment-media">
                  <Image
                    src="/affiliations/science-quiz-bee-champion.png"
                    alt="Science Quiz Bee champion recognition featuring Martin Gayem"
                    width={200}
                    height={200}
                    sizes="200px"
                  />
                </div>
                <figcaption>
                  <span>Academic milestone</span>
                  <strong>Science Quiz Bee</strong>
                  <p>Champion</p>
                </figcaption>
              </figure>
              <figure className="moment-card moment-card-wide">
                <span className="moment-index">04</span>
                <div className="moment-media">
                  <Image
                    src="/affiliations/devfest-manila.png"
                    alt="DevFest Manila community group photo with attendees and organizers"
                    width={1280}
                    height={719}
                    sizes="200px"
                  />
                </div>
                <figcaption>
                  <span>Developer community</span>
                  <strong>DevFest Manila</strong>
                  <p>Community event</p>
                </figcaption>
              </figure>
            </div>
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

      {gallery && activeGalleryProject && activeGalleryImage && (
        <div
          className="gallery-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setGallery(null);
          }}
        >
          <div
            className="gallery-dialog"
            ref={galleryDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            aria-describedby="gallery-caption"
          >
            <div className="gallery-header">
              <div>
                <span>PROJECT GALLERY / {activeGalleryProject.number}</span>
                <h2 id="gallery-title">{activeGalleryProject.title}</h2>
              </div>
              <button
                className="gallery-close"
                ref={galleryCloseRef}
                type="button"
                onClick={() => setGallery(null)}
                aria-label={`Close ${activeGalleryProject.title} gallery`}
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="gallery-stage"
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchOriginRef.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                const origin = touchOriginRef.current;
                const touch = event.changedTouches[0];
                touchOriginRef.current = null;

                if (!origin || !touch) return;

                const deltaX = touch.clientX - origin.x;
                const deltaY = touch.clientY - origin.y;
                if (Math.abs(deltaX) > 52 && Math.abs(deltaX) > Math.abs(deltaY)) {
                  changeGalleryImage(deltaX > 0 ? -1 : 1);
                }
              }}
            >
              <div className="gallery-image" key={activeGalleryImage.src}>
                <Image
                  src={activeGalleryImage.src}
                  alt={activeGalleryImage.alt}
                  fill
                  sizes="(max-width: 620px) calc(100vw - 1rem), (max-width: 1200px) calc(100vw - 4rem), 1120px"
                />
              </div>
              <button
                className="gallery-nav gallery-nav-previous"
                type="button"
                onClick={() => changeGalleryImage(-1)}
                aria-label="Show previous project image"
              >
                <ArrowDown size={20} />
              </button>
              <button
                className="gallery-nav gallery-nav-next"
                type="button"
                onClick={() => changeGalleryImage(1)}
                aria-label="Show next project image"
              >
                <ArrowDown size={20} />
              </button>
            </div>

            <div className="gallery-footer">
              <div className="gallery-caption" id="gallery-caption" aria-live="polite">
                <span>
                  {String(gallery.imageIndex + 1).padStart(2, "0")} /{" "}
                  {String(activeGalleryProject.images.length).padStart(2, "0")}
                </span>
                <p>{activeGalleryImage.caption}</p>
              </div>
              <div className="gallery-thumbnails" aria-label="Choose a project image">
                {activeGalleryProject.images.map((image, imageIndex) => (
                  <button
                    className={imageIndex === gallery.imageIndex ? "is-active" : ""}
                    type="button"
                    key={image.src}
                    aria-label={`Show image ${imageIndex + 1}: ${image.caption}`}
                    aria-pressed={imageIndex === gallery.imageIndex}
                    onClick={() =>
                      setGallery((current) =>
                        current ? { ...current, imageIndex } : current,
                      )
                    }
                  >
                    <Image src={image.src} alt="" fill sizes="72px" />
                    <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
              <span className="gallery-hint">Swipe or use arrow keys</span>
            </div>
          </div>
        </div>
      )}

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
