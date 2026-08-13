"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { audiences } from "@/data/site-content";
import styles from "./audience-explorer.module.css";

export function AudienceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = audiences[activeIndex];

  return (
    <div className={styles.explorer}>
      <div className={styles.cardGrid} role="tablist" aria-label="Explore the Schoolnet ecosystem by audience">
        {audiences.map(({ eyebrow, title, description, link, icon: Icon, tone }, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="audience-detail"
            className={`${styles.card} ${styles[`tone${tone[0].toUpperCase()}${tone.slice(1)}`]} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => setActiveIndex(index)}
            key={title}
          >
            <span className={styles.icon}><Icon size={23} /></span>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <strong>{title}</strong>
            <p>{description}</p>
            <span className={styles.explore}>{link} <ChevronRight size={15} /></span>
          </button>
        ))}
      </div>

      <article id="audience-detail" role="tabpanel" className={`${styles.detail} ${styles[`detail${active.tone[0].toUpperCase()}${active.tone.slice(1)}`]}`}>
        <div className={styles.detailIntro}>
          <span>{active.eyebrow} · {active.title}</span>
          <h3>{active.headline}</h3>
          <p>{active.narrative}</p>
          <Link href={active.href}>{active.cta} <ArrowRight size={16} /></Link>
        </div>
        <div className={styles.priorityPanel}>
          <p>What matters</p>
          <ul>{active.priorities.map((priority) => <li key={priority}><CheckCircle2 size={17} /> {priority}</li>)}</ul>
        </div>
        <div className={styles.outcome}>
          <Quote size={21} />
          <div><span>The intended outcome</span><p>{active.outcome}</p></div>
        </div>
      </article>
    </div>
  );
}
