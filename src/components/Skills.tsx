import { Brain, Code2, Database, Layout, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, Section } from "./Section";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools I reach for, <span className="text-gradient">and why</span>
        </>
      }
      description="A working toolkit across the stack — from language fundamentals to deployment."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Code2;
          return (
            <Reveal key={cat.title} delay={i * 0.06}>
              <article className="card-surface h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{cat.description}</p>
                <ul className="mt-5 space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary"
                      >
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
