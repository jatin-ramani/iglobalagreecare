"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/lib/data";

export function HeroCarousel() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden text-white flex flex-col justify-center">
      <Image
        src="/client/hero-crops-2026.jpg"
        alt="Bright Indian agricultural crop field"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-105 contrast-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c2416]/85 via-[#0c2416]/60 to-[#0c2416]/80 md:bg-gradient-to-r md:from-[#0c2416]/90 md:via-[#0c2416]/40 md:to-transparent" />
      <div className="container-site relative flex min-h-screen min-h-[100dvh] w-full items-center pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-3xl">
          <p className="eyebrow inline-block rounded-full border border-white/30 bg-[#0c2416]/30 px-3.5 py-1.5 text-white backdrop-blur-xs text-[10px] sm:text-xs">
            Indian agricultural exports
          </p>
          <h1 className="mt-5 text-3xl font-medium leading-[1.02] tracking-[-.035em] sm:text-6xl lg:text-8xl">
            Quality rooted in India.
            <br />
            <em className="text-[#e9bb84]">Ready for the world.</em>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            Responsible sourcing, practical quality assurance and clear communication for domestic and international buyers.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-gold/90"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
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
