import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "./header";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <div className="footer-about">
          <Brand />
          <p>Technology, content and implementation expertise for future-ready schools and lifelong learners.</p>
          <span className="footer-contact" title="Masked for this prototype"><Mail size={17} /> s•••@schoolnetindia.com</span>
          <span className="footer-contact" title="Masked for this prototype"><Phone size={17} /> +91 120 ••• ••••</span>
        </div>
        <div className="footer-column"><p>Solutions</p><Link href="/#solutions">Smart Classrooms</Link><Link href="/#solutions">Geneo</Link><Link href="/#solutions">LMS</Link><Link href="/#solutions">KYAN</Link><Link href="/#solutions">ICT Labs</Link></div>
        <div className="footer-column"><p>For</p><Link href="/#school">Schools</Link><Link href="/#student">Students</Link><Link href="/#teacher">Teachers</Link><Link href="/#impact">Government & CSR</Link></div>
        <div className="footer-column"><p>Company</p><Link href="/about">About</Link><Link href="/#impact">Impact</Link><Link href="/#insights">Insights</Link><a href="https://www.schoolnetindia.com/careers/" target="_blank" rel="noreferrer">Careers <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="shell registered-office"><MapPin size={16} /><span><strong>Registered office:</strong> D-114, Okhla Industrial Area, Phase I, New Delhi 110020</span></div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Schoolnet India Limited. Concept redesign.</span><div><a href="https://www.schoolnetindia.com/privacy-policy/">Privacy</a><a href="https://www.schoolnetindia.com/terms-and-conditions/">Terms</a></div></div>
    </footer>
  );
}
