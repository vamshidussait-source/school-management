import { Plus, Edit, Eye } from "lucide-react";
import { StatusBadge, Avatar, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";
import { TEACHERS } from "@/data/mock-data";

export default function AdminHR() {
  return (
    <div className="space-y-5">
      <PageHeader title="Human Resources" subtitle="Staff management, payroll and records" actions={<Btn variant="primary" icon={Plus}>Add Employee</Btn>} />
      <div className="grid grid-cols-4 gap-3">
        {[{ label: "Total Staff", value: "147" }, { label: "Teaching Staff", value: "89" }, { label: "Non-Teaching", value: "58" }, { label: "On Leave Today", value: "5" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <TableWrapper>
        <thead><tr><Th>Employee</Th><Th>ID</Th><Th>Role</Th><Th>Department</Th><Th>Salary</Th><Th>Experience</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {TEACHERS.map(t => (
            <tr key={t.id} className="hover:bg-slate-50 transition-colors group">
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={t.name} size="sm" />
                  <div>
                    <p className="font-medium text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.qualification}</p>
                  </div>
                </div>
              </Td>
              <Td mono>{t.id}</Td>
              <Td>Teacher</Td>
              <Td>{t.subject}</Td>
              <Td mono>${t.salary.toLocaleString()}/yr</Td>
              <Td>{t.experience} yrs</Td>
              <Td><StatusBadge status={t.status} /></Td>
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
