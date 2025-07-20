"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import type { Portal } from "@/lib/types";
import { NAV, PORTAL_CONFIG } from "@/data/nav-config";
import { useAuth } from "@/hooks/useAuth";

export function Sidebar({
  portal,
  collapsed,
  onToggle,
}: {
  portal: Portal;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const cfg = PORTAL_CONFIG[portal];
  const nav = NAV[portal];
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside
      className={`flex flex-col bg-slate-900 text-slate-300 h-full transition-all duration-300 flex-shrink-0 ${
        collapsed ? "w-14" : "w-56"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 py-4 border-b border-slate-800">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
          <GraduationCap size={17} className="text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">EduManage</p>
            <p className="text-xs text-indigo-400 truncate">{cfg.label}</p>
          </div>
        )}
        <button
          onClick={onToggle}
          className={`ml-auto w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors flex-shrink-0 ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-2 scrollbar-hide">
        {nav.map((section) => (
          <div key={section.section} className="mb-3">
            {!collapsed && (
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1">
                {section.section}
              </p>
            )}
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                    active ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  } ${collapsed ? "justify-center" : ""}`}
                >
                  <item.icon size={16} className="flex-shrink-0" />
                  {!collapsed && <span className="truncate font-medium">{item.label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className={`px-3 py-3 border-t border-slate-800 flex items-center gap-2.5 ${collapsed ? "justify-center" : ""}`}>
        <div className={`w-8 h-8 rounded-full ${cfg.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {user?.initials ?? cfg.initials}
        </div>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-300 truncate">{user?.name ?? "Guest"}</p>
            <p className="text-xs text-slate-500 truncate capitalize">{portal}</p>
          </div>
        )}
        {!collapsed && (
          <button onClick={logout} title="Log out" className="text-slate-500 hover:text-slate-300 flex-shrink-0">
            <LogOut size={14} />
          </button>
        )}
      </div>
    </aside>
  );
}
