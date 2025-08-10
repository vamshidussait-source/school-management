"use client";

import { ClipboardList, UserCheck, Clock, CreditCard } from "lucide-react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as ReBarChart,
} from "recharts";
import { Badge, StatCard, Card } from "@/components/shared";
import { TIMETABLE, NOTIFICATIONS_DATA, ASSIGNMENTS } from "@/data/mock-data";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold">AC</div>
          <div>
            <h2 className="text-xl font-bold">Good morning, Aiden!</h2>
            <p className="text-indigo-200 text-sm">Class 10-A · Roll #1 · Student ID: STU001</p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-6 text-center">
            <div><p className="text-2xl font-bold">94%</p><p className="text-xs text-indigo-200">Attendance</p></div>
            <div className="w-px h-8 bg-indigo-400" />
            <div><p className="text-2xl font-bold">3.8</p><p className="text-xs text-indigo-200">GPA</p></div>
            <div className="w-px h-8 bg-indigo-400" />
            <div><p className="text-2xl font-bold">#3</p><p className="text-xs text-indigo-200">Class Rank</p></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Attendance" value="94%" change="+2%" icon={UserCheck} color="bg-emerald-500" />
        <StatCard title="Assignments" value="3 Pending" subtitle="Due this week" icon={ClipboardList} color="bg-amber-500" />
        <StatCard title="Next Exam" value="10 Days" subtitle="Mid-Term: Mar 18" icon={Clock} color="bg-sky-500" />
        <StatCard title="Fee Status" value="Paid" subtitle="Term 1 – 2024" icon={CreditCard} color="bg-indigo-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 p-5">
          <p className="font-semibold text-slate-800 mb-4">Recent Exam Results</p>
          <ResponsiveContainer width="100%" height={180}>
            <ReBarChart data={[
              { subject: "Math", score: 92 }, { subject: "English", score: 88 },
              { subject: "Physics", score: 85 }, { subject: "Chemistry", score: 90 }, { subject: "Biology", score: 87 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="subject" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Bar dataKey="score" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </ReBarChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800">Today's Classes</p>
            <p className="text-xs text-slate-400">Friday, March 8</p>
          </div>
          <div className="divide-y divide-slate-50">
            {TIMETABLE["10-A"].map((p, i) => (
              <div key={i} className="px-4 py-2.5 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 w-24 flex-shrink-0">{p.time}</span>
                <span className="text-xs font-medium text-slate-700">{(p as any)["Fri"]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800">Pending Assignments</p>
          </div>
          <div className="divide-y divide-slate-50">
            {ASSIGNMENTS.filter(a => a.status === "Active").map(a => (
              <div key={a.id} className="flex items-center px-5 py-3 hover:bg-slate-50 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{a.title}</p>
                  <p className="text-xs text-slate-400">{a.subject} · Due {a.due}</p>
                </div>
                <Badge variant="warning">Pending</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="px-5 py-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800">Recent Announcements</p>
          </div>
          <div className="divide-y divide-slate-50">
            {NOTIFICATIONS_DATA.slice(0, 3).map(n => (
              <div key={n.id} className="px-5 py-3 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-medium text-slate-800">{n.title}</p>
                  <Badge variant="info">{n.type}</Badge>
                </div>
                <p className="text-xs text-slate-400">{n.date}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}