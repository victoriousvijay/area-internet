import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CursorGlow } from './CursorGlow';
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Wifi,
  Mail,
  MapPin,
  Check,
  Globe,
  Server,
  BatteryCharging,
  Lock,
  PhoneCall,
  Smartphone,
  Building2,
  Router,
  AtSign,
  Zap
} from 'lucide-react';

interface SpectrumBusinessPageProps {
  onBackToHome: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

const PHONE_DISPLAY = '1-866-984-3065';
const PHONE_TEL = 'tel:18669843065';
const PAGE_URL = 'https://areainternetproviders.com/spectrum-business';
const LOGO_SRC = '/spectrum-authorized-channel-partner.jpg';

const SEO = {
  title: 'Spectrum Business Internet Plans, Deals & Bundles | Authorized Partner',
  description:
    'Compare Spectrum Business Internet plans from $65/mo with speeds up to 1 Gig, no contracts, no data caps and a free modem. Save on Internet + Phone + Mobile bundles. Call ' +
    PHONE_DISPLAY +
    '.',
  keywords:
    'spectrum business, spectrum business internet, spectrum business deals, spectrum business bundles, spectrum business phone, business internet near me, small business internet, spectrum authorized channel partner'
};

const internetPlans = [
  {
    id: 'sb-500',
    name: 'Business Internet 500',
    label: 'Internet',
    speed: 'Up to 500 Mbps',
    price: '65',
    note: 'Bundle and save up to $25/mo',
    guarantee: false,
    popular: false,
    features: [
      'Reliable bandwidth for everyday tasks across multiple devices',
      'Fast downloads for email, web and cloud apps',
      'Supports VoIP calling, including Spectrum Business Connect',
      'Keeps point-of-sale systems running smoothly and securely'
    ]
  },
  {
    id: 'sb-750',
    name: 'Business Internet 750',
    label: 'Internet Ultra',
    speed: 'Up to 750 Mbps',
    price: '95',
    note: 'Bundle and save up to $25/mo',
    guarantee: true,
    popular: true,
    features: [
      'Keeps a growing team online and productive at the same time',
      'Connects security, inventory, display and ordering systems',
      'Smooth HD video calls and online meetings',
      'Built for frequent file sharing and cloud backups'
    ]
  },
  {
    id: 'sb-1000',
    name: 'Business Internet Gig',
    label: 'Internet Gig',
    speed: 'Up to 1 Gig',
    price: '115',
    note: 'Bundle and save up to $25/mo',
    guarantee: true,
    popular: false,
    features: [
      'Handles many users and connected devices on one fast line',
      'Streaming, large downloads and video conferencing at once',
      'Advanced WiFi with Security Shield and Guest WiFi included',
      'Award-winning desktop security suite for 24/7 protection'
    ]
  }
];

const bundles = [
  {
    name: 'Internet + Mobile',
    price: '50',
    term: 'for 1 year',
    speed: 'Up to 500 Mbps',
    features: [
      '500 Mbps Fiber-Powered Internet for daily operations',
      'Spectrum Business Mobile to stay connected on the go',
      'Free professional installation'
    ]
  },
  {
    name: 'Internet + Phone + Mobile',
    price: '70',
    term: 'for 1 year',
    speed: 'Up to 500 Mbps',
    popular: true,
    features: [
      '500 Mbps Fiber-Powered Internet',
      'Business Phone with 35+ calling features',
      'One Business Mobile line included for 12 months',
      'Free professional installation'
    ]
  },
  {
    name: 'Gig Internet + Phone + Mobile',
    price: '120',
    term: 'for 2 years',
    speed: 'Up to 1 Gig',
    features: [
      'Gig-speed Fiber-Powered Internet plus Business Phone',
      'One Business Mobile line included for 12 months',
      'Advanced WiFi with Security Shield and Guest WiFi',
      'Free professional installation'
    ]
  }
];

const faqs = [
  {
    question: 'How much does Spectrum Business Internet cost?',
    answer:
      'Spectrum Business Internet plans start at $65/mo for speeds up to 500 Mbps. Internet Ultra (up to 750 Mbps) is $95/mo and Internet Gig (up to 1 Gig) is $115/mo. Bundling Internet with Business Phone or Business Mobile can save you up to $25/mo. Pricing and availability vary by service address.'
  },
  {
    question: 'Does Spectrum Business require a contract?',
    answer:
      'No. Spectrum Business Internet plans are available with no annual contract and no hidden fees, so you can grow or change your service as your business needs change. Select plans also offer an optional 3-year price guarantee.'
  },
  {
    question: 'Are there data caps on Spectrum Business Internet?',
    answer:
      'No. Every Spectrum Business Internet plan includes unlimited bandwidth with no data caps and no speed throttling, so your team can stream, upload and back up as much as it needs.'
  },
  {
    question: 'Is Spectrum Business Internet fiber?',
    answer:
      'Spectrum Business Internet is Fiber-Powered: the network is fiber-rich and service is delivered to your premises over a hybrid fiber-coaxial (HFC) connection, giving you fast, dependable speeds up to 1 Gig.'
  },
  {
    question: 'What free features are included with Spectrum Business Internet?',
    answer:
      'Plans include a free Internet modem, free desktop security software with up to 25 device licenses, a free business domain name and free custom email addresses. Together these features are worth over $50/mo.'
  },
  {
    question: 'What is Spectrum Invincible WiFi?',
    answer:
      'Invincible WiFi is a $20/mo add-on for Spectrum Business Internet customers that combines Advanced WiFi with wireless Internet backup and battery backup, helping your business stay online even during a power or network outage.'
  },
  {
    question: 'Can I keep my business phone number if I switch to Spectrum Business Voice?',
    answer:
      'Yes. You can keep your existing business phone number and compatible equipment. Spectrum Business Voice includes unlimited local and long distance calling in the U.S. plus 35+ calling features such as call hunting and call logs.'
  },
  {
    question: 'How do I check Spectrum Business availability at my address?',
    answer:
      'Call our Spectrum Business specialists at ' +
      PHONE_DISPLAY +
      '. We will confirm service at your business address, help you compare plans and bundles, and schedule professional installation.'
  }
];

// Sets page-level SEO tags while this landing page is mounted and restores the previous ones on exit.
const useSpectrumSeo = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = SEO.title;

