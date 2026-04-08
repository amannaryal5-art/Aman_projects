"use client";

import type { FormEvent } from "react";
import { resumeProfile } from "@/data/resume";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = `Portfolio inquiry from ${name || "website visitor"}`;
    const body = [
      `Name: ${name || "N/A"}`,
      `Email: ${email || "N/A"}`,
      "",
      "Message:",
      message || "N/A"
    ].join("\n");

    window.location.href = `mailto:${resumeProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section-shell pb-8 pt-10 md:pb-10 md:pt-14">
      <div className="resume-panel fade-up delay-5 p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="section-kicker">Contact</p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
            Reach out directly.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Send a note and your default mail client will open with the details pre-filled.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:max-w-3xl">
          <label className="grid gap-2">
            <span className="text-sm text-slate-300">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input-shell"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-300">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input-shell"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-300">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about the role, project, or product."
              className="input-shell resize-y"
            />
          </label>

          <button type="submit" className="button-primary w-full sm:w-auto">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
