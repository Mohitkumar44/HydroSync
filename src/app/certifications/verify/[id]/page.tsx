'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { sampleCertificates, companyDetails } from '@/lib/data';
import Logo from '@/components/Logo';
import { 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Calendar, 
  User, 
  ArrowLeft 
} from 'lucide-react';

export default function DirectVerifyPage() {
  const params = useParams();
  const certId = params?.id as string;
  const certificate = sampleCertificates.find(
    (c) => c.credentialId.toLowerCase() === certId?.toLowerCase()
  );

  return (
    <div className="py-16 max-w-2xl mx-auto px-4 space-y-8">
      <div>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Certificate Hub</span>
        </Link>
      </div>

      <div className="text-center space-y-2">
        <Logo variant="full" />
        <h1 className="text-2xl font-bold text-[#12345B] dark:text-white pt-2">
          Official Credential Verification Report
        </h1>
        <p className="text-xs text-slate-500">
          HydroSync Innovations LLP Public Ledger Verification
        </p>
      </div>

      {certificate ? (
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F243E] border-2 border-emerald-500 shadow-xl space-y-6">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                Official Credential Valid & Authentic
              </div>
              <div className="text-xs text-emerald-800 dark:text-emerald-300">
                Verified against HydroSync Registry Records
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs divide-y divide-slate-100 dark:divide-slate-800">
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Credential ID:</span>
              <span className="font-mono font-bold text-[#12345B] dark:text-white">{certificate.credentialId}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Recipient Name:</span>
              <span className="font-bold text-[#12345B] dark:text-white">{certificate.recipientName}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Program / Event:</span>
              <span className="font-bold text-[#1769AA] dark:text-[#20A7D7]">{certificate.title}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Certification Type:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.type}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Date Issued:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.issueDate}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Evaluation Grade:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{certificate.grade}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Authorized Signature:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.instructor}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-400">Issuing Entity:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{companyDetails.name} (LLPIN: {companyDetails.llpin})</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F243E] border-2 border-red-500 shadow-xl space-y-4 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-lg font-bold text-red-700 dark:text-red-300">Unrecognized Credential ID</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            The identifier <strong className="font-mono">{certId}</strong> does not match any certificate issued in our central ledger.
          </p>
          <Link
            href="/certifications"
            className="inline-block px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg"
          >
            Search Again
          </Link>
        </div>
      )}
    </div>
  );
}
