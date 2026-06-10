import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter text-gray-900 leading-[0.95]">
          Connecting Top Talent With <span className="text-blue-600">Exceptional Companies</span>
        </h1>
        <p className="mt-8 text-xl text-gray-600 font-sans max-w-2xl">
          Ant-Tech Asia is your partner for specialized recruitment in Technology, AI, Blockchain, Finance, and Executive Search.
        </p>
        <div className="mt-12 flex gap-4">
          <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-900 transition-all flex items-center gap-2">
            Find Talent <ArrowRight size={18} />
          </button>
          <button className="bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all">
            See Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
