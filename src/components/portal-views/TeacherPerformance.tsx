"use client";

import { ArrowUpRight } from "lucide-react";
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
import { Avatar, PageHeader, TableWrapper, Th, Td, Card } from "@/components/shared";
import { EXAM_RESULTS, PERFORMANCE_DATA } from "@/data/mock-data";

export default function TeacherPerformance() {
  return (
    <div className="space-y-5">
      <PageHeader title="Student Performance" subtitle="Class 10-A performance analytics" />
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Class Average", value: "84.3%", color: "text-indigo-600" },
          { label: "Top Score", value: "95.2%", color: "text-emerald-600" },
          { label: "Below 60%", value: "2", color: "text-red-600" },
          { label: "Improved", value: "+8", color: "text-sky-600" },
        ].map(s => <Card key={s.label} className="p-4 text-center"><p className={`text-xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>)}
      </div>
      <Card className="p-5">
        <p className="font-semibold text-slate-800 mb-4">Subject-wise Performance</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={PERFORMANCE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="math" stroke="#4f46e5" strokeWidth={2.5} dot={{ r: 3 }} name="Math" />
            <Line type="monotone" dataKey="science" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} name="Science" />
            <Line type="monotone" dataKey="english" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} name="English" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <TableWrapper>
        <thead><tr><Th>Student</Th><Th>Overall %</Th><Th>Trend</Th><Th>Strengths</Th><Th>Needs Work</Th><Th>Rank</Th></tr></thead>
        <tbody>
          {EXAM_RESULTS.filter(r => r.class === "10-A").map(r => (
            <tr key={r.id} className="hover:bg-slate-50 transition-colors">
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={r.student} size="sm" />
                  <span className="font-medium text-slate-800">{r.student}</span>
                </div>
              </Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-slate-100 rounded-full">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${r.percentage}%` }} />
                  </div>
                  <span className="font-mono text-xs font-medium">{r.percentage.toFixed(1)}%</span>
                </div>
              </Td>
              <Td><ArrowUpRight size={14} className="text-emerald-500" /></Td>
              <Td><span className="text-xs text-emerald-600">Mathematics, Chemistry</span></Td>
              <Td><span className="text-xs text-amber-600">Physics</span></Td>
              <Td mono>#{r.rank}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}