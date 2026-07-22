import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Marcus Vance',
      role: 'Senior Software Architect',
      location: 'Metro Center',
      rating: 5,
      comment: 'Switching to Area Internet Providers changed everything for my remote team. With 1 Gbps symmetrical upload, compiling docker builds and streaming 4K video calls happens with 0 latency. Exceptional support.',
      speedAchieved: '985 Mbps Download / 970 Mbps Upload',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 't2',
      name: 'Elena Rostova',
      role: 'Twitch Partner & 4K Streamer',
      location: 'North Suburbs',
      rating: 5,
      comment: 'Zero dropped frames during 8-hour live broadcasts. Cable kept throttling my connection at peak hours, but Area Fiber delivers steady 1,000 Mbps day and night without a single glitch.',
      speedAchieved: '1,000 Mbps Symmetrical',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      id: 't3',
      name: 'David & Sarah Jenkins',
      role: 'Family Household (6 Devices)',
      location: 'East Corridor',
      rating: 5,
      comment: 'With 3 kids streaming 4K movies and two parents working from home simultaneously, our old internet used to lag constantly. The Standard 300 Mbps plan has been flawless for our whole house.',
      speedAchieved: '300 Mbps Fiber',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-current text-amber-500" />
            <span>Verified Customer Stories</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Loved By Over 10,000+ <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Homes & Local Businesses.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Real reviews from real customers enjoying lightning-fast connectivity.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl relative overflow-hidden"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-100 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Rating Stars & Speed Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-mono font-bold">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Verified: {current.speedAchieved}</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed italic">
                  "{current.comment}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#0EA5E9]"
                    />
                    <div>
                      <h4 className="font-heading text-base font-bold text-slate-900">
                        {current.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {current.role} • {current.location}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 text-xs text-[#16A34A] font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Customer</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-[#0EA5E9]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors shadow-xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
