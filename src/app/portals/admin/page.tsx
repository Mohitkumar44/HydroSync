'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData, eventsData, projectsData, companyDetails } from '@/lib/data';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  UploadCloud, 
  Settings, 
  CheckCircle2, 
  Plus, 
  Trash2,
  Sparkles,
  Layers,
  LogOut
} from 'lucide-react';

export default function AdminPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'content' | 'users' | 'lectures' | 'events' | 'reports'>('content');

  // CMS Courses State
  const [courses, setCourses] = useState(coursesData);
  const [events, setEvents] = useState(eventsData);

  // Mock User Directory
  const [users, setUsers] = useState([
    { id: 'USR-01', name: 'Mohit Kumar', email: 'mohit@example.com', role: 'Student', enrolled: 'IoT & Embedded', joined: 'Oct 2026' },
    { id: 'USR-02', name: 'Er. Rajesh Varma', email: 'rajesh@hydrosync.in', role: 'Founder & Instructor', enrolled: 'Admin', joined: 'Jan 2023' },
    { id: 'USR-03', name: 'Dr. Meenakshi S.', email: 'hod.ece@dtu.ac.in', role: 'Institutional Partner', enrolled: 'DTU MoU', joined: 'Dec 2024' },
    { id: 'USR-04', name: 'Ritika Sengupta', email: 'ritika@example.com', role: 'Intern Alum', enrolled: 'Firmware Cohort', joined: 'Jan 2025' },
  ]);

  if (!isAuthenticated) {
    return (
      <div className="py-24 max-w-md mx-auto px-4">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#12345B]/10 text-[#12345B] dark:text-white flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#12345B] dark:text-white">Admin Panel Authentication</h1>
            <p className="text-xs text-slate-500 mt-1">Platform Governance, Content Management & Reports</p>
          </div>
          <button onClick={() => setIsAuthenticated(true)} className="w-full py-2.5 bg-[#12345B] text-white text-xs font-bold rounded-lg">
            Access Admin Console (Demo Mode)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#0B1E34] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <ShieldCheck className="w-8 h-8 text-[#20A7D7]" />
          </div>
          <div>
            <h1 className="text-xl font-bold">HydroSync Central Admin Panel</h1>
            <p className="text-xs text-slate-300 mt-0.5">Content Management System, Active Users & Telemetry Analytics</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/setup"
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Consolidated Setup Form</span>
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

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DFE8F0] dark:border-slate-800 pb-3 overflow-x-auto text-xs font-bold">
        {[
          { id: 'content', label: 'Manage Content & Courses', icon: BookOpen },
          { id: 'users', label: 'Manage Users & Roles', icon: Users },
          { id: 'lectures', label: 'Upload Lectures & Schedule', icon: UploadCloud },
          { id: 'events', label: 'Manage Events', icon: Calendar },
          { id: 'reports', label: 'Analytics & Financial Reports', icon: BarChart3 },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition ${
                activeTab === tab.id
                  ? 'bg-[#1769AA] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB: CONTENT MANAGEMENT */}
      {activeTab === 'content' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-[#12345B] dark:text-white">Active Courses ({courses.length})</h2>
            <button
              onClick={() => alert('New Course Creation Wizard')}
              className="px-3.5 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Course</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F243E]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b text-slate-500">
                <tr>
                  <th className="p-3">Course Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Tuition Fee</th>
                  <th className="p-3">Enrollments</th>
                  <th className="p-3">Hardware Kit</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {courses.map((c) => (
                  <tr key={c.id}>
                    <td className="p-3 font-semibold text-[#12345B] dark:text-white">{c.title}</td>
                    <td className="p-3 text-slate-500">{c.categoryLabel}</td>
                    <td className="p-3 font-bold text-slate-800 dark:text-slate-200">₹{c.fee}</td>
                    <td className="p-3 font-semibold">{c.enrolledStudents}</td>
                    <td className="p-3"><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{c.hardwareKitProvided ? 'Yes (Shipped)' : 'No'}</span></td>
                    <td className="p-3">
                      <button onClick={() => alert(`Editing course: ${c.title}`)} className="text-[#1769AA] font-bold hover:underline mr-3">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: USERS */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">User Directory & Role Permissions</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F243E]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b text-slate-500">
                <tr>
                  <th className="p-3">User ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Assigned Program</th>
                  <th className="p-3">Joined Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {users.map((u) => (
                  <tr key={u.id}>
                    <td className="p-3 font-mono font-bold">{u.id}</td>
                    <td className="p-3 font-semibold text-[#12345B] dark:text-white">{u.name}</td>
                    <td className="p-3 text-slate-500">{u.email}</td>
                    <td className="p-3 font-bold text-[#1769AA]">{u.role}</td>
                    <td className="p-3">{u.enrolled}</td>
                    <td className="p-3 text-slate-400">{u.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: LECTURES */}
      {activeTab === 'lectures' && (
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 max-w-2xl space-y-4">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">Publish Recorded Lecture Video or PDF Note</h2>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-600 dark:text-slate-300 mb-1">Target Course / Subject</label>
              <select className="w-full p-2 rounded border bg-white dark:bg-slate-900">
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>{c.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-600 dark:text-slate-300 mb-1">Video Stream URL (YouTube Unlisted / Vimeo / CDN)</label>
              <input type="url" placeholder="https://..." className="w-full p-2 rounded border bg-white dark:bg-slate-900" />
            </div>
            <button
              onClick={() => alert('Lecture video linked and indexed in student portal.')}
              className="px-5 py-2.5 bg-[#1769AA] text-white text-xs font-bold rounded-lg"
            >
              Link & Publish Lecture
            </button>
          </div>
        </div>
      )}

      {/* TAB: EVENTS */}
      {activeTab === 'events' && (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F243E]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b text-slate-500">
                <tr>
                  <th className="p-3">Event Title</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Registrations</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {events.map((ev) => (
                  <tr key={ev.id}>
                    <td className="p-3 font-semibold text-[#12345B] dark:text-white">{ev.title}</td>
                    <td className="p-3 text-slate-500">{ev.categoryLabel}</td>
                    <td className="p-3">{ev.date}</td>
                    <td className="p-3 font-semibold">{ev.seatsBooked} / {ev.seatsTotal}</td>
                    <td className="p-3 font-bold text-emerald-600">{ev.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: REPORTS */}
      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Total Students Trained</div>
              <div className="text-2xl font-extrabold text-[#12345B] dark:text-white mt-1">{companyDetails.stats.studentsTrained}+</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Across 45+ College MoUs</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Hardware Prototyping Projects</div>
              <div className="text-2xl font-extrabold text-teal-600 mt-1">{companyDetails.stats.projectsBuilt}+</div>
              <div className="text-[11px] text-slate-500 mt-0.5">IP68 & Edge AI Nodes</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-semibold uppercase">Active Industry Mentors</div>
              <div className="text-2xl font-extrabold text-amber-500 mt-1">{companyDetails.stats.activeMentors}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Live Debugging & Reviews</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
