import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div id="testimonials-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] text-sm font-extrabold uppercase tracking-widest block mb-2">Voices Of Support</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Empathy & Professionalism as Told by Families
          </h2>
          <div className="w-16 h-1 bg-[#1E40AF] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-650 text-base leading-relaxed text-gray-650">
            It is a privilege to stand along with Queenstown families. Read their sincere stories regarding our prompt funeral arrangements, high-quality headstones, and custom traditional livestock helpers.
          </p>
        </div>

        {/* Real Testimonial Cards Layout */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testi-card-${t.id}`}
              className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 flex flex-col justify-between gap-6 relative group hover:border-blue-200 transition-all duration-300 shadow-sm"
            >
              {/* Huge respectful quote icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-100 opacity-60 group-hover:text-blue-200 transition-colors" />

              <div className="flex flex-col gap-4">
                {/* 5-Star Ratings */}
                <div id={`rating-stars-${t.id}`} className="flex gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Sincere Blockquote Text */}
                <blockquote id={`quote-text-${t.id}`} className="font-serif italic text-gray-700 text-sm sm:text-base leading-relaxed">
                  "{t.text}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div id={`quote-author-box-${t.id}`} className="border-t border-gray-100 pt-4 mt-2">
                <span className="font-bold text-gray-900 text-sm block">
                  {t.name}
                </span>
                <span className="text-xs text-gray-500 font-semibold block mt-1">
                  {t.relationship}
                </span>
                <span className="text-[10px] text-gray-400 block mt-1">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
