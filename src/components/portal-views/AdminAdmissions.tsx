import { CheckCircle, XCircle, UserPlus } from "lucide-react";
import { Badge, StatusBadge, Avatar, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";
import { ADMISSIONS } from "@/data/mock-data";

export default function AdminAdmissions() {
  return (
    <div className="space-y-5">
      <PageHeader title="Admissions" subtitle="Application processing and enrollment" actions={<Btn variant="primary" icon={UserPlus}>New Application</Btn>} />
      <div className="grid grid-cols-4 gap-3">
        {[{ label: "Total Applications", value: "38" }, { label: "Approved", value: "21" }, { label: "Pending Review", value: "12" }, { label: "Rejected", value: "5" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <TableWrapper>
        <thead><tr><Th>Application ID</Th><Th>Applicant</Th><Th>Class</Th><Th>Applied On</Th><Th>Entrance Score</Th><Th>Contact</Th><Th>Fee</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {ADMISSIONS.map(a => (
            <tr key={a.id} className="hover:bg-slate-50 transition-colors group">
              <Td mono>{a.id}</Td>
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={a.name} size="sm" />
                  <span className="font-medium text-slate-800">{a.name}</span>
                </div>
              </Td>
              <Td><Badge variant="default">{a.applyClass}</Badge></Td>
              <Td mono>{a.date}</Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1.5 bg-slate-100 rounded-full"><div className="h-full bg-indigo-500 rounded-full" style={{ width: `${a.score}%` }} /></div>
                  <span className="font-mono text-xs font-medium">{a.score}</span>
                </div>
              </Td>
              <Td mono>{a.contact}</Td>
              <Td><StatusBadge status={a.fee} /></Td>
              <Td><StatusBadge status={a.status} /></Td>
              <Td>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"><CheckCircle size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md"><XCircle size={14} /></button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
