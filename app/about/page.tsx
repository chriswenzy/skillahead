import AboutHero from "@/components/AboutHero";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <main className="bg-white">
      {/* Why SkillAhead Exists */}
      <section className="pt-40 pb-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 space-y-12">
          <div className="text-center space-y-4">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">🧠 About</span>
             <h1 className="text-6xl font-black text-slate-900 tracking-tight">Why SkillAhead Exists</h1>
          </div>
          
          <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 max-w-4xl mx-auto text-center space-y-8">
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-widest leading-tight">SkillAhead was built on <br/><span className="text-primary italic">a simple belief:</span></h2>
             <p className="text-4xl font-black text-slate-900 tracking-tighter">Learning should lead to <br/> real outcomes.</p>
             <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
               Too many people learn tools but struggle to apply them. We exist to bridge that gap—by focusing on practical skills, real problems, and business impact.
             </p>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 border-y border-slate-50">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-12 gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 space-y-8">
             <h3 className="text-4xl font-black text-slate-900 tracking-tight">Who We Are</h3>
             <p className="text-xl text-slate-600 font-medium leading-relaxed">
               A learning and development company focused on data, programming, and real-world problem solving.
             </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
             <div className="h-64 bg-slate-100 rounded-[2rem] flex items-center justify-center text-4xl grayscale">🛡️</div>
          </div>
        </div>
      </section>

      {/* Leadership / Teams */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           {[
             { title: "Faculty Team", desc: "Experienced professionals who teach from real industry experience—not just theory." },
             { title: "Admin Team", desc: "The people ensuring your learning experience is smooth, structured, and impactful." },
             { title: "Board of Directors", desc: "Strategic leaders guiding the vision and growth of SkillAhead." }
           ].map((team, i) => (
             <div key={i} className="space-y-6 p-8 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-colors">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">{team.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{team.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
