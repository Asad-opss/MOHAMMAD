import { Globe, Layers, PenTool, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, Section } from "./Section";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = { Globe, Layers, Sparkles, PenTool };

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title={
        <>
          Services I <span className="text-gradient">offer</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Globe;
          return (
            <Reveal key={service.title} delay={i * 0.06}>
              <article className="card-surface group h-full rounded-2xl p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
