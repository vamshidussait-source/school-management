import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  ClipboardList,
  BarChart2,
  Settings,
  Bell,
  UserCheck,
  Award,
  Library,
  Bus,
  Building2,
  Package,
  Briefcase,
  UserPlus,
  Layers,
  DollarSign,
  Home,
  CreditCard,
  Megaphone,
  MessageSquare,
  Star,
  FileText,
  PenLine,
  BookCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { Portal } from "@/lib/types";

export type NavItem = { id: string; label: string; icon: LucideIcon; href: string };
export type NavSection = { section: string; items: NavItem[] };

function withHref(portal: Portal, items: Omit<NavItem, "href">[]): NavItem[] {
  return items.map((item) => ({ ...item, href: `/${portal}/${item.id}` }));
}

export const NAV: Record<Portal, NavSection[]> = {
  admin: [
    {
      section: "Overview",
      items: withHref("admin", [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard }]),
    },
    {
      section: "Academics",
      items: withHref("admin", [
        { id: "students", label: "Students", icon: GraduationCap },
        { id: "teachers", label: "Teachers", icon: Users },
        { id: "parents", label: "Parents", icon: Home },
        { id: "classes", label: "Classes", icon: Layers },
        { id: "subjects", label: "Subjects", icon: BookOpen },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ]),
    },
    {
      section: "Operations",
      items: withHref("admin", [
        { id: "attendance", label: "Attendance", icon: UserCheck },
        { id: "exams", label: "Exams", icon: ClipboardList },
        { id: "results", label: "Results", icon: Award },
        { id: "fees", label: "Fee Management", icon: DollarSign },
        { id: "admissions", label: "Admissions", icon: UserPlus },
      ]),
    },
    {
      section: "Resources",
      items: withHref("admin", [
        { id: "library", label: "Library", icon: Library },
        { id: "transport", label: "Transport", icon: Bus },
        { id: "hostel", label: "Hostel", icon: Building2 },
        { id: "inventory", label: "Inventory", icon: Package },
      ]),
    },
    {
      section: "Management",
      items: withHref("admin", [
        { id: "hr", label: "HR", icon: Briefcase },
        { id: "reports", label: "Reports", icon: BarChart2 },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "settings", label: "Settings", icon: Settings },
      ]),
    },
  ],
  teacher: [
    {
      section: "Overview",
      items: withHref("teacher", [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard }]),
    },
    {
      section: "Classroom",
      items: withHref("teacher", [
        { id: "attendance", label: "Mark Attendance", icon: UserCheck },
        { id: "assignments", label: "Assignments", icon: ClipboardList },
        { id: "grades", label: "Grades", icon: Star },
        { id: "exams", label: "Exams", icon: FileText },
        { id: "timetable", label: "Timetable", icon: Calendar },
      ]),
    },
    {
      section: "Students",
      items: withHref("teacher", [{ id: "performance", label: "Student Performance", icon: BarChart2 }]),
    },
    {
      section: "Requests",
      items: withHref("teacher", [{ id: "leave", label: "Leave Requests", icon: PenLine }]),
    },
  ],
  student: [
    {
      section: "Overview",
      items: withHref("student", [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard }]),
    },
    {
      section: "Academic",
      items: withHref("student", [
        { id: "attendance", label: "Attendance", icon: UserCheck },
        { id: "assignments", label: "Assignments", icon: ClipboardList },
        { id: "timetable", label: "Timetable", icon: Calendar },
        { id: "results", label: "Exam Results", icon: Award },
      ]),
    },
    {
      section: "Services",
      items: withHref("student", [
        { id: "fees", label: "Fees", icon: CreditCard },
        { id: "library", label: "Library", icon: Library },
        { id: "certificates", label: "Certificates", icon: BookCheck },
        { id: "leave", label: "Leave Requests", icon: PenLine },
      ]),
    },
    {
      section: "Account",
      items: withHref("student", [{ id: "profile", label: "Profile", icon: Users }]),
    },
  ],
  parent: [
    {
      section: "Overview",
      items: withHref("parent", [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard }]),
    },
    {
      section: "Child Info",
      items: withHref("parent", [
        { id: "attendance", label: "Attendance", icon: UserCheck },
        { id: "progress", label: "Academic Progress", icon: TrendingUp },
        { id: "homework", label: "Homework Tracking", icon: ClipboardList },
      ]),
    },
    {
      section: "Services",
      items: withHref("parent", [
        { id: "fees", label: "Fee Payments", icon: CreditCard },
        { id: "messages", label: "Teacher Communication", icon: MessageSquare },
        { id: "announcements", label: "Announcements", icon: Megaphone },
      ]),
    },
  ],
};

export const PORTAL_CONFIG: Record<Portal, { label: string; color: string; initials: string }> = {
  admin: { label: "Admin Portal", color: "bg-indigo-600", initials: "AD" },
  teacher: { label: "Teacher Portal", color: "bg-emerald-600", initials: "TC" },
  student: { label: "Student Portal", color: "bg-amber-500", initials: "ST" },
  parent: { label: "Parent Portal", color: "bg-rose-500", initials: "PR" },
};
