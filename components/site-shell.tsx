"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { contact } from "@/lib/data";

const nav = [
  ["Home", "/"],
  ["Products", "/products"],
  ["About", "/about"],
  ["Certificates", "/certificates"],
  ["Contact", "/contact"],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  // Only homepage has a full-screen dark hero image where transparent navbar is used
  const isHomepage = pathname === "/";

  useEffect(() => {
    const update = () => setOverHero(window.scrollY < 80);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Transparent navbar ONLY on Homepage when over hero and not open
  const clear = isHomepage && overHero && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        clear
          ? "bg-transparent text-white"
          : "border-b border-forest/10 bg-[#f8f5ee]/95 text-ink shadow-xs backdrop-blur-xl"
      }`}
    >
      <div className="container-site flex h-[68px] sm:h-[72px] items-center justify-between md:h-[78px]">
        <Logo light={clear} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map(([name, href]) => (
            <Link
              className={`text-sm font-semibold tracking-wide transition hover:text-gold ${
                clear ? "text-white/90" : "text-ink/75"
              }`}
              href={href}
              key={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] sm:block ${
              clear ? "bg-white text-forest hover:bg-white/90" : "bg-forest text-white hover:bg-forest/90"
            } transition-colors`}
          >
            Get in touch
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`grid h-10 w-10 place-items-center rounded-full border text-lg lg:hidden transition-colors ${
              clear ? "border-white/35 text-white bg-black/20" : "border-forest/15 text-ink bg-white/50"
            }`}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-[#f8f5ee] px-5 py-6 text-ink shadow-xl lg:hidden max-h-[calc(100vh-68px)] overflow-y-auto">
          <nav className="space-y-1">
            {nav.map(([name, href]) => (
              <Link
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold transition hover:bg-forest/5"
                href={href}
                key={href}
              >
                <span>{name}</span>
                <span className="text-gold">→</span>
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-5 border-t border-forest/10">
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="block w-full text-center rounded-full bg-forest px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
            >
              Request a Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d2516] text-white">
      <div className="container-site grid gap-10 py-14 sm:py-16 md:grid-cols-3 lg:gap-14">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-xs leading-6 text-white/55">
            Responsible Indian sourcing and clear commercial support for domestic and international buyers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#e5b881]">Quick Links</h3>
          <div className="mt-4 grid gap-2.5 text-xs text-white/50">
            <Link href="/products" className="hover:text-white transition-colors">Export Products</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Company</Link>
            <Link href="/certificates" className="hover:text-white transition-colors">Certificates & Quality</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact & Enquiries</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#e5b881]">Reach us</h3>
          <div className="mt-4 space-y-3 text-xs leading-6 text-white/50">
            <p>{contact.address}</p>
            <a className="block hover:text-white transition-colors" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
            <a className="block hover:text-white transition-colors break-all" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-site flex flex-col gap-2.5 py-5 text-[10px] uppercase tracking-[.14em] text-white/35 sm:flex-row sm:justify-between">
          <span>© 2026 IGLOBALAGREECARE. All rights reserved.</span>
          <span>Quality sourcing · Responsible trade · Reliable delivery</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsApp() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <svg
        className="h-6 w-6 sm:h-7 sm:w-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.783-.88-2.06-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.955 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.68-1.637-.93-2.242-.244-.589-.492-.51-.68-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.055 1.03-1.055 2.515 1.08 2.917 1.231 3.118c.15.201 2.125 3.245 5.148 4.552.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.086 1.783-.728 2.034-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.94.55 3.75 1.51 5.28L2 22l4.83-1.49c1.47.88 3.19 1.39 5.03 1.39 5.53 0 10.02-4.49 10.02-10.02C21.88 6.49 17.57 2 12.04 2zm0 18.35c-1.64 0-3.17-.49-4.46-1.33l-.32-.21-3.3.87.88-3.21-.23-.36c-.95-1.37-1.46-3.02-1.46-4.73 0-4.6 3.74-8.34 8.35-8.34 4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34z"/>
      </svg>
    </a>
  );
}
