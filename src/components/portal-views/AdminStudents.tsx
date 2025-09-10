"use client";

import { useState, useMemo } from "react";
import { Search, Plus, Download, Edit, Trash2, Eye, Phone, UserPlus } from "lucide-react";
import { Badge, StatusBadge, Avatar, PageHeader, Btn, SearchBar, Modal, FormField, Input, Select, TableWrapper, Th, Td, Card } from "@/components/shared";
import { STUDENTS, CLASSES } from "@/data/mock-data";
import type { Student } from "@/lib/types";

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("All");
  const [filterFee, setFilterFee] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<Student | null>(null);

  const filtered = useMemo(() => STUDENTS.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
    const matchClass = filterClass === "All" || s.class.startsWith(filterClass);
    const matchFee = filterFee === "All" || s.fees === filterFee;
    return matchSearch && matchClass && matchFee;
  }), [search, filterClass, filterFee]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Students"
        subtitle={`${STUDENTS.length} enrolled students across all classes`}
        actions={
          <Btn variant="primary" icon={UserPlus} onClick={() => { setSelected(null); setShowModal(true); }}>
            Add Student
          </Btn>
        }
      />
      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Students", value: "1,247", color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Active", value: "1,231", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Fee Defaulters", value: "89", color: "text-red-600", bg: "bg-red-50" },
          { label: "New This Month", value: "23", color: "text-amber-600", bg: "bg-amber-50" },
        ].map(s => (
          <Card key={s.label} className="p-4 text-center">
            <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
          </Card>
        ))}
      </div>
      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <SearchBar value={search} onChange={setSearch} placeholder="Search by name or ID..." />
        <select
          value={filterClass}
          onChange={e => setFilterClass(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          {["All", "7", "8", "9", "10", "11", "12"].map(c => <option key={c}>{c === "All" ? "All Classes" : `Class ${c}`}</option>)}
        </select>
        <select
          value={filterFee}
          onChange={e => setFilterFee(e.target.value)}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          {["All", "Paid", "Pending", "Overdue"].map(f => <option key={f}>{f === "All" ? "All Fee Status" : f}</option>)}
        </select>
        <div className="ml-auto">
          <Btn variant="secondary" icon={Download}>Export CSV</Btn>
        </div>
      </div>
      <TableWrapper>
        <thead>
          <tr>
            <Th>Student</Th><Th>ID</Th><Th>Class</Th><Th>Gender</Th>
            <Th>Attendance</Th><Th>GPA</Th><Th>Fee Status</Th><Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(s => (
            <tr key={s.id} className="hover:bg-slate-50 transition-colors group">
              <Td>
                <div className="flex items-center gap-2.5">
                  <Avatar name={s.name} size="sm" />
                  <div>
                    <p className="font-medium text-slate-800">{s.name}</p>
                    <p className="text-xs text-slate-400">{s.email}</p>
                  </div>
                </div>
              </Td>
              <Td mono>{s.id}</Td>
              <Td><Badge variant="default">{s.class}</Badge></Td>
              <Td>{s.gender}</Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${s.attendance}%` }} />
                  </div>
                  <span className="text-xs font-mono font-medium">{s.attendance}%</span>
                </div>
              </Td>
              <Td mono>{s.gpa.toFixed(1)}</Td>
              <Td><StatusBadge status={s.fees} /></Td>
              <Td>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => { setSelected(s); setShowModal(true); }} className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                    <Eye size={14} />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors">
                    <Edit size={14} />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <Modal open={showModal} onClose={() => setShowModal(false)} title={selected ? `Student: ${selected.name}` : "Add New Student"} width="max-w-2xl">
        {selected ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar name={selected.name} size="lg" />
              <div>
                <h3 className="font-semibold text-slate-800 text-lg">{selected.name}</h3>
                <p className="text-sm text-slate-500">{selected.id} · Class {selected.class} · Roll #{selected.roll}</p>
                <StatusBadge status={selected.status} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Email", selected.email], ["Phone", selected.phone],
                ["Date of Birth", selected.dob], ["Gender", selected.gender],
                ["Guardian", selected.guardian], ["Address", selected.address],
                ["GPA", selected.gpa.toFixed(1)], ["Attendance", `${selected.attendance}%`],
                ["Fee Status", selected.fees],
              ].map(([k, v]) => (
                <div key={k} className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-0.5">{k}</p>
                  <p className="font-medium text-slate-700">{v}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <FormField label="First Name"><Input placeholder="First name" /></FormField>
            <FormField label="Last Name"><Input placeholder="Last name" /></FormField>
            <FormField label="Date of Birth"><Input type="date" /></FormField>
            <FormField label="Gender"><Select><option>Male</option><option>Female</option><option>Other</option></Select></FormField>
            <FormField label="Class"><Select><option>Select class</option>{CLASSES.map(c => <option key={c.id}>{c.name}</option>)}</Select></FormField>
            <FormField label="Section"><Select><option>Select section</option>{["A","B","C","D"].map(s => <option key={s}>{s}</option>)}</Select></FormField>
            <FormField label="Email"><Input type="email" placeholder="student@school.edu" /></FormField>
            <FormField label="Phone"><Input placeholder="Phone number" /></FormField>
            <FormField label="Guardian Name"><Input placeholder="Guardian's full name" /></FormField>
            <FormField label="Guardian Contact"><Input placeholder="Guardian's phone" /></FormField>
            <div className="col-span-2 flex justify-end gap-2 pt-2 border-t border-slate-100">
              <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
              <Btn variant="primary" icon={Plus}>Add Student</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
