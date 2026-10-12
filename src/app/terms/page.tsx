'use client';

import React from 'react';
import Link from 'next/link';
import { companyDetails } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="py-12 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">Legal Agreement</span>
        <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-500">Last Revised: January 1, 2026 • HydroSync Innovations LLP</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">1. Acceptance of Terms</h2>
          <p>
            By enrolling in any course, registering for an event, applying for internships, or accessing our online LMS portals, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">2. Educational Services & Hardware Kits</h2>
          <p>
            HydroSync provides technical instruction, mentorship, and educational materials. Where specified, hardware component packages are dispatched via courier services. Enrolled students are responsible for providing an accurate physical shipping address.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">3. Intellectual Property</h2>
          <p>
            All course slide decks, proprietary schematics, and lecture recordings remain the intellectual property of HydroSync Innovations LLP. Students are granted a personal, non-exclusive license for self-paced study. Commercial resale or unauthorized public redistribution is strictly prohibited. Open-source repositories published by HydroSync remain governed by their respective licenses (e.g., MIT, Apache 2.0).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">4. Code of Conduct</h2>
          <p>
            Students and community members agree to maintain respectful, constructive conduct across live class streams, doubt rooms, and the discussion forums. Harassment, plagiarism of capstone projects, or academic dishonesty will result in revocation of portal access without refund.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">5. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar / Noida, Uttar Pradesh.
          </p>
        </section>
      </div>
    </div>
  );
}
