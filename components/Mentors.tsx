import Image from "next/image";

export default function Mentors() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="mb-12 md:mb-20 text-center">
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/50 mb-4 inline-block">Academic Leadership</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">Learn from Authority</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Mentor 1 */}
          <div className="flex flex-col sm:flex-row gap-8 items-start group">
            <div className="glass w-full sm:w-48 h-64 rounded-2xl relative overflow-hidden flex-shrink-0">
               <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">👤</div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black">Anietie Etuk</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/60">Head of Systems Architecture</p>
              <p className="text-sm font-medium text-white/80 leading-relaxed">
                Former Principal Engineer at global fintech giants. Anietie brings 15+ years of experience in distributed systems.
              </p>
              <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                 <span className="text-xs font-bold underline cursor-pointer">LinkedIn</span>
                 <span className="text-xs font-bold underline cursor-pointer">Twitter</span>
              </div>
            </div>
          </div>
          
          {/* Mentor 2 */}
          <div className="flex flex-col sm:flex-row gap-8 items-start group md:mt-16">
            <div className="glass w-full sm:w-48 h-64 rounded-2xl relative overflow-hidden flex-shrink-0">
               <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">👤</div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black">Gospel Chinedu</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/60">Dean of Data Sciences</p>
              <p className="text-sm font-medium text-white/80 leading-relaxed">
                A pioneer in applying Big Data for social impact in Sub-Saharan Africa. Specialist in predictive modeling.
              </p>
              <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                 <span className="text-xs font-bold underline cursor-pointer">LinkedIn</span>
                 <span className="text-xs font-bold underline cursor-pointer">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
