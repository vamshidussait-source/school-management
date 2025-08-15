"use client";

import { useState } from "react";
import { Plus, Send } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, Modal, FormField, Input, Select, Card } from "@/components/shared";

export default function TeacherLeave() {
  const [showModal, setShowModal] = useState(false);
  const leaves = [
    { id: 1, type: "Medical", from: "2024-03-15", to: "2024-03-16", days: 2, reason: "Medical appointment", status: "Pending" },
    { id: 2, type: "Personal", from: "2024-02-10", to: "2024-02-10", days: 1, reason: "Family event", status: "Approved" },
    { id: 3, type: "Conference", from: "2024-01-22", to: "2024-01-24", days: 3, reason: "Education conference", status: "Approved" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Leave Requests" subtitle="Manage your leave applications" actions={<Btn variant="primary" icon={Plus} onClick={() => setShowModal(true)}>Apply for Leave</Btn>} />
      <div className="space-y-3">
        {leaves.map(l => (
          <Card key={l.id} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="info">{l.type}</Badge>
                  <StatusBadge status={l.status} />
                </div>
                <p className="text-sm font-medium text-slate-800 mt-1">{l.reason}</p>
                <p className="text-xs text-slate-400 mt-1">{l.from} → {l.to} · {l.days} day{l.days > 1 ? "s" : ""}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Apply for Leave">
        <div className="space-y-4">
          <FormField label="Leave Type"><Select><option>Medical</option><option>Personal</option><option>Conference</option><option>Emergency</option></Select></FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="From Date"><Input type="date" /></FormField>
            <FormField label="To Date"><Input type="date" /></FormField>
          </div>
          <FormField label="Reason">
            <textarea placeholder="Reason for leave..." className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 h-20 resize-none placeholder:text-slate-400" />
          </FormField>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Send}>Submit Request</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
