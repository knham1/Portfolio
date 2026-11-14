const characteristics = [
  {
    title: "Full Software Lifecycle Experience",
    blurb:
      "Experienced across the full software software development lifecycle.",
  },
  {
    title: "Results You Can Measure",
    blurb:
      "I focus on outcomes, not just output. Cutting CI/CD delivery times by 67%, and reducing post-release defects by 30%",
  },
  {
    title: "Cross-Functional Collaborator",
    blurb:
      "I've worked closely with engineers around the world, from US to Norway, Singapore, and Brazil.",
  },
];

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

const skillGroups = [
  {
    category: "Languages",
    items: ["C++", "CSS3", "HTML5", "JavaScript", "PHP", "Python", "SQL", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Angular", "Bootstrap", "Expo", "Express", "NativeWind", "Node.js", "React Native"],
  },
  {
    category: "Databases & Backend",
    items: ["PostgreSQL", "REST APIs", "Supabase"],
  },
  {
    category: "AI & LLM",
    items: ["Anthropic Claude API", "ChatGPT", "Claude Code", "Cursor", "Prompt Engineering"],
  },
  {
    category: "Tools & DevOps",
    items: ["Azure DevOps", "Bitbucket", "Confluence", "Git", "GitHub Actions", "Jenkins", "Jira", "Microsoft TFS"],
  },
  {
    category: "Methodologies",
    items: [
      "Agile Development",
      "CI/CD",
      "Full Stack Web Application Development",
      "Log Analysis",
      "Root Cause Analysis",
      "System Debugging",
    ],
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

const EMAIL = "knham3@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/kennynham/";
const GITHUB = "https://github.com/knham1";
const RESUME = "/documents/resume.pdf";
const RESUME_NAME = "Kenny Nham Resume - Software Engineer.pdf";

/* ---------- Small building blocks ---------- */

type IconProps = { className?: string };

function Svg({ className = "h-4 w-4", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ArrowIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Svg>
);
const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Svg>
);
const LinkedInIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Svg>
);
const GitHubIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Svg>
);
const CodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Svg>
);
const TrendIcon = (p: IconProps) => (
  <Svg {...p}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </Svg>
);
const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

const characteristicIcons = [CodeIcon, TrendIcon, UsersIcon];

