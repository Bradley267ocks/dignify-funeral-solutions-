import { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div id="faq-header" className="text-center mb-16">
          <span className="text-[#1E40AF] text-sm font-extrabold uppercase tracking-widest block mb-2">Help Center</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Frequently Answered Questions
          </h2>
          <div className="w-16 h-1 bg-[#1E40AF] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-650 text-base leading-relaxed text-gray-600">
            Find answers to common questions about funeral arrangements, customizable granite headstone engraving timelines, and traditional ceremonies.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div id="faq-accordion" className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-box-${faq.id}`}
                className="bg-white rounded-2xl border border-gray-150-80 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-toggle-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-serif font-bold text-sm sm:text-base text-gray-900 hover:bg-gray-50 transition-colors gap-4 cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-[#1E40AF] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#1E40AF]' : ''
                    }`}
                  />
                </button>

                <div
                  id={`faq-content-drawer-${faq.id}`}
                  className={`transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="p-5 sm:p-6 bg-gray-50/50 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
