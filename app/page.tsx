const experience = [
  {
    role: "Software Quality Assurance Engineer",
    company: "TechnipFMC",
    dates: "Oct 2025 – Apr 2026",
    highlights: [
      "Reduced post-release defect rates by 30% by designing and executing detailed test plans and cases based on business and system requirements, validating software functionality.",
      "Supported reliable test execution and software integration activities by maintaining test environments and automation tools, ensuring consistency across releases.",
    ],
  },
  {
    role: "Controls Engineer",
    company: "TechnipFMC",
    dates: "Jul 2024 – Oct 2025",
    highlights: [
      "Resolved software, hardware, and system integration issues by diagnosing problems during test environment setup through structured debugging and root cause analysis.",
      "Enabled standardized real-time data exchange between subsea MCS and topside DCS by configuring and validating OPC UA server tag points in accordance with the MDIS information model.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "TechnipFMC",
    dates: "Jun 2023 – Jul 2024",
    highlights: [
      "Decreased software delivery times by 67% (from 6 hours to 2 hours) by designing, implementing, and maintaining CI/CD pipelines using Azure DevOps, GitHub Actions, and Jenkins.",
      "Minimized disruptions to development workflows and release schedules by investigating and resolving build, deployment, and environment-related issues through log analysis and root-cause investigation.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "TechnipFMC",
    dates: "Aug 2017 – Jun 2023",
    highlights: [
      "Reduced human errors and sped up configuration times by 20% by designing and developing a system management interface using Angular, TypeScript, JavaScript, PHP, HTML5, and REST APIs.",
      "Improved project delivery times by 25% by collaborating with product managers, QA engineers, and developers throughout the Agile software development lifecycle, contributing to requirements gathering, feature implementation, and testing.",
      "Shortened feature validation timelines by 30% and improved development alignment by building interactive prototypes and proof-of-concepts to validate product features with stakeholders.",
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
  "React Native",
  "Expo",
  "NativeWind",
  "Node.js",
  "Express",
  "Bootstrap",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Anthropic Claude API",
  "ChatGPT",
  "Claude Code",
  "Cursor",
  "Prompt Engineering",
  "Azure DevOps",
  "GitHub Actions",
  "Jenkins",
  "Microsoft TFS",
  "Git",
  "Bitbucket",
  "Jira",
  "Confluence",
  "Agile",
  "CI/CD",
  "Log Analysis",
  "Root Cause Analysis",
  "System Debugging",
];

const characteristics = [
  {
    title: "Full Software Lifecycle Experience",
    blurb:
      "I've worked the full software development lifecycle. Requirements, design, development, testing, debugging, deployment, and CI/CD automation across full-stack, QA, system integration, and DevOps in Agile environments.",
  },
  {
    title: "Results You Can Measure",
    blurb:
      "I focus on outcomes, not just output. Cutting delivery times by67% (6 hours to 2), reducing post-release defects by 30%, speeding configuration by 20%, and shortening feature validation by 30%.",
  },
  {
    title: "Cross-Functional Collaborator",
    blurb:
      "I've worked closely with product managers, QA engineers, and developers through Agile development, gathering requirements, implementing features, and testing to improve project delivery times by 25%.",
  },
];

const project = {
  dates: "Apr 2026 – Present",
  highlights: [
    "Built HypeMe, a cross-platform mobile app where users log daily wins and get AI coaching (Anthropic Claude API) that connects each win to their personal goals, in a tone they choose.",
    "Designed a React Native (Expo) and Supabase stack with Postgres row-level security and sent all AI calls through an authenticated server-side function that checks record ownership and keeps API keys off the client.",
    "Used Claude Code as an AI pair programmer: set the architecture, directed feature work, and reviewed every change before committing.",
  ],
  tech: ["React Native", "Expo", "Supabase", "Anthropic API", "PostgreSQL"],
};

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
          {/* <div className="fade-up flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-4xl font-bold text-background sm:h-32 sm:w-32">
            KN
          </div> */}

          <img
            src="/images/Headshot.jpg"
            alt="Kenny Nham"
            width={128}
            height={128}
            className="fade-up h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          />
          
          <h1 className="fade-up-delay-1 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Kenny Nham</span>
          </h1>
          <p className="fade-up-delay-2 max-w-2xl text-lg text-muted">
            Software Engineer with 8+ years across full-stack development,
            quality assurance, system integration, and DevOps.
          </p>
          <div className="fade-up-delay-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/documents/resume.pdf"
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
            Accomplished Software Engineer with 8+ years of experience across full-stack development, quality assurance, system
            integration, and DevOps. Built and supported web-based system management interfaces. Experienced throughout the software
            development lifecycle, including requirements, design, development, testing, debugging, deployment, and CI/CD automation
            within Agile environments. Bachelor of Computer Science, California State University, Fullerton (2017).
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
        <section id="project" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-accent-2">
            Featured Project
          </h2>
          <div className="rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-semibold">HypeMe</h3>
              <span className="text-sm text-muted">{project.dates}</span>
            </div>
            <p className="mt-3 max-w-2xl text-muted">
              A cross-platform mobile app where users log daily wins and get AI coaching
              that connects each win to their personal goals, in a tone they choose.
            </p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-muted">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/hypeme"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Try the Live Demo
              </a>
              <a
                href="https://github.com/knham1/HypeMe"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-white/40"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

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
              href="mailto:knham3@gmail.com"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/kennynham/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/knham1"
              target="_blank"
              rel="noopener noreferrer"
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
