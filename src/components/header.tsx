"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, LockKeyhole, Menu, X } from "lucide-react";
import { useState } from "react";
import { megaMenu } from "@/data/site-content";
import { DemoTrigger } from "./demo-dialog";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Schoolnet India home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><strong>schoolnet</strong><small>learning for life</small></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="mega-trigger">
            <button type="button" aria-haspopup="true">Solutions <ChevronDown size={15} /></button>
            <div className="mega-panel">
              <div className="mega-grid">
                {megaMenu.map((group) => (
                  <div key={group.title} className="mega-group">
                    <p>{group.title}</p>
                    {group.items.map(({ title, description, icon: Icon }) => (
                      <Link href="/#solutions" key={title}>
                        <span className="menu-icon"><Icon size={18} /></span>
                        <span><strong>{title}</strong><small>{description}</small></span>
                      </Link>
                    ))}
                  </div>
                ))}
                <Link className="mega-feature" href="/#contact">
                  <span className="feature-kicker">School transformation</span>
                  <strong>Technology is one part. We help connect the whole.</strong>
                  <span>Explore solutions <ArrowRight size={16} /></span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/#school">Schools</Link>
          <Link href="/#student">Students</Link>
          <Link href="/#impact">Impact</Link>
          <Link href="/#insights">Resources</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="header-actions">
          <span className="login-disabled" title="Portal experience will be added in a later phase"><LockKeyhole size={15} /> Login</span>
          <DemoTrigger className="button button-sm">Book a demo</DemoTrigger>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <details>
            <summary>Solutions <ChevronDown size={16} /></summary>
            {megaMenu.map((group) => (
              <div className="mobile-group" key={group.title}>
                <p>{group.title}</p>
                {group.items.map((item) => <Link key={item.title} href="/#solutions" onClick={() => setOpen(false)}>{item.title}</Link>)}
              </div>
            ))}
          </details>
          {[
            ["Schools", "/#school"],
            ["Students", "/#student"],
            ["Impact", "/#impact"],
            ["Resources", "/#insights"],
          ].map(([label, href]) => (
            <Link href={href} key={label} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <DemoTrigger className="button" onOpen={() => setOpen(false)}>Book a school demo</DemoTrigger>
          <p className="mobile-note"><LockKeyhole size={14} /> Persona login arrives with the portal phase.</p>
        </nav>
      )}
    </header>
  );
}
