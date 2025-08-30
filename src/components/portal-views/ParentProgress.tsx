"use client";

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
import { PageHeader, Card } from "@/components/shared";
import { STUDENTS, PERFORMANCE_DATA } from "@/data/mock-data";

export default function ParentProgress() {
  return (
    <div className="space-y-5">
      <PageHeader title="Academic Progress" subtitle={`Performance overview for ${STUDENTS[0].name}`} />
      <Card className="p-5">
        <p className="font-semibold text-slate-800 mb-4">Subject Performance Trend</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={PERFORMANCE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="math" stroke="#4f46e5" strokeWidth={2.5} name="Mathematics" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2.5} name="Science" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="english" stroke="#f59e0b" strokeWidth={2.5} name="English" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-3">Latest Exam Results</p>
          <div className="space-y-3">
            {[
              { subject: "Mathematics", score: 92, max: 100 },
              { subject: "English", score: 88, max: 100 },
              { subject: "Physics", score: 85, max: 100 },
              { subject: "Chemistry", score: 90, max: 100 },
              { subject: "Biology", score: 87, max: 100 },
            ].map(s => (
              <div key={s.subject} className="flex items-center gap-3">
                <span className="text-sm text-slate-600 w-24 flex-shrink-0">{s.subject}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${s.score}%` }} />
                </div>
                <span className="text-sm font-mono font-medium w-8 text-right">{s.score}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <p className="font-semibold text-slate-800 mb-3">Teacher Remarks</p>
          <div className="space-y-3">
            {[
              { teacher: "Dr. Rebecca Stone", subject: "Mathematics", remark: "Excellent analytical thinking. Keep up the great work!" },
              { teacher: "Ms. Patricia Moore", subject: "English", remark: "Strong writing skills. Could improve in oral presentations." },
              { teacher: "Mr. Daniel Chen", subject: "Physics", remark: "Good understanding of concepts. Needs more practice on numerical problems." },
            ].map((r, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs font-semibold text-indigo-600">{r.teacher} · {r.subject}</p>
                <p className="text-xs text-slate-600 mt-1">{r.remark}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}