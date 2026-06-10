import React from 'react';
import { Cpu, Search, Gamepad2, Blocks, Landmark, Globe } from 'lucide-react';

const services = [
  { icon: Cpu, title: 'IT Recruitment', desc: 'Software, AI, Data engineers.' },
  { icon: Search, title: 'Executive Search', desc: 'CEO, CTO, VP, Directors.' },
  { icon: Gamepad2, title: 'Game Industry', desc: 'Top-tier talent for studios.' },
  { icon: Blocks, title: 'Blockchain & Web3', desc: 'Smart contracts, Rust devs.' },
  { icon: Landmark, title: 'Finance & Accounting', desc: 'CFO, Finance Managers.' },
  { icon: Globe, title: 'Overseas Hiring', desc: 'Talent from EU, Singapore, US.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Expert Services</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
              <s.icon className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
