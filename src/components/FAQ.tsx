import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Are there any hidden equipment fees or annual contracts?',
      answer: 'No. Area Internet Providers operates on 100% transparent pricing. Wi-Fi 6 router equipment is included free with our plans, and there are zero mandatory annual contracts. You can pause or cancel your service anytime without penalty.',
      category: 'Billing',
    },
    {
      id: 'faq-2',
      question: 'How fast is installation after I check my availability?',
      answer: 'In most covered areas, express next-day professional installation is available. Our certified technician will arrive within a chosen 2-hour window, install the optical network terminal, configure your Wi-Fi 6 mesh router, and verify gigabit speed.',
      category: 'Installation',
    },
    {
      id: 'faq-3',
      question: 'What makes fiber optic internet faster than traditional cable?',
      answer: 'Cable internet relies on shared coaxial copper wires that slow down during peak neighborhood usage and limit upload speeds. Pure fiber optics use laser light signals to transfer data at symmetrical gigabit speeds (up to 1,000 Mbps download AND upload) with sub-2ms latency.',
      category: 'Technology',
    },
    {
      id: 'faq-4',
      question: 'Are there monthly data caps or internet throttling?',
      answer: 'Never. All Area Internet plans feature 100% unlimited data. We do not throttle speeds during peak hours, nor do we charge data overage fees regardless of how much you stream, game, or download.',
      category: 'Usage',
    },
    {
      id: 'faq-5',
      question: 'Can I use my existing Wi-Fi router or mesh system?',
      answer: 'Yes! While we provide a high-performance Wi-Fi 6 router included with your plan, our optical network terminal is fully compatible with any custom Wi-Fi router, Google Nest, Eero, or Orbi mesh network.',
      category: 'Hardware',
    },
    {
      id: 'faq-6',
      question: 'How does 24/7 technical support work?',
      answer: 'Our network engineers and customer care agents are based locally. You can reach us 24/7 via phone or online chat for instant help without waiting on hold.',
      category: 'Support',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Questions & Answers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about our fiber network, installation, and plans.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-[#0EA5E9] shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-slate-100 border border-slate-200 text-[#0EA5E9] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0EA5E9] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
