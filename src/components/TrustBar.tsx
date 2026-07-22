import React from 'react';
import { Wifi, ShieldCheck, Zap, Cpu, Radio, Globe, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { label: 'Gigabit Fiber Optic', icon: Zap },
    { label: '5G Ultra Wideband', icon: Radio },
    { label: '100% Unlimited Data', icon: Globe },
    { label: 'WPA3 Enterprise Security', icon: ShieldCheck },
    { label: 'Sub-2ms Ultra Low Latency', icon: Cpu },
    { label: '24/7 Priority Support', icon: CheckCircle2 },
  ];

  return (
    <section className="py-8 bg-slate-100/90 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
          POWERING NEXT-GENERATION CONNECTIVITY FOR HOMES & ENTERPRISES
        </p>

        {/* Ticker Container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

          <div className="flex items-center justify-around flex-wrap gap-4 sm:gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#0EA5E9] hover:shadow-md transition-all cursor-default group"
                >
                  <Icon className="w-4 h-4 text-[#0EA5E9] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 font-mono tracking-wide">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
