import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="bg-gradient-to-br from-primary to-primary-deep rounded-[2rem] overflow-hidden relative shadow-2xl group min-h-[400px] flex items-center justify-center">
          {/* Subtle background image */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
            <Image
              src="/about-hero.png"
              alt="Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary/20"></div>

          <div className="relative z-10 px-12 py-24 text-center max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-black !text-white !leading-tight tracking-tight">
              Ready to Elevate Your <br />Intellectual Capital?
            </h2>
            <p className="text-lg !text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Applications for the Autumn Fellowship are now open. Secure your place among the next generation of tech leaders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button className="bg-white text-[#001844] px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all">Start Application</button>
              <button className="border-2 border-white text-white px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
