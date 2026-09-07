import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/quote-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Contact IGLOBALAGREECARE." };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Start a conversation." copy="Tell us about your requirement and our team will respond with the next practical steps."/><section className="bg-[#f8f5ee] py-20 md:py-28"><div className="container-site grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><aside className="rounded-3xl bg-forest p-8 text-white"><p className="eyebrow">Reach us</p><div className="mt-8 space-y-5 text-sm leading-7 text-white/65"><p>{contact.address}</p><a className="block hover:text-white" href={`tel:${contact.phone}`}>{contact.phone}</a><a className="block hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a></div></aside><div className="rounded-3xl bg-white p-7 shadow-sm md:p-10"><QuoteForm/></div></div></section></>;
}
