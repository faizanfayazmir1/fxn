"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 65, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export function Typewriter({ words }: { words: string[] }) {
  const text = useTypewriter(words);
  return (
    <>
      {text}
      <span
        aria-hidden
        className="inline-block w-[3px] bg-accent animate-blink-cursor ml-1"
        style={{ height: "1.1em", verticalAlign: "-0.15em" }}
      />
    </>
  );
}
