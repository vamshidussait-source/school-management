import type { ElementType, ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  subtitle,
}: {
  title: string;
  value: string;
  change?: string;
  icon: ElementType;
  color: string;
  subtitle?: string;
}) {
  const isPositive = change?.startsWith("+");
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        {change && (
          <div className={`flex items-center gap-1 mt-1.5 text-xs font-medium ${isPositive ? "text-emerald-600" : "text-red-500"}`}>
            {isPositive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
            <span>{change} from last month</span>
          </div>
        )}
        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
      </div>
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 flex-shrink-0 ml-4">{actions}</div>}
    </div>
  );
}
