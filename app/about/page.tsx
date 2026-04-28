import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Skillahead | Our Mission & Method",
  description: "Learn about the mission behind Skillahead—to bridge the gap between technical complexity and real-world business impact through elite specializations.",
};

export default function About() {
  return (
    <main className="bg-white">
      {/* Why SkillAhead Exists */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-8 md:space-y-12">
          <ScrollReveal className="text-center space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">🧠 About</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Why SkillAhead Exists</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest leading-tight">SkillAhead was built on <br /><span className="text-primary italic">a simple belief:</span></h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">Learning should lead to <br /> real outcomes.</p>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Too many people learn tools but struggle to apply them. We exist to bridge that gap—by focusing on practical skills, real problems, and business impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-16 md:py-24 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-10 md:gap-16 items-center">
          <ScrollReveal direction="right" className="col-span-12 lg:col-span-6 space-y-6 md:space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Who We Are</h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              A learning and development company focused on data, programming, and real-world problem solving.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2} className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
            <div className="relative aspect-video lg:aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl group">
              <Image
                src="/about-team-v2.png"
                alt="SkillAhead Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Faculty & Team Statistics */}

      {/* Leadership / Teams Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center">
          {[
            {
              title: "Faculty Team",
              count: 22,
              desc: "Experienced professionals who teach from real industry experience—not just theory.",
              placeholders: 14
            },
            {
              title: "Admin Team",
              count: 9,
              desc: "The people ensuring your learning experience is smooth, structured, and impactful.",
              placeholders: 8
            }
          ].map((team, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all bg-white h-full group">
                {/* Image Holder / Avatar Stack */}
                <div className="relative h-16 w-full flex justify-center md:justify-start">
                  <div className="flex -space-x-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 overflow-hidden relative shadow-lg group-hover:scale-110 transition-transform"
                        style={{ zIndex: 10 - idx }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                        IMG
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[11px] font-black text-white relative shadow-lg z-0">
                      +{team.count - 5}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">{team.count}</div>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{team.title}</h4>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{team.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Detailed Faculty Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#00359E] tracking-tight">Our Faculty</h2>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Our programs are taught by a panel of industry veterans, senior architects, and researchers who ensure the highest educational standards.
              </p>
            </div>
            <a href="https://wa.me/2348066199860" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-widest hover:gap-3 transition-all">
              Meet All Mentors <span className="text-lg">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-x-8 md:gap-y-12">
            {[
              { name: "Anietie Etuk", role: "Founder || Data Specialist", image: "/team/faculty/Anietie Etuk.png" },
              { name: "Gospel Chinedu Nwachukwu", role: "Instructor || SQL & Tableau", image: "/team/faculty/Gospel Chinedu Nwachukwu.jpeg" },
              { name: "Jegbefume Anthony", role: "Instructor || Excel & PowerBI", image: "/team/faculty/Jegbefume Anthony.jpeg" },
              { name: "Afolayan Toyosi Helen", role: "Faculty Member", image: "/team/faculty/Afolayan Toyosi Helen.jpeg" },
              { name: "Sholesi Adebimpe", role: "Faculty Member", image: "/team/faculty/Sholesi Adebimpe.jpeg" },
              { name: "Emilefo Benjamin Asimiafele", role: "Faculty Member", image: "/team/faculty/Emilefo Benjamin Asimiafele.jpeg" },
              { name: "Lukman Adeola", role: "Faculty Member", image: "/team/faculty/Lukman Adeola.jpeg" },
              { name: "Rume Eburu", role: "Faculty Member", image: "/team/faculty/Rume Eburu.jpeg" },
              { name: "Asogwa Chinenye", role: "Faculty Member", image: "/team/faculty/Asogwa chinenye.png" },
              { name: "Iroanya Esther", role: "Faculty Member", image: "/team/faculty/Iroanya Esther.png" },
              { name: "Joy Asogwa", role: "Faculty Member", image: "/team/faculty/Joy Asogwa.png" },
              { name: "Ogundairo Elizabeth Oluwayemisi", role: "Faculty Member", image: "/team/faculty/Ogundairo Elizabeth Oluwayemisi.png" },
              { name: "Okolo Vivian", role: "Faculty Member", image: "/team/faculty/Okolo Vivian.jpeg" },
              { name: "Paul Odinakachukwu Anumodu", role: "Faculty Member", image: "/team/faculty/Paul Odinakachukwu Anumodu.jpeg" }
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <div className="group space-y-5">
                  <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl relative bg-white border border-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-black text-[#00359E] tracking-tight leading-tight">{member.name}</h4>
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Admin Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Management</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#00359E] tracking-tight">The Admin Team</h2>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                The people ensuring your learning experience is smooth, structured, and impactful from enrollment to graduation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-x-8 md:gap-y-12">
            {[
              { name: "Ernest Oyina-Hannah Willie", role: "Operations Manager", image: "/team/admin/Ernest Oyina-Hannah Willie.jpeg" },
              { name: "Martha Tamunoagbani", role: "Student Success", image: "/team/admin/Martha Tamunoagbani.jpeg" },
              { name: "Faith Deele", role: "Curriculum Flow", image: "/team/admin/Faith Deele.jpeg" },
              { name: "Gift Macaulay", role: "Enrollment & Support", image: "/team/admin/Gift Macaulay.jpeg" },
              { name: "Etop Grace Ekpenyong", role: "Partnerships", image: "/team/admin/Etop Grace Ekpenyong.png" },
              { name: "Aminat Janet Abdullaziz", role: "Strategic Lead", image: "/team/admin/Aminat Janet Abdullaziz.jpeg" },
              { name: "Clement Peace", role: "Academic Services", image: "/team/admin/Clement Peace.jpeg" },
              { name: "Esther Macaulay", role: "Administrative Support", image: "/team/admin/Esther Macaulay.jpeg" }
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <div className="group space-y-5">
                  <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl relative bg-white border border-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-black text-[#00359E] tracking-tight leading-tight">{member.name}</h4>
                    <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
