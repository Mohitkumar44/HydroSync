export type CourseCategory = 
  | 'iot-embedded'
  | 'arduino-esp32'
  | 'ai-ml-iot'
  | 'python'
  | 'electronics'
  | 'drone'
  | 'web-dev';

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  duration: string;
  fee: number;
  originalFee: number;
  mode: 'Online' | 'Offline' | 'Hybrid';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Advanced';
  syllabus: { title: string; topics: string[] }[];
  features: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
  enrolledStudents: number;
  certificateOffered: boolean;
  hardwareKitProvided: boolean;
}

export interface Internship {
  id: string;
  title: string;
  department: 'IoT Development' | 'Embedded Systems' | 'AI & Edge ML' | 'Robotics & Hardware' | 'Full Stack Web';
  duration: string;
  mode: 'Online (Remote)' | 'Offline (In-Office)' | 'Hybrid';
  location: string;
  stipend: string;
  eligibility: string[];
  benefits: string[];
  description: string;
  responsibilities: string[];
  skillsRequired: string[];
  applicationDeadline: string;
  openings: number;
}

export interface LiveClass {
  id: string;
  title: string;
  subject: string;
  category: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'live' | 'completed';
  joinUrl: string;
  recordingUrl?: string;
  notesUrl?: string;
  assignments: { id: string; title: string; dueDate: string }[];
  doubtCount: number;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'hackathon' | 'webinar' | 'competition' | 'workshop-series';
  categoryLabel: string;
  status: 'upcoming' | 'past';
  date: string;
  time: string;
  venue: string;
  mode: 'Online' | 'Offline';
  speaker: string;
  speakerRole: string;
  description: string;
  schedule: { time: string; activity: string }[];
  registrationFee: number;
  seatsTotal: number;
  seatsBooked: number;
  certificateProvided: boolean;
  galleryImages?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'iot' | 'embedded' | 'ai-ml' | 'hardware' | 'research' | 'student' | 'client';
  categoryLabel: string;
  summary: string;
  description: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  hardwareComponents: string[];
  features: string[];
  metrics: string[];
  githubUrl?: string;
  docsUrl?: string;
  isStudentProject?: boolean;
  studentAuthor?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'founder' | 'core' | 'mentor' | 'trainer' | 'organizer' | 'advisor';
  bio: string;
  expertise: string[];
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  type: 'student' | 'client' | 'institution';
  content: string;
  rating: number;
  highlight: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'technical-blog' | 'project-tutorial' | 'student-article' | 'tech-news' | 'career-guide';
  categoryLabel: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  downloadableResource?: {
    name: string;
    size: string;
    type: string;
  };
}

export interface StudentTask {
  id: string;
  studentId: string;
  studentName: string;
  title: string;
  project: string;
  assignedDate: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'submitted' | 'completed';
  grade?: string;
  mentorFeedback?: string;
  submissionLink?: string;
  submissionNotes?: string;
}

export interface CertificateRecord {
  id: string;
  credentialId: string;
  recipientName: string;
  recipientEmail: string;
  type: 'Course Completion' | 'Internship Completion' | 'Event Participation' | 'Hackathon Winner' | 'Excellence Award';
  title: string;
  issueDate: string;
  grade?: string;
  status: 'valid' | 'revoked';
  instructor: string;
  signatureTitle: string;
}

export interface ForumTopic {
  id: string;
  title: string;
  author: string;
  role: string;
  category: string;
  content: string;
  createdAt: string;
  upvotes: number;
  replies: {
    id: string;
    author: string;
    role: string;
    content: string;
    createdAt: string;
  }[];
}
