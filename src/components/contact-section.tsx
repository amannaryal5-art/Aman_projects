"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { developer } from "@/lib/data";

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
    value: developer.email,
    href: `mailto:${developer.email}`,
    icon: Mail
  },
  {
    label: "GitHub",
    value: "github.com/amannaryal5-art",
    href: developer.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aman-naryal-608034221",
    href: developer.linkedin,
    icon: Linkedin
  },
  {
    label: "Location",
    value: developer.location,
    href: "#contact",
    icon: MapPin
  },
  {
    label: "Phone",
    value: "Available on request",
    href: `mailto:${developer.email}`,
    icon: Phone
  }
];

async function createSha512(value: string) {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await window.crypto.subtle.digest("SHA-512", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function ContactSection() {
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
        throw new Error(result.error ?? "Something went wrong. Please email me directly.");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly."
      );
    }
  };

  return (
    <section id="contact" className="section-shell scroll-mt-28 py-20 md:py-28">
      <div className="section-frame grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Work Together"
            description="I’m currently open to new opportunities. Whether you have a project in mind or want to discuss a role, feel free to reach out."
          />

          <div className="mt-10 grid gap-4">
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="neo-card p-6 md:p-8"
        >
          <p className="font-display text-3xl tracking-[-0.04em] text-white">Send a Message</p>

          {status === "success" ? (
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              ✅ Message sent! I&apos;ll get back to you soon.
            </div>
          ) : null}

          {status === "error" ? (
            <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              ❌ {errorMsg || "Something went wrong. Please email me directly."}
            </div>
          ) : null}

          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              className="contact-input"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={formData.website}
              onChange={handleChange}
            />
            <textarea
              className="contact-input min-h-[170px] resize-none"
              name="message"
              placeholder="Tell me about your project or opportunity."
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="button-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
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

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={developer.linkedin} target="_blank" rel="noreferrer" className="social-chip">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={developer.github} target="_blank" rel="noreferrer" className="social-chip">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${developer.email}`} className="social-chip">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
