'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import { 
  Cpu, 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT Projects' },
    { id: 'embedded', label: 'Embedded Projects' },
    { id: 'ai-ml', label: 'AI/ML Projects' },
    { id: 'hardware', label: 'Hardware Prototypes' },
    { id: 'student', label: 'Student Projects' },
  ];

  const filtered = projectsData.filter((p) => {
    const matchesFilter = selectedFilter === 'all' || p.category === selectedFilter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.summary.toLowerCase().includes(search.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Engineered In Our R&D Lab
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Hardware, IoT & Edge AI Projects
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Explore production-grade telemetry grids, TinyML edge acoustic nodes, modular hydroponic automation systems, and award-winning student capstones with open documentation.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedFilter === tab.id
                  ? 'bg-[#1769AA] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search technologies, components..."
            className="w-full px-3 py-2 text-xs rounded-xl border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-xl transition space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-xs">
                  {proj.categoryLabel}
                </span>
                {proj.isStudentProject && (
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                    Student Capstone
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-[#12345B] dark:text-white mb-2 leading-snug">
                {proj.title}
              </h2>

              {proj.studentAuthor && (
                <div className="text-xs text-slate-500 mb-2">Built By: <span className="font-semibold text-slate-700 dark:text-slate-300">{proj.studentAuthor}</span></div>
              )}

              <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300 leading-relaxed mb-4">
                {proj.summary}
              </p>

              {/* Technologies */}
              <div className="space-y-1.5 mb-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Tech Stack & Tools:</div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hardware components */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Hardware Components:</div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.hardwareComponents.map((hc, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#F2F8FC] dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px] text-[#12345B] dark:text-slate-200">
                      {hc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-black dark:hover:text-white transition"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {proj.docsUrl && (
                  <a
                    href={proj.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-[#1769AA] transition"
                    title="Project Documentation"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${proj.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
