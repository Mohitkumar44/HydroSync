'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { teamMembers, companyDetails } from '@/lib/data';
import { 
  Users, 
  Linkedin, 
  Github, 
  Mail, 
  Award, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export default function TeamPage() {
  const [filter, setFilter] = useState<'all' | 'founder' | 'mentor' | 'trainer' | 'advisor'>('all');

  const filtered = teamMembers.filter((m) => {
    if (filter === 'all') return true;
    return m.category === filter;
  });

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Hardware & AI Innovators
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Meet the HydroSync Core Team & Mentors
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Led by experienced embedded architects, AI researchers, and passionate technical mentors dedicated to empowering India's next generation of engineers.
        </p>
      </div>

      {/* Team Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
          <div className="text-2xl font-extrabold text-[#12345B] dark:text-white">35+</div>
          <div className="text-xs text-slate-500 mt-0.5">Total Core Members & Trainers</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
          <div className="text-2xl font-extrabold text-[#1769AA] dark:text-[#20A7D7]">14+ Years</div>
          <div className="text-xs text-slate-500 mt-0.5">Average Industry Experience</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
          <div className="text-2xl font-extrabold text-emerald-500">18+ Papers</div>
          <div className="text-xs text-slate-500 mt-0.5">Peer-Reviewed TinyML Publications</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
          <div className="text-2xl font-extrabold text-amber-500">8,500+</div>
          <div className="text-xs text-slate-500 mt-0.5">Engineers Personally Mentored</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'All Team Members' },
          { id: 'founder', label: 'Founders' },
          { id: 'mentor', label: 'Firmware Mentors' },
          { id: 'trainer', label: 'Technical Trainers' },
          { id: 'advisor', label: 'Advisory Board' },
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

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((member) => (
          <div
            key={member.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#12345B] to-[#1769AA] text-white font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#12345B] dark:text-white">{member.name}</h2>
                  <div className="text-xs font-medium text-[#1769AA] dark:text-[#20A7D7]">{member.role}</div>
                </div>
              </div>

              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Expertise tags */}
              <div className="space-y-1.5 mb-6">
                <div className="text-[11px] font-bold text-slate-400 uppercase">Core Expertise:</div>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((exp, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#F2F8FC] dark:bg-slate-800 text-[11px] text-[#243447] dark:text-slate-300">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social connections */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#1769AA] transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.email && (
                <a
                  href={`mailto:${member.socials.email}`}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-500 transition"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Join Our Team (Recruitment) CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#20A7D7]" />
            <h3 className="text-xl font-bold">Join Our Team — We Are Hiring Technical Trainers & Researchers!</h3>
          </div>
          <p className="text-xs text-slate-200">
            Passionate about embedded hardware, TinyML, or university education? We are expanding our full-time engineering and mentor cohort.
          </p>
        </div>

        <Link
          href="/careers"
          className="px-6 py-3 bg-white text-[#12345B] hover:bg-slate-100 font-bold text-xs rounded-xl transition flex-shrink-0 flex items-center gap-1.5"
        >
          <span>Explore Job Openings</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
