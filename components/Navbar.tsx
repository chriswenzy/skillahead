"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "CORPORATE", href: "/corporate" },
    { name: "PARTNERSHIP", href: "/partnership" },
  ];

  const isSchoolsActive = pathname.startsWith("/schools");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
      ? "py-3 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-primary/5"
      : "py-6 bg-transparent"
      }`}>
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Skillahead Logo"
            width={140}
            height={32}
            className={`h-8 w-auto object-contain transition-all duration-500 ${scrolled ? "scale-90" : "scale-100"}`}
            priority
          />
        </Link>

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
                  {[
                    { name: "SCHOOL OF DATA", href: "/schools/data" },
                    { name: "SCHOOL OF PROGRAMMING", href: "/schools/programming" }
                  ].map((school) => (
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

        <div className="flex items-center">
          <Link href="/contact" className={`transition-all duration-500 rounded font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 text-center ${scrolled ? "bg-primary text-white px-6 py-2.5" : "bg-primary text-white px-8 py-3.5"
            }`}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
