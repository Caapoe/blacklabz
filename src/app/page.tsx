"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = [
  "Black Labz",
  "Web 3 Service Designs",
  "Product Lead",
  "AI Driven",
  "Data Oriented",
  "Brand Agnostic",
  "Solution Oriented",
  "Vibe Coder",
  "From Heart of Europe",
  "Tallinn",
];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const runSequence = useCallback(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const total = phrases.length;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      for (let p = 0; p < total; p++) {
        const phrase = phrases[p];
        const isLast = p === total - 1; // only "Tallinn"

        // Typing speed
        let typeSpeed: number;
        if (p === 0) typeSpeed = 100;
        else if (isLast) typeSpeed = 150;
        else typeSpeed = 80;

        // Delete speed
        let deleteSpeed: number;
        if (isLast) deleteSpeed = 100;
        else if (p === 0) deleteSpeed = 60;
        else deleteSpeed = 50;

        // Pause after typing
        let pauseAfter: number;
        if (p === 0) pauseAfter = 1500;
        else if (isLast) pauseAfter = 3000;
        else pauseAfter = 1000;

        // Type
        for (let i = 1; i <= phrase.length; i++) {
          setDisplayed(phrase.slice(0, i));
          await delay(typeSpeed);
        }

        await delay(pauseAfter);

        // Delete
        for (let i = phrase.length - 1; i >= 0; i--) {
          setDisplayed(phrase.slice(0, i));
          await delay(deleteSpeed);
        }

        await delay(isLast ? 800 : 400);
      }
    }
  }, []);

  useEffect(() => {
    runSequence();
  }, [runSequence]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold font-mono">
        {displayed}
        <span
          className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
        >
          _
        </span>
      </h1>
    </div>
  );
}
