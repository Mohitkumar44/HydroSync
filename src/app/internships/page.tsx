'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { internshipsData } from '@/lib/data';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  IndianRupee, 
  CheckCircle2, 
  Send, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

export default function InternshipsPage() {
  const [selectedRole, setSelectedRole] = useState(internshipsData[0].title);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: 'B.Tech / B.E (ECE/EEE/CS)',
    graduationYear: '2026',
    role: internshipsData[0].title,
    mode: 'Hybrid',
    githubPortfolio: '',
    resumeLink: '',
    statement: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real local persistence & feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const internshipFaqs = [
    {
      q: 'Are the internship programs paid?',
      a: 'Yes, all our 3-month and 6-month technical internships provide a monthly performance-based stipend ranging from ₹8,000 to ₹18,000 based on technical interviews and hardware assignments.',
    },
    {
      q: 'Will I receive a physical hardware kit if I join in Remote / Hybrid mode?',
      a: 'Yes! We ship pre-tested development boards (ESP32 / STM32, sensor breakout modules, and debugging probes) directly to your home address at the start of your tenure.',
    },
    {
      q: 'Are these internships recognized for university academic credits?',
      a: 'Absolutely. HydroSync Innovations LLP is a registered corporate entity (LLPIN: ACA-3982) with MSME and Startup India recognitions. Our internship completion certificates and formal evaluation letters fulfill university semester internship requirements.',
    },
    {
      q: 'Can this lead to a full-time job offer (PPO)?',
      a: 'Yes. Top performing interns receive Pre-Placement Offers (PPOs) for Junior Firmware Engineer, Hardware Testing Specialist, and IoT Cloud Developer positions.',
    },
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Overview Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Industry Experiential Learning
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          HydroSync Engineering Internships
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Gain authentic production experience. Work alongside senior hardware architects on real IoT deployments, write bare-metal firmware, develop Edge AI models, and earn monthly stipends.
        </p>
      </div>

      {/* 2. Key Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 text-center shadow-xs">
          <IndianRupee className="w-6 h-6 text-emerald-500 mx-auto mb-1.5" />
          <div className="text-sm font-bold text-[#12345B] dark:text-white">₹8,000 – ₹18,000 / mo</div>
          <div className="text-[11px] text-slate-500">Performance Stipend</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 text-center shadow-xs">
          <Clock className="w-6 h-6 text-[#1769AA] mx-auto mb-1.5" />
          <div className="text-sm font-bold text-[#12345B] dark:text-white">3 to 6 Months</div>
          <div className="text-[11px] text-slate-500">Duration Options</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 text-center shadow-xs">
          <MapPin className="w-6 h-6 text-[#20A7D7] mx-auto mb-1.5" />
          <div className="text-sm font-bold text-[#12345B] dark:text-white">Online, In-Lab & Hybrid</div>
          <div className="text-[11px] text-slate-500">Flexible Modes</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 text-center shadow-xs">
          <Award className="w-6 h-6 text-amber-500 mx-auto mb-1.5" />
          <div className="text-sm font-bold text-[#12345B] dark:text-white">Verified Certificate & LOR</div>
          <div className="text-[11px] text-slate-500">With QR Credential ID</div>
        </div>
      </div>

      {/* 3. Available Programs List */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Available Positions</span>
            <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Open Internship Programs (2026 Cohorts)</h2>
          </div>
          <p className="text-xs text-slate-500 mt-2 md:mt-0">Applications reviewed weekly on rolling basis.</p>
        </div>

        <div className="space-y-6">
          {internshipsData.map((intern) => (
            <div
              key={intern.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-bold">
                      {intern.department}
                    </span>
                    <span className="text-xs text-slate-500">• {intern.openings} Openings</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#12345B] dark:text-white">{intern.title}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1 bg-[#F2F8FC] dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-[#1769AA]" /> {intern.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-[#F2F8FC] dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#20A7D7]" /> {intern.mode}
                  </span>
                  <span className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-lg">
                    <IndianRupee className="w-3.5 h-3.5" /> {intern.stipend}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300 leading-relaxed">
                {intern.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Eligibility & Requirements</h4>
                  <ul className="space-y-1.5 text-xs text-[#243447] dark:text-slate-300">
                    {intern.eligibility.map((el, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1769AA] flex-shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Key Perks & Benefits</h4>
                  <ul className="space-y-1.5 text-xs text-[#243447] dark:text-slate-300">
                    {intern.benefits.map((bn, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{bn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-slate-400">Required Skills:</span>
                  {intern.skillsRequired.map((sk, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[11px] text-slate-700 dark:text-slate-300 font-mono">
                      {sk}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setFormData({ ...formData, role: intern.title });
                    setSelectedRole(intern.title);
                    document.getElementById('internship-application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                >
                  <span>Apply For This Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Application Process Overview */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white">
        <h2 className="text-xl font-bold mb-6 text-center">4-Stage Transparent Selection Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-2xl font-extrabold text-[#20A7D7] mb-1">01</div>
            <div className="text-sm font-bold">Online Application</div>
            <div className="text-xs text-slate-300 mt-1">Submit your academic details and GitHub / project portfolio links.</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-2xl font-extrabold text-[#20A7D7] mb-1">02</div>
            <div className="text-sm font-bold">Technical Quiz / Task</div>
            <div className="text-xs text-slate-300 mt-1">A short 30-minute practical circuit debugging or code comprehension task.</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-2xl font-extrabold text-[#20A7D7] mb-1">03</div>
            <div className="text-sm font-bold">Mentor Discussion</div>
            <div className="text-xs text-slate-300 mt-1">1-on-1 video call discussing your learning goals and project interests.</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-2xl font-extrabold text-[#20A7D7] mb-1">04</div>
            <div className="text-sm font-bold">Offer & Kit Dispatch</div>
            <div className="text-xs text-slate-300 mt-1">Official offer letter issue, stipend agreement & physical lab kit courier.</div>
          </div>
        </div>
      </div>

      {/* 5. Application Form */}
      <div id="internship-application-form" className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Direct Intake Portal</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Submit Your Internship Application</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mt-1">
            Complete the verified form below. Our technical recruitment desk will evaluate your submission within 48 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">Application Successfully Submitted!</h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your application for <strong>{formData.role}</strong> has been received with Tracking ID <span className="font-mono font-bold">HY-INT-{Math.floor(100000 + Math.random() * 900000)}</span>. Check your inbox ({formData.email}) for the assessment link.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">College / University Name *</label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. Delhi Technological University"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Internship Program *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                >
                  {internshipsData.map((it) => (
                    <option key={it.id} value={it.title}>{it.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Preferred Mode *</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                >
                  <option value="Hybrid">Hybrid (Flexible)</option>
                  <option value="Online (Remote)">Online (Remote Pan-India)</option>
                  <option value="Offline (In-Office)">Offline (Noida R&D Lab)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">GitHub / Portfolio Link</label>
                <input
                  type="url"
                  value={formData.githubPortfolio}
                  onChange={(e) => setFormData({ ...formData, githubPortfolio: e.target.value })}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Resume Drive / Cloud Link *</label>
                <input
                  type="url"
                  required
                  value={formData.resumeLink}
                  onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                  placeholder="Google Drive / Dropbox link"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1.5">Why are you interested in this role? (Brief Statement)</label>
              <textarea
                rows={3}
                value={formData.statement}
                onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                placeholder="Mention hardware projects you have experimented with, your interest in embedded/IoT/AI..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-gradient-to-r from-[#12345B] to-[#1769AA] hover:from-[#1769AA] hover:to-[#20A7D7] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
            >
              {loading ? (
                <span>Validating & Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Internship Application</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* 6. Internship FAQs */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-[#1769AA]" />
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Internship Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {internshipFaqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800">
              <h3 className="text-xs font-bold text-[#12345B] dark:text-white mb-2">{faq.q}</h3>
              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
