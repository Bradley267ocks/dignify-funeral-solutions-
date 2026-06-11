import { FAMILY_HERO_IMAGE } from '../data';
import { Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          id="hero-bg-img"
          src={FAMILY_HERO_IMAGE}
          alt="Happy South African multi-generational family"
          className="w-full h-full object-cover object-center opacity-70 transform scale-105 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Deep blue gradient overlay for professional insurance aesthetic */}
        <div id="hero-overlay" className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28 text-white z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero texts */}
          <div id="hero-text-container" className="lg:col-span-8 flex flex-col gap-6 text-left">
            {/* Soft respectful trust badge */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-1.5 self-start bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
            >
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              <span>Compassionate Funeral Protection • Trusted Service</span>
            </div>

            {/* Respectful heading with Playfair Display serif */}
            <h1
              id="hero-main-title"
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Protect Your Family <br />
              <span className="text-[#60A5FA] bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                When They Need It Most
              </span>
            </h1>

            {/* Description */}
            <p id="hero-desc-p" className="text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Affordable funeral cover designed to provide dignity, support, and peace of mind for you and your loved ones. Get the protection you deserve today.
            </p>

            {/* CTAs */}
            <div id="hero-actions-div" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
              <button
                id="hero-plans-trigger"
                onClick={() => onScrollToSection('plans')}
                className="group flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <span>View Policy Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-quote-trigger"
                onClick={() => onScrollToSection('calculator')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
              >
                Get Covered Today
              </button>
            </div>

            {/* Dynamic Emergency Strip inside Hero */}
            <div id="hero-emergency-strip" className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-8 mt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-sm text-gray-300 font-medium">
                  Claims handled within <strong className="text-white">24-48 hours</strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0458381171"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-white/5 hover:bg-white/15 text-white px-4 py-2.5 rounded-lg border border-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#60A5FA]" />
                  Call Support
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar / Quick Trust Stats on Hero right side */}
          <div id="hero-stats-card" className="lg:col-span-4 hidden lg:block bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xs font-bold text-blue-300 tracking-widest uppercase mb-6">Why Choose Dignify?</h3>
            <div className="space-y-6">
              {[
                { title: 'Affordable Premiums', desc: 'Pricing that fits your monthly budget.' },
                { title: 'Reliable Claims', desc: 'Fast processing when you need funds most.' },
                { title: 'Family Protection', desc: 'Include up to 9 extended family members.' },
                { title: 'Trusted Support', desc: 'Compassionate assistance throughout.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onScrollToSection('calculator')}
              className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors"
            >
              Calculate My Coverage
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