    const touched: Array<{ el: HTMLElement; attr: string; prev: string | null; created: boolean }> = [];

    const setTag = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLElement>(selector);
      let created = false;
      if (!el) {
        el = create();
        document.head.appendChild(el);
        created = true;
      }
      touched.push({ el, attr, prev: el.getAttribute(attr), created });
      el.setAttribute(attr, value);
    };

    const meta = (key: 'name' | 'property', name: string, value: string) =>
      setTag(
        `meta[${key}="${name}"]`,
        () => {
          const m = document.createElement('meta');
          m.setAttribute(key, name);
          return m;
        },
        'content',
        value
      );

    meta('name', 'description', SEO.description);
    meta('name', 'keywords', SEO.keywords);
    meta('property', 'og:title', SEO.title);
    meta('property', 'og:description', SEO.description);
    meta('property', 'og:url', PAGE_URL);
    meta('property', 'og:image', 'https://areainternetproviders.com' + LOGO_SRC);
    meta('name', 'twitter:title', SEO.title);
    meta('name', 'twitter:description', SEO.description);
    setTag(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      },
      'href',
      PAGE_URL
    );

    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.id = 'spectrum-business-jsonld';
    jsonLd.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Spectrum Business Internet',
          serviceType: 'Business Internet Service',
          url: PAGE_URL,
          provider: {
            '@type': 'Organization',
            name: 'Area Internet Providers',
            url: 'https://areainternetproviders.com',
            telephone: PHONE_DISPLAY
          },
          areaServed: { '@type': 'Country', name: 'United States' },
          offers: internetPlans.map((p) => ({
            '@type': 'Offer',
            name: `Spectrum ${p.name} (${p.speed})`,
            price: p.price,
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: p.price,
              priceCurrency: 'USD',
              unitText: 'MONTH'
            }
          }))
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }
      ]
    });
    document.head.appendChild(jsonLd);

    return () => {
      document.title = previousTitle;
      jsonLd.remove();
      for (const t of touched.reverse()) {
        if (t.created) t.el.remove();
        else if (t.prev === null) t.el.removeAttribute(t.attr);
        else t.el.setAttribute(t.attr, t.prev);
      }
    };
  }, []);
};

