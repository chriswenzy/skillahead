import CTA from "@/components/CTA";

const opportunities = [
  { title: "Sponsor a Student", desc: "Support someone's journey into tech and impact their future.", icon: "🌟" },
  { title: "Donate", desc: "Help expand access to quality tech education.", icon: "🎁" },
  { title: "Host a Community", desc: "Partner with us to run training, workshops, or tech events.", icon: "🏠" },
  { title: "Hire Talent", desc: "Access our pool of trained and vetted learners.", icon: "🤝" },
  { title: "Integrate Training", desc: "Bring SkillAhead programs into your institution or organization.", icon: "🔗" }
];

import ScrollReveal from "@/components/ScrollReveal";

export default function Partnership() {
  return (
    <main className="bg-white">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-primary-deep text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center space-y-6 md:space-y-8 relative z-10">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">🤝 Partnership</span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-none mt-6">
              Let's Build the <br className="hidden sm:block" />
              <span className="text-blue-400 italic">Future Together.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
              Collaborate with SkillAhead to bridge the technical divide and create measurable social impact.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {opportunities.map((opt, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group h-full">
                  <div className="space-y-4 md:space-y-6">
                    <div className="text-3xl md:text-4xl group-hover:scale-110 inline-block transition-transform">{opt.icon}</div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{opt.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </main>
  );
}
