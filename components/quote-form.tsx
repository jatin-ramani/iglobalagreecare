"use client";
import { FormEvent, useState } from "react";
import { products } from "@/lib/products";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("Sending…");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      setStatus(result.message || "Message sent successfully.");
      if (response.ok) {
        form.reset();
        setPhone("");
      }
    } catch {
      setStatus("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-forest/15 bg-[#fdfcf9] px-4 py-3 text-sm outline-none transition focus:border-gold";

  return (
    <form
      onSubmit={submit}
      className={`grid w-full gap-4 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8 ${
        compact ? "max-w-3xl" : "max-w-4xl"
      }`}
    >
      <div className="sm:col-span-2">
        <h2 className="font-display text-2xl font-medium text-leaf">
          Request a Quote
        </h2>
        <p className="mt-1 text-xs text-ink/60">
          Share your product requirements and our team will revert promptly.
        </p>
      </div>

      <label className="text-xs font-semibold text-ink/70">
        Name *
        <input name="name" required className={field} placeholder="Your name" />
      </label>

      <label className="text-xs font-semibold text-ink/70">
        Email *
        <input name="email" type="email" required className={field} placeholder="Your email" />
      </label>

      <label className="text-xs font-semibold text-ink/70">
        Phone / WhatsApp *
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          required
          className={field}
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => {
            // Allow only digits, +, -, space, and parentheses
            const sanitized = e.target.value.replace(/[^0-9+\s\-()]/g, "");
            setPhone(sanitized);
          }}
        />
      </label>

      <label className="text-xs font-semibold text-ink/70">
        Product
        <select name="product" className={field} defaultValue="General Inquiry">
          <option value="General Inquiry">General Inquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>
      </label>

      <label className="text-xs font-semibold text-ink/70 sm:col-span-2">
        Message *
        <textarea
          name="message"
          required
          rows={compact ? 3 : 4}
          className={field}
          placeholder="Required volume, destination port, specifications..."
        />
      </label>

      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:col-span-2 pt-2">
        <button
          disabled={loading}
          className="w-full sm:w-auto text-center rounded-full bg-forest px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-forest/90 disabled:opacity-50"
          type="submit"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
        {status && (
          <p role="status" className="text-xs font-medium text-leaf">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
