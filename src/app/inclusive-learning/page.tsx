import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpenCheck, Check, ExternalLink, Layers3, ScanSearch, Shapes, Sparkles, Users } from "lucide-react";
import { DemoButton } from "@/components/demo-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InclusiveLessonStudio } from "@/components/inclusive-lesson-studio";
import { distinctionPillars, evidenceSources, transformationLoop } from "@/data/inclusive-learning";
import styles from "./inclusive-learning.module.css";

export const metadata: Metadata = {
  title: "Inclusive Lesson Studio | Schoolnet India",
  description: "Explore a classroom-ready lesson planning prototype that helps teachers build explicit, multisensory and flexible learning experiences.",
  openGraph: {
    title: "Inclusive Lesson Studio | Schoolnet India",
    description: "Build a classroom-ready lesson with explicit instruction, flexible participation and meaningful evidence checks.",
    images: [{ url: "/og.png", width: 1728, height: 907, alt: "Schoolnet inclusive learning with a teacher and students in a connected classroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inclusive Lesson Studio | Schoolnet India",
    description: "Build a classroom-ready lesson with explicit instruction, flexible participation and meaningful evidence checks.",
    images: ["/og.png"],
  },
};

export default function InclusiveLearningPage() {
  return (
    <main id="top" className={styles.page}>
      <Header />
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">INCLUSIVE LEARNING · PROTOTYPE</p>
            <h1>Plan for the learner.<br /><em>Not the average.</em></h1>
            <p>Schoolnet can stand apart by making inclusion part of everyday lesson design—connecting teacher expertise, structured instruction and flexible learning experiences in one practical workflow.</p>
            <div className="button-row">
              <Link className="button" href="#studio">Build a lesson plan <ArrowDown size={17} /></Link>
              <Link className="button button-ghost" href="#difference">See what makes it different</Link>
            </div>
            <span className={styles.heroNote}>Designed to support teacher judgement—not diagnose learners or replace specialist guidance.</span>
          </div>
          <div className={styles.heroVisual} aria-label="Inclusive lesson workflow preview">
            <div className={styles.visualTop}><span><Sparkles /> Inclusive Lesson Studio</span><small>GRADE 4 · ENGLISH</small></div>
            <div className={styles.visualObjective}><small>TODAY&apos;S OBJECTIVE</small><strong>Build and use words ending in <em>-ful</em></strong><div><span>Explicit</span><span>Multisensory</span><span>Flexible response</span></div></div>
            <div className={styles.visualSteps}>
              <article><span>01</span><div><small>MODEL</small><strong>See it + hear it</strong></div><Check /></article>
              <article><span>02</span><div><small>BUILD</small><strong>Move it + say it</strong></div><Check /></article>
              <article><span>03</span><div><small>APPLY</small><strong>Choose how to respond</strong></div><ArrowRight /></article>
            </div>
            <div className={styles.visualFooter}><BookOpenCheck /><span><small>ACCESS BUILT IN</small><strong>One lesson. More ways into learning.</strong></span></div>
          </div>
        </div>
      </section>

      <section className={styles.difference} id="difference">
        <div className="shell">
          <div className={styles.sectionHeading}><div><p className="eyebrow">A DIFFERENT KIND OF LEARNING PLATFORM</p><h2>Go beyond content delivery.<br />Build classroom capability.</h2></div><p>The strongest distinction is not another feature list. It is a connected model that helps a school move from need to teaching practice, then improve with evidence.</p></div>
          <div className={styles.pillarGrid}>{distinctionPillars.map((pillar) => <article key={pillar.number}><span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}</div>
          <div className={styles.loop} aria-label="Continuous school transformation loop">
            {transformationLoop.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < transformationLoop.length - 1 && <ArrowRight />}</div>)}
          </div>
        </div>
      </section>

      <section className={styles.studioSection} id="studio">
        <div className="shell">
          <div className={styles.studioIntro}>
            <div><p className="eyebrow">SHOW, DON&apos;T JUST TELL</p><h2>Build a dyslexia-friendly lesson in minutes.</h2></div>
            <p>This working prototype demonstrates how a teacher could turn one learning objective into a structured flow, accessible materials and a focused evidence check—online or offline.</p>
          </div>
          <InclusiveLessonStudio />
        </div>
      </section>

      <section className={styles.principles}>
        <div className={`shell ${styles.principlesGrid}`}>
          <div className={styles.principlesCopy}><p className="eyebrow">THE DESIGN LOGIC</p><h2>Remove barriers.<br />Keep the challenge.</h2><p>Inclusive teaching is not about making the learning goal easier. It is about making instruction clearer and giving learners a fair way to demonstrate what they know.</p><DemoButton className="button">Explore this for my school <ArrowRight size={16} /></DemoButton></div>
          <div className={styles.principleCards}>
            <article><ScanSearch /><div><span>01</span><h3>Explicit and sequenced</h3><p>Model the thinking, practise together and build towards independent use in small, cumulative steps.</p></div></article>
            <article><Shapes /><div><span>02</span><h3>Multisensory with purpose</h3><p>Connect speech, print and movement so each channel reinforces the same learning—not extra stimulation.</p></div></article>
            <article><Layers3 /><div><span>03</span><h3>Multiple ways to respond</h3><p>Separate the learning goal from avoidable response barriers by offering meaningful choices.</p></div></article>
            <article><Users /><div><span>04</span><h3>Teacher-led and responsive</h3><p>Use quick evidence to decide what to reteach, practise or extend next.</p></div></article>
          </div>
        </div>
      </section>

      <section className={styles.sources}>
        <div className="shell">
          <div className={styles.sourceIntro}><p className="eyebrow">EVIDENCE-INFORMED, HUMAN-GUIDED</p><h2>Responsible foundations.</h2><p>The prototype&apos;s teaching patterns draw on established guidance. School-specific rollout should be reviewed by educators and inclusion specialists.</p></div>
          <div className={styles.sourceGrid}>{evidenceSources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.name}><span>VERIFIED GUIDANCE · {source.lastChecked}</span><h3>{source.name}</h3><p>{source.supports}</p><strong>Read original guidance <ExternalLink /></strong></a>)}</div>
        </div>
      </section>

      <section className={styles.cta}><div className={`shell ${styles.ctaInner}`}><div><p className="eyebrow">INCLUSION AS A SCHOOL CAPABILITY</p><h2>What if every lesson had more than one way in?</h2></div><div><p>Explore how inclusive planning could sit inside a wider Schoolnet transformation—from teacher development to classroom delivery and evidence-led improvement.</p><DemoButton className="button button-white">Book an inclusive-learning conversation <ArrowRight size={17} /></DemoButton><span>Prototype form only; contact details are not transmitted or stored.</span></div></div></section>
      <Footer />
    </main>
  );
}
