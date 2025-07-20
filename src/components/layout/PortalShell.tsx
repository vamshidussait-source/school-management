"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Portal } from "@/lib/types";
import { useAuth } from "@/hooks/useAuth";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

/**
 * Wraps every page within a portal (admin/teacher/student/parent).
 * Redirects to /login if there's no session, and redirects to the
 * user's own portal if they try to view a different one.
 */
export function PortalShell({ portal, children }: { portal: Portal; children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/login");
      return;
    }
    if (user.role !== portal) {
      router.replace(`/${user.role}/dashboard`);
    }
  }, [loading, user, portal, router]);

  if (loading || !user || user.role !== portal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar portal={portal} collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((v) => !v)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header portal={portal} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
