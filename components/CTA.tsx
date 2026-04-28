import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="bg-gradient-to-br from-primary to-primary-deep rounded-[2rem] overflow-hidden relative shadow-2xl group min-h-[350px] md:min-h-[400px] flex items-center justify-center">
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

          <div className="relative z-10 px-8 py-16 md:px-12 md:py-24 text-center max-w-3xl mx-auto space-y-8 md:space-y-12">
            <h2 className="text-[clamp(26px,8vw,48px)] font-black !text-white !leading-tight tracking-tight">
              Ready to Elevate Your <br className="hidden sm:block" />Intellectual Capital?
            </h2>
            <p className="text-base md:text-lg !text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Applications for the Next Cohort are now open. Secure your place among the next generation of tech leaders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
              <a href="/schools/data" className="bg-white text-[#001844] w-full sm:w-auto px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all text-center">School of Data</a>
              <a href="/schools/programming" className="border-2 border-white text-white w-full sm:w-auto px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors text-center">School of Programming</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
