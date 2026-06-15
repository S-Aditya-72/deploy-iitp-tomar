'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Profile', href: '/profile' },
  { name: 'Research', href: '/research' },
  { name: 'Thesis', href: '/thesis' },
  { name: 'Projects', href: '/projects' },
  { name: 'Honours', href: '/honours' },
  { name: 'Memberships', href: '/memberships' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold tracking-tight">Dr. N.K. Tomar</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? 'bg-blue-600 text-white px-3 py-2 rounded-lg font-medium transition-colors'
                      : 'text-slate-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-lg font-medium transition-colors'
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-200 hover:text-white focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg z-20 absolute w-full left-0 top-16">
          <div className="flex flex-col py-3 px-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? 'bg-blue-600 text-white px-3 py-2 rounded-md font-medium transition-colors'
                      : 'text-slate-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md font-medium transition-colors'
                  }
                  onClick={() => setMenuOpen(false)}
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