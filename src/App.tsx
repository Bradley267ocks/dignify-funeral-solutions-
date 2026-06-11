import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Policies from './components/Policies';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll to give room for the sticky navbar
      const navbarOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-800">
      {/* Primary Sticky Header */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Structural Page Flow */}
      <main id="main-content-flow" className="relative">
        {/* Hero Banner Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Core Values & Mission Mission-segment */}
        <AboutUs />

        {/* Membership Policies & Pricing */}
        <Policies />

        {/* Premium Estimator */}
        <Calculator />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Area */}
        <FAQ />

        {/* Contact info */}
        <ContactUs />
      </main>

      {/* Multi-tier footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Respectful WhatsApp floating rapid launcher */}
      <a
        id="whatsapp-floating-trigger"
        href="https://wa.me/27730278136?text=Hello%20Dignify%20Funeral%20Solutions,%20I'd%20love%20to%20request%20urgent%20service%20or%20a%20pricing%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba56] text-white p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="Speak to our 24/7 Care desk immediately on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-3 transition-all duration-300 text-sm font-bold whitespace-nowrap">
          Contact 24/7 Support
        </span>
      </a>
    </div>
  );
}
