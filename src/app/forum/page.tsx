'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { forumTopicsData } from '@/lib/data';
import { ForumTopic } from '@/lib/types';
import { 
  MessageSquare, 
  ThumbsUp, 
  User, 
  Send, 
  Sparkles, 
  Clock, 
  HelpCircle,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function ForumPage() {
  const [topics, setTopics] = useState<ForumTopic[]>(forumTopicsData);
  const [activeTopic, setActiveTopic] = useState<ForumTopic | null>(null);
  
  // New topic modal state
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Hardware Debugging');
  const [newContent, setNewContent] = useState('');
  const [authorName, setAuthorName] = useState('Student');

  // Reply state
  const [replyContent, setReplyContent] = useState('');

  const handleUpvote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTopics(topics.map((t) => t.id === id ? { ...t, upvotes: t.upvotes + 1 } : t));
  };

  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const created: ForumTopic = {
      id: `forum-${Date.now()}`,
      title: newTitle,
      author: authorName || 'Anonymous Student',
      role: 'Student (Cohort 2026)',
      category: newCategory,
      content: newContent,
      createdAt: 'Just now',
      upvotes: 1,
      replies: [],
    };

    setTopics([created, ...topics]);
    setShowNewTopicModal(false);
    setNewTitle('');
    setNewContent('');
  };

  const handleAddReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTopic || !replyContent) return;

    const newRep = {
      id: `rep-${Date.now()}`,
      author: 'Mohit Kumar (You)',
      role: 'Enrolled Student',
      content: replyContent,
      createdAt: 'Just now',
    };

    const updated = {
      ...activeTopic,
      replies: [...activeTopic.replies, newRep],
    };

    setActiveTopic(updated);
    setTopics(topics.map(t => t.id === updated.id ? updated : t));
    setReplyContent('');
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Peer & Mentor Community
          </span>
          <h1 className="text-3xl font-extrabold text-[#12345B] dark:text-white">
            HydroSync Technical Discussion Forum
          </h1>
          <p className="text-xs sm:text-sm text-[#66778A] dark:text-slate-300 mt-1 max-w-2xl">
            Ask hardware debugging questions, share KiCad footprint files, collaborate on hackathon teams, and get direct assistance from firmware mentors.
          </p>
        </div>

        <button
          onClick={() => setShowNewTopicModal(true)}
          className="px-5 py-3 bg-[#1769AA] hover:bg-[#12345B] text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2 flex-shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Start New Discussion</span>
        </button>
      </div>

      {/* Main Grid: Left Topics List + Right Discussion Thread Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Topics List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Active Community Threads ({topics.length})
          </div>

          {topics.map((t) => (
            <div
              key={t.id}
              onClick={() => setActiveTopic(t)}
              className={`p-4 rounded-xl border transition cursor-pointer ${
                activeTopic?.id === t.id
                  ? 'border-[#1769AA] bg-[#F2F8FC] dark:bg-slate-800/90 shadow-sm'
                  : 'border-[#DFE8F0] dark:border-slate-800 bg-white dark:bg-[#0F243E] hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="font-semibold text-[#1769AA] dark:text-[#20A7D7]">{t.category}</span>
                <span className="text-slate-400">{t.createdAt}</span>
              </div>
              <h3 className="text-sm font-bold text-[#12345B] dark:text-white mb-2 leading-snug">{t.title}</h3>
              <p className="text-xs text-[#66778A] dark:text-slate-300 line-clamp-2 mb-3">{t.content}</p>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500">By {t.author}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleUpvote(t.id, e)}
                    className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span className="font-bold">{t.upvotes}</span>
                  </button>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.replies.length}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Active Thread & Replies View */}
        <div className="lg:col-span-7">
          {activeTopic ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
                    {activeTopic.category}
                  </span>
                  <span className="text-xs text-slate-400">{activeTopic.createdAt}</span>
                </div>
                <h2 className="text-xl font-bold text-[#12345B] dark:text-white mb-2">{activeTopic.title}</h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{activeTopic.author}</span>
                  <span>({activeTopic.role})</span>
                </div>
                <p className="text-xs sm:text-sm text-[#243447] dark:text-slate-200 leading-relaxed bg-[#F2F8FC] dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  {activeTopic.content}
                </p>
              </div>

              {/* Replies Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="font-bold text-xs uppercase tracking-wide text-slate-500">
                  Replies & Mentor Responses ({activeTopic.replies.length})
                </div>

                <div className="space-y-3">
                  {activeTopic.replies.map((rep) => (
                    <div key={rep.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#12345B] dark:text-white">{rep.author} <span className="text-[10px] text-[#1769AA] font-normal">({rep.role})</span></span>
                        <span className="text-[10px] text-slate-400">{rep.createdAt}</span>
                      </div>
                      <p className="text-[#243447] dark:text-slate-300 leading-relaxed">{rep.content}</p>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <form onSubmit={handleAddReply} className="pt-2 space-y-3">
                  <textarea
                    rows={3}
                    required
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write your answer or troubleshooting tip..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Reply</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 text-slate-400 text-xs space-y-2">
              <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
              <div className="font-bold text-[#12345B] dark:text-slate-200">Select a Thread to View Discussion</div>
              <div>Or click "Start New Discussion" above to post your hardware query.</div>
            </div>
          )}
        </div>
      </div>

      {/* New Topic Modal */}
      {showNewTopicModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0F243E] rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-[#12345B] dark:text-white">Start a Technical Discussion</h3>
            <form onSubmit={handleCreateTopic} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Mohit Kumar"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Topic Title *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. FreeRTOS Mutex deadlock when using serial prints"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Hardware Debugging">Hardware Debugging</option>
                  <option value="PCB Design">PCB Design</option>
                  <option value="Firmware & Concurrency">Firmware & Concurrency</option>
                  <option value="Edge AI / TinyML">Edge AI / TinyML</option>
                  <option value="Hackathon Team Formation">Hackathon Team Formation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description / Code Snippet *</label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Describe what you tried, microcontroller model, logs..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewTopicModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1769AA] hover:bg-[#12345B] text-white text-xs font-bold rounded-lg"
                >
                  Publish Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
