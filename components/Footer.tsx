import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white pt-24 md:pt-40 pb-16 relative overflow-hidden">
      {/* AI-ish Glowing Orbs/Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
        {/* Executive Newsletter Module */}
        <div className="mb-20 md:mb-32">
          <div className="bg-white/[0.03] p-6 sm:p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/10 backdrop-blur-3xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-8 lg:gap-12 items-center relative z-10">
              <div className="w-full lg:col-span-6 space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-400">
                   <span className="w-8 md:w-12 h-[1px] bg-blue-400/50"></span>
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Proprietary Intelligence</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1.1] break-words">
                  Stay Ahead <br className="hidden sm:block" />
                  <span className="text-white/70">of the Technical Curve.</span>
                </h3>
                <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md font-medium mx-auto lg:mx-0 break-words">
                  Join our elite network to receive weekly intelligence reports and career strategies.
                </p>
              </div>
              <div className="w-full lg:col-span-6">
                <div className="bg-white/5 p-2 sm:p-4 rounded-2xl border border-white/20 flex flex-col gap-3 sm:gap-4">
                  <input
                    type="email"
                    placeholder="ENTER EMAIL"
                    className="w-full bg-transparent px-4 py-4 rounded-xl text-[10px] font-black tracking-widest placeholder:text-white/40 outline-none focus:bg-white/5 transition-all text-white border border-white/10"
                  />
                  <a href="https://wa.me/2348066199860" target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-full px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 text-center">
                    Secure Access
                  </a>
                </div>
                <p className="text-[8px] sm:text-[9px] text-white/50 font-bold uppercase tracking-widest mt-4 md:mt-6 text-center lg:text-left">
                  🔒 Encrypted Connection. No Spam Protocols Active.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-start">
          {/* Brand Engine Column */}
          <div className="w-full lg:col-span-5 space-y-8 md:space-y-12">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4 transition-transform group-hover:scale-[1.02] duration-500">
                <Image
                  src="/logo-white-v3.png"
                  alt="Skillahead Logo"
                  width={220}
                  height={55}
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-sm tracking-tight Poppins break-words">
              Bridging the gap between technical complexity and business mastery through AI-optimized learning systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 md:pt-6">
              <div className="space-y-3">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">Centers</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">PH | Lagos | Abuja</p>
              </div>
              <div className="space-y-3">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400">Inquiries</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white">info@skillahead.ng</p>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8 md:space-y-10">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-white border-l-2 border-blue-400/50 pl-4">Architecture</h5>
              <ul className="space-y-4 md:space-y-6">
                <li><Link href="/schools/data" className="group flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white transition-all underline decoration-white/10 underline-offset-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 scale-0 group-hover:scale-100 transition-transform"></span>
                  School of Data
                </Link></li>
                <li><Link href="/schools/programming" className="group flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white transition-all underline decoration-white/10 underline-offset-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 scale-0 group-hover:scale-100 transition-transform"></span>
                  School of Programming
                </Link></li>
              </ul>
            </div>

            <div className="space-y-8 md:space-y-10">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-white border-l-2 border-blue-400/50 pl-4">Network</h5>
              <ul className="space-y-4 md:space-y-6">
                <li><Link href="/locations" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Campuses</Link></li>
                <li><Link href="/corporate" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Corporate Engine</Link></li>
                <li><Link href="/partnership" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Stakeholders</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Footer Row */}
        <div className="mt-24 md:mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex gap-6 md:gap-8 justify-center">
            <Link href="#" className="text-[9px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Policy</Link>
          </div>
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/40 text-center">© 2026 SKILLAHEAD ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            {[
              { id: "LI", href: "https://www.linkedin.com/company/skillahead/" },
              { id: "FB", href: "https://web.facebook.com/skillaheadng" },
              { id: "IG", href: "https://www.instagram.com/skillaheadng" }
            ].map(social => (
              <a 
                key={social.id} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-[9px] md:text-[10px] font-black text-white/60 hover:border-blue-400 hover:text-blue-400 transition-all bg-white/5"
              >
                {social.id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
