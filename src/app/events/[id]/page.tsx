'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { eventsData } from '@/lib/data';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Award,
  Sparkles,
  Users
} from 'lucide-react';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params?.id as string;
  const eventItem = eventsData.find((e) => e.id === eventId);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [teamSize, setTeamSize] = useState('Individual (1 member)');
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!eventItem) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h1 className="text-2xl font-bold text-[#12345B] dark:text-white">Event Not Found</h1>
        <Link href="/events" className="inline-block px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg">
          Back to Events
        </Link>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 700);
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Events</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Event details, Speaker & Full Schedule */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-bold">
                {eventItem.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-medium">Mode: {eventItem.mode}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] dark:text-white leading-tight">
              {eventItem.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300 mt-4 leading-relaxed">
              {eventItem.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 text-xs">
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Date & Duration</div>
              <div className="font-bold text-[#12345B] dark:text-white mt-0.5">{eventItem.date}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Venue / Platform</div>
              <div className="font-bold text-[#12345B] dark:text-white mt-0.5">{eventItem.venue}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Seats Remaining</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {eventItem.seatsTotal - eventItem.seatsBooked} of {eventItem.seatsTotal}
              </div>
            </div>
          </div>

          {/* Keynote Speakers */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 space-y-3">
            <h2 className="text-base font-bold text-[#12345B] dark:text-white">Featured Mentors & Speakers</h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1769AA] text-white flex items-center justify-center font-bold">
                {eventItem.speaker.charAt(0)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">{eventItem.speaker}</h3>
                <p className="text-xs text-slate-500">{eventItem.speakerRole}</p>
              </div>
            </div>
          </div>

          {/* Full Schedule Timeline */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#12345B] dark:text-white">Detailed Program Schedule</h2>
            <div className="space-y-3">
              {eventItem.schedule.map((sc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 flex items-center justify-between">
                  <div className="font-mono text-xs font-bold text-[#1769AA] dark:text-[#20A7D7]">{sc.time}</div>
                  <div className="text-xs font-medium text-[#243447] dark:text-slate-200">{sc.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Registration Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="text-xs text-slate-500 font-semibold uppercase">Registration Pass</div>
              <div className="text-2xl font-extrabold text-[#12345B] dark:text-white mt-1">
                {eventItem.registrationFee === 0 ? 'FREE REGISTRATION' : `₹${eventItem.registrationFee}`}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Includes live Q&A access and verified participation certificate.</p>
            </div>

            {registered ? (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">Registration Confirmed!</h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  Thank you, <strong>{name}</strong>! Your registration pass for <strong>{eventItem.title}</strong> has been secured. Check your email ({email}) for the stream entry credentials.
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-500">Pass ID: EV-2026-{Math.floor(1000 + Math.random() * 9000)}</div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Joshi"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. vikram@college.edu"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">WhatsApp Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Institution / Company *</label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="College or Organization"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                {eventItem.category === 'hackathon' && (
                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Participation Type</label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none"
                    >
                      <option value="Individual (1 member)">Individual (1 member)</option>
                      <option value="Team of 2 members">Team of 2 members</option>
                      <option value="Team of 3-4 members">Team of 3-4 members</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Event Registration</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div>✓ Stream link provided immediately upon registration</div>
              <div>✓ Official certificate issued to all active attendees</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
