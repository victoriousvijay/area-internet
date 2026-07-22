import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, ShieldCheck, Zap, CheckCircle2, Wifi, Clock } from 'lucide-react';
import { Plan } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: Plan | null;
  initialZip?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  if (!isOpen) return null;

  const planName = selectedPlan?.name || 'High-Speed Fiber Internet';
  const planSpeed = selectedPlan?.speed || '1000 Mbps';
  const planPrice = selectedPlan?.price || 59.99;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg my-auto rounded-[24px] sm:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-b from-[#0EA5E9] via-[#2563EB] to-slate-200 shadow-2xl"
        >
          <div className="bg-white rounded-[22px] sm:rounded-[23px] p-5 sm:p-8 relative max-h-[88vh] overflow-y-auto space-y-5">
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/15 text-[#16A34A] text-xs font-bold mb-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Instant Phone Setup & Order</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Call to Activate Your Internet
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Zero waiting time. Talk directly to our setup specialist now.
              </p>
            </div>

            {/* Plan Card Summary */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">{planName}</h4>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0EA5E9] mt-0.5">
                    <Wifi className="w-3.5 h-3.5" />
                    <span>{planSpeed} Download & Upload</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-medium">Starting at</span>
                  <div className="font-heading text-2xl font-bold text-slate-900">${planPrice}<span className="text-xs text-slate-500 font-normal">/mo</span></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Free Wi-Fi 6 Router</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Zero Contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>

            {/* Primary Call Action */}
            <div className="space-y-3 text-center">
              <a
                href="tel:18666544005"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.01] active:scale-100"
              >
                <Phone className="w-6 h-6 fill-current animate-pulse" />
                <span>Call Now: +1-866-654-4005</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-[#0EA5E9]" />
                <span>Available 24/7 • Instant Call Connect</span>
              </div>
            </div>

            {/* Bottom Guarantee Note */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5 text-slate-600 text-xs">
              <ShieldCheck className="w-5 h-5 text-[#22C55E] shrink-0" />
              <span>
                Call our direct line at <strong>+1-866-654-4005</strong> for quick address check, instant plan confirmation, and same-day installation scheduling!
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
