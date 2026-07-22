import React from 'react';
import { motion } from 'motion/react';
import { Zap, Infinity as InfinityIcon, ShieldCheck, Headphones, Lock, Wrench, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      title: 'Lightning Fast',
      tagline: 'Up to 1,000 Mbps Symmetrical',
      desc: 'Experience zero-lag gaming, buffer-free 4K/8K streaming, and instant large file uploads with symmetrical speeds.',
      icon: Zap,
      accent: 'from-[#0EA5E9] to-[#2563EB]',
    },
    {
      title: 'Unlimited Data',
      tagline: 'Zero Caps, Zero Throttling',
      desc: 'Stream, download, and game as much as you want without worrying about monthly data limits or overage charges.',
      icon: InfinityIcon,
      accent: 'from-[#2563EB] to-[#38BDF8]',
    },
    {
      title: 'Affordable Pricing',
      tagline: 'Transparent & Price Locked',
      desc: 'No hidden equipment rental fees, no annual contracts, and no unexpected rate hikes. Clear upfront pricing.',
      icon: ShieldCheck,
      accent: 'from-[#38BDF8] to-[#0EA5E9]',
    },
    {
      title: '24/7 Support',
      tagline: 'Dedicated Local Experts',
      desc: 'Our network engineers and customer care agents are available around the clock to assist you with any questions.',
      icon: Headphones,
      accent: 'from-[#0EA5E9] to-[#22C55E]',
    },
    {
      title: 'Secure Network',
      tagline: 'Enterprise Cyber Protection',
      desc: 'Built-in automated DDoS defense and WPA3 security protocols keep your smart devices and family safe online.',
      icon: Lock,
      accent: 'from-[#22C55E] to-[#2563EB]',
    },
    {
      title: 'Easy Installation',
      tagline: 'Next-Day Professional Setup',
      desc: 'Our certified technicians install optical terminal gear and optimize your Wi-Fi 6 coverage in under an hour.',
      icon: Wrench,
      accent: 'from-[#2563EB] to-[#0EA5E9]',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4" />
            <span>Why Area Internet Stands Out</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Engineered For Next-Level <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Speed, Stability & Simplicity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600"
          >
            Everything you need for modern remote work, 4K streaming, multi-device households, and competitive gaming.
          </motion.p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${feat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="space-y-4">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0EA5E9]">
                      {feat.tagline}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mt-1 group-hover:text-[#0EA5E9] transition-colors">
                      {feat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
