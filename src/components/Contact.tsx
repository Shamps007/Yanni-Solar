import { Phone, MessageCircle, Instagram, Facebook, Clock, Car, Users, Heart, Send, User, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#111827]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Fale <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Conosco</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer solicitar um orçamento? Preencha o formulário abaixo ou entre em contato pelos nossos canais.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-[#1f2937] border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-orange-500/20"></div>
              
              <h3 className="font-bold text-white text-2xl mb-6 relative z-10">Canais de Atendimento</h3>
              <div className="space-y-6 relative z-10">
                <a href="tel:+5548991089722" className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover/link:bg-orange-500/20 transition-colors">
                    <Phone className="text-orange-500" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telefone</p>
                    <span className="text-lg font-medium">(48) 99108-9722</span>
                  </div>
                </a>
                <a href="https://wa.me/48991089722" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover/link:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="text-[#25D366]" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <span className="text-lg font-medium">Chamar no WhatsApp</span>
                  </div>
                </a>
                <a href="https://www.instagram.com/yannienergia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover/link:bg-[#E1306C]/20 transition-colors">
                    <Instagram className="text-[#E1306C]" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Instagram</p>
                    <span className="text-lg font-medium">@yannienergia</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/yannisolaroficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-orange-500 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover/link:bg-[#1877F2]/20 transition-colors">
                    <Facebook className="text-[#1877F2]" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Facebook</p>
                    <span className="text-lg font-medium">Yanni Solar Oficial</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#1f2937] border border-gray-800 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Clock className="text-orange-500" size={20} />
                </div>
                <h3 className="font-bold text-white text-xl">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                  <span className="text-gray-400">Segunda a Sexta</span>
                  <span className="text-white font-medium">07:30 – 17:15</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-400">Sábado e Domingo</span>
                  <span className="text-orange-500 font-medium">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl bg-[#1f2937] border border-gray-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-8">Envie uma Mensagem</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nome Completo</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="text-gray-500" size={18} />
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-[#111827] border border-gray-700 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Telefone / WhatsApp</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="text-gray-500" size={18} />
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-[#111827] border border-gray-700 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">E-mail</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="text-gray-500" size={18} />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-[#111827] border border-gray-700 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10">Enviar Mensagem</span>
                  <Send className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
