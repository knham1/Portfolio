const experience = [
  {
    role: "Software Quality Assurance Engineer",
    company: "TechnipFMC",
    dates: "Oct 2025 – Apr 2026",
    highlights: [
      "Designed and executed detailed test plans and cases, ensuring coverage of business and system requirements, which reduced post-release defect rates by 30%.",
      "Identified critical bugs pre-deployment, significantly enhancing software stability and user satisfaction.",
      "Maintained robust test environments and automation tools, ensuring smooth and reliable test executions.",
    ],
  },
  {
    role: "Controls Engineer",
    company: "TechnipFMC",
    dates: "Jul 2024 – Oct 2025",
    highlights: [
      "Led Product Acceptance Testing (PAT) and Extended Factory Acceptance Testing (EFAT) activities, validating system functionality, software performance, and operational requirements.",
      "Diagnosed and resolved software, hardware, and system integration issues during test environment setup.",
      "Troubleshot real-time system failures and implemented corrective actions to maintain operational continuity.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "TechnipFMC",
    dates: "Jun 2023 – Jul 2024",
    highlights: [
      "Designed, implemented, and maintained CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins, automating build, testing, and deployment workflows, decreasing software delivery times by 300% (from 6 hours to 2 hours).",
      "Delivered expert-level support, consistently resolving high-priority issues on first contact and reducing ticket volume by 30%.",
      "Investigated and resolved build, deployment, and environment-related issues through log analysis, root-cause investigation, and system debugging, minimizing disruptions to development workflows and release schedules.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "TechnipFMC",
    dates: "Aug 2017 – Jun 2023",
    highlights: [
      "Designed and developed a system management interface from initiation to completion using Angular, TypeScript, JavaScript, PHP, HTML5, and REST APIs, reducing human errors and speeding up configuration times by 300%.",
      "Collaborated with product managers, QA engineers, and software developers throughout the Agile software development lifecycle, improving project delivery times by 25%.",
      "Built interactive prototypes and proof-of-concepts to validate product features with stakeholders, shortening feature validation timelines by 30% and improving development alignment.",
      "Authored technical documentation, improving knowledge sharing and project alignment for engineering teams, business stakeholders, and end users.",
    ],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Python",
  "SQL",
  "HTML5",
  "CSS3",
  "C++",
  "Angular",
  "Node.js",
  "Express",
  "Bootstrap",
  "Azure DevOps",
  "GitHub Actions",
  "Jenkins",
  "Microsoft TFS",
  "Git",
  "Bitbucket",
  "Jira",
  "REST APIs",
];

const characteristics = [
  {
    title: "Full Software Lifecycle Experience",
    blurb:
      "From building full-stack features to CI/CD pipelines to QA and systems validation, I've worked every stage of the software lifecycle — so I understand how my code impacts the teams downstream.",
  },
  {
    title: "Results You Can Measure",
    blurb:
      "I focus on outcomes, not just output — cutting release cycles from 6 hours to 2, reducing defect rates by 30%, and speeding up delivery timelines by up to 300% across past roles.",
  },
  {
    title: "Cross-Functional Collaborator",
    blurb:
      "I've worked closely with product managers, QA engineers, and stakeholders through Agile development, translating requirements into shipped features and clear technical documentation.",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Kenny Nham
          </a>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          <div className="fade-up flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-4xl font-bold text-background sm:h-32 sm:w-32">
            KN
          </div>
          <h1 className="fade-up-delay-1 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Kenny Nham</span>
          </h1>
          <p className="fade-up-delay-2 max-w-xl text-lg text-muted">
            Software Engineer who builds fast,
            reliable products and loves solving hard problems.
          </p>
          <div className="fade-up-delay-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              download="Kenny Nham Resume - Software Engineer.pdf"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent-2">
            About
          </h2>
          <p className="max-w-5xl text-lg leading-relaxed text-muted">
            Full-stack software engineer with hands-on experience deploying and troubleshooting production systems directly on customer sites. 
            Regularly traveled on-site to lead Product Acceptance Testing (PAT) and Extended Factory Acceptance Testing (EFAT), serving as the primary 
            technical point of contact between engineering and the client during live PLC/SCADA system commissioning. Combines full-stack development, 
            CI/CD, and SQL-driven data validation with real-time, client-facing problem-solving under ambiguous, high-stakes conditions.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent-2">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experience.map((job) => (
              <div
                key={job.role + job.company}
                className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-muted">{job.dates}</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills / Why Hire Me */}
        <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent-2">
            Skills &amp; Why Hire Me
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/40"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {characteristics.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-2/40"
              >
                <h3 className="mb-2 font-semibold text-accent-2">{c.title}</h3>
                <p className="text-sm text-muted">{c.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        {/* <section id="project" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent-2">
            Featured Project
          </h2>
          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <h3 className="text-2xl font-semibold">[Project Name]</h3>
            <p className="mt-3 max-w-2xl text-muted">
              [Placeholder description of the project — what it does, what problem it
              solves, and what makes it worth featuring.]
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["[Tech]", "[Tech]", "[Tech]"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/[your-username]/[repo]"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                View on GitHub
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white/40"
              >
                Live Demo
              </a>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-2">
            Contact
          </h2>
          <p className="mb-8 text-lg text-muted">
            Let&apos;s talk — I&apos;m open to new opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:[knham3@gmail.com]"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/[kennynham]"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/[your-username]"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Kenny Nham. Built with Next.js.
      </footer>
    </div>
  );
}
