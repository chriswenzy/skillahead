import ScrollReveal from "./ScrollReveal";

export default function WhySkillAhead() {
  const items = [
    "Real-world problem solving",
    "Practical, hands-on learning",
    "Business and career relevance",
    "Mentorship and accountability"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <ScrollReveal direction="right">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Skillahead Difference</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mt-6">
                Not Just Learning. <br />
                <span className="text-primary italic">Real Transformation.</span>
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                   Most people learn tools. Few learn how to use them to solve real problems. 
                   At SkillAhead, we focus on what actually matters:
                </p>
              </ScrollReveal>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {items.map((item, i) => (
                  <ScrollReveal key={i} direction="right" delay={0.2 + (i * 0.1)}>
                    <li className="flex items-center gap-4 text-slate-900 font-bold text-sm">
                      <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs">✓</span>
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <ScrollReveal direction="right" delay={0.6}>
                <p className="text-lg text-primary font-black italic pt-4">
                  You don't just learn—you become valuable.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 relative">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="aspect-square bg-slate-50 rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-100 shadow-inner">
                 <div className="absolute inset-0 opacity-10" style={{ 
                   backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px)',
                   backgroundSize: '30px 30px'
                 }}></div>
                 <div className="relative z-10 p-12 text-center space-y-8">
                    <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-4xl mx-auto border border-slate-50">💡</div>
                    <h4 className="text-2xl font-black text-slate-900 leading-snug">Bridge the Gap between <br/> Theory and Impact</h4>
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
