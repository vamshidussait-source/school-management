"use client";

import { GraduationCap, Calendar, ClipboardList, TrendingUp } from "lucide-react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Badge, StatCard, PageHeader, Btn, Card } from "@/components/shared";
import { ASSIGNMENTS, PERFORMANCE_DATA } from "@/data/mock-data";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Teacher Dashboard" subtitle="Welcome back, Dr. Rebecca Stone · Mathematics · Class 10-A" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="My Students" value="135" icon={GraduationCap} color="bg-indigo-500" />
        <StatCard title="Classes Today" value="4" subtitle="Next: 10-A at 10:30 AM" icon={Calendar} color="bg-emerald-500" />
        <StatCard title="Pending Grades" value="28" subtitle="Due this week" icon={ClipboardList} color="bg-amber-500" />
        <StatCard title="Class Avg Score" value="84.3%" change="+2.1%" icon={TrendingUp} color="bg-sky-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-4">Student Performance Trend</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={PERFORMANCE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="math" stroke="#4f46e5" strokeWidth={2} dot={false} name="Mathematics" />
              <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2} dot={false} name="Science" />
              <Line type="monotone" dataKey="english" stroke="#f59e0b" strokeWidth={2} dot={false} name="English" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800">Today's Schedule</p>
            <p className="text-xs text-slate-400">Friday, March 8, 2024</p>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { time: "8:00 AM", class: "10-A", subject: "Mathematics", room: "B-201", status: "completed" },
              { time: "9:45 AM", class: "11-C", subject: "Mathematics", room: "C-105", status: "completed" },
              { time: "10:30 AM", class: "10-A", subject: "Mathematics", room: "B-201", status: "upcoming" },
              { time: "12:15 PM", class: "12-A", subject: "Mathematics", room: "C-201", status: "upcoming" },
            ].map((s, i) => (
              <div key={i} className="flex items-center px-5 py-3">
                <div className="text-xs font-mono text-slate-400 w-20 flex-shrink-0">{s.time}</div>
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mr-3 ${s.status === "completed" ? "bg-emerald-400" : "bg-indigo-400"}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{s.class} – {s.subject}</p>
                  <p className="text-xs text-slate-400">Room {s.room}</p>
                </div>
                <Badge variant={s.status === "completed" ? "success" : "default"}>{s.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="font-semibold text-slate-800">Pending Assignments to Grade</p>
        </div>
        <div className="divide-y divide-slate-50">
          {ASSIGNMENTS.filter(a => a.status === "Active").map(a => (
            <div key={a.id} className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800">{a.title}</p>
                <p className="text-xs text-slate-400">{a.subject} · {a.class} · Due {a.due}</p>
              </div>
              <div className="text-xs text-slate-500 mr-4">{a.submitted}/{a.total} submitted</div>
              <div className="w-20 h-1.5 bg-slate-100 rounded-full mr-3">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(a.submitted / a.total) * 100}%` }} />
              </div>
              <Btn variant="primary" size="xs">Grade</Btn>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}