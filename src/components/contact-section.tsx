"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { developer } from "@/lib/data";

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
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Ready for the next full-time engineering opportunity."
          description="Aman is based in Thane, Maharashtra and open to full-time roles where full stack ownership, API architecture, and product problem solving matter."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="rounded-xl border-[0.5px] border-border bg-card p-6 md:p-8"
        >
          <div className="grid gap-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-xl border-[0.5px] border-border bg-elevated px-4 py-4 transition-colors hover:border-accent"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border-[0.5px] border-border bg-card">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text">{link.label}</p>
                      <p className="mono-chip text-xs uppercase tracking-[0.14em] text-slate-500">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border-[0.5px] border-border bg-elevated p-5">
            <p className="mono-chip text-xs uppercase tracking-[0.18em] text-live">status</p>
            <p className="mt-3 text-lg text-text">{developer.availability}</p>
            <p className="mt-2 text-sm text-slate-400">{developer.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
