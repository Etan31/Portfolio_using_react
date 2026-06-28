import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import emailjs from "emailjs-com";

import profile from "./imgs/profile-1by1.jpg";
import skycast from "./imgs/skycast/skycast1.png";
import armand from "./imgs/profiles/Armand.jpg";
import employeeDashboard from "./imgs/employee/employee-dashboard.png";
import employeeTask from "./imgs/employee/employee-task.png";
import calculatorLaptop from "./imgs/calculator/calculator-laptop.png";
import calculatorMobile from "./imgs/calculator/calculator-mobile.png";

const resumeUrl =
  "https://github.com/Etan31/resume_file/blob/b5449df9b8806be9a56822b1e114f94f750a4bbf/TristanEhron_Tumbaga_Resume.pdf";

const projects = [
  {
    title: "Skycast",
    kicker: "Weather intelligence",
    description:
      "A location-aware weather experience that turns live forecast, air quality, humidity, and pressure data into a clear daily briefing.",
    tags: ["JavaScript", "OpenWeather API", "Responsive UI"],
    image: skycast,
    url: "https://github.com/Etan31/skycast",
    tone: "violet",
  },
  {
    title: "Employee Portal",
    kicker: "Workplace operations",
    description:
      "Nexus Employee Hub is a full-stack workspace where employees can manage tasks, view their calendar, and keep track of their time in one focused place.",
    tags: ["React", "Supabase", "Full stack"],
    preview: "employee",
    liveUrl: "https://employee-portal-server.vercel.app/",
    url: "https://github.com/Etan31/Employee_portal",
    tone: "orange",
  },
  {
    title: "Randomized Calculator",
    kicker: "Playful interaction",
    description:
      "A React calculator with a mischievous twist: number buttons change position while operators stay fixed, turning familiar arithmetic into a small attention game.",
    tags: ["React", "JavaScript", "CSS"],
    preview: "calculator",
    liveUrl: "https://etan315.github.io/calculator/",
    url: "https://github.com/Etan315/calculator",
    tone: "blue",
  },
];

const capabilities = [
  [
    "01",
    "Back-end systems",
    "APIs, databases, authentication, and the logic that keeps products dependable.",
  ],
  [
    "02",
    "Front-end craft",
    "Responsive React interfaces with strong hierarchy, accessibility, and considered motion.",
  ],
  [
    "03",
    "Product thinking",
    "Turning ambiguous needs into simple flows, useful features, and maintainable decisions.",
  ],
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.62 3.68-.41 7.55-1.8 7.55-8.18A6.4 6.4 0 0 0 19.75 3a5.94 5.94 0 0 0-.16-4s-1.34-.43-4.4 1.64a15.2 15.2 0 0 0-8 0C4.13-1.43 2.79-1 2.79-1a5.94 5.94 0 0 0-.16 4A6.4 6.4 0 0 0 .93 7.3c0 6.36 3.87 7.75 7.55 8.18A3.72 3.72 0 0 0 7.38 18v4M7.4 19c-3.32 1-3.32-1.66-4.65-2.08" />
  </svg>
);

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const navItems = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Notes", "#testimonial"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to top">
        <span>T</span>
        <i>/31</i>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav
        id="site-nav"
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Primary navigation"
      >
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-resume"
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Résumé <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const intro = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
  };
  const line = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 34 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-content"
        variants={intro}
        initial="hidden"
        animate="show"
      >
        <motion.div className="eyebrow" variants={line}>
          <span className="status-dot" /> Available for the right opportunity
          <span className="coordinates">11.6081° N · 125.4319° E</span>
        </motion.div>
        <motion.p className="hero-intro" variants={line}>
          Hi, I’m Tristan—a full-stack developer in the Philippines.
        </motion.p>
        <motion.h1 variants={line}>
          I engineer useful <span>systems</span> for the web.
        </motion.h1>
        <motion.div className="hero-foot" variants={line}>
          <p>
            I build dependable back ends and thoughtful interfaces, with a soft
            spot for products that make everyday work feel lighter.
          </p>
          <a
            className="round-link"
            href="#work"
            aria-label="Explore selected projects"
          >
            <span>Explore work</span>
            <ArrowIcon />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="signal-path"
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span />
      </motion.div>
      <div className="hero-index" aria-hidden="true">
        <span>Portfolio / 2026</span>
        <span>Scroll to inspect ↓</span>
      </div>
    </section>
  );
}

