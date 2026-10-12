'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import QRCode from 'qrcode';
import { sampleCertificates, companyDetails } from '@/lib/data';
import { CertificateRecord } from '@/lib/types';
import Logo from '@/components/Logo';
import { 
  Award, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  ExternalLink,
  QrCode,
  Calendar,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

export default function CertificationsPage() {
  const [searchId, setSearchId] = useState('');
  const [activeRecord, setActiveRecord] = useState<CertificateRecord | null>(sampleCertificates[0]);
  const [searched, setSearched] = useState(false);
  const [notFoundState, setNotFoundState] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (activeRecord) {
      const verifyUrl = `${window.location.origin}/certifications/verify/${activeRecord.credentialId}`;
      QRCode.toDataURL(verifyUrl, { width: 180, margin: 1 })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error(err));
    }
  }, [activeRecord]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId) return;

    setSearched(true);
    const found = sampleCertificates.find(
      (c) => c.credentialId.toLowerCase() === searchId.trim().toLowerCase()
    );

    if (found) {
      setActiveRecord(found);
      setNotFoundState(false);
    } else {
      setActiveRecord(null);
      setNotFoundState(true);
    }
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001 Compliant Validation
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Certificate Verification & Sample Credential
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          HydroSync certificates are cryptographically verifiable through our public database and integrated QR codes. Validate recipient credentials instantly.
        </p>
      </div>

      {/* Verification Search Bar */}
      <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
        <form onSubmit={handleSearch} className="space-y-3">
          <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200">
            Enter Certificate Credential ID:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="e.g. HS-2026-IOT-8821 or HS-2026-EMB-4419"
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-xl transition flex-shrink-0"
            >
              Verify Now
            </button>
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-1">
            <span>Try sample credentials:</span>
            {sampleCertificates.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setSearchId(c.credentialId);
                  setActiveRecord(c);
                  setNotFoundState(false);
                }}
                className="font-mono text-[#1769AA] dark:text-[#20A7D7] underline hover:text-[#12345B]"
              >
                {c.credentialId}
              </button>
            ))}
          </div>
        </form>

        {notFoundState && (
          <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>No certificate found with ID "{searchId}". Please verify the code on your certificate sheet.</span>
          </div>
        )}
      </div>

      {/* Certificate Visualizer (Official Layout) */}
      {activeRecord && (
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Authentic Credential Verified ({activeRecord.credentialId})</span>
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          {/* Certificate Graphic Card */}
          <div className="relative bg-white text-slate-900 rounded-3xl p-8 sm:p-14 border-8 border-[#12345B] shadow-2xl overflow-hidden print:border-none print:shadow-none">
            {/* Watermark Logo Pattern */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
              <Logo variant="full" className="scale-[4]" />
            </div>

            {/* Corner Decorative Borders */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#20A7D7]" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#20A7D7]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#20A7D7]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#20A7D7]" />

            <div className="relative text-center space-y-6">
              {/* Header */}
              <div className="flex justify-center">
                <Logo variant="full" />
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#1769AA]">
                  Certificate of {activeRecord.type}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Credential ID: {activeRecord.credentialId}
                </div>
              </div>

              <div className="py-2">
                <div className="text-xs text-slate-500 italic">This is proudly presented to</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#12345B] tracking-wide mt-1">
                  {activeRecord.recipientName}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                for successfully completing the rigorous industry training and practical capstone milestone in <strong>{activeRecord.title}</strong> with demonstrated excellence ({activeRecord.grade}).
              </p>

              {/* Lower Details: Signatures, Issue Date & QR Code */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end border-t border-slate-200 mt-6 text-xs">
                
                {/* Left: Issue Date & Registration */}
                <div className="text-left space-y-1">
                  <div className="text-[11px] text-slate-400">Date of Issue:</div>
                  <div className="font-bold text-slate-800">{activeRecord.issueDate}</div>
                  <div className="text-[10px] text-slate-500">LLPIN: {companyDetails.llpin}</div>
                </div>

                {/* Center: Dynamic Verifiable QR Code */}
                <div className="flex flex-col items-center justify-center space-y-1">
                  {qrDataUrl ? (
                    <img src={qrDataUrl} alt="Certificate Verification QR Code" className="w-24 h-24 border p-1 rounded-lg bg-white shadow-xs" />
                  ) : (
                    <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-slate-400" />
                    </div>
                  )}
                  <span className="text-[9px] text-slate-400 font-mono">Scan to Verify Authenticity</span>
                </div>

                {/* Right: Instructor Signature */}
                <div className="text-right space-y-1">
                  <div className="font-serif italic text-base font-bold text-[#12345B]">
                    {activeRecord.instructor}
                  </div>
                  <div className="h-0.5 w-32 bg-slate-300 ml-auto" />
                  <div className="text-[11px] font-bold text-slate-700">{activeRecord.signatureTitle}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Our Recognitions & Affiliations */}
      <div className="rounded-2xl p-8 bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 space-y-4">
        <h2 className="text-base font-bold text-[#12345B] dark:text-white">Statutory & Academic Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white dark:bg-[#0B1E34] rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-[#12345B] dark:text-white">MCA LLP Registration</div>
            <div className="text-slate-500 mt-1">Incorporated under the Limited Liability Partnership Act, 2008 (Ministry of Corporate Affairs).</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#0B1E34] rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-[#12345B] dark:text-white">MSME Udyam Enterprise</div>
            <div className="text-slate-500 mt-1">Classified as Micro, Small & Medium Technology Enterprise under Govt. of India.</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#0B1E34] rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-[#12345B] dark:text-white">Startup India (DPIIT)</div>
            <div className="text-slate-500 mt-1">Recognized by the Department for Promotion of Industry and Internal Trade.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
