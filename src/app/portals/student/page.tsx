'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData, liveClassesData, sampleTasksData, sampleCertificates } from '@/lib/data';
import { 
  GraduationCap, 
  Video, 
  FileCheck, 
  Award, 
  CheckCircle2, 
  User, 
  BookOpen, 
  Calendar, 
  ExternalLink,
  Download,
  Settings,
  Sparkles,
  LogOut,
  LogIn
} from 'lucide-react';

export default function StudentPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'classes' | 'tasks' | 'certificates' | 'profile'>('dashboard');

  // Student Mock State
  const student = {
    id: 'STU-4821',
    name: 'Mohit Kumar',
    email: 'mohit.kumar@example.com',
    enrolledCourses: [coursesData[0], coursesData[1]],
    attendanceRate: '94%',
    completedMilestones: 8,
    totalMilestones: 10,
    shippingAddress: 'Flat 402, Technology Enclave, Sector 62, Noida, UP - 201309',
  };

  if (!isAuthenticated) {
    return (
      <div className="py-24 max-w-md mx-auto px-4">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#1769AA]/10 text-[#1769AA] flex items-center justify-center mx-auto">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#12345B] dark:text-white">Student Portal Login</h1>
            <p className="text-xs text-slate-500 mt-1">Access your enrolled hardware courses, live classes and QR certificates</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Student Email / ID</label>
              <input
                type="text"
                defaultValue="mohit.kumar@example.com"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <input
                type="password"
                defaultValue="••••••••"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg transition"
            >
              Sign In to Learning Portal
            </button>
          </form>

          <button
            onClick={() => setIsAuthenticated(true)}
            className="text-xs text-[#1769AA] font-bold hover:underline"
          >
            One-Click Student Demo Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-xl">
            {student.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{student.name}</h1>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                {student.id}
              </span>
            </div>
            <p className="text-xs text-slate-200 mt-0.5">{student.email} • Batch of 2026 (IoT Mastery Cohort)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/forum"
            className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold hover:bg-white/20 transition"
          >
            Student Forum
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-red-500/30 text-xs font-bold flex items-center gap-1 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Portal Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-[#DFE8F0] dark:border-slate-800 pb-3 overflow-x-auto text-xs font-bold">
        {[
          { id: 'dashboard', label: 'Overview', icon: Sparkles },
          { id: 'courses', label: 'My Enrolled Courses', icon: BookOpen },
          { id: 'classes', label: 'Live Sessions & Schedule', icon: Video },
          { id: 'tasks', label: 'Assigned Tasks & Progress', icon: FileCheck },
          { id: 'certificates', label: 'My Verified Certificates', icon: Award },
          { id: 'profile', label: 'Profile Settings', icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition ${
                isActive
                  ? 'bg-[#1769AA] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB: DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Active Courses</div>
              <div className="text-2xl font-extrabold text-[#12345B] dark:text-white mt-1">{student.enrolledCourses.length}</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Hardware Kits Shipped</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Live Class Attendance</div>
              <div className="text-2xl font-extrabold text-[#1769AA] dark:text-[#20A7D7] mt-1">{student.attendanceRate}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Meets certification threshold (80%)</div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Milestone Progress</div>
              <div className="text-2xl font-extrabold text-amber-500 mt-1">{student.completedMilestones} / {student.totalMilestones}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">2 final capstones remaining</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">Upcoming Live Lab</h3>
                <span className="text-xs font-bold text-emerald-600">Tonight @ 6:30 PM</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {liveClassesData[0].title} — Instructor: {liveClassesData[0].instructor}
              </p>
              <a
                href={liveClassesData[0].joinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Video className="w-4 h-4" />
                <span>Join Live Lab Session</span>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">Active Sprint Task</h3>
                <span className="text-xs font-bold text-amber-600">Due in 2 days</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {sampleTasksData[2].title} ({sampleTasksData[2].project})
              </p>
              <Link
                href="/task-progress"
                className="w-full py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition"
              >
                <FileCheck className="w-4 h-4" />
                <span>Open Task Submission Form</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* TAB: ENROLLED COURSES */}
      {activeTab === 'courses' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {student.enrolledCourses.map((c) => (
              <div key={c.id} className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#1769AA]/10 text-[#1769AA] font-bold">{c.categoryLabel}</span>
                  <span className="text-emerald-600 font-bold">Hardware Kit Delivered</span>
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">{c.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{c.tagline}</p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Duration: {c.duration}</span>
                  <Link href={`/courses/${c.id}`} className="text-[#1769AA] font-bold hover:underline">
                    View Full Syllabus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: LIVE CLASSES */}
      {activeTab === 'classes' && (
        <div className="space-y-4">
          {liveClassesData.map((lc) => (
            <div key={lc.id} className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">{lc.subject}</span>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">{lc.title}</h3>
                <div className="text-xs text-slate-500 mt-1">{lc.date} • {lc.time} • Instructor: {lc.instructor}</div>
              </div>
              <a
                href={lc.joinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg hover:bg-[#12345B] transition flex items-center gap-1.5"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Join Stream</span>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* TAB: TASKS */}
      {activeTab === 'tasks' && (
        <div className="space-y-4">
          {sampleTasksData.map((tk) => (
            <div key={tk.id} className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tk.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    {tk.status.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">Due: {tk.dueDate}</span>
                </div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">{tk.title}</h3>
                {tk.mentorFeedback && <p className="text-xs text-slate-500 italic mt-1">"{tk.mentorFeedback}"</p>}
              </div>
              {tk.submissionLink && (
                <a href={tk.submissionLink} target="_blank" rel="noreferrer" className="text-xs text-[#1769AA] font-bold underline">
                  View Repo
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB: CERTIFICATES */}
      {activeTab === 'certificates' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 text-amber-500" />
              <div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">{sampleCertificates[0].title}</h3>
                <div className="text-xs text-slate-500">Credential ID: <span className="font-mono font-bold text-[#12345B] dark:text-white">{sampleCertificates[0].credentialId}</span></div>
                <div className="text-xs text-emerald-600 font-semibold mt-0.5">Grade: {sampleCertificates[0].grade} • Issued on {sampleCertificates[0].issueDate}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/certifications/verify/${sampleCertificates[0].credentialId}`}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg hover:bg-slate-200"
              >
                Verify Credential
              </Link>
              <Link
                href="/certifications"
                className="px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg hover:bg-[#12345B]"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* TAB: PROFILE */}
      {activeTab === 'profile' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 space-y-4 max-w-xl">
          <h3 className="text-base font-bold text-[#12345B] dark:text-white">Profile & Kit Courier Address</h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-500 font-bold mb-1">Student Name</label>
              <input type="text" readOnly defaultValue={student.name} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-800 border" />
            </div>
            <div>
              <label className="block text-slate-500 font-bold mb-1">Email Address</label>
              <input type="text" readOnly defaultValue={student.email} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-800 border" />
            </div>
            <div>
              <label className="block text-slate-500 font-bold mb-1">Hardware Parcel Delivery Address</label>
              <textarea rows={2} readOnly defaultValue={student.shippingAddress} className="w-full p-2 rounded bg-slate-50 dark:bg-slate-800 border" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
