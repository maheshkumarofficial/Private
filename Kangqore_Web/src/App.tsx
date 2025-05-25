import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useLocomotive } from './hooks/useLocomotive';
import { Scene } from './components/3D/Scene';

function App() {
  useLocomotive();

  return (
    <div className="min-h-screen bg-primary-50 text-light-100 font-sans" data-scroll-container>
      <div className="fixed inset-0 z-0 opacity-20">
        <Scene />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <CaseStudies />
          <Team />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;