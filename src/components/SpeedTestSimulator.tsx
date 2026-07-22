import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Zap, RotateCcw, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const SpeedTestSimulator: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [testMode, setTestMode] = useState<'area' | 'cable'>('area');

  const runSimulation = (mode: 'area' | 'cable') => {
    setTestMode(mode);
    setTesting(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setPing(0);

    const targetDownload = mode === 'area' ? 985 : 45;
    const targetUpload = mode === 'area' ? 970 : 8;
    const targetPing = mode === 'area' ? 2 : 48;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / 20;
      setDownloadSpeed(Math.round(targetDownload * Math.min(progress * 1.1, 1)));
      setUploadSpeed(Math.round(targetUpload * Math.min(progress, 1)));
      setPing(Math.max(1, Math.round(targetPing * (1 - progress * 0.2))));

      if (step >= 20) {
        clearInterval(interval);
        setTesting(false);
        setDownloadSpeed(targetDownload);
        setUploadSpeed(targetUpload);
        setPing(targetPing);
      }
    }, 80);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Interactive Bandwidth Lab</span>
            </div>

            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
              Compare Area Fiber vs Traditional Cable Internet
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Cable networks suffer from heavy congestion during peak hours and asymmetric upload speeds. Area Fiber provides symmetrical 1,000 Mbps capacity with sub-2ms optical latency.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => runSimulation('area')}
                disabled={testing}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#2563EB] text-white text-xs font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current text-white" />
                <span>Test Area Fiber (1 Gbps)</span>
              </button>

              <button
                onClick={() => runSimulation('cable')}
                disabled={testing}
                className="px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Test Old Cable</span>
              </button>
            </div>
          </div>

          {/* Right Speed Meter */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-widest">
                    CURRENT SIMULATION MODE
                  </span>
                  <h4 className="font-heading text-base font-bold text-white flex items-center gap-2">
                    {testMode === 'area' ? (
                      <span className="text-[#38BDF8] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                        Area Internet Gigabit Fiber
                      </span>
                    ) : (
                      <span className="text-amber-400 flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-amber-400" />
                        Legacy Copper Cable Broadband
                      </span>
                    )}
                  </h4>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono">OPTICAL LATENCY</span>
                  <p className="text-sm font-bold text-white font-mono">{ping} ms</p>
                </div>
              </div>

              {/* Speed Numbers */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Download */}
                <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">DOWNLOAD SPEED</span>
                  <div className="font-heading text-4xl sm:text-5xl font-bold font-mono tracking-tight text-[#38BDF8]">
                    {downloadSpeed} <span className="text-xs font-normal text-slate-400">Mbps</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] h-full transition-all duration-300"
                      style={{ width: `${Math.min((downloadSpeed / 1000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Upload */}
                <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">UPLOAD SPEED</span>
                  <div className="font-heading text-4xl sm:text-5xl font-bold font-mono tracking-tight text-[#22C55E]">
                    {uploadSpeed} <span className="text-xs font-normal text-slate-400">Mbps</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-gradient-to-r from-[#22C55E] to-[#38BDF8] h-full transition-all duration-300"
                      style={{ width: `${Math.min((uploadSpeed / 1000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Simulation Notice */}
              <p className="text-[11px] text-center text-slate-400 mt-4 font-mono">
                {testMode === 'area'
                  ? '⚡ Symmetrical Fiber speed allows 4K video uploads in seconds.'
                  : '⚠️ Legacy cable limits upload speed to 10% of download bandwidth.'}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
