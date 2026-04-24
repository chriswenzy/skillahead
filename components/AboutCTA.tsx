export default function AboutCTA() {
  return (
    <section className="py-16 md:py-32 bg-primary text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center space-y-8 md:space-y-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to start your technical journey?
        </h2>
        <p className="text-base md:text-lg font-medium text-white/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have accelerated their careers with Skillahead Academy's proven technical methodology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6">
          <button className="bg-[#6b4e1a] text-white w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded font-black uppercase tracking-widest text-[10px] md:text-xs shadow-2xl hover:opacity-90 transition-all">Browse Academy</button>
          <button className="border border-white/40 text-white w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white/10 transition-colors">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
