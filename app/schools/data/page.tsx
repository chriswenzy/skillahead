import Image from "next/image";
import CTA from "@/components/CTA";

const packages = [
  {
    name: "Single Package",
    level: "Foundation Level",
    bestFor: "Beginners starting their data journey",
    learn: [
      { category: "Tools", items: "Excel, Power BI, Statistics" },
      { category: "AI", items: "ChatGPT, Gamma" },
      { category: "Career", items: "LinkedIn Optimization, Job Opportunity Links" }
    ],
    duration: "1 – 2 Months",
    outcome: "Understand core data concepts and start analyzing simple business problems.",
    color: "blue"
  },
  {
    name: "Combo Package",
    level: "Intermediate Level",
    bestFor: "Learners ready to go deeper and become job-ready",
    learn: [
      { category: "Tools", items: "Excel, Power BI, Statistics, SQL, Tableau" },
      { category: "AI", items: "ChatGPT, Gamma, Claude" },
      { category: "Career", items: "LinkedIn & CV Optimization, Portfolio Dev, Job Opportunity Links" }
    ],
    duration: "2 – 4 Months",
    outcome: "Analyze complex datasets, build dashboards, and create a strong portfolio.",
    color: "primary"
  },
  {
    name: "Career Package",
    level: "Advanced Level",
    bestFor: "Serious learners aiming for full career transition",
    learn: [
      { category: "Tools", items: "Excel, Power BI, SQL, Tableau, Python, Machine Learning" },
      { category: "AI", items: "ChatGPT, Claude, Prompt Engineering, Automation" },
      { category: "Career", items: "Interview Prep, Mentorship, Portfolio, Job Opportunity Links" }
    ],
    duration: "3 – 6 Months",
    outcome: "Become a well-rounded data professional capable of solving real business problems.",
    color: "slate-900"
  }
];

import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School of Data | Analytical Mastery & BI Packages",
  description: "Master Data Analysis, SQL, Power BI, and Tableau with SkillAhead's comprehensive curriculum co-designed by tech leaders.",
};

export default function SchoolOfData() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center space-y-6 md:space-y-8">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">🟦 School of Data</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight md:leading-[1.05] mt-6">
              Learn Data the Way <br className="hidden sm:block" />
              Businesses <span className="text-primary italic">Actually Use It.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              We don't just teach Excel, SQL, or dashboards. We teach you how to think, analyze, and make decisions like a professional.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="up" className="h-full">
                <div className={`flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all relative group overflow-hidden ${i === 1 ? "ring-2 ring-primary lg:scale-105 z-10" : ""}`}>
                  {i === 1 && <span className="absolute top-6 right-8 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full">Most Popular</span>}
                  
                  <div className="flex-1 space-y-8 md:space-y-10">
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">{pkg.level}</p>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{pkg.name}</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Best For: {pkg.bestFor}</p>
                    </div>
                    
                    <div className="space-y-8">
                      {pkg.learn.map((sub, j) => (
                        <div key={j} className="space-y-2">
                          <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{sub.category}</p>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{sub.items}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-slate-50 space-y-8">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <span>Duration:</span>
                      <span className="text-slate-900">{pkg.duration}</span>
                    </div>
                    <p className="text-xs font-black text-primary uppercase leading-relaxed tracking-widest">Outcome: <span className="text-slate-600 normal-case font-medium">{pkg.outcome}</span></p>
                    <a href={`/register?course=${encodeURIComponent(pkg.name)}`} className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all text-center border-2 ${i === 1 ? "bg-primary border-primary text-white shadow-2xl hover:scale-[1.02]" : "bg-transparent border-slate-200 text-slate-900 hover:border-primary hover:text-primary"}`}>Select Plan</a>
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
