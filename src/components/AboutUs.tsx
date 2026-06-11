import { Shield, Sparkles, Heart, Users, Clock, CreditCard } from 'lucide-react';
import { CONSULTANT_IMAGE } from '../data';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Split Layout for About */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div id="about-visual" className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-1 shadow-inner"></div>
            <img 
              src={CONSULTANT_IMAGE} 
              alt="Caring Funeral Policy Consultant" 
              className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1E40AF] text-white p-8 rounded-3xl shadow-xl">
              <div className="text-4xl font-bold mb-1 italic">Trusted</div>
              <div className="text-sm font-medium opacity-80">Funeral Cover Expert</div>
            </div>
          </div>

          <div id="about-content" className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="text-[#1E40AF] text-sm font-extrabold uppercase tracking-[0.2em] block">Our Foundation</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Providing Peace of Mind <br />
                <span className="text-blue-600 italic">For Your Loved Ones</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Based in Queenstown, South Africa, Dignify Funeral Solutions is built on the values of empathy, integrity, and communal care. We stand alongside families as a pillar of strength, offering accessible funeral cover that ensures every farewell is conducted with the utmost dignity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-blue-200">
                <div className="p-2.5 rounded-xl bg-white shadow-sm text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Guaranteed Diginity</h4>
                  <p className="text-xs text-gray-500 mt-1">Policies designed to honor your family's legacy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-blue-200">
                <div className="p-2.5 rounded-xl bg-white shadow-sm text-blue-600">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Compassionate Care</h4>
                  <p className="text-xs text-gray-500 mt-1">Supportive advisors guiding you during every step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section (Grid) */}
        <div id="why-choose-us" className="pt-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl font-bold text-gray-900">Why Families Trust Dignify</h3>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <CreditCard className="w-7 h-7" />,
                title: 'Affordable Premiums',
                desc: 'Low monthly payments tailored for individuals and large families without hidden fees.'
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Extended Family Protection',
                desc: 'Cover your spouse, children, and up to 9 extended family members under one reliable plan.'
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Fast Claims Assistance',
                desc: 'Reliable claims processing within 24-48 hours to ensure immediate financial relief.'
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: 'Flexible Cover Options',
                desc: 'Choose from our After Tears, Grocery, or Inkomo plans to match your specific needs.'
              },
              {
                icon: <Sparkles className="w-7 h-7" />,
                title: 'Trusted Local Service',
                desc: 'A community-focused approach based in Queenstown with deep cultural awareness.'
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Professional Support',
                desc: 'Compassionate consultants available to help you navigate policies and claims.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-gray-50 border border-transparent transition-all hover:bg-white hover:shadow-xl hover:border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
