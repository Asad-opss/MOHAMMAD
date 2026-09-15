import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { TypewriterRole } from "@/components/TypewriterRole";
import heroOrb from "@/assets/hero-orb.jpg";

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const codeLines = [
  { t: "const developer = {", c: "text-muted-foreground" },
  { t: "  stack: ['React', 'Node', 'Python'],", c: "text-accent" },
  { t: "  focus: 'full stack + AI',", c: "text-primary" },
  { t: "  available: true,", c: "text-accent" },
  { t: "};", c: "text-muted-foreground" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div aria-hidden="true" className="absolute inset-0 grid-backdrop" />
      <div
        aria-hidden="true"
        className="glow-orb pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 min-h-[1.75rem] sm:min-h-[2rem] flex items-center text-lg font-medium text-foreground/90 sm:text-xl"
          >
            <TypewriterRole text={profile.role} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 max-w-xl text-base text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => go("works")}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/60"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={heroOrb}
              alt="Abstract glowing wireframe sphere representing digital systems"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
              {codeLines.map((line) => (
                <div key={line.t} className={line.c}>
                  {line.t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-6xl justify-center px-5">
        <button
          onClick={() => go("about")}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll <ArrowDown className="size-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
