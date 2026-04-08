import { ProductCard } from "@/components/landing/ProductCard";
import { products } from "@/data/products";

export function ProductsGrid() {
  return (
    <section className="section-shell pb-8 pt-16 md:pb-10 md:pt-20">
      <div className="fade-up delay-1 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Products</p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-text md:text-6xl">
            Things I&apos;ve built and shipped.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate-400">
          Real systems first, with room carved out for the next wave of products.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
