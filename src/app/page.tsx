"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = ["Black Labz", "Web 3 Service Designs"];

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const runSequence = useCallback(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

    for (let p = 0; p < phrases.length; p++) {
      const phrase = phrases[p];

      // Type
      for (let i = 1; i <= phrase.length; i++) {
        setDisplayed(phrase.slice(0, i));
        await delay(100);
      }

      // Pause before deleting (skip delete on last phrase)
      if (p < phrases.length - 1) {
        await delay(1500);

        // Delete
        for (let i = phrase.length - 1; i >= 0; i--) {
          setDisplayed(phrase.slice(0, i));
          await delay(60);
        }

        await delay(400);
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
