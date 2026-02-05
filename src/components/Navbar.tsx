import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto bg-white sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RizDev
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-blue-600">Cari Design</Link>
          <Link href="#" className="hover:text-blue-600">Pertanyaan</Link>
          <Link href="#" className="hover:text-blue-600">Tutorial</Link>
          <Link href="#" className="hover:text-blue-600">Blog</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-6 py-2 bg-orange-100 text-orange-500 font-medium rounded-full hover:bg-orange-200 transition-colors">
          Cari Domain
        </button>
      </div>
    </nav>
  );
}
