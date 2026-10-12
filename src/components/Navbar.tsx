'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Home, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Send, 
  ChevronDown, 
  Globe, 
  UserCheck, 
  GraduationCap, 
  School, 
  ShieldCheck, 
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalsDropdown, setPortalsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPortalsDropdown(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('aboutUs') },
    { href: '/services', label: t('services') },
    { href: '/internships', label: t('internships') },
    { href: '/courses', label: t('courses') },
    { href: '/live-classes', label: t('liveClasses') },
    { href: '/events', label: t('events') },
    { href: '/for-schools', label: t('forSchools') },
    { href: '/for-colleges', label: t('forColleges') },
    { href: '/projects', label: t('projects') },
    { href: '/team', label: t('team') },
    { href: '/gallery', label: t('gallery') },
    { href: '/blog', label: t('blog') },
    { href: '/task-progress', label: t('taskProgress') },
    { href: '/contact', label: t('contact') },
  ];

  const portalLinks = [
    { href: '/portals/student', label: 'Student Portal', icon: GraduationCap, desc: 'Courses, tasks & QR certificates' },
    { href: '/portals/institution', label: 'School / College Portal', icon: School, desc: 'MoU, student batches & reports' },
    { href: '/portals/organizer', label: 'Organizer Portal', icon: Calendar, desc: 'Hackathons, webinars & attendance' },
    { href: '/portals/admin', label: 'Admin Panel', icon: ShieldCheck, desc: 'Lectures, CMS & analytics' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 dark:bg-[#0B1E34]/95 backdrop-blur-md shadow-md border-b border-[#DFE8F0] dark:border-slate-800' 
        : 'bg-white dark:bg-[#0B1E34] border-b border-[#DFE8F0] dark:border-slate-800'
    }`}>
      {/* Top micro announcement bar */}
      <div className="bg-[#12345B] text-white text-xs py-1.5 px-4 hidden md:block border-b border-[#1769AA]/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#20A7D7]/20 text-[#20A7D7] px-2 py-0.5 rounded-full font-medium text-[11px]">
              <Sparkles className="w-3 h-3" /> Registrations Open
            </span>
            <span>National Smart HealthTech Hackathon 2026 & Winter Internship Cohorts</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span>LLPIN: ACA-3982</span>
            <span>•</span>
            <span>MSME & Startup India Recognized</span>
            <span>•</span>
            <Link href="/certifications" className="hover:text-white transition-colors underline">
              Verify Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="full" />
          </div>

          {/* Right action controls on Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Portals Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setPortalsDropdown(!portalsDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#12345B] dark:text-[#E2E8F0] hover:bg-[#F2F8FC] dark:hover:bg-slate-800 border border-[#DFE8F0] dark:border-slate-700 transition"
              >
                <Layers className="w-3.5 h-3.5 text-[#20A7D7]" />
                <span>Portals</span>
                <ChevronDown className="w-3 h-3 text-[#66778A]" />
              </button>

              {portalsDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-72 rounded-xl bg-white dark:bg-[#0F243E] shadow-2xl border border-[#DFE8F0] dark:border-slate-700 py-2 z-50"
                  onMouseLeave={() => setPortalsDropdown(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#66778A] dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                    Role-Based Portals
                  </div>
                  {portalLinks.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="flex items-start gap-3 px-3 py-2.5 hover:bg-[#F2F8FC] dark:hover:bg-slate-800/60 transition group"
                      >
                        <div className="p-2 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] group-hover:bg-[#1769AA] group-hover:text-white transition">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#243447] dark:text-slate-100">{p.label}</div>
                          <div className="text-[10px] text-[#66778A] dark:text-slate-400">{p.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1 px-3 py-1 text-center">
                    <Link href="/portals" className="text-[11px] font-medium text-[#20A7D7] hover:underline">
                      View All Portals Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-[#243447] dark:text-slate-200 hover:bg-[#F2F8FC] dark:hover:bg-slate-800 border border-transparent hover:border-[#DFE8F0] dark:hover:border-slate-700 transition"
              title="Toggle Hindi / English"
            >
              <Globe className="w-3.5 h-3.5 text-[#1769AA]" />
              <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-[#243447] dark:text-slate-200 hover:bg-[#F2F8FC] dark:hover:bg-slate-800 transition"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#12345B]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Apply Now Primary CTA Button */}
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1769AA] to-[#20A7D7] hover:from-[#12345B] hover:to-[#1769AA] text-white text-xs font-bold tracking-wide shadow-sm hover:shadow transition transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t('applyNow')}</span>
            </Link>
          </div>

          {/* Mobile menu and controls toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#12345B] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dense Desktop Secondary Menu Strip covering all 15 top sitemap links */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#DFE8F0]/70 dark:border-slate-800/80 py-2 overflow-x-auto text-xs">
          <div className="flex items-center gap-1 xl:gap-2 flex-wrap">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1769AA] text-white font-semibold shadow-xs'
                      : 'text-[#243447] dark:text-slate-300 hover:text-[#1769AA] dark:hover:text-[#20A7D7] hover:bg-[#F2F8FC] dark:hover:bg-slate-800'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pl-3">
            <Link
              href="/forum"
              className="text-[#1769AA] dark:text-[#20A7D7] hover:underline font-semibold text-[11px] whitespace-nowrap"
            >
              Student Forum
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/setup"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 whitespace-nowrap"
            >
              Consolidated Setup
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B1E34] border-b border-[#DFE8F0] dark:border-slate-800 px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 mb-3">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-[#12345B] dark:text-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Language: {language === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}</span>
            </button>
            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1769AA] text-white text-xs font-bold"
            >
              <Send className="w-3 h-3" />
              <span>{t('applyNow')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs font-medium ${
                    isActive
                      ? 'bg-[#1769AA] text-white font-semibold'
                      : 'text-[#243447] dark:text-slate-200 hover:bg-[#F2F8FC] dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#66778A] dark:text-slate-400 mb-2">
              Role Portals
            </div>
            <div className="grid grid-cols-2 gap-2">
              {portalLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="p-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold text-[#12345B] dark:text-slate-200 flex items-center gap-2"
                >
                  <p.icon className="w-4 h-4 text-[#20A7D7]" />
                  <span>{p.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-[#66778A]">
            <Link href="/forum" className="hover:text-[#1769AA]">Discussion Forum</Link>
            <Link href="/certifications" className="hover:text-[#1769AA]">Verify Certificate</Link>
            <Link href="/setup" className="font-semibold text-emerald-600">Setup Form</Link>
          </div>
        </div>
      )}
    </header>
  );
}
