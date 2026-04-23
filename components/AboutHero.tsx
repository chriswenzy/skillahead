import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-12 gap-16 items-center pt-20">
        <div className="col-span-12 lg:col-span-6 space-y-10">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Pioneering Technical Excellence for Tomorrow's Leaders
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
            Skillahead Academy was founded on the principle that high-level technical mastery should be accessible to those with the drive to lead. We bridge the gap between academic theory and industry reality.
          </p>
          <div className="flex flex-wrap gap-12 pt-4">
             <div>
               <p className="text-3xl font-black text-primary tracking-tighter">10k+</p>
               <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mt-1">Active Learners</p>
             </div>
             <div>
               <p className="text-3xl font-black text-primary tracking-tighter">95%</p>
               <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mt-1">Career Success</p>
             </div>
             <div>
               <p className="text-3xl font-black text-primary tracking-tighter">50+</p>
               <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mt-1">Expert Mentors</p>
             </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/about-hero.png" 
              alt="Team Collaboration" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Floating Quote Box */}
          <div className="absolute -bottom-8 -left-8 md:left-20 bg-white p-8 shadow-2xl rounded-xl max-w-[280px] border border-slate-50">
             <p className="text-xs font-bold italic text-slate-600 leading-relaxed">
               "Our mission is to empower a generation of technical masters through structured, high-impact learning."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
