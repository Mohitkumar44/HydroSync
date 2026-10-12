'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { partnersData } from '@/lib/data';
import { 
  Building2, 
  GraduationCap, 
  FileCheck, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Award,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function ForCollegesPage() {
  const [collegeName, setCollegeName] = useState('');
  const [hodName, setHodName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collaborationType, setCollaborationType] = useState('Institutional MoU (Training + Placement)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const pillars = [
    {
      title: 'MoU & Co-Branded IoT Centers',
      desc: 'Sign a formal 3-year bilateral MoU establishing a dedicated HydroSync Hardware & Edge AI Center of Excellence right in your campus lab.',
      icon: FileCheck,
    },
    {
      title: 'Credit-Aligned Technical Training',
      desc: 'Industry-mapped semester electives and 40-hour bootcamps taught by practicing embedded firmware engineers and AI researchers.',
      icon: BookOpen,
    },
    {
      title: 'Exclusive Campus Internship Drives',
      desc: 'Dedicated interview slots and pooled placement drives for pre-final and final year ECE, EEE, CSE, and Mechatronics students.',
      icon: Briefcase,
    },
    {
      title: 'Expert Faculty Development (FDP)',
      desc: 'Hands-on training for college professors on KiCad 8, FreeRTOS, TinyML, and writing research grants for DST/SERB funding.',
      icon: GraduationCap,
    },
  ];

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
          <Sparkles className="w-3.5 h-3.5" /> Higher Education Collaborations
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          University & College Partnerships (MoU)
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Transform your engineering department with cutting-edge industry training, verified student internships, core placement drives, and custom IoT lab setups.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pil, idx) => {
          const Icon = pil.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white mb-2">{pil.title}</h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">{pil.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Participating Colleges List */}
      <div className="p-8 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Proven Track Record</span>
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white mt-1">Participating Colleges & Universities</h2>
          <p className="text-xs text-slate-500 mt-1">Over 45 premier technology institutions have partnered with HydroSync for hands-on bootcamps and placement training.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Delhi Technological University (DTU)',
            'National Institute of Technology (NIT)',
            'APJ Abdul Kalam Technical University (AKTU)',
            'Indira Gandhi Delhi Tech University (IGDTUW)',
            'Galgotias College of Engg & Tech',
            'Jaypee Institute of Information Tech (JIIT)',
            'SRM Institute of Science & Tech',
            'Thapar Institute of Engg & Tech',
          ].map((col, idx) => (
            <div key={idx} className="p-3.5 bg-white dark:bg-[#0B1E34] rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-[#12345B] dark:text-slate-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{col}</span>
            </div>
          ))}
        </div>
      </div>

      {/* College Registration / MoU Request Form */}
      <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Initiate Institutional MoU</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">College Registration & Collaboration Form</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mt-1">
            Submit your institution's requirements. Our Dean of Academic Partnerships will coordinate an introductory MoU draft and syllabus discussion.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Collaboration Request Initiated!</h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Thank you, <strong>{hodName}</strong>. Our academic team has prepared an institutional dossier for <strong>{collegeName}</strong> ({email}) and will connect via phone ({phone}) shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">College / University Name *</label>
                <input
                  type="text"
                  required
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="e.g. National Institute of Technology"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">HOD / TPO / Coordinator Name *</label>
                <input
                  type="text"
                  required
                  value={hodName}
                  onChange={(e) => setHodName(e.target.value)}
                  placeholder="e.g. Prof. R. K. Mukherjee"
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
                  placeholder="hod.ece@university.ac.in"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Contact Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Requested Collaboration Type</label>
                <select
                  value={collaborationType}
                  onChange={(e) => setCollaborationType(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Institutional MoU (Training + Placement)">Institutional MoU (Training + Placement)</option>
                  <option value="On-Campus 3-Day Hardware Workshop (FreeRTOS / TinyML)">On-Campus 3-Day Hardware Workshop (FreeRTOS / TinyML)</option>
                  <option value="Student Summer / Winter Internship Drive">Student Summer / Winter Internship Drive</option>
                  <option value="Faculty Development Program (FDP)">Faculty Development Program (FDP)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
            >
              {loading ? <span>Submitting...</span> : <><Send className="w-4 h-4" /><span>Request MoU Proposal</span></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
