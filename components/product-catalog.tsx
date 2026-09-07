"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, productCategories, ProductCategory } from "@/lib/products";

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-[#f8f5ee] py-16 md:py-24">
      <div className="container-site">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {productCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  active
                    ? "bg-forest text-white shadow-md"
                    : "border border-forest/15 bg-white text-ink/70 hover:border-forest/40 hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              {/* 4:3 Aspect Ratio Product Image */}
              <Link
                href={`/products/${product.slug}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#f1ece2]"
                aria-label={`View details for ${product.title}`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-forest/85 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                  {product.category}
                </span>
              </Link>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="eyebrow text-[0.6rem]">{product.category}</p>
                  <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-leaf group-hover:text-forest">
                    <Link href={`/products/${product.slug}`}>{product.title}</Link>
                  </h2>
                  <p className="mt-3 line-clamp-2 text-xs leading-6 text-ink/65">
                    {product.listDescription}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-5 border-t border-forest/8 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition-colors duration-200 group-hover:text-forest"
                  >
                    <span>View details</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-[11px] font-semibold text-ink/40">India</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-base text-ink/60">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
