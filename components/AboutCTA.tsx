export default function AboutCTA() {
  return (
    <section className="py-32 bg-primary text-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center space-y-12">
        <h2 className="text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to start your technical journey?
        </h2>
        <p className="text-lg font-medium text-white/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have accelerated their careers with Skillahead Academy's proven technical methodology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
          <button className="bg-[#6b4e1a] text-white px-12 py-5 rounded font-black uppercase tracking-widest text-xs shadow-2xl hover:opacity-90 transition-all">Browse Academy</button>
          <button className="border border-white/40 text-white px-12 py-5 rounded font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
