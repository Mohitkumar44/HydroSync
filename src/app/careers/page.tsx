'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Embedded Firmware Architect',
      department: 'Engineering & R&D',
      location: 'Noida Office / Hybrid',
      type: 'Full-Time',
      experience: '4+ Years',
      desc: 'Architect commercial IoT firmware, FreeRTOS device drivers, and CAN/LoRa communication stacks for industrial clients.',
    },
    {
      title: 'Edge AI / TinyML Research Engineer',
      department: 'AI & Research Lab',
      location: 'Remote / Noida',
      type: 'Full-Time',
      experience: '2+ Years',
      desc: 'Design, quantize, and benchmark deep learning models for deployment on Cortex-M and Xtensa microcontrollers.',
    },
    {
      title: 'Lead Technical Trainer (IoT & Embedded)',
      department: 'Academic Operations',
      location: 'Noida / Campus Travel',
      type: 'Full-Time',
      experience: '2+ Years',
      desc: 'Conduct high-energy hands-on workshops, lecture live cohorts, build hardware lab demos, and mentor college students.',
    },
    {
      title: 'Hardware Lab & PCB Assembly Technician',
      department: 'Hardware Operations',
      location: 'Noida Lab',
      type: 'Full-Time',
      experience: '1+ Year',
      desc: 'Handle component stocking, SMD reflow soldering, logic analyzer bench testing, and hardware kit parcel logistics.',
    },
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Join Our Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Careers at HydroSync Innovations LLP
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Build groundbreaking hardware products, advance Edge AI research, and inspire the engineers of tomorrow.
        </p>
      </div>

      {/* Trainee Internships Callout */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#20A7D7]">Students & Fresh Graduates</span>
          <h2 className="text-lg font-bold">Looking for Trainee Internships?</h2>
          <p className="text-xs text-slate-200 mt-0.5">Explore our paid 3 to 6-month engineering trainee cohorts with hardware kits included.</p>
        </div>
        <Link
          href="/internships"
          className="px-5 py-2.5 rounded-xl bg-white text-[#12345B] text-xs font-bold hover:bg-slate-100 transition flex-shrink-0"
        >
          View Internship Openings →
        </Link>
      </div>

      {/* Full Time Openings */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Current Full-Time Openings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((j, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-[11px]">
                    {j.department}
                  </span>
                  <span className="text-slate-400">{j.type}</span>
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white mb-2">{j.title}</h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-4">{j.desc}</p>
                
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#1769AA]" /> {j.location}</span>
                  <span>•</span>
                  <span>Exp: {j.experience}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold">Competitive Industry Package</span>
                <Link
                  href="/apply"
                  className="px-4 py-2 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold rounded-lg transition"
                >
                  Apply For Role
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
