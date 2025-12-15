"use client";

import { useState } from "react";
import { Eye, Send } from "lucide-react";
import { Badge, PageHeader, Btn, Modal, FormField, Input, Select, Card } from "@/components/shared";
import { NOTIFICATIONS_DATA } from "@/data/mock-data";

export default function AdminNotifications() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="space-y-5">
      <PageHeader title="Notifications" subtitle="Send announcements to students, parents and staff" actions={<Btn variant="primary" icon={Send} onClick={() => setShowModal(true)}>Send Notification</Btn>} />
      <div className="space-y-3">
        {NOTIFICATIONS_DATA.map(n => (
          <Card key={n.id} className="p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{n.title}</h3>
                  <Badge variant={n.type === "Fee" ? "warning" : n.type === "Event" ? "info" : n.type === "Admin" ? "default" : "neutral"}>{n.type}</Badge>
                </div>
                <p className="text-sm text-slate-500 mb-3">{n.message}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>Sent: {n.date}</span>
                  <span>•</span>
                  <span>To: {n.audience}</span>
                  <span>•</span>
                  <span>{n.sent} recipients</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Btn variant="ghost" size="xs" icon={Eye}>View</Btn>
                <Btn variant="ghost" size="xs" icon={Send}>Resend</Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Send New Notification">
        <div className="space-y-4">
          <FormField label="Title"><Input placeholder="Notification title" /></FormField>
          <FormField label="Recipient Group">
            <Select defaultValue="all">
              <option value="all">All (Students + Parents + Staff)</option>
              <option>Students Only</option>
              <option>Parents Only</option>
              <option>Teachers Only</option>
              <option>Specific Class</option>
            </Select>
          </FormField>
          <FormField label="Type">
            <Select><option>Academic</option><option>Fee</option><option>Event</option><option>Admin</option><option>Emergency</option></Select>
          </FormField>
          <FormField label="Message">
            <textarea placeholder="Write your message here..." className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 h-24 resize-none placeholder:text-slate-400" />
          </FormField>
          <FormField label="Channels">
            <div className="flex gap-3 text-sm">
              {["In-App", "Email", "SMS"].map(c => (
                <label key={c} className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-indigo-600" />{c}
                </label>
              ))}
            </div>
          </FormField>
          <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
            <Btn variant="secondary" onClick={() => setShowModal(false)}>Cancel</Btn>
            <Btn variant="primary" icon={Send}>Send Now</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
