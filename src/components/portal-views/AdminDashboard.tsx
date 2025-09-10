"use client";

import { Users, GraduationCap, DollarSign, UserCheck, Plus, Download, ChevronRight, RefreshCw } from "lucide-react";
import {
  AreaChart,
  Area,
  Bar,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as ReBarChart,
  PieChart as RePieChart,
} from "recharts";
import { Badge, StatusBadge, Avatar, StatCard, PageHeader, Btn, Card } from "@/components/shared";
import { ATTENDANCE_MONTHLY, ENROLLMENT_TREND, FEE_STATUS, CLASS_PERFORMANCE, ADMISSIONS, NOTIFICATIONS_DATA } from "@/data/mock-data";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        subtitle="Welcome back, Principal. Here's what's happening today."
        actions={
          <>
            <Btn variant="secondary" icon={Download}>Export</Btn>
            <Btn variant="primary" icon={RefreshCw}>Refresh</Btn>
          </>
        }
      />
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Students" value="1,247" change="+23" icon={GraduationCap} color="bg-indigo-500" />
        <StatCard title="Teachers" value="89" change="+3" icon={Users} color="bg-emerald-500" />
        <StatCard title="Monthly Revenue" value="$124,800" change="+$4,200" icon={DollarSign} color="bg-amber-500" />
        <StatCard title="Avg Attendance" value="94.2%" change="+1.4%" icon={UserCheck} color="bg-sky-500" />
      </div>
      {/* Charts row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-semibold text-slate-800">Enrollment Trend</p>
              <p className="text-xs text-slate-400">August 2023 – March 2024</p>
            </div>
            <Badge variant="success">+5.7% YTD</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={ENROLLMENT_TREND}>
              <defs>
                <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[1100, 1300]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <Area type="monotone" dataKey="students" stroke="#4f46e5" strokeWidth={2.5} fill="url(#enrollGrad)" dot={{ fill: "#4f46e5", r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-1">Fee Collection Status</p>
          <p className="text-xs text-slate-400 mb-4">Current Term · 1,247 students</p>
          <ResponsiveContainer width="100%" height={160}>
            <RePieChart>
              <Pie data={FEE_STATUS} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                {FEE_STATUS.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v) => [`${v}%`]} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            </RePieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {FEE_STATUS.map(item => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* Charts row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-1">Monthly Attendance Rate</p>
          <p className="text-xs text-slate-400 mb-4">School-wide average</p>
          <ResponsiveContainer width="100%" height={180}>
            <ReBarChart data={ATTENDANCE_MONTHLY}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[75, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <Bar dataKey="present" fill="#10b981" radius={[4, 4, 0, 0]} name="Present %" />
            </ReBarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-1">Class Performance</p>
          <p className="text-xs text-slate-400 mb-4">Average score by class</p>
          <ResponsiveContainer width="100%" height={180}>
            <ReBarChart data={CLASS_PERFORMANCE} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis dataKey="class" type="category" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} width={60} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <Bar dataKey="avg" fill="#4f46e5" radius={[0, 4, 4, 0]} name="Avg Score" />
            </ReBarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <p className="font-semibold text-slate-800">Recent Admissions</p>
            <Btn variant="ghost" size="xs" icon={ChevronRight}>View all</Btn>
          </div>
          <div className="divide-y divide-slate-50">
            {ADMISSIONS.slice(0, 4).map(a => (
              <div key={a.id} className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <Avatar name={a.name} size="sm" />
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{a.name}</p>
                  <p className="text-xs text-slate-400">Applying for {a.applyClass}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <p className="font-semibold text-slate-800">Notifications Sent</p>
            <Btn variant="ghost" size="xs" icon={Plus}>New</Btn>
          </div>
          <div className="divide-y divide-slate-50">
            {NOTIFICATIONS_DATA.map(n => (
              <div key={n.id} className="px-5 py-3 hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-slate-800 truncate flex-1">{n.title}</p>
                  <Badge variant={n.type === "Fee" ? "warning" : n.type === "Event" ? "info" : "neutral"}>{n.type}</Badge>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <p className="text-xs text-slate-400">{n.date}</p>
                  <p className="text-xs text-slate-400">•</p>
                  <p className="text-xs text-slate-500">{n.sent} recipients</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}