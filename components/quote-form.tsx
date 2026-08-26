"use client";
import { FormEvent, useState } from "react";
import { products } from "@/lib/data";

export function QuoteForm({ compact = false, defaultProduct = "" }: { compact?: boolean; defaultProduct?: string }) {
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("Sending…");
    const form = event.currentTarget;
    const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    const result = await response.json(); setStatus(result.message); if (response.ok) form.reset();
  }
  const field = "mt-1.5 w-full rounded-xl border border-forest/15 bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-gold";
  return <form onSubmit={submit} className={`grid w-full gap-4 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-7 ${compact ? "max-w-3xl" : "max-w-4xl"}`}>
    <label className="text-xs font-bold text-ink/70">Name *<input name="name" required className={field} /></label>
    <label className="text-xs font-bold text-ink/70">Email *<input name="email" type="email" required className={field} /></label>
    <label className="text-xs font-bold text-ink/70">Mobile number *<input name="phone" required className={field} /></label>
    {!compact && <label className="text-xs font-bold text-ink/70">Inquiry reason<select name="reason" className={field}><option>General Inquiry</option><option>Product Quote</option><option>Bulk Order</option><option>Sample Request</option><option>Partnership</option></select></label>}
    <label className="text-xs font-bold text-ink/70 sm:col-span-2">Product of interest<select name="product" defaultValue={defaultProduct} className={field}><option value="">Select a product</option>{products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}</select></label>
    <label className="text-xs font-bold text-ink/70 sm:col-span-2">Message<textarea name="message" rows={compact ? 3 : 5} className={field} /></label>
    <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
    <div className="flex flex-wrap items-center gap-4 sm:col-span-2"><button className="rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-leaf" type="submit">Send inquiry →</button><p role="status" className="text-xs text-ink/60">{status}</p></div>
  </form>;
}
