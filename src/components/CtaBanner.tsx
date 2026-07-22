import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight, ShieldCheck, CheckCircle2, MapPin, Phone } from 'lucide-react';

interface CtaBannerProps {
  onCheckAvailabilityClick: (zip?: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onCheckAvailabilityClick }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailabilityClick(zipCode);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Gradient Card */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] border border-blue-400/30 shadow-xl overflow-hidden">
          
          {/* Background Ambient Mesh */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Next-Day Installation Available</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready for Faster, More Reliable <br />
              High-Speed Fiber Internet?
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal max-w-2xl mx-auto">
              Check availability in your area or call our direct order line for instant activation.
            </p>

            {/* Inline ZIP Form & Call Button */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-white/60" />
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Enter ZIP, State, District..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-[#0EA5E9] text-sm font-extrabold hover:bg-[#F8FAFC] transition-all shadow-xl shrink-0 flex items-center justify-center gap-2 hover:scale-105 active:scale-100"
                >
                  <span>Check Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <a
                href="tel:18666544005"
                className="px-8 py-3.5 rounded-2xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm font-extrabold transition-all shadow-xl flex items-center justify-center gap-2.5 hover:scale-105 active:scale-100"
              >
                <Phone className="w-4 h-4 fill-current animate-pulse" />
                <span>Or Call Now: +1-866-654-4005</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Free Wi-Fi 6 Router Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Zero Contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                Price Lock Guarantee
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
