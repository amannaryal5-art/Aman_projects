"use client";

import { Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { resumeProfile } from "@/data/resume";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: ""
};

const links = [
  {
    label: "Email",
    value: resumeProfile.email,
    href: `mailto:${resumeProfile.email}`,
    icon: Mail
  },
  {
    label: "GitHub",
    value: "github.com/amannaryal5-art",
    href: resumeProfile.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aman-naryal-608034221",
    href: resumeProfile.linkedin,
    icon: Linkedin
  },
  {
    label: "Location",
    value: resumeProfile.location,
    href: "#resume-contact",
    icon: MapPin
  }
] as const;

async function createSha512(value: string) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await window.crypto.subtle.digest("SHA-512", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setStatus("idle");
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        website: formData.website.trim()
      };
      const timestamp = Date.now().toString();
      const digest = await createSha512(
        [payload.name, payload.email, payload.subject, payload.message, payload.website, timestamp].join("|")
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-contact-timestamp": timestamp,
          "x-contact-digest": digest
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error ? error.message : "Unable to send your message right now."
      );
    }
  };

  return (
    <section id="resume-contact" className="section-shell pb-8 pt-10 md:pb-10 md:pt-14">
      <div className="resume-panel fade-up delay-5 grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Reach out for full-time roles, freelance work, or product collaborations.
          </p>

          <div className="mt-8 grid gap-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-link-card"
                >
                  <div className="contact-link-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div>
          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Message sent successfully. I&apos;ll get back to you soon.
            </div>
          ) : null}

          {status === "error" ? (
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {errorMsg || "Unable to send your message right now."}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="input-shell"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-slate-300">Subject</span>
              <input
                type="text"
                name="subject"
                required
                placeholder="Role, project, or opportunity"
                className="input-shell"
                value={formData.subject}
                onChange={handleChange}
              />
            </label>

            <label className="hidden" aria-hidden="true">
              <span>Website</span>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="input-shell"
                value={formData.website}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="button-primary w-full sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
