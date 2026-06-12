import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Facebook } from 'lucide-react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and phone number to help us context your query.');
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div id="contact-header" className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#1E40AF] text-sm font-extrabold uppercase tracking-[0.2em] block mb-4">Connect With Us</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Supporting You <span className="text-blue-600 italic">Every Step</span>
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            For personal consultations or assistance with your funeral policy, our team is here to help. We are dedicated to providing compassionate service to the Queenstown community.
          </p>
        </div>

        <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: Contact Details Cards */}
          <div id="contact-details-panel" className="lg:col-span-5 flex flex-col gap-6">
            
            <h3 className="font-serif text-2xl font-bold text-gray-950 mb-4">Get In Touch</h3>

            {/* Telephone */}
            <a
              href="tel:0458381171"
              className="flex items-center gap-6 p-6 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest block mb-1">Landline Office</span>
                <span className="font-serif font-bold text-xl text-gray-900 block group-hover:text-blue-600 transition-colors">045 838 1171</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27730278136"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-200 rounded-[2rem] transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest block mb-1">WhatsApp Instant Desk</span>
                <span className="font-serif font-bold text-xl text-gray-900 block group-hover:text-emerald-600 transition-colors">073 027 8136</span>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100095023537215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 bg-blue-50/40 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 rounded-[2rem] transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest block mb-1">Facebook Community</span>
                <span className="font-serif font-bold text-xl text-gray-900 block group-hover:text-blue-600 transition-colors">Our Official Page</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:dignifyfuneralsolutions@gmail.com"
              className="flex items-center gap-6 p-6 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest block mb-1">Email Queries</span>
                <span className="font-sans font-bold text-sm text-gray-900 block group-hover:text-blue-600 transition-colors break-all">
                  dignifyfuneralsolutions@gmail.com
                </span>
              </div>
            </a>

            {/* Physical Location info */}
            <div className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 rounded-[2rem] shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest block mb-1">Our Office</span>
                <span className="font-serif font-bold text-lg text-gray-900 block">
                  Queenstown, Eastern Cape
                </span>
                <span className="text-[10px] text-gray-400 block mt-1">South Africa, 5319</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact query form & Maps representation */}
          <div id="contact-form-panel" className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex-grow">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send an Inquiry</h3>
              
              <form id="contact-inquiry-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-sm font-semibold px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      placeholder="e.g. Siyabonga Gwala"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-sm font-semibold px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                      placeholder="e.g. 073 123 4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message / Request</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm font-semibold px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    placeholder="Tell us how we can help you today..."
                  />
                </div>

                {isSuccess && (
                  <div className="p-5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <p className="text-sm font-medium">
                      <strong>Submitted!</strong> Our counselors will contact you shortly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSuccess}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 w-full"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
