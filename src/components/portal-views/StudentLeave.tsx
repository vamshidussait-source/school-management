"use client";

import { useState } from "react";
import { Plus, Send } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, Modal, FormField, Input, Select, Card } from "@/components/shared";

export default function StudentLeave() {
  const [showModal, setShowModal] = useState(false);
  const leaves = [
    { type: "Medical", from: "2024-03-05", to: "2024-03-05", reason: "Doctor appointment", status: "Approved" },
    { type: "Personal", from: "2024-02-14", to: "2024-02-14", reason: "Family occasion", status: "Approved" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Leave Requests" subtitle="Apply and track leave applications" actions={<Btn variant="primary" icon={Plus} onClick={() => setShowModal(true)}>Apply for Leave</Btn>} />
      <div className="space-y-3">
        {leaves.map((l, i) => (
          <Card key={i} className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1"><Badge variant="info">{l.type}</Badge><StatusBadge status={l.status} /></div>
                <p className="text-sm font-medium text-slate-800">{l.reason}</p>
                <p className="text-xs text-slate-400 mt-0.5">{l.from} → {l.to}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Apply for Leave">
        <div className="space-y-4">
          <FormField label="Leave Type"><Select><option>Medical</option><option>Personal</option><option>Emergency</option></Select></FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="From"><Input type="date" /></FormField>
            <FormField label="To"><Input type="date" /></FormField>
          </div>
          <FormField label="Reason"><textarea placeholder="Reason for leave..." className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 h-20 resize-none placeholder:text-slate-400" /></FormField>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Send}>Submit</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
