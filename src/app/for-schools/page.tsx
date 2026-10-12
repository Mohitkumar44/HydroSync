'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  School, 
  Sparkles, 
  Cpu, 
  Bot, 
  Lightbulb, 
  CheckCircle2, 
  Send, 
  Image as ImageIcon,
  Users,
  Award
} from 'lucide-react';

export default function ForSchoolsPage() {
  const [schoolName, setSchoolName] = useState('');
  const [coordinatorName, setCoordinatorName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [studentsCount, setStudentsCount] = useState('50 - 100 Students');
  const [selectedProgram, setSelectedProgram] = useState('Robotics & STEM Tinkering (Grades 6-10)');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programs = [
    {
      title: 'STEM & Robotics Tinkering Labs',
      grades: 'Classes 6th to 10th',
      desc: 'Hands-on experiential workshops assembling line-follower robots, obstacle avoidance sensors, and introductory block coding.',
      icon: Bot,
    },
    {
      title: 'Junior IoT & Smart City Awareness',
      grades: 'Classes 8th to 12th',
      desc: 'Teaching students how smart streetlights, automatic rain gauges, and home automation sensors function using friendly microcontrollers.',
      icon: Cpu,
    },
    {
      title: 'Artificial Intelligence & Computer Vision Demos',
      grades: 'Classes 9th to 12th',
      desc: 'Interactive visual demonstrations of face recognition, object classification, and ethical AI in everyday technology.',
      icon: Lightbulb,
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
          <Sparkles className="w-3.5 h-3.5" /> Inspiring Young Innovators
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          STEM, Robotics & IoT Outreach for Schools
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          HydroSync Innovations LLP partners with progressive schools to establish dynamic experiential STEM and Robotics tinkering sessions compliant with NEP 2020 guidelines.
        </p>
      </div>

      {/* Program Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{p.grades}</span>
                <h3 className="text-lg font-bold text-[#12345B] dark:text-white mt-1 mb-2">{p.title}</h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-4">{p.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Certified Trainers & Kits Included
              </div>
            </div>
          );
        })}
      </div>

      {/* School Impact & Highlights */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-3xl font-extrabold text-[#20A7D7]">60+ Schools</div>
            <div className="text-xs text-slate-200 mt-1">Conducted STEM Workshops Pan-India</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-3xl font-extrabold text-amber-300">12,000+ Students</div>
            <div className="text-xs text-slate-200 mt-1">Built their First Physical Electronic Circuits</div>
          </div>
          <div className="p-4 bg-white/10 rounded-xl">
            <div className="text-3xl font-extrabold text-emerald-400">100% Safe</div>
            <div className="text-xs text-slate-200 mt-1">Low-Voltage 5V Educational Hardware Kits</div>
          </div>
        </div>
      </div>

      {/* School Registration Form */}
      <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Institutional Partnership</span>
          <h2 className="text-2xl font-bold text-[#12345B] dark:text-white mt-1">Register Your School for a STEM Workshop</h2>
          <p className="text-xs text-[#66778A] dark:text-slate-400 mt-1">
            Fill in the details below. Our academic outreach team will share sample workshop kits, syllabi, and coordinate dates.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Registration Received!</h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300">
              Thank you, <strong>{coordinatorName}</strong>! We will reach out to <strong>{schoolName}</strong> ({email}) within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">School Name *</label>
                <input
                  type="text"
                  required
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="e.g. Delhi Public School"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Coordinator / Principal Name *</label>
                <input
                  type="text"
                  required
                  value={coordinatorName}
                  onChange={(e) => setCoordinatorName(e.target.value)}
                  placeholder="e.g. Mrs. Sunita Verma"
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
                  placeholder="school@domain.edu"
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

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">City & State *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Noida, UP"
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Estimated Participating Students</label>
                <select
                  value={studentsCount}
                  onChange={(e) => setStudentsCount(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Under 50 Students">Under 50 Students</option>
                  <option value="50 - 100 Students">50 - 100 Students</option>
                  <option value="100 - 250 Students">100 - 250 Students</option>
                  <option value="250+ Students">250+ Students (Multi-batch)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
            >
              {loading ? <span>Submitting...</span> : <><Send className="w-4 h-4" /><span>Submit School Workshop Request</span></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
