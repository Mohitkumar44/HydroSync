'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  coursesData, 
  eventsData, 
  projectsData, 
  testimonialsData, 
  companyDetails, 
  partnersData 
} from '@/lib/data';
import { 
  Cpu, 
  Wifi, 
  BrainCircuit, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Users, 
  Building2, 
  Sparkles, 
  Award, 
  BookOpen, 
  Star, 
  ShieldCheck,
  Send,
  Layers,
  Activity,
  Play
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();

  const focusAreas = [
    {
      title: 'Internet of Things (IoT)',
      icon: Wifi,
      color: 'from-blue-600 to-cyan-500',
      description: 'End-to-end connected telemetry, MQTT protocols, cloud broker dashboards, and ultra-low-power wireless mesh nodes.',
      features: ['ESP32 & LoRaWAN', 'Cloud Dashboards & WebSockets', 'Industrial Sensor Interfacing'],
      link: '/courses#iot-embedded',
    },
    {
      title: 'Embedded Systems',
      icon: Cpu,
      color: 'from-indigo-600 to-blue-500',
      description: 'Bare-metal ARM Cortex firmware, FreeRTOS multitasking, custom PCB layout with KiCad, and hardware bus debugging.',
      features: ['Bare-Metal C/C++', 'FreeRTOS Concurrency', 'Schematic & 4-Layer PCB Design'],
      link: '/courses#iot-embedded',
    },
    {
      title: 'Edge AI & TinyML',
      icon: BrainCircuit,
      color: 'from-cyan-600 to-teal-500',
      description: 'Deploying neural networks directly on microcontrollers for predictive acoustics, biometric tracking, and edge machine vision.',
      features: ['TensorFlow Lite for MCUs', 'Quantization (INT8)', 'Acoustic Anomaly Detection'],
      link: '/courses#ai-ml-iot',
    },
    {
      title: 'Technical Training & Internships',
      icon: GraduationCap,
      color: 'from-sky-600 to-indigo-500',
      description: 'Industry-standard hands-on training with physical hardware kits shipped to students and live mentor-led project sprints.',
      features: ['Verifiable QR Certificates', 'Live Debugging Sessions', 'Placement Referral Support'],
      link: '/internships',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FC] via-white to-white dark:from-[#0B1E34] dark:via-[#0F243E] dark:to-[#0B1E34] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#DFE8F0] dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Badges, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1769AA]/10 dark:bg-[#20A7D7]/15 border border-[#1769AA]/20 dark:border-[#20A7D7]/30 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Govt. Recognized • MSME & Startup India • LLPIN: {companyDetails.llpin}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12345B] dark:text-white tracking-tight leading-[1.15]">
                Pioneering <span className="text-[#1769AA] dark:text-[#20A7D7]">IoT</span>, <span className="text-[#20A7D7]">Embedded Systems</span> & <span className="text-[#12345B] dark:text-[#60A5FA]">AI</span> Solutions
              </h1>

              <p className="text-base sm:text-lg text-[#66778A] dark:text-slate-300 leading-relaxed">
                HydroSync Innovations LLP bridges academic curiosity and industrial engineering through cutting-edge hardware prototyping, certified live classes, student internships, and institutional collaborations.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#12345B] to-[#1769AA] hover:from-[#1769AA] hover:to-[#20A7D7] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t('exploreCourses')}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  href="/internships"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-[#1769AA] text-[#1769AA] dark:text-[#20A7D7] font-bold text-sm hover:bg-[#F2F8FC] dark:hover:bg-slate-700 transition"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{t('joinInternship')}</span>
                </Link>

                <Link
                  href="/live-classes"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 font-semibold text-sm hover:text-[#1769AA] dark:hover:text-[#20A7D7] transition"
                >
                  <Play className="w-4 h-4 text-[#20A7D7]" />
                  <span>Live Classes Demo</span>
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Physical Hardware Kits</div>
                  <div className="text-slate-500">Shipped for each cohort</div>
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Verifiable QR Credentials</div>
                  <div className="text-slate-500">ISO-aligned validation</div>
                </div>
                <div>
                  <div className="font-bold text-[#12345B] dark:text-white">Active Mentorship</div>
                  <div className="text-slate-500">Live doubt clearance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Hardware Telemetry Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#12345B] to-[#0B1E34] p-6 text-white shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-emerald-300">LIVE HARDWARE NODE #08</span>
                  </div>
                  <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-300">ESP32-S3 • FreeRTOS</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                      <span>HydroSense Water Quality Index</span>
                      <span className="text-emerald-400 font-mono font-bold">98.2 WQI (Pristine)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-[#20A7D7] h-full w-[94%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Turbidity Sensor</div>
                      <div className="text-lg font-mono font-bold text-[#20A7D7]">0.42 NTU</div>
                      <div className="text-[10px] text-emerald-400">Within potable norms</div>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <div className="text-[11px] text-slate-400">Edge TinyML Model</div>
                      <div className="text-lg font-mono font-bold text-amber-300">Normal State</div>
                      <div className="text-[10px] text-slate-400">Inference: 14ms (INT8)</div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#1769AA]/20 rounded-xl border border-[#20A7D7]/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold">Student Cohort Progress</div>
                      <div className="text-[11px] text-slate-300">Module 3: LoRaWAN Telemetry</div>
                    </div>
                    <Link
                      href="/task-progress"
                      className="px-3 py-1.5 bg-[#20A7D7] text-[#0B1E34] text-xs font-bold rounded-lg hover:bg-white transition"
                    >
                      View LMS
                    </Link>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                  <span>MQTT Broker: broker.hydrosync.in:8883</span>
                  <span className="text-emerald-400">TLS 1.3 Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY STATS / HIGHLIGHTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12345B] rounded-2xl p-8 sm:p-10 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#20A7D7]">Proven Impact & Growth</h2>
            <p className="text-2xl font-bold mt-1">Driving Real-World Technical Excellence Across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-[#20A7D7]">{companyDetails.stats.studentsTrained}+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Students Trained</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400">{companyDetails.stats.projectsBuilt}+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Hardware Projects Built</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-[#20A7D7]">{companyDetails.stats.collegesPartnered}+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Colleges Partnered</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-amber-300">{companyDetails.stats.schoolsEmpowered}+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Schools Empowered</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-emerald-400">{companyDetails.stats.placementAssisted}%</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Placement Assistance</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-[#20A7D7]">{companyDetails.stats.activeMentors}+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Industry Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR FOCUS AREAS (IoT, AI, Embedded) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">
              {t('focusAreas')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12345B] dark:text-white mt-1">
              Engineered For Modern Technology Demands
            </h2>
          </div>
          <p className="text-sm text-[#66778A] dark:text-slate-400 max-w-md mt-2 md:mt-0">
            From basic circuit assembly to cutting-edge Edge AI machine learning on microcontrollers, explore our integrated core pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 hover:border-[#1769AA] dark:hover:border-[#20A7D7] transition shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-5 group-hover:scale-105 transition`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#12345B] dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-[#66778A] dark:text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {area.features.map((f, i) => (
                      <li key={i} className="text-xs text-[#243447] dark:text-slate-300 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={area.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED COURSES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Industry-Aligned Courses</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12345B] dark:text-white mt-1">Featured Programs & Certifications</h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline mt-2 md:mt-0"
          >
            <span>View All Courses & Fee Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-[11px]">
                    {course.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.enrolledStudents})</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#12345B] dark:text-white mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-[#66778A] dark:text-slate-400 mb-4 line-clamp-2">
                  {course.tagline}
                </p>

                <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-[#F2F8FC] dark:bg-slate-800/60 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Duration:</span>
                    <div className="font-semibold text-[#12345B] dark:text-slate-200">{course.duration}</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Mode:</span>
                    <div className="font-semibold text-[#12345B] dark:text-slate-200">{course.mode}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-1.5">₹{course.originalFee}</span>
                  <span className="text-lg font-extrabold text-[#12345B] dark:text-white">₹{course.fee}</span>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className="px-4 py-2 bg-[#1769AA] hover:bg-[#20A7D7] text-white text-xs font-bold rounded-lg transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. UPCOMING EVENTS & HACKATHONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F2F8FC] to-white dark:from-[#0F243E] dark:to-[#0B1E34] rounded-2xl p-8 border border-[#DFE8F0] dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Active Competitions</span>
              <h2 className="text-2xl font-extrabold text-[#12345B] dark:text-white mt-1">Upcoming Events & Hackathons</h2>
            </div>
            <Link
              href="/events"
              className="text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline mt-2 md:mt-0"
            >
              Explore Past & Upcoming Events →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {eventsData.filter(e => e.status === 'upcoming').map((ev) => (
              <div
                key={ev.id}
                className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] uppercase">
                      {ev.categoryLabel}
                    </span>
                    <span className="text-slate-500 font-medium">{ev.mode}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#12345B] dark:text-white mb-1.5">{ev.title}</h3>
                  <p className="text-xs text-[#66778A] dark:text-slate-400 mb-3">{ev.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1769AA]" /> {ev.date}
                    </span>
                    <span>•</span>
                    <span>{ev.seatsTotal - ev.seatsBooked} seats remaining</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-500">
                    Registration: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{ev.registrationFee === 0 ? 'FREE' : `₹${ev.registrationFee}`}</span>
                  </div>
                  <Link
                    href={`/events/${ev.id}`}
                    className="px-4 py-2 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold rounded-lg transition"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AUTHENTIC TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] dark:text-[#20A7D7]">Student & Partner Feedback</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12345B] dark:text-white mt-1">What Our Learners & Partners Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] mb-2">{item.highlight}</div>
                <p className="text-xs text-[#243447] dark:text-slate-300 leading-relaxed italic mb-4">
                  "{item.content}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="font-bold text-xs text-[#12345B] dark:text-white">{item.name}</div>
                <div className="text-[11px] text-slate-500">{item.role} • {item.organization}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VERIFIED PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#66778A] dark:text-slate-400">Academic & Ecosystem Partners</span>
          <p className="text-base font-bold text-[#12345B] dark:text-white mt-1 mb-6">Collaborating with Top Universities & Hardware Technology Leaders</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnersData.academic.concat(partnersData.industry.slice(0, 4)).map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white dark:bg-[#0B1E34] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center shadow-xs"
              >
                <div className="text-xs font-bold text-[#12345B] dark:text-slate-200">{p.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{p.type}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/for-colleges" className="text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
              Partner Your College (Sign MoU) →
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/for-schools" className="text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline">
              School STEM Workshops →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION (JOIN / ENQUIRE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#12345B] via-[#1769AA] to-[#20A7D7] p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Innovate for a Healthier Tomorrow?
            </h2>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              Whether you are a student aiming to build a standout hardware portfolio, an educational institution seeking specialized lab training, or an industry partner needing custom IoT prototyping—our team is ready.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="px-6 py-3 rounded-xl bg-white text-[#12345B] hover:bg-slate-100 font-bold text-xs tracking-wide shadow transition transform hover:-translate-y-0.5"
              >
                Apply for Next Batch
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#0B1E34]/50 border border-white/30 hover:bg-[#0B1E34] text-white font-bold text-xs tracking-wide transition"
              >
                Send Direct Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
