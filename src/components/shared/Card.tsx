import type { ElementType, ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-xl shadow-sm border border-slate-100 ${className}`}>{children}</div>;
}

export function EmptyPlaceholder({ icon: Icon, text }: { icon: ElementType; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-slate-400">
      <Icon size={32} className="mb-2 opacity-40" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
