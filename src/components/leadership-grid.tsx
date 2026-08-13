"use client";

import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { directors } from "@/data/about-content";
import styles from "@/app/about/about.module.css";

type Director = (typeof directors)[number];

export function LeadershipGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeDirector, setActiveDirector] = useState<Director | null>(null);

  function openProfile(director: Director) {
    setActiveDirector(director);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  }

  function closeProfile() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className={styles.leadershipGrid}>
        {directors.map((director) => (
          <article className={`${styles.leaderCard} ${"featured" in director && director.featured ? styles.featuredLeader : ""}`} key={director.name}>
            <div className={styles.leaderPortrait}>
              <Image src={director.image} alt={`Portrait of ${director.name}`} width={522} height={522} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 33vw, 25vw" />
              {"featured" in director && director.featured && <span>MD & CEO</span>}
            </div>
            <div className={styles.leaderContent}>
              <p>{director.role}</p>
              <h3>{director.name}</h3>
              <span>{director.introduction}</span>
              <button type="button" onClick={() => openProfile(director)} aria-haspopup="dialog">
                Read profile <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.profileDialog}
        style={{ position: "fixed", inset: 0, margin: "auto" }}
        aria-labelledby="profile-name"
        onCancel={(event) => { event.preventDefault(); closeProfile(); }}
        onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); closeProfile(); } }}
        onClick={(event) => { if (event.target === dialogRef.current) closeProfile(); }}
      >
        {activeDirector && (
          <div className={styles.dialogInner}>
            <button className={styles.dialogClose} type="button" onClick={closeProfile} aria-label="Close profile"><X /></button>
            <Image src={activeDirector.image} alt="" width={522} height={522} />
            <div>
              <p>{activeDirector.role}</p>
              <h2 id="profile-name">{activeDirector.name}</h2>
              <span>{activeDirector.biography}</span>
              <small>Source: Schoolnet India official About page · Verified 13 August 2026</small>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
