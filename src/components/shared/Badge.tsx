import type { ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "neutral";

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "bg-indigo-100 text-indigo-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
  info: "bg-sky-100 text-sky-700",
  neutral: "bg-slate-100 text-slate-600",
};

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${VARIANT_STYLES[variant]}`}>
      {children}
    </span>
  );
}

const STATUS_VARIANT_MAP: Record<string, BadgeVariant> = {
  Active: "success",
  Paid: "success",
  Present: "success",
  Approved: "success",
  Graded: "success",
  Closed: "neutral",
  Pending: "warning",
  Late: "warning",
  "On Leave": "warning",
  "Under Review": "warning",
  "Interview Scheduled": "info",
  Overdue: "danger",
  Absent: "danger",
  Rejected: "danger",
  Inactive: "neutral",
};

export function StatusBadge({ status }: { status: string }) {
  return <Badge variant={STATUS_VARIANT_MAP[status] ?? "neutral"}>{status}</Badge>;
}
