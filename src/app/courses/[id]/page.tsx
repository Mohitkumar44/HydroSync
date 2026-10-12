'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { coursesData } from '@/lib/data';
import { 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  BookOpen, 
  Package, 
  User, 
  Award, 
  Send,
  CreditCard,
  CheckCircle,
  FileCheck
} from 'lucide-react';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = coursesData.find((c) => c.id === courseId);

  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [enrolling, setEnrolling] = useState(false);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  if (!course) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h1 className="text-2xl font-bold text-[#12345B] dark:text-white">Course Not Found</h1>
        <p className="text-xs text-slate-500">The requested curriculum is not currently active.</p>
        <Link href="/courses" className="inline-block px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg">
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolling(true);

    // Simulate payment / enrollment verification
    setTimeout(() => {
      setEnrolling(false);
      setEnrolledSuccess(true);
    }, 800);
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div>
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Courses</span>
        </Link>
      </div>

      {/* Main Grid: Left Details + Right Enrollment Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Course Details */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-bold">
                {course.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>{course.rating} / 5.0</span>
                <span className="text-slate-400 font-normal">({course.enrolledStudents} learners)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] dark:text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-sm sm:text-base text-[#1769AA] dark:text-[#20A7D7] font-semibold mt-2">
              {course.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300 mt-4 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 text-xs">
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Duration</div>
              <div className="font-bold text-[#12345B] dark:text-white">{course.duration}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Mode</div>
              <div className="font-bold text-[#12345B] dark:text-white">{course.mode}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Skill Level</div>
              <div className="font-bold text-[#12345B] dark:text-white">{course.level}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Hardware Kit</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400">
                {course.hardwareKitProvided ? 'Included & Shipped' : 'Not Required'}
              </div>
            </div>
          </div>

          {/* Course Features */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#12345B] dark:text-white">What You Will Get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#243447] dark:text-slate-200 p-3 bg-white dark:bg-[#0F243E] rounded-xl border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#12345B] dark:text-white">Curriculum & Syllabus Breakdown</h2>
            <div className="space-y-3">
              {course.syllabus.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xs">
                  <h3 className="text-sm font-bold text-[#12345B] dark:text-white mb-2">{mod.title}</h3>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#66778A] dark:text-slate-300">
                    {mod.topics.map((top, tIdx) => (
                      <li key={tIdx}>{top}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Profile */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#12345B] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {course.instructor.name.charAt(0)}
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase">Lead Course Instructor</div>
              <h3 className="text-base font-bold text-[#12345B] dark:text-white">{course.instructor.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{course.instructor.role}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Enrollment & Checkout Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="text-xs text-slate-500 font-semibold uppercase">Total Tuition & Materials</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#12345B] dark:text-white">₹{course.fee}</span>
                <span className="text-sm text-slate-400 line-through">₹{course.originalFee}</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  Save {Math.round(((course.originalFee - course.fee) / course.originalFee) * 100)}%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">All taxes and hardware shipping included in India.</p>
            </div>

            {enrolledSuccess ? (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                <h2 className="text-base font-bold text-emerald-900 dark:text-emerald-200">Enrollment Confirmed!</h2>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  Welcome to <strong>{course.title}</strong>, {studentName}! A receipt and live LMS login pass have been sent to <strong>{studentEmail}</strong>.
                </p>
                <Link
                  href="/portals/student"
                  className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                >
                  Go to Student Portal
                </Link>
              </div>
            ) : (
              <form onSubmit={handleEnrollment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Anjali Nair"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    placeholder="e.g. anjali@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                {course.hardwareKitProvided && (
                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Kit Courier Delivery Address *</label>
                    <textarea
                      rows={2}
                      required
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      placeholder="Complete shipping address with PIN code for hardware parcel"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-[#243447] dark:text-white focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>
                )}

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Payment Gateway:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Razorpay / Test Checkout</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Security:</span>
                    <span className="text-emerald-600 font-semibold">256-bit SSL Encrypted</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={enrolling}
                  className="w-full py-3 bg-gradient-to-r from-[#1769AA] to-[#20A7D7] hover:from-[#12345B] hover:to-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
                >
                  {enrolling ? (
                    <span>Processing Enrollment...</span>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Enroll & Pay ₹{course.fee}</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div>✓ Instant batch access upon enrollment</div>
              <div>✓ 7-Day Money Back Guarantee if hardware kit not dispatched</div>
              <div>✓ Verifiable ISO Certificate upon final project submission</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
