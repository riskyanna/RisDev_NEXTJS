import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Usaha Kecil',
      price: 'Rp 1.247.000',
      period: '/thn',
      originalPrice: 'Rp 1.747.000',
      tag: 'Hemat Rp500.000',
      description: 'Buat Go Internasional',
      subtext: 'Bangun kepercayaan dengan domain umum untuk website internasional.',
      buttonText: 'Cari Domain',
      popular: false,
    },
    {
      name: 'Berkah',
      price: 'Rp 1.477.000',
      period: '/thn',
      originalPrice: 'Rp 2.947.000',
      tag: 'Hemat Rp1.470.000',
      description: 'Buat Perusahaan',
      subtext: 'Domain khusus perusahaan Indonesia yang kredibel badan usaha resmi.',
      buttonText: 'Cari Domain',
      popular: true,
    },
    {
      name: 'Bisnis Lokal',
      price: 'Rp 1.466.000',
      period: '/thn',
      originalPrice: 'Rp 3.546.000',
      tag: 'Hemat Rp2.080.000',
      description: 'Buat Bisnis Lokal',
      subtext: 'Jadi yang terdekat dengan domain khusus website bisnis Indonesia.',
      buttonText: 'Cari Domain',
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
              Paket Harga Murah
            </div>
          <h2 className="text-3xl font-bold text-gray-900">Harga Pas, Website Kelas!</h2>
          <p className="text-gray-500">
            Membuat website profesional tak lebih rumit. Dapatkan desain modern dan mudah digunakan tanpa perlu khawatir soal biaya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-2xl border ${plan.popular ? 'border-blue-500 shadow-xl relative' : 'border-gray-200 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  Popular
                </div>
              )}
              <div className="flex items-center gap-2 mb-4">
                 <span className="font-semibold text-gray-900">{plan.name}</span>
                 {plan.popular && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Juaranya</span>}
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded">{plan.tag}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">{plan.description}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {plan.subtext}
                </p>
              </div>

              <button className={`w-full py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                plan.popular 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
