import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Footer, Header, WhatsApp } from "@/components/site-shell";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const editorial = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.iglobalagreecare.com"),
  title: { default: "IGLOBALAGREECARE | Organic Cow Dung Manure", template: "%s | IGLOBALAGREECARE" },
  description: "Natural cow dung manure and sustainable soil-enrichment solutions for farms, gardens, and landscapes.",
  openGraph: { title: "IGLOBALAGREECARE", description: "Natural solutions for healthier soil and thriving plants.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${editorial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header /><main className="flex-1">{children}</main><Footer /><WhatsApp /></body>
    </html>
  );
}
