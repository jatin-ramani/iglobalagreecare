import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/quote-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact IGLOBALAGREECARE for cow dung manure and sustainable agriculture solutions.",
};

export default function Contact() {
  return <>
    <PageHero eyebrow="Contact us" title="Let’s grow something better." copy="Tell us about your farm, garden, landscape, or agricultural project. Our team will help identify a practical natural solution." />
    <section className="bg-[#f8f5ee] py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
        <QuoteForm />
        <aside className="rounded-3xl bg-forest p-7 text-white sm:p-9">
          <p className="eyebrow">IGLOBALAGREECARE team</p>
          <h2 className="mt-4 text-3xl font-medium">Start a conversation.</h2>
          <div className="mt-8 space-y-6 text-sm leading-7 text-white/60">
            <div><b className="block text-white">Email</b><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            <div><b className="block text-white">Phone</b><a href={`tel:${contact.phone}`}>{contact.phone}</a></div>
            <div><b className="block text-white">Office</b><p>{contact.address}</p></div>
            <div><b className="block text-white">Website</b><p>{contact.website}</p></div>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-xs leading-6 text-white/50">Junagadh, Gujarat, India<br />Monday–Saturday · 09:00–18:00 IST</div>
        </aside>
      </div>
    </section>
  </>;
}
