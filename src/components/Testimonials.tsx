import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rafael S.',
      time: '2 meses atrás',
      text: '"Excelente trabalho! A equipe da Yanni foi super profissional desde o orçamento até a instalação. Minha conta de luz caiu 90%. Recomendo demais!"',
      rating: 5,
    },
    {
      name: 'Mariana L.',
      time: '3 meses atrás',
      text: '"Atendimento impecável. Tiraram todas as minhas dúvidas e o sistema foi instalado em apenas 2 dias. Estou muito satisfeita com a economia."',
      rating: 5,
    },
    {
      name: 'Carlos A.',
      time: '4 meses atrás',
      text: '"Contratei para minha empresa e o retorno foi rápido. Profissionais competentes e produto de qualidade. Nota 10!"',
      rating: 5,
    },
    {
      name: 'Fernanda M.',
      time: '5 meses atrás',
      text: '"Melhor investimento que fiz! A Yanni cuidou de tudo, desde o projeto até a homologação. Super indico para quem quer economizar."',
      rating: 5,
    },
    {
      name: 'João P.',
      time: '6 meses atrás',
      text: '"Ótimo serviço e preço justo. A instalação ficou bonita e funcional. Já estou economizando bastante na conta de luz."',
      rating: 4,
    },
    {
      name: 'Ana C.',
      time: '7 meses atrás',
      text: '"Empresa séria e comprometida. O sistema funciona perfeitamente e o suporte pós-venda é excelente. Recomendo sem hesitar!"',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">clientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-orange-400 text-orange-400" size={20} />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4,8</span>
            <span className="text-gray-400 text-sm">· 24 avaliações no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#1f2937] border border-gray-800 hover:border-orange-500/30 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < review.rating ? "fill-orange-400 text-orange-400" : "text-gray-600"}
                    size={14}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed h-24 overflow-y-auto">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{review.name}</span>
                <span className="text-xs text-gray-500">{review.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
