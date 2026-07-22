import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, CheckCircle2, Signal, Radio, ArrowRight } from 'lucide-react';
import { CoverageZone } from '../types';

interface CoverageMapProps {
  onCheckAvailabilityClick: (zip?: string) => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onCheckAvailabilityClick }) => {
  const [zipCode, setZipCode] = useState('');
  const [searchResult, setSearchResult] = useState<{ status: 'available' | 'expanding' | 'not-found'; message: string; zip: string } | null>(null);
  const [selectedZone, setSelectedZone] = useState<CoverageZone | null>(null);

  const zones: CoverageZone[] = [
    {
      id: 'z1',
      name: 'Central Metro Hub',
      status: 'Ready',
      zipCodes: ['90210', '90001', '10001', '30301'],
      x: 35,
      y: 45,
      speedAvailable: '1,000 Mbps Fiber',
    },
    {
      id: 'z2',
      name: 'North Suburban Zone',
      status: 'Ready',
      zipCodes: ['90211', '10002', '30302'],
      x: 60,
      y: 30,
      speedAvailable: '1,000 Mbps Fiber',
    },
    {
      id: 'z3',
      name: 'Tech Corridor East',
      status: 'Ready',
      zipCodes: ['90212', '10003', '30303'],
      x: 75,
      y: 65,
      speedAvailable: '1,000 Mbps Fiber',
    },
    {
      id: 'z4',
      name: 'South District Expansion',
      status: 'Expanding',
      zipCodes: ['90213', '10004'],
      x: 25,
      y: 75,
      speedAvailable: '300 Mbps Wireless Fiber',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode || zipCode.trim().length < 5) return;

    const trimmed = zipCode.trim();
    const found = zones.find((z) => z.zipCodes.includes(trimmed));

    if (found || trimmed.startsWith('9') || trimmed.startsWith('1') || trimmed.startsWith('3') || trimmed.startsWith('7')) {
      setSearchResult({
        status: 'available',
        message: `Area Gigabit Fiber is fully deployed and active in ZIP Code ${trimmed}!`,
        zip: trimmed,
      });
    } else if (trimmed.startsWith('8') || trimmed.startsWith('5')) {
      setSearchResult({
        status: 'expanding',
        message: `Network installation is currently under way in ${trimmed}. Pre-orders open now!`,
        zip: trimmed,
      });
    } else {
      setSearchResult({
        status: 'available',
        message: `ZIP ${trimmed} is supported! Schedule your installation today.`,
        zip: trimmed,
      });
    }
  };

  return (
    <section id="coverage" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Interactive Service Map</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Check Fiber Internet Coverage <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              In Your Neighborhood.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            We are rapidly expanding our direct optical infrastructure every day.
          </p>
        </div>

        {/* Map + Search Widget Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Map Visualizer */}
          <div className="lg:col-span-8 relative rounded-3xl p-1 bg-gradient-to-br from-[#0EA5E9]/20 via-slate-100 to-transparent border border-slate-200 overflow-hidden shadow-lg">
            <div className="w-full h-[420px] bg-slate-900 rounded-[22px] relative p-6 bg-grid-pattern flex flex-col justify-between overflow-hidden text-white">
              
              {/* Top Bar Overlay */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                  <Signal className="w-4 h-4 text-[#22C55E]" />
                  <span>ACTIVE REGIONAL NETWORK GRID</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  UPDATED LIVE
                </span>
              </div>

              {/* Map SVG Network Nodes */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
                  <path d="M100 200 Q 300 100 500 250 T 900 300" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M200 450 Q 500 300 800 400" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Map Pins */}
              <div className="absolute inset-0">
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    onClick={() => setSelectedZone(zone)}
                  >
                    {/* Ping ring */}
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-[#0EA5E9]/40 animate-ping" />
                      <div className="relative z-10 p-2 rounded-full bg-slate-950 border border-[#0EA5E9] text-[#38BDF8] group-hover:scale-125 transition-transform shadow-[0_0_20px_#0EA5E9]">
                        <MapPin className="w-5 h-5 fill-current" />
                      </div>
                    </div>

                    {/* Hover Card */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col p-3 rounded-xl bg-slate-900 border border-[#0EA5E9] text-white text-xs font-mono shadow-2xl w-44 z-30">
                      <p className="font-bold text-[#38BDF8]">{zone.name}</p>
                      <p className="text-[10px] text-slate-400">{zone.speedAvailable}</p>
                      <span className="mt-1 text-[9px] text-[#22C55E] uppercase font-bold">● {zone.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Legend */}
              <div className="relative z-10 flex items-center gap-6 text-xs text-slate-400 font-mono pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                  <span>Gigabit Ready Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>Active Expansion</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: ZIP Code Checker */}
          <div className="lg:col-span-4 rounded-3xl p-6 bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                Instant Availability Check
              </h3>
              <p className="text-xs text-slate-600">
                Enter your address or 5-digit ZIP code to confirm speed eligibility.
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#0EA5E9]" />
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter 5-Digit ZIP Code..."
                  maxLength={5}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-[#0EA5E9] shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white text-xs font-bold hover:from-[#38BDF8] hover:to-[#0EA5E9] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Coverage</span>
              </button>
            </form>

            {/* Results output */}
            {searchResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 space-y-3"
              >
                <div className="flex items-start gap-2.5 text-xs text-[#0EA5E9]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <p className="font-semibold text-slate-800">{searchResult.message}</p>
                </div>

                <button
                  onClick={() => onCheckAvailabilityClick(searchResult.zip)}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#0EA5E9] text-white text-xs font-bold hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Installation for ZIP {searchResult.zip}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}

            {/* Selected Zone Card details if user clicked pin */}
            {selectedZone && !searchResult && (
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                <p className="font-bold text-slate-900">{selectedZone.name}</p>
                <p className="text-slate-600">Speed: {selectedZone.speedAvailable}</p>
                <p className="text-[#16A34A] font-bold">Status: {selectedZone.status}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
