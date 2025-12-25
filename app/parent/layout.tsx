import { PortalShell } from "@/components/layout/PortalShell";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell portal="parent">{children}</PortalShell>;
}
