'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData, internshipsData } from '@/lib/data';
import { 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  School, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ApplyNowPage() {
  const [applyType, setApplyType] = useState<'course' | 'internship' | 'trainer' | 'college'>('course');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTarget, setSelectedTarget] = useState(coursesData[0].title);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Fast-Track Application
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Unified Application Portal
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Select what you are applying for below to begin your admission or collaboration process.
        </p>
      </div>

      {/* Program Type Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 'course', label: 'Course Enrollment', icon: GraduationCap },
          { id: 'internship', label: 'Internship Trainee', icon: Briefcase },
          { id: 'trainer', label: 'Technical Trainer', icon: Sparkles },
          { id: 'college', label: 'College MoU', icon: School },
        ].map((item) => {
          const Icon = item.icon;
          const isSelected = applyType === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setApplyType(item.id as any);
                if (item.id === 'course') setSelectedTarget(coursesData[0].title);
                if (item.id === 'internship') setSelectedTarget(internshipsData[0].title);
                if (item.id === 'trainer') setSelectedTarget('Embedded Firmware Trainer');
                if (item.id === 'college') setSelectedTarget('Institutional MoU Partnership');
              }}
              className={`p-4 rounded-xl border text-center transition flex flex-col items-center gap-2 ${
                isSelected
                  ? 'border-[#1769AA] bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] font-bold shadow-sm'
                  : 'border-[#DFE8F0] dark:border-slate-800 bg-white dark:bg-[#0F243E] text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Form Container */}
      <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        {submitted ? (
          <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">Application Submitted!</h2>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Thank you, <strong>{name}</strong>! Your application for <strong>{selectedTarget}</strong> has been received with Reference Code <span className="font-mono font-bold">HS-APP-{Math.floor(10000 + Math.random() * 90000)}</span>. Check your email ({email}) for immediate next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 px-5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Siddharth Verma"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="siddharth@example.com"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Specific Program / Role *</label>
                <input
                  type="text"
                  required
                  value={selectedTarget}
                  onChange={(e) => setSelectedTarget(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Experience / Background Summary</label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention your university, current semester, or relevant technical projects..."
                className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-gradient-to-r from-[#1769AA] to-[#20A7D7] hover:from-[#12345B] hover:to-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
            >
              {loading ? <span>Submitting...</span> : <><Send className="w-4 h-4" /><span>Submit Application</span></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
