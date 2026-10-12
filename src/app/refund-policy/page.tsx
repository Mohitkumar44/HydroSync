'use client';

import React from 'react';
import Link from 'next/link';
import { companyDetails } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicyPage() {
  return (
    <div className="py-12 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">Billing & Cancellations</span>
        <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">Cancellation & Refund Policy</h1>
        <p className="text-xs text-slate-500">HydroSync Innovations LLP Policy</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">1. Course Cancellations</h2>
          <p>
            We strive to provide total satisfaction with our technical courses. If you decide that a course is not suitable for you, you can request a cancellation under the following conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Before Hardware Kit Dispatch:</strong> You are eligible for a 100% refund of the course tuition fee if you cancel at least 48 hours prior to hardware kit dispatch or before attending more than two live sessions.</li>
            <li><strong>After Hardware Kit Dispatch:</strong> If your physical development kit has already been dispatched via courier, the hardware manufacturing and courier cost (₹1,500 – ₹2,500 depending on kit type) will be deducted, and the remaining fee will be refunded.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">2. Free Hackathons & Events</h2>
          <p>
            Free event registrations carry zero monetary liability. If an event charges a nominal registration fee, cancellations made up to 24 hours prior to the event start will receive a 100% refund.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">3. Defective Hardware Replacement Guarantee</h2>
          <p>
            If any microcontroller or sensor inside your hardware box is defective upon arrival, report it to <a href={`mailto:${companyDetails.supportEmail}`} className="text-[#1769AA] font-bold">{companyDetails.supportEmail}</a> within 7 days of package delivery. We provide a 100% free courier replacement for verified defective components.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">4. Refund Processing Window</h2>
          <p>
            Approved refunds will be processed via the original payment source (credit/debit card, net banking, or UPI) within 5 to 7 business days following cancellation approval.
          </p>
        </section>
      </div>
    </div>
  );
}
