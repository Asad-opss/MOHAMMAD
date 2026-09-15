import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Reveal, Section } from "./Section";
import { ProjectModal } from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="text-gradient">case studies</span>
        </>
      }
      description="Deeper look at the problems, decisions and trade-offs behind key builds."
    >
      <div className="space-y-8">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <article className="card-surface grid overflow-hidden rounded-3xl lg:grid-cols-2">
              <div
                aria-hidden="true"
                className="min-h-56 bg-[image:var(--gradient-brand)] opacity-60"
              />
              <div className="p-7 sm:p-9">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold">Problem</dt>
                    <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Solution</dt>
                    <dd className="mt-1 text-muted-foreground">{project.solution}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2">
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
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex min-h-11 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    View details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium text-foreground hover:border-primary/60"
                  >
                    <Github className="size-4" aria-hidden="true" /> Code
                  </a>
                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-5 text-sm font-medium text-foreground hover:border-primary/60"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" /> Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
