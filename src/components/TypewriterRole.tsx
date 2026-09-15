import { useEffect, useState } from "react";

interface TypewriterRoleProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypewriterRole({
  text,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseDuration = 2200,
  className = "",
}: TypewriterRoleProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Fully typed: pause so visitors can read the full bio
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting: pause briefly before typing again
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center flex-wrap ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        <span>{displayedText}</span>
        <span
          className="inline-block w-[2.5px] h-[1.15em] bg-primary ml-1.5 align-middle rounded-full animate-pulse shadow-[0_0_8px_var(--color-primary)]"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
