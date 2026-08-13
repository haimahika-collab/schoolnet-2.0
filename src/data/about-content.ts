export type SourceMeta = {
  source: string;
  verified: true;
  lastChecked: "2026-08-13";
  imageAttribution?: string;
};

const officialAboutSource: SourceMeta = {
  source: "https://www.schoolnetindia.com/about/",
  verified: true,
  lastChecked: "2026-08-13",
  imageAttribution: "Schoolnet India official website",
};

export const aboutStory = {
  founded: "1997",
  whoWeAre:
    "Started in 1997, Schoolnet is one of India's established education technology service providers, delivering digital and digitally enabled services to K–12 schools.",
  whatWeDo:
    "Schoolnet helps schools become NEP 2020 ready through comprehensive solutions that use AI-enabled technology, support a connected school and after-school experience, and align with United Nations Sustainable Development Goal 4.",
  images: {
    whoWeAre: "/about/who-we-are.png",
    whatWeDo: "/about/what-we-do.png",
  },
  ...officialAboutSource,
};

export const aboutMetrics = [
  { value: "100,000", label: "Schools", ...officialAboutSource },
  { value: "25 million", label: "Teachers & students", ...officialAboutSource },
  { value: "30", label: "States", ...officialAboutSource },
  { value: "7", label: "Countries", ...officialAboutSource },
] as const;

export const directors = [
  {
    name: "Howard Soh",
    role: "Nominee Director",
    image: "/about/howard-soh.png",
    introduction: "Investment leader providing strategic guidance for Schoolnet's growth.",
    biography:
      "Howard Soh is based in Singapore and heads Investments at LemmaTree. He holds an MBA from Harvard Business School and brings experience across analytics, investment banking, financial analysis, investments and private equity to Schoolnet's strategic growth.",
    ...officialAboutSource,
  },
  {
    name: "Dr Sekhar B.",
    role: "Independent Director",
    image: "/about/sekhar-bonu.png",
    introduction: "Public-policy and development leader with experience across government and multilateral institutions.",
    biography:
      "Dr Sekhar Bonu is a former IAS officer of the 1987 batch. He holds a doctoral degree in International Public Health from Johns Hopkins University and is also trained as a Chartered Financial Analyst. His experience includes service with the Government of Rajasthan, leadership of the Development Monitoring and Evaluation Office at NITI Aayog, and leadership positions at the Asian Development Bank.",
    ...officialAboutSource,
  },
  {
    name: "Dr Vandana R. Singh",
    role: "Independent Director",
    image: "/about/vandana-singh.png",
    introduction: "Educationist, researcher and writer with deep experience in learning and literature.",
    biography:
      "Dr Vandana Singh holds a PhD in English Literature from Panjab University and has extensive experience in consulting, writing and research. She has published and translated books for NCERT and for undergraduate, law and management faculties, and has been recognised by the Chandigarh Sahitya Academy for her contribution to literature.",
    ...officialAboutSource,
  },
  {
    name: "Sujit Tambat",
    role: "Director",
    image: "/about/sujit-tambat.png",
    introduction: "Finance leader experienced in strategy, governance and transaction structuring.",
    biography:
      "Sujit Tambat has more than 20 years of finance expertise across diverse sectors. A former South Asia Financial Controller at The Abraaj Group and a Schoolnet Board member, he brings experience in financial management, transaction structuring and corporate governance.",
    ...officialAboutSource,
  },
  {
    name: "RCM Reddy",
    role: "MD & CEO",
    image: "/about/rcm-reddy.png",
    introduction: "A pioneer in public-private partnership models for education, employment and employability.",
    biography:
      "RCM Reddy has 31 years of professional experience, including 15 years with Schoolnet. A former IAS officer, he has worked with the Government of India and Government of Tripura and briefly with the United Nations Industrial Development Organization. He is recognised for building public-private partnership models that address education, employment and employability.",
    featured: true,
    ...officialAboutSource,
  },
  {
    name: "KK Iyer",
    role: "Director",
    image: "/about/kk-iyer.png",
    introduction: "Management consulting and investment leader supporting Schoolnet's strategic development.",
    biography:
      "KK Iyer has 35 years of experience in management consulting and investing across India, the United States and the European Union. He has served on Schoolnet's Board since 2010, supporting portfolio consolidation and expansion, after almost two decades with Accenture in several leadership roles.",
    ...officialAboutSource,
  },
  {
    name: "Bhanu Vittalam",
    role: "Director",
    image: "/about/bhanu-vittalam.png",
    introduction: "Treasury, corporate banking and risk-management specialist with more than three decades of experience.",
    biography:
      "Bhanu Vittalam has more than 32 years of experience in treasury, corporate banking and risk management. He founded SIRIUS Capital, a special-situations private capital investment fund, and previously led the Financial Restructuring and Remedial division at Emirates NBD Banking Group. He supports the consolidation and expansion of Schoolnet's portfolio.",
    ...officialAboutSource,
  },
] as const;

