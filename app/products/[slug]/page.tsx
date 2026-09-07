import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { CheckIcon } from "@/components/icons";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | IGLOBALAGREECARE",
    };
  }

  return {
    title: `${product.title} | Indian Export Supply`,
    description: product.listDescription,
    openGraph: {
      title: `${product.title} | IGLOBALAGREECARE`,
      description: product.listDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const mailtoUrl = `mailto:iglobalagreecare2040@gmail.com?subject=Enquiry: ${encodeURIComponent(
    product.title
  )}&body=Dear IGLOBALAGREECARE Team,%0D%0A%0D%0AI am interested in procuring ${encodeURIComponent(
    product.title
  )}.%0D%0A%0D%0ARequirement Details:%0D%0A- Approximate Volume:%0D%0A- Delivery Destination / Port:%0D%0A- Preferred Packaging:%0D%0A- Target Timeline:%0D%0A%0D%0ACompany / Contact Information:%0D%0A- Name:%0D%0A- Company:%0D%0A- Phone / WhatsApp:%0D%0A- Country:%0D%0A`;

  return (
    <div className="bg-[#f8f5ee] pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-site">
        {/* Top Back Navigation & Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-forest shadow-xs transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-md"
          >
            <span>←</span>
            <span>Back to all products</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-2 text-xs text-ink/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-forest transition-colors">Products</Link>
            <span>/</span>
            <span className="text-leaf font-semibold truncate max-w-[200px]">{product.title}</span>
          </nav>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: 4:3 Hero Image Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <span className="absolute top-4 left-4 rounded-full bg-forest/85 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                {product.category}
              </span>
            </div>

            {/* Sourcing Origin Badge */}
            <div className="flex items-center justify-between rounded-2xl border border-forest/8 bg-white px-5 py-3.5 shadow-xs text-xs">
              <span className="font-bold text-forest">Origin: Gujarat, India</span>
              <span className="font-medium text-ink/60">Export Grade</span>
            </div>

            {/* Quick Export Highlights */}
            <div className="rounded-2xl border border-forest/8 bg-white p-5 shadow-xs space-y-2.5 text-xs text-ink/75">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-leaf shrink-0" />
                <span>100% Quality Inspected Batch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-leaf shrink-0" />
                <span>Moisture-Barrier Export Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-leaf shrink-0" />
                <span>COA & Phytosanitary Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Specifications */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header / Title */}
            <div>
              <p className="eyebrow text-[0.65rem]">{product.category}</p>
              <h1 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-medium font-display tracking-tight text-leaf">
                {product.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/80 font-medium border-l-2 border-gold pl-4 bg-white/50 py-2 rounded-r-xl">
                {product.listDescription}
              </p>
            </div>

            {/* Product Overview */}
            <div className="rounded-3xl border border-forest/10 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-base font-bold uppercase tracking-wider text-forest">
                Product Overview
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
                {product.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="rounded-3xl border border-forest/10 bg-white p-5 sm:p-8 shadow-xs overflow-hidden">
              <h2 className="text-base font-bold uppercase tracking-wider text-forest">
                Technical Specifications
              </h2>
              <div className="mt-5 overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead>
                    <tr className="border-b border-forest/15 bg-[#f1ece2]/60">
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-forest">
                        Attribute
                      </th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-forest">
                        Specification
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest/8 text-xs sm:text-sm">
                    {product.specifications.map(([attribute, detail], idx) => (
                      <tr
                        key={attribute}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f5ee]/40"}
                      >
                        <td className="py-3 px-4 font-semibold text-leaf whitespace-nowrap align-top">
                          {attribute}
                        </td>
                        <td className="py-3 px-4 text-ink/75 leading-6 align-top">
                          {detail.startsWith("[CONFIRM") ? (
                            <span className="inline-block rounded-sm bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-medium text-amber-800 border border-amber-200/80 break-all">
                              {detail}
                            </span>
                          ) : (
                            detail
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Applications & Uses */}
            <div className="rounded-3xl border border-forest/10 bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-base font-bold uppercase tracking-wider text-forest">
                Applications & Commercial Uses
              </h2>
              <ul className="mt-4 space-y-2.5">
                {product.applications.map((application, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-6 text-ink/75">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Commercial Sourcing CTA */}
            <div className="rounded-3xl bg-forest p-6 sm:p-9 text-white shadow-xl">
              <p className="eyebrow text-gold text-[0.65rem]">Commercial Trade</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-medium font-display text-white">
                Inquire for Export Supply
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-6 text-white/75">
                Share your estimated volume, target delivery port (FOB/CIF), and custom packaging specifications. Our commercial team will revert promptly with competitive quotation and certificates.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <a
                  href={mailtoUrl}
                  className="inline-block w-full sm:w-auto text-center rounded-full bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-gold/90"
                >
                  Enquire via Email
                </a>
                <Link
                  href="/contact"
                  className="inline-block w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs transition-colors hover:bg-white hover:text-forest"
                >
                  Online Inquiry Form
                </Link>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-gold" />
                  <span>Direct export inquiry</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-gold" />
                  <span>Batch test reports on request</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-gold" />
                  <span>Custom packing available</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
