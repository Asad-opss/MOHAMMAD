import { GraduationCap, Compass, Sparkles, Target } from "lucide-react";
import { Reveal, Section } from "./Section";
import { profile } from "@/data/profile";

const icons = [GraduationCap, Compass, Sparkles, Target];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A developer focused on <span className="text-gradient">clarity and craft</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>{profile.shortBio}</p>
          <p>
            <span className="text-foreground">Development philosophy — </span>
            {profile.philosophy}
          </p>
          <p>
            I&apos;m most interested in the space where product engineering meets applied machine
            learning: interfaces that are quick and legible, backed by systems that are honest about
            their data.
          </p>
          <ul className="grid gap-2 pt-2 sm:grid-cols-2">
            {["Problem solving", "Clean architecture", "Fast iteration", "Team communication"].map(
              (s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-foreground/85">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                  {s}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.highlights.map((item, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <article className="card-surface h-full rounded-2xl p-6">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-lg font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
