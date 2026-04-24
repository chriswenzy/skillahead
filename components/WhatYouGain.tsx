export default function WhatYouGain() {
  return (
    <section className="py-16 md:py-24 bg-primary-deep text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center mb-12 md:mb-20 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[100px] pointer-events-none"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-4 block">Outcomes</span>
        <h2 className="text-[clamp(26px,8vw,48px)] font-black tracking-tight">What You Gain</h2>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          { 
            title: "Real-world projects", 
            desc: "Work on actual case studies that solve business problems.",
            icon: "📂"
          },
          { 
            title: "Job-ready skills", 
            desc: "Technical and business skills vetted by industry professionals.",
            icon: "🛠️"
          },
          { 
            title: "Proven Portfolio", 
            desc: "Build a portfolio that proves your ability to employers.",
            icon: "🏅"
          },
          { 
            title: "Career Support", 
            desc: "Access to opportunities and dedicated job search mentorship.",
            icon: "🤝"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-all group">
            <div className="space-y-4 md:space-y-6">
              <span className="text-3xl md:text-4xl group-hover:scale-110 inline-block transition-transform">{item.icon}</span>
              <h4 className="text-lg md:text-xl font-black tracking-tight">{item.title}</h4>
              <p className="text-white/60 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
