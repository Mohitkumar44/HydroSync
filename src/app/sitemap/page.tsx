'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Map, CheckCircle2 } from 'lucide-react';

export default function HTMLSitemapPage() {
  const sitemapGroups = [
    {
      title: 'Core Public Navigation',
      links: [
        { href: '/', label: 'Home Page' },
        { href: '/about', label: 'About Us (Story, Vision, Values, Timeline, Registration)' },
        { href: '/services', label: 'Services (9 Core Engineering & Training Pillars)' },
        { href: '/internships', label: 'Internships (Programs, Stipend, Mode, Apply)' },
        { href: '/courses', label: 'Courses & Certifications (Categories, Duration & Fees)' },
        { href: '/live-classes', label: 'Live Classes (Upcoming Schedule, Meet Link, Recordings, Notes)' },
        { href: '/events', label: 'Events & Hackathons (Upcoming & Past Competitions)' },
        { href: '/for-schools', label: 'For Schools (STEM Outreach, Robotics Kits & Registration)' },
        { href: '/for-colleges', label: 'For Colleges (Workshops, MoU, Labs & Placement Drives)' },
        { href: '/projects', label: 'Projects & Prototypes (IoT, Embedded, TinyML, Case Studies)' },
        { href: '/team', label: 'Team (Founders, Mentors, Trainers, Advisors, Recruitment)' },
        { href: '/gallery', label: 'Gallery (Event Photos, Lab Photos, Video Showcase)' },
        { href: '/blog', label: 'Blog & Resources (Technical Articles, Tutorials, Downloads)' },
        { href: '/task-progress', label: 'Task & Progress (Student LMS, Sprint Submissions, Feedback)' },
        { href: '/contact', label: 'Contact Us (Addresses, Phone, Interactive Map, WhatsApp)' },
        { href: '/apply', label: 'Apply Now (Unified Application Portal)' },
      ],
    },
    {
      title: 'Specialized Role Portals',
      links: [
        { href: '/portals', label: 'All Portals Overview & Selector' },
        { href: '/portals/student', label: 'Student Learning Portal (Classes, Tasks, QR Certificates)' },
        { href: '/portals/institution', label: 'School & College Portal (Student Batches, MoU, Activity Reports)' },
        { href: '/portals/organizer', label: 'Event Organizer Portal (Registrations, Attendance, Certificates)' },
        { href: '/portals/admin', label: 'Admin Panel (Content, Lectures, Users, Analytics)' },
      ],
    },
    {
      title: 'Community & Interactive Tools',
      links: [
        { href: '/forum', label: 'Discussion Forum (Community Q&A and Mentor Solutions)' },
        { href: '/certifications', label: 'Certificate Verification Hub (Dynamic QR Code Validator)' },
        { href: '/careers', label: 'Careers & Recruitment (Full-Time Hardware & Trainer Roles)' },
        { href: '/partners', label: 'Partners & Ecosystem (Academic & Industry Collaborators)' },
        { href: '/testimonials', label: 'Testimonials & Reviews (Student & Client Feedback)' },
        { href: '/faq', label: 'Frequently Asked Questions (General, Courses, Technical)' },
        { href: '/payment', label: 'Online Payment Checkout Gateway (Razorpay Integration Demo)' },
        { href: '/setup', label: 'Consolidated Integration Setup Form (Mandatory System Setup)' },
      ],
    },
    {
      title: 'Legal & Compliance Documents',
      links: [
        { href: '/privacy-policy', label: 'Privacy Policy (DPDP Act Compliance)' },
        { href: '/terms', label: 'Terms & Conditions (Educational Licensing & Conduct)' },
        { href: '/refund-policy', label: 'Cancellation & Refund Policy' },
        { href: '/sitemap.xml', label: 'Machine-Readable XML Sitemap' },
      ],
    },
  ];

  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">Website Index</span>
        <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">
          HydroSync Complete Website Sitemap
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          A full structured architectural directory matching all 16 navigation pillars, 4 portals, and supporting legal pages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sitemapGroups.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-[#12345B] dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              {group.title}
            </h2>
            <ul className="space-y-2 text-xs">
              {group.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#1769AA] dark:hover:text-[#20A7D7] transition"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#20A7D7] flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
