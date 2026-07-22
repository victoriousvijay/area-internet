import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CursorGlow } from './CursorGlow';
import {
  Wifi,
  Phone,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Activity,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Globe,
  Clock,
  Layers,
  Award,
  Sparkles,
  MapPin,
  Mail,
  HelpCircle,
  X,
  Check,
  Radio,
  Server
} from 'lucide-react';

interface FrontierPageProps {
  onBackToHome: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export const FrontierPage: React.FC<FrontierPageProps> = ({
  onBackToHome,
  onNavigateToPrivacy,
  onNavigateToTerms
}) => {
  const [activeTab, setActiveTab] = useState<'plans' | 'comparison' | 'features' | 'faq'>('plans');
  const [selectedSpeedIndex, setSelectedSpeedIndex] = useState(1); // Default to 1 Gig
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const fiberPlans = [
    {
      id: 'plan-500',
      name: 'Fiber 500',
      tagline: 'Ideal for Streaming & Smart Homes',
      speed: '500 Mbps',
      uploadSpeed: '500 Mbps (Symmetrical)',
      downloadSpeed: '500 Mbps',
      price: '$29.99',
      period: '/mo',
      popular: false,
      badgeColor: 'border-slate-300 bg-slate-100 text-slate-700',
      features: [
        'Symmetrical 500 Mbps Upload & Download',
        'Wi-Fi 6 Ultrafast Router Included',
        'Unlimited Data with No Monthly Caps',
        'No Annual Service Contract',
        'Connects 1 to 5 Devices Effortlessly',
        '24/7 Priority Fiber Technical Support'
      ]
    },
    {
      id: 'plan-1000',
      name: 'Fiber 1 Gig',
      tagline: 'Most Popular for Gamers & Remote Workers',
      speed: '1000 Mbps',
      uploadSpeed: '1000 Mbps (Symmetrical)',
      downloadSpeed: '1000 Mbps',
      price: '$49.99',
      period: '/mo',
      popular: true,
      badgeColor: 'border-[#FF0037] bg-[#FF0037] text-white',
      features: [
        'Symmetrical 1000 Mbps (1 Gig) Speeds',
        'Next-Gen Wi-Fi 6E System Included',
        'Unlimited Data with Zero Overage Fees',
        'No Annual Service Contract Required',
        'Ultra-Low Latency for Multiplayer Gaming',
        'Smooth 4K/8K Multi-Device Streaming',
        '24/7 Dedicated Support Hotline'
      ]
    },
    {
      id: 'plan-2000',
      name: 'Fiber 2 Gig',
      tagline: 'Pro Power Users & 8K Multi-Streaming',
      speed: '2000 Mbps',
      uploadSpeed: '2000 Mbps (Symmetrical)',
      downloadSpeed: '2000 Mbps',
      price: '$64.99',
      period: '/mo',
      popular: false,
      badgeColor: 'border-slate-300 bg-slate-100 text-slate-700',
      features: [
        'Symmetrical 2000 Mbps (2 Gig) Speeds',
        'Whole-Home Wi-Fi 6E Mesh System Included',
        'Unlimited Data - Zero Throttling',
        'No Annual Contract or Cancel Fees',
        'Ultra-Fast Cloud Backups & Content Creation',
        'Handles 25+ Smart Devices Simultaneously',
        'VIP Express Tech Support'
      ]
    },
    {
      id: 'plan-5000',
      name: 'Fiber 5 Gig',
      tagline: 'Ultimate Next-Gen Speed Technology',
      speed: '5000 Mbps',
      uploadSpeed: '5000 Mbps (Symmetrical)',
      downloadSpeed: '5000 Mbps',
      price: '$89.99',
      period: '/mo',
      popular: false,
      badgeColor: 'border-amber-300 bg-amber-50 text-amber-800',
      features: [
        'Symmetrical 5000 Mbps (5 Gig) Speeds',
        'Ultrafast Wi-Fi 7 / 6E Router Included',
        'Unlimited Data with Unmatched Bandwidth',
        'No Annual Service Contract',
        'Near-Zero Ping for Competitive eSports',
        'Enterprise-Grade Fiber Reliability',
        'White-Glove VIP Technical Support'
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'Connection Type',
      frontier: '100% Dedicated Fiber Optic',
      cable: 'Shared Coaxial Copper Cable',
      advantage: true
    },
    {
      feature: 'Symmetrical Speeds (Equal Upload/Download)',
      frontier: 'YES (Up to 5000 Mbps Upload)',
      cable: 'NO (Uploads often capped at 10-35 Mbps)',
      advantage: true
    },
    {
      feature: 'Monthly Data Limits',
      frontier: 'UNLIMITED (Zero Data Caps)',
      cable: 'Frequently Capped (Overage Fees Apply)',
      advantage: true
    },
    {
      feature: 'Annual Contract Requirements',
      frontier: 'NO Contract Required',
      cable: '1 to 2 Year Contracts Common',
      advantage: true
    },
    {
      feature: 'Network Reliability',
      frontier: '99.9% Uptime Guarantee',
      cable: 'Prone to Peak-Hour Slowdowns',
      advantage: true
    },
    {
      feature: 'Wi-Fi Equipment',
      frontier: 'Wi-Fi 6 / 6E Included',
      cable: 'Extra $15-$20/mo Rental Fees',
      advantage: true
    }
  ];

  const faqs = [
    {
      question: 'What makes Fiber Internet different from traditional cable internet?',
      answer: 'Fiber Internet utilizes 100% fiber-optic lines directly to your home. Unlike cable internet, which relies on shared copper wires that slow down during peak hours, Fiber Internet delivers symmetrical upload and download speeds, ultra-low latency, and unmatched 99.9% uptime reliability.'
    },
    {
      question: 'What are symmetrical speeds and why do they matter?',
      answer: 'Symmetrical speeds mean your upload speed is just as fast as your download speed. Traditional cable internet typically offers fast downloads but crippled upload speeds (10-35 Mbps). Symmetrical fiber ensures crystal-clear video calls, fast cloud backups, instant photo/video uploads, and seamless online gaming.'
    },
    {
      question: 'Are there any monthly data caps or annual contracts?',
      answer: 'No! All Fiber Internet plans feature 100% unlimited data with zero monthly caps, zero speed throttling, and zero overage charges. Plus, there are no annual service contracts required, giving you total flexibility.'
    },
    {
      question: 'Is Wi-Fi router equipment included with my Fiber Internet plan?',
      answer: 'Yes! Every Fiber Internet plan includes a cutting-edge Wi-Fi 6 or Wi-Fi 6E system at no extra monthly rental charge, ensuring full-home wireless coverage with multi-device bandwidth optimization.'
    },
    {
      question: 'How do I order Fiber Internet for my home?',
      answer: 'Ordering is fast and easy! Simply call our dedicated phone specialists at +1-866-654-4005. Our representatives will check local fiber availability, guide you through available speed packages, and schedule your expert installation appointment.'
    },
    {
      question: 'How long does professional fiber installation take?',
      answer: 'Most standard Fiber Internet installations are completed in under 2 hours by a certified technician who will bring the fiber line to your home, set up your Wi-Fi router, and ensure all your devices are connected.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-[#FF0037] selection:text-white pb-16 md:pb-0">
      
      {/* 3D Cursor Glow Particle & Scroll Bar */}
      <CursorGlow theme="frontier" />

      {/* Top Banner Bar - High Speed Bundles Style Header */}
      <div className="bg-gradient-to-r from-[#D90429] via-[#FF0037] to-[#B00020] text-white py-2 px-3 text-center text-xs font-extrabold tracking-wide flex items-center justify-between sm:justify-center gap-2 sm:gap-4 shadow-sm z-50">
        <span className="flex items-center gap-1 uppercase font-mono bg-black/20 px-2 py-0.5 rounded-full border border-white/30 text-white shrink-0 text-[10px] sm:text-xs">
          <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
          <span>Special Offer</span>
        </span>
        <span className="hidden md:inline">Fiber Internet - 100% Symmetrical Fiber Optics Up To 5 Gig!</span>
        <a
          href="tel:18666544005"
          className="inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-yellow-200 transition-colors font-mono whitespace-nowrap text-[11px] sm:text-xs shrink-0"
        >
          <Phone className="w-3.5 h-3.5 fill-current animate-bounce" />
          <span>Call: +1-866-654-4005</span>
        </a>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          
          {/* Logo & Back Link */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-[#FF0037] hover:text-white transition-all text-slate-700 group interactive shrink-0"
              title="Return to Main Website"
              aria-label="Return to Main Website"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#FF0037] to-[#FF4D6D] flex items-center justify-center p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0037]" />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 flex items-center gap-1 leading-none whitespace-nowrap">
                  FIBER <span className="text-[#FF0037]">INTERNET</span>
                </span>
                <span className="hidden sm:block text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                  AUTHORIZED ADVISOR
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-700">
            <a href="#plans" className="hover:text-[#FF0037] transition-colors">Fiber Plans</a>
            <a href="#comparison" className="hover:text-[#FF0037] transition-colors">Fiber vs Cable</a>
            <a href="#features" className="hover:text-[#FF0037] transition-colors">Why Fiber</a>
            <a href="#faq" className="hover:text-[#FF0037] transition-colors">FAQ</a>
          </nav>

          {/* Call Order Button CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:18666544005"
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#FF0037] to-[#D90429] hover:from-[#D90429] hover:to-[#B00020] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap interactive"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-pulse text-white" />
              <span className="hidden sm:inline">Call to Order: +1-866-654-4005</span>
              <span className="inline sm:hidden">Call Now</span>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-100 via-red-50/30 to-slate-50 border-b border-slate-200"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200 text-[#D90429] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
                <Zap className="w-3.5 h-3.5 text-[#FF0037] animate-pulse" />
                <span>100% Fiber Optic Network • Speeds Up to 5 Gig</span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Next-Gen <br />
                <span className="bg-gradient-to-r from-[#FF0037] via-[#D90429] to-[#990022] bg-clip-text text-transparent">
                  Fiber Internet
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Experience 100% fiber-optic broadband with symmetrical upload & download speeds up to 5,000 Mbps, 99.9% uptime, zero data caps, and no annual contracts.
              </p>

              {/* Bullet Features Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  'Equal Upload & Download Speeds',
                  '99.9% Network Uptime Reliability',
                  'No Monthly Data Limits or Caps',
                  'No Annual Contract Required',
                  'Wi-Fi 6 / 6E Router Included',
                  '24/7 Dedicated Support Line'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="p-1 rounded-full bg-red-100 border border-red-200 text-[#FF0037] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:18666544005"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF0037] via-[#E2001A] to-[#C10020] hover:from-[#E2001A] hover:to-[#900018] text-white text-base font-extrabold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-3 group interactive"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse text-white" />
                  <span>Call to Order: +1-866-654-4005</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#plans"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold transition-all text-center shadow-sm hover:shadow-md interactive"
                >
                  View Speed Plans
                </a>
              </div>

              <p className="text-[11px] font-mono text-slate-500 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                <span>Zero hidden fees • Free equipment included • 100% Risk-free ordering</span>
              </p>

            </div>

            {/* Right Column Interactive Speed Node Graphic */}
            <motion.div
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 relative flex items-center justify-center interactive"
            >
              <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-br from-[#FF0037]/40 via-[#FF4D6D]/20 to-slate-200 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
                <div className="w-full h-full rounded-[22px] bg-white border border-slate-200 p-6 flex flex-col justify-between relative overflow-hidden space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF0037] animate-ping" />
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 font-mono">FIBER_INTERNET_NODE</h3>
                        <p className="text-[10px] text-slate-500">100% Fiber Optic Dedicated Line</p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#FF0037] text-[10px] font-mono font-bold">
                      ULTRA LOW LATENCY
                    </span>
                  </div>

                  {/* Interactive Speed Switcher Selector */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Select Fiber Speed Tier:</p>
                    <div className="grid grid-cols-4 gap-2">
                      {['500M', '1 Gig', '2 Gig', '5 Gig'].map((label, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSpeedIndex(idx)}
                          className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                            selectedSpeedIndex === idx
                              ? 'bg-[#FF0037] border-[#FF0037] text-white shadow-md'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Speed Gauge Visualizer */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-red-50/20 to-slate-100 border border-slate-200 flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
                    
                    <Wifi className="w-10 h-10 text-[#FF0037] animate-pulse" />
                    
                    <div className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                      {fiberPlans[selectedSpeedIndex].speed}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <span>Symmetrical: {fiberPlans[selectedSpeedIndex].speed} Upload</span>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      {fiberPlans[selectedSpeedIndex].tagline}
                    </div>
                  </div>

                  {/* Pricing & Call to Order */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <span className="text-xs text-slate-500 font-mono">Starting at</span>
                      <div className="text-2xl font-extrabold text-slate-900 font-mono">
                        {fiberPlans[selectedSpeedIndex].price} <span className="text-xs text-slate-500 font-normal">/mo</span>
                      </div>
                    </div>

                    <a
                      href="tel:18666544005"
                      className="px-4 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all hover:scale-105"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current animate-pulse" />
                      <span>Order Now</span>
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Trust Stats Bar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
        className="bg-white border-b border-slate-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="interactive">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">100%</p>
              <p className="text-xs text-slate-500 font-mono tracking-wider mt-1 uppercase">Fiber Optic Network</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="interactive">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FF0037] font-mono">5,000 Mbps</p>
              <p className="text-xs text-slate-500 font-mono tracking-wider mt-1 uppercase">Max Speed Capability</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="interactive">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">99.9%</p>
              <p className="text-xs text-slate-500 font-mono tracking-wider mt-1 uppercase">Reliability Uptime</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="interactive">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">$0</p>
              <p className="text-xs text-slate-500 font-mono tracking-wider mt-1 uppercase">Contract Commitment</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Fiber Speed Plans Grid Section */}
      <motion.section
        id="plans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="py-16 sm:py-20 bg-slate-50 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#FF0037] text-xs font-mono font-bold tracking-wider uppercase">
              Transparent Monthly Pricing
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Fiber Internet Speed Plans
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose the perfect symmetrical fiber speed tier for your family or home office. No contracts, no data caps, and free Wi-Fi equipment included.
            </p>
          </div>

          {/* Plans Grid with 3D Card Hover Effects */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {fiberPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: '0 20px 35px -10px rgba(255, 0, 55, 0.18)',
                  borderColor: '#FF0037'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`relative rounded-3xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between interactive cursor-pointer ${
                  plan.popular
                    ? 'border-[#FF0037] shadow-xl ring-2 ring-[#FF0037]/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FF0037] text-white text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase ${plan.badgeColor}`}>
                      {plan.speed} Symmetrical
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 font-heading">{plan.name}</h3>
                    <p className="text-xs text-slate-500 min-h-[32px] mt-1">{plan.tagline}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">{plan.price}</span>
                      <span className="text-xs text-slate-500">{plan.period}</span>
                    </div>
                    <p className="text-[10px] font-mono text-emerald-600 font-bold mt-1">✓ Unlimited Data • $0 Contract</p>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 space-y-2.5 text-xs text-slate-700 border-t border-slate-100">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0037] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="tel:18666544005"
                    className={`w-full py-3.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-md ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#FF0037] to-[#D90429] hover:from-[#D90429] hover:to-[#B00020] text-white shadow-red-500/30'
                        : 'bg-slate-900 hover:bg-[#FF0037] text-white'
                    }`}
                  >
                    <Phone className="w-4 h-4 fill-current animate-pulse" />
                    <span>Call to Order: +1-866-654-4005</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* Frontier Fiber vs Cable Comparison Table Section */}
      <motion.section
        id="comparison"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="py-16 sm:py-20 bg-white border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-mono font-bold tracking-wider uppercase">
              Technology Comparison
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fiber Internet vs. Traditional Cable Internet
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              See why switching to 100% fiber-optic internet delivers superior performance for streaming, remote work, video conferencing, and online gaming.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 interactive"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="p-4 sm:p-5 font-bold text-slate-800">Feature Comparison</th>
                  <th className="p-4 sm:p-5 font-bold text-[#FF0037] bg-red-50 border-x border-red-200 text-center">
                    Fiber Internet
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-600 text-center">
                    Traditional Cable
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-extrabold text-emerald-700 bg-red-50/40 border-x border-red-100 text-center font-mono">
                      {row.frontier}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 text-center font-mono">
                      {row.cable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-red-50 via-white to-sky-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow interactive"
          >
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-slate-900 text-base">Ready to Upgrade from Slow Cable?</h4>
              <p className="text-xs text-slate-600">Call our telephone specialists now to check local Fiber availability.</p>
            </div>
            <a
              href="tel:18666544005"
              className="px-6 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs font-extrabold flex items-center gap-2 shadow-md shrink-0 hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>Call Order Hotline: +1-866-654-4005</span>
            </a>
          </motion.div>

        </div>
      </motion.section>

      {/* Core Features & Technology Section */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#FF0037] text-xs font-mono font-bold tracking-wider uppercase">
              Engineered for Modern Connectivity
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Fiber Internet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built on 100% fiber-optic infrastructure designed for zero bottlenecks, instant responsiveness, and full-home Wi-Fi coverage.
            </p>
          </div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Symmetrical Speed Power',
                desc: 'Upload at the same incredible speed as you download. Perfect for HD video calls, cloud file transfers, live video broadcasting, and large backups.'
              },
              {
                icon: Wifi,
                title: 'Whole-Home Wi-Fi 6 / 6E',
                desc: 'Includes cutting-edge wireless router equipment that dynamically distributes signal throughout your house with zero lag or dead spots.'
              },
              {
                icon: Activity,
                title: 'Ultra-Low Latency Gaming',
                desc: 'Experience ping rates under 2ms. Fiber eliminates line jitter and packet loss so competitive gaming and 4K streaming stay silky smooth.'
              },
              {
                icon: ShieldCheck,
                title: 'Zero Data Caps & Limits',
                desc: 'Stream, download, and game as much as you want. Fiber Internet never imposes data caps, bandwidth penalties, or hidden overage fees.'
              },
              {
                icon: Clock,
                title: '99.9% Network Reliability',
                desc: 'Glass fiber optics are immune to weather interference, electrical noise, and neighborhood network congestion that cripples old copper cable.'
              },
              {
                icon: Award,
                title: 'Transparent No-Contract Plans',
                desc: 'Enjoy freedom with straightforward monthly pricing and no annual contracts. Upgrade, modify, or manage your service with complete ease.'
              }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 15px 30px -10px rgba(255, 0, 55, 0.15)',
                    borderColor: '#FF0037'
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 group interactive cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-[#FF0037] flex items-center justify-center group-hover:bg-[#FF0037] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </motion.section>

      {/* Simple 3-Step Ordering Process */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="py-16 bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-heading text-3xl font-extrabold text-slate-900">
              How to Get Fiber Internet in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Our phone ordering process is straightforward, fast, and completely hassle-free.
            </p>
          </div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Pick Your Fiber Speed',
                desc: 'Select from 500 Mbps, 1 Gig, 2 Gig, or 5 Gig symmetrical fiber plans tailored for your home bandwidth needs.'
              },
              {
                step: '02',
                title: 'Call Our Order Line',
                desc: 'Speak directly with our phone specialists at +1-866-654-4005 to confirm local line coverage and lock in your rate.'
              },
              {
                step: '03',
                title: 'Fast Expert Installation',
                desc: 'A certified technician will bring the fiber line directly into your home, configure Wi-Fi 6, and get you online.'
              }
            ].map((st, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3 text-center sm:text-left shadow-sm hover:shadow-md hover:border-red-300 transition-all interactive cursor-pointer"
              >
                <span className="font-mono text-4xl font-extrabold text-[#FF0037]/30">{st.step}</span>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* FAQ Accordion Section */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
        className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#FF0037] text-xs font-mono font-bold tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fiber Internet FAQ
            </h2>
            <p className="text-slate-600 text-sm">
              Got questions about Fiber Internet? Find quick answers below or speak to our telephone specialists.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:shadow-md interactive"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#FF0037] transition-colors focus:outline-none"
                  >
                    <span className="font-heading">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#FF0037] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* Bottom CTA Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 bg-gradient-to-r from-[#D90429] via-[#FF0037] to-[#B00020] text-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Upgrade Your Home to Fiber Internet?
          </h2>

          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Call our toll-free phone specialists now to check local fiber coverage, compare multi-gig speed options, and lock in your $0 contract order today!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:18666544005"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#FF0037] text-base font-extrabold hover:bg-slate-100 transition-all shadow-xl hover:scale-[1.03] active:scale-100 flex items-center justify-center gap-3 font-mono interactive"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse text-[#FF0037]" />
              <span>Call Order Line: +1-866-654-4005</span>
            </a>
          </div>

          <p className="text-xs text-white/90 font-mono">
            Available 24/7 • Fast Local Installation • Zero Data Caps
          </p>

        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-[#FF0037]" />
                <span className="font-heading font-extrabold text-white text-base">
                  FIBER <span className="text-[#FF0037]">INTERNET</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Providing expert guidance and phone ordering for Fiber Internet high-speed broadband, symmetrical multi-gig fiber, and home connectivity solutions.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase font-mono">Contact Information</h4>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF0037]" />
                <a href="tel:18666544005" className="text-white hover:underline font-mono">+1-866-654-4005</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF0037]" />
                <a href="mailto:info@areainternetproviders.com" className="text-slate-300 hover:underline font-mono">info@areainternetproviders.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF0037]" />
                <span className="text-slate-300">1419 Carter St, Metropolis, IL 62960</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase font-mono">Legal & Policy Links</h4>
              <div className="flex flex-col space-y-1 text-slate-300">
                {onNavigateToPrivacy && (
                  <button onClick={onNavigateToPrivacy} className="text-left hover:text-[#FF0037] transition-colors">
                    Privacy Policy
                  </button>
                )}
                {onNavigateToTerms && (
                  <button onClick={onNavigateToTerms} className="text-left hover:text-[#FF0037] transition-colors">
                    Terms of Service
                  </button>
                )}
                <button onClick={onBackToHome} className="text-left hover:text-[#FF0037] transition-colors">
                  Return to Main Website
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] leading-relaxed text-slate-400 space-y-2">
            <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <strong className="text-slate-200">DISCLAIMER:</strong> We are NOT an official website for any service providers listed on this website. Areainternetproviders.com is an authorized dealer with brands that provides local promotions for Cable & satellite TV and fiber and satellite Internet providers at your area's zip code. The content of this site and its underlying texts, images and videos are for informational purposes only. Though www.areainternetproviders.com strives to keep the content up-to-date, at times it might be out of sync with actual offerings by providers. All logos, brand names, and trademarked words used in this site are owned by the respective owners of the brands www.areainternetproviders.com doesn't have any rights to any of the brand names or logos mentioned over here.
            </p>
            <p>© {new Date().getFullYear()} Area Internet Providers. All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* Floating Sticky Mobile Bottom Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl">
        <a
          href="tel:18666544005"
          className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-[#FF0037] to-[#D90429] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg interactive whitespace-nowrap"
        >
          <Phone className="w-4 h-4 fill-current animate-pulse text-white" />
          <span>Call Order Line: +1-866-654-4005</span>
        </a>
      </div>

    </div>
  );
};
