import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Globe, Activity } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Fiber Gateway...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const textIntervals = [
      { threshold: 25, text: 'Connecting High-Speed Nodes...' },
      { threshold: 55, text: 'Optimizing Optical Routes...' },
      { threshold: 85, text: 'Securing Gigabit Bandwidth...' },
      { threshold: 98, text: 'Area Internet Ready.' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 8) + 3;
        const currentTarget = Math.min(next, 100);

        const currentText = textIntervals.find((t) => currentTarget <= t.threshold);
        if (currentText) {
          setLoadingText(currentText.text);
        }

        return currentTarget;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white px-4 select-none"
        >
          {/* Animated Background Mesh Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
            {/* Animated Globe / Signal Icon */}
            <div className="relative flex items-center justify-center w-24 h-24 mb-8">
              {/* Spinning outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#0EA5E9]/40"
              />
              {/* Pulsing inner ring */}
              <motion.div
                animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#0EA5E9]/20 to-[#2563EB]/30 border border-[#38BDF8]/50 blur-xs"
              />
              
              <div className="relative z-10 p-4 rounded-full bg-[#0F172A] border border-[#0EA5E9]/50 shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                <Wifi className="w-9 h-9 text-[#38BDF8] animate-pulse" />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="text-2xl font-bold tracking-tight font-heading bg-gradient-to-r from-white via-[#F8FAFC] to-[#38BDF8] bg-clip-text text-transparent mb-1">
              AREA INTERNET
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94A3B8] mb-8">
              PROVIDERS
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#0F172A] p-1 rounded-full border border-white/10 shadow-inner mb-4 relative overflow-hidden">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#38BDF8] relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              </motion.div>
            </div>

            {/* Percentage & Status Text */}
            <div className="flex items-center justify-between w-full text-xs text-[#94A3B8] font-mono">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#0EA5E9] animate-spin" />
                {loadingText}
              </span>
              <span className="font-bold text-[#38BDF8]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
