import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Info, Sparkles, Phone, MessageSquare, ArrowRight, CheckCircle2, DollarSign, RefreshCw } from 'lucide-react';

type AgeRange = '18–64 Years' | '65–74 Years' | '75–84 Years';
type PolicyPlan = 'After Tears Plan' | 'Grocery Plan' | 'Family Plan' | 'Extended Family Plan';
type CoverAmount = 'R10,000' | 'R15,000' | 'R20,000' | 'R30,000' | 'R50,000';

export default function Calculator() {
  // Calculator inputs
  const [ageRange, setAgeRange] = useState<AgeRange>('18–64 Years');
  const [policyPlan, setPolicyPlan] = useState<PolicyPlan>('Family Plan');
  const [coverAmount, setCoverAmount] = useState<CoverAmount>('R20,000');

  // Calculation output state
  const [calculatedPremium, setCalculatedPremium] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  // Apply Now modal / details state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [isAppliedSuccessfully, setIsAppliedSuccessfully] = useState<boolean>(false);

  // Constants & Multipliers for pricing formula
  const getBasePremium = (plan: PolicyPlan): number => {
    switch (plan) {
      case 'After Tears Plan': return 114;
      case 'Grocery Plan': return 114;
      case 'Family Plan': return 198;
      case 'Extended Family Plan': return 394;
      default: return 198;
    }
  };

  const getAgeMultiplier = (age: AgeRange): number => {
    switch (age) {
      case '18–64 Years': return 1.0;
      case '65–74 Years': return 1.45;
      case '75–84 Years': return 1.85;
      default: return 1.0;
    }
  };

  const getCoverMultiplier = (cover: CoverAmount): number => {
    switch (cover) {
      case 'R10,000': return 1.0;
      case 'R15,000': return 1.35;
      case 'R20,000': return 1.65;
      case 'R30,000': return 2.25;
      case 'R50,000': return 3.20;
      default: return 1.65;
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setCalculatedPremium(null);

    // Simulate a high-end active processing response
    setTimeout(() => {
      const base = getBasePremium(policyPlan);
      const ageMult = getAgeMultiplier(ageRange);
      const coverMult = getCoverMultiplier(coverAmount);

      // Rounded premium
      const total = Math.round(base * ageMult * coverMult);
      setCalculatedPremium(total);
      setIsCalculating(false);
    }, 450);
  };

  const getWhatsAppMsg = () => {
    let text = `Hello Dignify Funeral Solutions! 🌟\n\nI calculated a live funeral cover quote on your website and would like to apply:\n\n`;
    text += `*Age Range:* ${ageRange}\n`;
    text += `*Policy Plan:* ${policyPlan}\n`;
    text += `*Cover Amount:* ${coverAmount}\n`;
    if (calculatedPremium) {
      text += `*Estimated Monthly Premium:* R${calculatedPremium}/month\n`;
    }
    text += `\nPlease contact me back to initiate my registration. Thank you!`;
    return `https://wa.me/27730278136?text=${encodeURIComponent(text)}`;
  };

  const handleApplySubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Please fill out all required details.');
      return;
    }

    setIsAppliedSuccessfully(true);

    // After brief delay, redirect to WhatsApp precomputed
    setTimeout(() => {
      const finalMsg = `Hello Dignify Funeral Solutions! 📝\n\nI would like to apply for funeral cover under these details:\n\n`;
      const details = `*Name:* ${clientName}\n*Phone:* ${clientPhone}\n*Plan:* ${policyPlan}\n*Age Range:* ${ageRange}\n*Cover:* ${coverAmount}\n*Premium:* R${calculatedPremium}/month\n\nPlease finalize my application.`;
      
      const urgentWhatsAppUrl = `https://wa.me/27730278136?text=${encodeURIComponent(finalMsg + details)}`;
      window.open(urgentWhatsAppUrl, '_blank');
      
      // Reset states
      setIsApplyModalOpen(false);
      setIsAppliedSuccessfully(false);
      setClientName('');
      setClientPhone('');
    }, 1500);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Dynamic Ambient Background Vector elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        
        {/* Descriptive Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.25em] block mb-3">Live Valuation</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Calculate Your Dignity Cover
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Instantly view custom monthly premiums tailored to your family's dynamic needs. Transparent & commitment-free.
          </p>
        </div>

        {/* Core Single Card Premium Calculator Container */}
        <div className="w-full max-w-[560px] bg-white rounded-[2rem] border border-slate-100 shadow-[0_15px_50px_rgba(30,64,175,0.06)] p-6 sm:p-10 transition-all hover:shadow-[0_20px_60px_rgba(30,64,175,0.09)]">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Get Your Funeral Cover Quote
            </h3>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            
            {/* Age Range Choice */}
            <div className="space-y-2">
              <label htmlFor="age-select" className="block text-[11px] font-black uppercase tracking-wider text-gray-500 ml-1">
                Age Range
              </label>
              <div className="relative">
                <select
                  id="age-select"
                  value={ageRange}
                  onChange={(e) => {
                    setAgeRange(e.target.value as AgeRange);
                    // Hide stale premium to trigger clean recalculation
                    setCalculatedPremium(null);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl py-4 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="18–64 Years">18–64 Years</option>
                  <option value="65–74 Years">65–74 Years</option>
                  <option value="75–84 Years">75–84 Years</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-450" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Policy Plan Choice */}
            <div className="space-y-2">
              <label htmlFor="plan-select" className="block text-[11px] font-black uppercase tracking-wider text-gray-500 ml-1">
                Policy Plan
              </label>
              <div className="relative">
                <select
                  id="plan-select"
                  value={policyPlan}
                  onChange={(e) => {
                    setPolicyPlan(e.target.value as PolicyPlan);
                    // Clear stale premium
                    setCalculatedPremium(null);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl py-4 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="After Tears Plan">After Tears Plan</option>
                  <option value="Grocery Plan">Grocery Plan</option>
                  <option value="Family Plan">Family Plan (Main+Spouse+Children)</option>
                  <option value="Extended Family Plan">Extended Family Plan (Up to 9 members)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-450" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cover Amount Choice */}
            <div className="space-y-2">
              <label htmlFor="cover-select" className="block text-[11px] font-black uppercase tracking-wider text-gray-500 ml-1">
                Cover Amount
              </label>
              <div className="relative">
                <select
                  id="cover-select"
                  value={coverAmount}
                  onChange={(e) => {
                    setCoverAmount(e.target.value as CoverAmount);
                    // Clear stale premium
                    setCalculatedPremium(null);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl py-4 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all appearance-none cursor-pointer"
                >
                  <option value="R10,000">R10,000 Cover</option>
                  <option value="R15,000">R15,000 Cover</option>
                  <option value="R20,000">R20,000 Cover</option>
                  <option value="R30,000">R30,000 Cover</option>
                  <option value="R50,000">R50,000 Cover</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-450" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submission / Trigger action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isCalculating}
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-4.5 rounded-2xl shadow-lg shadow-blue-600/10 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-85 text-sm md:text-base"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Analyzing Rates...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-300" />
                    <span>Calculate Premium</span>
                  </>
                )}
              </button>
            </div>

          </form>

          {/* Animating Output Results */}
          <AnimatePresence mode="wait">
            {calculatedPremium !== null && (
              <motion.div
                key="result-block"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-8 pt-8 border-t border-slate-100"
              >
                {/* Result highlight card */}
                <div className="bg-[#1E40AF] text-white rounded-3xl p-6 relative overflow-hidden shadow-xl shadow-blue-600/10">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                      <div>
                        <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">
                          Monthly Premium
                        </span>
                        <h4 className="text-3xl font-black tracking-tight text-white flex items-baseline">
                          R{calculatedPremium}
                          <span className="text-xs font-semibold text-blue-100 ml-1.5 opacity-80">/month</span>
                        </h4>
                      </div>
                      <span className="bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Best Deal
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                        <span className="text-blue-100 font-semibold truncate text-[11px]">Cover Included</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                        <span className="text-blue-100 font-semibold truncate text-[11px]">Fast Claims</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                        <span className="text-blue-100 font-semibold truncate text-[11px]">Family Protection</span>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Background flare */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                </div>

                {/* Direct Quote Application & Contact actions */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="flex-1 bg-slate-900 override:bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-center shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </button>

                  <a
                    href={getWhatsAppMsg()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 rounded-xl text-center shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Trust support advisory notice */}
                <div className="mt-5 flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-500 leading-normal">
                    Calculated premiums are fully compliant estimation guides based on official schedules. The policy includes child-tiered cover guidelines. No hidden sign-up charges.
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Modern Dialog Modal to collect basic Details for Apply Now */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] shadow-2xl max-w-md w-full overflow-hidden text-gray-800"
            >
              {/* Cover Banner */}
              <div className="bg-[#1E40AF] p-8 text-center text-white relative">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-black text-sm transition-colors cursor-pointer focus:outline-none"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold">Policy Registration</h3>
                <p className="text-blue-100/80 text-xs mt-1">Provide your name & contact for official application</p>
              </div>

              {/* Application Form details inside layout */}
              <form onSubmit={handleApplySubmission} className="p-8 space-y-5">
                
                {isAppliedSuccessfully ? (
                  <div className="text-center py-6 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                    <h4 className="text-lg font-bold text-gray-900">Application Initialized!</h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                      Saving your premium configuration and redirecting to our expert Queenstown agent on WhatsApp to finalize your document...
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1.5">
                      <label htmlFor="client-name" className="block text-[10px] font-black uppercase tracking-wider text-gray-500 ml-1">
                        Full Name *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Siyabonga Gwala"
                        className="w-full text-sm font-semibold px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="client-phone" className="block text-[10px] font-black uppercase tracking-wider text-gray-500 ml-1">
                        Contact / Mobile Number *
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="e.g. 073 123 4567"
                        className="w-full text-sm font-semibold px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Short quote summary indicator */}
                    <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-blue-600 block leading-tight">
                          {policyPlan}
                        </span>
                        <span className="text-gray-500 text-[10px]">{coverAmount} Cover ({ageRange})</span>
                      </div>
                      <span className="font-extrabold text-sm text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-100 shadow-sm">
                        R{calculatedPremium}/mo
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-center shadow-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      <span>Submit & Finalize Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
