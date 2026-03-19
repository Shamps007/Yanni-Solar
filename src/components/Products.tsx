import { useState } from 'react';
import { ArrowRight, ShoppingCart, X, MessageCircle } from 'lucide-react';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      category: 'Painéis',
      title: 'Painel Solar 550W Mono',
      description: 'Alta eficiência e durabilidade para máxima geração residencial.',
      price: 'R$ 899,00',
      image: 'https://picsum.photos/seed/solarpanel1/800/600',
      details: 'O Painel Solar 550W Monocristalino oferece a melhor eficiência do mercado para instalações residenciais e comerciais. Com tecnologia Half-Cell, garante menor perda de energia por sombreamento e maior durabilidade contra intempéries. Garantia de 12 anos contra defeitos de fabricação e 25 anos de eficiência linear.',
    },
    {
      category: 'Painéis',
      title: 'Painel Solar 600W Bifacial',
      description: 'Geração de energia por ambos os lados, ideal para usinas.',
      price: 'R$ 1.150,00',
      image: 'https://picsum.photos/seed/solarpanel2/800/600',
      details: 'Painel Bifacial de 600W que capta a luz solar tanto pela frente quanto por trás, aumentando a geração de energia em até 30% dependendo do reflexo do solo (albedo). Perfeito para usinas de solo, estacionamentos solares (carports) e telhados com alta refletividade.',
    },
    {
      category: 'Inversores',
      title: 'Inversor Híbrido 5kW',
      description: 'Tecnologia de ponta para conversão e armazenamento de energia.',
      price: 'R$ 4.290,00',
      image: 'https://picsum.photos/seed/inverter1/800/600',
      details: 'O Inversor Híbrido 5kW permite que você utilize a energia solar durante o dia e armazene o excedente em baterias para uso noturno ou em caso de queda de energia. Possui monitoramento Wi-Fi integrado e transição automática (função no-break) em menos de 10ms.',
    },
    {
      category: 'Inversores',
      title: 'Inversor String 10kW',
      description: 'Alta performance para sistemas comerciais de médio porte.',
      price: 'R$ 7.800,00',
      image: 'https://picsum.photos/seed/inverter2/800/600',
      details: 'Inversor trifásico de 10kW ideal para comércios e indústrias leves. Conta com 2 MPPTs independentes, permitindo a instalação de painéis em diferentes orientações de telhado. Eficiência máxima de 98.6% e design robusto com proteção IP65 para instalação externa.',
    },
    {
      category: 'Estruturas',
      title: 'Kit Fixação Telhado Cerâmico',
      description: 'Suportes em alumínio de alta resistência contra corrosão.',
      price: 'R$ 1.250,00',
      image: 'https://picsum.photos/seed/roofkit1/800/600',
      details: 'Kit completo de fixação para telhados de cerâmica (francesa, romana, portuguesa). Inclui ganchos em aço inox, perfis de alumínio anodizado, grampos intermediários e finais. Projetado para suportar ventos de até 120km/h e garantir a integridade do seu telhado sem vazamentos.',
    },
    {
      category: 'Estruturas',
      title: 'Kit Fixação Telhado Metálico',
      description: 'Instalação rápida e segura para galpões industriais.',
      price: 'R$ 980,00',
      image: 'https://picsum.photos/seed/roofkit2/800/600',
      details: 'Solução de fixação otimizada para telhados metálicos trapezoidais. Utiliza mini-trilhos que são fixados diretamente nas cristas da telha, economizando material e tempo de instalação. Acompanha fita de vedação EPDM para evitar infiltrações.',
    },
    {
      category: 'Armazenamento',
      title: 'Bateria de Lítio 5kWh',
      description: 'Autonomia noturna e segurança contra quedas de energia.',
      price: 'R$ 12.500,00',
      image: 'https://picsum.photos/seed/battery1/800/600',
      details: 'Bateria de Lítio Ferro Fosfato (LiFePO4) de 5kWh, a tecnologia mais segura e durável do mercado. Vida útil superior a 6.000 ciclos (mais de 15 anos de uso diário). Design modular que permite expansão futura conectando múltiplas unidades em paralelo.',
    },
    {
      category: 'Acessórios',
      title: 'Controlador de Carga MPPT 60A',
      description: 'Otimização inteligente para sistemas off-grid.',
      price: 'R$ 1.450,00',
      image: 'https://picsum.photos/seed/controller1/800/600',
      details: 'Controlador de carga com tecnologia MPPT (Maximum Power Point Tracking) que extrai até 30% mais energia dos painéis em comparação com controladores PWM tradicionais. Suporta sistemas de bateria de 12V, 24V, 36V e 48V com detecção automática.',
    },
    {
      category: 'Kits Completos',
      title: 'Kit Residencial 5kWp',
      description: 'Solução completa (Painéis, Inversor, Estrutura e Cabos).',
      price: 'R$ 18.900,00',
      image: 'https://picsum.photos/seed/solarkit1/800/600',
      details: 'O kit ideal para zerar a conta de luz de uma residência média (consumo de aprox. 600kWh/mês). Inclui 9 painéis de 550W, inversor de 5kW, estrutura de fixação completa, cabos solares, conectores MC4 e string box de proteção. Instalação não inclusa no valor do kit.',
    },
    {
      category: 'Kits Completos',
      title: 'Sistema Comercial 30kWp',
      description: 'Reduza os custos operacionais da sua empresa em até 95%.',
      price: 'R$ 89.000,00',
      image: 'https://picsum.photos/seed/solarkit2/800/600',
      details: 'Sistema dimensionado para padarias, supermercados, clínicas e escritórios com consumo em torno de 3.500kWh/mês. Retorno sobre o investimento (Payback) estimado entre 3 a 4 anos. Equipamentos de categoria Tier 1 com as melhores garantias do mercado.',
    },
    {
      category: 'Kits Completos',
      title: 'Sistema Industrial 100kWp',
      description: 'Projeto de grande porte com o máximo retorno de investimento.',
      price: 'R$ 280.000,00',
      image: 'https://picsum.photos/seed/solarkit3/800/600',
      details: 'Usina solar de minigeração para indústrias e grandes consumidores. Projeto personalizado que inclui inversores de alta potência, painéis bifaciais e estrutura robusta. Oferecemos consultoria completa para homologação e financiamento empresarial.',
    },
    {
      category: 'Mobilidade',
      title: 'Carregador Veicular EV 7.4kW',
      description: 'Estação de recarga rápida e inteligente para carros elétricos.',
      price: 'R$ 3.500,00',
      image: 'https://picsum.photos/seed/evcharger1/800/600',
      details: 'Wallbox inteligente de 7.4kW (32A) compatível com todos os veículos elétricos padrão Tipo 2. Permite agendar recargas para horários de tarifa mais barata ou integrar com o sistema solar para carregar o carro apenas com energia excedente do sol. Controle total via aplicativo.',
    },
  ];

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais informações e fazer um orçamento para o produto: *${productName}*`);
    window.open(`https://wa.me/5547999999999?text=${message}`, '_blank');
  };

  return (
    <section id="produtos" className="py-24 bg-[#101827] min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Nossos <span className="text-orange-500">Produtos</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Equipamentos de alta performance e durabilidade para garantir a máxima eficiência do seu sistema de energia solar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
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
                  <span className="text-xl font-extrabold text-orange-500">
                    {product.price}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
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
              <h3 className="text-3xl font-bold text-white mb-4 pr-8">{selectedProduct.title}</h3>
              <p className="text-3xl font-extrabold text-orange-500 mb-6">{selectedProduct.price}</p>
              
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
