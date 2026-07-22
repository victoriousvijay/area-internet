import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, CheckCircle2, Zap, ArrowRight, Activity, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZip?: string;
  onBookNow: (zip: string) => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  initialZip = '',
  onBookNow,
}) => {
  const [zip, setZip] = useState(initialZip);
  const [address, setAddress] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<{ available: boolean; message: string; speeds: string[] } | null>(null);

  useEffect(() => {
    if (initialZip) {
      setZip(initialZip);
      runCheck(initialZip);
    }
  }, [initialZip]);

  const runCheck = (zipVal: string) => {
    if (!zipVal || zipVal.trim().length < 2) return;
    setIsSearching(true);
    setResult(null);

    setTimeout(() => {
      setIsSearching(false);
      setResult({
        available: true,
        message: `Great news! High-Speed Fiber Internet up to 1 Gbps is fully active in ${zipVal}!`,
        speeds: ['100 Mbps Basic', '300 Mbps Standard', '1,000 Mbps Gigabit'],
      });

      // Launch celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0EA5E9', '#2563EB', '#38BDF8', '#22C55E'],
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCheck(zip);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg my-auto rounded-[24px] sm:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-b from-[#0EA5E9] via-[#2563EB] to-slate-200 shadow-2xl"
        >
          <div className="bg-white rounded-[22px] sm:rounded-[23px] p-4 sm:p-7 relative max-h-[88vh] overflow-y-auto space-y-4 sm:space-y-5">
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] text-[11px] sm:text-xs font-bold mb-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Instant Area Coverage Check</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Is Fiber Available At Your Door?
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                  ZIP / Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#0EA5E9]" />
                  <input
                    type="text"
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP, State, or District"
                    className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider">
                  Street Address (Optional)
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 123 Main Street, Apt 4"
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0EA5E9] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href="tel:18666544005"
                  className="py-3 px-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>Call Now: +1-866-654-4005</span>
                </a>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] hover:from-[#38BDF8] hover:to-[#0EA5E9] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <span>Verify Coverage</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results Box */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Fiber Internet Available!</h4>
                    <p className="text-xs text-slate-600 mt-1">{result.message}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-200/60">
                  <a
                    href="tel:18666544005"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#16A34A] text-white text-xs sm:text-sm font-extrabold hover:bg-[#15803D] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Phone className="w-4 h-4 fill-current animate-pulse" />
                    <span>Call Now: +1-866-654-4005 to Order Instantly</span>
                  </a>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
