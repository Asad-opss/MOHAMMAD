import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { ProjectModal } from "./ProjectModal";
import { projectCategories, projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Works() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section
      id="works"
      eyebrow="My Works"
      title={
        <>
          Things I have <span className="text-gradient">built</span>
        </>
      }
      description="Filter by area of work. Click any card for the full case breakdown."
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter works by category">
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm transition-colors",
              filter === c
                ? "border-primary/60 bg-primary/15 text-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card-surface flex flex-col overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setSelected(project)}
                className="group block w-full text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <div
                  aria-hidden="true"
                  className="aspect-video w-full bg-[image:var(--gradient-brand)] opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {project.category}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
                </div>
              </button>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-border p-5 pt-4">
                <ul className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t, tIdx) => (
                    <li
                      key={`${t}-${tIdx}`}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="inline-flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground"
                  >
                    <Github className="size-4" />
                  </a>
                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
