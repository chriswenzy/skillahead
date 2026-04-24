export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:grid lg:grid-cols-12 gap-y-10 lg:gap-16 items-center">
        <div className="w-full lg:col-span-6 order-2 lg:order-1 mt-8 lg:mt-0">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Career Switchers", icon: "🚀", bg: "bg-blue-50" },
                { title: "Students & Grads", icon: "🎓", bg: "bg-slate-50" },
                { title: "Working Pros", icon: "💼", bg: "bg-slate-100" },
                { title: "Business Owners", icon: "📈", bg: "bg-blue-100" }
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-8 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-1 transition-transform cursor-default border border-black/5`}>
                   <span className="text-3xl">{item.icon}</span>
                   <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">{item.title}</span>
                </div>
              ))}
           </div>
        </div>
        
        <div className="w-full lg:col-span-6 order-1 lg:order-2 space-y-6 md:space-y-8">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Audience</span>
           <h2 className="text-[clamp(28px,8vw,56px)] font-black text-slate-900 leading-tight tracking-tight">Who This Is For</h2>
           <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl break-words whitespace-normal">
             SkillAhead is designed for individuals who are serious about their career progression and ready to master high-impact skills.
           </p>
           <ul className="space-y-4">
             {[
               "Career switchers entering tech",
               "Students & recent graduates",
               "Working professionals upgrading skills",
               "Business owners who want to use data"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                 <span className="text-primary text-xl shrink-0">✓</span>
                 <span className="text-sm md:text-base leading-tight">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </section>
  );
}
