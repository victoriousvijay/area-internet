import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Menu, X, ArrowRight, ShieldCheck, MapPin, Zap, Phone, ChevronDown, Building2 } from 'lucide-react';

interface NavbarProps {
  onCheckAvailabilityClick: () => void;
  onSelectPlanClick?: (planName?: string) => void;
  onNavigateToFrontier?: () => void;
  onNavigateToSpectrum?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckAvailabilityClick, onNavigateToFrontier, onNavigateToSpectrum }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [providersOpen, setProvidersOpen] = useState(false);
  const providersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!providersOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (providersRef.current && !providersRef.current.contains(e.target as Node)) setProvidersOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProvidersOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [providersOpen]);

  const goToFrontier = () => {
    setProvidersOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToFrontier) onNavigateToFrontier();
    else window.location.pathname = '/fiber-internet';
  };

  const goToSpectrum = () => {
    setProvidersOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateToSpectrum) onNavigateToSpectrum();
    else window.location.pathname = '/spectrum-business';
  };

  const providerLinks = [
    { name: 'Fiber Internet', desc: 'Symmetrical fiber up to 5 Gig', href: '/fiber-internet', icon: Zap, onClick: goToFrontier },
    { name: 'Spectrum Business', desc: 'Business Internet, Phone & Mobile', href: '/spectrum-business', icon: Building2, onClick: goToSpectrum },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'features', 'plans', 'coverage', 'faq', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Plans', href: '#plans' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Left */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Area Internet Providers Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0EA5E9] to-[#2563EB] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isScrolled ? 'bg-white' : 'bg-[#050816]'}`}>
                <Wifi className="w-5 h-5 text-[#0EA5E9] group-hover:animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg sm:text-xl tracking-tight leading-none flex items-center gap-1 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                AREA <span className="text-[#0EA5E9]">INTERNET</span>
              </span>
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase leading-tight ${isScrolled ? 'text-slate-500' : 'text-[#94A3B8]'}`}>
                PROVIDERS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full backdrop-blur-md ${
            isScrolled ? 'bg-slate-100/80 border border-slate-200' : 'bg-white/10 border border-white/15'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? isScrolled ? 'text-[#0EA5E9] font-bold' : 'text-white font-semibold'
                      : isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className={`absolute inset-0 rounded-full ${
                        isScrolled ? 'bg-[#0EA5E9]/10 border border-[#0EA5E9]/30' : 'bg-[#0EA5E9]/20 border border-[#0EA5E9]/40'
                      }`}
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}

            <div
              ref={providersRef}
              className="relative ml-1"
              onMouseEnter={() => setProvidersOpen(true)}
              onMouseLeave={() => setProvidersOpen(false)}
            >
              <button
                onClick={() => setProvidersOpen(true)}
                aria-haspopup="true"
                aria-expanded={providersOpen}
                className="relative px-3 py-1 text-xs font-extrabold text-white bg-gradient-to-r from-[#FF0037] to-[#D90429] hover:from-[#E2001A] hover:to-[#B00020] rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
              >
                <Zap className="w-3 h-3 fill-current text-yellow-300 animate-pulse" />
                <span>Providers</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${providersOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {providersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full pt-2 w-64"
                  >
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-2" role="menu">
                      {providerLinks.map((p) => {
                        const Icon = p.icon;
                        return (
                          <a
                            key={p.name}
                            href={p.href}
                            role="menuitem"
                            onClick={(e) => {
                              e.preventDefault();
                              p.onClick();
                            }}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 transition-colors group"
                          >
                            <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0EA5E9] to-[#2563EB] text-white flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4" />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-[#0EA5E9]">{p.name}</span>
                              <span className="text-[11px] text-slate-500">{p.desc}</span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:18666544005"
              className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                isScrolled
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                  : 'bg-emerald-500/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5 fill-current animate-pulse text-emerald-500" />
              <span>Call Now: +1-866-654-4005</span>
            </a>

            <button
              onClick={onCheckAvailabilityClick}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] hover:from-[#38BDF8] hover:to-[#0EA5E9] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] ${
                isScrolled
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-white/10 border-white/15 text-white'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0EA5E9]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {/* Highlighted Fiber Internet Banner Button in Mobile Menu Drawer */}
              <button
                onClick={goToFrontier}
                className="w-full p-3.5 text-left rounded-2xl bg-gradient-to-r from-[#FF0037] via-[#E2001A] to-[#B00020] text-white shadow-lg active:scale-[0.98] transition-all flex items-center justify-between interactive group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/30">
                    <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-full text-white text-[10px]">Special Offer</span>
                    </div>
                    <p className="font-heading font-extrabold text-sm tracking-wide text-white mt-0.5">
                      Fiber Internet
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <nav className="flex flex-col space-y-1 pt-1">
                {/* Providers group */}
                <p className="px-4 pt-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Providers</p>
                <button
                  onClick={goToFrontier}
                  className="px-4 py-3 text-sm font-bold rounded-xl text-[#FF0037] bg-red-50/80 hover:bg-red-100 transition-colors flex items-center justify-between w-full text-left border border-red-100"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-current text-[#FF0037]" />
                    <span>Fiber Internet Plans</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-[#FF0037] text-white px-2 py-0.5 rounded-full uppercase">
                    5 Gig Max
                  </span>
                </button>
                <button
                  onClick={goToSpectrum}
                  className="px-4 py-3 text-sm font-bold rounded-xl text-[#0B5FD6] bg-sky-50 hover:bg-sky-100 transition-colors flex items-center justify-between w-full text-left border border-sky-100"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0B5FD6]" />
                    <span>Spectrum Business</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-[#0B5FD6] text-white px-2 py-0.5 rounded-full uppercase">
                    From $65
                  </span>
                </button>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-4 py-2.5 text-sm font-medium rounded-lg text-slate-800 hover:bg-slate-100 hover:text-[#0EA5E9] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href="tel:18666544005"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-extrabold text-white bg-[#22C55E] hover:bg-[#16A34A] rounded-xl shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>Call Now: +1-866-654-4005</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onCheckAvailabilityClick();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <Zap className="w-4 h-4 text-white" />
                  <span>Check Availability in Your Area</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
