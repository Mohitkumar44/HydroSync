'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  BookOpen,
  Briefcase,
  Cpu,
  Layers
} from 'lucide-react';

export default function FAQPage() {
  const [selectedCat, setSelectedCat] = useState<'all' | 'general' | 'course' | 'internship' | 'technical'>('all');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      cat: 'general',
      q: 'What is HydroSync Innovations LLP?',
      a: 'HydroSync Innovations LLP is a registered technology enterprise (LLPIN: ACA-3982) recognized under MSME and Startup India. We specialize in IoT telemetry hardware, Edge AI / TinyML research, industrial firmware prototyping, and hands-on accredited technical education.',
    },
    {
      cat: 'general',
      q: 'Where are your physical headquarters and research facilities located?',
      a: 'Our main hardware laboratory and training center is located at Techno-Park Innovation Center, Sector 62, Noida, Uttar Pradesh, 201309. We also deliver hybrid courses pan-India.',
    },
    {
      cat: 'course',
      q: 'Are hardware kits included with course enrollments?',
      a: 'Yes! For all hardware-designated and hybrid courses (such as IoT & Embedded Systems, Arduino & ESP32, and Electronics Basics), an original, pre-tested physical hardware kit is couriered directly to your residential address at no extra shipping fee.',
    },
    {
      cat: 'course',
      q: 'What if I miss a live session?',
      a: 'Every single live interactive class is recorded in 1080p Full HD and uploaded to the student portal within 2 hours of class conclusion, complete with timestamps, slide decks, and code archives.',
    },
    {
      cat: 'course',
      q: 'How does the verifiable certificate work?',
      a: 'Upon passing final course capstone benchmarks (minimum 75%), an official certificate is generated with a unique Credential ID and cryptographically secure QR code. Anyone scanning the QR code or searching on /certifications can verify its authenticity.',
    },
    {
      cat: 'internship',
      q: 'Do you offer paid internships with stipends?',
      a: 'Yes. All 3-month and 6-month technical internships provide a monthly performance stipend ranging from ₹8,000 to ₹18,000 based on interview evaluations and practical tasks.',
    },
    {
      cat: 'internship',
      q: 'Can final-year students use this for university semester credits?',
      a: 'Yes, our formal offer letters, bi-weekly progress evaluations, and experience certificates satisfy semester-long internship mandates at universities across India.',
    },
    {
      cat: 'technical',
      q: 'Why focus on TinyML and microcontrollers rather than cloud GPUs?',
      a: 'Industrial IoT nodes run on batteries and require instantaneous sub-millisecond anomaly detection without bandwidth expenses or cloud latency. TinyML allows microcontrollers running on milliwatts to execute neural networks locally at the edge.',
    },
    {
      cat: 'technical',
      q: 'What development tools and software do we use?',
      a: 'We train students on standard industrial toolchains: VS Code with PlatformIO, ESP-IDF, STM32CubeIDE, KiCad 8 for schematic/PCB layout, Saleae Logic Analyzer software, Edge Impulse, and FreeRTOS.',
    },
  ];

  const filtered = faqs.filter((f) => {
    const matchCat = selectedCat === 'all' || f.cat === selectedCat;
    const matchSearch = f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" /> Answers & Clarifications
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Everything you need to know about our courses, hardware kits, internship stipends, institutional partnerships, and technical tools.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions by keyword, kit, certificate, stipend..."
          className="w-full pl-11 pr-4 py-3 text-xs rounded-xl border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA] shadow-sm"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'general', label: 'General FAQ' },
          { id: 'course', label: 'Course & Fee FAQ' },
          { id: 'internship', label: 'Internship FAQ' },
          { id: 'technical', label: 'Technical & Tools FAQ' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCat(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedCat === tab.id
                ? 'bg-[#1769AA] text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="space-y-3">
        {filtered.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#12345B] dark:text-white hover:text-[#1769AA] transition"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#1769AA] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-[#66778A] dark:text-slate-300 leading-relaxed border-t border-slate-50 dark:border-slate-800/60">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-6 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 text-center space-y-2">
        <h3 className="text-sm font-bold text-[#12345B] dark:text-white">Didn’t find what you were looking for?</h3>
        <p className="text-xs text-slate-500">Our academic mentors and admissions counselors are on stand-by.</p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block px-5 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg hover:bg-[#12345B] transition"
          >
            Contact Admissions Desk →
          </Link>
        </div>
      </div>
    </div>
  );
}
