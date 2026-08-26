import type { Metadata } from "next";
import { PageHero, Photo, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about IGLOBALAGREECARE and our commitment to natural soil health and sustainable agriculture.",
};

export default function About() {
  return <>
    <PageHero eyebrow="About IGLOBALAGREECARE" title="Natural solutions for thriving land." copy="We help farmers, gardeners, and landowners nurture healthier soil through practical, organic agricultural solutions." />
    <section className="bg-[#f8f5ee] py-24 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Our story" title="Working with nature, not against it." />
          <p className="mt-7 text-sm leading-7 text-ink/65">IGLOBALAGREECARE provides premium Cow Dung Manure and complementary organic solutions that enhance soil health and plant vitality naturally. Our work is grounded in a simple belief: productive agriculture and environmental responsibility should grow together.</p>
          <p className="mt-4 text-sm leading-7 text-ink/65">By offering effective alternatives to chemical fertilizers, we support stronger roots, improved moisture retention, beneficial microbial activity, and more resilient cultivation.</p>
        </div>
        <Photo src="/client/img-35.jpeg" alt="Indian farmers working together in a green field" className="aspect-[4/3] rounded-3xl" />
      </div>
    </section>
    <section className="bg-forest py-24 text-white md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="eyebrow">Our commitment</p><h2 className="section-title">Purpose with<br /><em className="text-[#e9bb84]">practical impact</em></h2></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[["Mission", "Provide high-quality organic manure that strengthens soil, nourishes plants, and supports better yields."], ["Vision", "Make sustainable cultivation accessible to growers and communities through locally rooted organic solutions."], ["Responsibility", "Help reduce synthetic chemical dependence and preserve soil life, biodiversity, and natural resources."], ["Empowerment", "Give farmers, gardeners, and landowners affordable, effective tools for more resilient cultivation."]].map(([title, copy]) => <article className="rounded-2xl border border-white/10 bg-white/5 p-7" key={title}><h3 className="text-2xl font-medium text-[#e9bb84]">{title}</h3><p className="mt-3 text-sm leading-7 text-white/55">{copy}</p></article>)}
        </div>
      </div>
    </section>
  </>;
}
