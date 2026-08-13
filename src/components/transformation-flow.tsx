"use client";

import { BarChart3, Check, ChevronRight, GraduationCap, Map, MonitorUp, Presentation, School, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { DemoButton } from "./demo-button";
import styles from "./transformation-flow.module.css";

const stages = [
  {
    number: "01", label: "Discover", title: "Start with the school you have.",
    description: "Understand academic priorities, classroom realities, infrastructure and teacher readiness before recommending technology.",
    deliverables: ["School-readiness conversation", "Infrastructure and learning-context review", "Priority outcomes identified"],
    stat: "Your starting point", statLabel: "Mapped clearly", icon: Map,
  },
  {
    number: "02", label: "Design", title: "Shape one connected learning ecosystem.",
    description: "Bring together the right classroom technology, curriculum content, learning platform and teacher-enablement plan.",
    deliverables: ["Right-fit solution architecture", "Classroom and platform plan", "Teacher-enablement roadmap"],
    stat: "One ecosystem", statLabel: "Designed around your needs", icon: Sparkles,
  },
  {
    number: "03", label: "Deploy", title: "Move from plan to working classrooms.",
    description: "Coordinate setup, content, platforms and onboarding so the experience is usable—not simply installed.",
    deliverables: ["Technology and content configured", "Teachers and teams onboarded", "Classroom rollout supported"],
    stat: "Ready to teach", statLabel: "Not just installed", icon: MonitorUp,
  },
  {
    number: "04", label: "Enable & measure", title: "Turn adoption into lasting capability.",
    description: "Help teachers grow their confidence, understand participation and use evidence to guide ongoing improvement.",
    deliverables: ["Ongoing teacher development", "Adoption and usage visibility", "Evidence-led programme improvement"],
    stat: "Keep improving", statLabel: "With people and evidence", icon: BarChart3,
  },
] as const;

export function TransformationFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];
  const Icon = active.icon;

  return (
    <div className={styles.flow}>
      <div className={styles.stepper} role="tablist" aria-label="School transformation stages">
        {stages.map((stage, index) => (
          <button type="button" role="tab" aria-selected={index === activeIndex} aria-controls="transformation-stage" className={index === activeIndex ? styles.activeStep : ""} onClick={() => setActiveIndex(index)} key={stage.number}>
            <span>{stage.number}</span><strong>{stage.label}</strong><i>{index < activeIndex ? <Check /> : <ChevronRight />}</i>
          </button>
        ))}
      </div>

      <div className={styles.stage} id="transformation-stage" role="tabpanel">
        <div className={styles.stageCopy}>
          <span>STAGE {active.number} · {active.label}</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <ul>{active.deliverables.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
          <div className={styles.stageActions}>
            {activeIndex < stages.length - 1 ? <button type="button" onClick={() => setActiveIndex(activeIndex + 1)}>See the next stage <ChevronRight /></button> : <DemoButton className={styles.demoAction}>Plan my school&apos;s journey <ChevronRight /></DemoButton>}
            <small>{activeIndex + 1} of {stages.length}</small>
          </div>
        </div>

        <div className={`${styles.systemVisual} ${styles[`visual${activeIndex + 1}`]}`} aria-label={`Visual representation of the ${active.label} stage`}>
          <div className={styles.visualTop}><span><School /> School transformation map</span><strong>{active.number} / 04</strong></div>
          <div className={styles.schoolMap}>
            <div className={`${styles.systemNode} ${styles.leaderNode}`}><School /><span><small>LEAD</small>School leaders</span><i /></div>
            <div className={`${styles.systemNode} ${styles.teacherNode}`}><Presentation /><span><small>ENABLE</small>Teachers</span><i /></div>
            <div className={`${styles.systemNode} ${styles.studentNode}`}><GraduationCap /><span><small>ENGAGE</small>Students</span><i /></div>
            <div className={`${styles.systemNode} ${styles.platformNode}`}><MonitorUp /><span><small>CONNECT</small>Technology + content</span><i /></div>
            <div className={styles.connectionLineOne} /><div className={styles.connectionLineTwo} /><div className={styles.connectionLineThree} />
            <div className={styles.core}><Icon /><span>{active.label}</span></div>
          </div>
          <div className={styles.visualOutcome}><Icon /><div><span>{active.stat}</span><strong>{active.statLabel}</strong></div><Users /></div>
        </div>
      </div>

      <div className={styles.progressTrack}><span style={{ width: `${((activeIndex + 1) / stages.length) * 100}%` }} /></div>
    </div>
  );
}
