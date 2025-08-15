"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Avatar, PageHeader, Btn, Card } from "@/components/shared";
import { STUDENTS } from "@/data/mock-data";

export default function TeacherAttendanceMarking() {
  const cls = STUDENTS.filter(s => s.class === "10-A");
  const [marked, setMarked] = useState<Record<string, string>>({});
  const markAll = (status: string) => setMarked(Object.fromEntries(cls.map(s => [s.id, status])));
  return (
    <div className="space-y-5">
      <PageHeader title="Mark Attendance" subtitle="Class 10-A · Friday, March 8, 2024" actions={
        <>
          <Btn variant="secondary" onClick={() => markAll("Present")}>Mark All Present</Btn>
          <Btn variant="primary" icon={CheckCircle}>Submit Attendance</Btn>
        </>
      } />
      <Card className="p-4">
        <div className="flex items-center gap-6 text-sm">
          {["Present", "Absent", "Late"].map(s => {
            const count = Object.values(marked).filter(v => v === s).length;
            const color = s === "Present" ? "text-emerald-600" : s === "Absent" ? "text-red-500" : "text-amber-600";
            return <div key={s} className="flex items-center gap-1.5"><span className={`font-bold text-lg ${color}`}>{count}</span><span className="text-slate-400">{s}</span></div>;
          })}
          <span className="text-slate-300">|</span>
          <span className="text-slate-400 text-xs">{cls.length - Object.keys(marked).length} not marked</span>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cls.map(s => (
          <Card key={s.id} className="p-4 flex items-center gap-3">
            <Avatar name={s.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">{s.name}</p>
              <p className="text-xs text-slate-400">Roll #{s.roll}</p>
            </div>
            <div className="flex gap-1">
              {(["P", "A", "L"] as const).map((code, i) => {
                const fullStatus = ["Present", "Absent", "Late"][i];
                const isActive = marked[s.id] === fullStatus;
                const colors = ["bg-emerald-500 text-white", "bg-red-500 text-white", "bg-amber-500 text-white"];
                const inactiveColors = ["hover:bg-emerald-50 text-emerald-600", "hover:bg-red-50 text-red-500", "hover:bg-amber-50 text-amber-600"];
                return (
                  <button key={code} onClick={() => setMarked(m => ({ ...m, [s.id]: fullStatus }))}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${isActive ? colors[i] : `bg-slate-50 ${inactiveColors[i]}`}`}>
                    {code}
                  </button>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
