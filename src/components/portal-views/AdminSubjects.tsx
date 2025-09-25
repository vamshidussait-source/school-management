import { BookOpen, Plus, Edit, Trash2 } from "lucide-react";
import { Badge, PageHeader, Btn, TableWrapper, Th, Td } from "@/components/shared";
import { SUBJECTS } from "@/data/mock-data";

export default function AdminSubjects() {
  return (
    <div className="space-y-5">
      <PageHeader title="Subjects" subtitle="Curriculum subjects and teacher assignments" actions={<Btn variant="primary" icon={Plus}>Add Subject</Btn>} />
      <TableWrapper>
        <thead><tr><Th>Subject</Th><Th>Code</Th><Th>Assigned Teacher</Th><Th>Classes</Th><Th>Periods/Week</Th><Th>Type</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {SUBJECTS.map(s => (
            <tr key={s.id} className="hover:bg-slate-50 transition-colors group">
              <Td>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <BookOpen size={13} className="text-indigo-600" />
                  </div>
                  <span className="font-medium text-slate-800">{s.name}</span>
                </div>
              </Td>
              <Td mono>{s.code}</Td>
              <Td>{s.teacher}</Td>
              <Td><span className="text-xs text-slate-500">{s.classes}</span></Td>
              <Td><span className="font-medium">{s.periods}</span></Td>
              <Td><Badge variant={s.type === "Core" ? "default" : s.type === "Elective" ? "info" : "warning"}>{s.type}</Badge></Td>
              <Td>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md"><Edit size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md"><Trash2 size={14} /></button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
