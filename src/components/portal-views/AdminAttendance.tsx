"use client";

import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
import { Avatar, PageHeader, Btn, Th, Td, Card } from "@/components/shared";
import { STUDENTS } from "@/data/mock-data";

export default function AdminAttendance() {
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [selectedDate, setSelectedDate] = useState("2024-03-08");

  const mockAttendance = STUDENTS.filter(s => s.class === selectedClass).map(s => ({
    ...s,
    todayStatus: s.attendance > 92 ? "Present" : s.attendance > 88 ? "Present" : "Absent"
  }));

  return (
    <div className="space-y-5">
      <PageHeader title="Attendance Management" subtitle="Mark and track student attendance" actions={
        <>
          <Btn variant="secondary" icon={Download}>Export</Btn>
          <Btn variant="primary" icon={CheckCircle}>Save Attendance</Btn>
        </>
      } />
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Present Today", value: "1,172", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Absent Today", value: "75", color: "text-red-600", bg: "bg-red-50" },
          { label: "Late Arrivals", value: "18", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Attendance Rate", value: "94.0%", color: "text-indigo-600", bg: "bg-indigo-50" },
        ].map(s => (
          <Card key={s.label} className="p-4 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
          </Card>
        ))}
      </div>
      <Card className="p-5">
        <div className="flex items-center gap-4 mb-5 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">Class:</label>
            <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
              {["7-A","8-D","9-B","10-A","11-C","12-A"].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">Date:</label>
            <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <Th>Roll</Th><Th>Student Name</Th><Th>Present</Th><Th>Absent</Th><Th>Late</Th><Th>Monthly %</Th>
              </tr>
            </thead>
            <tbody>
              {mockAttendance.map((s, i) => (
                <tr key={s.id} className={`border-b border-slate-50 hover:bg-slate-50 transition-colors`}>
                  <Td mono>{i + 1}</Td>
                  <Td>
                    <div className="flex items-center gap-2">
                      <Avatar name={s.name} size="sm" />
                      <span className="font-medium">{s.name}</span>
                    </div>
                  </Td>
                  {(["Present", "Absent", "Late"] as const).map(status => (
                    <td key={status} className="px-4 py-3 border-b border-slate-50">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="radio" name={`att-${s.id}`} defaultChecked={s.todayStatus === status}
                          className="w-4 h-4 accent-indigo-600" />
                        <span className={`text-xs font-medium ${status === "Present" ? "text-emerald-600" : status === "Absent" ? "text-red-500" : "text-amber-600"}`}>{status}</span>
                      </label>
                    </td>
                  ))}
                  <Td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full">
                        <div className={`h-full rounded-full ${s.attendance >= 90 ? "bg-emerald-500" : "bg-amber-400"}`} style={{ width: `${s.attendance}%` }} />
                      </div>
                      <span className="text-xs font-mono">{s.attendance}%</span>
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
