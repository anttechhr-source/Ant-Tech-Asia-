import React from 'react';

const stats = [
  { val: '50k+', label: 'Candidate Database' },
  { val: '500+', label: 'Positions Filled' },
  { val: '100+', label: 'Global Clients' },
  { val: '85%', label: 'Placement Success' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-4xl font-bold tracking-tighter">{s.val}</div>
            <div className="mt-2 text-gray-400 font-sans text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
