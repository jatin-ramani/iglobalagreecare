import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ui";
import { products } from "@/lib/data";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = products.find((item) => item.slug === slug); return product ? { title: product.name, description: product.summary } : {}; }

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3);
  if (related.length < 2) related.push(...products.filter((item) => item.slug !== product.slug && !related.includes(item)).slice(0, 3 - related.length));

  return <>
    <section className="grid-texture bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div><p className="eyebrow text-white">{product.category}</p><h1 className="mt-5 text-5xl font-medium leading-[.92] sm:text-7xl">{product.name}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-white/70">{product.tagline}</p></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f4f0e7] shadow-2xl"><Image src={product.image} alt={`${product.name} product`} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-5"/></div>
      </div>
    </section>
    <section className="bg-[#f8f5ee] py-24 md:py-32"><div className="container-site grid gap-14 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-lg leading-9 text-ink/70">{product.intro}</p><div className="mt-12 grid gap-8 sm:grid-cols-2"><div><h2 className="text-3xl font-medium text-leaf">Key features</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-ink/60">{product.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></div><div><h2 className="text-3xl font-medium text-leaf">Applications</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-ink/60">{product.applications.map((application) => <li key={application}>→ {application}</li>)}</ul></div></div></div><aside className="rounded-3xl bg-forest p-8 text-white"><p className="eyebrow">Why choose {product.name}</p><p className="mt-5 text-sm leading-7 text-white/65">{product.closing}</p><Link href={`/contact?product=${product.slug}`} className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider">Request a quote</Link></aside></div></section>
    <section className="bg-white py-24"><div className="container-site"><h2 className="section-title">Related products</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard product={item} key={item.slug}/>)}</div></div></section>
  </>;
}
