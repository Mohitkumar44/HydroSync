'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { testimonialsData } from '@/lib/data';
import { Testimonial } from '@/lib/types';
import { 
  Star, 
  Quote, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  Users,
  Sparkles
} from 'lucide-react';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<'all' | 'student' | 'client' | 'institution'>('all');
  const [reviews, setReviews] = useState<Testimonial[]>(testimonialsData);

  // Review submission state
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [type, setType] = useState<'student' | 'client' | 'institution'>('student');
  const [rating, setRating] = useState(5);
  const [highlight, setHighlight] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filtered = reviews.filter((r) => filter === 'all' || r.type === filter);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: Testimonial = {
      id: `t-${Date.now()}`,
      name,
      role,
      organization,
      type,
      rating,
      highlight,
      content,
      date: 'Just now',
    };
    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setRole('');
      setOrganization('');
      setHighlight('');
      setContent('');
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Authentic Experiences
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Student Reviews, Client Feedback & Success Stories
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Read verified feedback from our engineering students placed in tier-1 tech firms, university HODs who hosted our workshops, and enterprise IoT clients.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'All Reviews' },
          { id: 'student', label: 'Student Reviews' },
          { id: 'institution', label: 'College & School HODs' },
          { id: 'client', label: 'Enterprise & R&D Clients' },
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

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((r) => (
          <div
            key={r.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#F2F8FC] dark:bg-slate-800 text-slate-500">
                  {r.type}
                </span>
              </div>

              <div className="text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] mb-2">{r.highlight}</div>
              <p className="text-xs text-[#243447] dark:text-slate-300 italic leading-relaxed mb-4">
                "{r.content}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-[#12345B] dark:text-white">{r.name}</div>
                <div className="text-[11px] text-slate-400">{r.role} • {r.organization}</div>
              </div>
              <span className="text-[10px] text-slate-400">{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Your Review Form */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 max-w-3xl mx-auto shadow-xs">
        <h2 className="text-lg font-bold text-[#12345B] dark:text-white mb-1">Are you an Alumni or Partner? Leave Your Review</h2>
        <p className="text-xs text-slate-500 mb-6">Your honest feedback inspires incoming engineering cohorts.</p>

        {submitted ? (
          <div className="p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs rounded-xl font-bold text-center">
            ✓ Thank you! Your testimonial has been verified and added to the board.
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Varun Kapoor"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Current Role & Company *</label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. IoT Engineer at Schneider"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="student">Student / Alumni</option>
                  <option value="institution">College / Faculty</option>
                  <option value="client">Client / Industry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Key Takeaway / Highlight Headline *</label>
                <input
                  type="text"
                  required
                  value={highlight}
                  onChange={(e) => setHighlight(e.target.value)}
                  placeholder="e.g. Gained hands-on confidence in FreeRTOS"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Detailed Experience *</label>
              <textarea
                rows={3}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your experience with the hardware kit, live mentors, and final project..."
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg transition"
            >
              Post Testimonial
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
