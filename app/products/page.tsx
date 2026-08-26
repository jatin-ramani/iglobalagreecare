import type { Metadata } from "next";
import { PageHero, SectionHead } from "@/components/ui";
import { ProductsGrid } from "@/components/products-grid";
export const metadata: Metadata = { title: "Products", description: "Explore IGLOBALAGREECARE agricultural, food ingredient and packaging products." };
export default function ProductsPage() { return <><PageHero eyebrow="Our products" title="A focused range for global buyers." copy="Browse natural agricultural products, food ingredients, grains and industrial packaging sourced for commercial requirements."/><section className="bg-[#f8f5ee] py-20 md:py-28"><div className="container-site"><SectionHead eyebrow="Complete range" title="Find the right product for your requirement."/><div className="mt-10"><ProductsGrid/></div></div></section></>; }
