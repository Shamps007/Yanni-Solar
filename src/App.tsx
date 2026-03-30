import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#101827] font-sans text-slate-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {currentPage === 'home' && (
          <>
            <Hero />
            <About />
            <FeaturedProducts setCurrentPage={setCurrentPage} />
            <Testimonials />
            <Services />
            <Location />
            <Contact />
          </>
        )}
        {currentPage === 'produtos' && (
          <>
            <Products />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
