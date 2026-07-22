import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wifi, ShieldCheck, Zap, Users, Server, Check, Award } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: 'Fiber-Optic Network',
      desc: '100% pure glass fiber optic cabling directly to your doorstep for maximum speed and rock-solid reliability.',
      stats: '1,000 Mbps Symmetrical',
      icon: Zap,
    },
    {
      title: 'Local Support Team',
      desc: 'Our customer care and network operations center are 100% locally based and available 24 hours a day, 7 days a week.',
      stats: '< 15 Sec Avg Response',
      icon: Users,
    },
    {
      title: 'Transparent Pricing',
      desc: 'No surprise price hikes, no hidden equipment rental fees, and no annual contracts. What you see is what you pay.',
      stats: 'Guaranteed Price Lock',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Radial Background Accent */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>About Area Internet Providers</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Reinventing How Your Community <br />
              <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
                Connects & Thrives.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Area Internet Providers delivers reliable internet solutions with high-speed connectivity, affordable pricing, and customer-first support. We built our high-capacity fiber backbone to remove data caps, end lagging video calls, and provide true gigabit freedom.
            </p>

            {/* Interactive Feature List */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-50 border-[#0EA5E9] shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-[#0EA5E9]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between">
                          <h3 className="font-heading text-base font-bold text-slate-900">
                            {pillar.title}
                          </h3>
                          <span className="text-[10px] font-mono font-bold text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-0.5 rounded-md border border-[#0EA5E9]/20">
                            {pillar.stats}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Side: Interactive Visual Architecture Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#0EA5E9]/20 via-[#2563EB]/10 to-slate-200 border border-slate-200 shadow-xl">
              <div className="rounded-[22px] bg-slate-900 p-6 sm:p-8 space-y-6 text-white">
                
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">Direct Fiber Architecture</h3>
                    <p className="text-xs text-slate-400">High Density Fiber Backbone vs Cable</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/15 text-[#22C55E] text-xs font-mono font-semibold border border-[#22C55E]/30">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                    99.9% Uptime
                  </span>
                </div>

                {/* Architecture Visual Diagram */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Item 1 */}
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/20 flex items-center justify-center text-[#38BDF8]">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Primary Optical Hub</p>
                        <p className="text-[10px] text-slate-400">Redundant 100Gbps Backhaul</p>
                      </div>
                    </div>
                    <span className="text-[#22C55E] font-bold">ACTIVE</span>
                  </div>

                  {/* Connector Line */}
                  <div className="pl-8 flex items-center gap-2 text-[#0EA5E9]">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#0EA5E9] to-[#2563EB] ml-3" />
                    <span className="text-[10px] text-slate-400 font-sans">0.4ms Optical Latency</span>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 flex items-center justify-center text-[#38BDF8]">
                        <Wifi className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Your Home Wi-Fi 6 Mesh</p>
                        <p className="text-[10px] text-slate-400">Symmetrical Gigabit Wireless</p>
                      </div>
                    </div>
                    <span className="text-[#38BDF8] font-bold">CONNECTED</span>
                  </div>
                </div>

                {/* Quick Benefit Checklist */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Free Wi-Fi Router</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Free Installation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>No Data Limits</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
