import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FUNERAL_PLANS, POLICY_PRICING_IMAGES } from '../data';
import { ShieldCheck, Info, Check, ArrowRight, User, Users, Baby } from 'lucide-react';

type AgeRange = '18-64' | '65-74' | '75-84';

export default function Policies() {
  const [selectedAge, setSelectedAge] = useState<AgeRange>('18-64');

  const categories = [
    { key: 'individual', label: 'Individual', icon: <User className="w-4 h-4" /> },
    { key: 'memberAndChildren', label: 'M + Children', icon: <Users className="w-4 h-4" /> },
    { key: 'memberAndSpouse', label: 'M + Spouse', icon: <Users className="w-4 h-4" /> },
    { key: 'family', label: 'Family', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus5', label: 'M + 5', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus7', label: 'M + 7', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus9', label: 'M + 9', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section id="plans" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Comprehensive Funeral Coverage</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Funeral Policy Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Choose from our specialized plans designed to provide dignified support and financial security for you and your family members.
          </motion.p>
        </div>

        {/* Age Range Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-sm border border-gray-100">
            {(['18-64', '65-74', '75-84'] as AgeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setSelectedAge(range)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedAge === range 
                    ? 'bg-[#1E40AF] text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {range} Years
              </button>
            ))}
          </div>
        </div>

        {/* Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {FUNERAL_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[2rem] border overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                plan.id === 'inkomo-plan' ? 'border-blue-500 ring-4 ring-blue-500/5' : 'border-gray-100'
              }`}
            >
              {plan.id === 'inkomo-plan' && (
                <div className="bg-blue-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                  Most Comprehensive Plan
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-500 text-sm">Cover Amount: <span className="font-bold text-gray-900">R{plan.coverAmount.toLocaleString()}</span></p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 h-12">
                  {plan.description}
                </p>

                {/* Categories Pricing for selected age */}
                <div className="space-y-3 mb-8">
                  {categories.map((cat) => {
                    const price = plan.pricing.find(p => p.ageRange === selectedAge)?.[cat.key as keyof typeof plan.pricing[0]];
                    return (
                      <div key={cat.key} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="text-blue-500 opacity-60">{cat.icon}</div>
                          <span className="text-xs font-bold text-gray-600">{cat.label}</span>
                        </div>
                        <span className="text-sm font-black text-gray-900">R{price}</span>
                      </div>
                    );
                  })}
                </div>

                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.id === 'inkomo-plan' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Child Benefits Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-4 uppercase tracking-wider">
                <Baby className="w-4 h-4" />
                <span>Family Care First</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Child Benefits Structure</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand the importance of comprehensive protection for the entire family. Our policies include automated tiered cover for children based on their age at the time of claim.
              </p>
              <div className="space-y-4">
                {[
                  { range: 'Stillborn to 5 months', benefit: '25% of Main Member Cover' },
                  { range: '6 months to 5 years', benefit: '50% of Main Member Cover' },
                  { range: '6 to 13 years', benefit: '50% of Main Member Cover' },
                  { range: '14 to 21 years', benefit: '100% of Main Member Cover' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                    <span className="font-bold text-gray-800 text-sm">{item.range}</span>
                    <span className="font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg text-xs">{item.benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="relative bg-[#1E40AF] rounded-3xl p-8 text-white overflow-hidden">
                <h4 className="text-xl font-serif font-bold mb-4">Important Note</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Waiting periods apply for natural causes. Accidental death is covered immediately upon receipt of the first premium. Maximum age for child dependants is 21, or 25 if they are full-time students.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>No medical exams required</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Premiums stay fixed for the first 12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Documentation Images (Keep as requested via "Rightful Places") */}
        <div id="policy-docs" className="mt-20 pt-20 border-t border-gray-200">
           <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Official Policy Price Lists</h3>
            <p className="text-gray-500 text-sm">Download or view the official documentation for complete transparency.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {POLICY_PRICING_IMAGES.map((policy, index) => (
              <motion.div
                key={policy.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
                onClick={() => window.open(policy.url, '_blank')}
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                   <img 
                    src={policy.url} 
                    alt={policy.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-bold text-[10px] shadow-lg uppercase tracking-wider">Expand View</span>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-gray-50">
                  <p className="text-[10px] font-bold text-gray-700 truncate text-center">{policy.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#1E40AF] rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">Need a Custom Family Cover?</h3>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
              If your family configuration doesn't fit standard plans, our consultants can curate a custom bundle specifically for your family size and age profiles.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/27730278136" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#1E40AF] px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-900/20 transform hover:-translate-y-1"
              >
                Chat with an Expert
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-700/50 backdrop-blur-sm border border-blue-400/30 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                Visit Our Office
              </button>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl -ml-48 -mb-48" />
        </motion.div>
      </div>
    </section>
  );
}
