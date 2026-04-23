import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-16 items-start text-white">
          
          {/* Brand Column */}
          <div className="col-span-12 lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Skillahead Logo" 
                width={180} 
                height={45} 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm font-medium leading-loose max-w-sm tracking-wide">
              A learning and development institution dedicated to bridging the global technical divide through pragmatic, research-driven masterclasses.
            </p>
            <div className="space-y-6 pt-10">
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 group-hover:bg-white group-hover:text-primary transition-all duration-500">🏛️</div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/60">Headquarters</p>
                    <p className="text-sm font-bold tracking-widest uppercase">Port Harcourt, Nigeria</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 group-hover:bg-white group-hover:text-primary transition-all duration-500">📧</div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/60">Global Inquiries</p>
                    <p className="text-sm font-bold tracking-widest uppercase">hello@skillahead.ng</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h5 className="text-xs font-black uppercase tracking-[0.4em] text-white/50 underline decoration-white/20 underline-offset-8">Academic Schools</h5>
              <ul className="space-y-6">
                <li><Link href="/schools/data" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  School of Data
                </Link></li>
                <li><Link href="/schools/programming" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  School of Programming
                </Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-xs font-black uppercase tracking-[0.4em] text-white/50 underline decoration-white/20 underline-offset-8">Engagement</h5>
              <ul className="space-y-6">
                <li><Link href="/locations" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all">Campuses</Link></li>
                <li><Link href="/corporate" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all">Corporate Training</Link></li>
                <li><Link href="/partnership" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all">Stakeholders</Link></li>
                <li><Link href="/about" className="text-white hover:text-white/80 text-sm font-bold tracking-widest uppercase transition-all">Our Story</Link></li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md space-y-6">
                <h5 className="text-xs font-black uppercase tracking-[0.4em] text-white">Subscribe</h5>
                <p className="text-xs text-white/80 font-bold leading-relaxed uppercase tracking-widest">Receive intelligence reports and career growth strategies weekly.</p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="INSTITUTION MAIL" 
                    className="w-full bg-white/20 border border-white/30 px-6 py-4 rounded-xl text-xs font-black tracking-widest placeholder:text-white/40 focus:bg-white/30 outline-none transition-all placeholder:font-black"
                  />
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-2xl">Secure Access</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Social */}
        <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-12">
            <Link href="#" className="text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Privacy Charter</Link>
            <Link href="#" className="text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-white/30">© 2024 SKILLAHEAD TECHNICAL ACADEMY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
             {["LI", "FB", "IG"].map(social => (
               <Link key={social} href="#" className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-xs font-black text-white/60 hover:border-white hover:text-white transition-all">{social}</Link>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
