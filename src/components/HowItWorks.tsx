import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Wifi } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Plan',
      desc: 'Select from 100 Mbps, 300 Mbps, or 1 Gbps Gigabit plans with transparent pricing and zero annual contracts.',
      icon: MapPin,
    },
    {
      step: '02',
      title: 'Book Free Installation',
      desc: 'Pick a convenient 2-hour window. Our certified technician will set up your optical terminal & Wi-Fi 6 router.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Enjoy Gigabit Internet',
      desc: 'Connect all your smart TVs, gaming consoles, laptops, and phones to blazing-fast fiber connectivity immediately.',
      icon: Wifi,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <span>Seamless Onboarding</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            How Simple It Is To Get <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Connected in 3 Easy Steps.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            From availability check to blazing fast Wi-Fi in under 24 hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#38BDF8] -translate-y-6 z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-2 shadow-sm hover:shadow-xl"
              >
                {/* Step Circle Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0EA5E9] to-[#2563EB] p-0.5 shadow-md mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-slate-50 rounded-[14px] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#0EA5E9]" />
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-[#0EA5E9] uppercase tracking-widest mb-1">
                  STEP {item.step}
                </span>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
