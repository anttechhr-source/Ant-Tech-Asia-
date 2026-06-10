import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import PostJob from './components/PostJob';

export default function App() {
  const [view, setView] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  const navigateToPostJob = () => {
    if (isAdmin) {
      setView('post-job');
    } else {
      const pass = prompt('Enter admin password:');
      if (pass === 'admin123') { // Simple prototype auth
        setIsAdmin(true);
        setView('post-job');
      } else {
        alert('Access denied');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <StatsSection />
            <ServicesSection />
            <ProcessSection />
            <section id="contact" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
                <div className="text-gray-600 space-y-3 font-sans">
                  <p className="font-semibold text-lg text-gray-900">ANT-TECH Co., Ltd</p>
                  <p>Vietnam: 18E3 Chu Van An Street, Ward 26, Binh Thanh District, Ho Chi Minh City</p>
                  <p>France: 3 Chemin des Barques, 69120 Vaulx-en-Velin, Lyon, France</p>
                  <p>Hotline Viet Nam: +84 866 545 495</p>
                  <p>Hotline France: +33 7 67 87 08 30</p>
                  <p>Email: recruit@ant-tech.asia</p>
                  <p>Website: <a href="https://ant-tech.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ant-tech.eu/</a></p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <PostJob />
        )}
      </main>
      <Footer onAdminClick={navigateToPostJob} />
    </div>
  );
}
