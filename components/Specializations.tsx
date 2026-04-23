import Link from "next/link";

export default function Specializations() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-12 gap-8 items-end mb-12 md:mb-20">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-2xl md:text-[28px] font-black text-primary mb-4 tracking-tight">World-Class Specializations</h2>
            <p className="text-slate-500 font-medium max-w-md text-[10px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80">Our curriculum is designed by practitioners from Silicon Valley and Lagos to meet the exacting standards of modern tech stacks.</p>
          </div>
          <div className="col-span-12 lg:col-span-6 hidden sm:flex lg:justify-end">
            <div className="flex space-x-2">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-slate-200"></div>
              <div className="w-12 h-1 bg-slate-200"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Featured Track */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-primary text-white p-8 md:p-16 shadow-2xl min-h-[400px] md:min-h-[500px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 md:top-10 md:right-10 p-8 md:p-16 opacity-10">
               <span className="text-[100px] md:text-[140px] leading-none">💾</span>
            </div>
            <div className="relative z-10 max-w-lg space-y-4 md:space-y-6">
              <span className="bg-white/10 border border-white/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6 inline-block">Flagship Program</span>
              <h3 className="text-3xl md:text-[40px] font-black leading-tight tracking-tight">Data Analytics & <br className="hidden sm:block" />Predictive Intelligence</h3>
              <p className="text-sm md:text-md text-white/80 font-medium max-w-sm">Master the architecture of decision-making. From SQL foundations to advanced machine learning modeling.</p>
              <button className="bg-white text-primary w-full sm:w-auto px-8 py-3 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-white/90 transition-colors shadow-lg">Enroll Now</button>
            </div>
          </div>
          
          {/* Secondary Tracks */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all rounded-xl flex-1 group">
              <span className="text-3xl md:text-4xl text-primary mb-4 md:mb-6 block">💻</span>
              <h4 className="text-lg md:text-xl font-bold mb-2 text-slate-900 tracking-tight">Software Engineering</h4>
              <p className="text-slate-500 font-medium text-[10px] md:text-xs mb-6 uppercase tracking-wider leading-relaxed">Full-stack mastery with React, Node, and Distributed Systems.</p>
              <Link className="text-primary font-black text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform" href="#">
                View Syllabus <span>→</span>
              </Link>
            </div>
            <div className="bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all rounded-xl flex-1 group">
              <span className="text-3xl md:text-4xl text-primary mb-4 md:mb-6 block">☁️</span>
              <h4 className="text-lg md:text-xl font-bold mb-2 text-slate-900 tracking-tight">Cloud Solutions</h4>
              <p className="text-slate-500 font-medium text-[10px] md:text-xs mb-6 uppercase tracking-wider leading-relaxed">Infrastructure as code, AWS/Azure, and high-availability design.</p>
              <Link className="text-primary font-black text-[10px] uppercase tracking-[0.2em] flex items-center group-hover:translate-x-2 transition-transform" href="#">
                View Syllabus <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
