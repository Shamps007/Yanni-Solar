import { useState } from 'react';
import { ArrowRight, Phone, User, Mail, Smartphone, MapPin, RefreshCw, CheckCircle2, Loader2 } from 'lucide-react';

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop"
          alt="Painéis solares ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111827]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101827]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Economize até <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">90%</span> na sua conta de energia
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl">
              Soluções completas em energia solar para residências, comércios e indústrias. Tecnologia de ponta e design premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario-topo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/48991089722"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                <Phone size={20} />
                Falar com Especialista
              </a>
            </div>
          </div>

          {/* Luxury Form */}
          <div id="formulario-topo" className="w-full max-w-md mx-auto lg:ml-auto relative rounded-[14px] p-[1px] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-[0_0_40px_rgba(249,115,22,0.35)] group">
            <div className="bg-[#1a1c23]/90 backdrop-blur-xl rounded-[13px] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 p-5 text-center shadow-md">
                <h3 className="text-lg font-bold text-white tracking-wide font-['Montserrat',sans-serif]">Solicite seu orçamento personalizado</h3>
              </div>
              
              {/* Form Body */}
              <form className="p-6 space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="text-gray-400" size={18} />
                  </div>
                  <input type="text" required placeholder="Nome Completo" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300" />
                </div>
                
                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="text-gray-400" size={18} />
                  </div>
                  <input type="email" required placeholder="E-mail" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300" />
                </div>
                
                {/* Phone */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Smartphone className="text-gray-400" size={18} />
                  </div>
                  <input type="tel" required placeholder="Telefone/Celular" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300" />
                </div>
                
                {/* City */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="text-gray-400" size={18} />
                  </div>
                  <input type="text" required placeholder="Cidade" className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:bg-white/10 rounded-lg pl-11 pr-4 py-3.5 text-white placeholder-gray-400 outline-none transition-all duration-300" />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`w-full mt-4 font-bold py-4 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2
                    ${isSuccess 
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)]' 
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.5)]'
                    }
                    ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Enviando...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={20} />
                      Enviado com sucesso!
                    </>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
