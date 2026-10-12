'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Home, Search, BookOpen, MessageSquare, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-xl">
        <div className="flex justify-center">
          <Logo variant="full" />
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-extrabold text-[#1769AA] font-mono">404</div>
          <h1 className="text-xl font-bold text-[#12345B] dark:text-white">Page Not Found</h1>
          <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">
            The page, telemetry endpoint, or resource you are looking for has moved or does not exist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs pt-2">
          <Link
            href="/"
            className="p-3 rounded-xl bg-[#1769AA] text-white font-bold flex items-center justify-center gap-1.5 hover:bg-[#12345B] transition"
          >
            <Home className="w-4 h-4" />
            <span>Home Page</span>
          </Link>
          <Link
            href="/courses"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center gap-1.5 hover:bg-slate-200 transition"
          >
            <BookOpen className="w-4 h-4 text-[#20A7D7]" />
            <span>Courses & Fees</span>
          </Link>
          <Link
            href="/certifications"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center gap-1.5 hover:bg-slate-200 transition"
          >
            <Search className="w-4 h-4 text-emerald-500" />
            <span>Verify Cert</span>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-center gap-1.5 hover:bg-slate-200 transition"
          >
            <MessageSquare className="w-4 h-4 text-[#1769AA]" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
