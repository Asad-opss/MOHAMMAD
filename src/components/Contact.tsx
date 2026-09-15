import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, Section } from "./Section";
import { profile } from "@/data/profile";

export function Contact() {
  const details = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      actionLabel: "Send an email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
      actionLabel: "Call directly",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      actionLabel: null,
    },
  ];

  const socials = [
    ...(profile.socials.github
      ? [{ icon: Github, label: "GitHub", href: profile.socials.github }]
      : []),
    ...(profile.socials.linkedin
      ? [{ icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin }]
      : []),
    ...(profile.socials.instagram && profile.socials.instagram !== "[OPTIONAL]"
      ? [{ icon: Instagram, label: "Instagram", href: profile.socials.instagram }]
      : []),
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">together</span>
        </>
      }
      description="Have an idea, project or opportunity? Reach out directly via email, phone, or connect with me online."
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.map(({ icon: Icon, label, value, href, actionLabel }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="card-surface flex h-full flex-col justify-between rounded-2xl p-6 transition-colors hover:border-primary/40">
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-foreground/90 break-words">
                    {value}
                  </p>
                </div>
                {href ? (
                  <a
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {actionLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-8">
          <div className="card-surface flex flex-col items-center justify-between gap-6 rounded-2xl p-8 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold">Connect & Reach Out</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Feel free to email me directly or explore my code and background.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" aria-hidden="true" />
                Send Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
