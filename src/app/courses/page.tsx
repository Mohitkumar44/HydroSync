'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData } from '@/lib/data';
import { CourseCategory } from '@/lib/types';
import { 
  BookOpen, 
  Clock, 
  Star, 
  CheckCircle2, 
  IndianRupee, 
  ArrowRight, 
  Search, 
  SlidersHorizontal,
  PackageCheck,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'iot-embedded', label: 'IoT & Embedded' },
    { id: 'arduino-esp32', label: 'Arduino & ESP32' },
    { id: 'ai-ml-iot', label: 'AI & ML for IoT' },
    { id: 'python', label: 'Python Programming' },
    { id: 'electronics', label: 'Electronics Basics' },
    { id: 'drone', label: 'Drone Technology' },
    { id: 'web-dev', label: 'Web Development' },
  ];

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          Industry-Accredited Curriculum
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Certified Hardware & Software Courses
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Master real embedded systems, edge artificial intelligence, and connected devices with live mentorship and physical hardware kits shipped to your door.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, microcontroller, or keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-[#12345B] dark:text-white">{filteredCourses.length}</strong> verified courses
          </div>
        </div>

        {/* Categories Tab Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#DFE8F0] dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-[#1769AA] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#1769AA] transition"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-[11px]">
                  {course.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.enrolledStudents})</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-[#12345B] dark:text-white mb-2 leading-snug">
                {course.title}
              </h2>

              <p className="text-xs text-[#66778A] dark:text-slate-300 mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Meta specifications */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#F2F8FC] dark:bg-slate-800/60 text-xs mb-4 text-center">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Duration</div>
                  <div className="font-bold text-[#12345B] dark:text-slate-200">{course.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Mode</div>
                  <div className="font-bold text-[#12345B] dark:text-slate-200">{course.mode}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Level</div>
                  <div className="font-bold text-[#12345B] dark:text-slate-200">{course.level}</div>
                </div>
              </div>

              {/* Features snippet */}
              <div className="space-y-1.5 mb-6 text-xs text-[#243447] dark:text-slate-300">
                {course.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 line-through mr-1.5">₹{course.originalFee}</span>
                <span className="text-xl font-extrabold text-[#12345B] dark:text-white">₹{course.fee}</span>
              </div>

              <Link
                href={`/courses/${course.id}`}
                className="px-4 py-2.5 bg-gradient-to-r from-[#1769AA] to-[#20A7D7] hover:from-[#12345B] hover:to-[#1769AA] text-white text-xs font-bold rounded-lg transition flex items-center gap-1 shadow-sm"
              >
                <span>View Syllabus & Enroll</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Hardware Kit Included Guarantee */}
      <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-2xl flex-shrink-0">
            <PackageCheck className="w-8 h-8 text-[#20A7D7]" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Physical Hardware Kit Delivered to Your Doorstep</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              All Hybrid and Hardware-designated courses include the authentic HydroSync Maker Kit containing microcontrollers, sensor arrays, OLEDs, and debugging harnesses. Zero separate component buying needed.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="px-5 py-3 rounded-xl bg-[#20A7D7] hover:bg-white hover:text-[#0B1E34] text-[#0B1E34] font-bold text-xs transition flex-shrink-0"
        >
          Inquire About Lab Kits
        </Link>
      </div>
    </div>
  );
}
