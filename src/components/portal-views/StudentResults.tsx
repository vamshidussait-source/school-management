"use client";

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as ReBarChart,
} from "recharts";
import { PageHeader, Card } from "@/components/shared";
import { EXAM_RESULTS } from "@/data/mock-data";

export default function StudentResults() {
  const myResult = EXAM_RESULTS[0];
  return (
    <div className="space-y-5">
      <PageHeader title="Exam Results" subtitle="Academic performance and grade history" />
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-slate-500">Term 1 Final Examination · Class 10-A</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Overall: {myResult.percentage.toFixed(1)}% · Grade {myResult.grade}</h2>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-amber-500">#{myResult.rank}</p>
            <p className="text-xs text-slate-400">Class Rank</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {[
            { subject: "Mathematics", score: myResult.math, max: 100 },
            { subject: "English", score: myResult.english, max: 100 },
            { subject: "Physics", score: myResult.physics, max: 100 },
            { subject: "Chemistry", score: myResult.chemistry, max: 100 },
            { subject: "Biology", score: myResult.biology, max: 100 },
          ].map(s => (
            <div key={s.subject} className="bg-slate-50 rounded-xl p-4 text-center">
              <p className={`text-2xl font-bold ${s.score >= 90 ? "text-emerald-600" : s.score >= 75 ? "text-indigo-600" : "text-amber-600"}`}>{s.score}</p>
              <p className="text-xs text-slate-500 mt-1">/{s.max}</p>
              <p className="text-xs text-slate-600 mt-1 font-medium">{s.subject}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-5">
        <p className="font-semibold text-slate-800 mb-4">Score Breakdown</p>
        <ResponsiveContainer width="100%" height={200}>
          <ReBarChart data={[
            { subject: "Math", score: myResult.math, avg: 80 },
            { subject: "English", score: myResult.english, avg: 76 },
            { subject: "Physics", score: myResult.physics, avg: 72 },
            { subject: "Chemistry", score: myResult.chemistry, avg: 74 },
            { subject: "Biology", score: myResult.biology, avg: 78 },
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="subject" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="score" fill="#4f46e5" radius={[4, 4, 0, 0]} name="My Score" />
            <Bar dataKey="avg" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Class Avg" />
          </ReBarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}