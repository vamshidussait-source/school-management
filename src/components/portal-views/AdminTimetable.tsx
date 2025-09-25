import { Edit, Printer } from "lucide-react";
import { PageHeader, Btn, Card } from "@/components/shared";
import { TIMETABLE } from "@/data/mock-data";

export default function AdminTimetable() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const schedule = TIMETABLE["10-A"];
  const subjectColors: Record<string, string> = {
    Mathematics: "bg-indigo-100 text-indigo-700",
    English: "bg-emerald-100 text-emerald-700",
    Physics: "bg-sky-100 text-sky-700",
    Chemistry: "bg-amber-100 text-amber-700",
    Biology: "bg-rose-100 text-rose-700",
    CS: "bg-violet-100 text-violet-700",
    PE: "bg-orange-100 text-orange-700",
  };
  return (
    <div className="space-y-5">
      <PageHeader title="Timetable" subtitle="Class schedule management" actions={
        <>
          <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
            {["7-A","8-D","9-B","10-A","11-C","12-A"].map(c => <option key={c}>{c}</option>)}
          </select>
          <Btn variant="secondary" icon={Printer}>Print</Btn>
          <Btn variant="primary" icon={Edit}>Edit Schedule</Btn>
        </>
      } />
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 w-24">Period</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 w-28">Time</th>
                {days.map(d => (
                  <th key={d} className="px-4 py-3 text-center text-xs font-semibold text-slate-300">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}>
                  <td className="px-4 py-3 text-xs font-bold text-slate-500">P{row.period}</td>
                  <td className="px-4 py-3 text-xs font-mono text-slate-400">{row.time}</td>
                  {days.map(d => {
                    const subj = (row as any)[d] as string;
                    return (
                      <td key={d} className="px-3 py-3 text-center">
                        <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${subjectColors[subj] || "bg-slate-100 text-slate-600"}`}>
                          {subj}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
