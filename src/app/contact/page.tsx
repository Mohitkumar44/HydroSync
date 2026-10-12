'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { companyDetails } from '@/lib/data';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Github, 
  Twitter,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course / Training Enquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const contactFaqs = [
    {
      q: 'Where is HydroSync’s physical research lab located?',
      a: 'Our main hardware prototyping facility is located at Techno-Park Innovation Center, Sector 62, Noida, Uttar Pradesh, 201309. Visitors and campus delegates are welcome during working hours by prior appointment.',
    },
    {
      q: 'How fast do you respond to institutional training inquiries?',
      a: 'Our academic and corporate desk answers all phone and email inquiries within 24 business hours.',
    },
    {
      q: 'Can students visit the lab for offline project troubleshooting?',
      a: 'Yes, enrolled students and internship cohorts can book dedicated bench time with our mentors and use our oscilloscopes, logic analyzers, and soldering stations.',
    },
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Contact HydroSync Innovations LLP
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Have an inquiry about training enrollments, university MoUs, hardware kits, or custom IoT prototyping? We are here to help.
        </p>
      </div>

      {/* Main Grid: Left Contact Info + Right Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Info Cards & Interactive Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#12345B] dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
              Official Contact Channels
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Registered Address</div>
                  <div className="text-slate-500 mt-0.5">{companyDetails.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Phone Support</div>
                  <div className="text-slate-500 mt-0.5">
                    <a href={`tel:${companyDetails.phone}`} className="hover:text-[#1769AA]">{companyDetails.phone}</a>
                    <span className="mx-1">•</span>
                    <a href={`tel:${companyDetails.secondaryPhone}`} className="hover:text-[#1769AA]">{companyDetails.secondaryPhone}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Official Emails</div>
                  <div className="text-slate-500 mt-0.5">
                    <div>General: <a href={`mailto:${companyDetails.email}`} className="hover:text-[#1769AA]">{companyDetails.email}</a></div>
                    <div>Admissions: <a href={`mailto:${companyDetails.admissionsEmail}`} className="hover:text-[#1769AA]">{companyDetails.admissionsEmail}</a></div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Working Hours</div>
                  <div className="text-slate-500 mt-0.5">{companyDetails.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-[#DFE8F0] dark:border-slate-800 shadow-sm">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-bold text-[#12345B] dark:text-slate-200 flex items-center justify-between">
              <span>Location: Sector 62, Noida, NCR</span>
              <span className="text-[10px] text-slate-400">Interactive Map</span>
            </div>
            <iframe
              title="HydroSync Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.575916301322!2d77.35926524999999!3d28.625458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b128613627!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-52 dark:invert-[0.9] dark:hue-rotate-180"
            />
          </div>
        </div>

        {/* Right Column: Contact & Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-md">
            <h2 className="text-xl font-bold text-[#12345B] dark:text-white mb-2">Send an Official Message</h2>
            <p className="text-xs text-slate-500 mb-6">
              Our engineering or admissions team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Message Received!</h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.subject}</strong> has been assigned ticket <span className="font-mono font-bold">TIC-{Math.floor(1000 + Math.random() * 9000)}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Roy"
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aditi@example.com"
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Enquiry Category *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                    >
                      <option value="Course / Training Enquiry">Course / Training Enquiry</option>
                      <option value="Internship Application Inquiry">Internship Application Inquiry</option>
                      <option value="College MoU / Workshop Request">College MoU / Workshop Request</option>
                      <option value="School STEM Workshop">School STEM Workshop</option>
                      <option value="Custom Hardware / R&D Prototyping">Custom Hardware / R&D Prototyping</option>
                      <option value="Certificate Verification Support">Certificate Verification Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] dark:text-slate-200 mb-1">Your Message or Detailed Requirement *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query, batch timeline, or custom hardware needs..."
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                >
                  {loading ? <span>Sending...</span> : <><Send className="w-4 h-4" /><span>Send Message</span></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Contact Questions */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-[#1769AA]" />
          <h2 className="text-xl font-bold text-[#12345B] dark:text-white">Common Inquiries & Support FAQ</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactFaqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800">
              <h3 className="text-xs font-bold text-[#12345B] dark:text-white mb-2">{faq.q}</h3>
              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
