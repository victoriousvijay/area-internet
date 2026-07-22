import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface CursorGlowProps {
  theme?: 'default' | 'frontier';
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ theme = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isFrontier = theme === 'frontier';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive') ||
          target.closest('.interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900/20 backdrop-blur-sm pointer-events-none">
        <motion.div
          className={`h-full shadow-sm ${
            isFrontier
              ? 'bg-gradient-to-r from-[#D90429] via-[#FF0037] to-[#FF4D6D] shadow-[0_0_12px_#FF0037]'
              : 'bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#22C55E] shadow-[0_0_12px_#0EA5E9]'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Large Ambient Radial Background Follower */}
      <motion.div
        className={`pointer-events-none fixed z-20 hidden md:block rounded-full blur-3xl ${
          isFrontier
            ? 'bg-gradient-to-r from-[#FF0037]/10 via-[#D90429]/05 to-[#38BDF8]/08'
            : 'bg-gradient-to-r from-[#0EA5E9]/12 via-[#2563EB]/08 to-[#38BDF8]/10'
        }`}
        animate={{
          x: mousePosition.x - 220,
          y: mousePosition.y - 220,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 200,
          mass: 0.1,
        }}
        style={{
          width: 440,
          height: 440,
        }}
      />

      {/* Interactive 3D Cursor Ring */}
      <motion.div
        className={`pointer-events-none fixed z-50 hidden md:block rounded-full backdrop-blur-[1px] border ${
          isFrontier
            ? 'border-[#FF0037]/60 shadow-[0_0_15px_rgba(255,0,55,0.4)]'
            : 'border-[#0EA5E9]/60 shadow-[0_0_15px_rgba(14,165,233,0.4)]'
        }`}
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          scale: isClicked ? 0.75 : isHovered ? 1.5 : 1,
          borderColor: isHovered
            ? isFrontier ? '#FF0037' : '#22C55E'
            : isFrontier ? '#FF4D6D' : '#38BDF8',
          backgroundColor: isHovered
            ? isFrontier ? 'rgba(255, 0, 55, 0.1)' : 'rgba(34, 197, 94, 0.08)'
            : isFrontier ? 'rgba(255, 0, 55, 0.04)' : 'rgba(14, 165, 233, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.15,
        }}
        style={{
          width: 36,
          height: 36,
        }}
      />

      {/* Interactive 3D Inner Core Dot */}
      <motion.div
        className={`pointer-events-none fixed z-50 hidden md:block rounded-full ${
          isFrontier
            ? 'bg-gradient-to-tr from-[#FF0037] to-[#D90429] shadow-[0_0_10px_#FF0037]'
            : 'bg-gradient-to-tr from-[#38BDF8] to-[#22C55E] shadow-[0_0_10px_#38BDF8]'
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicked ? 1.8 : isHovered ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
          mass: 0.05,
        }}
        style={{
          width: 8,
          height: 8,
        }}
      />
    </>
  );
};

