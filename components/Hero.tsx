import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[80vh] flex items-center bg-[#fcfcfd] overflow-hidden pt-12 md:pt-20">
      <div className="absolute inset-0 z-0 opacity-[0.1] bg-[#f8fafc]" style={{ 
        backgroundImage: 'radial-gradient(#00359E 0.5px, transparent 0.5px)',
        backgroundSize: '24px 24px'
      }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent z-0"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full py-12 lg:py-0 relative z-10">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-8 md:w-12 h-[1px] bg-primary/30"></span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-slate-500 font-bold">Elite Executive Education</span>
            </div>
            <h1 className="text-[clamp(32px,10vw,68px)] leading-[1.1] mb-6 md:mb-8 font-black tracking-tight text-slate-900">
              Build Skills That <br />
              <span className="text-primary italic">Actually Pay.</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-xl leading-relaxed text-slate-600 font-medium break-words whitespace-normal">
              At SkillAhead, we don't just teach tools—we help you solve real business problems using data, programming, and AI.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4">
              <button className="bg-primary text-white border-2 border-primary px-8 md:px-10 py-3 md:py-4 rounded font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all text-center">
                Explore Schools
              </button>
              <button className="bg-white text-primary border-2 border-primary px-8 md:px-10 py-3 md:py-4 rounded font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] hover:bg-primary/5 transition-all text-center">
                Start Learning
              </button>
            </div>
            
            {/* Trust Badge */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-6 md:gap-10 border-t pt-10 border-slate-200">
              <div className="flex flex-col">
                <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">98%</p>
                <p className="text-[9px] uppercase text-slate-400 font-bold tracking-[0.2em] mt-1">Placement Rate</p>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">200+</p>
                <p className="text-[9px] uppercase text-slate-400 font-bold tracking-[0.2em] mt-1">Partners</p>
              </div>
              <div className="flex -space-x-2 md:-space-x-3 items-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] md:text-[10px] font-black text-slate-600 shadow-sm uppercase">AD</div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="col-span-12 lg:col-span-6 relative mt-16 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full aspect-square max-w-[580px] mx-auto lg:ml-auto">
              {/* Main visual content */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
                <Image 
                  alt="Technical Mastery" 
                  className="w-full h-full object-cover" 
                  src="/hero-mastery.png"
                  width={800}
                  height={800}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Info Card (Verified) */}
              <div className="absolute -bottom-6 right-4 md:bottom-[-40px] md:right-10 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl max-w-[220px] sm:max-w-[280px] border border-slate-100 flex items-center gap-3 sm:gap-4 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white text-lg sm:text-xl shrink-0">✓</div>
                <div>
                   <p className="text-[9px] sm:text-[11px] font-black tracking-widest text-primary uppercase">Verified Program</p>
                   <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 leading-tight mt-1">Accredited by Global Standards Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
