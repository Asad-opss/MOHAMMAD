import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

const ids = navItems.map((n) => n.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { scrolled, progress } = useScroll(20);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-primary"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex w-[min(72rem,calc(100%-1.5rem))] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled ? "glass shadow-[var(--shadow-card)]" : "border border-transparent",
          )}
        >
          <button
            onClick={() => go("home")}
            className="font-display text-sm font-semibold tracking-tight"
          >
            <span className="text-gradient">{profile.name}</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    active === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active === item.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-primary"
                    />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("contact")}
              className="hidden rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:bg-primary/15 sm:inline-flex"
            >
              Let&apos;s Work Together
            </button>
            <a
              href={profile.resumeUrl}
              target={profile.resumeUrl !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_60%,transparent)] active:translate-y-0"
            >
              <FileText className="size-4" aria-hidden="true" />
              Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="mx-auto mt-2 w-[min(72rem,calc(100%-1.5rem))] rounded-2xl glass p-2 md:hidden"
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => go(item.id)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left text-sm",
                        active === item.id
                          ? "bg-primary/15 text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex flex-col gap-2 border-t border-border/50 p-2 sm:hidden">
                <a
                  href={profile.resumeUrl}
                  target={profile.resumeUrl !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)]"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Resume
                </a>
                <button
                  onClick={() => go("contact")}
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-center text-sm font-medium text-secondary-foreground"
                >
                  Let&apos;s Work Together
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
