import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Skillahead | Our Mission & Method",
  description: "Learn about the mission behind Skillahead—to bridge the gap between technical complexity and real-world business impact through elite specializations.",
};

export default function About() {
  return (
    <main className="bg-white">
      {/* Why SkillAhead Exists */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-8 md:space-y-12">
          <ScrollReveal className="text-center space-y-4">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">🧠 About</span>
             <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Why SkillAhead Exists</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest leading-tight">SkillAhead was built on <br/><span className="text-primary italic">a simple belief:</span></h2>
               <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">Learning should lead to <br/> real outcomes.</p>
               <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                 Too many people learn tools but struggle to apply them. We exist to bridge that gap—by focusing on practical skills, real problems, and business impact.
               </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-10 md:gap-16 items-center">
          <ScrollReveal direction="right" className="col-span-12 lg:col-span-6 space-y-6 md:space-y-8">
             <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Who We Are</h3>
             <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
               A learning and development company focused on data, programming, and real-world problem solving.
             </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2} className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
             <div className="relative aspect-video lg:aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl group">
                <Image 
                  src="/about-team-v2.png" 
                  alt="SkillAhead Team" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Academic Board / Faculty */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Governance</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">The Academic Board</h2>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Chaired by world-renowned thinkers, our board ensures the intellectual integrity of every program.
              </p>
            </div>
            <a href="https://wa.me/2348066199860" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl">
              View All Faculty
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Anietie Etuk",
                role: "Founder of SkillAhead Academy || Data Specialist",
                image: "/team/anietie-v2.png"
              },
              {
                name: "Mr Gospel Chinedu Nwachukwu",
                role: "Data Analytics | Instructor || Specializing in SQL and Tableau",
                image: "/team/gospel-v2.png"
              },
              {
                name: "Mr Jegbefume Anthony",
                role: "Data Analytics Instructor | Excel, PowerBI",
                image: "/team/jegbefume-v2.png"
              }
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group relative">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mb-8 relative">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{member.name}</h4>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Teams Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
           {[
             { title: "Faculty Team", count: 22, desc: "Experienced professionals who teach from real industry experience—not just theory." },
             { title: "Admin Team", count: 9, desc: "The people ensuring your learning experience is smooth, structured, and impactful." },
             { title: "Board of Directors", count: 7, desc: "Strategic leaders guiding the vision and growth of SkillAhead." }
           ].map((team, i) => (
             <ScrollReveal key={i} delay={i * 0.1} direction="up">
               <div className="space-y-4 md:space-y-6 p-6 md:p-8 rounded-3xl border border-slate-50 hover:bg-slate-50 transition-colors h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-lg mx-auto md:mx-0">{team.count}</div>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{team.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{team.desc}</p>
               </div>
             </ScrollReveal>
           ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
