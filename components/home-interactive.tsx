"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/lib/data";

export function HeroCarousel() {
  return <section className="relative min-h-[760px] overflow-hidden text-white"><Image src="/client/hero-crops-2026.jpg" alt="Bright Indian agricultural crop field" fill priority sizes="100vw" className="object-cover object-center"/><div className="absolute inset-0 bg-linear-to-r from-[#0c2416]/95 via-[#0c2416]/70 to-[#0c2416]/20"/><div className="container-site relative flex min-h-[760px] items-center pt-24"><div className="max-w-3xl"><p className="eyebrow inline-block rounded-full border border-white/30 px-4 py-2 text-white">Indian agricultural exports</p><h1 className="mt-7 text-5xl font-medium leading-[.9] tracking-[-.045em] sm:text-7xl lg:text-8xl">Quality rooted in India.<br/><em className="text-[#e9bb84]">Ready for the world.</em></h1><p className="mt-6 max-w-xl text-base leading-7 text-white/80">Responsible sourcing, practical quality assurance and clear communication for domestic and international buyers.</p><Link href="/contact" className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider">Start a conversation</Link></div></div></section>;
}

export function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-forest/10 rounded-3xl bg-white px-6 sm:px-8">{faqs.map(([question, answer], index) => <div key={question} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-semibold text-leaf" onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><span className="text-xl text-gold">{open === index ? "−" : "+"}</span></button>{open === index && <p className="max-w-3xl pt-4 text-sm leading-7 text-ink/60">{answer}</p>}</div>)}</div>;
}

const testimonials = [["Overseas client", "Communication was clear from the initial discussion through planning, which made the process straightforward."], ["Business partner", "The team understood our questions and responded with practical commercial options."], ["Domestic client", "Reliable follow-up makes IGLOBALAGREECARE a useful business partner."]];
export function Testimonials() {
  const [active, setActive] = useState(0);
  return <div className="rounded-3xl bg-white p-8 sm:p-10"><p className="font-display text-2xl italic leading-9 text-leaf">“{testimonials[active][1]}”</p><p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold">{testimonials[active][0]}</p><div className="mt-7 flex gap-2">{testimonials.map((item, index) => <button key={item[0]} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} className={`h-2 w-2 rounded-full ${active === index ? "bg-gold" : "bg-forest/20"}`}/>)}</div></div>;
}
