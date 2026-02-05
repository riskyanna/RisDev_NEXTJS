export default function CTA() {
  return (
    <section className="py-20 px-6 bg-blue-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] w-full flex items-center justify-center">
            {/* Abstract World Map */}
             <div className="relative w-full h-full">
                <svg viewBox="0 0 800 400" className="w-full h-full text-blue-500/30 fill-current">
                    <path d="M150,180 C130,150 180,100 220,120 C250,130 240,180 200,190 C160,200 150,180 150,180 Z" /> {/* North Americaish */}
                    <path d="M250,250 C240,230 270,200 300,220 C320,240 310,280 280,290 C260,300 250,250 250,250 Z" /> {/* South Americaish */}
                    <path d="M380,120 C360,100 400,60 450,70 C500,80 480,140 420,150 C380,160 380,120 380,120 Z" /> {/* Europeish */}
                    <path d="M400,200 C380,180 450,150 500,180 C550,210 520,280 450,290 C400,300 400,200 400,200 Z" /> {/* Africaish */}
                    <path d="M550,100 C530,80 600,60 650,80 C700,100 680,160 600,170 C560,180 550,100 550,100 Z" /> {/* Asiaish */}
                    <path d="M600,250 C580,230 630,220 660,240 C680,260 650,290 620,290 C600,290 600,250 600,250 Z" /> {/* Australiaish */}
                </svg>
                
                {/* Connection Lines & Dots */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>

                {/* Floating Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 animate-bounce-slow">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Total Pengunjung</div>
                            <div className="font-bold text-gray-900">2.4M / bulan</div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6 text-white">
           <h2 className="text-3xl md:text-4xl font-bold leading-tight">
             Siap Membawa Bisnis Anda <br/>
             <span className="text-blue-300">Go International?</span>
           </h2>
           <p className="text-blue-100 leading-relaxed text-lg">
            Jangan batasi potensi bisnis Anda hanya di pasar lokal. Dengan website profesional yang dioptimalkan untuk akses global, produk Anda bisa dilihat oleh jutaan calon pelanggan di seluruh dunia 24/7.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1 cursor-pointer">
                  Mulai Konsultasi Gratis
                </button>
                <button className="px-8 py-4 bg-transparent border border-blue-400 text-blue-100 font-bold rounded-full hover:bg-blue-800/50 transition-all cursor-pointer">
                  Lihat Paket Harga
                </button>
           </div>
        </div>
      </div>
    </section>
  );
}
