import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Footer, Header, WhatsApp } from "@/components/site-shell";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const editorial = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.iglobalagreecare.com"),
  title: { default: "IGLOBALAGREECARE | Indian Agricultural Exports", template: "%s | IGLOBALAGREECARE" },
  description: "Responsible Indian sourcing and commercial support for domestic and global buyers.",
  icons: {
    icon: "/logo/logo.ico",
    shortcut: "/logo/logo.ico",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "IGLOBALAGREECARE",
    description: "Responsible sourcing prepared for global trade.",
    type: "website",
    images: ["/logo/logo.png"],
  },
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
