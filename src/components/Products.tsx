import { useState } from 'react';
import { ArrowRight, ShoppingCart, X, MessageCircle } from 'lucide-react';
import { products } from '../constants';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais informações e fazer um orçamento para o produto: *${productName}*`);
    window.open(`https://wa.me/5547999999999?text=${message}`, '_blank');
  };

  return (
    <section id="produtos" className="py-24 bg-[#101827] min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Nossos <span className="text-orange-500">Produtos</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Equipamentos e componentes essenciais de alta performance para o seu sistema solar.
            </p>
          </div>
        </div>

        {Object.entries(
          products.reduce((acc, product) => {
            if (!acc[product.category]) acc[product.category] = [];
            acc[product.category].push(product);
            return acc;
          }, {} as Record<string, typeof products>)
        ).map(([category, categoryProducts]) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-white">{category}</h3>
              <div className="h-px bg-gray-800 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProduct(product)}
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
                      <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-[#1f2937] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 left-4 md:hidden w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 flex flex-col relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 hidden md:flex w-10 h-10 bg-gray-800 rounded-full items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <X size={20} />
              </button>

              <span className="text-sm font-semibold tracking-wider text-orange-500 uppercase mb-2">{selectedProduct.category}</span>
              <h3 className="text-3xl font-bold text-white mb-6 pr-8">{selectedProduct.title}</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-2">Detalhes do Produto</h4>
                <p className="text-gray-400 leading-relaxed">
                  {selectedProduct.details}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-700">
                <button 
                  onClick={() => handleWhatsAppClick(selectedProduct.title)}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-lg"
                >
                  <MessageCircle size={24} />
                  Comprar pelo WhatsApp
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Fale com um especialista para tirar dúvidas e finalizar a compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
