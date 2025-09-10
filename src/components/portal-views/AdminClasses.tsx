"use client";

import { useState } from "react";
import { Plus, Edit, Eye, Layers } from "lucide-react";
import { Badge, PageHeader, Btn, Modal, FormField, Input, Select, Card } from "@/components/shared";
import { TEACHERS, CLASSES } from "@/data/mock-data";

export default function AdminClasses() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="space-y-5">
      <PageHeader title="Classes & Sections" subtitle="Manage class structure and assignments" actions={<Btn variant="primary" icon={Plus} onClick={() => setShowModal(true)}>Add Class</Btn>} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CLASSES.map(cls => (
          <Card key={cls.id} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-slate-800 text-base">{cls.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{cls.room}</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Layers size={18} className="text-indigo-600" />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span className="text-slate-400">Sections</span>
                <div className="flex gap-1">{cls.sections.map(s => <Badge key={s} variant="default">{s}</Badge>)}</div>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="text-slate-400">Students</span>
                <span className="font-medium">{cls.students}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="text-slate-400">Class Teacher</span>
                <span className="font-medium text-xs">{cls.classTeacher}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100">
              <Btn variant="ghost" size="xs" icon={Eye}>View</Btn>
              <Btn variant="ghost" size="xs" icon={Edit}>Edit</Btn>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Add New Class">
        <div className="space-y-4">
          <FormField label="Class Name"><Input placeholder="e.g. Class 7" /></FormField>
          <FormField label="Sections (comma separated)"><Input placeholder="A, B, C" /></FormField>
          <FormField label="Class Teacher"><Select>{TEACHERS.map(t => <option key={t.id}>{t.name}</option>)}</Select></FormField>
          <FormField label="Room / Block"><Input placeholder="e.g. Block A" /></FormField>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Plus}>Add Class</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
