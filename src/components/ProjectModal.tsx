import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-70 flex items-end justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-t-3xl border border-border bg-card p-6 sm:rounded-3xl sm:p-9"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div
              aria-hidden="true"
              className="h-32 w-full rounded-2xl border border-border bg-[image:var(--gradient-brand)] opacity-70 sm:h-40"
            />

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold">Problem</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold">Solution</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            <h4 className="mt-6 text-sm font-semibold">Features</h4>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {project.features.map((f, fIdx) => (
                <li key={`${f}-${fIdx}`} className="flex gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-sm font-semibold">Challenges</h4>
            <p className="mt-1.5 text-sm text-muted-foreground">{project.challenges}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t, tIdx) => (
                <li
                  key={`${t}-${tIdx}`}
                  className="rounded-lg border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-secondary px-5 text-sm font-medium text-secondary-foreground hover:border-primary/60"
              >
                <Github className="size-4" aria-hidden="true" /> GitHub
              </a>
              {project.demo && project.demo !== "#" ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
