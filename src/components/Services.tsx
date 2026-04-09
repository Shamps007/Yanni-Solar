import { ClipboardList, HardHat, Settings, Lightbulb, FileCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    { name: 'Projeto Personalizado', icon: <ClipboardList className="text-orange-500" size={20} /> },
    { name: 'Instalação Completa', icon: <HardHat className="text-orange-500" size={20} /> },
    { name: 'Manutenção Preventiva', icon: <Settings className="text-orange-500" size={20} /> },
    { name: 'Consultoria Energética', icon: <Lightbulb className="text-orange-500" size={20} /> },
    { name: 'Homologação junto à Concessionária', icon: <FileCheck className="text-orange-500" size={20} /> },
  ];

  return (
    <section id="servicos" className="py-20 bg-[#101827]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
          Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Serviços</span>
        </h2>
        
        <div className="space-y-4 mb-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#1f2937] border border-gray-800 hover:border-orange-500/40 transition-all duration-200 text-left">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <span className="font-medium text-gray-200">{service.name}</span>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/48991089722"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
        >
          Solicitar Avaliação Gratuita
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