export const advisors = [
  { name: "Dr Venkat Srinivasan", role: "MD, Innospark Ventures", image: "/about/venkat-srinivasan.jpg", ...officialAboutSource },
  { name: "Dr Shailesh Kumar", role: "Head of COE in AI/ML at Reliance Jio", image: "/about/shailesh-kumar.jpg", ...officialAboutSource },
  { name: "Prof. MS Vijay Kumar", role: "Vice President of Open Learning at MIT", image: "/about/ms-vijay-kumar.jpg", ...officialAboutSource },
  { name: "Mr. Sreedhar Reddy", role: "Digital Transformation and Innovation, Qiddiya Investment Company", image: "/about/sreedhar-reddy.jpg", ...officialAboutSource },
  { name: "Craig Johnson", role: "Founder & CEO, UnconstrainED", image: "/about/craig-johnson.jpg", ...officialAboutSource },
  { name: "Krishnan Gopi", role: "Group Chief Disruption Officer, GEMS Education", image: "/about/krishnan-gopi.jpg", ...officialAboutSource },
] as const;

export const culturalIdeas = [
  { title: "Trust-based collaboration", description: "Listen actively and build partnerships that create richer, more useful solutions.", image: "/about/culture-trust.png", tone: "blue", ...officialAboutSource },
  { title: "Relentless innovation", description: "Stay curious, harness technology thoughtfully and keep pushing for impact at scale.", image: "/about/culture-innovation.png", tone: "orange", ...officialAboutSource },
  { title: "Inclusive and supportive", description: "Nurture diversity, equity and mutual respect so people can learn and grow together.", image: "/about/culture-inclusive.png", tone: "green", ...officialAboutSource },
  { title: "Resilient and adaptable", description: "Treat challenges as opportunities and keep moving forward through change.", image: "/about/culture-resilience.png", tone: "violet", ...officialAboutSource },
] as const;

export const sustainableGoals = [
  { number: "04", title: "Quality education", description: "An equal and inclusive EdTech ecosystem for lifelong learning.", image: "/about/sdg-4.png", ...officialAboutSource },
  { number: "08", title: "Decent work and economic growth", description: "Education solutions that support full and productive employment.", image: "/about/sdg-8.png", ...officialAboutSource },
] as const;

export const impactReports = [
  { title: "Digital Classroom Solution", description: "An evaluation study conducted in consultation with KPMG.", href: "https://old.schoolnetindia.com/impact/reports/Digital-Classroom-Impact.pdf", linkVerified: true, ...officialAboutSource },
  { title: "Future Classrooms", description: "Effectiveness of Google Future Classroom, Maharashtra.", href: null, linkVerified: false, ...officialAboutSource },
  { title: "K-Yan", description: "From Chalkboards to Digital Boards: improving student and teacher outcomes.", href: "https://betatest.schoolnetindia.com/impact/reports/K-Yan-Impact-Report.pdf", linkVerified: true, ...officialAboutSource },
  { title: "English Learning", description: "Effectiveness of the English Learning Solution.", href: null, linkVerified: false, ...officialAboutSource },
] as const;
