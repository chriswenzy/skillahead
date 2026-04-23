export default function WhoThisIsFor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-12 gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
           <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Career Switchers", icon: "🚀", bg: "bg-blue-50" },
                { title: "Students & Grads", icon: "🎓", bg: "bg-slate-50" },
                { title: "Working Pros", icon: "💼", bg: "bg-slate-100" },
                { title: "Business Owners", icon: "📈", bg: "bg-blue-100" }
              ].map((item, i) => (
                <div key={i} className={`${item.bg} p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-1 transition-transform cursor-default`}>
                   <span className="text-3xl">{item.icon}</span>
                   <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
           </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 space-y-8">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Audience</span>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">Who This Is For</h2>
           <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
             SkillAhead is designed for individuals who are serious about their career progression and ready to master high-impact skills.
           </p>
           <ul className="space-y-4">
             {[
               "Career switchers entering tech",
               "Students & recent graduates",
               "Working professionals upgrading skills",
               "Business owners who want to use data"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-4 text-slate-900 font-bold text-sm">
                 <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </section>
  );
}
