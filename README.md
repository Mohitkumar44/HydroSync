# HydroSync Innovations LLP — Official Web Platform

> **Tagline:** Innovation for a Healthier Tomorrow  
> **Corporate Identity:** Limited Liability Partnership (LLPIN: ACA-3982)  
> **Accreditations:** MSME (UDYAM-DL-08-0092812) • Startup India (DPIIT-88291)  
> **Core Focus:** IoT | Embedded Systems | Artificial Intelligence | Technical Training | Internships | Courses | Live Classes | Project Development | Research & Innovation

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+ or v10+)

### Running Locally
1. **Install dependencies** (already installed in workspace):
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build & Execution**:
   ```bash
   npm run build
   npm start
   ```

---

## 📋 Complete Sitemap & Route Directory

### Primary Navigation (Top Menu)
| Destination | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, core focus areas, verified stats, upcoming events, testimonials & partners |
| **About Us** | `/about` | Our Story, Vision & Mission, Core Values, Journey/Timeline, Registration & Accreditations |
| **Services** | `/services` | 9 core capabilities (Technical Training, Internships, R&D, Prototyping, Kits, etc.) |
| **Internships** | `/internships` | 3 to 6-month paid cohorts (₹8k–₹18k stipend), eligibility, hardware kit dispatch, apply form |
| **Courses** | `/courses` | 7 core tracks (IoT & Embedded, ESP32, TinyML, Python, Electronics, Drones, Web Dev) |
| **Course Details** | `/courses/[id]` | Syllabus breakdown, take-home hardware kit, lead instructors, enrollment checkout |
| **Live Classes** | `/live-classes` | Upcoming sessions, direct Google Meet links, Full HD recordings archive, notes PDFs, doubts |
| **Events** | `/events` | National Smart HealthTech Hackathon 2026, LoRaWAN webinars, schedules, registration passes |
| **Event Details** | `/events/[id]` | Schedule agenda, keynote speakers, individual & team registration passes |
| **For Schools** | `/for-schools` | STEM & Robotics tinkering labs, 5V safety kits, NEP-2020 outreach, school registration |
| **For Colleges** | `/for-colleges` | Institutional bilateral MoUs, credit-aligned training, placement drives, participating colleges |
| **Projects** | `/projects` | HydroSense water grid, TinyVibe vibration AI, hydroponic controller, student projects |
| **Project Details** | `/projects/[id]` | Engineering challenge, solution architecture, hardware BOM, and metrics |
| **Team** | `/team` | Founders, firmware mentors, trainers, advisory board, and recruitment |
| **Gallery** | `/gallery` | Hackathon photos, soldering lab workshops, field telemetry testbeds, video showcase |
| **Blog / Resources**| `/blog` | FreeRTOS concurrency guides, TinyML quantization tutorials, downloadable code zip archives |
| **Task & Progress** | `/task-progress` | Student sprint LMS, task submission dialog, mentor feedback notes, completion meters |
| **Contact** | `/contact` | Registered address, phone, emails, interactive map, WhatsApp chat, and support forms |
| **Apply Now** | `/apply` | Unified fast-track portal for courses, internships, and trainer recruitment |

### Specialized Role Portals
| Portal | Route | Key Features |
|---|---|---|
| **Portals Hub** | `/portals` | Role selector and portal directory |
| **Student Portal** | `/portals/student` | Enrolled courses, live Meet links, task submission, QR certificates, courier address |
| **School/College Portal** | `/portals/institution` | Batch registration (CSV), attendance logs, NBA/NAAC audit reports, MoU dossier |
| **Organizer Portal** | `/portals/organizer` | Hackathon management, check-in badges, attendance tracking, batch certificate emails |
| **Admin Panel** | `/portals/admin` | Full CMS, user directory, lecture publisher, financial telemetry reports |

### Community & Additional Pages
| Feature | Route | Key Capabilities |
|---|---|---|
| **Discussion Forum** | `/forum` | Community troubleshooting, upvoting, mentor replies, topic submission |
| **Certifications** | `/certifications` | Verifiable credentials with dynamic QR code generator (`qrcode`) & ID lookup |
| **Direct QR Verify** | `/certifications/verify/[id]` | Direct scan destination verifying credential authenticity against company registry |
| **Careers** | `/careers` | Full-time firmware, AI and trainer job openings |
| **Partners** | `/partners` | Academic and industry technology partners (Semtech, Espressif, DTU, NIT) |
| **Testimonials** | `/testimonials` | Student, faculty, and client reviews with submission form |
| **FAQ** | `/faq` | General, course, internship, and technical questions with live search |
| **Online Payment** | `/payment` | Razorpay checkout simulation with test card and UPI support |
| **Privacy Policy** | `/privacy-policy` | DPDP Act 2023 compliant policy |
| **Terms of Service**| `/terms` | Intellectual property and educational conduct terms |
| **Refund Policy** | `/refund-policy` | Hardware kit deduction terms and cancellation windows |
| **HTML Sitemap** | `/sitemap` | Complete architectural page tree |
| **XML Sitemap** | `/sitemap.xml` | Search-engine index route |
| **Custom 404** | `/_not-found` | Branded 404 navigation recovery |

---

## ⚙️ Mandatory Consolidated Integration Setup Form (`/setup`)

As specified in the primary objective, **all external service dependencies are consolidated into ONE unified configuration form** located at:
👉 **[http://localhost:3000/setup](http://localhost:3000/setup)**

### Managed Integrations
1. **Company & Domain Configuration** (Official name, domain URL, phone, address, WhatsApp)
2. **Database Provider** (PostgreSQL / Supabase / MongoDB connection string, or Local JSON mode)
3. **Authentication & Session Tokens** (NextAuth session secret, JWT entropy token)
4. **Email Delivery** (Resend API key, custom SMTP host/port/credentials)
5. **Razorpay Payment Gateway** (Key ID, Key Secret, Webhook Secret, Test/Live mode)
6. **Cloud File Storage** (Cloudinary Cloud Name, API Key, API Secret)
7. **Maps & Analytics** (Google Maps API Key, Google Analytics 4 Measurement Tag)
8. **Production Deployment Variables** (Allowed origins, CORS, production base URL)

### Setup Form Features
- **One-Submit Workflow:** Enter all parameters together or mark non-applicable services as skipped.
- **Show/Hide Secret Controls:** Password masking for sensitive API keys.
- **Export to `.env.production`:** One-click download of the complete environment file.
- **Live Readiness Report:** Instant audit of which services are active, in simulation, or awaiting provider credentials.
