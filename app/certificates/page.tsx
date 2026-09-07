import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, SectionHead } from "@/components/ui";
import { certificatesList } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certificates & Quality Assurance | IGLOBALAGREECARE",
  description: "Official certifications and quality assurance documentation for IGLOBALAGREECARE exports.",
};

const checkpoints = [
  { number: "01", title: "Sourcing Standards", copy: "Verified farm clusters and lot selection meeting export grade specifications." },
  { number: "02", title: "Testing & Records", copy: "Accredited laboratory analysis, moisture checks, and batch COA reports." },
  { number: "03", title: "Inspection", copy: "Pre-shipment verification of physical condition, grading, and weight parameters." },
  { number: "04", title: "Export Packaging", copy: "Moisture-barrier sealing, food-grade liners, and fumigated container stowage." },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Certificates & Quality Assurance"
        copy="Product and shipment documentation aligned with international standards, buyer specifications, and destination import requirements."
      />

      {/* Minimal 6 Certification Badges */}
      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="Accreditations"
            title="Official Standards & Certifications"
            copy="Our operations and export consignments comply with recognized statutory authorities and food safety benchmarks."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certificatesList.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-3xl border border-forest/10 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
              >
                <div className="relative flex aspect-square h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-[#f8f5ee] p-3 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-leaf group-hover:text-forest">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-4 text-ink/50 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-ink/45">
            * Certificate availability is product- and order-specific. Copies are supplied upon confirmed order scope.
          </p>
        </div>
      </section>

      {/* Minimal 4-Checkpoint Quality Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="Quality Control"
            title="Four Checkpoints for Every Shipment"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {checkpoints.map((cp) => (
              <article key={cp.number} className="rounded-3xl border border-forest/10 bg-[#f8f5ee] p-6 sm:p-7 shadow-xs">
                <b className="font-display text-3xl text-gold">{cp.number}</b>
                <h3 className="mt-3 font-display text-xl font-medium text-leaf">{cp.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink/65">{cp.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Clean CTA */}
      <section className="bg-forest py-14 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white">
              Need certificate copies or batch test reports?
            </h2>
            <p className="mt-1 max-w-xl text-xs sm:text-sm text-white/65">
              Contact our trade team with your required product and destination port details.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-gold/90 shrink-0"
          >
            Request Certificate Copies
          </Link>
        </div>
      </section>
    </>
  );
}
