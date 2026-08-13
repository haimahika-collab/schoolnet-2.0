"use client";

import { ReactNode } from "react";
import { DemoTrigger } from "./demo-dialog";

export function DemoButton({ children, className }: { children: ReactNode; className?: string }) {
  return <DemoTrigger className={className}>{children}</DemoTrigger>;
}
