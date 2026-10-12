'use client';

import React from 'react';
import Link from 'next/link';
import { companyDetails } from '@/lib/data';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">Legal Documentation</span>
        <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Effective Date: January 1, 2026 • HydroSync Innovations LLP (LLPIN: {companyDetails.llpin})</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">1. Introduction</h2>
          <p>
            HydroSync Innovations LLP ("HydroSync", "we", "our", or "us") respects your privacy and is committed to protecting the personal data of our learners, event participants, institutional partners, and website visitors. This policy outlines how we collect, process, and safeguard your information in compliance with Indian Information Technology Act, 2000 and Digital Personal Data Protection (DPDP) Act, 2023.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Personal Contact Data:</strong> Full name, email address, phone number, and physical postal shipping address (for hardware kit dispatches).</li>
            <li><strong>Academic & Professional Information:</strong> College/university name, enrollment numbers, degree program, graduation year, and GitHub repository links for code review.</li>
            <li><strong>LMS Submissions:</strong> Code commits, project reports, and quiz scores uploaded through our learning portals.</li>
            <li><strong>Payment Information:</strong> Course enrollments are processed via PCI-DSS compliant gateways (e.g., Razorpay). HydroSync does not store customer debit/credit card numbers or UPI PINs on its servers.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">3. How We Use Your Data</h2>
          <p>
            Your information is used exclusively to deliver live training sessions, courier physical hardware kits, issue verified digital certificates with QR codes, evaluate student sprint tasks, and provide job referral opportunities with consent.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">4. Certificate Public Verification</h2>
          <p>
            To prevent resume fraud and protect employer integrity, certificate recipient names, program titles, and issue dates are publicly searchable through our verification registry via the issued Credential ID. No sensitive contact information is ever exposed on the public verification page.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">5. Grievance Officer & Contact</h2>
          <p>
            If you have any questions or data removal requests, contact our Compliance Desk at:
          </p>
          <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
            <div>Email: <a href={`mailto:${companyDetails.email}`} className="text-[#1769AA] font-bold">{companyDetails.email}</a></div>
            <div>Address: {companyDetails.address}</div>
            <div>Phone: {companyDetails.phone}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
