import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Clock3,
  MoveUpRight,
  Play,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { DemoButton } from "@/components/demo-button";
import { AudienceExplorer } from "@/components/audience-explorer";
import { TransformationFlow } from "@/components/transformation-flow";
import { impactMetrics, partners, solutions } from "@/data/site-content";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Building learning access since 1997</p>
            <h1>Future-ready schools.<br /><em>Learning students love.</em></h1>
            <p className="hero-lede">Schoolnet brings AI-enabled learning, smart classrooms, digital content and teacher enablement together—so technology creates meaningful change in every lesson.</p>
            <div className="button-row">
              <DemoButton className="button">Book a school demo <ArrowRight size={17} /></DemoButton>
              <Link className="button button-ghost" href="#student"><Play size={16} fill="currentColor" /> Explore student experience</Link>
            </div>
            <div className="hero-proof"><span className="avatar-stack"><i>A</i><i>M</i><i>R</i></span><span><strong>Built for real classrooms</strong><small>Schools · Teachers · Students</small></span></div>
          </div>
          <div className="hero-visual" aria-label="Schoolnet learning platform preview">
            <div className="visual-shell">
              <div className="visual-top"><span className="mini-brand"><b /> schoolnet</span><span className="visual-user">AR</span></div>
              <div className="visual-body">
                <aside><i className="active" /><i /><i /><i /></aside>
                <div className="lesson-main">
                  <p className="micro-label">CONTINUE LEARNING</p>
                  <div className="lesson-card">
                    <span className="subject-icon">∿</span>
                    <div><small>PHYSICS · GRADE 8</small><strong>Motion & forces</strong><div className="progress"><span /></div></div>
                    <b>72%</b>
                  </div>
                  <div className="content-row">
                    <div className="simulation"><span>Interactive simulation</span><div className="planet"><i /><i /></div><button aria-label="Play simulation"><Play size={15} fill="currentColor" /></button></div>
                    <div className="challenge"><span>Today&apos;s challenge</span><strong>60</strong><small>SECONDS</small><em>+120 XP</em></div>
                  </div>
                  <div className="lesson-footer"><span><CheckCircle2 size={15} /> 12 topics complete</span><span><TrendingUp size={15} /> 84% accuracy</span></div>
                </div>
              </div>
            </div>
            <div className="float-card float-ai"><span><Sparkles size={14} /> Ask Geneo</span><strong>Why does a ball slow down?</strong><small>Let&apos;s explore friction together…</small></div>
            <div className="float-card float-teacher"><span className="teacher-icon"><WandSparkles size={18} /></span><div><small>AI LESSON PLANNER</small><strong>Ready in 4 steps</strong></div><Check size={16} /></div>
          </div>
        </div>
      </section>

      <section className="impact-strip" id="impact">
        <div className="shell impact-grid">
          {impactMetrics.map((metric) => <div className="impact-item" key={metric.label} title={`Verified: ${metric.source}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </section>

      <section className="section audience-section" id="school">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">ONE CONNECTED ECOSYSTEM</p><h2>Every part of learning.<br />Moving forward together.</h2></div><p>From the principal&apos;s office to the classroom and beyond, Schoolnet connects the people, tools and insight that make transformation last.</p></div>
          <AudienceExplorer />
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="shell">
          <div className="section-heading light"><div><p className="eyebrow">THE SCHOOLNET ECOSYSTEM</p><h2>Everything a future-ready<br />school needs.</h2></div><p>Not a collection of disconnected products. A practical ecosystem of infrastructure, content, learning platforms and human enablement.</p></div>
          <div className="solutions-grid">
            {solutions.map((solution, i) => <article className={`solution-card solution-${i + 1}`} key={solution.title}><span className="solution-number">{solution.number}</span><div className="solution-art" aria-hidden="true"><i /><i /><i /></div><h3>{solution.title}</h3><p>{solution.description}</p><div className="tag-row">{solution.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href="#contact" aria-label={`Learn more about ${solution.title}`}>Learn more <ArrowRight size={16} /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section student-section" id="student">
        <div className="shell student-grid">
          <div className="student-copy"><p className="eyebrow">STUDENT EXPERIENCE</p><h2>Learning that doesn&apos;t feel like a lecture.</h2><p>Explore. Experiment. Ask questions. Take challenges. See your progress. Learning becomes more powerful when students can actively participate in it.</p><ul><li><CheckCircle2 /> Interactive lessons and simulations</li><li><CheckCircle2 /> Personalised practice and support</li><li><CheckCircle2 /> Progress students can understand</li></ul><div className="button-row"><Link className="button button-orange" href="#contact">Preview coming next phase <ArrowRight size={16} /></Link><Link className="text-link" href="#contact">Bring this to my school <MoveUpRight size={16} /></Link></div></div>
          <div className="student-dashboard">
            <div className="dash-head"><div><span>MY LEARNING</span><strong>Good morning, Aarav <span>👋</span></strong></div><button aria-label="Notifications">2</button></div>
            <div className="dash-grid">
              <div className="dash-main-card"><div className="dash-card-head"><div><small>CONTINUE LEARNING</small><h3>Forces in everyday life</h3><p>Physics · Chapter 7</p></div><span className="ring">72<small>%</small></span></div><div className="lesson-image"><span className="orbit orbit-a" /><span className="orbit orbit-b" /><i className="ball" /><em>Explore motion</em><button aria-label="Continue lesson"><Play size={14} fill="currentColor" /></button></div></div>
              <div className="streak-card"><span><Clock3 size={17} /> LEARNING STREAK</span><strong>8 <small>days</small></strong><div>{["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <i className={i < 5 ? "done" : ""} key={`${d}${i}`}>{i < 5 ? "✓" : d}</i>)}</div></div>
              <div className="ask-card"><span><Sparkles size={15} /> ASK GENEO</span><p>“Explain photosynthesis with an example around me.”</p><div><span className="typing"><i /><i /><i /></span><ArrowRight size={15} /></div></div>
              <div className="accuracy-card"><span><Target size={17} /> QUIZ ACCURACY</span><strong>84%</strong><div className="mini-bars">{[40, 55, 48, 68, 74, 84].map((h, i) => <i style={{ height: `${h}%` }} key={i} />)}</div></div>
            </div>
            <p className="mock-label">Illustrative interface · mock learning data</p>
          </div>
        </div>
      </section>

      <section className="section transformation-section">
        <div className="shell transform-grid">
          <div className="transform-copy"><p className="eyebrow">WHY SCHOOLNET</p><h2>Technology is easy to buy. <em>Transformation is harder.</em></h2><p>Schoolnet brings together technology, curriculum content, teacher capability and implementation experience—so digital investments become everyday teaching practice.</p><Link className="button button-light" href="#journey">Transform my school <ArrowRight size={16} /></Link></div>
          <div className="reason-list">
            {[ ["01", "Built for Indian classrooms", "Curriculum-aware solutions designed for varied infrastructure and learning contexts."], ["02", "Technology + content", "Go beyond hardware with digital curriculum, platforms and classroom tools."], ["03", "Teacher enablement", "Build the confidence and pedagogy that turn technology into better lessons."], ["04", "Implementation at scale", "Draw on experience across 100,000+ schools and large public learning programmes."] ].map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ChevronRight /></article>)}
          </div>
        </div>
      </section>

      <section className="section teacher-section" id="teacher">
        <div className="shell teacher-grid">
          <div className="teacher-ui">
            <div className="teacher-top"><div><small>THURSDAY, 13 AUGUST</small><strong>Today&apos;s classroom</strong></div><span>MS</span></div>
            <div className="teacher-stats"><div><small>CLASSES</small><strong>04</strong><span><CircleGauge size={14} /> On track</span></div><div><small>STUDENTS</small><strong>126</strong><span><TrendingUp size={14} /> Mock data</span></div></div>
            <div className="schedule"><div><small>NEXT CLASS · 10:30 AM</small><strong>Grade 8B · Physics</strong><span>Motion and forces</span></div><button><Play size={14} fill="currentColor" /> Open lesson</button></div>
            <div className="teacher-tools"><div><WandSparkles /><span><small>AI LESSON PLANNER</small><strong>Create tomorrow&apos;s lesson</strong></span><ArrowRight /></div><div><BarChart3 /><span><small>LEARNING INSIGHT</small><strong>6 students need support</strong></span><ArrowRight /></div></div>
            <p className="mock-label">Illustrative interface · mock classroom data</p>
          </div>
          <div className="teacher-copy"><p className="eyebrow">TEACHER ENABLEMENT</p><h2>Empower the teacher.<br />Change the classroom.</h2><p>Technology should amplify a teacher&apos;s expertise, not get in the way. Schoolnet combines practical training, digital pedagogy and classroom tools to help teachers plan, teach and respond with confidence.</p><div className="teacher-metrics"><div><strong>1M+</strong><span>teachers</span></div><div><strong>2M</strong><span>training hours</span></div></div><small className="source-note">Verified on Schoolnet&apos;s official Geneo and Smart Classroom pages.</small><Link className="text-link" href="#contact">See the teacher experience in the next phase <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="shell"><div className="center-heading"><p className="eyebrow">YOUR SCHOOL TRANSFORMATION FLOW</p><h2>See how change moves<br />from plan to classroom.</h2><p>Explore each stage to see how Schoolnet connects readiness, design, deployment and lasting adoption.</p></div><TransformationFlow /></div>
      </section>

      <section className="section proof-section" id="insights">
        <div className="shell proof-grid"><div className="case-study"><p className="eyebrow">PUBLIC EDUCATION AT SCALE</p><h2>When access grows, opportunity follows.</h2><div className="case-callout"><span>Gujarat</span><strong>Interactive e-content mapped to textbooks across 55,000 schools.</strong><p>Schoolnet&apos;s official LMS page describes a statewide digital learning programme designed to make teaching and learning more accessible.</p><a href="https://www.schoolnetindia.com/learning-management-system/" target="_blank" rel="noreferrer">View official source <MoveUpRight size={16} /></a></div></div><blockquote><Quote size={32} /><p>“We don&apos;t just provide tools; we provide practical, classroom-ready training.”</p><footer>Schoolnet India · Teacher Training perspective</footer></blockquote></div>
      </section>

      <section className="partners-section"><div className="shell"><p>Verified public collaborations and programmes</p><div className="partner-row">{partners.map((partner) => <span key={partner}>{partner}</span>)}</div><small>Relationships shown are referenced on Schoolnet&apos;s official website. Logos omitted pending brand-asset approval.</small></div></section>

      <section className="final-cta" id="contact"><div className="shell cta-inner"><div><p className="eyebrow">START A CONVERSATION</p><h2>What could learning look like<br />at your school?</h2></div><div><p>Tell us where you are today. Schoolnet can help identify a practical starting point for smart classrooms, AI-enabled learning, content and teacher enablement.</p><DemoButton className="button button-white">Book a school demo <ArrowRight size={17} /></DemoButton><span>Prototype form validates locally; no details are transmitted or stored.</span></div></div></section>
      <Footer />
    </main>
  );
}
