import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Sparkles, Wifi } from 'lucide-react';
import { Plan } from '../types';

interface PlansProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Plans: React.FC<PlansProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: Plan[] = [
    {
      id: 'plan-basic',
      name: 'Basic Fiber',
      speed: '100 Mbps',
      uploadSpeed: '100 Mbps',
      priceMonthly: 39.99,
      priceAnnual: 33.99,
      description: 'Perfect for light streaming, web browsing, social media & home office tasks.',
      popular: false,
      features: [
        '100 Mbps Symmetrical Speed',
        'Unlimited Monthly Data',
        'Wi-Fi 5 Gateway Router',
        'Zero Annual Contract',
        'Standard 24/7 Support',
        'Self-Installation Available',
      ],
      ctaText: 'Choose Basic',
    },
    {
      id: 'plan-standard',
      name: 'Standard Fiber',
      speed: '300 Mbps',
      uploadSpeed: '300 Mbps',
      priceMonthly: 59.99,
      priceAnnual: 49.99,
      description: 'Ideal for multi-device 4K streaming, online gaming & working from home.',
      popular: false,
      features: [
        '300 Mbps Symmetrical Speed',
        'Unlimited Monthly Data',
        'Next-Gen Wi-Fi 6 Router Included',
        'Zero Annual Contract',
        'Priority 24/7 Technical Support',
        'Free Professional Installation',
        'Advanced Network Security',
      ],
      ctaText: 'Choose Standard',
    },
    {
      id: 'plan-premium',
      name: 'Gigabit Premium',
      speed: '1,000 Mbps (1 Gbps)',
      uploadSpeed: '1,000 Mbps',
      priceMonthly: 89.99,
      priceAnnual: 74.99,
      description: 'Ultimate power for 8K streaming, multi-player VR gaming & heavy smart homes.',
      popular: true,
      features: [
        '1,000 Mbps Symmetrical Gigabit',
        'Unlimited Monthly Data',
        'Wi-Fi 6E Mesh System Included',
        'Zero Annual Contract & Price Lock',
        'VIP Priority Local Tech Support',
        'Free Express 24-Hour Installation',
        'Total Cyber Shield Protection',
        '2 Free Wi-Fi Extenders',
      ],
      ctaText: 'Get Gigabit Premium',
    },
  ];

  return (
    <section id="plans" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 fill-current" />
            <span>Transparent Pricing & Plans</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Simple Plans with <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Zero Hidden Fees or Surprise Hikes.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Choose the speed that fits your home. Upgrade, downgrade, or cancel anytime with zero penalties.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Lock</span>
              <span className="px-2 py-0.5 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-mono font-bold">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Container - Horizontal scroll on mobile, 3-column grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-6 lg:pb-0 px-2 lg:px-0 -mx-4 lg:mx-0 px-4 sm:px-6">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl p-1 flex flex-col justify-between transition-all duration-300 shrink-0 w-[85vw] max-w-[340px] lg:max-w-none lg:w-auto snap-center ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0EA5E9] via-[#2563EB] to-[#38BDF8] shadow-xl lg:-translate-y-2'
                    : 'bg-slate-200 hover:bg-slate-300'
                }`}
              >
                {/* Internal Container */}
                <div className="w-full h-full rounded-[23px] bg-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Popular Tag */}
                  {plan.popular && (
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" />
                      <span>MOST POPULAR</span>
                    </div>
                  )}

                  {/* Top Header */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h3>

                    {/* Speed Badge */}
                    <div className="inline-flex items-center gap-1.5 my-3 px-3 py-1 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-mono font-bold">
                      <Wifi className="w-3.5 h-3.5" />
                      <span>{plan.speed} Download & Upload</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-1 py-4 border-y border-slate-100">
                      <span className="text-xs font-bold text-slate-500 align-top">$</span>
                      <span className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                        {price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-3 my-6">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="p-1 rounded-full bg-[#22C55E]/15 text-[#22C55E] shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectPlan(plan)}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] hover:from-[#38BDF8] hover:to-[#0EA5E9] text-white shadow-md'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <Zap className="w-4 h-4 fill-current" />
                      <span>{plan.ctaText}</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-500 mt-2.5">
                      30-Day Money-Back Guarantee • Free Installation
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
