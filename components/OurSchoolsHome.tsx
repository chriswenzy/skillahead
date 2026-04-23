import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function OurSchoolsHome() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center mb-12 md:mb-16">
        <ScrollReveal>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Our Schools</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Choose Your Path</h2>
        </ScrollReveal>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* School of Data */}
        <ScrollReveal direction="right" delay={0.1}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 group flex flex-col justify-between hover:shadow-2xl transition-all min-h-[320px] md:h-[400px]">
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">School of Data</h3>
              <p className="text-sm md:text-slate-600 font-medium leading-relaxed max-w-sm">
                Learn how to turn raw data into insights, decisions, and business impact.
              </p>
            </div>
            <Link href="/schools/data" className="text-primary font-black text-[10px] md:text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-8 md:mt-0">
              EXPLORE DATA PROGRAMS <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
        
        {/* School of Programming */}
        <ScrollReveal direction="left" delay={0.2}>
          <div className="bg-primary-deep rounded-3xl p-8 md:p-12 shadow-2xl text-white group flex flex-col justify-between hover:shadow-[0_0_50px_rgba(0,22,61,0.3)] transition-all min-h-[320px] md:h-[400px]">
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">School of Programming</h3>
              <p className="text-sm md:text-white/80 font-medium leading-relaxed max-w-sm">
                Build applications, automate processes, and create real digital solutions.
              </p>
            </div>
            <Link href="/schools/programming" className="text-white font-black text-[10px] md:text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all mt-8 md:mt-0">
              EXPLORE PROGRAMMING PROGRAMS <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      <div className="text-center mt-12 md:mt-16 px-6">
        <ScrollReveal delay={0.3}>
          <button className="bg-slate-900 text-white w-full sm:w-auto px-12 py-5 rounded font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all">
            Explore All Programs
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
