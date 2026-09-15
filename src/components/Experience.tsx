import { MapPin, CalendarDays } from "lucide-react";
import { Reveal, Section } from "./Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve <span className="text-gradient">worked</span>
        </>
      }
      description="Placeholder entries — replace them in src/data/experience.ts with your real roles."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.65rem] top-6 size-3 rounded-full border-2 border-primary bg-background sm:-left-[2.9rem]"
            />
            <Reveal delay={i * 0.08}>
              <article className="card-surface rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                    {item.year}
                  </span>
                  {item.placeholder ? (
                    <span className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      Placeholder
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-foreground/85">{item.company}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {item.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {item.responsibilities.map((r, rIdx) => (
                    <li key={`${r}-${rIdx}`} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 size-1 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>

                {item.achievements.length ? (
                  <p className="mt-4 text-sm">
                    <span className="text-muted-foreground">Key achievement: </span>
                    {item.achievements.join(", ")}
                  </p>
                ) : null}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((t, i) => (
                    <li
                      key={`${t}-${i}`}
                      className="rounded-lg border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
