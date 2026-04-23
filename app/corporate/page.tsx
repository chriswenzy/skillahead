import CTA from "@/components/CTA";

const services = [
  { title: "Corporate Training", desc: "Upskill your team in data, analytics, and digital tools." },
  { title: "Business Consulting", desc: "We help you solve operational and decision-making challenges using data." },
  { title: "Executive Coaching", desc: "Support for leaders to make smarter, data-driven decisions." },
  { title: "Product Development", desc: "We design and build data-driven tools and solutions for your business." },
  { title: "Hire Our Talent", desc: "Access trained, job-ready professionals from our programs." }
];

export default function Corporate() {
  return (
    <main className="bg-white">
      <section className="pt-40 pb-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center space-y-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">🏢 Corporate</span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
            Train Your Team. <br />
            <span className="text-primary italic">Improve Performance.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Scalable learning solutions for organizations that want to leverage data and technology for growth.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary font-black text-xs">{i+1}</div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
          
          <div className="bg-primary p-12 rounded-[2rem] shadow-2xl text-white flex flex-col justify-between">
             <h3 className="text-3xl font-black tracking-tight">Ready to transform your organization?</h3>
             <button className="bg-white text-primary py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-all mt-8">Book a Consultation</button>
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
