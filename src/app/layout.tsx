import type { Metadata } from "next";
import { DemoProvider } from "@/components/demo-dialog";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schoolnet India | Smart Classrooms, AI Learning & Digital Education",
  description: "Transform teaching and learning with Schoolnet's smart classrooms, AI-enabled learning, LMS, digital content and teacher enablement solutions for schools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><DemoProvider>{children}</DemoProvider></body></html>;
}
