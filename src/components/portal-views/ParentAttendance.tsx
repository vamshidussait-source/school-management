"use client";

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart as ReBarChart,
} from "recharts";
import { StatusBadge, PageHeader, TableWrapper, Th, Td, Card } from "@/components/shared";
import { STUDENTS, ATTENDANCE_MONTHLY, STUDENT_ATTENDANCE_RECORDS } from "@/data/mock-data";

export default function ParentAttendance() {
  return (
    <div className="space-y-5">
      <PageHeader title="Child Attendance" subtitle={`Attendance record for ${STUDENTS[0].name}`} />
      <div className="grid grid-cols-4 gap-3">
        {[{ label: "Present", value: "139", color: "text-emerald-600" }, { label: "Absent", value: "9", color: "text-red-600" }, { label: "Late", value: "4", color: "text-amber-600" }, { label: "Rate", value: "94%", color: "text-indigo-600" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className={`text-xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <Card className="p-5">
        <p className="font-semibold text-slate-800 mb-4">Attendance by Month</p>
        <ResponsiveContainer width="100%" height={180}>
          <ReBarChart data={ATTENDANCE_MONTHLY}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis domain={[70, 100]} tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
            <Bar dataKey="present" fill="#10b981" radius={[4, 4, 0, 0]} name="Present %" />
            <Bar dataKey="absent" fill="#fca5a5" radius={[4, 4, 0, 0]} name="Absent %" />
          </ReBarChart>
        </ResponsiveContainer>
      </Card>
      <TableWrapper>
        <thead><tr><Th>Date</Th><Th>Day</Th><Th>Status</Th><Th>Reason</Th></tr></thead>
        <tbody>
          {STUDENT_ATTENDANCE_RECORDS.map((r, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <Td mono>{r.date}</Td><Td>{r.day}</Td><Td><StatusBadge status={r.status} /></Td>
              <Td>{r.reason ?? <span className="text-slate-300">—</span>}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}