import Image from "next/image";

const offices = [
  {
    city: "Port Harcourt",
    type: "SkillAhead Data Academy",
    address: "8 Old Aba Road, Nma Plaza, Opposite Customary Court",
    courses: "Data (Single, Combo) • Programming (Front-End, Full-Stack)",
    image: "/home-hero.png" 
  },
  {
    city: "Lagos",
    type: "SkillAhead Data Academy",
    address: "6 Ashabi Cole Street, Ladegbuwa Plaza, Agidingbi, CBD, Ikeja",
    courses: "Data (Single, Combo)",
    image: "/about-hero.png"
  },
  {
    city: "Abuja",
    type: "SkillAhead Data Academy",
    address: "16 Gwani Street, CarlCare Building, Wuse Zone 4",
    courses: "Data (Single, Combo)",
    image: "/home-hero.png"
  },
  {
    city: "Online",
    type: "Live Virtual Academy",
    address: "High-engagement Zoom sessions with real instructors",
    courses: "Data (Single, Combo, Career) • Programming (Front-End, Full-Stack)",
    image: "/about-hero.png"
  }
];

export default function LocationsList() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="mb-12 md:mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Global Presence</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Command Centers</h2>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mt-6 leading-relaxed">
            Strategically positioned in global tech corridors, our physical labs provide the infrastructure for executive collaboration and high-end research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {offices.map((office, index) => (
            <div key={index} className="group border-b border-slate-100 pb-10 md:pb-12">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 md:mb-8 shadow-xl md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
                <Image 
                   src={office.image} 
                   alt={office.city} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                <div className="col-span-12 lg:col-span-4">
                   <h3 className="text-xl md:text-2xl font-black text-slate-900">{office.city}</h3>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">{office.type}</p>
                </div>
                <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
                   <div className="space-y-3 md:space-y-4">
                     <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Courses Available</p>
                     <p className="text-sm font-medium text-slate-800 tracking-tight leading-relaxed">{office.courses}</p>
                   </div>
                </div>
              </div>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-50">
                 <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed italic">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
