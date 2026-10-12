'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { partnersData } from '@/lib/data';
import { 
  Building2, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PartnersPage() {
  const [partnerType, setPartnerType] = useState('Academic Partner (Colleges/Universities)');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [proposal, setProposal] = useState('');
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
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Collaborative Ecosystem
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Our Academic & Industry Partners
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          We collaborate with global semiconductor ecosystems, industrial IoT networks, and leading technology institutes to pioneer hardware engineering literacy.
        </p>
      </div>

      {/* Academic Partners */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#1769AA]" />
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Academic MoUs & Institutional Alliances</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnersData.academic.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F2F8FC] dark:bg-slate-800 mx-auto flex items-center justify-center text-[#1769AA] dark:text-[#20A7D7] font-bold mb-3">
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{p.type}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-emerald-600 font-semibold">
                Active Bilateral MoU
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Partners */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#20A7D7]" />
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Industry Technology Partners</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnersData.industry.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F2F8FC] dark:bg-slate-800 mx-auto flex items-center justify-center text-[#1769AA] dark:text-[#20A7D7] font-bold mb-3">
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{p.type}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#1769AA] dark:text-[#20A7D7] font-semibold">
                Hardware Ecosystem Member
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Form */}
      <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Partner With Us</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Initiate a Strategic Partnership</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mt-1">
            Let's collaborate on joint hackathons, hardware co-development, technology sponsorships, or academic research.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Proposal Received!</h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Thank you, <strong>{contactName}</strong>. Our partnerships committee will evaluate the collaboration proposal for <strong>{orgName}</strong> ({email}) promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Organization / Company Name *</label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. Semtech / College Name"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Dr. K. Raman"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Official Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@org.com"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Partnership Category</label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Academic Partner (Colleges/Universities)">Academic Partner (Colleges/Universities)</option>
                  <option value="Industry / Hardware Technology Partner">Industry / Hardware Technology Partner</option>
                  <option value="Event / Hackathon Sponsorship">Event / Hackathon Sponsorship</option>
                  <option value="Research & Joint Patent Development">Research & Joint Patent Development</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Collaboration Proposal Details</label>
              <textarea
                rows={4}
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                placeholder="Describe objectives, expected outcomes, or mutual benefits..."
                className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
            >
              {loading ? <span>Submitting...</span> : <><Send className="w-4 h-4" /><span>Submit Partnership Proposal</span></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
