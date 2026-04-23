import LocationsList from "@/components/LocationsList";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";

export default function Locations() {
  return (
    <main className="bg-white pt-24">
      <div className="bg-slate-50 py-16 md:py-32 border-b border-slate-100">
        <ScrollReveal className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 md:mb-8">Global Footprint</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            From Silicon Valley to Lagos, we are building a distributed network of technical mastery.
          </p>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.2}>
        <LocationsList />
      </ScrollReveal>
      <CTA />
    </main>
  );
}
