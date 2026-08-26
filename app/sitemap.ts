import type { MetadataRoute } from "next";
import { products } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.iglobalagreecare.com"; const routes = ["", "/about", "/products", "/certificates", "/contact", "/privacy-policy", "/terms-conditions", ...products.map((product) => `/products/${product.slug}`)]; return routes.map((path, index) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : .8 })); }
