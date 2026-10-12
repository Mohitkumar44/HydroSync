'use client';

import React from 'react';
import Link from 'next/link';
import { companyDetails, partnersData } from '@/lib/data';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Lightbulb, 
  Award, 
  Users, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  ArrowRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    {
      year: '2023',
      title: 'Foundation & R&D Lab Setup',
      desc: 'HydroSync Innovations LLP was registered as an LLP with MSME and Startup India certification. Built initial prototypes for smart water monitoring.',
    },
    {
      year: '2024',
      title: 'Flagship IoT Curriculum & First 1,000 Students',
      desc: 'Launched comprehensive IoT & Embedded firmware bootcamps with physical hardware kits dispatched across India.',
    },
    {
      year: '2025',
      title: 'National MoUs & TinyML Research Breakthroughs',
      desc: 'Partnered with 45+ premier engineering institutes. Published open research on quantized Edge AI inference for motor vibration analysis.',
    },
    {
      year: '2026',
      title: 'HydroSense Water Grid & National Hackathon',
      desc: 'Field deployed our smart water testing nodes in 15+ municipalities and hosted the National Smart HealthTech Hackathon.',
    },
  ];

  const values = [
    {
      title: 'Hardware-First Pragmatism',
      desc: 'We believe real engineering happens at the junction of silicon and firmware. No purely theoretical lectures without circuit probing.',
      icon: Lightbulb,
    },
    {
      title: 'Healthier Tomorrow',
      desc: 'Technology must serve humanity. Our research prioritizes water purification telemetry, assistive health devices, and sustainable clean energy.',
      icon: Target,
    },
    {
      title: 'Open Knowledge & Integrity',
      desc: 'We verify our achievements and publish open hardware schematics and code samples to build a vibrant engineering community.',
      icon: ShieldCheck,
    },
    {
      title: 'Student Empowerment',
      desc: 'We provide true mentorship, live debugging support, and tangible career pathways into core electronics and IoT industries.',
      icon: Users,
    },
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header / Our Story */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          About HydroSync Innovations LLP
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Innovation for a Healthier Tomorrow
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Founded by embedded firmware veterans and AI researchers, HydroSync Innovations LLP transforms how engineering students, researchers, and industries approach hardware, IoT, and edge intelligence.
        </p>
      </div>

      {/* 2. Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#12345B] to-[#1769AA] text-white shadow-lg space-y-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Compass className="w-5 h-5 text-[#20A7D7]" />
          </div>
          <h2 className="text-xl font-bold">Our Vision</h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            To become India’s premier hub for accessible, high-performance hardware innovation and IoT education—nurturing millions of engineers capable of designing world-class indigenous electronics for public health and environmental sustainability.
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#20A7D7]/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-[#20A7D7]" />
          </div>
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Our Mission</h2>
          <p className="text-sm text-[#66778A] dark:text-slate-300 leading-relaxed">
            Bridge the academic-industry gap by delivering rigorous, hardware-in-the-loop technical training, designing resilient IoT telemetry products, providing verifiable mentorship, and establishing state-of-the-art innovation centers in educational institutions.
          </p>
        </div>
      </div>

      {/* 3. Company Registration Details & Statutory Verification */}
      <div className="rounded-2xl p-8 bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Verified Corporate Entity</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Company Registration & Accreditations</h2>
          <p className="text-xs text-slate-500 mt-1">All registrations are active and verifiable through official Government of India portals.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#0B1E34] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-400 font-semibold uppercase">LLP Identification No.</div>
            <div className="text-lg font-mono font-bold text-[#12345B] dark:text-white mt-1">{companyDetails.llpin}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">Ministry of Corporate Affairs (MCA)</div>
          </div>

          <div className="bg-white dark:bg-[#0B1E34] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-400 font-semibold uppercase">MSME Udyam Registration</div>
            <div className="text-lg font-mono font-bold text-[#12345B] dark:text-white mt-1">{companyDetails.msme}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">Ministry of MSME, Govt. of India</div>
          </div>

          <div className="bg-white dark:bg-[#0B1E34] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-xs text-slate-400 font-semibold uppercase">Startup India Recognition</div>
            <div className="text-lg font-mono font-bold text-[#12345B] dark:text-white mt-1">{companyDetails.startupIndia}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">DPIIT, Govt. of India Recognized</div>
          </div>
        </div>
      </div>

      {/* 4. Core Values */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">The HydroSync Code</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Our Core Operating Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#1769AA]/10 flex items-center justify-center text-[#1769AA] dark:text-[#20A7D7] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white mb-2">{v.title}</h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Our Journey / Timeline */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Milestones</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Our Journey So Far</h2>
        </div>

        <div className="relative border-l-2 border-[#1769AA]/30 dark:border-slate-700 ml-4 md:ml-32 space-y-8 pb-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#1769AA] border-4 border-white dark:border-[#0B1E34]" />
              <div className="md:absolute md:-left-28 md:top-1 text-sm font-bold text-[#1769AA] dark:text-[#20A7D7]">
                {item.year}
              </div>
              <div className="bg-white dark:bg-[#0F243E] p-5 rounded-xl border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">{item.title}</h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Why Choose Us */}
      <div className="bg-gradient-to-r from-[#12345B] to-[#0B1E34] rounded-2xl p-8 sm:p-10 text-white">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#20A7D7]">Distinct Advantage</span>
          <h2 className="text-2xl font-bold mt-1">Why Students & Institutions Choose HydroSync</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold">Real Hardware In Your Hands</h3>
            <p className="text-xs text-slate-300">We don't limit you to web simulators. Every student in our cohort receives actual physical microcontroller development kits.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold">Zero Fake Credentials</h3>
            <p className="text-xs text-slate-300">Our certificates feature cryptographic QR codes verified through our live portal to ensure employer credibility.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold">True Core Placement Referrals</h3>
            <p className="text-xs text-slate-300">Our alumni work in automotive tier-1s, IoT startups, and smart grid automation firms with dedicated referrals.</p>
          </div>
        </div>
      </div>

      {/* 7. Affiliations, Collaborations & Media Coverage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white mb-3">Affiliations & Collaborations</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mb-4">
            We actively collaborate with technical universities, technical student chapters (IEEE, IETE), and hardware developer alliances across the country.
          </p>
          <div className="space-y-2">
            {partnersData.academic.slice(0, 3).map((a, i) => (
              <div key={i} className="p-3 bg-[#F2F8FC] dark:bg-slate-800/60 rounded-lg text-xs font-semibold text-[#12345B] dark:text-slate-200 flex justify-between items-center">
                <span>{a.name}</span>
                <span className="text-[11px] text-slate-400">{a.type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white mb-3">Media Coverage & Mentions</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mb-4">
            Recognized by regional and national technical media for innovative work in student hardware literacy and clean drinking water telemetry.
          </p>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-[#F2F8FC] dark:bg-slate-800/40">
              <div className="font-bold text-[#12345B] dark:text-white">TechInAsia Spotlight</div>
              <div className="text-slate-500 text-[11px]">"How HydroSync Innovations is training the next generation of Edge AI engineers in Tier-2 Indian colleges."</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-[#F2F8FC] dark:bg-slate-800/40">
              <div className="font-bold text-[#12345B] dark:text-white">National Innovation Times</div>
              <div className="text-slate-500 text-[11px]">"HydroSense: Smart LoRa sensors tackle municipal water contamination before it spreads."</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
