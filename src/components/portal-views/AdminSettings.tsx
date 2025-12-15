"use client";

import { useState } from "react";
import { Settings, MessageSquare, Phone, CreditCard, Globe, Wifi } from "lucide-react";
import { Badge, PageHeader, Btn, FormField, Input, Select, Card } from "@/components/shared";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const tabs = [
    { id: "general", label: "General" },
    { id: "academic", label: "Academic" },
    { id: "security", label: "Security" },
    { id: "integrations", label: "Integrations" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Settings" subtitle="Configure school system preferences" />
      <div className="flex gap-1 bg-white rounded-xl p-1 border border-slate-100 shadow-sm w-fit">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-colors ${activeTab === t.id ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}>
            {t.label}
          </button>
        ))}
      </div>
      {activeTab === "general" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-5 space-y-4">
            <h3 className="font-semibold text-slate-800 mb-3">School Information</h3>
            <FormField label="School Name"><Input defaultValue="Greenfield Academy" /></FormField>
            <FormField label="Address"><Input defaultValue="100 Academy Drive, Springfield, IL 62701" /></FormField>
            <FormField label="Phone"><Input defaultValue="+1 (555) 234-5678" /></FormField>
            <FormField label="Email"><Input defaultValue="admin@greenfield.edu" /></FormField>
            <FormField label="Website"><Input defaultValue="www.greenfield.edu" /></FormField>
            <Btn variant="primary">Save Changes</Btn>
          </Card>
          <Card className="p-5 space-y-4">
            <h3 className="font-semibold text-slate-800 mb-3">Academic Year</h3>
            <FormField label="Current Academic Year"><Input defaultValue="2023–2024" /></FormField>
            <FormField label="Term Structure"><Select defaultValue="3"><option value="2">Semester (2 Terms)</option><option value="3">Trimester (3 Terms)</option><option value="4">Quarterly (4 Terms)</option></Select></FormField>
            <FormField label="Term 1 Start"><Input type="date" defaultValue="2023-08-01" /></FormField>
            <FormField label="Term 1 End"><Input type="date" defaultValue="2023-12-15" /></FormField>
            <FormField label="Grading System"><Select><option>Letter Grade (A–F)</option><option>Percentage</option><option>GPA (4.0 Scale)</option></Select></FormField>
            <Btn variant="primary">Save Changes</Btn>
          </Card>
        </div>
      )}
      {activeTab === "academic" && (
        <Card className="p-5">
          <h3 className="font-semibold text-slate-800 mb-4">Academic Configuration</h3>
          <div className="space-y-4 max-w-lg">
            <FormField label="Working Days"><Select><option>Monday – Friday</option><option>Monday – Saturday</option></Select></FormField>
            <FormField label="School Start Time"><Input type="time" defaultValue="08:00" /></FormField>
            <FormField label="School End Time"><Input type="time" defaultValue="15:00" /></FormField>
            <FormField label="Period Duration (min)"><Input defaultValue="45" type="number" /></FormField>
            <FormField label="Minimum Attendance %"><Input defaultValue="75" type="number" /></FormField>
            <Btn variant="primary">Save Changes</Btn>
          </div>
        </Card>
      )}
      {activeTab === "security" && (
        <Card className="p-5">
          <h3 className="font-semibold text-slate-800 mb-4">Security Settings</h3>
          <div className="space-y-4 max-w-lg">
            {[
              { label: "Two-Factor Authentication", desc: "Require 2FA for all admin logins", enabled: true },
              { label: "Login Activity Logs", desc: "Track all login attempts and sessions", enabled: true },
              { label: "Password Expiry", desc: "Force password reset every 90 days", enabled: false },
              { label: "IP Restriction", desc: "Limit access to school network IPs only", enabled: false },
            ].map(s => (
              <div key={s.label} className="flex items-start justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-sm font-medium text-slate-800">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
                <div className={`w-10 h-5 rounded-full transition-colors cursor-pointer flex items-center px-0.5 ${s.enabled ? "bg-indigo-600 justify-end" : "bg-slate-200 justify-start"}`}>
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
      {activeTab === "integrations" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Google Workspace", desc: "Sync calendar and email", icon: Globe, connected: true },
            { name: "Zoom", desc: "Virtual classroom integration", icon: Wifi, connected: false },
            { name: "Payment Gateway", desc: "Online fee payment portal", icon: CreditCard, connected: true },
            { name: "SMS Provider", desc: "Automated SMS notifications", icon: MessageSquare, connected: true },
          ].map(int => (
            <Card key={int.name} className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <int.icon size={18} className="text-slate-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800">{int.name}</p>
                <p className="text-xs text-slate-400">{int.desc}</p>
              </div>
              <Badge variant={int.connected ? "success" : "neutral"}>{int.connected ? "Connected" : "Not Connected"}</Badge>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
