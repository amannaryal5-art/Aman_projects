import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aboutStripCopy } from "@/data/products";

export function AboutStrip() {
  return (
    <section className="section-shell py-8 md:py-10">
      <div className="fade-up delay-3 flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-panel px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-3xl text-base leading-8 text-slate-300">{aboutStripCopy}</p>
        <Link href="/resume" className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-white">
          <span>Full profile</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
