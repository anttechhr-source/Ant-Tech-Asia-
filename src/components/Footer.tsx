import React from 'react';

export default function Footer({ onAdminClick }: { onAdminClick: () => void }) {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 font-sans text-sm">
        <p className="cursor-pointer" onClick={onAdminClick}>© 2026 Ant-Tech Asia. All rights reserved.</p>
        <p className="mt-2">recruit@ant-tech.asia | https://ant-tech.eu/</p>
      </div>
    </footer>
  );
}
