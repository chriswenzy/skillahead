import Link from "next/link";

export default function OurSchoolsHome() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center mb-16">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Our Schools</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Choose Your Path</h2>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* School of Data */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 group flex flex-col justify-between hover:shadow-2xl transition-all h-[400px]">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">School of Data</h3>
            <p className="text-slate-600 font-medium leading-relaxed max-w-sm">
              Learn how to turn raw data into insights, decisions, and business impact.
            </p>
          </div>
          <Link href="/schools/data" className="text-primary font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
            EXPLORE DATA PROGRAMS <span>→</span>
          </Link>
        </div>
        
        {/* School of Programming */}
        <div className="bg-primary rounded-3xl p-12 shadow-2xl text-white group flex flex-col justify-between hover:shadow-[0_0_50px_rgba(0,62,179,0.3)] transition-all h-[400px]">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">💻</div>
            <h3 className="text-3xl font-black tracking-tight">School of Programming</h3>
            <p className="text-white/80 font-medium leading-relaxed max-w-sm">
              Build applications, automate processes, and create real digital solutions.
            </p>
          </div>
          <Link href="/schools/programming" className="text-white font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
            EXPLORE PROGRAMMING PROGRAMS <span>→</span>
          </Link>
        </div>
      </div>
      
      <div className="text-center mt-16">
        <button className="bg-slate-900 text-white px-12 py-5 rounded font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all">
          Explore All Programs
        </button>
      </div>
    </section>
  );
}
