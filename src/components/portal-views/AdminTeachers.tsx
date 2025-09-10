"use client";

import { useState } from "react";
import { Search, Plus, Download, Edit, Trash2, Eye, Phone, UserPlus } from "lucide-react";
import { StatusBadge, Avatar, PageHeader, Btn, SearchBar, Modal, FormField, Input, Select, TableWrapper, Th, Td, Card } from "@/components/shared";
import { TEACHERS, SUBJECTS } from "@/data/mock-data";

export default function AdminTeachers() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = TEACHERS.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.subject.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <PageHeader
        title="Teachers"
        subtitle="Manage teaching staff and assignments"
        actions={<Btn variant="primary" icon={UserPlus} onClick={() => setShowModal(true)}>Add Teacher</Btn>}
      />
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Staff", value: "89", color: "text-indigo-600" },
          { label: "Active", value: "84", color: "text-emerald-600" },
          { label: "On Leave", value: "3", color: "text-amber-600" },
          { label: "Avg Experience", value: "8.5 yrs", color: "text-sky-600" },
        ].map(s => (
          <Card key={s.label} className="p-4 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search teachers..." />
        <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
          <option>All Subjects</option>
          {SUBJECTS.map(s => <option key={s.id}>{s.name}</option>)}
        </select>
        <div className="ml-auto"><Btn variant="secondary" icon={Download}>Export</Btn></div>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Teacher</Th><Th>ID</Th><Th>Subject</Th><Th>Classes</Th>
            <Th>Experience</Th><Th>Salary</Th><Th>Status</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="hover:bg-slate-50 transition-colors group">
              <Td>
                <div className="flex items-center gap-2.5">
                  <Avatar name={t.name} size="sm" />
                  <div>
                    <p className="font-medium text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.email}</p>
                  </div>
                </div>
              </Td>
              <Td mono>{t.id}</Td>
              <Td><span className="text-sm text-slate-700">{t.subject}</span></Td>
              <Td><span className="text-xs text-slate-500">{t.class}</span></Td>
              <Td><span className="font-medium">{t.experience}y</span></Td>
              <Td mono>${t.salary.toLocaleString()}</Td>
              <Td><StatusBadge status={t.status} /></Td>
              <Td>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"><Eye size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"><Edit size={14} /></button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"><Trash2 size={14} /></button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Add New Teacher" width="max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="First Name"><Input placeholder="First name" /></FormField>
          <FormField label="Last Name"><Input placeholder="Last name" /></FormField>
          <FormField label="Subject"><Select>{SUBJECTS.map(s => <option key={s.id}>{s.name}</option>)}</Select></FormField>
          <FormField label="Qualification"><Input placeholder="e.g. M.Sc Physics" /></FormField>
          <FormField label="Email"><Input type="email" placeholder="teacher@school.edu" /></FormField>
          <FormField label="Phone"><Input placeholder="Phone number" /></FormField>
          <FormField label="Joining Date"><Input type="date" /></FormField>
          <FormField label="Salary"><Input placeholder="Annual salary" type="number" /></FormField>
          <div className="col-span-2 flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Plus}>Add Teacher</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
