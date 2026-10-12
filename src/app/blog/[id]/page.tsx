'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPostsData } from '@/lib/data';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Download, 
  Tag, 
  Share2, 
  FileCode,
  CheckCircle2
} from 'lucide-react';

export default function BlogPostDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const post = blogPostsData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4 space-y-4">
        <h1 className="text-2xl font-bold text-[#12345B] dark:text-white">Article Not Found</h1>
        <Link href="/blog" className="inline-block px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] dark:text-[#20A7D7] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      <div className="space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-bold">
          {post.categoryLabel}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
            <User className="w-3.5 h-3.5 text-[#1769AA]" /> {post.author} ({post.authorRole})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed space-y-4">
        <p className="text-base font-medium text-slate-800 dark:text-slate-200 bg-[#F2F8FC] dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          {post.excerpt}
        </p>

        <p>{post.content}</p>

        <h3 className="text-lg font-bold text-[#12345B] dark:text-white pt-4">Key Implementation Insights</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li><strong>Memory Footprint Optimization:</strong> Always configure minimal stack depth per FreeRTOS task to prevent heap exhaustion.</li>
          <li><strong>Interrupt Safety:</strong> Never call blocking APIs inside an ISR; instead, defer deferred tasks using binary semaphores or direct-to-task notifications.</li>
          <li><strong>Watchdog Timers:</strong> Subscribe critical worker threads to the Task Watchdog Timer (TWDT) to detect stuck hardware loops immediately.</li>
        </ul>

        {post.downloadableResource && (
          <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <FileCode className="w-8 h-8 text-[#20A7D7]" />
              <div>
                <div className="font-bold text-sm">Download Companion Code & Schematics</div>
                <div className="text-xs text-slate-200">{post.downloadableResource.name} ({post.downloadableResource.size})</div>
              </div>
            </div>
            <button
              onClick={() => alert(`Downloading verified resource: ${post.downloadableResource?.name}`)}
              className="px-4 py-2 bg-white text-[#12345B] hover:bg-slate-100 rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Archive</span>
            </button>
          </div>
        )}
      </article>

      {/* Tags & Share */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-slate-400" />
          {post.tags.map((t, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
              #{t}
            </span>
          ))}
        </div>

        <button
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href);
              alert('Article link copied to clipboard!');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Article</span>
        </button>
      </div>
    </div>
  );
}
