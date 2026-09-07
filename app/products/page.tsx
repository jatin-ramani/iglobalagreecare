import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { ProductsGrid } from "@/components/products-grid";

export const metadata: Metadata = { title: "All Products", description: "View the complete IGLOBALAGREECARE agricultural, food ingredient and packaging product list." };

export default function ProductsPage() {
  return <><PageHero eyebrow="Product list" title="All products in one place." copy="Browse our complete 18-product range across natural agriculture, grains, oils, food ingredients and industrial packaging."/><section className="bg-[#f8f5ee] py-20 md:py-28"><div className="container-site"><SectionHead eyebrow="Complete range" title="Select a category or explore everything." copy="Review our established range alongside the latest products available for commercial enquiries."/><div className="mt-10"><ProductsGrid/></div></div></section></>;
}
