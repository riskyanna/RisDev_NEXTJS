export default function CTA() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative h-[300px] w-full">
            {/* World Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-gray-100 rounded-full opacity-50 flex items-center justify-center text-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 border border-gray-200 rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                    Global Map Graphic
                </div>
             </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
           <h2 className="text-3xl font-bold text-gray-900">Buat Website untuk Capai Pasar Global</h2>
           <p className="text-gray-500 leading-relaxed">
            Pantau jangkauan bisnis Anda ke seluruh dunia dengan memiliki website profesional. Dengan website yang menarik dan mudah diakses, Anda bisa menjangkau lebih banyak pelanggan internasional dan meningkatkan penjualan. Wujudkan peluang bisnis baru di pasar global dengan langkah sederhana: buat website Anda sekarang!
           </p>
           <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 cursor-pointer">
              Buat Website Sekarang
            </button>
        </div>
      </div>
    </section>
  );
}
