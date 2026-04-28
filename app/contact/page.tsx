import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Skillahead | Regional Support & Inquiries",
  description: "Get in touch with Skillahead for curriculum inquiries, corporate partnerships, or student support across our regional centers.",
};

export default function Contact() {
  return (
    <main className="bg-white min-h-screen pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <ScrollReveal className="text-center mb-12 md:mb-20 space-y-4">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">📞 Contact</span>
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">Let's Talk</h1>
        </ScrollReveal>
        
        <div className="grid grid-cols-12 gap-10 md:gap-16">
          {/* Contact Form */}
          <ScrollReveal direction="right" className="col-span-12 lg:col-span-7">
            <div className="bg-slate-50 p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] h-full">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name</label>
                    <input type="text" className="w-full bg-white border border-slate-100 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-100 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="hello@company.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-100 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+234 XXX XXX XXXX" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                  <textarea rows={6} className="w-full bg-white border border-slate-100 rounded-xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <a href="https://wa.me/2348066199860" target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-primary text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all text-center block">Send Message</a>
              </form>
            </div>
          </ScrollReveal>
          
          {/* Contact Info */}
          <div className="col-span-12 lg:col-span-5 space-y-12 md:space-y-16 py-10 lg:pl-10">
            <div className="space-y-10 md:space-y-12">
                <ScrollReveal direction="left" delay={0.2} className="space-y-3 md:space-y-4 text-center lg:text-left">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Direct Contact</h4>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-xl md:text-2xl font-black text-slate-900">info@skillahead.ng</p>
                    <p className="text-lg md:text-xl font-bold text-slate-500 tracking-tight">+234 806 619 9860</p>
                  </div>
                </ScrollReveal>
               
               <div className="space-y-6 md:space-y-8">
                 <ScrollReveal direction="left" delay={0.3} className="text-center lg:text-left">
                   <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Regional Offices</h4>
                 </ScrollReveal>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                   {[
                     { city: "Port Harcourt", address: "8 Old Aba Road, Nma Plaza" },
                     { city: "Lagos", address: "6 Ashabi Cole Street, Ikeja" },
                     { city: "Abuja", address: "16 Gwani Street, Wuse Zone 4" }
                   ].map((office, idx) => (
                     <ScrollReveal key={office.city} direction="left" delay={0.4 + (idx * 0.1)}>
                       <div className="border-l-2 border-slate-100 pl-6 py-2">
                         <p className="font-black text-slate-900 text-sm">{office.city}</p>
                         <p className="text-xs text-slate-500 font-medium">{office.address}</p>
                       </div>
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
               
                <ScrollReveal direction="left" delay={0.7} className="space-y-4 text-center lg:text-left">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">Follow Us</h4>
                  <div className="flex gap-6 justify-center lg:justify-start">
                    {[
                      { name: "LinkedIn", href: "https://www.linkedin.com/company/skillahead/" },
                      { name: "Facebook", href: "https://web.facebook.com/skillaheadng" },
                      { name: "Instagram", href: "https://www.instagram.com/skillaheadng" }
                    ].map(social => (
                      <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest text-[9px] md:text-[10px]">{social.name}</a>
                    ))}
                  </div>
                </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
