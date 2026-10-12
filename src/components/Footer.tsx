'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { companyDetails } from '@/lib/data';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Github, 
  Twitter,
  MessageCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubmitting(true);
    // Simulate real local feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <footer className="bg-[#0B1E34] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1 & 2: Brand Info & Registration Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 p-3 rounded-xl inline-block shadow-sm">
              <Logo variant="full" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering engineers, innovators, and academic institutions through industry-grade IoT firmware, Edge AI architectures, hardware prototyping, and immersive technical training.
            </p>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-xs space-y-1 text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">LLPIN Registration:</span>
                <span className="font-mono text-white font-semibold">{companyDetails.llpin}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">MSME Udyam:</span>
                <span className="font-mono text-white font-semibold">{companyDetails.msme}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Startup India DIPP:</span>
                <span className="font-mono text-emerald-400 font-semibold">{companyDetails.startupIndia}</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Connect With Us</div>
              <div className="flex items-center gap-2">
                <a 
                  href={companyDetails.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-[#1769AA] text-white transition hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={companyDetails.socialLinks.youtube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-red-600 text-white transition hover:scale-105"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href={companyDetails.socialLinks.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-pink-600 text-white transition hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={companyDetails.socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={companyDetails.socialLinks.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-sky-500 text-white transition hover:scale-105"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={`https://wa.me/${companyDetails.whatsappNumber.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition hover:scale-105 inline-flex items-center gap-1 text-xs px-2.5"
                  title="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold text-[11px]">Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wide uppercase text-white border-l-2 border-[#20A7D7] pl-2">
              Explore Programs
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/courses" className="hover:text-[#20A7D7] transition">Courses & Fees</Link></li>
              <li><Link href="/internships" className="hover:text-[#20A7D7] transition">Internship Programs</Link></li>
              <li><Link href="/live-classes" className="hover:text-[#20A7D7] transition">Live Interactive Classes</Link></li>
              <li><Link href="/events" className="hover:text-[#20A7D7] transition">Hackathons & Events</Link></li>
              <li><Link href="/projects" className="hover:text-[#20A7D7] transition">Hardware & IoT Projects</Link></li>
              <li><Link href="/for-schools" className="hover:text-[#20A7D7] transition">School STEM Outreach</Link></li>
              <li><Link href="/for-colleges" className="hover:text-[#20A7D7] transition">College MoUs & Labs</Link></li>
              <li><Link href="/task-progress" className="hover:text-[#20A7D7] transition">Task & LMS Progress</Link></li>
            </ul>
          </div>

          {/* Column 4: Important Links & Policies */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wide uppercase text-white border-l-2 border-[#1769AA] pl-2">
              Company & Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[#20A7D7] transition">Our Story & Vision</Link></li>
              <li><Link href="/team" className="hover:text-[#20A7D7] transition">Founders & Mentors</Link></li>
              <li><Link href="/careers" className="hover:text-[#20A7D7] transition">Careers & Openings</Link></li>
              <li><Link href="/certifications" className="hover:text-[#20A7D7] transition">Certificate Verification</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#20A7D7] transition">Student & Client Reviews</Link></li>
              <li><Link href="/partners" className="hover:text-[#20A7D7] transition">Academic Partners</Link></li>
              <li><Link href="/faq" className="hover:text-[#20A7D7] transition">Frequently Asked Questions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#20A7D7] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#20A7D7] transition">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#20A7D7] transition">Refund Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-[#20A7D7] transition">HTML Site Index</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wide uppercase text-white border-l-2 border-[#20A7D7] pl-2">
              Contact & Inquiries
            </h3>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#20A7D7] flex-shrink-0 mt-0.5" />
                <span>{companyDetails.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#20A7D7] flex-shrink-0" />
                <a href={`tel:${companyDetails.phone}`} className="hover:text-white">{companyDetails.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#20A7D7] flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white">{companyDetails.email}</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#20A7D7] flex-shrink-0 mt-0.5" />
                <span>{companyDetails.workingHours}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-white mb-1.5">Subscribe to Tech & Event Alerts</div>
              {subscribed ? (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Subscribed! You will receive upcoming cohort updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#20A7D7]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-3 py-2 bg-[#1769AA] hover:bg-[#20A7D7] text-white rounded-lg text-xs font-semibold transition flex-shrink-0 flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? '...' : <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white transition">Refunds</Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition">XML Sitemap</Link>
            <span>•</span>
            <Link href="/setup" className="text-emerald-400 hover:text-emerald-300 transition font-medium">Consolidated Setup</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
