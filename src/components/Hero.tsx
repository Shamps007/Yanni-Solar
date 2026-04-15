import { useState, ChangeEvent, FormEvent } from 'react';
import { ArrowRight, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 10) value = `${value.slice(0, 10)}-${value.slice(10)}`;
    setFormData({ ...formData, telefone: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // 🚀 Envia os dados para a SUA ponte na Vercel/Netlify, e não direto pro I.Sales
      const response = await fetch('/api/enviar-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envia os dados limpos
      });

      if (response.ok) {
        setStatus('success'); // Mostra o card verde de sucesso
        setFormData({ nome: '', email: '', telefone: '', cidade: '' }); // Limpa os campos
      } else {
        const errorText = await response.text();
        console.error('Server response:', response.status, errorText);
        setStatus('error');
        
        try {
          const errorData = JSON.parse(errorText);
          setErrorMessage(errorData.details || errorData.error || `Erro ${response.status}: Falha no servidor`);
        } catch (e) {
          setErrorMessage(`Erro ${response.status}: ${errorText.substring(0, 100)}...`);
        }
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
      setErrorMessage('Erro de conexão. Verifique sua internet.');
    }
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

          {/* Native iSales Form */}
          <div id="formulario-topo" className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-lg shadow-2xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sucesso!</h3>
                  <p className="text-gray-600">Seus dados foram enviados. Entraremos em contato em breve.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-orange-600 font-semibold hover:text-orange-700"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      required 
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone/Celular</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      required 
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade</label>
                    <input 
                      type="text" 
                      id="cidade" 
                      required 
                      value={formData.cidade}
                      onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    />
                  </div>

                  {/* reCAPTCHA Placeholder */}
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-gray-50 mt-2">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        id="recaptcha-mock" 
                        required
                        className="w-6 h-6 border-2 border-gray-300 rounded bg-white cursor-pointer accent-green-600" 
                      />
                      <label htmlFor="recaptcha-mock" className="text-sm text-gray-600 cursor-pointer select-none">
                        Não sou um robô
                      </label>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 opacity-80" />
                      <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-md">
                      <AlertCircle size={16} />
                      <span>{errorMessage || 'Ocorreu um erro ao enviar. Tente novamente.'}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Enviar'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
