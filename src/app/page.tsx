import type { Metadata } from "next";
import { AboutStrip } from "@/components/landing/AboutStrip";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { ProductsGrid } from "@/components/landing/ProductsGrid";

export const metadata: Metadata = {
  title: "Aman Naryal | Products",
  description: "A product-focused landing page for Aman Naryal's shipped tools and upcoming systems."
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-bg text-text">
      <Hero />
      <ProductsGrid />
      <AboutStrip />
      <Footer />
    </main>
  );
}
