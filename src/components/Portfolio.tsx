import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const categories = ['Semua', 'UMKM', 'Corporate', 'Toko Online', 'Pendidikan', 'F&B'];
  
  const projects = [
    {
        id: 1,
        title: "Batik Solo Lestari",
        category: "Toko Online",
        client: "Ibu Hartini",
        description: "Website e-commerce untuk menjangkau pasar ekspor Eropa.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Penjualan +150%"
    },
    {
        id: 2,
        title: "PT Konstruksi Maju Bersama",
        category: "Corporate",
        client: "Bpk. Wijaya",
        description: "Company profile profesional untuk tender proyek pemerintah.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Kepercayaan Klien Naik"
    },
    {
        id: 3,
        title: "Kopi Kenangan Senja",
        category: "F&B",
        client: "Mas Dimas",
        description: "Website katalog menu dan reservasi tempat online.",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Reservasi Full"
    },
    {
        id: 4,
        title: "Yayasan Peduli Anak",
        category: "Charity",
        client: "Ibu Sarah",
        description: "Platform donasi dan transparansi kegiatan sosial.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Donasi +80%"
    },
    {
        id: 5,
        title: "Organic Farm Fresh",
        category: "UMKM",
        client: "Pak Tani Modern",
        description: "Marketplace lokal untuk hasil tani langsung ke konsumen.",
        image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Omzet 2x Lipat"
    },
    {
        id: 6,
        title: "Creative Agency Hub",
        category: "Corporate",
        client: "Tim Kreatif",
        description: "Portfolio showcase untuk agensi digital marketing.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        stats: "Klien Internasional"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
              Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hasil Karya & Kepercayaan Klien</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lihat bagaimana kami membantu berbagai bisnis bertransformasi digital. Dari UMKM lokal hingga perusahaan skala nasional.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                idx === 0 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                 <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <ExternalLink className="w-6 h-6" />
                    </div>
                 </div>
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                    {item.category}
                 </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">Klien: {item.client}</p>
                    </div>
                    <div className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded border border-green-100">
                        {item.stats}
                    </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {item.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium group/link pt-4 border-t border-gray-100">
                    Lihat Detail Project
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm cursor-pointer">
              Lihat Lebih Banyak Project
            </button>
        </div>
      </div>
    </section>
  );
}
