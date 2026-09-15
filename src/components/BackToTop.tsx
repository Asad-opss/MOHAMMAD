import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

export function BackToTop() {
  const { progress } = useScroll();
  const show = progress > 0.15;

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex size-12 items-center justify-center rounded-2xl glass text-foreground shadow-[var(--shadow-elegant)]"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
