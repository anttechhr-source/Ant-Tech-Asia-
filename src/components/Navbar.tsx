import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-gray-900">
          Ant<span className="text-blue-600">Tech</span>Asia
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <a href="#jobs" className="hover:text-blue-600 transition-colors">Jobs</a>
          <a href="https://headhunter.ant-tech.asia/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Headhunter</a>
          <a href="http://scancv.ant-tech.asia/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Scan CV</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <button className="hidden sm:block text-sm font-semibold text-gray-900 hover:text-blue-600">Upload CV</button>
          <button className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all">Find Talent</button>
        </div>
      </div>
    </nav>
  );
}
