import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Phone, CheckCircle2, ShieldCheck, Zap, Clock } from 'lucide-react';

interface TermsPageProps {
  onBackToHome: () => void;
  onNavigateToPrivacy: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBackToHome, onNavigateToPrivacy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 font-sans flex flex-col">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2.5 text-sm font-bold text-slate-300 hover:text-white transition-colors group"
          >
            <div className="p-2 rounded-xl bg-slate-800 group-hover:bg-[#0EA5E9] transition-colors">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            <span>Back to Main Website</span>
          </button>

          <a
            href="tel:18666544005"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md"
          >
            <Phone className="w-4 h-4 fill-current animate-pulse" />
            <span>Call Support: +1-866-654-4005</span>
          </a>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        {/* Page Banner Header */}
        <div className="mb-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-900 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#60A5FA] text-xs font-mono font-bold">
              <FileText className="w-4 h-4" />
              <span>Customer Service Agreement</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms of Service
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Terms and conditions governing fiber broadband internet access, pricing guarantees, equipment installation, and service levels provided by Area Internet Providers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span>Last Updated: January 2026</span>
              <span>•</span>
              <span>Version: 2.4</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, executing an area coverage check, or calling our toll-free support line at <strong>+1-866-654-4005</strong> to order broadband services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">2. Broadband Speeds & Coverage</h2>
            <p>
              Speed tiers (e.g. 300 Mbps, 500 Mbps, 1 Gbps) represent maximum achievable speeds under optimal wired conditions. Actual throughput may vary depending on local node traffic, household device limits, and Wi-Fi environment.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center space-y-1">
                <div className="font-mono font-bold text-white text-lg">99.9%</div>
                <div className="text-xs text-slate-400">Target Uptime SLA</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center space-y-1">
                <div className="font-mono font-bold text-white text-lg">0 GB</div>
                <div className="text-xs text-slate-400">Data Caps / Unlimited</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center space-y-1">
                <div className="font-mono font-bold text-white text-lg">Wi-Fi 6</div>
                <div className="text-xs text-slate-400">Included Equipment</div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">3. Instant Phone Activation</h2>
            <p>
              Orders can be initialized and scheduled directly over the phone. Callers receive instant address confirmation, transparent plan breakdown, zero hidden fee disclosures, and scheduling for professional technician installation.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Direct Phone Line: +1-866-654-4005
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/20 space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#22C55E]" />
              4. 30-Day Satisfaction Guarantee
            </h2>
            <p className="text-slate-300">
              New residential internet connections qualify for our 30-day money-back satisfaction guarantee. If service performance fails to meet advertised specifications within 30 days of activation, you may cancel without early termination penalties.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">5. Transparent Billing Policy</h2>
            <p>
              Prices shown on our plans represent monthly rates before applicable local taxes and regulatory surcharges. Equipment rental for standard Wi-Fi 6 routers is included at zero extra monthly cost.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">6. Customer Support Hotline</h2>
            <p>
              Our phone line operates 24/7 for technical troubleshooting, installation scheduling, and account inquiries. Call <strong className="text-white">+1-866-654-4005</strong> at any time.
            </p>
          </section>

          {/* Switch to Privacy link */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Want to review our privacy commitments?
            </p>
            <button
              onClick={onNavigateToPrivacy}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center gap-2 border border-slate-700"
            >
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Read Privacy Policy</span>
            </button>
          </div>

        </div>

        {/* Bottom Call CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl">Ready to Order High-Speed Fiber?</h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1">Call +1-866-654-4005 for same-day setup booking.</p>
          </div>

          <a
            href="tel:18666544005"
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-sm sm:text-base hover:bg-slate-100 transition-all flex items-center gap-2.5 shrink-0 shadow-lg"
          >
            <Phone className="w-5 h-5 text-[#16A34A] fill-current animate-pulse" />
            <span>Call Now: +1-866-654-4005</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Area Internet Providers. All rights reserved.</p>
      </footer>
    </div>
  );
};
