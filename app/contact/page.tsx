import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/quote-form";
import { contact } from "@/lib/data";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | IGLOBALAGREECARE",
  description: "Contact IGLOBALAGREECARE for product inquiries and commercial quotations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our team."
        copy="Reach out directly for quotations, product specifications, and shipment planning."
      />

      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-10 items-start">
          {/* Contact Details Card */}
          <aside className="rounded-3xl bg-forest p-7 sm:p-9 text-white shadow-md">
            <p className="eyebrow text-gold">Office & Reach</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-white">
              IGLOBALAGREECARE
            </h2>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-gold shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-gold shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-white/10 text-xs text-white/60 space-y-1">
              <p className="font-bold uppercase tracking-wider text-gold">Working Hours</p>
              <p>Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
            </div>

            <div className="mt-7">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform duration-200 hover:scale-105"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </aside>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
