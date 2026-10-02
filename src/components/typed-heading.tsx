"use client";

import { useEffect, useState } from "react";

interface TypedHeadingProps {
  text: string;
  speed?: number;
}

export default function TypedHeading({ text, speed = 90 }: TypedHeadingProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(typing);
    }, speed);
    return () => clearInterval(typing);
  }, [text, speed]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
      {displayed}
      <span
        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        _
      </span>
    </h1>
  );
}
