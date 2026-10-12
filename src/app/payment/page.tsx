'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { coursesData } from '@/lib/data';
import { 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  Lock, 
  AlertCircle,
  QrCode,
  Sparkles
} from 'lucide-react';

export default function OnlinePaymentPage() {
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0]);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [payerName, setPayerName] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaidSuccess(true);
    }, 1000);
  };

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Courses</span>
        </Link>
      </div>

      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted Checkout
        </span>
        <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">
          Secure Online Payment Gateway
        </h1>
        <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300">
          Powered by Razorpay Integration Architecture. Safe sandbox testing mode enabled until live API merchant keys are provided in the setup form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left: Order Summary */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Order Summary</h2>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#12345B] dark:text-white">Select Enrollment Item:</label>
            <select
              value={selectedCourse.id}
              onChange={(e) => {
                const found = coursesData.find(c => c.id === e.target.value);
                if (found) setSelectedCourse(found);
              }}
              className="w-full p-2 rounded-lg border text-xs bg-white dark:bg-slate-800"
            >
              {coursesData.map((c) => (
                <option key={c.id} value={c.id}>{c.title} (₹{c.fee})</option>
              ))}
            </select>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Course Tuition:</span>
              <span className="font-semibold">₹{selectedCourse.fee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Physical Hardware Kit:</span>
              <span className="font-semibold text-emerald-600">FREE INCLUDED</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Courier Shipping:</span>
              <span className="font-semibold text-emerald-600">₹0 (Pan-India)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">GST (18%):</span>
              <span className="font-semibold text-slate-400">Included</span>
            </div>
            <div className="pt-2 border-t flex justify-between font-extrabold text-base text-[#12345B] dark:text-white">
              <span>Total Payable:</span>
              <span>₹{selectedCourse.fee}</span>
            </div>
          </div>

          {/* Integration Status Badge */}
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Razorpay Sandbox Mode</span>
            </div>
            <div>Transactions operate safely in simulation. To activate live UPI/Cards, configure credentials in the <Link href="/setup" className="font-bold underline">Consolidated Setup Form</Link>.</div>
          </div>
        </div>

        {/* Right: Payment Input */}
        <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-6">
          {paidSuccess ? (
            <div className="p-8 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-300 dark:border-emerald-800">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">Payment Authorized!</h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Payment of ₹{selectedCourse.fee} confirmed for <strong>{selectedCourse.title}</strong>. Transaction Ref: <span className="font-mono font-bold">pay_hs_{Date.now()}</span>.
              </p>
              <div className="pt-2">
                <Link href="/portals/student" className="px-5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold inline-block">
                  Enter Student Portal
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePay} className="space-y-4">
              <div className="flex gap-2">
                {[
                  { id: 'upi', label: 'UPI / QR' },
                  { id: 'card', label: 'Credit / Debit Card' },
                  { id: 'netbanking', label: 'Net Banking' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold border transition ${
                      paymentMethod === m.id
                        ? 'border-[#1769AA] bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7]'
                        : 'border-slate-200 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Payer Name *</label>
                <input
                  type="text"
                  required
                  value={payerName}
                  onChange={(e) => setPayerName(e.target.value)}
                  placeholder="e.g. Mohit Kumar"
                  className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Receipt Email *</label>
                <input
                  type="email"
                  required
                  value={payerEmail}
                  onChange={(e) => setPayerEmail(e.target.value)}
                  placeholder="mohit@example.com"
                  className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                />
              </div>

              {paymentMethod === 'upi' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Virtual Payment Address (UPI ID) *</label>
                  <input
                    type="text"
                    required
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. user@okhdfcbank or user@paytm"
                    className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                  />
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Card Number (Sandbox Simulation)</label>
                    <input
                      type="text"
                      placeholder="4111 2222 3333 4444"
                      className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="MM/YY" className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900" />
                    <input type="password" placeholder="CVV" maxLength={4} className="w-full px-3 py-2 text-xs rounded-lg border bg-white dark:bg-slate-900" />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={processing}
                className="w-full py-3 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 shadow"
              >
                {processing ? <span>Processing Payment...</span> : <span>Complete Payment (₹{selectedCourse.fee})</span>}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
