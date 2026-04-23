import Image from "next/image";

export default function CorePrinciples() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center mb-24">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Core Principles</h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Guided by a commitment to excellence, we focus on the fundamental pillars that drive professional growth.
        </p>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-12 gap-8">
        {/* Mission Card */}
        <div className="col-span-12 lg:col-span-8 bg-primary rounded-2xl overflow-hidden relative min-h-[340px] flex items-center p-12 group">
          <div className="absolute inset-0 opacity-20 pointer-events-none grayscale group-hover:scale-105 transition-transform duration-1000">
             <Image src="/about-hero.png" alt="Mission" fill className="object-cover" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-3xl">🚀</span>
            <h3 className="text-3xl font-black text-white">Our Mission</h3>
            <p className="text-lg font-medium text-white/80 max-w-md leading-relaxed">
              To accelerate the global transition to a skills-first economy by providing industry-vetted technical education that yields measurable career outcomes.
            </p>
          </div>
        </div>
        
        {/* Vision Card */}
        <div className="col-span-12 lg:col-span-4 bg-white p-12 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center space-y-6">
          <span className="text-3xl">👁️</span>
          <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed">
            To be the global gold standard for technical mastery, recognized by top-tier firms as the premier source of elite talent.
          </p>
        </div>
        
        {/* Quality Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#6b4e1a] p-12 rounded-2xl flex flex-col justify-center space-y-6">
          <span className="text-3xl">🛡️</span>
          <h3 className="text-2xl font-black text-white">Quality First</h3>
          <p className="text-sm font-medium text-white/70 leading-relaxed">
            Every curriculum module is reviewed by our Academic Board for technical accuracy and industry relevance.
          </p>
        </div>
        
        {/* Innovation Card */}
        <div className="col-span-12 lg:col-span-8 bg-white p-12 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900">Innovation Lab</h3>
            <p className="text-sm font-medium text-slate-500 max-w-sm leading-relaxed">
              We don't just teach existing tech; we research and integrate emerging trends like AI, Quantum computing, and Blockchain into our masterclasses.
            </p>
          </div>
          <div className="relative w-40 h-28 rounded-lg overflow-hidden shrink-0 hidden md:block">
             <Image src="/home-hero.png" alt="Innovation" fill className="object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
