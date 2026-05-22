"use client";

import { motion } from "framer-motion";



const heroStats = [
  { value: "9.8/10", label: "CGPA" },
  { value: "Local AI", label: "Deployment focus" },
  { value: "From scratch", label: "Algorithmic rigor" },
];

const projects = [
  {
    title: "SAT-LM (Real-Time Satellite Tracking + Local LLM)",
    summary:
      "Developed a full-stack web application for real-time satellite tracking integrated with a local LLM assistant. Enabled conversational interaction with satellite data using a locally hosted Large Language Model.",
    tech: ["Python", "React", "Node.js", "Ollama"],
  },
  {
    title: "BETA-SOLVER (Built ML algorithms from scratch)",
    summary:
      "Published beta_solver to PyPI, a custom Python package featuring Machine Learning algorithms built entirely from scratch. Translated core mathematical concepts into functional Linear and Logistic Regression models without relying on external ML libraries.",
    tech: ["Python", "Numpy", "PyPI"],
  },
];

const arsenal = [
  {
    label: "Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    label: "Machine Learning",
    items: ["Scikit-Learn", "Pandas", "Numpy", "Matplotlib"],
  },
  {
    label: "Tools & Cloud",
    items: ["AWS", "Git", "PyPI", "MySQL"],
  },
];

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const easeCurve = [0.16, 1, 0.3, 1] as const;

const riseVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeCurve },
  },
};



