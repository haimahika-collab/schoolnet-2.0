import type { Metadata } from "next";
import { DemoProvider } from "@/components/demo-dialog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://schoolnet-india-redesign.mahika-schoolnet.workers.dev"),
  title: "Schoolnet India | Smart Classrooms, AI Learning & Digital Education",
  description: "Transform teaching and learning with Schoolnet's smart classrooms, AI-enabled learning, LMS, digital content and teacher enablement solutions for schools.",
  openGraph: {
    title: "Schoolnet India | Future-ready schools",
    description: "Technology, content and teacher enablement brought together for more engaging and inclusive learning.",
    images: [{ url: "/og.png", width: 1728, height: 907, alt: "Schoolnet inclusive learning with a teacher and students in a connected classroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schoolnet India | Future-ready schools",
    description: "Technology, content and teacher enablement brought together for more engaging and inclusive learning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><DemoProvider>{children}</DemoProvider></body></html>;
}
