import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('produtos');

  return (
    <div className="min-h-screen bg-[#101827] font-sans text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <Testimonials />
            <Services />
            <Location />
            <Contact />
          </>
        )}
        {currentPage === 'produtos' && (
          <Products />
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
