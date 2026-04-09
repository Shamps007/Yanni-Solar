import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4">
      <div className="container mx-auto max-w-6xl text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Yanni Energia Solar</h3>
        <div className="text-sm space-y-1">
          <p>RUA MANOEL DOMINGOS RODRIGUES, S/N</p>
          <p>NOVA BELEM – Paulo Lopes – SC</p>
          <p>CEP 88490-000</p>
        </div>
        <a href="tel:+5548991089722" className="inline-flex items-center gap-2 hover:text-orange-500 transition-colors text-sm">
          <Phone size={14} />
          (48) 99108-9722
        </a>
        <div className="border-t border-slate-800 pt-6 mt-6">
          <p className="text-xs text-slate-500">© 2026 Yanni Solar – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
