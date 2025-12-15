import { Users, GraduationCap, BarChart2, DollarSign, UserCheck, Bus, Download, Eye, UserPlus, Library, FileBarChart } from "lucide-react";
import { PageHeader, Btn, Card } from "@/components/shared";

export default function AdminReports() {
  return (
    <div className="space-y-5">
      <PageHeader title="Reports" subtitle="Generate and download school reports" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Student Performance Report", desc: "Academic results and grade analysis by class and subject", icon: GraduationCap, color: "bg-indigo-50 text-indigo-600" },
          { title: "Attendance Summary", desc: "Monthly and annual attendance statistics per class", icon: UserCheck, color: "bg-emerald-50 text-emerald-600" },
          { title: "Fee Collection Report", desc: "Payment status, pending dues and collection rate", icon: DollarSign, color: "bg-amber-50 text-amber-600" },
          { title: "Teacher Performance", desc: "Staff attendance, evaluations and class coverage", icon: Users, color: "bg-sky-50 text-sky-600" },
          { title: "Library Circulation", desc: "Books issued, returned and overdue summary", icon: Library, color: "bg-violet-50 text-violet-600" },
          { title: "Admissions Analysis", desc: "Application trends, approval rates and enrollment data", icon: UserPlus, color: "bg-rose-50 text-rose-600" },
          { title: "Transport Utilization", desc: "Route usage, capacity and student distribution", icon: Bus, color: "bg-orange-50 text-orange-600" },
          { title: "Annual Academic Report", desc: "Comprehensive year-end academic performance summary", icon: FileBarChart, color: "bg-teal-50 text-teal-600" },
          { title: "Financial Summary", desc: "Revenue, expenses and balance sheet overview", icon: BarChart2, color: "bg-pink-50 text-pink-600" },
        ].map(r => (
          <Card key={r.title} className="p-5 hover:shadow-md transition-shadow cursor-pointer group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.color} mb-3`}>
              <r.icon size={20} />
            </div>
            <h3 className="font-semibold text-slate-800 text-sm mb-1">{r.title}</h3>
            <p className="text-xs text-slate-400 mb-4">{r.desc}</p>
            <div className="flex items-center gap-2">
              <Btn variant="primary" size="xs" icon={Download}>Download PDF</Btn>
              <Btn variant="secondary" size="xs" icon={Eye}>Preview</Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
