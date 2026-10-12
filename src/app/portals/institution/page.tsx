'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  School, 
  Users, 
  FileText, 
  CheckCircle2, 
  Download, 
  Plus, 
  Calendar,
  Building2,
  Award,
  Send,
  LogOut
} from 'lucide-react';

export default function InstitutionPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'activities' | 'reports'>('overview');

  const institution = {
    name: 'Delhi Technological University (DTU)',
    department: 'Department of Electronics & Communication Engineering',
    mouStatus: 'Active (2024–2027)',
    mouRef: 'MOU-DTU-HS-082',
    registeredStudents: 180,
    completedWorkshops: 4,
    avgAttendance: '92.4%',
  };

  const studentBatch = [
    { id: 'DTU-01', name: 'Aarav Sharma', branch: 'ECE 3rd Year', attendance: '96%', score: '92/100', status: 'Completed' },
    { id: 'DTU-02', name: 'Rhea Sen', branch: 'ECE 3rd Year', attendance: '92%', score: '88/100', status: 'In Progress' },
    { id: 'DTU-03', name: 'Kunal Patel', branch: 'EEE 4th Year', attendance: '88%', score: '84/100', status: 'In Progress' },
    { id: 'DTU-04', name: 'Divya Nair', branch: 'CSE 3rd Year', attendance: '98%', score: '95/100', status: 'Completed' },
  ];

  if (!isAuthenticated) {
    return (
      <div className="py-24 max-w-md mx-auto px-4">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mx-auto">
            <School className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#12345B] dark:text-white">Institution Login</h1>
            <p className="text-xs text-slate-500 mt-1">For College HODs, TPOs, and School STEM Coordinators</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Institutional Email</label>
              <input type="email" defaultValue="hod.ece@dtu.ac.in" className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Passcode</label>
              <input type="password" defaultValue="••••••••" className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900" />
            </div>
            <button type="submit" className="w-full py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold rounded-lg transition">
              Sign In to Institutional Dashboard
            </button>
          </form>

          <button onClick={() => setIsAuthenticated(true)} className="text-xs text-[#1769AA] font-bold hover:underline">
            Quick Institutional Demo Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-800 to-[#12345B] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{institution.name}</h1>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
              {institution.mouStatus}
            </span>
          </div>
          <p className="text-xs text-slate-200 mt-0.5">{institution.department} • Ref: {institution.mouRef}</p>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-red-500/30 text-xs font-bold flex items-center gap-1 transition"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DFE8F0] dark:border-slate-800 pb-3 overflow-x-auto text-xs font-bold">
        {[
          { id: 'overview', label: 'MoU & Activity Overview' },
          { id: 'students', label: 'Registered Student Batches' },
          { id: 'activities', label: 'Lab Sessions & Attendance' },
          { id: 'reports', label: 'Download Accreditations & Reports' },
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

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-extrabold text-[#12345B] dark:text-white">{institution.registeredStudents}</div>
              <div className="text-xs text-slate-500 mt-1">Enrolled Students</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-extrabold text-teal-600">{institution.completedWorkshops}</div>
              <div className="text-xs text-slate-500 mt-1">Workshops Delivered</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-extrabold text-emerald-500">{institution.avgAttendance}</div>
              <div className="text-xs text-slate-500 mt-1">Average Attendance</div>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-extrabold text-purple-600">100%</div>
              <div className="text-xs text-slate-500 mt-1">Hardware Kits Delivered</div>
            </div>
          </div>
        </div>
      )}

      {/* Student Batch Management */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-[#12345B] dark:text-white">Active Student Batch Roster</h2>
            <button
              onClick={() => alert('Opening Bulk Student CSV Upload Wizard')}
              className="px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Register New Student Batch (CSV)</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F243E]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-500">
                <tr>
                  <th className="p-3">Student ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Branch & Year</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3">Score</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentBatch.map((s) => (
                  <tr key={s.id}>
                    <td className="p-3 font-mono font-bold">{s.id}</td>
                    <td className="p-3 font-semibold text-[#12345B] dark:text-white">{s.name}</td>
                    <td className="p-3 text-slate-500">{s.branch}</td>
                    <td className="p-3 font-semibold">{s.attendance}</td>
                    <td className="p-3 font-semibold text-emerald-600">{s.score}</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reports */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">NBA / NAAC Criteria 2 Training Audit Report</h3>
                <p className="text-xs text-slate-500 mt-0.5">Formal compliance and attendance document for university accreditation.</p>
              </div>
              <button onClick={() => alert('Downloading NBA Accreditation PDF')} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200">
                <Download className="w-4 h-4 text-[#1769AA]" />
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#12345B] dark:text-white">Student Batch Performance Ledger (Excel)</h3>
                <p className="text-xs text-slate-500 mt-0.5">Comprehensive marks, project repos, and credential verification IDs.</p>
              </div>
              <button onClick={() => alert('Downloading Student Performance Spreadsheet')} className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200">
                <Download className="w-4 h-4 text-[#1769AA]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activities */}
      {activeTab === 'activities' && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-[#12345B] dark:text-white mb-2">Campus Lab Bootcamp Log</h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between">
                <span>FreeRTOS Concurrency Lab (ECE Lab 4)</span>
                <span className="text-slate-400">Oct 4, 2026 • 180 Students</span>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg flex justify-between">
                <span>KiCad 4-Layer PCB Layout & Routing Session</span>
                <span className="text-slate-400">Sep 18, 2026 • 165 Students</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
