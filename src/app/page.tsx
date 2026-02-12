"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const phrases = [
  "Black Labz",
  "Web 3 Service Designs",
  "Product Lead",
  "AI Driven",
  "Data Focused",
  "Brand Agnostic",
  "Solution Architect",
  "Vibe Coder",
  "Tallinn",
];

const scatterWords = ["Create", "Innovate", "Celebrate"];

interface ScatterPrompt {
  id: number;
  word: string;
  x: number;
  y: number;
  displayed: string;
  done: boolean;
}

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [scatterPrompts, setScatterPrompts] = useState<ScatterPrompt[]>([]);
  const [phase, setPhase] = useState<"typing" | "scatter">("typing");
  const idRef = useRef(0);

  const runSequence = useCallback(async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const total = phrases.length;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      // Phase 1: main typing sequence
      setPhase("typing");
      setScatterPrompts([]);

      for (let p = 0; p < total; p++) {
        const phrase = phrases[p];
        const isLast = p === total - 1;

        let typeSpeed: number;
        if (p === 0) typeSpeed = 100;
        else if (isLast) typeSpeed = 150;
        else typeSpeed = 80;

        let deleteSpeed: number;
        if (isLast) deleteSpeed = 100;
        else if (p === 0) deleteSpeed = 60;
        else deleteSpeed = 50;

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

      // Phase 2: scatter prompts
      setPhase("scatter");
      setDisplayed("");

      const positions = [
        { x: 30, y: 30 },
        { x: 65, y: 50 },
        { x: 40, y: 70 },
      ];

      for (let w = 0; w < scatterWords.length; w++) {
        const word = scatterWords[w];
        const pos = positions[w];
        const promptId = ++idRef.current;

        setScatterPrompts((prev) => [
          ...prev,
          { id: promptId, word, x: pos.x, y: pos.y, displayed: "", done: false },
        ]);

        // Type this scatter word
        for (let i = 1; i <= word.length; i++) {
          setScatterPrompts((prev) =>
            prev.map((p) =>
              p.id === promptId ? { ...p, displayed: word.slice(0, i) } : p
            )
          );
          await delay(90);
        }

        // Mark done
        setScatterPrompts((prev) =>
          prev.map((p) => (p.id === promptId ? { ...p, done: true } : p))
        );

        await delay(300);
      }

      // Hold all three visible
      await delay(2500);

      // Delete each scatter word character by character
      const currentPrompts = [...scatterWords];
      for (let w = 0; w < currentPrompts.length; w++) {
        const word = currentPrompts[w];
        for (let i = word.length - 1; i >= 0; i--) {
          setScatterPrompts((prev) =>
            prev.map((p, idx) =>
              idx === w ? { ...p, displayed: word.slice(0, i) } : p
            )
          );
          await delay(50);
        }
        await delay(100);
      }

      setScatterPrompts([]);
      await delay(600);
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
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden px-6">
      {/* Main center prompt */}
      {phase === "typing" && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-center">
          {displayed}
          <span
            className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
          >
            _
          </span>
        </h1>
      )}

      {/* Scattered prompts */}
      {scatterPrompts.map((prompt) => (
        <div
          key={prompt.id}
          className="absolute font-mono text-xl sm:text-2xl md:text-3xl font-bold transition-opacity duration-500"
          style={{ left: `${prompt.x}%`, top: `${prompt.y}%`, transform: "translate(-50%, -50%)" }}
        >
          {prompt.displayed}
          <span
            className={`${
              prompt.done
                ? showCursor
                  ? "opacity-100"
                  : "opacity-0"
                : "opacity-100"
            } transition-opacity duration-100`}
          >
            _
          </span>
        </div>
      ))}
    </div>
  );
}