export default function PortfolioExperience() {
  return (
    <main id="top" className="relative isolate min-h-screen overflow-hidden bg-[#04060f] text-slate-100">
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,_rgba(8,10,15,0.6),_transparent_28%),linear-gradient(180deg,#04060f_0%,#060912_45%,#03050b_100%)]" />
      <div className="portfolio-grid fixed inset-0 -z-20 opacity-35" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="flex items-center justify-between gap-6 border-b border-white/10 pb-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.45em] text-emerald-300/80">
              ABHISH ALKESH BONDRE
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Machine Learning Engineer focused on mathematical precision, local AI systems, and scalable architecture.
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-emerald-300" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-emerald-300" href="#academics">
              Academics
            </a>
            <a className="transition hover:text-emerald-300" href="#arsenal">
              Arsenal
            </a>
            <a className="transition hover:text-emerald-300" href="#contact">
              Contact
            </a>
          </nav>
        </motion.header>

        <motion.section
          variants={pageVariants}
          initial="hidden"
          animate="show"
          className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20"
        >
          <div className="space-y-8">
            <motion.div
              variants={riseVariants}
              className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-200"
            >
              Mathematical systems • Local intelligence • High-precision engineering
            </motion.div>

            <motion.div variants={riseVariants} className="space-y-6">
              <h1 className="max-w-4xl font-mono text-5xl font-semibold uppercase leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                ABHISH ALKESH BONDRE
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Machine Learning Engineer | Mathematical Optimization | Scalable Architecture
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Machine Learning Enthusiast and B.Tech student (9.8 CGPA) with a strong foundation in mathematical modeling and algorithm development. Focused on architecting secure, locally-deployed AI systems and engineering fundamental machine learning algorithms from the ground up to drive rigorous, high-impact research.
              </p>
            </motion.div>

            <motion.div variants={riseVariants} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-6 py-3 font-medium text-emerald-100 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200/70 hover:bg-emerald-300/15"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={riseVariants} className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <p className="font-mono text-2xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            variants={riseVariants}
            className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <div className="rounded-3xl border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(111,191,115,0.12),rgba(59,108,61,0.05))] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-200/70">Signal profile</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  Strong foundation in mathematical modeling, algorithm development, and locally deployed intelligent systems.
                </p>
                <p>
                  Focused on reproducible ML pipelines, secure inference, and engineered abstractions that stay close to the math.
                </p>
              </div>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section
          id="academics"
          className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={pageVariants}
        >
          <motion.div variants={riseVariants} className="rounded-[2rem] border border-emerald-700/10 bg-[linear-gradient(180deg,rgba(10,20,12,0.55),rgba(4,7,10,0.6))] p-6 backdrop-blur-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-200/70">Leadership & Academics</p>
            <h2 className="mt-4 font-mono text-3xl uppercase tracking-[-0.03em] text-white">Education</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 max-w-2xl">
              Bachelor in Technology Computer Science and Design, Dr. D. Y. Patil School of Science and Technology, Pune (CGPA: 9.8/10).
            </p>
            <div className="mt-6 flex gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/20 px-3 py-1 text-xs text-emerald-100">CGPA: <strong className="ml-2">9.8/10</strong></span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800/10 px-3 py-1 text-xs text-emerald-200">Local AI • Deployment</span>
            </div>
          </motion.div>

          <motion.div variants={riseVariants} className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Google Student Ambassador', icon: '🎓' },
              { title: 'President of Developer Club at College', icon: '👥' },
              { title: 'Served as Joint Academic Secretary', icon: '📜' },
            ].map((role) => (
              <div key={role.title} className="min-h-[7rem] rounded-[1.5rem] border border-emerald-700/8 bg-[linear-gradient(180deg,rgba(6,10,8,0.45),rgba(2,4,6,0.5))] p-6 text-slate-300 backdrop-blur-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-9 h-9 flex items-center justify-center rounded-md bg-emerald-900/20 text-emerald-100 text-sm">{role.icon}</div>
                  <div>
                    <p className="font-mono text-sm sm:text-base leading-6 text-white">{role.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <section id="projects" className="py-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300/80">Core Projects</p>
            <h2 className="font-mono text-3xl uppercase tracking-[-0.04em] text-white sm:text-4xl">
              Systems that combine mathematics, interfaces, and local intelligence
            </h2>
          </div>

          <motion.div
            className="grid gap-5 lg:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.16 } },
            }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={riseVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.14),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-200/70">Project</p>
                  <h3 className="mt-4 max-w-xl font-mono text-2xl uppercase leading-tight tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-emerald-300/20 bg-emerald-300/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="arsenal" className="py-12 lg:py-16">
          <div className="mb-8 flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-300/80">Technical Arsenal</p>
            <h2 className="font-mono text-3xl uppercase tracking-[-0.04em] text-white sm:text-4xl">
              An interactive, hovering grid of core tools
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {arsenal.map((group) => (
              <motion.div
                key={group.label}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-6 backdrop-blur-xl"
              >
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-200/75">{group.label}</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {group.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/10"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="mt-4 overflow-hidden rounded-[2.25rem] border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(111,191,115,0.14),rgba(8,15,30,0.92))] p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.65, ease: easeCurve }}
        >
          <div className="flex flex-col gap-6 lg:gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-100/70">Contact</p>
              <h2 className="mt-4 font-mono text-3xl uppercase tracking-[-0.04em] text-white sm:text-4xl">
                Let’s build precise systems and rigorous experiments.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Open to machine learning, local AI, and mathematically grounded engineering work.
              </p>
              <div className="mt-6 flex w-full flex-nowrap gap-3 overflow-x-auto pb-1 sm:overflow-visible">
                <a
                  href="mailto:abhishbondre232@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="inline-flex shrink-0 items-center gap-2 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition transform-gpu hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 4h16v16H4z" fill="transparent" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  Contact Me
                </a>

                <a
                  href="https://github.com/abhishbondre"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  title="GitHub"
                  className="inline-flex shrink-0 items-center gap-2 rounded-[1.5rem] border border-emerald-400/20 bg-transparent px-5 py-3 font-medium text-emerald-100 transition hover:bg-emerald-700/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-100">
                    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.6.8 2 .1.1-.7.4-1 .7-1.3-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0C17 4.1 18 4.4 18 4.4c.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.5-2.9 5.5-5.6 5.8.4.3.8.9.8 1.9v2.8c0 .3.2.7.8.6A12 12 0 0012 .5z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/abhish-bondre/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="inline-flex shrink-0 items-center gap-2 rounded-[1.5rem] border border-emerald-400/20 bg-transparent px-5 py-3 font-medium text-emerald-100 transition hover:bg-emerald-700/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-100">
                    <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="#top"
                  aria-label="Back to top"
                  title="Back to top"
                  className="inline-flex shrink-0 items-center gap-2 rounded-[1.5rem] border border-emerald-400/20 bg-transparent px-5 py-3 font-medium text-emerald-100 transition hover:bg-emerald-700/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-100">
                    <path d="M12 19V6" />
                    <path d="M5 12l7-7 7 7" />
                  </svg>
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-[0.25em] text-slate-400">Machine Learning Engineer</p>
        </footer>
      </div>
    </main>
  );
}