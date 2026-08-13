"use client";

import { ArrowRight, Check, ChevronDown, ShieldCheck, Sparkles, X } from "lucide-react";
import { createContext, FormEvent, ReactNode, useContext, useRef, useState } from "react";
import styles from "./demo-dialog.module.css";

type DemoContextValue = { openDemo: () => void };

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function openDemo() {
    setSubmitted(false);
    dialogRef.current?.showModal();
  }

  function closeDemo() {
    dialogRef.current?.close();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  function handleClosed() {
    setSubmitted(false);
    formRef.current?.reset();
  }

  return (
    <DemoContext.Provider value={{ openDemo }}>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        style={{ position: "fixed", inset: 0, margin: "auto" }}
        aria-labelledby="demo-dialog-title"
        onCancel={(event) => { event.preventDefault(); closeDemo(); }}
        onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); closeDemo(); } }}
        onClose={handleClosed}
        onClick={(event) => { if (event.target === dialogRef.current) closeDemo(); }}
      >
        <button className={styles.close} type="button" onClick={closeDemo} aria-label="Close demo request"><X /></button>
        <div className={styles.dialogGrid}>
          <aside className={styles.contextPanel}>
            <div>
              <span className={styles.contextLabel}><Sparkles size={14} /> School transformation</span>
              <h2>Let&apos;s make learning work better for everyone.</h2>
              <p>Tell us a little about your school. We&apos;ll help identify a practical place to begin.</p>
            </div>
            <ul>
              <li><Check /> Solutions shaped around your needs</li>
              <li><Check /> Technology, content and teacher enablement</li>
              <li><Check /> A clear path from planning to adoption</li>
            </ul>
            <div className={styles.contextFoot}><ShieldCheck size={16} /><span><strong>Prototype experience</strong>Your details are not sent or stored.</span></div>
          </aside>

          <div className={styles.formPanel}>
            {submitted ? (
              <div className={styles.success} role="status">
                <span><Check /></span>
                <p>Request captured</p>
                <h2 id="demo-dialog-title">Thank you. Let&apos;s build what&apos;s next.</h2>
                <p>Your demo request has been captured for this prototype. No information was transmitted or stored.</p>
                <button className="button" type="button" onClick={closeDemo}>Done</button>
              </div>
            ) : (
              <>
                <div className={styles.formHeading}>
                  <p>BOOK A SCHOOL DEMO</p>
                  <h2 id="demo-dialog-title">Start the conversation.</h2>
                  <span>Fields marked * are required.</span>
                </div>
                <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.fieldRow}>
                    <label>Full name *<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
                    <label>Role *<span className={styles.selectWrap}><select name="role" defaultValue="" required><option value="" disabled>Select role</option><option>School owner</option><option>Principal</option><option>Academic leader</option><option>Teacher</option><option>Government / CSR</option><option>Other</option></select><ChevronDown /></span></label>
                  </div>
                  <label>School / organisation *<input name="organisation" type="text" autoComplete="organization" placeholder="Organisation name" required /></label>
                  <div className={styles.fieldRow}>
                    <label>Work email *<input name="email" type="email" autoComplete="email" placeholder="you@••••••.edu" required /></label>
                    <label>Phone number *<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{7,20}" placeholder="+91 ••••• •••••" required /></label>
                  </div>
                  <div className={styles.fieldRow}>
                    <label>City *<input name="city" type="text" autoComplete="address-level2" placeholder="City" required /></label>
                    <label>State *<input name="state" type="text" autoComplete="address-level1" placeholder="State" required /></label>
                  </div>
                  <label>What are you exploring?<span className={styles.selectWrap}><select name="interest" defaultValue="Complete school transformation"><option>Complete school transformation</option><option>Smart classrooms</option><option>Geneo AI learning</option><option>Learning management system</option><option>KYAN</option><option>Interactive panels</option><option>ICT labs</option><option>Teacher development</option><option>Government / CSR programme</option></select><ChevronDown /></span></label>
                  <label>What would you like to improve?<textarea name="message" rows={3} placeholder="Share your priorities, challenges or timeline (optional)" /></label>
                  <button className={`button ${styles.submit}`} type="submit">Request my demo <ArrowRight size={17} /></button>
                  <small>Prototype only — this form validates locally and does not submit to Schoolnet or a CRM.</small>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </DemoContext.Provider>
  );
}

export function DemoTrigger({ children, className, onOpen }: { children: ReactNode; className?: string; onOpen?: () => void }) {
  const context = useContext(DemoContext);
  if (!context) throw new Error("DemoTrigger must be used within DemoProvider");
  return <button className={className} type="button" onClick={() => { onOpen?.(); context.openDemo(); }}>{children}</button>;
}
