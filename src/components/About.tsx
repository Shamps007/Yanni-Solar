import { Zap, TrendingDown, Headphones, ShieldCheck } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <Zap className="text-orange-500" size={28} />,
      value: '+700',
      label: 'Sistemas Instalados',
    },
    {
      icon: <TrendingDown className="text-orange-500" size={28} />,
      value: '95%',
      label: 'Economia na Conta',
    },
    {
      icon: <Headphones className="text-orange-500" size={28} />,
      value: '24/7',
      label: 'Atendimento Especializado',
    },
    {
      icon: <ShieldCheck className="text-orange-500" size={28} />,
      value: '100%',
      label: 'Equipe Certificada',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-slate-900">
          Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Yanni Solar</span>
        </h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          Yanni Solar é uma empresa líder em energia solar que oferece soluções sustentáveis e criativas para seus clientes. Com uma equipe altamente qualificada e experiente, fornecemos sistemas personalizados de alta qualidade, desde a instalação até a manutenção completa. Nosso compromisso é garantir que você reduza sua conta de energia e contribua para um futuro mais sustentável.
        </p>
        <p className="text-center text-slate-500 mb-12 text-sm">
          Fundada em 02 de fevereiro de 2019.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
