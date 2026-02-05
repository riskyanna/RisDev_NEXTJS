import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
                <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                  RizDev
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Jasa pembuatan website profesional untuk UMKM dan bisnis yang ingin Go Digital dan Go Internasional.
                </p>
            </div>
            
             <div>
                <h4 className="font-bold mb-6">Menu</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link href="#" className="hover:text-white">Cari Design</Link></li>
                    <li><Link href="#" className="hover:text-white">Pertanyaan</Link></li>
                    <li><Link href="#" className="hover:text-white">Tutorial</Link></li>
                    <li><Link href="#" className="hover:text-white">Blog</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="font-bold mb-6">Layanan</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link href="#" className="hover:text-white">Buat Website</Link></li>
                    <li><Link href="#" className="hover:text-white">Redesign</Link></li>
                    <li><Link href="#" className="hover:text-white">Optimasi SEO</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="font-bold mb-6">Kontak</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li>support@rizdev.com</li>
                    <li>+62 812 3456 7890</li>
                    <li>Jakarta, Indonesia</li>
                </ul>
             </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
                © 2024 RizDev. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
                <Link href="#" className="hover:text-white">Syarat dan Ketentuan</Link>
                <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
