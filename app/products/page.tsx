import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { ProductCatalog } from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Products & Export Portfolio",
  description:
    "Explore IGLOBALAGREECARE's export range of Indian agricultural inputs, superfood powders, culinary oils, grains, and organic soil conditioners.",
  openGraph: {
    title: "Products & Export Portfolio | IGLOBALAGREECARE",
    description:
      "Indian agricultural inputs, superfood powders, pure oils, grains, and organic soil amendments for global commercial trade.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Portfolio"
        title="Products & Commercial Supply"
        copy="A focused range of Indian agricultural inputs, natural food ingredients, superfood powders, pure culinary oils, and organic soil vitality products."
      />
      <ProductCatalog />
    </>
  );
}
