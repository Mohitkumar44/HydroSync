'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { eventsData } from '@/lib/data';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Image as ImageIcon,
  Sparkles,
  Trophy
} from 'lucide-react';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = eventsData.filter((ev) => {
    if (filter === 'all') return true;
    return ev.status === filter;
  });

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Innovation Showcases & Competitions
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Hackathons, Webinars & Workshop Series
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Participate in national hardware challenges, attend expert webinars on cutting-edge edge tech, and earn recognized event certificates.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            filter === 'all'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          All Events ({eventsData.length})
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            filter === 'upcoming'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Upcoming Hackathons & Webinars
        </button>
        <button
          onClick={() => setFilter('past')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            filter === 'past'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          Past Bootcamps & Gallery
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-lg transition space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  ev.category === 'hackathon' 
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                    : ev.category === 'webinar'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                }`}>
                  {ev.categoryLabel}
                </span>

                <span className={`text-xs font-bold ${ev.status === 'upcoming' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                  {ev.status === 'upcoming' ? '● Upcoming' : 'Completed'}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#12345B] dark:text-white mb-2">{ev.title}</h2>
              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-4">{ev.description}</p>

              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#F2F8FC] dark:bg-slate-800/60 text-xs mb-4">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Date & Time</div>
                  <div className="font-semibold text-[#12345B] dark:text-slate-200 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1769AA]" /> {ev.date}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Venue / Mode</div>
                  <div className="font-semibold text-[#12345B] dark:text-slate-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#20A7D7]" /> {ev.mode} ({ev.venue})
                  </div>
                </div>
              </div>

              {/* Schedule preview */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                <div className="font-bold text-[11px] text-slate-400 uppercase">Event Schedule:</div>
                {ev.schedule.slice(0, 2).map((sc, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="font-mono text-slate-500">{sc.time}</span>
                    <span className="font-medium">{sc.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400">Fee: </span>
                <span className="text-sm font-extrabold text-[#12345B] dark:text-white">
                  {ev.registrationFee === 0 ? 'FREE' : `₹${ev.registrationFee}`}
                </span>
              </div>

              <Link
                href={`/events/${ev.id}`}
                className="px-5 py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg transition flex items-center gap-1"
              >
                <span>{ev.status === 'upcoming' ? 'Register Now' : 'View Recap & Gallery'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Event Gallery & Certificates Highlights */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-300" />
              <h3 className="text-lg font-bold">Event Participation Certificates & Hackathon Awards</h3>
            </div>
            <p className="text-xs text-slate-200">
              Every registered participant receives an official Certificate of Participation. Hackathon finalists and category winners are awarded cash prizes, hardware development boards, and direct internship fast-tracks.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/gallery"
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Event Photo Gallery</span>
            </Link>
            <Link
              href="/certifications"
              className="px-4 py-2.5 rounded-lg bg-[#20A7D7] hover:bg-white hover:text-[#0B1E34] text-[#0B1E34] font-bold text-xs flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Verify Event Certificate</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
