"use client";

import { useMemo, useRef, useState } from "react";
import {
  Accessibility,
  Check,
  Clipboard,
  Clock3,
  Download,
  Headphones,
  LayoutList,
  Pause,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";
import { inclusiveSupports, lessonFocuses, type LessonFocusId } from "@/data/inclusive-learning";
import styles from "./inclusive-lesson-studio.module.css";

type StudioSettings = {
  grade: "3" | "4" | "5";
  focus: LessonFocusId;
  duration: 35 | 45 | 60;
  context: "screen" | "shared" | "no-device";
  language: "english" | "bridge";
};

const defaultSettings: StudioSettings = {
  grade: "4",
  focus: "suffixes",
  duration: 45,
  context: "shared",
  language: "english",
};

const tabs = [
  { id: "plan", label: "Lesson flow", icon: LayoutList },
  { id: "supports", label: "Inclusive supports", icon: Accessibility },
  { id: "materials", label: "Learner materials", icon: Clipboard },
  { id: "evidence", label: "Evidence & next steps", icon: ShieldCheck },
] as const;

type TabId = (typeof tabs)[number]["id"];

function scaledMinutes(minutes: number, duration: number, index: number) {
  if (duration === 45) return minutes;
  const proposed = Math.max(2, Math.round((minutes / 45) * duration));
  if (index === 6) {
    const firstSix = lessonFocuses.suffixes.steps.slice(0, 6).reduce((sum, step) => sum + Math.max(2, Math.round((step.minutes / 45) * duration)), 0);
    return Math.max(2, duration - firstSix);
  }
  return proposed;
}

export function InclusiveLessonStudio() {
  const [settings, setSettings] = useState<StudioSettings>(defaultSettings);
  const [generated, setGenerated] = useState<StudioSettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<TabId>("plan");
  const [status, setStatus] = useState("A Grade 4 plan is ready to explore.");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const plan = lessonFocuses[generated.focus];

  const contextLabel = {
    screen: "One device per learner",
    shared: "Shared classroom display",
    "no-device": "Print and no-device",
  }[generated.context];

  const planText = useMemo(() => {
    const flow = plan.steps.map((step, index) => `${step.title}, ${scaledMinutes(step.minutes, generated.duration, index)} minutes. ${step.teacher}`).join(" ");
    return `Grade ${generated.grade} English lesson. ${plan.label}. Objective: ${plan.objective} ${flow}`;
  }, [generated, plan]);

  function generatePlan() {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setGenerated(settings);
    setActiveTab("plan");
    setStatus(`Plan created for Grade ${settings.grade}, ${settings.duration} minutes.`);
    requestAnimationFrame(() => outputRef.current?.focus());
  }

  function toggleSpeech() {
    if (!("speechSynthesis" in window)) {
      setStatus("Read aloud is not supported in this browser.");
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setStatus("Read aloud stopped.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(planText);
    utterance.rate = 0.88;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    setStatus("Reading the lesson flow aloud.");
  }

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(planText);
      setStatus("Lesson plan copied to the clipboard.");
    } catch {
      setStatus("Copy is unavailable here. You can print or save the plan instead.");
    }
  }

  return (
    <div className={styles.studio}>
      <aside className={styles.builder} aria-labelledby="studio-builder-title">
        <div className={styles.builderHead}>
          <span><Sparkles size={15} /> INCLUSIVE LESSON STUDIO</span>
          <h2 id="studio-builder-title">Shape the lesson around the learners.</h2>
          <p>Choose the teaching context. The prototype assembles a structured plan with dyslexia-friendly supports built in.</p>
        </div>

        <div className={styles.formGrid}>
          <label>
            <span>Grade</span>
            <select value={settings.grade} onChange={(event) => setSettings({ ...settings, grade: event.target.value as StudioSettings["grade"] })}>
              <option value="3">Grade 3</option><option value="4">Grade 4</option><option value="5">Grade 5</option>
            </select>
          </label>
          <label>
            <span>Lesson duration</span>
            <select value={settings.duration} onChange={(event) => setSettings({ ...settings, duration: Number(event.target.value) as StudioSettings["duration"] })}>
              <option value="35">35 minutes</option><option value="45">45 minutes</option><option value="60">60 minutes</option>
            </select>
          </label>
          <label className={styles.wideField}>
            <span>Learning focus</span>
            <select value={settings.focus} onChange={(event) => setSettings({ ...settings, focus: event.target.value as LessonFocusId })}>
              {Object.entries(lessonFocuses).map(([id, focus]) => <option value={id} key={id}>{focus.label}</option>)}
            </select>
          </label>
          <label className={styles.wideField}>
            <span>Classroom technology</span>
            <select value={settings.context} onChange={(event) => setSettings({ ...settings, context: event.target.value as StudioSettings["context"] })}>
              <option value="shared">Shared classroom display</option><option value="screen">One device per learner</option><option value="no-device">Print and no-device</option>
            </select>
          </label>
          <label className={styles.wideField}>
            <span>Language approach</span>
            <select value={settings.language} onChange={(event) => setSettings({ ...settings, language: event.target.value as StudioSettings["language"] })}>
              <option value="english">English instruction</option><option value="bridge">English + teacher-added home-language bridges</option>
            </select>
          </label>
        </div>

        <fieldset className={styles.learnerNeeds}>
          <legend>Learner needs</legend>
          <label className={styles.selectedNeed}><input type="checkbox" checked readOnly /> <span><Check /> Dyslexia-friendly reading support</span></label>
          <label><input type="checkbox" checked readOnly /> <span><Check /> Flexible ways to respond</span></label>
          <label><input type="checkbox" checked readOnly /> <span><Check /> Reduced working-memory load</span></label>
        </fieldset>

        <button className={styles.generate} type="button" onClick={generatePlan}><Sparkles size={17} /> Create inclusive lesson plan</button>
        <p className={styles.prototypeNote}>Prototype: plans are created locally from reviewed teaching patterns. No learner data is collected.</p>
      </aside>

      <section className={styles.output} aria-labelledby="generated-plan-title" ref={outputRef} tabIndex={-1}>
        <p className="sr-only" aria-live="polite">{status}</p>
        <header className={styles.outputHead}>
          <div>
            <span>READY TO TEACH · INCLUSIVE PLAN</span>
            <h2 id="generated-plan-title">{plan.label}</h2>
            <p>Grade {generated.grade} · {plan.subject} · {generated.duration} minutes</p>
          </div>
          <div className={styles.outputActions}>
            <button type="button" onClick={toggleSpeech}>{isSpeaking ? <Pause /> : <Volume2 />}<span>{isSpeaking ? "Stop" : "Read aloud"}</span></button>
            <button type="button" onClick={copyPlan}><Clipboard /><span>Copy</span></button>
            <button type="button" onClick={() => window.print()}><Download /><span>Print / save</span></button>
          </div>
        </header>

        <div className={styles.planSummary}>
          <div><span>LEARNING OBJECTIVE</span><p>{plan.objective}</p></div>
          <div className={styles.contextChip}><Clock3 /><span>{generated.duration} min</span></div>
          <div className={styles.contextChip}><Headphones /><span>{contextLabel}</span></div>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Lesson plan sections">
          {tabs.map(({ id, label, icon: Icon }) => <button key={id} type="button" role="tab" aria-selected={activeTab === id} aria-controls={`panel-${id}`} onClick={() => setActiveTab(id)}><Icon /> {label}</button>)}
        </div>

        <div className={styles.panel} id={`panel-${activeTab}`} role="tabpanel">
          {activeTab === "plan" && <div className={styles.timeline}>
            {plan.steps.map((step, index) => <article key={step.title}>
              <div className={styles.time}><strong>{scaledMinutes(step.minutes, generated.duration, index)}</strong><span>MIN</span></div>
              <div><span>0{index + 1} · {step.title}</span><h3>{step.teacher}</h3><p><strong>Learner:</strong> {step.learner}</p></div>
            </article>)}
          </div>}

          {activeTab === "supports" && <div className={styles.supportGrid}>
            {inclusiveSupports.map((support, index) => <article key={support.title}><span>0{index + 1}</span><h3>{support.title}</h3><p>{support.detail}</p></article>)}
            <div className={styles.guardrail}><ShieldCheck /><p><strong>Use professional judgement.</strong> These supports reduce avoidable barriers; they do not diagnose dyslexia or replace an individual education plan or specialist advice.</p></div>
          </div>}

          {activeTab === "materials" && <div className={styles.materials}>
            <div><span>WORD / CONCEPT CARDS</span><div className={styles.wordCards}>{plan.vocabulary.map((word) => <strong key={word}>{word}</strong>)}</div></div>
            <div><span>STUDENT-FRIENDLY SUCCESS CHECK</span><ul>{plan.success.map((item) => <li key={item}><Check /> {item}</li>)}</ul></div>
            <div><span>RESPONSE CHOICE BOARD</span><div className={styles.choiceBoard}><p>Say it</p><p>Build it</p><p>Draw + label it</p><p>Write it</p></div></div>
            <div className={styles.homePractice}><span>LOW-PRESSURE HOME PRACTICE</span><p>Choose two target words or ideas. Say each one, explain it in your own words and use it in a real-life example. An adult may read the prompt aloud.</p></div>
          </div>}

          {activeTab === "evidence" && <div className={styles.evidence}>
            <div className={styles.evidenceIntro}><span>QUICK, USEFUL EVIDENCE</span><h3>Notice the learning—not the speed.</h3><p>Record one observation in each area and use it to choose the next teaching step.</p></div>
            <div className={styles.rubric}>
              <article><span>01</span><div><h3>Accuracy</h3><p>Can the learner identify or read the taught pattern with decreasing support?</p></div></article>
              <article><span>02</span><div><h3>Meaning</h3><p>Can the learner explain the word, pattern or event in their own way?</p></div></article>
              <article><span>03</span><div><h3>Application</h3><p>Can the learner use the new learning in a fresh example or context?</p></div></article>
            </div>
            <div className={styles.nextStep}><RotateCcw /><div><span>SUGGESTED NEXT STEP</span><p>Reteach only the point of difficulty, then provide a short successful reread or reapplication before moving on.</p></div></div>
          </div>}
        </div>
      </section>
    </div>
  );
}
