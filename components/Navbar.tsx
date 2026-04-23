"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-lg" : "bg-white/80 backdrop-blur-md py-5 border-b border-slate-200/50"}`}>
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Skillahead Logo"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-slate-500 hover:text-primary transition-all font-black text-xs tracking-widest">HOME</Link>
          <div className="relative group">
            <button className="text-slate-500 group-hover:text-primary transition-all font-black text-xs tracking-widest flex items-center gap-1">
              SCHOOLS <span className="text-[8px]">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-2xl rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all border border-slate-50 p-6 space-y-4">
              <Link href="/schools/data" className="block text-slate-500 hover:text-primary font-black text-[10px] tracking-widest">SCHOOL OF DATA</Link>
              <Link href="/schools/programming" className="block text-slate-500 hover:text-primary font-black text-[10px] tracking-widest">SCHOOL OF PROGRAMMING</Link>
            </div>
          </div>
          <Link href="/locations" className="text-slate-500 hover:text-primary transition-all font-black text-xs tracking-widest text">LOCATIONS</Link>
          <Link href="/corporate" className="text-slate-500 hover:text-primary transition-all font-black text-xs tracking-widest">CORPORATE</Link>
          <Link href="/partnership" className="text-slate-500 hover:text-primary transition-all font-black text-xs tracking-widest">PARTNERSHIP</Link>
          <Link href="/about" className="text-slate-500 hover:text-primary transition-all font-black text-xs tracking-widest">ABOUT</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all text-center">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
