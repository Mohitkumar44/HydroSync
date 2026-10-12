'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { sampleTasksData } from '@/lib/data';
import { StudentTask } from '@/lib/types';
import { 
  CheckCircle2, 
  Clock, 
  Send, 
  FileCheck, 
  Award, 
  User, 
  Calendar, 
  Sparkles, 
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function TaskProgressPage() {
  const [tasks, setTasks] = useState<StudentTask[]>(sampleTasksData);
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'submitted' | 'completed'>('all');
  
  // Submission dialog state
  const [activeTaskToSubmit, setActiveTaskToSubmit] = useState<StudentTask | null>(null);
  const [submissionLink, setSubmissionLink] = useState('');
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;
  const submittedCount = tasks.filter(t => t.status === 'submitted').length;
  const totalCount = tasks.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'all') return true;
    return t.status === filter;
  });

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTaskToSubmit || !submissionLink) return;

    setTasks(tasks.map((t) => {
      if (t.id === activeTaskToSubmit.id) {
        return {
          ...t,
          status: 'submitted',
          submissionLink,
          submissionNotes,
        };
      }
      return t;
    }));

    setSubmitSuccess(true);
    setTimeout(() => {
      setActiveTaskToSubmit(null);
      setSubmissionLink('');
      setSubmissionNotes('');
      setSubmitSuccess(false);
    }, 1200);
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Learning Management & Milestones
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Student Tasks, Submissions & Mentor Progress
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Track sprint tasks, submit Git repositories and schematics for review, inspect direct mentor evaluations, and monitor course completion.
        </p>
      </div>

      {/* Progress & Milestone Overview Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Overall Completion</span>
            <span className="font-bold text-[#1769AA] dark:text-[#20A7D7]">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#1769AA] to-[#20A7D7] h-full rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-400 mt-2">{completedCount} of {totalCount} sprint assignments finished</div>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold uppercase">Completed Tasks</div>
            <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-1">{completedCount}</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Approved by Mentor</div>
          </div>
          <CheckCircle2 className="w-8 h-8 text-emerald-500 opacity-80" />
        </div>

        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-blue-800 dark:text-blue-300 font-semibold uppercase">Under Review</div>
            <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 mt-1">{submittedCount}</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5">Awaiting Mentor Feedback</div>
          </div>
          <FileCheck className="w-8 h-8 text-blue-500 opacity-80" />
        </div>

        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-amber-800 dark:text-amber-300 font-semibold uppercase">In Progress</div>
            <div className="text-2xl font-extrabold text-amber-700 dark:text-amber-400 mt-1">{inProgressCount}</div>
            <div className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">Active Sprint</div>
          </div>
          <Clock className="w-8 h-8 text-amber-500 opacity-80" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#DFE8F0] dark:border-slate-800 pb-4">
        <div className="flex gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Tasks' },
            { id: 'in-progress', label: 'In Progress' },
            { id: 'submitted', label: 'Submitted' },
            { id: 'completed', label: 'Completed' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                filter === tab.id
                  ? 'bg-[#1769AA] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500">
          Logged In Demo Student: <span className="font-bold text-[#12345B] dark:text-white">Mohit Kumar (STU-4821)</span>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    t.status === 'completed' 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : t.status === 'submitted'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    {t.status.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">• Project: {t.project}</span>
                </div>
                <h3 className="text-base font-bold text-[#12345B] dark:text-white">{t.title}</h3>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1769AA]" /> Due: {t.dueDate}
                </span>
                {t.grade && (
                  <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 font-bold text-emerald-700 dark:text-emerald-300">
                    Grade: {t.grade}
                  </span>
                )}
              </div>
            </div>

            {/* Mentor feedback if completed */}
            {t.mentorFeedback && (
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
                <div className="font-bold text-[#12345B] dark:text-slate-200 mb-0.5">Mentor Evaluation Feedback:</div>
                <div className="text-[#66778A] dark:text-slate-300 italic">"{t.mentorFeedback}"</div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-3">
                {t.submissionLink && (
                  <a
                    href={t.submissionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1769AA] dark:text-[#20A7D7] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View Submitted GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {t.status === 'in-progress' && (
                <button
                  onClick={() => setActiveTaskToSubmit(t)}
                  className="px-4 py-2 bg-[#1769AA] hover:bg-[#12345B] text-white font-bold rounded-lg transition flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Task For Review</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Task Submission Modal */}
      {activeTaskToSubmit && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0F243E] rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#12345B] dark:text-white">Submit Task: {activeTaskToSubmit.title}</h3>
            <p className="text-xs text-slate-500">
              Provide your GitHub repository URL containing the firmware code and any photos of the working circuit.
            </p>

            {submitSuccess ? (
              <div className="p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs rounded-xl font-bold text-center">
                ✓ Task successfully submitted for mentor review!
              </div>
            ) : (
              <form onSubmit={handleTaskSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">GitHub Repo / Google Drive URL *</label>
                  <input
                    type="url"
                    required
                    value={submissionLink}
                    onChange={(e) => setSubmissionLink(e.target.value)}
                    placeholder="https://github.com/yourusername/project-repo"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Submission Notes & Results</label>
                  <textarea
                    rows={3}
                    value={submissionNotes}
                    onChange={(e) => setSubmissionNotes(e.target.value)}
                    placeholder="Mention pins used, logic analyzer capture file, test notes..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTaskToSubmit(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg"
                  >
                    Confirm Submission
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Completion Certificates Link */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold">Upon Task Capstone Approval</h3>
          <p className="text-xs text-slate-200 mt-1 max-w-xl">
            When all milestone tasks are marked "Completed" with an average score above 75%, your verifiable QR certificate of completion is automatically generated.
          </p>
        </div>
        <Link
          href="/certifications"
          className="px-5 py-2.5 bg-white text-[#12345B] hover:bg-slate-100 text-xs font-bold rounded-xl transition flex items-center gap-1"
        >
          <span>Verify Credential Samples</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
