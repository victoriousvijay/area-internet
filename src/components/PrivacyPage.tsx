import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Phone, CheckCircle2, FileText, Mail, MapPin } from 'lucide-react';

interface PrivacyPageProps {
  onBackToHome: () => void;
  onNavigateToTerms: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBackToHome, onNavigateToTerms }) => {
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-[#38BDF8] text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Legal Document</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              At Area Internet Providers, we are committed to safeguarding your personal data and maintaining absolute transparency regarding our broadband services and phone setups.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span>Last Updated: January 2026</span>
              <span>•</span>
              <span>Effective Date: Immediate</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[#38BDF8]" />
              1. Information We Collect
            </h2>
            <p>
              When you browse our platform, use our area coverage checker, or dial our customer service desk, we gather limited operational information required to serve high-speed internet to your location.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
              <li><strong className="text-slate-200">Location Inquiries:</strong> ZIP / Postal code, state, or district entered during area coverage checks.</li>
              <li><strong className="text-slate-200">Phone Communications:</strong> Telephone numbers and inquiry specifics when calling our toll-free line at +1-866-654-4005.</li>
              <li><strong className="text-slate-200">Technical Logs:</strong> Standard browser type, network latency logs, and IP address for node performance optimization.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">2. How We Use Your Information</h2>
            <p>
              The information we collect is strictly utilized to provide reliable fiber broadband connections and facilitate immediate phone-based activation.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">Coverage Verification</div>
                <p className="text-xs text-slate-400">Verifying local optical node capacity and line distance to your address.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1">
                <div className="font-bold text-white text-sm">Phone Setup Support</div>
                <p className="text-xs text-slate-400">Connecting you directly with a representative when calling +1-866-654-4005.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">3. Phone Call Communications & Consent</h2>
            <p>
              By calling our toll-free customer line at <strong className="text-white">+1-866-654-4005</strong>, you consent to converse with our authorized setup agents. Call recordings may be maintained for quality assurance, training, and verifying order accuracy.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              4. Zero-Data-Selling Guarantee
            </h2>
            <p className="text-slate-300">
              We strictly enforce a absolute <strong>zero-data-selling pledge</strong>. We never sell, rent, trade, or monetize your location, phone number, or internet inquiries with third-party advertising companies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">5. Security Standards</h2>
            <p>
              We enforce 256-bit SSL/TLS encryption protocols across all web sessions to safeguard your connection tests from unauthorized interception or tampering.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-bold text-white text-lg sm:text-xl">6. Contact Our Privacy Officer</h2>
            <p>
              For questions regarding our privacy practices or to request data deletion, contact our support team at <strong className="text-white">+1-866-654-4005</strong>.
            </p>
          </section>

          {/* Switch to Terms link */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Looking for our customer agreement?
            </p>
            <button
              onClick={onNavigateToTerms}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center gap-2 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-[#38BDF8]" />
              <span>Read Terms of Service</span>
            </button>
          </div>

        </div>

        {/* Bottom Call CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl">Have Questions About Coverage?</h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1">Speak directly with our setup specialist 24/7.</p>
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
