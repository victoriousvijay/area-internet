import React from 'react';
import { Wifi, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onCheckAvailabilityClick: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenFrontier?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onCheckAvailabilityClick,
  onOpenPrivacy,
  onOpenTerms,
  onOpenFrontier,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 border-t border-slate-800 relative overflow-hidden">
      
      {/* Contact Bar Above Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid md:grid-cols-3 gap-6">
          
          <a
            href="tel:18666544005"
            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-[#22C55E] transition-all flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white transition-colors">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono uppercase">Call Support Line 24/7</p>
              <p className="text-base font-bold text-white font-mono group-hover:text-[#22C55E]">
                +1-866-654-4005
              </p>
            </div>
          </a>

          <a
            href="mailto:info@areainternetproviders.com"
            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-[#0EA5E9] transition-all flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-[#0EA5E9]/10 text-[#38BDF8] group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono uppercase">Email Support</p>
              <p className="text-base font-bold text-white font-mono group-hover:text-[#38BDF8]">
                info@areainternetproviders.com
              </p>
            </div>
          </a>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0EA5E9]/10 text-[#38BDF8]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-mono uppercase">Network Operations HQ</p>
              <p className="text-sm font-bold text-white">
                1419 Carter St, Metropolis, IL 62960
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0EA5E9] to-[#2563EB] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-[#0EA5E9]" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                AREA <span className="text-[#0EA5E9]">INTERNET</span> PROVIDERS
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Area Internet Providers delivers reliable broadband solutions with high-speed fiber connectivity, affordable transparent pricing, and 24/7 customer-first local support.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onCheckAvailabilityClick}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white text-xs font-bold hover:from-[#38BDF8] hover:to-[#0EA5E9] transition-all shadow-md"
              >
                Check Local Coverage
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li>
                <button
                  onClick={() => onOpenFrontier ? onOpenFrontier() : (window.location.pathname = '/fiber-internet')}
                  className="text-[#FF0037] font-bold hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Fiber Internet</span>
                </button>
              </li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Network Features</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Fiber Plans</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Service Coverage</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Fiber Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300 font-medium">100 Mbps Basic Fiber</span></li>
              <li><span className="text-slate-300 font-medium">300 Mbps Standard Fiber</span></li>
              <li><span className="text-slate-300 font-medium">1 Gbps Gigabit Premium</span></li>
              <li><span className="text-slate-300 font-medium">Business Direct Optical</span></li>
              <li><span className="text-slate-300 font-medium">Wi-Fi 6 Mesh Setup</span></li>
            </ul>
          </div>

          {/* Guarantees */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider font-mono">
              Our Promise
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>99.9% Network Uptime</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Zero Price Hike Lock</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>No Data Limits</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>24/7 Local Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-[11px] leading-relaxed text-slate-400 font-sans">
          <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <strong className="text-slate-200">DISCLAIMER:</strong> We are NOT an official website for any service providers listed on this website. Areainternetproviders.com is an authorized dealer with brands that provides local promotions for Cable & satellite TV and fiber and satellite Internet providers at your area's zip code. The content of this site and its underlying texts, images and videos are for informational purposes only. Though www.areainternetproviders.com strives to keep the content up-to-date, at times it might be out of sync with actual offerings by providers. All logos, brand names, and trademarked words used in this site are owned by the respective owners of the brands www.areainternetproviders.com doesn't have any rights to any of the brand names or logos mentioned over here.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Area Internet Providers. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPrivacy ? onOpenPrivacy() : (window.location.hash = 'privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenTerms ? onOpenTerms() : (window.location.hash = 'terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-[#0EA5E9] hover:text-white transition-colors text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
