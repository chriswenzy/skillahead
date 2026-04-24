export default function FellowshipOutcomes() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-black text-primary mb-12 md:mb-24 text-center tracking-tight uppercase tracking-[0.2em]">Fellowship Outcomes</h2>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Testimonial */}
          <div className="col-span-12 lg:col-span-7 bg-[#f8fafc] p-8 md:p-16 rounded-[2rem] relative border border-slate-100 shadow-sm group">
            <span className="text-7xl font-black text-primary/10 absolute top-8 right-8 pointer-events-none group-hover:scale-110 transition-transform">“</span>
            <p className="text-xl md:text-2xl font-bold leading-snug mb-10 text-slate-800 tracking-tight">
              "The rigor of the Skillahead curriculum exceeded my expectations. It wasn't just about learning to code; it was about learning to think like an engineer at a global scale."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-primary/20 shadow-xl group-hover:rotate-6 transition-transform">
                 <div className="w-full h-full flex items-center justify-center text-2xl">👩‍💻</div>
              </div>
              <div>
                <h5 className="font-black text-lg text-primary">Chinelo Okoro</h5>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Senior Cloud Architect at Microsoft</p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 bg-primary/10 p-10 rounded-2xl flex flex-col justify-between border border-primary/5 hover:-translate-y-1 transition-transform">
              <p className="text-5xl font-black text-primary tracking-tighter opacity-30">45%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-4">Average Salary Increase <br/>Post-Graduation</p>
            </div>
            <div className="flex-1 bg-slate-100 p-10 rounded-2xl flex flex-col justify-between border border-slate-200/50 hover:-translate-y-1 transition-transform">
              <p className="text-5xl font-black text-slate-900 tracking-tighter opacity-10">200+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mt-4">Global Corporate <br/>Partner Networks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
