import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="IGLOBALAGREECARE home"
      className={`inline-flex items-center gap-2.5 ${light ? "text-white" : "text-forest"}`}
    >
      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f7f5ef] shadow-sm ring-1 ring-black/5">
        <Image
          src="/client/iglobalagreecare-emblem.png"
          alt="IGLOBALAGREECARE emblem"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      <span className="leading-none">
        <b className="block font-display text-[17px] font-semibold tracking-[-.02em] md:text-xl">
          IGLOBAL<span className="text-gold">AGREECARE</span>
        </b>
        <small className={`mt-1 block text-[6px] font-bold uppercase tracking-[.22em] ${light ? "text-white/55" : "text-ink/40"}`}>
          Organic agriculture solutions
        </small>
      </span>
    </Link>
  );
}