function Work() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="work section-shell" id="work">
      <Reveal className="section-heading">
        <div>
          <span className="section-label">Selected work</span>
          <h2>
            Built to be used,
            <br />
            not just viewed.
          </h2>
        </div>
        <p>
          A few projects across public data, workplace operations, and playful
          interaction.
        </p>
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            className={`project project--${project.tone}`}
            key={project.title}
          >
            <a
              className="project-visual"
              href={project.liveUrl || project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}${project.liveUrl ? " live demo" : " on GitHub"}`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <small>
                  {project.liveUrl
                    ? new URL(project.liveUrl).hostname
                    : "github.com/Etan31"}
                </small>
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              )}
              {project.preview === "employee" && (
                <div
                  className="project-preview employee-preview"
                  aria-hidden="true"
                >
                  <motion.img
                    className="employee-shot-main"
                    src={employeeDashboard}
                    alt=""
                    loading="lazy"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    className="employee-shot-modal"
                    src={employeeTask}
                    alt=""
                    loading="lazy"
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }
                    }
                    whileInView={
                      reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }
                    }
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              )}
              {project.preview === "calculator" && (
                <div
                  className="project-preview calculator-preview"
                  aria-hidden="true"
                >
                  <motion.img
                    className="calculator-shot-main"
                    src={calculatorLaptop}
                    alt=""
                    loading="lazy"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.img
                    className="calculator-shot-mobile"
                    src={calculatorMobile}
                    alt=""
                    loading="lazy"
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 28, scale: 0.94 }
                    }
                    whileInView={
                      reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }
                    }
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              )}
              <span className="project-open">
                <ArrowIcon />
              </span>
            </a>
            <div className="project-copy">
              <div className="project-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.kicker}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-actions">
                {project.liveUrl && (
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <ArrowIcon />
                  </a>
                )}
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon /> Source <ArrowIcon />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-shell" id="about">
      <Reveal className="about-layout">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src={profile} alt="Tristan Tumbaga" loading="lazy" />
          </div>
          <span className="portrait-caption">Tristan Tumbaga · developer</span>
        </div>
        <div className="about-copy">
          <span className="section-label">A little context</span>
          <h2>
            Code is the material.
            <br />
            <em>Clarity</em> is the job.
          </h2>
          <div className="about-columns">
            <p>
              I’m Tristan, a junior web developer from Eastern Samar. I enjoy
              the full path from shaping an idea to building the server-side
              logic and polishing the interface people actually touch.
            </p>
            <p>
              Experience with Bytewise Information Technology Solutions and DOST
              PSTO–Eastern Samar taught me to value useful software, direct
              communication, and the small details that make systems easier to
              trust.
            </p>
          </div>
          <div className="tool-row" aria-label="Technologies I use">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "PostgreSQL",
              "Claude Code",
              "AWS",
              "Vercel",
              "Git",
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="capability-list">
        {capabilities.map(([number, title, copy], index) => (
          <Reveal className="capability" delay={index * 0.06} key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="section-shell">
        <Reveal className="quote-card">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            Tristan consistently delivers outstanding web solutions,
            demonstrating both skill and innovation. Working with him has always
            been a smooth and enjoyable experience.
          </blockquote>
          <div className="quote-person">
            <img src={armand} alt="Armand Ralph Anacta" loading="lazy" />
            <div>
              <strong>Armand Ralph Anacta</strong>
              <span>Web developer, QCKBOT</span>
            </div>
          </div>
          <div className="quote-note">A note from a collaborator</div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const update = ({ target }) =>
    setForm((current) => ({ ...current, [target.name]: target.value }));

  return (
    <section className="contact section-shell" id="contact">
      <Reveal className="contact-intro">
        <span className="section-label">Start a conversation</span>
        <h2>
          Have a problem worth
          <br />
          <em>untangling?</em>
        </h2>
        <p>
          I’m currently open to new opportunities and thoughtful collaborations.
          Tell me what you’re working on.
        </p>
        <a href="mailto:tristan.ehron.tumbaga@gmail.com">
          tristan.ehron.tumbaga@gmail.com <ArrowIcon />
        </a>
      </Reveal>
      <Reveal className="contact-panel" delay={0.08}>
        <form onSubmit={submit}>
          <div className="field-row">
            <label>
              <span>Name</span>
              <input
                name="from_name"
                value={form.from_name}
                onChange={update}
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={update}
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            <span>What can I help with?</span>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              required
              placeholder="A little about your project, role, or idea…"
            />
          </label>
          <div className="form-foot">
            <p aria-live="polite">
              {status === "success" && "Message sent. I’ll be in touch soon."}
              {status === "error" &&
                "That didn’t send. Please email me directly."}
            </p>
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send message"} <ArrowIcon />
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <strong>
          Tristan
          <br />
          Tumbaga
        </strong>
        <span>
          Building from Eastern Samar
          <br />
          for the wide, wide web.
        </span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} / Built with React and intent.</span>
        <div>
          <a href="https://github.com/Etan31" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-ehron-tumbaga-b42478175/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function Main() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
