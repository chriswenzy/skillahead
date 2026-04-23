export default function Methodology() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 lg:col-span-5 relative">
          <h2 className="text-[32px] font-black text-primary mb-12 leading-tight tracking-tight">Scientific Approach <br/>to Success</h2>
          <div className="space-y-12">
            <div className="relative flex items-start gap-6 group">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">01</div>
              <div>
                <h4 className="text-sm font-black mb-2 text-slate-900 tracking-wide uppercase">Spiral Learning™</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-wider opacity-80">Concepts are introduced, then revisited with increasing complexity to ensure deep cognitive anchoring.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-6 group">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">02</div>
              <div>
                <h4 className="text-sm font-black mb-2 text-slate-900 tracking-wide uppercase">Correlation Matrix</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-wider opacity-80">Real-time tracking of skill acquisition vs. industry requirements to ensure 100% market relevance.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-6 group">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black flex-shrink-0">03</div>
              <div>
                <h4 className="text-sm font-black mb-2 text-slate-900 tracking-wide uppercase">Executive Shadowing</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs uppercase tracking-wider opacity-80">Direct collaboration with industry veterans to build professional social capital.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-7 flex justify-end">
          <div className="relative w-full max-w-xl aspect-square bg-slate-50 rounded-xl flex items-center justify-center p-16 border border-slate-100 shadow-inner">
             {/* Center Diagram */}
             <div className="relative">
                <div className="w-24 h-24 bg-primary/5 rounded-full animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl relative z-10 scale-125">
                   <div className="grid grid-cols-2 gap-1 scale-75">
                      <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                   </div>
                </div>
                {/* Floating Tags */}
                <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 bg-white shadow-xl p-3 border border-slate-100 rounded flex items-center gap-2">
                   <span className="text-primary text-xs">🔒</span>
                </div>
                <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 border border-slate-100 rounded flex items-center gap-2">
                   <span className="text-primary text-xs">📊</span>
                </div>
                <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 bg-white shadow-xl p-3 border border-slate-100 rounded flex items-center gap-2">
                   <span className="text-primary text-xs">☁️</span>
                </div>
                <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 border border-slate-100 rounded flex items-center gap-2">
                   <span className="text-primary text-xs">🧬</span>
                </div>
             </div>
             
             <div className="absolute bottom-8 text-center w-full">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Ecosystem Architecture</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
