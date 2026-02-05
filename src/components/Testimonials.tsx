import Image from 'next/image';
import { User, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
        id: 1,
        name: "Kevin Armando",
        role: "CEO Kopi Nusantara",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        text: "Terpadu itu solusi kurang lebih 3 tahun, penggunaannya memuaskan. Masalah selalu terselesaikan. Tim support admin yang sangat fast response."
    },
    {
        id: 2,
        name: "Sarah Wijaya",
        role: "Founder Batik Modern",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        text: "Website yang dibuat RizDev sangat membantu meningkatkan branding produk kami di mata klien internasional. Sangat worth it!"
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Owner Kerajinan Bambu",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        text: "Fitur-fitur yang disediakan sangat lengkap untuk kebutuhan ekspor. Desainnya juga modern dan mobile-friendly."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Stats */}
        <div className="text-center space-y-8">
           <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
              Testimonial
            </div>
          <h2 className="text-3xl font-bold text-gray-900">12.000+ UMKM Telah bergabung</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lebih dari 12.000 UMKM telah mempercayai kami untuk membuat website yang mendukung perkembangan bisnis mereka ke era digital. Kini saatnya giliran Anda untuk maju bersama dan memperluas bisnis anda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-100">
             <div>
                <div className="text-3xl font-bold text-blue-600">12.000+</div>
                <div className="text-sm text-gray-500 mt-1">Puas UMKM telah bergabung</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-blue-600">89%</div>
                <div className="text-sm text-gray-500 mt-1">Penjualan UMKM meningkat</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-gray-500 mt-1">UMKM merasa terbantu</div>
             </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
                <div key={review.id} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image 
                                src={review.image}
                                alt={review.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">{review.name}</div>
                            <div className="text-xs text-blue-600 font-medium">{review.role}</div>
                        </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                        "{review.text}"
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
