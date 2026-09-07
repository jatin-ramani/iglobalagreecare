import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Photo, SectionHead } from "@/components/ui";
import {
  SproutIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | IGLOBALAGREECARE",
  description: "About IGLOBALAGREECARE, our sourcing philosophy, and global export process.",
};

export default function About() {
  const exportProcess = [
    { step: "01", title: "Requirement", desc: "Align on specifications, volume, and destination parameters." },
    { step: "02", title: "Sourcing", desc: "Procure verified lots from dedicated farming clusters in Gujarat & India." },
    { step: "03", title: "Quality Check", desc: "Accredited laboratory analysis, moisture checks, and grading." },
    { step: "04", title: "Packaging", desc: "Moisture-barrier export packaging per buyer specifications." },
    { step: "05", title: "Logistics", desc: "Container stuffing, phytosanitary clearance, and shipment dispatch." },
  ];

  const corePillars = [
    {
      badge: "Organic Soil",
      title: "Biological Soil Health",
      desc: "Regenerative soil inputs and organic biomass for sustainable agricultural vitality.",
      icon: SproutIcon,
    },
    {
      badge: "Origin Traceability",
      title: "Direct Sourcing",
      desc: "Direct relationships with verified farming clusters across Gujarat and Saurashtra.",
      icon: MapPinIcon,
    },
    {
      badge: "Quality Control",
      title: "Standardized Testing",
      desc: "Moisture validation, physical grading, and accredited batch lab test reports.",
      icon: ShieldCheckIcon,
    },
    {
      badge: "Documentation",
      title: "Export Compliance",
      desc: "Complete APEDA, Phytosanitary, and customs documentation for international clearance.",
      icon: ClipboardCheckIcon,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="About IGLOBALAGREECARE"
        title="Responsible sourcing. Practical global trade."
        copy="A multi-product Indian export enterprise delivering quality agricultural products, organic soil inputs, culinary ingredients, and superfood powders to international buyers."
      />

      {/* Story */}
      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead
                eyebrow="Our Story"
                title="A reliable sourcing partner for diverse commercial needs."
              />
              <div className="mt-6 space-y-4 text-sm leading-7 text-ink/75">
                <p>
                  IGLOBALAGREECARE connects international buyers with quality Indian agricultural inputs, superfood powders, pure edible oils, grains, and organic soil vitalizers through one responsive point of contact.
                </p>
                <p>
                  We focus on clear communication, practical quality assurance, and dependable logistics. Every inquiry starts with the buyer&apos;s specification, ensuring feasibility, documentation, and packing compliance before order confirmation.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-forest/20 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-leaf shadow-xs transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  Contact Team
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-white p-3 shadow-md">
                <Photo
                  src="/client/india-farm-community-v1.jpg"
                  alt="Indian agricultural sourcing community"
                  className="aspect-[4/3] rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corePillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-forest/10 bg-white p-6 shadow-xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <p className="eyebrow mt-4 text-[0.6rem]">{pillar.badge}</p>
                  <h3 className="mt-1 font-display text-xl font-medium text-leaf">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-ink/65">{pillar.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Agriculture */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-[#f8f5ee] p-3 shadow-md">
              <Photo
                src="/client/gir-cow.png"
                alt="Native Gir cattle and sustainable soil vitality"
                className="aspect-[4/3] rounded-2xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHead
              eyebrow="Soil Vitality"
              title="Rooted in nature. Committed to biological fertility."
            />
            <p className="mt-5 text-sm leading-7 text-ink/75">
              Our organic agricultural products, including vermicompost and cow dung manure, are prepared with native Gir cattle biomass. These natural inputs restore microbial life, improve moisture retention, and build soil carbon naturally without synthetic chemicals.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <b className="text-xs font-bold uppercase tracking-wider text-forest">Chemical-Free</b>
                <p className="mt-1 text-xs leading-6 text-ink/65">
                  Natural biological decomposition free from chemical residues.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <b className="text-xs font-bold uppercase tracking-wider text-forest">Export Standard</b>
                <p className="mt-1 text-xs leading-6 text-ink/65">
                  Controlled drying and moisture-sealed packaging for safe transit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Export Process */}
      <section className="bg-forest py-16 text-white md:py-24">
        <div className="container-site">
          <p className="eyebrow text-gold">Export Process</p>
          <h2 className="section-title text-white">From requirement to delivery.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {exportProcess.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs"
              >
                <b className="font-display text-3xl text-[#e9bb84]">{item.step}</b>
                <h3 className="mt-3 font-display text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/65">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Bottom CTA */}
      <section className="bg-gold py-12 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium font-display leading-tight">
              Ready to discuss your requirement?
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-white/85">
              Contact our team with your product and delivery specifications.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90 shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
