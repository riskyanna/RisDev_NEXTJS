import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
        title: 'Kesehatan Umum Jalan Ekspor Minyak Atsiri dan Cara Menghindarinya',
        category: 'Ekspor',
        date: '20 Jan 2024',
        image: "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: 'Keterbatasan Sumber Daya: Mengatasi Tantangan dalam Ekspor',
        category: 'Bisnis',
        date: '24 Jan 2024',
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: 'Memanfaatkan Potensi Ekspor Minyak Nilam dengan Strategi Digital',
        category: 'Strategi',
        date: '28 Feb 2024',
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
           <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-4">
              Artikel RizDev
            </div>
          <h2 className="text-3xl font-bold text-gray-900">Pelajaran dari Pengalaman Nyata</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Temukan solusi praktis, analisis dari studi kasus nyata, serta pelajaran berharga yang dapat membantu Anda menghadapi tantangan serupa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer flex flex-col h-full">
                    <div className="h-56 w-full relative overflow-hidden">
                         <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                         />
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                            {article.category}
                         </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                            <span>{article.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>5 min read</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                            {article.title}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-blue-500 text-sm font-medium group/link">
                            Baca Selengkapnya
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
         <div className="text-center mt-12">
            <button className="px-8 py-3 border border-blue-200 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors cursor-pointer">
              Lihat Semua Artikel
            </button>
         </div>
      </div>
    </section>
  );
}
