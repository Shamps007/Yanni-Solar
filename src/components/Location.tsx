import { MapPin } from 'lucide-react';

export default function Location() {
  const coverageAreas = [
    'Laguna', 'Biguaçu', 'Garopaba', 'Imbituba', 'Palhoça', 
    'Florianópolis', 'Imaruí', 'Anitápolis', 'Paulo Lopes', 
    'Alfredo Wagner', 'São José - Barreiros', 'Santo Amaro da Imperatriz'
  ];

  return (
    <section id="localizacao" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Localização</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-slate-700 h-80 lg:h-auto">
            <iframe 
              title="Localização Yanni Energia Solar" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.2166545163353!2d-48.6836111!3d-27.9625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDU3JzQ1LjAiUyA0OMKwNDEnMDEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '320px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div>
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="text-orange-500 shrink-0 mt-1" size={24} />
              <div className="text-slate-300">
                <p className="font-semibold text-white">Endereço</p>
                <p>RUA MANOEL DOMINGOS RODRIGUES, S/N</p>
                <p>NOVA BELEM</p>
                <p>Paulo Lopes – SC</p>
                <p>CEP 88490-000</p>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-4">Área de Cobertura</h3>
            <div className="flex flex-wrap gap-2">
              {coverageAreas.map((area, index) => (
                <span key={index} className="px-3 py-1.5 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
