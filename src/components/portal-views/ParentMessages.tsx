"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar, PageHeader, Card } from "@/components/shared";
import { TEACHERS } from "@/data/mock-data";

export default function ParentMessages() {
  const [message, setMessage] = useState("");
  const messages = [
    { sender: "Dr. Rebecca Stone", role: "Mathematics Teacher", time: "Today, 10:30 AM", text: "Aiden did exceptionally well on last week's test. His improvement in calculus is noteworthy. Please encourage him to attempt the additional practice problems I've shared.", self: false },
    { sender: "You", role: "Parent", time: "Today, 11:05 AM", text: "Thank you for the update, Dr. Stone. We'll make sure he continues with the extra practice. Could you share the resources with us?", self: true },
    { sender: "Dr. Rebecca Stone", role: "Mathematics Teacher", time: "Today, 11:15 AM", text: "Of course! I've uploaded the materials to the student portal under Resources. Let me know if you have any questions.", self: false },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Teacher Communication" subtitle="Direct messaging with teachers" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-260px)] min-h-96">
        <Card className="overflow-y-auto">
          <div className="p-4 border-b border-slate-100">
            <p className="font-semibold text-slate-800 text-sm">Conversations</p>
          </div>
          {TEACHERS.slice(0, 5).map((t, i) => (
            <div key={t.id} className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-50 ${i === 0 ? "bg-indigo-50" : ""}`}>
              <Avatar name={t.name} size="sm" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{t.name}</p>
                <p className="text-xs text-slate-400 truncate">{t.subject}</p>
              </div>
              {i === 0 && <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />}
            </div>
          ))}
        </Card>
        <Card className="lg:col-span-2 flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
            <Avatar name="Dr. Rebecca Stone" size="sm" />
            <div>
              <p className="font-semibold text-slate-800 text-sm">Dr. Rebecca Stone</p>
              <p className="text-xs text-slate-400">Mathematics Teacher · Class 10-A</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-sm rounded-2xl px-4 py-3 ${m.self ? "bg-indigo-600 text-white rounded-br-sm" : "bg-slate-100 text-slate-800 rounded-bl-sm"}`}>
                  <p className={`text-xs font-semibold mb-1 ${m.self ? "text-indigo-200" : "text-indigo-600"}`}>{m.sender}</p>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                  <p className={`text-xs mt-1.5 ${m.self ? "text-indigo-300" : "text-slate-400"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100 flex gap-3">
            <input
              className="flex-1 px-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder:text-slate-400"
              placeholder="Type your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white hover:bg-indigo-700 transition-colors flex-shrink-0">
              <Send size={15} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
