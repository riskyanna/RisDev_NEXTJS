"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-12">
            <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <span>RizDev</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link href="#" className="hover:text-blue-600 transition-colors">Cari Design</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Pertanyaan</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Tutorial</Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">Blog</Link>
            </div>
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 cursor-pointer">
              Cari Domain
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="px-6 py-4 space-y-4">
            <Link href="#" className="block text-gray-600 font-medium hover:text-blue-600 py-2">Cari Design</Link>
            <Link href="#" className="block text-gray-600 font-medium hover:text-blue-600 py-2">Pertanyaan</Link>
            <Link href="#" className="block text-gray-600 font-medium hover:text-blue-600 py-2">Tutorial</Link>
            <Link href="#" className="block text-gray-600 font-medium hover:text-blue-600 py-2">Blog</Link>
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Cari Domain
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
