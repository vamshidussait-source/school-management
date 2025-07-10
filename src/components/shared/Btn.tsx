import type { ElementType, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "xs" | "sm" | "md";

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
  ghost: "text-slate-600 hover:bg-slate-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

/**
 * Lightweight action button used across the dashboard pages.
 * Named `Btn` (not `Button`) to avoid clashing with any future
 * shadcn/ui `Button` import.
 */
export function Btn({
  children,
  variant = "primary",
  size = "sm",
  onClick,
  icon: Icon,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  icon?: ElementType;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const base = "inline-flex items-center gap-1.5 font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]}`}
      onClick={onClick}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
}
