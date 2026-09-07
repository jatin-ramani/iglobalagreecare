import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "General website and enquiry terms for IGLOBALAGREECARE.",
};

const sections = [
  [
    "Website use",
    "Website information is provided for general business enquiries and may be updated without notice.",
  ],
  [
    "Products and quotations",
    "Product descriptions and images are indicative. Specifications, availability, pricing, minimum quantities and documentation are confirmed in a formal quotation.",
  ],
  [
    "Orders and payment",
    "An order becomes binding only after written confirmation and acceptance of the agreed commercial terms. Payment requirements are stated in the quotation or contract.",
  ],
  [
    "Shipping and delivery",
    "Timelines depend on product readiness, logistics, documentation and events outside reasonable control. Risk and delivery terms follow the agreed Incoterms or contract.",
  ],
  [
    "Claims and liability",
    "Buyers should inspect goods promptly and report documented issues within the period stated in the applicable agreement. Liability is limited as permitted by law and contract.",
  ],
  [
    "Governing terms",
    "Any final sale is governed by the written quotation, purchase agreement and applicable laws agreed between the parties.",
  ],
];

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Terms & Conditions"
        copy="General website and enquiry terms for IGLOBALAGREECARE."
      />
      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site max-w-3xl space-y-6">
          {sections.map(([title, copy], index) => (
            <div key={title} className="rounded-2xl border border-forest/10 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-leaf">
                {index + 1}. {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

