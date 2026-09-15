import { Award, ExternalLink } from "lucide-react";
import { Reveal, Section } from "./Section";
import { achievements } from "@/data/achievements";

export function Achievements() {
  const isTwoOrLess = achievements.length <= 2;

  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title={
        <>
          Certifications & <span className="text-gradient">recognition</span>
        </>
      }
      description="Verified credentials, specialized workshops, and technical certifications."
    >
      <div
        className={
          isTwoOrLess
            ? "grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
            : "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        }
      >
        {achievements.map((item, i) => (
          <Reveal key={item.title + i} delay={i * 0.06}>
            <article className="card-surface flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-primary/40">
              <Award className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{item.organization}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{item.date}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              {item.credentialId ? (
                <p className="mt-4 font-mono text-[11px] text-primary/90 bg-primary/10 rounded-lg px-2.5 py-1.5 w-fit">
                  ID: {item.credentialId}
                </p>
              ) : null}
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  View certificate <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
