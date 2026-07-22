import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wifi, ArrowRight, ShieldCheck, Zap, Activity, CheckCircle2, Search, MapPin, Gauge, Phone } from 'lucide-react';

interface HeroProps {
  onCheckAvailabilityClick: (zip?: string) => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailabilityClick, onViewPlansClick }) => {
  const [zipInput, setZipInput] = useState('');
  const [checkingZip, setCheckingZip] = useState(false);
  const [zipStatus, setZipStatus] = useState<string | null>(null);

  // 3D Card Interactive Motion state
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardRotate({
      x: -(y / (rect.height / 2)) * 12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeaveCard = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput || zipInput.trim().length < 2) return;

    setCheckingZip(true);
    setZipStatus(null);

    setTimeout(() => {
      setCheckingZip(false);
      setZipStatus(`Great news! Gigabit Fiber is available in ${zipInput}!`);
      setTimeout(() => {
        onCheckAvailabilityClick(zipInput);
      }, 800);
    }, 1000);
  };

  const stats = [
    { value: '12,400+', label: 'MATCHED HOMES', icon: CheckCircle2 },
    { value: '15 Min', label: 'AVERAGE ACTIVATION', icon: ShieldCheck },
    { value: '4.8 / 5', label: 'ADVISOR TRUST RATING', icon: Zap },
    { value: '24/7', label: 'LOCAL NETWORK SUPPORT', icon: Activity },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#091738] via-[#0B1F4B] to-[#07112B]">
      {/* Background Animated Grid & Light Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Vibrant Radial Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.25)_0%,rgba(37,99,235,0.12)_50%,transparent_75%)] blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-8 left-8 w-[400px] h-[400px] bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/35 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] animate-ping" />
              <span className="text-xs font-bold text-[#38BDF8] tracking-wider uppercase">
                Area Internet Providers • Official Fiber Network
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Ultra-Fast Fiber. <br />
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                Unmatched Speed.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Empowering homes & businesses with ultra-reliable broadband up to 1 Gbps, 99.9% guaranteed uptime, zero data caps, and instant 24/7 activation.
            </motion.p>

            {/* Interactive ZIP Check Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              <form onSubmit={handleZipSubmit} className="relative flex items-center">
                <div className="absolute left-4 text-[#94A3B8] pointer-events-none">
                  <MapPin className="w-5 h-5 text-[#0EA5E9]" />
                </div>
                
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="Enter ZIP code, city or address..."
                  className="w-full pl-12 pr-32 sm:pr-36 py-3.5 sm:py-4 rounded-2xl bg-[#0B1739]/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)] font-mono"
                />

                <button
                  type="submit"
                  disabled={checkingZip}
                  className="absolute right-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] hover:from-[#38BDF8] hover:to-[#0EA5E9] text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center gap-1.5 disabled:opacity-75"
                >
                  {checkingZip ? (
                    <span className="flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 animate-spin" />
                      Checking...
                    </span>
                  ) : (
                    <>
                      <span>Check Location</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Status feedback */}
              {zipStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2.5 px-3 py-1.5 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{zipStatus}</span>
                </motion.div>
              )}
            </motion.div>

            {/* Direct Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1"
            >
              <a
                href="tel:18666544005"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white text-sm font-extrabold transition-all shadow-[0_0_25px_rgba(34,197,94,0.45)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:scale-[1.02] active:scale-100 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current animate-pulse" />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => onCheckAvailabilityClick()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#38BDF8] text-white text-sm font-bold transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.7)] flex items-center gap-2"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPlansClick}
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/60 text-white text-sm font-bold transition-all hover:scale-[1.02] active:scale-100 flex items-center gap-2"
              >
                <span>Compare Plans</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: 3D Interactive Area Internet Providers Network Hub Model */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center perspective-[1000px]">
            
            {/* Interactive 3D Model Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              style={{
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-br from-[#0EA5E9]/60 via-[#2563EB]/40 to-[#0EA5E9]/20 shadow-[0_20px_60px_rgba(14,165,233,0.35)] transition-transform duration-200 ease-out cursor-pointer group"
            >
              <div className="w-full h-full rounded-[22px] bg-[#0A1533]/95 border border-cyan-500/30 backdrop-blur-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                
                {/* Background 3D Grid lines & Glowing Scanline */}
                <div className="absolute inset-0 bg-[radial-gradient(#0EA5E9_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent animate-laser shadow-[0_0_15px_#38BDF8]" />

                {/* Top Badges Header */}
                <div className="w-full flex items-center justify-between z-10">
                  <div className="px-3 py-1.5 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 text-[#38BDF8] text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(14,165,233,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                    <span>FIBER: 1000 MBPS</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-emerald-400 text-[11px] font-mono font-bold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>PING: 2MS</span>
                  </div>
                </div>

                {/* Center 3D Interactive Holographic Visual Sphere */}
                <div className="relative my-4 flex items-center justify-center h-48 z-10">
                  
                  {/* Orbit Ring 1 */}
                  <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-[#0EA5E9]/40 animate-spin-slow pointer-events-none" />
                  
                  {/* Orbit Ring 2 Counter */}
                  <div className="absolute w-36 h-36 rounded-full border border-cyan-400/30 animate-spin-reverse pointer-events-none" />

                  {/* Outer Pulsing Glow Circle */}
                  <div className="absolute w-28 h-28 rounded-full bg-[#0EA5E9]/20 blur-xl animate-pulse" />

                  {/* 3D Core Glass Node */}
                  <div className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0EA5E9] via-[#2563EB] to-[#1D4ED8] p-0.5 shadow-[0_0_45px_rgba(14,165,233,0.7)] group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-[#070E24] rounded-[14px] flex flex-col items-center justify-center p-3 border border-cyan-400/40 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
                      
                      <Wifi className="w-10 h-10 text-[#38BDF8] animate-pulse mb-1 filter drop-shadow-[0_0_10px_#38BDF8]" />
                      <span className="text-xs font-black text-white tracking-widest font-mono">1.0 Gbps</span>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">&lt; 2ms Ping</span>
                    </div>
                  </div>

                  {/* Floating HUD Tag Left */}
                  <motion.div
                    animate={{ x: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1 top-6 px-2.5 py-1 rounded-md bg-slate-900/90 border border-cyan-500/30 text-[9px] font-mono text-cyan-300 shadow-md backdrop-blur-md"
                  >
                    STATUS: OPTIMAL
                  </motion.div>

                  {/* Floating HUD Tag Right */}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute right-1 bottom-6 px-2.5 py-1 rounded-md bg-slate-900/90 border border-blue-500/30 text-[9px] font-mono text-blue-300 shadow-md backdrop-blur-md"
                  >
                    LOAD: CONNECTED
                  </motion.div>
                </div>

                {/* Bottom Hub Title Bar */}
                <div className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-white font-mono tracking-wider">
                      Area Internet Providers Hub
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                    ACTIVE
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Hero Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid mt-12 sm:mt-16 pt-8 border-t border-slate-800/80 grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => {
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#0EA5E9]/40 transition-all">
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[11px] text-slate-400 font-mono tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

