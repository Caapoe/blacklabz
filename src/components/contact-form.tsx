"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "Info@blacklabz.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nName: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full bg-transparent border border-white/20 focus:border-white/60 outline-none px-3 py-2 font-mono text-sm text-white placeholder:text-white/30 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <label className="flex flex-col gap-1 font-mono text-xs text-white/50">
        &gt; name
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
          placeholder="Your name"
        />
      </label>

      <label className="flex flex-col gap-1 font-mono text-xs text-white/50">
        &gt; email
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          placeholder="you@example.com"
        />
      </label>

      <label className="flex flex-col gap-1 font-mono text-xs text-white/50">
        &gt; message
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your project"
        />
      </label>

      <button
        type="submit"
        className="self-start font-mono text-sm font-bold border border-white px-5 py-2 hover:bg-white hover:text-black transition-colors"
      >
        send_
      </button>

      <p className="font-mono text-[10px] text-white/30">
        Submitting opens your email client with the message addressed to{" "}
        {CONTACT_EMAIL}. Nothing is stored on this website.
      </p>
    </form>
  );
}
