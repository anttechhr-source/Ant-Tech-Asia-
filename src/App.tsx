import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        {/* Placeholder sections for the additional pages requested */}
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
      </main>
      <Footer />
    </div>
  );
}
