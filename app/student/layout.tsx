import { PortalShell } from "@/components/layout/PortalShell";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell portal="student">{children}</PortalShell>;
}
