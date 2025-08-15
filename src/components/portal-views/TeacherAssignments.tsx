"use client";

import { useState } from "react";
import { Plus, Edit, Eye, XCircle } from "lucide-react";
import { StatusBadge, PageHeader, Btn, Modal, FormField, Input, Select, Card } from "@/components/shared";
import { SUBJECTS, ASSIGNMENTS } from "@/data/mock-data";

export default function TeacherAssignments() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="space-y-5">
      <PageHeader title="Assignments" subtitle="Create and manage class assignments" actions={<Btn variant="primary" icon={Plus} onClick={() => setShowModal(true)}>New Assignment</Btn>} />
      <div className="space-y-3">
        {ASSIGNMENTS.map(a => (
          <Card key={a.id} className="p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{a.title}</h3>
                  <StatusBadge status={a.status} />
                </div>
                <p className="text-xs text-slate-400">{a.subject} · Class {a.class} · Due {a.due}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-slate-800">{a.submitted}/{a.total}</p>
                <p className="text-xs text-slate-400">submitted</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Submission progress</span>
                <span>{Math.round((a.submitted / a.total) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full">
                <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${(a.submitted / a.total) * 100}%` }} />
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Btn variant="primary" size="xs" icon={Eye}>View Submissions</Btn>
              <Btn variant="secondary" size="xs" icon={Edit}>Edit</Btn>
              {a.status === "Active" && <Btn variant="ghost" size="xs" icon={XCircle}>Close</Btn>}
            </div>
          </Card>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Create New Assignment">
        <div className="space-y-4">
          <FormField label="Assignment Title"><Input placeholder="e.g. Chapter 5 – Integration Problems" /></FormField>
          <FormField label="Subject"><Select>{SUBJECTS.map(s => <option key={s.id}>{s.name}</option>)}</Select></FormField>
          <FormField label="Class"><Select>{["10-A","11-C","12-A"].map(c => <option key={c}>{c}</option>)}</Select></FormField>
          <FormField label="Due Date"><Input type="date" /></FormField>
          <FormField label="Max Marks"><Input type="number" placeholder="100" /></FormField>
          <FormField label="Instructions">
            <textarea placeholder="Assignment instructions..." className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 h-20 resize-none placeholder:text-slate-400" />
          </FormField>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Plus}>Create Assignment</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