export const SpectrumBusinessPage: React.FC<SpectrumBusinessPageProps> = ({
  onBackToHome,
  onNavigateToPrivacy,
  onNavigateToTerms
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useSpectrumSeo();

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const CallButton: React.FC<{ className?: string; label?: string }> = ({ className = '', label = `Call Now: ${PHONE_DISPLAY}` }) => (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0099D8] to-[#0B5FD6] hover:from-[#0B5FD6] hover:to-[#083E94] text-white font-extrabold shadow-md hover:shadow-lg transition-all interactive ${className}`}
    >
      <Phone className="w-4 h-4 fill-current animate-pulse" />
      <span>{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-[#0B5FD6] selection:text-white pb-16 md:pb-0">
      <CursorGlow />

      {/* Top Offer Bar */}
      <div className="bg-[#0B2340] text-white py-2 px-3 text-center text-xs font-bold tracking-wide flex items-center justify-between sm:justify-center gap-2 sm:gap-4 z-50">
        <span className="hidden md:inline">Spectrum Business Internet from $65/mo • No Contracts • No Data Caps</span>
        <span className="md:hidden">Spectrum Business Deals</span>
        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:text-sky-300 transition-colors font-mono whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>{PHONE_DISPLAY}</span>
        </a>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-[#0B5FD6] hover:text-white transition-all text-slate-700 group interactive shrink-0"
              title="Return to Main Website"
              aria-label="Return to Main Website"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <img
              src={LOGO_SRC}
              alt="Spectrum Authorized Channel Partner logo"
              width={1200}
              height={404}
              className="h-9 sm:h-11 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-700" aria-label="Spectrum Business page sections">
            <a href="#sb-plans" className="hover:text-[#0B5FD6] transition-colors">Internet Plans</a>
            <a href="#sb-bundles" className="hover:text-[#0B5FD6] transition-colors">Bundles</a>
            <a href="#sb-features" className="hover:text-[#0B5FD6] transition-colors">Free Features</a>
            <a href="#sb-phone" className="hover:text-[#0B5FD6] transition-colors">Business Phone</a>
            <a href="#sb-faq" className="hover:text-[#0B5FD6] transition-colors">FAQ</a>
          </nav>

          <CallButton
            className="px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm whitespace-nowrap shrink-0"
            label="Call Now"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] text-xs font-mono font-bold tracking-wider uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Spectrum Business® Authorized Channel Partner</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B2340] tracking-tight leading-[1.1]">
                Spectrum Business Internet{' '}
                <span className="bg-gradient-to-r from-[#0099D8] to-[#0B5FD6] bg-clip-text text-transparent">
                  Fiber-Powered Speed
                </span>{' '}
                for Your Business
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get fast, reliable Spectrum Business Internet with speeds up to 1 Gig, unlimited bandwidth and no contracts.
                Add four Business Mobile lines and get Business Internet Advantage free forever.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  'Plans from $65/mo, no contract',
                  'Unlimited bandwidth, no data caps',
                  'Free modem & desktop security',
                  'Free business domain & email',
                  'Advanced WiFi for speed & security',
                  'No hidden fees'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="p-1 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0099D8] to-[#0B5FD6] hover:to-[#083E94] text-white text-base font-extrabold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 group interactive"
                >
                  <Phone className="w-5 h-5 fill-current animate-pulse" />
                  <span>Call {PHONE_DISPLAY}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#sb-plans"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold transition-all text-center shadow-sm interactive"
                >
                  View Business Plans
                </a>
              </div>

              <p className="text-[11px] text-slate-500">
                Spectrum Business Internet is powered by fiber and delivered to the premises via HFC.
              </p>
            </div>

            {/* Logo + price card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 flex items-center justify-center interactive"
            >
              <div className="w-full max-w-md rounded-3xl p-1 bg-gradient-to-br from-[#0099D8]/50 via-sky-100 to-slate-200 shadow-xl">
                <div className="rounded-[22px] bg-white border border-slate-200 p-6 sm:p-8 space-y-6">
                  <img
                    src={LOGO_SRC}
                    alt="Spectrum Business Authorized Channel Partner"
                    width={1200}
                    height={404}
                    className="w-full h-auto"
                  />
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500">Business Internet starting at</p>
                    <p className="font-heading text-5xl font-extrabold text-[#0B2340]">
                      $65<span className="text-base font-medium text-slate-500">/mo</span>
                    </p>
                    <p className="text-xs text-emerald-700 font-bold">Up to 500 Mbps • No contract • No data caps</p>
                  </div>
                  <CallButton className="w-full py-3.5 text-sm" label="Check Availability by Phone" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust stats */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '1 Gig', l: 'Max Business Speed' },
              { v: '$0', l: 'Contract Required' },
              { v: 'No', l: 'Data Caps' },
              { v: '$50+', l: 'Free Features / Mo' }
            ].map((s) => (
              <div key={s.l}>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B2340] font-mono">{s.v}</p>
                <p className="text-xs text-slate-500 font-mono tracking-wider mt-1 uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internet plans */}
        <motion.section
          id="sb-plans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="py-16 sm:py-20 bg-slate-50 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] text-xs font-mono font-bold tracking-wider uppercase">
                Spectrum Business Internet Plans
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2340] tracking-tight">
                Business Internet Speeds for Every Size of Business
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Keep every device and employee connected with unlimited bandwidth, no data caps and no speed throttling. Choose the
                Spectrum Business Internet plan that fits how your business works.
              </p>
            </div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {internetPlans.map((plan) => (
                <motion.article
                  key={plan.id}
                  variants={cardVariants}
                  whileHover={{ y: -10, boxShadow: '0 20px 35px -10px rgba(11, 95, 214, 0.2)' }}
                  className={`relative rounded-3xl p-6 bg-white border flex flex-col justify-between interactive ${
                    plan.popular ? 'border-[#0B5FD6] shadow-xl ring-2 ring-[#0B5FD6]/20' : 'border-slate-200 shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0B5FD6] text-white text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-sky-50 border border-sky-200 text-[#0B5FD6]">
                        {plan.speed}
                      </span>
                      <h3 className="text-xl font-bold text-[#0B2340] mt-2 font-heading">Spectrum {plan.name}</h3>
                    </div>
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-500">{plan.label} at</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[#0B2340] font-mono">${plan.price}</span>
                        <span className="text-xs text-slate-500">/mo</span>
                      </div>
                      <p className="text-[11px] font-bold text-emerald-700 mt-1">{plan.note}</p>
                      {plan.guarantee && (
                        <p className="text-[11px] font-bold text-[#0B5FD6]">+ 3-year price guarantee available</p>
                      )}
                    </div>
                    <ul className="pt-4 space-y-2.5 text-xs text-slate-700 border-t border-slate-100">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0B5FD6] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <CallButton className="w-full py-3.5 text-xs" />
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Invincible WiFi add-on */}
            <div className="rounded-3xl bg-[#0B2340] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <BatteryCharging className="w-6 h-6 text-sky-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold">Add Spectrum Invincible WiFi for $20/mo</h3>
                  <p className="text-sm text-slate-300 max-w-2xl">
                    Smart, seamless connectivity with built-in wireless Internet backup and battery backup, for less than most
                    standalone backup solutions. Available with Spectrum Business Internet.
                  </p>
                </div>
              </div>
              <a
                href={PHONE_TEL}
                className="px-6 py-3 rounded-xl bg-white text-[#0B2340] text-sm font-extrabold flex items-center gap-2 shrink-0 hover:bg-sky-50 transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Add It Today</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Bundles */}
        <motion.section
          id="sb-bundles"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-wider uppercase">
                Bundle & Save
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B2340] tracking-tight">
                Spectrum Business Bundles: Internet, Phone & Mobile
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Combine Spectrum Business Internet with Business Voice and Business Mobile for one simple bill and bigger monthly
                savings. Every bundle includes free installation.
              </p>
            </div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {bundles.map((b) => (
                <motion.article
                  key={b.name}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl p-6 border flex flex-col justify-between interactive ${
                    b.popular ? 'bg-sky-50 border-[#0B5FD6] shadow-lg' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#0B5FD6]">
                      <Wifi className="w-5 h-5" />
                      {b.name.includes('Phone') && <PhoneCall className="w-5 h-5" />}
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B2340] font-heading">{b.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#0B2340] font-mono">${b.price}</span>
                      <span className="text-xs text-slate-500">/mo {b.term}</span>
                    </div>
                    <p className="text-xs font-mono font-bold text-[#0B5FD6]">{b.speed}</p>
                    <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-200 pt-4">
                      {b.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CallButton className="w-full py-3.5 text-xs mt-6" />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Free features */}
        <motion.section
          id="sb-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] text-xs font-mono font-bold tracking-wider uppercase">
                Spectrum Business Internet Benefits
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B2340] tracking-tight">
                Reliable Speed Plus Free Business Features
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Your business needs a network it can count on. Spectrum Business pairs fiber-rich connectivity with popular
                business tools at no extra cost, a value of more than $50 every month.
              </p>
            </div>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Router, title: 'Free Internet Modem', desc: 'No monthly modem rental fees. Your modem is included with service.' },
                { icon: ShieldCheck, title: 'Free Desktop Security', desc: 'Security suite with 25 free device licenses and real-time threat protection.' },
                { icon: Globe, title: 'Free Business Domain', desc: 'Claim a professional web address for your business at no charge.' },
                { icon: AtSign, title: 'Free Custom Email', desc: 'Branded email addresses that match your business domain.' }
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0B5FD6] transition-all space-y-3 group interactive"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#0B5FD6] flex items-center justify-center group-hover:bg-[#0B5FD6] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B2340] font-heading">{f.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Advanced services */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B2340] text-center">
                Elevate Your Connectivity with Spectrum Business Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Wifi,
                    kicker: 'More security. More control.',
                    title: 'Advanced WiFi',
                    desc: 'Let your team move around the office, collaborate and connect securely to your business network.'
                  },
                  {
                    icon: Zap,
                    kicker: 'Constant connectivity.',
                    title: 'Wireless Internet Backup',
                    desc: 'Stay online even when the power goes out, so customers and payments keep flowing.'
                  },
                  {
                    icon: Server,
                    kicker: 'Work remotely with ease.',
                    title: 'Static IP',
                    desc: 'Manage servers, cameras and security systems remotely with a dedicated Static IP address.'
                  }
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="p-6 rounded-2xl bg-[#0B2340] text-white space-y-3">
                      <Icon className="w-7 h-7 text-sky-300" />
                      <p className="text-[11px] font-mono uppercase tracking-wider text-sky-300">{s.kicker}</p>
                      <h3 className="text-lg font-bold font-heading">{s.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="py-16 bg-white border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold tracking-wider uppercase">
                Included With Every Plan
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-[#0B2340]">Safeguard Your Business Network</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every Spectrum Business Internet plan comes with complimentary, best-in-class desktop security to help protect your
                computers from viruses, malware and online threats.
              </p>
              <CallButton className="px-6 py-3 text-sm" />
            </div>
            <ul className="space-y-4">
              {[
                '25 free security licenses for your business devices',
                'Real-time protection against viruses and malware',
                'Six-time winner of AV-TEST’s “Best Protection” award'
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <Lock className="w-6 h-6 text-[#0B5FD6] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Business phone */}
        <motion.section
          id="sb-phone"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="py-16 bg-gradient-to-br from-sky-50 to-white border-t border-slate-200 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4 order-2 md:order-1">
              {[
                'Free unlimited long distance calling for every employee',
                'Keep your existing business phone number and equipment',
                '35+ advanced calling features like Call Hunting and Call Logs'
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <PhoneCall className="w-6 h-6 text-[#0B5FD6] shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{t}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4 order-1 md:order-2">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] text-xs font-mono font-bold tracking-wider uppercase">
                Spectrum Business Phone
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-[#0B2340]">A Dependable Way to Stay Connected</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Give customers a crystal-clear connection every time they call. Spectrum Business Voice delivers reliable phone
                service with the features growing businesses rely on.
              </p>
              <CallButton className="px-6 py-3 text-sm" />
            </div>
          </div>
        </motion.section>

        {/* How to order */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="font-heading text-3xl font-extrabold text-[#0B2340] text-center">
              How to Get Spectrum Business in 3 Easy Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Call a Spectrum Business Expert', desc: `Dial ${PHONE_DISPLAY} to confirm service availability at your business address.` },
                { step: '02', title: 'Pick Your Plan or Bundle', desc: 'Compare Internet, Phone and Mobile options and choose the best value for your team.' },
                { step: '03', title: 'Schedule Free Installation', desc: 'A professional technician sets up your service so your business gets online fast.' }
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:border-[#0B5FD6] transition-colors">
                  <span className="font-mono text-4xl font-extrabold text-[#0B5FD6]/30">{s.step}</span>
                  <h3 className="text-lg font-bold text-[#0B2340] font-heading">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="sb-faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0B5FD6] text-xs font-mono font-bold tracking-wider uppercase">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0B2340] tracking-tight">
                Spectrum Business Internet FAQ
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left font-bold text-[#0B2340] text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#0B5FD6] transition-colors"
                    >
                      <h3 className="font-heading">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 text-[#0B5FD6] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-[#0B2340] via-[#0B3F80] to-[#0B5FD6] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Ready to Upgrade Your Business Internet?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
              Talk to a Spectrum Business specialist today to check availability, compare plans and bundles, and lock in the
              best current offer for your business.
            </p>
            <a
              href={PHONE_TEL}
              className="inline-flex px-8 py-4 rounded-2xl bg-white text-[#0B2340] text-base font-extrabold hover:bg-sky-50 transition-all shadow-xl hover:scale-[1.03] items-center justify-center gap-3 font-mono interactive"
            >
              <Phone className="w-5 h-5 fill-current animate-pulse" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="inline-block bg-white rounded-xl p-3">
                <img src={LOGO_SRC} alt="Spectrum Authorized Channel Partner" width={1200} height={404} className="h-10 w-auto" loading="lazy" />
              </div>
              <p className="leading-relaxed">
                Area Internet Providers helps businesses compare and order Spectrum Business Internet, Voice and Mobile services
                by phone.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase font-mono">Contact Information</h4>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href={PHONE_TEL} className="text-white hover:underline font-mono">{PHONE_DISPLAY}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:info@areainternetproviders.com" className="text-slate-300 hover:underline font-mono">info@areainternetproviders.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span className="text-slate-300">1419 Carter St, Metropolis, IL 62960</span>
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase font-mono">Legal & Policy Links</h4>
              <div className="flex flex-col space-y-1 text-slate-300">
                {onNavigateToPrivacy && (
                  <button onClick={onNavigateToPrivacy} className="text-left hover:text-sky-400 transition-colors">Privacy Policy</button>
                )}
                {onNavigateToTerms && (
                  <button onClick={onNavigateToTerms} className="text-left hover:text-sky-400 transition-colors">Terms of Service</button>
                )}
                <button onClick={onBackToHome} className="text-left hover:text-sky-400 transition-colors">Return to Main Website</button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] leading-relaxed space-y-2">
            <p className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <strong className="text-slate-200">DISCLAIMER:</strong> Areainternetproviders.com is a Spectrum Business Authorized
              Channel Partner and is not the official Spectrum website. Spectrum, Spectrum Business and related logos are
              trademarks of Charter Communications. Pricing, speeds, features and availability shown are for informational purposes,
              vary by service address and are subject to change. Speeds are wired, maximum download speeds; actual speeds may vary.
              Contact us to confirm current offers at your location.
            </p>
            <p>© {new Date().getFullYear()} Area Internet Providers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl">
        <CallButton className="w-full py-3 text-xs whitespace-nowrap" label={`Call Spectrum Business: ${PHONE_DISPLAY}`} />
      </div>
    </div>
  );
};
