"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and handle scroll lock
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "CORPORATE", href: "/corporate" },
    { name: "PARTNERSHIP", href: "/partnership" },
  ];

  const schools = [
    { name: "SCHOOL OF DATA", href: "/schools/data" },
    { name: "SCHOOL OF PROGRAMMING", href: "/schools/programming" }
  ];

  const isSchoolsActive = pathname.startsWith("/schools");

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "py-3 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-primary/5"
        : "py-6 bg-transparent"
        }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group z-[60]">
            <Image
              src="/logo.png"
              alt="Skillahead Logo"
              width={180}
              height={48}
              className={`h-8 md:h-12 w-auto object-contain transition-all duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${scrolled ? "scale-95" : "scale-100"}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-black text-xs tracking-widest transition-all px-2 py-1 group ${pathname === link.href ? "text-primary" : "text-slate-500 hover:text-primary"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setSchoolsOpen(true)}
              onMouseLeave={() => setSchoolsOpen(false)}
            >
              <button className={`flex items-center gap-2 font-black text-xs tracking-widest transition-all px-2 py-1 group ${isSchoolsActive ? "text-primary" : "text-slate-500 hover:text-primary"
                }`}>
                SCHOOLS
                <span className={`text-[10px] transition-transform duration-300 ${schoolsOpen ? "rotate-180" : ""}`}>▼</span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${isSchoolsActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full -left-6 mt-0 pt-6 w-64 transition-all duration-500 ease-out ${schoolsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                }`}>
                <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-3xl border border-slate-100 overflow-hidden">
                  <div className="p-4 space-y-1">
                    {schools.map((school) => (
                      <Link
                        key={school.name}
                        href={school.href}
                        className={`block px-5 py-4 rounded-xl font-black text-[10px] tracking-widest transition-all ${pathname === school.href ? "bg-primary/5 text-primary" : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                          }`}
                      >
                        {school.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-black text-xs tracking-widest transition-all px-2 py-1 group ${pathname === link.href ? "text-primary" : "text-slate-500 hover:text-primary"
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className={`hidden sm:inline-block transition-all duration-500 rounded font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 text-center ${scrolled ? "bg-primary text-white px-6 py-2.5" : "bg-primary text-white px-8 py-3.5"
              }`}>
              CONTACT
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden z-[60] p-2 text-primary focus:outline-none"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "translate-x-full opacity-0" : ""}`}></span>
                <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white transition-all duration-700 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute inset-0 bg-slate-50/50 pointer-events-none"></div>
        <div className="relative h-full flex flex-col px-8 pt-32 pb-12 overflow-y-auto">
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-6">Discovery</p>
              <div className="space-y-4">
                {navLinks.slice(0, 1).map((link) => (
                  <Link key={link.name} href={link.href} className={`block text-2xl font-black tracking-tighter ${pathname === link.href ? "text-primary" : "text-slate-900"}`}>
                    {link.name}
                  </Link>
                ))}
                
                {/* Schools Mobile Section */}
                <div className="space-y-4">
                  <p className="text-2xl font-black tracking-tighter text-slate-900">SCHOOLS</p>
                  <div className="pl-6 space-y-4 border-l-2 border-primary/20">
                    {schools.map((school) => (
                      <Link key={school.name} href={school.href} className={`block text-lg font-bold tracking-tight ${pathname === school.href ? "text-primary" : "text-slate-500"}`}>
                        {school.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link key={link.name} href={link.href} className={`block text-2xl font-black tracking-tighter ${pathname === link.href ? "text-primary" : "text-slate-900"}`}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100">
              <Link href="/contact" className="inline-block bg-primary text-white w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl text-center">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="mt-auto pt-10 border-t border-slate-100 flex justify-between items-center">
            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">© 2024 SKILLAHEAD</p>
            <div className="flex gap-4">
              {["LI", "IG", "FB"].map(s => <span key={s} className="text-xs font-black text-primary">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
