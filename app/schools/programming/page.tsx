import Image from "next/image";
import CTA from "@/components/CTA";

const packages = [
  {
    name: "Front-End Development",
    level: "Foundations & UI",
    learn: [
      { category: "Foundations", items: "HTML, CSS, Responsive Design" },
      { category: "Logic", items: "JavaScript & GitHub" },
      { category: "Frameworks", items: "React JS & Deployment" }
    ],
    duration: "3 Months",
    outcome: "Build responsive, modern web interfaces and deploy live applications.",
  },
  {
    name: "Full-Stack Development",
    level: "End-to-End Solutions",
    learn: [
      { category: "UI Foundations", items: "HTML, CSS, React JS" },
      { category: "Architecture", items: "JavaScript, Node JS, Databases" },
      { category: "Cloud", items: "Advanced React & Firebase Integration" }
    ],
    duration: "4 Months",
    outcome: "Build full web applications with frontend and backend functionality.",
  }
];

import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School of Programming | Application & Engineering Mastery",
  description: "Build robust systems with Skillahead’s Programming School. Specialized tracks in Front-End and Full-Stack Engineering.",
};

export default function SchoolOfProgramming() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-primary-deep text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center space-y-6 md:space-y-8 relative z-10">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">🟩 School of Programming</span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none mt-6">
              Build Systems. <br className="hidden sm:block" />
              <span className="text-white/40">Not Just Code.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              Learn how to build real applications, deploy them, and understand how software solves real-world problems.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
             {packages.map((pkg, i) => (
               <ScrollReveal key={i} delay={i * 0.2} direction={i % 2 === 0 ? "right" : "left"}>
                 <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 h-full shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-2xl transition-all">
                    <div className="space-y-8 md:space-y-12">
                      <div className="space-y-3 md:space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{pkg.level}</p>
                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">{pkg.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-10">
                         {pkg.learn.map((sub, j) => (
                           <div key={j} className="flex gap-6 items-start">
                             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-black text-primary text-xs shrink-0">{j+1}</div>
                             <div className="space-y-1">
                               <p className="text-xs font-black uppercase tracking-widest text-slate-800">{sub.category}</p>
                               <p className="text-sm font-medium text-slate-500 leading-relaxed">{sub.items}</p>
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                    
                    <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-50 flex flex-col gap-6 md:gap-8">
                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                         <span>Duration:</span>
                         <span className="text-slate-900">{pkg.duration}</span>
                       </div>
                       <p className="text-xs font-black text-primary uppercase leading-relaxed tracking-widest">Outcome: <span className="text-slate-600 normal-case font-medium">{pkg.outcome}</span></p>
                       <a href={`/register?course=${encodeURIComponent(pkg.name)}`} className="w-full py-5 md:py-6 rounded-2xl bg-slate-900 text-white font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 text-center">Enroll in Course</a>
                    </div>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
