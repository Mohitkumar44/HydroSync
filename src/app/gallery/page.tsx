'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Image as ImageIcon, 
  Video, 
  Award, 
  Calendar, 
  ExternalLink,
  Sparkles,
  Play
} from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'events' | 'workshops' | 'projects' | 'videos'>('all');

  const galleryItems = [
    {
      id: 'g-1',
      title: 'National Smart HealthTech Hackathon 2026 Demo Day',
      category: 'events',
      categoryLabel: 'Event Photos',
      caption: 'Over 120 shortlisted student teams demonstrating live biomedical and water telemetry nodes in the main hall.',
      date: 'Jan 2026',
      mediaType: 'photo',
    },
    {
      id: 'g-2',
      title: 'DTU 5-Day Intensive TinyML & FreeRTOS Lab Workshop',
      category: 'workshops',
      categoryLabel: 'Workshop Photos',
      caption: 'Students capturing I2C bus traffic using 8-channel logic analyzers and debugging ESP32 FreeRTOS tasks.',
      date: 'Dec 2025',
      mediaType: 'photo',
    },
    {
      id: 'g-3',
      title: 'HydroSense IP68 Water Sensor Field Deployment Testbed',
      category: 'projects',
      categoryLabel: 'Project Photos',
      caption: 'Outdoor calibration of solar-powered analog turbidity and pH probes at the pilot municipal telemetry station.',
      date: 'Nov 2025',
      mediaType: 'photo',
    },
    {
      id: 'g-4',
      title: 'Live Lab Session: Soldering & Assembling 4-Layer KiCad Boards',
      category: 'workshops',
      categoryLabel: 'Workshop Photos',
      caption: 'Hands-on hot air reflow soldering of SMD 0603 passive components and QFN microcontrollers.',
      date: 'Oct 2025',
      mediaType: 'photo',
    },
    {
      id: 'g-5',
      title: 'Video Documentary: Inside the HydroSync R&D Hardware Lab',
      category: 'videos',
      categoryLabel: 'Video Gallery',
      caption: 'A 6-minute deep dive showing our firmware validation jigs, 3D printing farm, and spectrum analyzers.',
      date: 'Feb 2026',
      mediaType: 'video',
      videoDuration: '6:14',
    },
    {
      id: 'g-6',
      title: 'NIT College Technical Symposium Keynote & Project Expo',
      category: 'events',
      categoryLabel: 'Event Photos',
      caption: 'Founder Er. Rajesh Varma delivering the keynote address on "The Future of Edge AI Microcontrollers".',
      date: 'Aug 2025',
      mediaType: 'photo',
    },
  ];

  const filtered = galleryItems.filter(item => filter === 'all' || item.category === filter);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Visual Moments & Milestones
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          HydroSync Innovation Gallery
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Witness our hands-on workshops, national hackathons, hardware circuit fabrication sessions, and campus events.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'All Photos & Media' },
          { id: 'events', label: 'Hackathons & Events' },
          { id: 'workshops', label: 'Hands-on Workshops' },
          { id: 'projects', label: 'Lab & Field Prototypes' },
          { id: 'videos', label: 'Video Showcase' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              filter === tab.id
                ? 'bg-[#1769AA] text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition"
          >
            {/* Visual Header / Thumbnail Box */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-[#12345B] to-[#1769AA] flex items-center justify-center p-6 text-white text-center">
              {item.mediaType === 'video' ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-[#20A7D7] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                  <span className="text-[11px] font-mono bg-black/60 px-2 py-0.5 rounded text-slate-200">
                    Duration: {item.videoDuration}
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <ImageIcon className="w-10 h-10 text-[#20A7D7] mx-auto opacity-80 group-hover:scale-110 transition" />
                  <div className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
                    HydroSync Archive
                  </div>
                </div>
              )}

              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <span className="absolute top-3 right-3 text-[10px] font-semibold text-slate-300 bg-black/40 px-2 py-0.5 rounded">
                {item.date}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-2">
              <h3 className="text-base font-bold text-[#12345B] dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">
                {item.caption}
              </p>
            </div>

            <div className="p-4 bg-[#F2F8FC] dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-medium">Verified Event Documentation</span>
              <Link href="/events" className="text-[#1769AA] dark:text-[#20A7D7] font-bold hover:underline">
                View Event Info →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
