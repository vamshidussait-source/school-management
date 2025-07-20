"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Bell, ChevronDown, LogOut, User as UserIcon } from "lucide-react";
import type { Portal } from "@/lib/types";
import { useAuth } from "@/hooks/useAuth";

export function Header({ portal }: { portal: Portal }) {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const page = pathname.split("/").filter(Boolean)[1] ?? "dashboard";
  const label = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <header className="h-14 bg-white border-b border-slate-100 flex items-center px-5 gap-4 flex-shrink-0 relative z-30">
      <div className="text-sm text-slate-400">
        <span className="text-slate-500 font-medium capitalize">{portal}</span>
        <span className="mx-1.5 text-slate-300">/</span>
        <span className="text-slate-700 font-semibold capitalize">{label}</span>
      </div>
      <div className="flex-1" />
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          className="pl-8 pr-3 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:w-64 transition-all placeholder:text-slate-400"
          placeholder="Quick search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="relative w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
        <Bell size={16} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      </button>
      <div className="relative">
        <button
          onClick={() => setShowMenu((v) => !v)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
        >
          <span>{user?.name ?? "Account"}</span>
          <ChevronDown size={13} />
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-slate-100">
              <p className="text-sm font-semibold text-slate-800 truncate">{user?.name}</p>
              <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            </div>
            <a
              href={`/${portal}/profile`}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700"
            >
              <UserIcon size={14} />
              View profile
            </a>
            <button
              onClick={logout}
              className="w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-red-600"
            >
              <LogOut size={14} />
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
