// app/wycena/layout.tsx
import { ReactNode } from "react";
import { metadata } from "./metadata";

export { metadata };

export default function WycenaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
