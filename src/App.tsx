import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SpeedTestSimulator } from './components/SpeedTestSimulator';
import { Plans } from './components/Plans';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { CoverageMap } from './components/CoverageMap';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AvailabilityModal } from './components/AvailabilityModal';
import { BookingModal } from './components/BookingModal';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { FrontierPage } from './components/FrontierPage';
import { Plan } from './types';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'frontier' | 'privacy' | 'terms'>('home');
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [activeZip, setActiveZip] = useState('');

  // Ensure page routing handles /fiber-internet URL path and hash changes
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === '/fiber-internet' || path === '/fiber-internet/' || hash === '#fiber-internet' || hash === '#frontier') {
        setCurrentPage('frontier');
      } else if (hash === '#privacy' || path === '/privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms' || path === '/terms') {
        setCurrentPage('terms');
      } else if (path === '/' || hash === '' || hash === '#home') {
        setCurrentPage('home');
      }
    };

    checkRoute();

    const handlePopState = () => {
      checkRoute();
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (currentPage !== 'home') return; // Disable Lenis on sub-pages if desired

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [currentPage]);

  const handleOpenAvailability = (zipVal?: string) => {
    if (zipVal) setActiveZip(zipVal);
    setAvailabilityModalOpen(true);
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setBookingModalOpen(true);
  };

  const handleProceedToBookingFromZip = (zipVal: string) => {
    setActiveZip(zipVal);
    setBookingModalOpen(true);
  };

  const handleViewPlansClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const plansEl = document.getElementById('plans');
        if (plansEl) plansEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const plansEl = document.getElementById('plans');
      if (plansEl) {
        plansEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    if (window.location.pathname !== '/') {
      history.pushState(null, '', '/');
    } else if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
    window.location.hash = 'privacy';
    window.scrollTo(0, 0);
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
    window.location.hash = 'terms';
    window.scrollTo(0, 0);
  };

  const navigateToFrontier = () => {
    setCurrentPage('frontier');
    history.pushState(null, '', '/fiber-internet');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'frontier') {
    return (
      <FrontierPage
        onBackToHome={navigateToHome}
        onNavigateToPrivacy={navigateToPrivacy}
        onNavigateToTerms={navigateToTerms}
      />
    );
  }

  if (currentPage === 'privacy') {
    return (
      <PrivacyPage
        onBackToHome={navigateToHome}
        onNavigateToTerms={navigateToTerms}
      />
    );
  }

  if (currentPage === 'terms') {
    return (
      <TermsPage
        onBackToHome={navigateToHome}
        onNavigateToPrivacy={navigateToPrivacy}
      />
    );
  }

  return (
    <div className="min-w-full min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-[#0EA5E9] selection:text-white relative font-sans">
      
      {/* 1. Preloader */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* 2. Cursor Glow & Scroll Progress Bar */}
      <CursorGlow />

      {/* Main Content Rendered */}
      <div className={`transition-opacity duration-700 ${preloaderFinished ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Navbar */}
        <Navbar
          onCheckAvailabilityClick={() => handleOpenAvailability()}
          onSelectPlanClick={() => handleViewPlansClick()}
          onNavigateToFrontier={navigateToFrontier}
        />

        {/* Main Landing Sections */}
        <main>
          {/* Hero Section */}
          <Hero
            onCheckAvailabilityClick={handleOpenAvailability}
            onViewPlansClick={handleViewPlansClick}
          />

          {/* Features Grid */}
          <Features />

          {/* Interactive Speed Test Simulator */}
          <SpeedTestSimulator />

          {/* Pricing & Plans */}
          <Plans onSelectPlan={handleSelectPlan} />

          {/* Why Choose Us Matrix */}
          <WhyChooseUs />

          {/* How It Works Timeline */}
          <HowItWorks />

          {/* Coverage Map */}
          <CoverageMap onCheckAvailabilityClick={handleOpenAvailability} />

          {/* Testimonials */}
          <Testimonials />

          {/* FAQ Accordion */}
          <FAQ />

          {/* CTA Banner */}
          <CtaBanner onCheckAvailabilityClick={handleOpenAvailability} />
        </main>

        {/* Footer */}
        <Footer
          onCheckAvailabilityClick={() => handleOpenAvailability()}
          onOpenPrivacy={navigateToPrivacy}
          onOpenTerms={navigateToTerms}
          onOpenFrontier={navigateToFrontier}
        />

      </div>

      {/* Modals */}
      <AvailabilityModal
        isOpen={availabilityModalOpen}
        onClose={() => setAvailabilityModalOpen(false)}
        initialZip={activeZip}
        onBookNow={handleProceedToBookingFromZip}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPlan={selectedPlan}
        initialZip={activeZip}
      />

    </div>
  );
}
