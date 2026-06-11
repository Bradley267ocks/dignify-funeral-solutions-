import { useState, useEffect } from 'react';
import { HeartHandshake, Phone, Menu, X, MessageSquare } from 'lucide-react';
import { LOGO_PATH } from '../data';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Plans', id: 'plans' },
    { name: 'Quote Builder', id: 'calculator' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2'
          : 'bg-gradient-to-b from-black/60 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Only */}
          <div
            id="nav-logo-container"
            className="flex items-center cursor-pointer group"
            onClick={() => handleLinkClick('hero')}
          >
            <div
              id="nav-logo-image-wrapper"
              className={`transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-110 md:scale-125'
              }`}
            >
              <img 
                src={LOGO_PATH} 
                alt="Dignify Funeral Solutions" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-12 lg:h-14' : 'h-14 lg:h-20'
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[#60A5FA] cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#1E40AF]' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div id="desktop-nav-actions" className="hidden lg:flex items-center gap-3">
            <a
              id="nav-action-phone"
              href="tel:0458381171"
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#1E40AF]'
                  : 'text-white hover:text-blue-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>045 838 1171</span>
            </a>
            <button
              id="nav-action-quote-btn"
              onClick={() => handleLinkClick('calculator')}
              className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer ${
                isScrolled
                  ? 'bg-[#1E40AF] text-white hover:bg-blue-800 hover:shadow'
                  : 'bg-white text-gray-900 hover:bg-blue-50'
              }`}
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-btn-container" className="flex items-center lg:hidden gap-2">
            <a
              id="mobile-phone-shortcut"
              href="tel:0458381171"
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-900 bg-gray-50' : 'text-white bg-white/10'
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`lg:hidden fixed inset-0 top-[60px] z-40 bg-white border-t border-gray-100 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div id="mobile-links-container" className="flex flex-col p-6 gap-5 bg-white h-full overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className="text-left py-2.5 text-lg font-medium text-gray-800 border-b border-gray-50 hover:text-[#1E40AF]"
            >
              {link.name}
            </button>
          ))}

          <div id="mobile-menu-actions" className="flex flex-col gap-3 mt-6">
            <a
              id="mobile-action-phone-office"
              href="tel:0458381171"
              className="flex items-center justify-center gap-2.5 bg-gray-50 text-gray-800 text-sm font-bold py-3.5 rounded-xl border border-gray-200"
            >
              <Phone className="w-4 h-4 text-[#1E40AF]" />
              Call Office: 045 838 1171
            </a>
            <a
              id="mobile-action-whatsapp"
              href="https://wa.me/27730278136"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white text-sm font-bold py-3.5 rounded-xl shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: 073 027 8136
            </a>
            <button
              id="mobile-action-quote-btn"
              onClick={() => handleLinkClick('calculator')}
              className="w-full bg-[#1E40AF] text-white text-sm font-bold py-3.5 rounded-xl shadow-sm hover:bg-blue-800 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
