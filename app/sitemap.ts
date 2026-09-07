import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.iglobalagreecare.com";
  const staticRoutes = ["", "/products", "/about", "/certificates", "/contact", "/privacy-policy", "/terms-conditions"];
  
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 || path === "/products" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/products" ? 0.9 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticEntries, ...productEntries];
}
