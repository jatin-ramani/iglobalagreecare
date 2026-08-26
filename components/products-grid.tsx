"use client";
import { useState } from "react";
import { productCategories, products } from "@/lib/data";
import { ProductCard } from "@/components/ui";

export function ProductsGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? products : products.filter((product) => product.category === filter);
  return <><div className="flex gap-2 overflow-x-auto pb-3">{["All", ...productCategories].map((category) => <button key={category} onClick={() => setFilter(category)} className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition ${filter === category ? "bg-forest text-white" : "border border-forest/10 bg-white text-ink/60 hover:border-gold"}`}>{category}</button>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((product) => <ProductCard key={product.slug} product={product} />)}</div></>;
}
