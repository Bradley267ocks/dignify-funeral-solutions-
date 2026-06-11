import { HeartHandshake, Phone, Mail, MapPin, Facebook, MessageSquare } from 'lucide-react';
import { LOGO_PATH } from '../data';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="footer-upper-grid" className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10">
          
          {/* Brand Col */}
          <div id="footer-brand-col" className="md:col-span-5 flex flex-col gap-4">
            <div
              className="flex items-center gap-2.5 cursor-pointer group self-start"
              onClick={() => onScrollToSection('hero')}
            >
              <div className="p-1 rounded-xl bg-white/5 border border-white/10">
                <img 
                  src={LOGO_PATH} 
                  alt="Dignify Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block">
                  Dignify
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium block text-blue-300 -mt-1">
                  Funeral Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mt-1">
              Honouring Life With Dignity, Respect & Compassion. We provide compassionate, professional, and affordable funeral policies to help families secure peace of mind and honour the lives of those they cherish.
            </p>

            {/* Social media connections */}
            <div className="flex gap-3 mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#60A5FA] border border-white/10 transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/27730278136"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 flex items-center justify-center text-[#25D366] border border-[#25D366]/20 transition-colors"
                title="Connect via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div id="footer-links-col" className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              {['about', 'plans', 'calculator', 'faq', 'contact'].map((sect) => (
                <button
                  key={sect}
                  onClick={() => onScrollToSection(sect)}
                  className="text-left text-gray-400 hover:text-white transition-colors capitalize cursor-pointer font-medium"
                >
                  {sect === 'calculator' ? 'Premium Estimator' : sect === 'plans' ? 'Funeral Plans' : sect.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Details Col */}
          <div id="footer-contact-col" className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Queenstown Office</h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-400">
              
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                <span>Queenstown, Eastern Cape, South Africa</span>
              </div>

              <a href="tel:0458381171" className="flex gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                <span>Office: 045 838 1171</span>
              </a>

              <a href="tel:0730278136" className="flex gap-3 hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>WhatsApp: 073 027 8136</span>
              </a>

              <a href="mailto:dignifyfuneralsolutions@gmail.com" className="flex gap-3 hover:text-white transition-colors select-all break-all">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                <span>dignifyfuneralsolutions@gmail.com</span>
              </a>

            </div>
          </div>

        </div>

        {/* Footer bottom credit split */}
        <div id="footer-bottom-bar" className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {currentYear} Dignify Funeral Solutions. All Rights Reserved. Coordinated in Queenstown, South Africa.</p>
          <div className="flex gap-4">
            <span>Dignity & Care 24/7/365</span>
            <span className="text-gray-600">|</span>
            <span>Registered Burial Provider</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
