'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { liveClassesData } from '@/lib/data';
import { 
  Video, 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Play, 
  Download, 
  MessageSquare, 
  CheckCircle2, 
  UploadCloud, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

export default function LiveClassesPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recordings' | 'notes' | 'doubts'>('upcoming');
  const [doubtQuestion, setDoubtQuestion] = useState('');
  const [doubtSubject, setDoubtSubject] = useState('Embedded Systems Protocols');
  const [doubtSubmitted, setDoubtSubmitted] = useState(false);

  // Simulated lecture upload modal state for instructors
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadSubject, setUploadSubject] = useState('IoT Cloud Telemetry');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDoubtSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtQuestion) return;
    setDoubtSubmitted(true);
    setTimeout(() => {
      setDoubtQuestion('');
    }, 1500);
  };

  const handleLectureUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle) return;
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadTitle('');
      setUploadSuccess(false);
    }, 2500);
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Learning Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12345B] dark:text-white">
          Live Interactive Classes & Lab Sessions
        </h1>
        <p className="text-base text-[#66778A] dark:text-slate-300 leading-relaxed">
          Join live instructor-led debugging sessions, access high-definition lecture recordings, download study notes, and resolve circuit issues in real-time.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-[#DFE8F0] dark:border-slate-800 pb-3 flex-wrap">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'upcoming'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Upcoming Classes & Schedule</span>
        </button>

        <button
          onClick={() => setActiveTab('recordings')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'recordings'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <Play className="w-4 h-4" />
          <span>Recorded Lectures Archive</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'notes'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Notes & Study Material</span>
        </button>

        <button
          onClick={() => setActiveTab('doubts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'doubts'
              ? 'bg-[#1769AA] text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Doubt & Support Forum</span>
        </button>
      </div>

      {/* TAB 1: UPCOMING CLASSES */}
      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveClassesData.filter(c => c.status === 'upcoming').map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] dark:text-[#20A7D7] font-semibold text-[11px]">
                      {item.subject}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Live Stream Ready
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#12345B] dark:text-white">{item.title}</h3>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#F2F8FC] dark:bg-slate-800/60 text-xs my-4">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Date & Time</div>
                      <div className="font-semibold text-[#12345B] dark:text-slate-200">{item.date} • {item.time}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">Instructor</div>
                      <div className="font-semibold text-[#12345B] dark:text-slate-200">{item.instructor}</div>
                    </div>
                  </div>

                  {item.assignments.length > 0 && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 rounded-xl text-xs text-amber-900 dark:text-amber-200">
                      <div className="font-bold">Required Pre-Class Assignment:</div>
                      <div>{item.assignments[0].title} (Due: {item.assignments[0].dueDate})</div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{item.doubtCount} doubts pending answer</span>
                  <a
                    href={item.joinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold rounded-lg shadow-sm"
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Class (Google Meet)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Instructor Lecture Upload Box */}
          <div className="p-6 rounded-2xl bg-[#F2F8FC] dark:bg-slate-900 border border-[#DFE8F0] dark:border-slate-800 mt-8">
            <div className="flex items-center gap-2 mb-2">
              <UploadCloud className="w-5 h-5 text-[#1769AA]" />
              <h3 className="text-sm font-bold text-[#12345B] dark:text-white">Instructor Lecture & Notes Upload Section</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Instructors and mentors can publish upcoming live meeting links, slide decks, and lecture recordings here.
            </p>

            {uploadSuccess ? (
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs rounded-lg font-semibold">
                ✓ Lecture details and study materials published to the student portal successfully.
              </div>
            ) : (
              <form onSubmit={handleLectureUpload} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="Lecture Title (e.g. DMA Buffer Handlers)"
                  className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
                <select
                  value={uploadSubject}
                  onChange={(e) => setUploadSubject(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Embedded Systems Protocols">Embedded Systems Protocols</option>
                  <option value="FreeRTOS Multitasking">FreeRTOS Multitasking</option>
                  <option value="TinyML & Edge AI">TinyML & Edge AI</option>
                  <option value="KiCad PCB Layout">KiCad PCB Layout</option>
                </select>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1769AA] text-white text-xs font-bold rounded-lg hover:bg-[#12345B] transition"
                >
                  Publish Lecture Session
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: RECORDED LECTURES */}
      {activeTab === 'recordings' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveClassesData.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video rounded-xl bg-slate-900 mb-4 flex items-center justify-center group overflow-hidden">
                    <div className="w-12 h-12 rounded-full bg-[#20A7D7]/80 text-white flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                      <Play className="w-5 h-5 fill-white" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white font-mono">
                      {item.duration}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-semibold uppercase">
                    {item.subject}
                  </span>
                  <h3 className="text-sm font-bold text-[#12345B] dark:text-white mt-1 mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500">Instructor: {item.instructor}</div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400">1080p Full HD</span>
                  <a
                    href={item.recordingUrl || item.joinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#1769AA] dark:text-[#20A7D7] hover:underline flex items-center gap-1"
                  >
                    <span>Watch Recording</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: NOTES & STUDY MATERIAL */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#F2F8FC] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
            Downloadable official lecture slide decks, protocol cheat sheets, and register maps compiled by HydroSync mentors.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'I2C & SPI Protocol Timing & Logic Trace Guide', size: '3.4 MB PDF', pages: '36 pages' },
              { title: 'FreeRTOS Task Queues, Mutexes & Semaphores Cheatsheet', size: '2.1 MB PDF', pages: '22 pages' },
              { title: 'ESP32 Dual-Core Memory Map & Pinout Reference', size: '4.8 MB PDF', pages: '14 pages' },
              { title: 'KiCad 8 4-Layer PCB Routing & Impedance Calculation', size: '5.2 MB PDF', pages: '48 pages' },
              { title: 'TinyML INT8 Quantization Workflow on Microcontrollers', size: '1.9 MB PDF', pages: '28 pages' },
              { title: 'LoRaWAN SX1262 Register Configuration Handbook', size: '3.1 MB PDF', pages: '32 pages' },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#0F243E] border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#12345B] dark:text-white leading-tight">{doc.title}</h4>
                    <div className="text-[11px] text-slate-400 mt-1">{doc.size} • {doc.pages}</div>
                  </div>
                </div>

                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading official note: "${doc.title}"`);
                  }}
                  className="p-2 rounded-lg bg-[#F2F8FC] dark:bg-slate-800 text-[#1769AA] hover:bg-[#1769AA] hover:text-white transition flex-shrink-0"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: DOUBT SUPPORT */}
      {activeTab === 'doubts' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F243E] border border-[#DFE8F0] dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-[#12345B] dark:text-white mb-2">Ask a Question to Course Mentors</h3>
            <p className="text-xs text-slate-500 mb-4">
              Mentors respond during live sessions and inside the student forum within 4 hours.
            </p>

            {doubtSubmitted ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs text-emerald-800 dark:text-emerald-200 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Your doubt has been submitted to the lead instructor queue!</span>
              </div>
            ) : (
              <form onSubmit={handleDoubtSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Subject</label>
                  <select
                    value={doubtSubject}
                    onChange={(e) => setDoubtSubject(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="Embedded Systems Protocols">Embedded Systems Protocols</option>
                    <option value="FreeRTOS Multitasking">FreeRTOS Multitasking</option>
                    <option value="Edge AI / TinyML">Edge AI / TinyML</option>
                    <option value="Circuit Hardware & PCB">Circuit Hardware & PCB</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Describe your issue or waveform symptom</label>
                  <textarea
                    rows={4}
                    required
                    value={doubtQuestion}
                    onChange={(e) => setDoubtQuestion(e.target.value)}
                    placeholder="Provide serial terminal errors, oscilloscope readings, or component part numbers..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1769AA] text-white text-xs font-bold rounded-lg hover:bg-[#12345B] transition"
                >
                  Post Doubt to Mentor
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Course Completion Certificate Notice */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#20A7D7] flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold">Verifiable Course Completion Certificate</h4>
            <p className="text-xs text-slate-200">
              Attend at least 80% of live classes and submit your module capstones to unlock your official QR-verified credential.
            </p>
          </div>
        </div>
        <Link
          href="/certifications"
          className="px-4 py-2 bg-white text-[#12345B] text-xs font-bold rounded-lg hover:bg-slate-100 transition"
        >
          View Sample Certificate
        </Link>
      </div>
    </div>
  );
}
