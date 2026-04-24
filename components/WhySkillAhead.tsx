import ScrollReveal from "./ScrollReveal";

export default function WhySkillAhead() {
  const items = [
    "Real-world problem solving",
    "Practical, hands-on learning",
    "Business and career relevance",
    "Mentorship and accountability"
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-16 items-center">
          <div className="w-full lg:col-span-6 space-y-6 md:space-y-8">
            <ScrollReveal direction="right">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Skillahead Difference</span>
              <h2 className="text-[clamp(26px,8vw,48px)] font-black text-slate-900 leading-tight tracking-tight mt-4 md:mt-6">
                Not Just Learning. <br className="hidden sm:block" />
                <span className="text-primary italic">Real Transformation.</span>
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl break-words whitespace-normal">
                   Most people learn tools. Few learn how to use them to solve real problems. 
                   At SkillAhead, we focus on what actually matters:
                </p>
              </ScrollReveal>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                {items.map((item, i) => (
                  <ScrollReveal key={i} direction="right" delay={0.2 + (i * 0.1)}>
                    <li className="flex items-center gap-4 text-slate-900 font-bold text-sm">
                      <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs shrink-0">✓</span>
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <ScrollReveal direction="right" delay={0.6}>
                <p className="text-base md:text-lg text-primary font-black italic pt-4">
                   You don't just learn—you become valuable.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="w-full lg:col-span-6 relative mt-12 lg:mt-0">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="aspect-square bg-slate-50 rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-slate-100 shadow-inner">
                 <div className="absolute inset-0 opacity-10" style={{ 
                   backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px)',
                   backgroundSize: '30px 30px'
                 }}></div>
                 <div className="relative z-10 p-8 md:p-12 text-center space-y-6 md:space-y-8">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-3xl md:text-4xl mx-auto border border-slate-50">💡</div>
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">Bridge the Gap between <br/> Theory and Impact</h4>
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
