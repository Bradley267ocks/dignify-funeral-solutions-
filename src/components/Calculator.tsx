import React, { useState, useEffect } from 'react';
import { FUNERAL_PLANS, FAMILY_HERO_IMAGE } from '../data';
import { ShieldCheck, Calculator as CalcIcon, MessageSquare, Plus, Minus, CheckCircle, Info, ArrowRight, User, Users } from 'lucide-react';

export default function Calculator() {
  // Input fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState('inkomo-plan');
  const [selectedAge, setSelectedAge] = useState<'18-64' | '65-74' | '75-84'>('18-64');
  const [selectedCategory, setSelectedCategory] = useState<string>('individual');

  // Local state for generated quotes
  const [estimates, setEstimates] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { key: 'individual', label: 'Individual', icon: <User className="w-4 h-4" /> },
    { key: 'memberAndChildren', label: 'Member + Children', icon: <Users className="w-4 h-4" /> },
    { key: 'memberAndSpouse', label: 'Member + Spouse', icon: <Users className="w-4 h-4" /> },
    { key: 'family', label: 'Full Family', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus5', label: 'Member + 5 Extended', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus7', label: 'Member + 7 Extended', icon: <Users className="w-4 h-4" /> },
    { key: 'memberPlus9', label: 'Member + 9 Extended', icon: <Users className="w-4 h-4" /> },
  ];

  const currentPlan = FUNERAL_PLANS.find(p => p.id === selectedPlanId);
  const currentPricing = currentPlan?.pricing.find(p => p.ageRange === selectedAge);
  const currentPremium = currentPricing ? (currentPricing as any)[selectedCategory] : 0;

  // Create submission
  const handleSubmitEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your Full Name and Mobile Number.');
      return;
    }

    const newEstimateRecord = {
      id: `est-${Date.now()}`,
      fullName,
      phone,
      planName: currentPlan?.name,
      coverAmount: currentPlan?.coverAmount,
      ageRange: selectedAge,
      categoryLabel: categories.find(c => c.key === selectedCategory)?.label,
      premium: currentPremium,
      date: new Date().toLocaleDateString('en-ZA')
    };

    const updated = [newEstimateRecord, ...estimates];
    setEstimates(updated);
    localStorage.setItem('dignify_policy_estimates', JSON.stringify(updated));
    setIsModalOpen(true);
  };

  useEffect(() => {
    const saved = localStorage.getItem('dignify_policy_estimates');
    if (saved) {
      try {
        setEstimates(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const getWhatsAppLink = () => {
    const categoryLabel = categories.find(c => c.key === selectedCategory)?.label;
    
    let text = `Hello Dignify Funeral Solutions,\n\nI am interested in starting a funeral policy. Here is my estimated premium:\n\n`;
    text += `*Selected Plan:* ${currentPlan?.name} (R${currentPlan?.coverAmount.toLocaleString()} Cover)\n`;
    text += `*Age Category:* ${selectedAge} Years\n`;
    text += `*Coverage:* ${categoryLabel}\n`;
    text += `*Monthly Premium:* R${currentPremium}\n\n`;
    text += `*My Information:*\n`;
    text += `Name: ${fullName}\n`;
    text += `Phone: ${phone}\n`;
    text += `\nPlease guide me on the next steps to finalize my application.`;

    return `https://wa.me/27730278136?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="calculator-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] text-sm font-extrabold uppercase tracking-[0.2em] block mb-4">Premium Estimator</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Calculate Your Monthly Cover
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Use our quick tool to find the perfect plan for you and your family. Select your age and coverage needs for an instant monthly premium estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-8 bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmitEstimate} className="flex flex-col gap-10">
              
              {/* Step 1: Age Range */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                  Select Your Age Range
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(['18-64', '65-74', '75-84'] as const).map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setSelectedAge(range)}
                      className={`p-5 rounded-2xl border-2 font-bold transition-all text-center ${
                        selectedAge === range 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                          : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
                      }`}
                    >
                      {range} Years
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Policy Plan */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                  Choose Policy Plan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {FUNERAL_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-5 rounded-2xl border-2 text-left transition-all ${
                        selectedPlanId === plan.id 
                          ? 'bg-white border-blue-600 shadow-lg ring-1 ring-blue-600/10' 
                          : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
                      }`}
                    >
                      <span className={`text-[10px] uppercase tracking-widest font-black mb-1 block ${selectedPlanId === plan.id ? 'text-blue-600' : 'text-gray-400'}`}>
                        {plan.name}
                      </span>
                      <span className="text-lg font-bold text-gray-900 block">R{plan.coverAmount.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Coverage Category */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</span>
                  Who are you covering?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`p-4 rounded-xl border-2 font-bold transition-all text-xs flex flex-col items-center gap-2 text-center h-full ${
                        selectedCategory === cat.key 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                          : 'bg-white border-gray-100 text-gray-500 hover:border-blue-300'
                      }`}
                    >
                      <div className={selectedCategory === cat.key ? 'text-white' : 'text-blue-500'}>{cat.icon}</div>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full text-sm font-semibold px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full text-sm font-semibold px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all text-lg flex items-center justify-center gap-3 mt-4"
                >
                  <CalcIcon className="w-6 h-6" />
                  Request Official Quote
                </button>
              </div>
            </form>
          </div>

          {/* Right: Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">Your Estimate</span>
                    <h4 className="text-2xl font-serif font-bold">Monthly Bill</h4>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-blue-500" />
                </div>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Policy Plan:</span>
                    <span className="font-bold">{currentPlan?.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Cover Amount:</span>
                    <span className="font-bold">R{currentPlan?.coverAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Age Range:</span>
                    <span className="font-bold">{selectedAge} Years</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-white/5 pt-5 mt-5">
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">Monthly Premium</span>
                    <span className="text-4xl font-black text-white">R{currentPremium}</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    This is an estimate. Final premiums are determined after full application review. Fixed for first 12 months.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            </div>

            {/* Past Estimates */}
            {estimates.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-6 flex items-center justify-between">
                  Recent Estimates
                  <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full">{estimates.length}</span>
                </h4>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {estimates.map((est) => (
                    <div key={est.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:bg-blue-50 transition-colors">
                      <div>
                        <span className="text-[10px] text-gray-400 block mb-1">{est.date}</span>
                        <span className="text-xs font-bold text-gray-900 block truncate max-w-[120px]">{est.fullName}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black text-blue-600 block">R{est.premium}</span>
                        <span className="text-[9px] text-gray-400">{est.planName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#1E40AF] p-10 text-center text-white relative">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-2">Estimate Ready</h3>
              <p className="text-blue-100 text-sm opacity-80">Reference: #{Date.now().toString().substring(8)}</p>
            </div>
            
            <div className="p-10 space-y-6">
              <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Monthly Premium</span>
                <span className="text-2xl font-black text-gray-900">R{currentPremium}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Plan</span>
                <span className="font-bold text-gray-900">{currentPlan?.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Monthly Cover</span>
                <span className="font-bold text-gray-900">R{currentPlan?.coverAmount.toLocaleString()}</span>
              </div>

              <div className="pt-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-200"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Send to WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full text-gray-400 font-bold text-sm py-4 mt-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
