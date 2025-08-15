import { Download, CheckCircle } from "lucide-react";
import { Avatar, PageHeader, Btn, TableWrapper, Th, Td } from "@/components/shared";
import { STUDENTS } from "@/data/mock-data";

export default function TeacherGrades() {
  return (
    <div className="space-y-5">
      <PageHeader title="Grades" subtitle="Enter and manage student grades" actions={
        <>
          <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
            <option>Unit Test 2 – Mathematics</option><option>Mid-Term</option>
          </select>
          <Btn variant="secondary" icon={Download}>Export</Btn>
          <Btn variant="primary" icon={CheckCircle}>Save Grades</Btn>
        </>
      } />
      <TableWrapper>
        <thead><tr><Th>Roll</Th><Th>Student</Th><Th>Assignment 1</Th><Th>Assignment 2</Th><Th>Unit Test</Th><Th>Total /100</Th><Th>Grade</Th><Th>Remarks</Th></tr></thead>
        <tbody>
          {STUDENTS.filter(s => s.class === "10-A").map((s, i) => {
            const scores = [Math.round(70 + Math.random() * 25), Math.round(70 + Math.random() * 25), Math.round(65 + Math.random() * 30)];
            const total = Math.round(scores.reduce((a, b) => a + b, 0) / 3);
            const grade = total >= 90 ? "A+" : total >= 80 ? "A" : total >= 70 ? "B+" : "B";
            return (
              <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                <Td mono>{i + 1}</Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <Avatar name={s.name} size="sm" />
                    <span className="font-medium text-slate-800">{s.name}</span>
                  </div>
                </Td>
                {scores.map((sc, j) => (
                  <td key={j} className="px-4 py-3 border-b border-slate-50">
                    <input type="number" defaultValue={sc} max={100}
                      className="w-16 px-2 py-1 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-mono" />
                  </td>
                ))}
                <Td><span className={`font-bold text-sm ${total >= 80 ? "text-emerald-600" : "text-amber-600"}`}>{total}</span></Td>
                <Td><span className={`font-bold text-sm ${grade.includes("+") ? "text-emerald-600" : "text-indigo-600"}`}>{grade}</span></Td>
                <Td>
                  <input type="text" placeholder="Optional remark" className="w-32 px-2 py-1 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-none placeholder:text-slate-300" />
                </Td>
              </tr>
            );
          })}
        </tbody>
      </TableWrapper>
    </div>
  );
}
