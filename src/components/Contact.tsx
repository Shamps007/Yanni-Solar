import { Phone, MessageCircle, Instagram, Facebook, Clock, Car, Users, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fale <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Conosco</span>
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-orange-500">
            Economize até 90% com a Yanni Solar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#1f2937] border border-gray-800 shadow-lg space-y-4 h-full">
              <h3 className="font-bold text-white text-xl mb-4">Canais de Atendimento</h3>
              <a href="tel:+5548996170953" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <Phone className="text-orange-500" size={20} />
                <span className="text-lg">(48) 99617-0953</span>
              </a>
              <a href="https://wa.me/48996170953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <MessageCircle className="text-orange-500" size={20} />
                <span className="text-lg">WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/yannienergia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="text-orange-500" size={20} />
                <span className="text-lg">@yannienergia</span>
              </a>
              <a href="https://www.facebook.com/yannisolaroficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="text-orange-500" size={20} />
                <span className="text-lg">Yanni Solar Oficial</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#1f2937] border border-gray-800 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-orange-500" size={20} />
                <h3 className="font-bold text-white text-lg">Horário de Funcionamento</h3>
              </div>
              <p className="text-gray-400">Segunda a Sexta: <span className="text-white font-medium">07:30 – 17:15</span></p>
              <p className="text-gray-400">Sábado e Domingo: <span className="text-white font-medium">Fechado</span></p>
            </div>
            
            <div className="p-6 rounded-xl bg-[#1f2937] border border-gray-800 shadow-lg">
              <h3 className="font-bold text-white text-lg mb-3">Diferenciais</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2"><Car className="text-orange-500" size={16} /> Estacionamento</span>
                <span className="flex items-center gap-2"><Users className="text-orange-500" size={16} /> Atendimento presencial</span>
                <span className="flex items-center gap-2"><Heart className="text-orange-500" size={16} /> Espaço inclusivo</span>
                <span className="flex items-center gap-2"><Users className="text-orange-500" size={16} /> Banheiro neutro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
