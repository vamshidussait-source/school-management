"use client";

import { useState } from "react";
import { Search, MessageSquare, Plus, Eye, Phone, Send } from "lucide-react";
import { Badge, Avatar, PageHeader, Btn, SearchBar, TableWrapper, Th, Td } from "@/components/shared";
import { STUDENTS } from "@/data/mock-data";

export default function AdminParents() {
  const [search, setSearch] = useState("");
  return (
    <div className="space-y-5">
      <PageHeader title="Parents / Guardians" subtitle="Parent contact information and communication history" actions={<Btn variant="primary" icon={Plus}>Add Parent</Btn>} />
      <div className="flex items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search parents..." />
        <div className="ml-auto"><Btn variant="secondary" icon={Send}>Bulk Message</Btn></div>
      </div>
      <TableWrapper>
        <thead><tr><Th>Parent</Th><Th>Child</Th><Th>Class</Th><Th>Phone</Th><Th>Email</Th><Th>Last Contact</Th><Th>Actions</Th></tr></thead>
        <tbody>
          {STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map(s => (
            <tr key={s.id} className="hover:bg-slate-50 transition-colors group">
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={s.guardian} size="sm" />
                  <span className="font-medium text-slate-800">{s.guardian}</span>
                </div>
              </Td>
              <Td>{s.name}</Td>
              <Td><Badge variant="default">{s.class}</Badge></Td>
              <Td mono>{s.phone}</Td>
              <Td><span className="text-xs text-slate-500">{s.email.replace("@school", ".parent@school")}</span></Td>
              <Td><span className="text-xs text-slate-400">Mar {Math.floor(Math.random() * 8) + 1}, 2024</span></Td>
              <Td>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"><Eye size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md"><MessageSquare size={14} /></button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
