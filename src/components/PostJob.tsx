import React, { useState } from 'react';

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Posting job:', formData);
    alert('Job posted (prototype)');
  };

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Post New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Job Title" className="w-full p-3 border rounded" onChange={e => setFormData({...formData, title: e.target.value})} />
        <input type="text" placeholder="Company" className="w-full p-3 border rounded" onChange={e => setFormData({...formData, company: e.target.value})} />
        <textarea placeholder="Description" className="w-full p-3 border rounded h-32" onChange={e => setFormData({...formData, description: e.target.value})} />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded">Post Job</button>
      </form>
    </section>
  );
}
