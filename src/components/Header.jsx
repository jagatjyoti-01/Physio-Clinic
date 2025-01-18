import React from 'react';

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-teal-600">📧 Request a Callback</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📞</span>
              <span className="text-sm">Call</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <span>🟢</span>
              <span className="text-sm">Whatsapp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={require('../image/Friends physio1.png')}
              alt="CB Physio Therapy"
              className="h-16 w-auto"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 lklk ">
            <a href="/" className="text-gray-700 font-medium hover:text-teal-700">
              Home
            </a>
            <a href="/about" className="text-gray-700 font-medium hover:text-teal-600">
              About Us
            </a>
            <a href="/faq" className="text-gray-700 font-medium hover:text-teal-700">
              FAQ
            </a>
            <a href="/for-physiotherapists" className="text-gray-700 hover:text-teal-600 font-medium">
              For Physiotherapists
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
