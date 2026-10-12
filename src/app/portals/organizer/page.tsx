'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { eventsData } from '@/lib/data';
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  Award, 
  Plus, 
  UploadCloud, 
  BarChart3, 
  Send,
  LogOut
} from 'lucide-react';

export default function EventOrganizerPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'events' | 'create' | 'attendance' | 'certificates'>('events');

  // Event creation form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('hackathon');
  const [date, setDate] = useState('2026-11-20');
  const [createdSuccess, setCreatedSuccess] = useState(false);

  // Attendees list state
  const [attendees, setAttendees] = useState([
    { id: 'REG-101', name: 'Vikram Joshi', email: 'vikram@college.edu', event: 'HealthTech Hackathon', checkedIn: true },
    { id: 'REG-102', name: 'Megha Sen', email: 'megha@tech.in', event: 'HealthTech Hackathon', checkedIn: false },
    { id: 'REG-103', name: 'Anish Roy', email: 'anish@mit.edu', event: 'LoRaWAN Webinar', checkedIn: true },
  ]);

  const toggleCheckIn = (id: string) => {
    setAttendees(attendees.map(a => a.id === id ? { ...a, checkedIn: !a.checkedIn } : a));
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setCreatedSuccess(true);
    setTimeout(() => {
      setTitle('');
      setCreatedSuccess(false);
      setActiveTab('events');
    }, 1500);
  };

  if (!isAuthenticated) {
    return (
      <div className="py-24 max-w-md mx-auto px-4">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#12345B] dark:text-white">Event Organizer Login</h1>
            <p className="text-xs text-slate-500 mt-1">Manage hackathons, attendee check-ins & digital certificate distributions</p>
          </div>
          <button onClick={() => setIsAuthenticated(true)} className="w-full py-2.5 bg-[#12345B] text-white text-xs font-bold rounded-lg">
            Demo Organizer Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 to-[#12345B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold">Event Operations Desk</h1>
          <p className="text-xs text-slate-200 mt-0.5">National Hackathons, Webinars & Workshop Operations Panel</p>
        </div>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold flex items-center gap-1"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DFE8F0] dark:border-slate-800 pb-3 overflow-x-auto text-xs font-bold">
        {[
          { id: 'events', label: 'Managed Events' },
          { id: 'create', label: 'Create New Event' },
          { id: 'attendance', label: 'Attendee Check-In & Badges' },
          { id: 'certificates', label: 'Issue & Upload Certificates' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === tab.id
                ? 'bg-[#1769AA] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events View */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.map((ev) => (
              <div key={ev.id} className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-purple-600">{ev.categoryLabel}</span>
                  <span className="text-slate-400">{ev.seatsBooked} / {ev.seatsTotal} Registered</span>
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">{ev.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{ev.description}</p>
                <div className="pt-2 flex justify-between items-center text-xs border-t">
                  <span className="text-slate-400">{ev.date}</span>
                  <button onClick={() => setActiveTab('attendance')} className="text-[#1769AA] font-bold hover:underline">
                    Manage Roster →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Event */}
      {activeTab === 'create' && (
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 max-w-2xl space-y-4">
          <h2 className="text-lg font-bold text-[#12345B] dark:text-white">Publish a New Hackathon or Webinar</h2>
          {createdSuccess ? (
            <div className="p-4 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl">
              ✓ Event registered successfully and queued for public discovery!
            </div>
          ) : (
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Edge Robotics Challenge 2026"
                  className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                  >
                    <option value="hackathon">Hackathon</option>
                    <option value="webinar">Webinar</option>
                    <option value="workshop-series">Workshop Series</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                  />
                </div>
              </div>
              <button type="submit" className="px-6 py-2.5 bg-[#1769AA] text-white text-xs font-bold rounded-lg">
                Publish Event to Website
              </button>
            </form>
          )}
        </div>
      )}

      {/* Attendance & Check-In */}
      {activeTab === 'attendance' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">Attendee Check-In Roster</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F243E]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b text-slate-500">
                <tr>
                  <th className="p-3">Ticket ID</th>
                  <th className="p-3">Participant</th>
                  <th className="p-3">Event</th>
                  <th className="p-3">Check-In Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {attendees.map((a) => (
                  <tr key={a.id}>
                    <td className="p-3 font-mono font-bold">{a.id}</td>
                    <td className="p-3 font-semibold text-[#12345B] dark:text-white">{a.name} <span className="text-slate-400 font-normal">({a.email})</span></td>
                    <td className="p-3 text-slate-500">{a.event}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${a.checkedIn ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                        {a.checkedIn ? 'Checked In' : 'Pending Check-In'}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleCheckIn(a.id)}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold text-[11px]"
                      >
                        {a.checkedIn ? 'Revoke Check-In' : 'Mark Checked In'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Certificates Distribution */}
      {activeTab === 'certificates' && (
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 max-w-2xl space-y-4">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">Batch Certificate Generation & Upload</h2>
          <p className="text-xs text-slate-500">Automatically creates verifiable QR certificates for all marked-in attendees.</p>
          <button
            onClick={() => alert('Batch generated 120 verifiable participation certificates with live QR links.')}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Generate & Email Certificates to Checked-In Attendees</span>
          </button>
        </div>
      )}
    </div>
  );
}
