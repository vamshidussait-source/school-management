import type { ReactNode } from "react";

export function TableWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">{children}</table>
      </div>
    </div>
  );
}

export function Th({ children }: { children: ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide bg-slate-50 border-b border-slate-100">
      {children}
    </th>
  );
}

export function Td({ children, mono, className = "" }: { children: ReactNode; mono?: boolean; className?: string }) {
  return <td className={`px-4 py-3 border-b border-slate-50 text-slate-700 ${mono ? "font-mono text-xs" : "text-sm"} ${className}`}>{children}</td>;
}
