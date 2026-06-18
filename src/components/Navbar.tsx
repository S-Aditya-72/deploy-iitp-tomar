"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Research", href: "/research" },
    { name: "Thesis", href: "/thesis" },
    { name: "Projects", href: "/projects" },
    { name: "Honours", href: "/honours" },
    { name: "Memberships", href: "/memberships" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo / Name Area */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex flex-col justify-center">
              {/* Prestigious Serif Font for the Name */}
              <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">
                Dr. N.K. Tomar
              </span>
              <span className="text-xs font-bold text-iitp-blue tracking-widest uppercase mt-0.5">
                IIT Patna
              </span>
            </Link>
          </div>

          {/* Desktop Menu - UW Style */}
          <div className="hidden md:flex h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center px-4 lg:px-5 h-full text-[13px] font-bold uppercase tracking-widest transition-all duration-200
                    ${isActive ? "text-iitp-blue" : "text-slate-500"}
                    hover:bg-iitp-blue hover:text-white
                  `}
                >
                  {link.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[6px] bg-iitp-blue" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-iitp-blue focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-slate-50
                    ${isActive ? "bg-iitp-light text-iitp-blue border-l-4 border-l-iitp-blue" : "text-slate-600 hover:bg-iitp-blue hover:text-white"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}