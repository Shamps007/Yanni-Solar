import { ArrowRight, ShoppingCart } from 'lucide-react';
import { products } from '../constants';

interface FeaturedProductsProps {
  setCurrentPage: (page: string) => void;
}

export default function FeaturedProducts({ setCurrentPage }: FeaturedProductsProps) {
  // Show only the first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-[#101827]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nossos <span className="text-orange-500">Destaques</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos equipamentos de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage('produtos')}
              className="group flex flex-col rounded-2xl bg-[#1f2937] border border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase mb-2 block">{product.category}</span>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{product.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">
                    Mais informações
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              setCurrentPage('produtos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1f2937] border border-gray-700 rounded-2xl text-white font-bold text-xl hover:border-orange-500 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            Conheça todos os produtos
            <ArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
