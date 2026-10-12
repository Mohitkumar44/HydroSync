'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  School, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Lock
} from 'lucide-react';

export default function PortalsOverviewPage() {
  const portals = [
    {
      role: 'Student Portal',
      href: '/portals/student',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600',
      tagline: 'Learning Management System & Certificates',
      desc: 'Access your enrolled courses, join live Google Meet classes, upload homework repositories, check mentor evaluations, and download QR-verified completion certificates.',
      features: ['Live Class Stream Links', 'Homework Task Submissions', 'Instant Certificate Downloads', 'Sprint Progress Meters'],
    },
    {
      role: 'School & College Portal',
      href: '/portals/institution',
      icon: School,
      color: 'from-teal-600 to-emerald-600',
      tagline: 'Institutional MoUs & Batch Oversight',
      desc: 'For College HODs, TPOs, and School STEM Coordinators. Enroll student cohorts, monitor lab attendance, download institutional training reports, and review MoU renewals.',
      features: ['Student Batch Registration', 'Campus Attendance Logs', 'Institutional MoU Dossiers', 'Accreditation Reports'],
    },
    {
      role: 'Event Organizer Portal',
      href: '/portals/organizer',
      icon: Calendar,
      color: 'from-purple-600 to-pink-600',
      tagline: 'Hackathon & Webinar Operations',
      desc: 'For campus ambassadors, workshop leads, and hackathon organizers. Create events, review participant teams, track livestream check-ins, and issue participation credentials.',
      features: ['Hackathon Team Tracking', 'Check-In QR Scanning', 'Batch Certificate Dispatch', 'Event Metrics Dashboard'],
    },
    {
      role: 'Admin Panel',
      href: '/portals/admin',
      icon: ShieldCheck,
      color: 'from-slate-800 to-blue-900',
      tagline: 'Full System CMS & Platform Governance',
      desc: 'Central control room for HydroSync leadership. Manage website content, approve course enrollments, schedule lecture uploads, monitor telemetry nodes, and review analytics.',
      features: ['CMS Content Publishing', 'User Role Management', 'Lecture Upload Queue', 'Financial & Traffic Analytics'],
    },
  ];

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Role-Based Access Portals
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Dedicated Management & Learning Portals
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Select your role to access customized dashboards, student materials, institutional metrics, or administrative controls.
        </p>
      </div>

      {/* Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portals.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Secure Access
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#12345B] dark:text-white mb-1">{p.role}</h2>
                <div className="text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] mb-3">{p.tagline}</div>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-6">{p.desc}</p>

                <div className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Core Capabilities:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#243447] dark:text-slate-200">
                    {p.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20A7D7]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={p.href}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold rounded-xl transition shadow-sm"
                >
                  <span>Launch {p.role}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
