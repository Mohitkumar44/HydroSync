'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPostsData } from '@/lib/data';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Download, 
  ArrowRight, 
  Search, 
  Tag,
  Sparkles,
  FileCode
} from 'lucide-react';

export default function BlogResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'technical-blog', label: 'Technical Blogs' },
    { id: 'project-tutorial', label: 'Project Tutorials' },
    { id: 'career-guide', label: 'Career Guidance' },
  ];

  const filtered = blogPostsData.filter((post) => {
    const matchCat = selectedCategory === 'all' || post.category === selectedCategory;
    const matchQuery = post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Engineering Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Technical Blogs, Tutorials & Resources
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Deep dives into embedded concurrency, TinyML quantization recipes, career roadmaps for electronics graduates, and open-source starter codebases.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === c.id
                  ? 'bg-[#1769AA] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blogs, keywords..."
            className="w-full px-3 py-2 text-xs rounded-xl border border-[#DFE8F0] dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-[11px]">
                  {post.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-base font-bold text-[#12345B] dark:text-white mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-xs text-[#66778A] dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tg, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-mono">
                    #{tg}
                  </span>
                ))}
              </div>

              {/* Resource Download Box */}
              {post.downloadableResource && (
                <div className="p-2.5 bg-[#F2F8FC] dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#1769AA]" />
                    <div>
                      <div className="font-bold text-[11px] text-[#12345B] dark:text-slate-200">{post.downloadableResource.name}</div>
                      <div className="text-[10px] text-slate-400">{post.downloadableResource.size}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Starting download: ${post.downloadableResource?.name}`)}
                    className="p-1.5 bg-[#1769AA] text-white rounded hover:bg-[#12345B] transition"
                    title="Download Source Code / Material"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                By <span className="font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
