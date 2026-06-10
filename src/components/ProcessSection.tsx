import React from 'react';

const steps = [
  { n: '01', title: 'Requirement Analysis', desc: 'Analyzing JD & needs.' },
  { n: '02', title: 'Talent Mapping', desc: 'Building candidate list.' },
  { n: '03', title: 'Screening', desc: 'Deep interviews.' },
  { n: '04', title: 'Client Interview', desc: 'Coordination.' },
  { n: '05', title: 'Offer Management', desc: 'Negotiation.' },
  { n: '06', title: 'Onboarding', desc: 'Candidate follow-up.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">Our Process</h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.n} className="border-l-2 border-gray-200 pl-6">
            <div className="text-sm font-mono text-blue-600">{s.n}</div>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">{s.title}</h3>
            <p className="mt-1 text-gray-500 font-sans text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
