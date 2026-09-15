import { Github, Instagram, Linkedin } from "lucide-react";
import { navItems, profile } from "@/data/profile";

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-gradient">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Building ideas into digital experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-start gap-2 md:justify-end">
          {profile.socials.github ? (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground"
            >
              <Github className="size-5" />
            </a>
          ) : null}
          {profile.socials.linkedin ? (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
          ) : null}
          {profile.socials.instagram && profile.socials.instagram !== "[OPTIONAL]" ? (
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-foreground"
            >
              <Instagram className="size-5" />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-6xl px-5 text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