/** "KN" monogram mark used in the header and footer. */
function Logo({ className = "h-10 w-10 text-base" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl rounded-br-[1.25rem] bg-accent font-bold tracking-tight text-accent-ink ${className}`}
    >
      KN
    </span>
  );
}

/** Small "— Label" eyebrow above section titles. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium tracking-[0.2em] text-muted">
      — {children}
    </p>
  );
}

/** Amber underlined text link with a trailing arrow. */
function ArrowLink({
  href,
  children,
  external,
  download,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  download?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-5 font-semibold text-accent"
    >
      <span className="underline decoration-accent/60 underline-offset-4 group-hover:decoration-accent">
        {children}
      </span>
      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

/** Striped box standing in for a photo until real images are added. */
function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} (placeholder)`}
      className={`placeholder-stripes flex items-center justify-center ${className}`}
    >
      <span className="rounded-full bg-black/20 px-3 py-1 text-xs tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}

function SocialLinks() {
  const links = [
    { href: `mailto:${EMAIL}`, label: "Email", Icon: MailIcon },
    { href: LINKEDIN, label: "LinkedIn", Icon: LinkedInIcon },
    { href: GITHUB, label: "GitHub", Icon: GitHubIcon },
  ];
  return (
    <ul className="flex items-center gap-5">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-foreground/80 transition-colors hover:text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-5xl px-6">
            <nav className="flex items-center justify-between gap-6 py-8">
              <a href="#top" aria-label="Kenny Nham, back to top">
                <Logo />
              </a>
              <ul className="hidden gap-6 text-lg md:flex">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group relative text-muted/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-sm font-semibold text-accent md:hidden">
                Contact
              </a>
            </nav>

            <div className="grid items-end gap-10 pt-6 md:grid-cols-12 md:gap-6 md:pt-10">
              <div className="fade-up self-center md:col-span-4 md:pb-24">
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                  Kenny
                  <br />
                  Nham<span className="text-accent">.</span>
                </h1>
                <div className="mt-6 h-1 w-12 bg-accent" />
                <div className="mt-10">
                  <SocialLinks />
                </div>
              </div>

              <div className="fade-up-delay-2 order-last md:order-none md:col-span-4">
                {/* Swap for your photo, e.g. <Image src="/images/Headshot.jpg" ... /> */}
                {/* <Placeholder label="Your photo" className="mx-auto aspect-[4/5] w-full max-w-xs md:max-w-none" /> */}
                <img
                  src="/images/Nature_Headshot.webp"
                  alt="Kenny Nham"
                  className="border-2 border-accent rounded-lg"
                />
              </div>

              <div className="fade-up-delay-1 self-center md:col-span-4 md:pb-24">
                <Eyebrow>Introduction</Eyebrow>
                <p className="text-2xl font-medium leading-snug">
                I've built the features
                <br />
                Tested the products and
                <br />
                Deployed solutions.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  <ArrowLink href={RESUME} download={RESUME_NAME}>
                    View Resume
                  </ArrowLink>
                  <ArrowLink href="#contact">Contact Me</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-band">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 pt-24 pb-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>About</Eyebrow>
              <h2 className="text-2xl font-medium leading-snug">
                From code to production, and everything else in between.
              </h2>
              {/* <div className="mt-10">
                <ArrowLink href={`mailto:${EMAIL}`}>{EMAIL}</ArrowLink>
              </div> */}
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4 leading-relaxed text-muted">
                <p>
                  I started my career as a full-stack engineer at TechnipFMC, building and supporting the
                  web-based interface used to configure and manage subsea control systems.
                </p>
                <p>
                  From there I moved into DevOps, automating how those same systems were built and deployed.
                  I created CI/CD pipelines that kept builds healthy and releases stable.
                </p>
                <p>
                  As a controls engineer, I worked closer to the hardware, making sure the control system
                  communicated reliably with its sensors. That role took me to Singapore and Rio de Janeiro,
                  Brazil, to help configure and test systems on site.
                </p>
                <p>
                  Most recently, I moved into quality assurance on those projects, designing and running the
                  tests that verified the software worked as intended.
                </p>
              </div>

              {/* <p className="leading-relaxed text-muted">
                Accomplished Software Engineer with 8+ years of experience across full-stack development, quality assurance, system
                integration, and DevOps. Built and supported web-based system management interfaces and subsea control systems. Experienced throughout the software
                development lifecycle, including requirements, design, development, testing, debugging, deployment, and CI/CD automation
                within Agile environments.
              </p> */}
              {/* <p className="mt-4 text-xs leading-relaxed text-muted">
                Bachelor of Computer Science, California State University, Fullerton (2017).
              </p> */}
              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                <div className="flex items-center gap-4">
                  <dt className="text-5xl font-medium text-accent">8+</dt>
                  <dd className="text-sm font-semibold leading-tight">
                    Years of
                    <br />
                    Experience.
                  </dd>
                </div>
                <div className="flex items-center gap-4">
                  <dt className="text-5xl font-medium text-accent"></dt>
                  <dd className="text-sm font-semibold leading-tight">
                    Faster
                    <br />
                    Delivery.
                  </dd>
                </div>
                <div className="flex items-center gap-4">
                  <dt className="text-5xl font-medium text-accent"></dt>
                  <dd className="text-sm font-semibold leading-tight">
                    Fewer
                    <br />
                    Defects.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Why hire me: cards straddle the band edge */}
        <section
          aria-label="Why hire me"
          className="bg-[linear-gradient(to_bottom,var(--band)_50%,var(--background)_50%)]"
        >
          <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
            {characteristics.map((c, i) => {
              const Icon = characteristicIcons[i];
              const featured = i === 0;
              return (
                <div
                  key={c.title}
                  className={`p-8 transition-transform hover:-translate-y-1 ${
                    featured ? "bg-accent text-accent-ink" : "bg-surface"
                  }`}
                >
                  <Icon className="mb-6 h-6 w-6" />
                  <h3 className="text-xl font-medium leading-snug">
                    {c.title}
                    <span className={featured ? "" : "text-accent"}>.</span>
                  </h3>
                  <p className={`mt-4 text-sm leading-relaxed ${featured ? "text-accent-ink/80" : "text-muted"}`}>
                    {c.blurb}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto grid max-w-5xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Experience</Eyebrow>
            <h2 className="text-2xl font-medium leading-snug">
              Where I've worked
              <br />
              and what I did.
            </h2>
          </div>
          <ol className="md:col-span-8">
            {experience.map((job) => (
              <li
                key={job.role + job.company}
                className="grid gap-3 border-b border-white/5 py-8 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <p className="text-xs leading-relaxed text-muted">
                  {job.dates}
                  <br />
                  {job.company}
                </p>
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-band">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-28 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Skills</Eyebrow>
              <h2 className="text-2xl font-medium leading-snug">
                Skills &amp; tools
                <br />
                I work with.
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:col-span-8">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-4 font-semibold">
                    {group.category}
                    <span className="text-accent">.</span>
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {group.items.map((skill) => (
                      <li key={skill} className="flex items-start gap-3 text-foreground/80">
                        <span className="mt-2 h-1 w-3 shrink-0 bg-accent/70" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section id="project" className="mx-auto grid max-w-5xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Featured Project</Eyebrow>
            <h2 className="text-2xl font-medium leading-snug">
              HypeMe<span className="text-accent">.</span>
            </h2>
            <p className="mt-2 text-xs text-muted">{project.dates}</p>
            <p className="mt-6 leading-relaxed text-muted">
              A cross-platform mobile app where users log daily wins and get AI coaching
              that connects each win to their personal goals, in a tone they choose.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/hypeme">Try the Live Demo</ArrowLink>
              <ArrowLink href="https://github.com/knham1/HypeMe" external>
                View on GitHub
              </ArrowLink>
            </div>
          </div>

          <a
            href="/hypeme"
            className="group block self-start overflow-hidden bg-band md:col-span-7"
          >
            <div className="flex items-start justify-between gap-4 p-8">
              <p className="text-2xl font-medium">HypeMe.</p>
              <p className="text-right text-sm font-semibold">{project.tech.slice(0, 2).join(", ")}</p>
            </div>
            {/* Swap for a project screenshot later */}
            {/* <Placeholder
              label="Project screenshot"
              className="ml-8 aspect-[4/3] origin-bottom-left transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]"
            /> */}
            <img src="/images/HypeMe_Demo.png" alt="HypeMe Demo" />
            <div className="flex flex-wrap gap-2 p-8">
              {project.tech.map((tag) => (
                <span key={tag} className="bg-surface px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-band">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-28 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="text-2xl font-medium leading-snug">
                Let's talk<span className="text-accent">.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                I'm open to new opportunities.
              </p>
              {/* <div className="mt-10">
                <ArrowLink href={`mailto:${EMAIL}`}>{EMAIL}</ArrowLink>
              </div> */}
            </div>
            <ul className="md:col-span-7">
              {[
                { label: "Email Me", detail: "", href: `mailto:${EMAIL}` },
                { label: "LinkedIn", detail: "", href: LINKEDIN, external: true },
                { label: "GitHub", detail: "", href: GITHUB, external: true },
                { label: "View Resume", detail: "PDF", href: RESUME, download: RESUME_NAME },
              ].map((row) => (
                <li key={row.label} className="border-b border-white/5 py-6 first:pt-0">
                  <a
                    href={row.href}
                    download={row.download}
                    {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold transition-colors group-hover:text-accent">
                      {row.label}
                    </span>
                    <span className="flex items-center gap-6 text-sm text-muted">
                      <span className="hidden sm:inline">{row.detail}</span>
                      <ArrowIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-6 px-6 py-20 text-center">
        <Logo className="h-14 w-14 text-xl" />
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">© {new Date().getFullYear()} Kenny Nham.</span>{" "}
        </p>
        <SocialLinks />
      </footer>
    </div>
  );
}
