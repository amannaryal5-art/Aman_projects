import { ArrowUpRight, Github } from "lucide-react";
import type { ProductCardData } from "@/data/products";

type ProductCardProps = {
  product: ProductCardData;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      className={`fade-up delay-${Math.min(index + 1, 5)} group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 md:p-7 ${
        product.ghost
          ? "border-white/8 bg-panel-soft/60 text-slate-400"
          : "border-white/10 bg-panel text-text shadow-card hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)] opacity-60" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{product.tagline}</p>
            <h3 className="mt-4 font-display text-3xl tracking-[-0.03em]">{product.name}</h3>
          </div>
          <span
            className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${
              product.status === "Live"
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-white/10 bg-white/5 text-slate-400"
            }`}
          >
            {product.status}
          </span>
        </div>

        <p className={`mt-6 max-w-md text-sm leading-7 ${product.ghost ? "text-slate-400" : "text-slate-300"}`}>
          {product.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {product.stack.map((item) => (
            <span
              key={item}
              className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.16em] ${
                product.ghost
                  ? "border-white/10 bg-white/[0.03] text-slate-500"
                  : "border-white/10 bg-white/[0.03] text-slate-300"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {product.githubUrl ? (
            <a href={product.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {product.liveUrl ? (
            <a href={product.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <ArrowUpRight className="h-4 w-4" />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
