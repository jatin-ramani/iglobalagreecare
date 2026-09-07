"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/data";

type ListingProduct = {
  name: string;
  slug: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  position?: string;
  existing: boolean;
};

const existingImages: Record<string, Pick<ListingProduct, "image" | "alt" | "position">> = {
  "cow-dung-cakes": { image: "/products/catalog-cow-dung-cakes.jpg", alt: "Stacks of naturally dried cow dung cakes", position: "center 52%" },
  "cow-dung-manure": { image: "/products/catalog-cow-dung-manure.jpg", alt: "Rich organic composted manure being neatly handled", position: "center 58%" },
  "yellow-corn-maize": { image: "/products/catalog-yellow-corn.jpg", alt: "Clean yellow maize kernels presented in a bowl" },
  "moringa-leaf-powder": { image: "/products/catalog-moringa-powder.jpg", alt: "Fine green moringa leaf powder in a metal scoop" },
  "organic-moringa-leaf-powder": { image: "/products/catalog-organic-moringa.jpg", alt: "Fresh green moringa leaves arranged for processing" },
  "dry-oyster-mushroom": { image: "/products/catalog-dry-oyster-mushroom.jpg", alt: "Oyster mushrooms neatly presented in a dark bowl" },
  "oyster-mushroom-powder": { image: "/products/catalog-oyster-mushroom-powder.jpg", alt: "Fine natural brown powder presented in a wooden bowl" },
  "banana-powder": { image: "/products/catalog-banana-powder.jpg", alt: "Banana slices neatly presented in a clean bowl" },
  "garlic-powder": { image: "/products/catalog-garlic-powder.jpg", alt: "Bowl of seasoning with fresh garlic on a wooden tray" },
  "onion-powder": { image: "/products/catalog-onion-powder.jpg", alt: "Dehydrated onion seasoning displayed in a market bowl" },
  "pp-pet-strapping-rolls": { image: "/products/catalog-strapping-rolls.jpg", alt: "Industrial materials secured with professional packaging straps" },
};

const existingProducts: ListingProduct[] = products.map((product) => ({
  ...product,
  ...existingImages[product.slug],
  alt: existingImages[product.slug].alt,
  existing: true,
}));

const newProducts: ListingProduct[] = [
  { name: "Onion Powder", slug: "new-onion-powder", category: "Powders & Superfoods", summary: "Finely ground dehydrated red onion powder with concentrated flavor and aroma, ideal for seasoning blends, snacks and food processing.", image: "/products/client/IMG_0996.PNG", alt: "Bowl of pink red onion powder with whole and sliced red onions", position: "center 43%", existing: false },
  { name: "Peanut Oil (Groundnut Oil)", slug: "peanut-oil-groundnut-oil", category: "Oils", summary: "Cold-pressed groundnut oil with a rich nutty aroma and high smoke point, suited for cooking and food manufacturing.", image: "/products/client/IMG_1296.PNG", alt: "Golden groundnut oil in a glass bowl with peanuts", existing: false },
  { name: "Moringa Leaf Powder", slug: "new-moringa-leaf-powder", category: "Powders & Superfoods", summary: "Nutrient-dense moringa leaf powder, shade-dried and finely milled, used in nutraceuticals, food and beverage formulations.", image: "/products/client/IMG_1298.PNG", alt: "Green moringa leaf powder with fresh leaves, pods, jar and mortar", existing: false },
  { name: "Egg White Powder", slug: "egg-white-powder", category: "Powders & Superfoods", summary: "Spray-dried egg white (albumin) powder with high protein content, used in bakery, confectionery and nutraceutical applications.", image: "/products/client/IMG_1389.PNG", alt: "Bowl of off-white egg white powder with whole eggs and eggshells", position: "center 40%", existing: false },
  { name: "Red Chili Powder", slug: "red-chili-powder", category: "Powders & Superfoods", summary: "Vibrant, finely ground red chili powder with balanced heat and color, suited for culinary and food-processing use.", image: "/products/client/IMG_1292.PNG", alt: "Bright red chili powder with whole dried red chilies", existing: false },
  { name: "Neem Powder", slug: "neem-powder", category: "Powders & Superfoods", summary: "Pure neem leaf powder valued for natural pest control, herbal formulations and organic farming inputs.", image: "/products/client/IMG_1293.PNG", alt: "Olive-green neem leaf powder with fresh neem leaves", existing: false },
  { name: "Sunflower Oil", slug: "sunflower-oil", category: "Oils", summary: "Refined sunflower oil with a light flavor and high vitamin E content, suitable for cooking and industrial use.", image: "/products/client/IMG_1294.PNG", alt: "Golden sunflower oil in a glass bowl with sunflower seeds", existing: false },
];

const listingProducts = [...existingProducts, ...newProducts];
const categories = ["All", "Powders & Superfoods", "Oils", "Grains", "Manure & Biomass", "Packaging"];

function ListingCard({ product }: { product: ListingProduct }) {
  const card = <article className="group h-full overflow-hidden rounded-2xl border border-forest/8 bg-white shadow-[0_12px_45px_rgba(18,45,27,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(18,45,27,.12)]">
    <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: product.position ?? "center" }} /></div>
    <div className="p-6"><p className="eyebrow">{product.category}</p><h3 className="mt-3 text-2xl font-medium text-leaf">{product.name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-ink/55">{product.summary}</p><span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-gold">{product.existing ? "View details" : "New product"}</span></div>
  </article>;
  return product.existing ? <Link href={`/products/${product.slug}`} className="block h-full">{card}</Link> : card;
}

export function ProductsGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? listingProducts : listingProducts.filter((product) => product.category === filter);
  return <><div className="flex gap-2 overflow-x-auto pb-3">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition ${filter === category ? "bg-forest text-white" : "border border-forest/10 bg-white text-ink/60 hover:border-gold"}`}>{category}</button>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((product) => <ListingCard key={product.slug} product={product} />)}</div></>;
}
