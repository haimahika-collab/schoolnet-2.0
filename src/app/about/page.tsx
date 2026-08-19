import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CheckCircle2, MoveUpRight, Quote, Sparkles } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LeadershipGrid } from "@/components/leadership-grid";
import { DemoButton } from "@/components/demo-button";
import { aboutMetrics, aboutStory, advisors, culturalIdeas, impactReports, sustainableGoals } from "@/data/about-content";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Schoolnet India | Learning for Life",
  description: "Discover Schoolnet India's story, leadership, culture and impact across schools, teachers and students since 1997.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Schoolnet India | Making Learning Lifelong and Limitless",
    description: "Meet the people and purpose behind Schoolnet India's education transformation work.",
    type: "website",
    images: [{ url: "/about/who-we-are.png", width: 1250, height: 1464, alt: "School students using laptops in a digital learning classroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Schoolnet India | Making Learning Lifelong and Limitless",
    description: "Meet the people and purpose behind Schoolnet India's education transformation work.",
    images: ["/about/who-we-are.png"],
  },
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">ABOUT SCHOOLNET INDIA</p>
            <h1>Making learning<br /><em>lifelong and limitless.</em></h1>
            <p>For nearly three decades, Schoolnet has connected technology, content and human capability to help schools move forward—and help more learners see what is possible.</p>
            <div className="button-row">
              <Link className="button" href="#impact">Explore our impact <ArrowDown size={17} /></Link>
              <DemoButton className="button button-ghost">Book a school demo <ArrowRight size={17} /></DemoButton>
            </div>
          </div>
          <div className={styles.heroCollage} aria-label="Students learning with digital technology">
            <div className={styles.heroImageMain}><Image src={aboutStory.images.whoWeAre} alt="School students using laptops in a digital learning classroom" width={1250} height={1464} priority sizes="(max-width: 900px) 85vw, 42vw" /></div>
            <div className={styles.heroImageInset}><Image src={aboutStory.images.whatWeDo} alt="Students participating in a Schoolnet-enabled classroom" width={1250} height={1464} priority sizes="(max-width: 900px) 45vw, 20vw" /></div>
            <div className={styles.heroSince}><span>Since</span><strong>1997</strong><small>Learning for life</small></div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="shell">
          <div className={styles.storyIntro}>
            <p className="eyebrow">OUR STORY</p>
            <h2>Technology matters most when it expands human potential.</h2>
            <p>Schoolnet&apos;s story is grounded in one enduring idea: better access to learning can change the course of a life.</p>
          </div>
          <div className={styles.storyRows}>
            <article>
              <div className={styles.storyImage}><Image src={aboutStory.images.whoWeAre} alt="Students learning with laptops" width={1250} height={1464} sizes="(max-width: 720px) 100vw, 44vw" /></div>
              <div className={styles.storyText}><span>01 · Who we are</span><h3>Built in India.<br />Built for learning access.</h3><p>{aboutStory.whoWeAre}</p><div className={styles.storyFacts}><span><CheckCircle2 /> K–12 education</span><span><CheckCircle2 /> Digital learning</span><span><CheckCircle2 /> Implementation at scale</span></div></div>
            </article>
            <article>
              <div className={styles.storyImage}><Image src={aboutStory.images.whatWeDo} alt="Schoolnet digital classroom in use" width={1250} height={1464} sizes="(max-width: 720px) 100vw, 44vw" /></div>
              <div className={styles.storyText}><span>02 · What we do</span><h3>Connect the school day<br />to every learner&apos;s journey.</h3><p>{aboutStory.whatWeDo}</p><div className={styles.storyFacts}><span><CheckCircle2 /> AI-enabled technology</span><span><CheckCircle2 /> NEP 2020 ready</span><span><CheckCircle2 /> School + after-school</span></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.scaleSection} id="impact">
        <div className="shell">
          <div className={styles.scaleHeader}><div><p className="eyebrow">POSITIVE IMPACT, AT SCALE</p><h2>Reach measured in access.<br />Purpose measured in lives.</h2></div><p>These figures are published on Schoolnet India&apos;s official About page and were verified on 13 August 2026.</p></div>
          <div className={styles.metricGrid}>{aboutMetrics.map((metric, index) => <article key={metric.label}><span>0{index + 1}</span><strong>{metric.value}</strong><p>{metric.label}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className="shell">
          <div className={styles.sectionHeading}><div><p className="eyebrow">BOARD OF DIRECTORS</p><h2>Experience that keeps<br />the mission moving.</h2></div><p>Leaders across education, public policy, finance and investment bringing robust governance and long-term perspective to Schoolnet.</p></div>
          <LeadershipGrid />
        </div>
      </section>

      <section className={styles.advisorSection}>
        <div className="shell">
          <div className={styles.sectionHeading}><div><p className="eyebrow">EDTECH ADVISORY GROUP</p><h2>Ideas shaped by global<br />education expertise.</h2></div><p>Specialists in AI, digital learning, innovation and education help Schoolnet look around the corner—and keep the learner at the centre.</p></div>
          <div className={styles.advisorGrid}>{advisors.map((advisor) => <article key={advisor.name}><Image src={advisor.image} alt={`Portrait of ${advisor.name}`} width={800} height={800} sizes="(max-width: 500px) 45vw, (max-width: 900px) 30vw, 16vw" /><div><h3>{advisor.name}</h3><p>{advisor.role}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.cultureSection}>
        <div className="shell">
          <div className={styles.cultureHeading}><p className="eyebrow">OUR CULTURAL IDEAS</p><h2>How we work shapes<br />the change we create.</h2></div>
          <div className={styles.cultureGrid}>{culturalIdeas.map((idea, index) => <article className={styles[`culture${idea.tone[0].toUpperCase()}${idea.tone.slice(1)}`]} key={idea.title}><span>0{index + 1}</span><Image src={idea.image} alt="" width={206} height={206} /><h3>{idea.title}</h3><p>{idea.description}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.purposeSection}>
        <div className={`shell ${styles.purposeGrid}`}>
          <div className={styles.purposeCopy}><p className="eyebrow">A PURPOSE BIGGER THAN TECHNOLOGY</p><h2>Learning that contributes to a more equitable world.</h2><p>Schoolnet aligns its work with two United Nations Sustainable Development Goals, connecting education access with opportunity and productive employment.</p><blockquote><Quote /><span>Equal and inclusive learning is not a feature. It is the point.</span></blockquote></div>
          <div className={styles.goalGrid}>{sustainableGoals.map((goal) => <article key={goal.number}><Image src={goal.image} alt={`United Nations Sustainable Development Goal ${goal.number}: ${goal.title}`} width={678} height={348} /><div><span>SDG {goal.number}</span><h3>{goal.title}</h3><p>{goal.description}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.frameworkSection}>
        <div className={`shell ${styles.frameworkGrid}`}>
          <div className={styles.frameworkVisual}><Image src="/about/impact-framework.png" alt="Schoolnet's impact assessment framework" width={3278} height={868} sizes="(max-width: 850px) 100vw, 48vw" /></div>
          <div><p className="eyebrow">IMPACT ASSESSMENT</p><h2>Agility. Accuracy. Authenticity.</h2><p>Schoolnet&apos;s 3A framework uses device-based data and evidence to support continuous improvement and transparent, outcome-focused programmes.</p><div className={styles.pillRow}><span>Agility</span><span>Accuracy</span><span>Authenticity</span></div></div>
        </div>
      </section>

      <section className={styles.reportsSection}>
        <div className="shell">
          <div className={styles.sectionHeading}><div><p className="eyebrow">IMPACT SUMMARIES</p><h2>Evidence that helps<br />learning improve.</h2></div><p>Published evaluations and reports help partners understand what works, where it works and how implementation can keep getting better.</p></div>
          <div className={styles.reportGrid}>{impactReports.map((report, index) => <article key={report.title}><span className={styles.reportNumber}>0{index + 1}</span><Image src="/about/impact-report.png" alt="" width={344} height={344} /><h3>{report.title}</h3><p>{report.description}</p>{report.href && report.linkVerified ? <a href={report.href} target="_blank" rel="noreferrer">View official report <MoveUpRight size={15} /></a> : <span className={styles.unconfirmed}>Report link to be confirmed</span>}</article>)}</div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`shell ${styles.ctaInner}`}><div><p className="eyebrow">THE NEXT CHAPTER</p><h2>Let&apos;s shape what learning can become.</h2></div><div><p>Bring Schoolnet&apos;s experience in technology, content and teacher enablement to your school.</p><DemoButton className="button">Book a school demo <ArrowRight size={17} /></DemoButton><span><Sparkles size={13} /> Prototype form validates locally; no details are transmitted or stored.</span></div></div>
      </section>

      <Footer />
    </main>
  );
}
