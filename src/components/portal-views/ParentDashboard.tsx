"use client";

import { ClipboardList, UserCheck, Award, CreditCard } from "lucide-react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StatusBadge, Avatar, StatCard, Card } from "@/components/shared";
import { STUDENTS, STUDENT_ATTENDANCE_RECORDS, PERFORMANCE_DATA } from "@/data/mock-data";

export default function ParentDashboard() {
  const child = STUDENTS[0];
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-rose-600 to-rose-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <Avatar name={child.name} size="lg" />
          <div>
            <p className="text-rose-200 text-sm mb-1">Monitoring: your child</p>
            <h2 className="text-xl font-bold">{child.name}</h2>
            <p className="text-rose-200 text-sm">Class {child.class} · Roll #{child.roll}</p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-6 text-center">
            <div><p className="text-2xl font-bold">{child.attendance}%</p><p className="text-xs text-rose-200">Attendance</p></div>
            <div className="w-px h-8 bg-rose-400" />
            <div><p className="text-2xl font-bold">{child.gpa}</p><p className="text-xs text-rose-200">GPA</p></div>
            <div className="w-px h-8 bg-rose-400" />
            <div><p className="text-2xl font-bold" style={{ color: child.fees === "Paid" ? "#86efac" : "#fca5a5" }}>{child.fees}</p><p className="text-xs text-rose-200">Fee Status</p></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Attendance" value={`${child.attendance}%`} icon={UserCheck} color="bg-emerald-500" />
        <StatCard title="Class Rank" value="#3" icon={Award} color="bg-amber-500" />
        <StatCard title="Pending HW" value="2" icon={ClipboardList} color="bg-sky-500" />
        <StatCard title="Fee Status" value="Paid" icon={CreditCard} color="bg-indigo-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-4">Academic Progress</p>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={PERFORMANCE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Line type="monotone" dataKey="math" stroke="#4f46e5" strokeWidth={2} name="Mathematics" dot={false} />
              <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2} name="Science" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800">Recent Attendance</p>
          </div>
          <div className="divide-y divide-slate-50">
            {STUDENT_ATTENDANCE_RECORDS.map((r, i) => (
              <div key={i} className="flex items-center px-5 py-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{r.day}, {r.date}</p>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}