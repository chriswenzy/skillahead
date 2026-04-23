import Link from "next/link";

const boardMembers = [
  {
    name: "Dr. Alaric Chen",
    role: "Head of Technical Standards",
    icon: "👨‍💻"
  },
  {
    name: "Sarah J. Sterling",
    role: "Dean of Academy",
    icon: "👩‍💼"
  },
  {
    name: "Marcus Vane",
    role: "Director of Research",
    icon: "👨‍🔬"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Pedagogy",
    icon: "👩‍🏫"
  }
];

export default function AcademicBoard() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">The Academic Board</h2>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mt-6 leading-relaxed">
            Our programs are governed by a panel of industry veterans, senior architects, and PhD researchers who ensure the highest educational standards.
          </p>
        </div>
        <Link href="#" className="font-bold text-xs md:text-sm text-primary flex items-center gap-2 hover:gap-4 transition-all pb-1 border-b border-primary/20">
          Meet All Mentors <span>→</span>
        </Link>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {boardMembers.map((member, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-6 md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
               <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20">
                 {member.icon}
               </div>
               <div className="absolute inset-0 border border-slate-900/5 group-hover:border-primary/20 transition-all"></div>
            </div>
            <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{member.name}</h4>
            <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400 mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
