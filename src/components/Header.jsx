import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Physiotherapists", path: "/physiotherapists" },
  { label: "Contact Us", path: "/contact-us" },
];


function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-3 px-5 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <a
            href="tel:+7064515926"
            className="block mb-4 bg-blue-600 text-white py-3 px-5 text-center rounded-lg transition-all duration-300 hover:bg-blue-700"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/7064515926"
            className="block bg-green-600 text-white py-3 px-5 text-center rounded-lg transition-all duration-300 hover:bg-green-700"
          >
            WhatsApppp
          </a>
        </div>
      </div>
    </div>
  );
}

function Header({ toggleSidebar }) {
  return (
    <header className="w-full fixed top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="group cursor-pointer flex items-center gap-2">
            <Mail className="w-5 h-5 text-teal-600" />
            <span className="hidden sm:inline text-sm text-teal-600 font-medium">
              Request a Callback
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+7064515926"
              className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/7064515926"
              className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-600 p-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <FaSquareWhatsapp className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center">
            <img
              src={require("../image/logo.png")}
              alt="CB Physio Therapy"
              className="h-12 w-auto"
            />
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 group-hover:w-full transition-all duration-300" />
          </Link>
          
                <nav className="hidden lg:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                  key={item.label}
                  to={item.path}
                  className="relative group py-2"
                  >
                  <span className={`text-gray-700 font-medium transition-colors duration-300 ${window.location.pathname === item.path ? 'text-teal-600' : 'group-hover:text-teal-600'}`}>
                    {item.label}
                  </span>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${window.location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                ))}
                </nav>
                {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default App;
