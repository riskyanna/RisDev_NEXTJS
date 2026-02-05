import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-10 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Kembangkan bisnis <span className="text-blue-600">UMKM</span> dan <span className="text-blue-600">Ekspor</span> dengan Website
          </h1>
          
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-500 text-xs font-semibold rounded-full">
              Diskon Domain Rp145.000
            </div>
            <p className="text-gray-600 text-lg">
              Mulai dari <span className="font-bold text-gray-900">Rp97.000</span>/Tahun
            </p>
          </div>

          <div className="flex w-full max-w-md bg-white border border-gray-200 rounded-full p-1.5 shadow-sm">
            <div className="flex-1 flex items-center px-4">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Nama domain kamu..." 
                className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-orange-400 text-white font-medium rounded-full hover:bg-orange-500 transition-colors cursor-pointer">
              Cari Domain
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full">
            <div className="absolute inset-0 bg-transparent rounded-3xl overflow-visible flex items-center justify-center">
                {/* Main Hero Image */}
                <div className="relative w-full h-full">
                    <Image 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                        alt="Pemilik Bisnis Sukses"
                        fill
                        className="object-cover rounded-3xl shadow-2xl z-10 relative"
                    />
                    
                    {/* Floating Cards */}
                    <div className="absolute z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl top-10 -right-4 md:-right-10 border border-white/50 animate-bounce-slow">
                         <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" width={32} height={32} />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" width={32} height={32} />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User" width={32} height={32} />
                                </div>
                            </div>
                            <div className="text-xs font-bold text-gray-800">
                                250+ <br/><span className="font-normal text-gray-500">Customer Review</span>
                            </div>
                         </div>
                    </div>

                     <div className="absolute z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl bottom-10 -left-4 md:-left-10 border border-white/50">
                        <div className="text-xs text-gray-500 mb-2 font-medium">Peningkatan Penjualan</div>
                        <div className="flex items-end gap-2 h-16 w-32">
                            <div className="w-1/4 bg-blue-100 rounded-t h-[40%]"></div>
                            <div className="w-1/4 bg-blue-200 rounded-t h-[60%]"></div>
                            <div className="w-1/4 bg-blue-300 rounded-t h-[45%]"></div>
                            <div className="w-1/4 bg-blue-500 rounded-t h-[90%] relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    85%
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Abstract Decoration */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl"></div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-0 rounded-bl-[100px]"></div>
    </section>
  );
}
