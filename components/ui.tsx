import Image from "next/image";

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="grid-texture bg-forest pb-16 pt-32 text-white md:pb-28 md:pt-44">
      <div className="container-site">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title max-w-3xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/60">{copy}</p>}</div>;
}

export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`relative overflow-hidden ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>;
}

