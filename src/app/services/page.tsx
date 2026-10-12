'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Cpu, 
  Layers, 
  Wrench, 
  Briefcase, 
  Code2, 
  Package, 
  School, 
  BrainCircuit, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'technical-training',
      title: 'Technical Training',
      icon: GraduationCap,
      category: 'Education & Upskilling',
      description: 'Hands-on hardware and software training programs covering embedded microcontrollers, IoT cloud architecture, TinyML, and drone technology.',
      deliverables: ['Live instructor-led labs', 'Take-home hardware kits', 'Verified QR certificates', 'Project portfolio building'],
      ctaText: 'Explore Courses',
      ctaHref: '/courses',
    },
    {
      id: 'internship-programs',
      title: 'Internship Programs',
      icon: Briefcase,
      category: 'Experiential Learning',
      description: 'Structured 3-month and 6-month technical internships where students work on live commercial products under direct mentorship.',
      deliverables: ['Monthly performance stipend', 'Letter of Recommendation (LOR)', 'Real GitHub commit history', 'PPO opportunities'],
      ctaText: 'View Internships',
      ctaHref: '/internships',
    },
    {
      id: 'project-development',
      title: 'Project Development',
      icon: Code2,
      category: 'Engineering Services',
      description: 'End-to-end hardware product engineering from concept definition, circuit schematic design, PCB layout, firmware coding, and cloud telemetry.',
      deliverables: ['Custom 2/4-layer KiCad PCBs', 'Tested firmware drivers', 'Web/Mobile telemetry dashboards', 'Complete source code & BOM'],
      ctaText: 'View Projects',
      ctaHref: '/projects',
    },
    {
      id: 'rd-prototyping',
      title: 'R&D and Prototyping',
      icon: Wrench,
      category: 'Innovation Lab',
      description: 'Rapid physical prototyping services utilizing 3D printing, laser-cut fixtures, SMD soldering, logic analysis, and environmental sensor calibration.',
      deliverables: ['Proof-of-Concept (POC) hardware', 'Custom sensor integration', 'Enclosure design (IP65/IP68)', 'Bench testing documentation'],
      ctaText: 'Discuss Prototype',
      ctaHref: '/contact',
    },
    {
      id: 'consultancy-services',
      title: 'Consultancy Services',
      icon: Layers,
      category: 'Enterprise Solutions',
      description: 'Advisory services for hardware startups, industrial manufacturing units, and academic departments seeking industry 4.0 modernization.',
      deliverables: ['Component obsolescence audits', 'Firmware security evaluations', 'Wireless link budget analysis', 'Low-power optimization'],
      ctaText: 'Consult Our Experts',
      ctaHref: '/contact',
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      icon: Cpu,
      category: 'Bespoke Hardware',
      description: 'Tailored automation and remote telemetry systems designed to meet exact operational requirements for agriculture, water monitoring, and factories.',
      deliverables: ['Bespoke controller boards', 'Private MQTT / HTTP servers', 'Custom mobile companion apps', 'Installation support'],
      ctaText: 'Request Custom Build',
      ctaHref: '/contact',
    },
    {
      id: 'product-kits',
      title: 'Product Kits & Hardware Lab Bundles',
      icon: Package,
      category: 'Educational Hardware',
      description: 'Specially assembled hardware starter kits containing original ESP32 / STM32 boards, premium sensors, actuators, and learning guides.',
      deliverables: ['Tested component bundles', 'Step-by-step schematics', 'Pre-flashed starter codebases', 'Doorstep courier pan-India'],
      ctaText: 'Inquire Kits',
      ctaHref: '/contact',
    },
    {
      id: 'school-college-workshops',
      title: 'School & College Workshops',
      icon: School,
      category: 'Institutional Programs',
      description: '2 to 5-day on-campus intensive bootcamps bringing physical hardware kits and senior trainers directly to university and school auditoriums.',
      deliverables: ['Comprehensive lab setups', 'Curriculum aligned to NEP 2020', 'Faculty development modules', 'Student hackathon events'],
      ctaText: 'Book Workshop',
      ctaHref: '/for-colleges',
    },
    {
      id: 'iot-ai-solutions',
      title: 'IoT / AI Solutions',
      icon: BrainCircuit,
      category: 'Smart Technologies',
      description: 'Integrated intelligent monitoring grids pairing low-power sensors with on-device machine learning models for predictive maintenance and safety.',
      deliverables: ['TinyML INT8 quantized models', 'Sub-second anomaly alert nodes', 'Scalable multi-tenant cloud', 'Fail-safe watchdogs'],
      ctaText: 'See Solutions',
      ctaHref: '/projects',
    },
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          Comprehensive Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Our Engineering & Training Services
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          From hands-on student bootcamps to commercial embedded system design, HydroSync Innovations LLP delivers end-to-end technical excellence across all 9 focus pillars.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.id}
              className="rounded-2xl p-7 bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#1769AA] transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] dark:text-[#20A7D7] group-hover:bg-[#1769AA] group-hover:text-white transition flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {svc.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#12345B] dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-5">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Key Deliverables</div>
                  {svc.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#243447] dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={svc.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#12345B] dark:text-slate-200 font-bold text-xs hover:bg-[#1769AA] hover:text-white transition"
                >
                  <span>{svc.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Institutional CTA Strip */}
      <div className="rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold">Looking for Custom Institutional or Corporate Training?</h2>
          <p className="text-xs text-slate-200 mt-1.5">
            We curate customized syllabus modules and hardware bundles for university lab retrofits, engineering colleges, and enterprise hardware teams.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#12345B] hover:bg-slate-100 font-bold text-xs rounded-xl transition flex-shrink-0"
        >
          Request Institutional Proposal
        </Link>
      </div>
    </div>
  );
}
