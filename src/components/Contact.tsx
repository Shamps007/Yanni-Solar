import { Phone, MessageCircle, Instagram, Facebook, Clock, Car, Users, Heart, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
          Fale <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Conosco</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <a href="tel:+5548996170953" className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors">
                <Phone className="text-orange-500" size={20} />
                <span>(48) 99617-0953</span>
              </a>
              <a href="https://wa.me/48996170953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors">
                <MessageCircle className="text-orange-500" size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/yannienergia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors">
                <Instagram className="text-orange-500" size={20} />
                <span>@yannienergia</span>
              </a>
              <a href="https://www.facebook.com/yannisolaroficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors">
                <Facebook className="text-orange-500" size={20} />
                <span>Yanni Solar Oficial</span>
              </a>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-orange-500" size={20} />
                <h3 className="font-bold text-slate-900">Horário de Funcionamento</h3>
              </div>
              <p className="text-slate-600">Segunda a Sexta: <span className="text-slate-900 font-medium">07:30 – 17:15</span></p>
              <p className="text-slate-600">Sábado e Domingo: <span className="text-slate-900 font-medium">Fechado</span></p>
            </div>
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Diferenciais</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2"><Car className="text-orange-500" size={16} /> Estacionamento</span>
                <span className="flex items-center gap-2"><Users className="text-orange-500" size={16} /> Atendimento presencial</span>
                <span className="flex items-center gap-2"><Heart className="text-orange-500" size={16} /> Espaço inclusivo</span>
                <span className="flex items-center gap-2"><Users className="text-orange-500" size={16} /> Banheiro de gênero neutro</span>
              </div>
            </div>
          </div>
          
          <div className="w-full flex justify-center bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <iframe 
              src="https://app.isales.company/integracoes/embed?tk=HJK1238ISAL567&fid=UFD159TR951" 
              style={{ border: '0px #ffffff none' }} 
              name="myiFrame" 
              scrolling="no" 
              frameBorder="1" 
              marginHeight={0} 
              marginWidth={0} 
              height="800px" 
              width="100%" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
