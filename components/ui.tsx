import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="grid-texture bg-forest pb-20 pt-36 text-white md:pb-28 md:pt-44"><div className="container-site"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[.95] tracking-[-.035em] sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{copy}</p></div></section>;
}

export function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title max-w-3xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/60">{copy}</p>}</div>;
}

export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`relative overflow-hidden ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>;
}

export function ProductCard({ product }: { product: Product }) {
  return <article className="group overflow-hidden rounded-2xl border border-forest/8 bg-white shadow-[0_12px_45px_rgba(18,45,27,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(18,45,27,.12)]"><Link href={`/products/${product.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-6"><p className="eyebrow">{product.category}</p><h3 className="mt-3 text-2xl font-medium text-leaf">{product.name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-ink/55">{product.summary}</p><span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-gold">View details →</span></div></Link></article>;
}
