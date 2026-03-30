import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Painéis solares em telhado moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Economize até <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">90%</span> na sua conta de energia com <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Yanni Solar</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl">
              Soluções completas em energia solar para residências, comércios e indústrias em Santa Catarina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario-topo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/48996170953"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
              >
                <Phone size={20} />
                Falar com Especialista
              </a>
            </div>
          </div>

          {/* Form */}
          <div id="formulario-topo" className="w-full bg-[#1f2937]/95 backdrop-blur-md rounded-2xl border border-gray-700 overflow-hidden shadow-2xl h-[700px] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <div className="p-6 border-b border-gray-700/50 bg-gray-800/30">
              <h3 className="text-xl font-bold text-white text-center">Solicite seu orçamento personalizado</h3>
            </div>
            <iframe
              src="https://app.isales.company/integracoes/embed?tk=HJK1238ISAL567&fid=UFD159TR951"
              style={{ border: '0px #ffffff none' }}
              name="myiFrame"
              scrolling="yes"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              height="100%"
              width="100%"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
