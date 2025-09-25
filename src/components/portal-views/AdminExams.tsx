import { Plus, Edit, Eye } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";

export default function AdminExams() {
  const exams = [
    { name: "Mid-Term Examination", type: "Mid-Term", classes: "All", from: "2024-03-18", to: "2024-03-25", status: "Upcoming" },
    { name: "Unit Test 2 – Sciences", type: "Unit Test", classes: "9,10,11,12", from: "2024-03-11", to: "2024-03-12", status: "Active" },
    { name: "Term 1 Final Exams", type: "Final", classes: "All", from: "2024-01-15", to: "2024-01-28", status: "Completed" },
    { name: "Unit Test 1 – Humanities", type: "Unit Test", classes: "7,8,9", from: "2024-02-05", to: "2024-02-06", status: "Completed" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Exams" subtitle="Examination scheduling and management" actions={<Btn variant="primary" icon={Plus}>Schedule Exam</Btn>} />
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Upcoming Exams", value: "1", color: "text-indigo-600" },
          { label: "Active Exams", value: "1", color: "text-emerald-600" },
          { label: "Completed This Term", value: "2", color: "text-slate-600" },
        ].map(s => <Card key={s.label} className="p-4 text-center"><p className={`text-2xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>)}
      </div>
      <TableWrapper>
        <thead><tr><Th>Exam Name</Th><Th>Type</Th><Th>Classes</Th><Th>From</Th><Th>To</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {exams.map((e, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors group">
              <Td><span className="font-medium text-slate-800">{e.name}</span></Td>
              <Td><Badge variant="info">{e.type}</Badge></Td>
              <Td>{e.classes}</Td>
              <Td mono>{e.from}</Td>
              <Td mono>{e.to}</Td>
              <Td><StatusBadge status={e.status} /></Td>
              <Td>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"><Eye size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md"><Edit size={14} /></button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
