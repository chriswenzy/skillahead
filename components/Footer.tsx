import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#002B7F] to-[#001844] text-white pt-40 pb-16 relative overflow-hidden">
      {/* AI-ish Glowing Orbs/Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        {/* Executive Newsletter Module */}
        <div className="mb-32">
          <div className="bg-white/[0.03] p-12 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-3xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="grid grid-cols-12 gap-12 items-center relative z-10">
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <span className="w-12 h-[1px] bg-primary"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Proprietary Intelligence</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                  Stay Ahead <br />
                  <span className="text-white/70">of the Technical Curve.</span>
                </h3>
                <p className="text-white/80 text-lg max-w-md font-medium">
                  Join our elite network to receive weekly intelligence reports, career strategies, and AI-driven market insights.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/20 flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="ENTER INSTITUTIONAL EMAIL"
                    className="flex-1 bg-transparent px-6 py-5 rounded-xl text-xs font-black tracking-widest placeholder:text-white/40 outline-none focus:bg-white/5 transition-all text-white"
                  />
                  <button className="bg-primary text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 whitespace-nowrap">
                    Secure Access
                  </button>
                </div>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-6 text-center lg:text-left">
                  🔒 Encrypted Connection. No Spam Protocols Active.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-20 lg:gap-16 items-start">

          {/* Brand Engine Column */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Skillahead Logo"
                  width={180}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 text-base font-medium leading-relaxed max-w-sm tracking-tight Poppins">
              Bridging the gap between technical complexity and business mastery through AI-optimized learning systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Regional Center</p>
                <p className="text-xs font-bold tracking-widest uppercase text-white">Port Harcourt, NG</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Inquiries</p>
                <p className="text-xs font-bold tracking-widest uppercase text-white">hello@skillahead.ng</p>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-white border-l-2 border-primary pl-4">Architecture</h5>
              <ul className="space-y-6">
                <li><Link href="/schools/data" className="group flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white transition-all underline decoration-white/10 underline-offset-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform"></span>
                  School of Data
                </Link></li>
                <li><Link href="/schools/programming" className="group flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white transition-all underline decoration-white/10 underline-offset-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform"></span>
                  School of Programming
                </Link></li>
              </ul>
            </div>

            <div className="space-y-10">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-white border-l-2 border-primary pl-4">Network</h5>
              <ul className="space-y-6">
                <li><Link href="/locations" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Campuses</Link></li>
                <li><Link href="/corporate" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Corporate Engine</Link></li>
                <li><Link href="/partnership" className="text-white/80 hover:text-white text-sm font-bold transition-all underline decoration-white/10 underline-offset-4">Stakeholders</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Footer Row */}
        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Privacy Charter</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Safety Protocol</Link>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">© 2024 SKILLAHEAD ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            {["LI", "FB", "IG"].map(social => (
              <Link key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black text-white/60 hover:border-primary hover:text-primary transition-all bg-white/5">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
