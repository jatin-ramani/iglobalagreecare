import Link from "next/link";
import Image from "next/image";
import { FAQAccordion, HeroCarousel, Testimonials } from "@/components/home-interactive";
import { Photo, SectionHead } from "@/components/ui";
import { QuoteForm } from "@/components/quote-form";
import { certificatesList } from "@/lib/data";
import { products } from "@/lib/products";
import {
  SproutIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  LightningIcon,
  ShipIcon,
  CheckIcon,
  LeafIcon,
} from "@/components/icons";

export default function Home() {
  const featuredProducts = [
    products.find((p) => p.slug === "moringa-leaf-powder")!,
    products.find((p) => p.slug === "cow-dung-manure")!,
    products.find((p) => p.slug === "yellow-corn-maize")!,
    products.find((p) => p.slug === "peanut-oil-groundnut-oil")!,
    products.find((p) => p.slug === "dry-oyster-mushroom")!,
    products.find((p) => p.slug === "pp-pet-strapping-rolls")!,
  ].filter(Boolean);

  const corePillars = [
    {
      badge: "Organic Soil Vitality",
      title: "Biological Soil Health",
      desc: "Regenerative soil practices utilizing organic cattle biomass and premium vermicompost for chemical-free soil fertility.",
      icon: SproutIcon,
    },
    {
      badge: "Direct Origin",
      title: "Cluster Traceability",
      desc: "Direct procurement from verified farming communities and processing facilities across Saurashtra and Gujarat.",
      icon: MapPinIcon,
    },
    {
      badge: "Standardized Checkpoints",
      title: "Stringent Quality Control",
      desc: "Standard grading, moisture validation, purity screening, and accredited NABL/SGS lab test reports.",
      icon: ShieldCheckIcon,
    },
    {
      badge: "Global Compliance",
      title: "Export Documentation",
      desc: "Complete APEDA registration, Phytosanitary inspection, Certificate of Origin, and container customs clearance.",
      icon: ClipboardCheckIcon,
    },
  ];

  const exportProcess = [
    { step: "01", title: "Requirement & Specs", desc: "Grade, volume, packaging specifications, and destination port parameters." },
    { step: "02", title: "Origin Sourcing", desc: "Direct lot selection from verified agricultural clusters in Gujarat & India." },
    { step: "03", title: "Lab Testing & COA", desc: "Batch test reports confirming moisture, purity, and quarantine compliance." },
    { step: "04", title: "Export Packing", desc: "Moisture-barrier bags, food-grade liners, HDPE drums, or bulk PP bags." },
    { step: "05", title: "Port Dispatch", desc: "Container stuffing with photographic proof, fumigation, and customs handover." },
  ];

  return (
    <>
      {/* 100% Screen Height Hero Carousel */}
      <HeroCarousel />

      {/* Global Trade Assurance Strip */}
      <section className="border-y border-gold/20 bg-[#f1eadc]">
        <div className="container-site grid grid-cols-2 gap-3 py-4 sm:grid-cols-4 sm:py-5 text-center text-[10px] sm:text-xs font-bold uppercase tracking-[.1em] text-leaf">
          <span className="inline-flex items-center justify-center gap-1.5">
            <LightningIcon className="h-4 w-4 text-gold shrink-0" />
            <span>24-Hour RFQ Response</span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <SproutIcon className="h-4 w-4 text-leaf shrink-0" />
            <span>100% Traceable Origin</span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <ShieldCheckIcon className="h-4 w-4 text-leaf shrink-0" />
            <span>Certified Lab Testing</span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <ShipIcon className="h-4 w-4 text-gold shrink-0" />
            <span>Global FOB & CIF Shipping</span>
          </span>
        </div>
      </section>

      {/* About & Strategic Pillars Preview */}
      <section className="bg-[#f8f5ee] py-16 md:py-28">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHead
                eyebrow="About IGLOBALAGREECARE"
                title="Indian agricultural abundance. Global supply excellence."
              />
              <p className="mt-6 text-sm leading-7 text-ink/70">
                IGLOBALAGREECARE connects commercial importers, wholesalers, and food manufacturers with a curated portfolio of Indian agricultural inputs, superfood powders, pure edible oils, grains, and industrial packaging solutions.
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                We bridge international demand with dedicated farming clusters across Saurashtra and Gujarat, combining responsive trade coordination with disciplined batch testing and complete export documentation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-forest/20 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-leaf shadow-xs transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  Browse Catalogue ({products.length})
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-white p-3 shadow-lg">
                <Photo
                  src="/client/india-farm-community-v1.jpg"
                  alt="Indian agricultural sourcing community and farmland"
                  className="aspect-[4/3] rounded-2xl"
                />
                <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f8f5ee] px-4 py-3 text-xs">
                  <span className="font-bold text-forest">Saurashtra & Gujarat Farms</span>
                  <span className="rounded-full bg-leaf/10 px-2.5 py-0.5 font-bold uppercase text-[10px] text-leaf">
                    Verified Origin
                  </span>
                </div>
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
                  className="group rounded-3xl border border-forest/10 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-forest/5 text-forest group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <p className="eyebrow mt-4 text-[0.6rem]">{pillar.badge}</p>
                  <h3 className="mt-2 font-display text-xl font-medium text-leaf group-hover:text-forest">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-ink/65">{pillar.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Export Products */}
      <section className="bg-[#f1ece2] py-16 md:py-28">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHead
              eyebrow="Export Catalogue"
              title="Featured Indian Export Products."
              copy="Carefully sourced agricultural inputs, superfood powders, pure culinary oils, grains, and industrial packaging solutions."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-forest transition-colors self-start md:self-end shrink-0"
            >
              <span>View all products ({products.length})</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f5ee]"
                  aria-label={`View details for ${product.title}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-forest/85 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                    {product.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="eyebrow text-[0.6rem]">{product.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-leaf group-hover:text-forest">
                      <Link href={`/products/${product.slug}`}>{product.title}</Link>
                    </h3>
                    <p className="mt-3 line-clamp-2 text-xs leading-6 text-ink/65">
                      {product.listDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-forest/8 flex items-center justify-between">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition-colors duration-200 group-hover:text-forest"
                    >
                      <span>View details</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                    <span className="text-[11px] font-semibold text-ink/40">India Origin</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full bg-forest px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90 hover:scale-105"
            >
              Explore Complete Export Catalogue ({products.length} Products)
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainable & Organic Agriculture with Gir Cattle */}
      <section className="bg-white py-16 md:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead
              eyebrow="Sustainable & Organic Agriculture"
              title="Rooted in nature. Committed to biological soil vitality."
              copy="At IGLOBALAGREECARE, our agricultural portfolio is founded on sustainable, regenerative farming principles. Native Gir cattle and natural biomass play a vital biological role in organic soil management—enriching micro-flora, revitalizing soil fertility, and eliminating dependence on synthetic chemicals."
            />
            <p className="mt-4 text-sm leading-7 text-ink/65">
              From premium organic vermicompost and biological soil conditioners to ethically sourced natural agricultural produce, we partner with verified farming clusters and dedicated agricultural facilities across Gujarat and India.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold"></span>
                  <p className="eyebrow text-[0.6rem]">Natural Soil Enrichment</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-ink/65">
                  Organic cattle biomass and premium vermicompost to naturally restore soil organic carbon.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-leaf"></span>
                  <p className="eyebrow text-[0.6rem]">100% Chemical-Free</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-ink/65">
                  Pure sourcing free from synthetic fertilizers, artificial additives, pesticides, or residues.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-leaf"></span>
                  <p className="eyebrow text-[0.6rem]">Direct Farm Traceability</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-ink/65">
                  Transparent origin documentation connected to verified Saurashtra organic cultivation clusters.
                </p>
              </div>

              <div className="rounded-2xl border border-forest/10 bg-[#f8f5ee] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold"></span>
                  <p className="eyebrow text-[0.6rem]">Export Quality Compliance</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-ink/65">
                  Standardized grading, moisture-controlled export packing, and phytosanitary clearance.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-opacity hover:opacity-90"
              >
                Discuss your requirement
              </Link>
              <Link
                href="/certificates"
                className="inline-block text-xs font-bold uppercase tracking-wider text-gold hover:text-forest transition-colors"
              >
                Quality & certifications →
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-forest/10 bg-[#f8f5ee] p-3 shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white sm:aspect-[16/11]">
                <Photo
                  src="/client/gir-cow.png"
                  alt="Native Gir cattle representing sustainable organic agriculture and natural soil fertility at IGLOBALAGREECARE"
                  className="h-full w-full"
                />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-forest/85 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <LeafIcon className="h-3 w-3 text-gold" />
                  <span>Native Gir Cattle Lineage</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-5 py-4 border border-forest/5">
                <div>
                  <p className="text-xs font-bold text-forest">Natural Soil Conditioning & Bio-Inputs</p>
                  <p className="text-[0.72rem] text-ink/55">Sustainable agricultural practices & certified supply chain</p>
                </div>
                <span className="rounded-full bg-[#f1eadc] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-leaf">
                  Verified Origin
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Export Workflow */}
      <section className="bg-forest py-16 text-white md:py-28">
        <div className="container-site">
          <p className="eyebrow text-gold">Structured Methodology</p>
          <h2 className="section-title text-white">Our Export & Sourcing Workflow.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
            A reliable 5-stage process from buyer specification through container stuffing and international customs handover.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {exportProcess.map((item) => (
              <article
                key={item.step}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all duration-300 hover:border-gold/50 hover:bg-white/10"
              >
                <div>
                  <b className="font-display text-3xl text-[#e9bb84]">{item.step}</b>
                  <h3 className="mt-4 font-display text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/65">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Official Accreditations / Certificates Strip */}
      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionHead
              eyebrow="Certified Quality"
              title="Official Accreditations & Standards."
              copy="Compliance documents vary by product and destination. We confirm applicable certificates and shipment records during quotation."
            />
            <Link
              href="/certificates"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-forest transition-colors shrink-0"
            >
              <span>View all certifications</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certificatesList.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-3xl border border-forest/10 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
              >
                <div className="relative flex aspect-square h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-[#f8f5ee] p-2 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <h3 className="mt-3 font-display text-base font-medium text-leaf group-hover:text-forest">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="bg-[#f1ece2] py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHead
            eyebrow="Common questions"
            title="Clear answers before you order."
            copy="Frequently asked questions on minimum volumes, payment terms, quality testing, and container logistics."
          />
          <FAQAccordion />
        </div>
      </section>

      {/* Get a Quote / RFQ Form Section */}
      <section className="bg-forest py-16 text-white md:py-24">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-gold">Direct RFQ</p>
            <h2 className="section-title text-white">
              Tell us what<br />
              <em className="text-[#e9bb84]">you need.</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/70">
              Share your target product, estimated volume, and destination port. Our international trade team will respond within 24 hours with proforma pricing, packing options, and technical specifications.
            </p>
            <div className="mt-8 space-y-3 text-xs text-white/75">
              <p className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gold shrink-0" />
                <span>Proforma quotation per FOB / CIF terms</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gold shrink-0" />
                <span>Batch Certificate of Analysis (COA) included</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-gold shrink-0" />
                <span>Sample dispatch available on request</span>
              </p>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      {/* Client Testimonials & Global Reach */}
      <section className="bg-[#f8f5ee] py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Client perspective" title="Built around responsive trade." />
            <div className="mt-8">
              <Testimonials />
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Global reach" title="Prepared for international enquiries." />
            <div className="mt-8 rounded-3xl bg-white p-6 sm:p-8 border border-forest/10 shadow-xs">
              <b className="font-display text-4xl sm:text-5xl text-leaf">Global Sourcing</b>
              <p className="mt-3 text-sm text-ink/65">
                Supplying agricultural buyers, food manufacturers, and repackers across Asia, the Middle East, Africa, Europe, and the Americas.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Middle East & GCC", "Southeast Asia", "European Union", "North America", "Africa"].map((market) => (
                  <span key={market} className="rounded-full bg-[#f8f5ee] px-4 py-2 text-xs font-medium text-forest border border-forest/10">
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bulk CTA */}
      <section className="bg-gold py-12 sm:py-14 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium font-display leading-tight">
              Looking to import in bulk? Let&apos;s talk.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-white/85">
              Get in touch with our commercial team for customized container load planning and competitive trade pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90 shrink-0"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </>
  );
}
