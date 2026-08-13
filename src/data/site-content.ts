import {
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  GraduationCap,
  LayoutDashboard,
  MonitorUp,
  PanelsTopLeft,
  Presentation,
  School,
  Sparkles,
  Users,
} from "lucide-react";

export const impactMetrics = [
  { value: "100,000+", label: "schools", source: "Schoolnet Geneo and LMS pages", verified: true, lastChecked: "2026-08-13" },
  { value: "25M+", label: "students reached", source: "Schoolnet Geneo page", verified: true, lastChecked: "2026-08-13" },
  { value: "1M+", label: "teachers", source: "Schoolnet Geneo page", verified: true, lastChecked: "2026-08-13" },
  { value: "Since 1997", label: "building learning access", source: "Schoolnet About page", verified: true, lastChecked: "2026-08-13" },
] as const;

export const megaMenu = [
  {
    title: "Learn",
    items: [
      { title: "AI Learning & Geneo", description: "Connected school and after-school learning.", icon: BrainCircuit },
      { title: "Learning Management System", description: "Content, assessment and insight in one place.", icon: LayoutDashboard },
    ],
  },
  {
    title: "Transform the classroom",
    items: [
      { title: "Smart Classrooms", description: "Make lessons visual, active and connected.", icon: Presentation },
      { title: "KYAN", description: "A portable, all-in-one interactive classroom device.", icon: MonitorUp },
      { title: "Geneo Interactive Panel", description: "Immersive teaching on a responsive display.", icon: PanelsTopLeft },
      { title: "ICT Labs", description: "Managed digital infrastructure for equitable access.", icon: Building2 },
    ],
  },
  {
    title: "Empower",
    items: [
      { title: "Teacher Development", description: "Training for confident digital pedagogy.", icon: Users },
      { title: "Student Learning", description: "Interactive, personalised learning journeys.", icon: GraduationCap },
    ],
  },
] as const;

export const audiences = [
  {
    eyebrow: "Lead", title: "School leaders", description: "Turn digital ambition into a practical, connected plan for the whole school.", link: "Explore school transformation", icon: School, tone: "blue",
    headline: "Make technology an everyday part of better teaching.",
    narrative: "School leaders need more than devices. They need a clear path from infrastructure and content to teacher confidence, student participation and visibility into adoption. Schoolnet helps bring those moving parts into one transformation journey.",
    priorities: ["A roadmap shaped around school readiness", "Connected classroom technology and learning content", "Teacher enablement and implementation support", "Visibility into platform and classroom adoption"],
    outcome: "A future-ready school where technology supports academic priorities instead of becoming another disconnected system.",
    cta: "See how school transformation works", href: "#journey",
  },
  {
    eyebrow: "Teach", title: "Teachers", description: "Use technology to plan confidently, explain visually and respond to learner needs.", link: "Explore teacher enablement", icon: BookOpenCheck, tone: "green",
    headline: "Give teachers useful tools—and the confidence to use them.",
    narrative: "The teacher remains at the centre of the classroom. Schoolnet combines digital curriculum, interactive teaching tools and practical training to make lesson preparation, classroom delivery and assessment more effective.",
    priorities: ["Interactive, curriculum-aware lesson resources", "Support for planning and classroom delivery", "Assessments and student-progress insight", "Digital pedagogy and ongoing professional development"],
    outcome: "Teachers spend less energy navigating fragmented technology and more time helping students understand.",
    cta: "See the teacher experience", href: "#teacher",
  },
  {
    eyebrow: "Discover", title: "Students", description: "Make concepts active through visual lessons, practice, questions and progress.", link: "Explore student learning", icon: Sparkles, tone: "orange",
    headline: "Create learning students want to participate in.",
    narrative: "Students learn more actively when they can see a concept, test an idea, practise at their pace and understand their progress. Schoolnet connects classroom learning with interactive and AI-enabled experiences beyond the lesson.",
    priorities: ["Visual explanations and interactive simulations", "Practice, quizzes and immediate feedback", "AI-enabled learning support where available", "Clear progress and recommended next steps"],
    outcome: "A more engaging learning journey that encourages curiosity, practice and growing learner independence.",
    cta: "Preview the student experience", href: "#student",
  },
  {
    eyebrow: "Scale", title: "Government & CSR", description: "Deliver equitable education programmes with implementation and measurable oversight.", link: "Explore impact programmes", icon: BarChart3, tone: "violet",
    headline: "Translate programme ambition into learning access at scale.",
    narrative: "Large education programmes require local relevance, dependable implementation and evidence. Schoolnet supports public and CSR initiatives with managed infrastructure, curriculum content, teacher enablement and central programme visibility.",
    priorities: ["Programme design for varied infrastructure contexts", "Multilingual and offline content where supported", "Teacher training and implementation handholding", "Central monitoring and evidence-led improvement"],
    outcome: "A scalable programme designed around access, adoption and transparent implementation—not hardware deployment alone.",
    cta: "Explore evidence and impact", href: "#impact",
  },
] as const;

export const solutions = [
  { number: "01", title: "Smart Classrooms", description: "Bring curriculum content, interactive displays and teacher tools into one connected learning environment.", tags: ["Interactive", "Teacher-led"] },
  { number: "02", title: "Geneo AI Learning", description: "Connect school and after-school learning with AI-enabled tools, content and progress insights.", tags: ["AI-enabled", "NEP aligned"] },
  { number: "03", title: "Learning Management System", description: "Organise learning, assessments, content and analytics through a centralised platform.", tags: ["Centralised", "Insight-led"] },
  { number: "04", title: "KYAN", description: "Turn a flat surface into an interactive teaching space with Schoolnet's portable 6-in-1 device.", tags: ["Portable", "Offline content"] },
  { number: "05", title: "Geneo Interactive Panel", description: "Make educational content vivid, collaborative and simple to navigate in the classroom.", tags: ["Immersive", "Classroom-ready"] },
  { number: "06", title: "ICT & Innovation Labs", description: "Build and operate managed technology infrastructure that broadens access to digital learning.", tags: ["Managed", "Scalable"] },
] as const;

export const partners = ["Google for Education", "Government of Gujarat", "Government of Delhi", "Government of Jharkhand", "IIT Bombay"] as const;
