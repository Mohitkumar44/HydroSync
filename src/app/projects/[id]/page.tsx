'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projectsData } from '@/lib/data';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Activity,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h1 className="text-2xl font-bold text-[#12345B] dark:text-white">Project Not Found</h1>
        <Link href="/projects" className="inline-block px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-bold">
            {project.categoryLabel}
          </span>
          {project.isStudentProject && (
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              Student Capstone Project
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white leading-tight">
          {project.title}
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code & Firmware</span>
            </a>
          )}
          {project.docsUrl && (
            <a
              href={project.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Full Engineering Documentation</span>
            </a>
          )}
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">The Problem</div>
          <h2 className="text-base font-bold text-red-950 dark:text-red-200">Engineering Challenge</h2>
          <p className="text-xs text-red-900 dark:text-red-300 leading-relaxed">{project.problemStatement}</p>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">The Solution</div>
          <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-200">Hardware & Firmware Architecture</h2>
          <p className="text-xs text-emerald-900 dark:text-emerald-300 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="p-6 rounded-2xl bg-[#12345B] text-white">
        <div className="text-xs font-bold uppercase tracking-wider text-[#20A7D7] mb-3">Key Measured Performance Metrics</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-3 bg-white/10 rounded-xl font-mono text-sm font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">Hardware Bill of Materials (BOM)</h2>
          <ul className="space-y-2 text-xs text-[#243447] dark:text-slate-300">
            {project.hardwareComponents.map((hc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1769AA] flex-shrink-0" />
                <span>{hc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 space-y-3">
          <h2 className="text-base font-bold text-[#12345B] dark:text-white">Core Technologies & Firmware Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold rounded-lg text-slate-700 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            Includes custom KiCad 8 schematic sheets, Gerber output archives, and FreeRTOS task schedules.
          </div>
        </div>
      </div>
    </div>
  );
}
