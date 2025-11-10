"use client";

import { useState } from "react";
import { Search, Plus, Download, Printer } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, SearchBar, TableWrapper, Th, Td, Card } from "@/components/shared";
import { FEE_RECORDS } from "@/data/mock-data";

export default function AdminFees() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const filtered = FEE_RECORDS.filter(f => {
    const ms = f.student.toLowerCase().includes(search.toLowerCase());
    const mf = filterStatus === "All" || f.status === filterStatus;
    return ms && mf;
  });
  return (
    <div className="space-y-5">
      <PageHeader title="Fee Management" subtitle="Track and manage student fee payments" actions={
        <>
          <Btn variant="secondary" icon={Printer}>Print Receipts</Btn>
          <Btn variant="primary" icon={Plus}>Record Payment</Btn>
        </>
      } />
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Collected", value: "$412,600", color: "text-emerald-600" },
          { label: "Pending", value: "$94,200", color: "text-amber-600" },
          { label: "Overdue", value: "$38,400", color: "text-red-600" },
          { label: "Collection Rate", value: "79.4%", color: "text-indigo-600" },
        ].map(s => <Card key={s.label} className="p-4 text-center"><p className={`text-xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>)}
      </div>
      <div className="flex items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search student..." />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
          {["All", "Paid", "Pending", "Overdue"].map(s => <option key={s}>{s}</option>)}
        </select>
        <div className="ml-auto"><Btn variant="secondary" icon={Download}>Export</Btn></div>
      </div>
      <TableWrapper>
        <thead><tr><Th>Student</Th><Th>Class</Th><Th>Term</Th><Th>Amount</Th><Th>Paid</Th><Th>Balance</Th><Th>Due Date</Th><Th>Paid On</Th><Th>Status</Th></tr></thead>
        <tbody>
          {filtered.map(f => (
            <tr key={f.id} className="hover:bg-slate-50 transition-colors">
              <Td><span className="font-medium text-slate-800">{f.student}</span></Td>
              <Td><Badge variant="default">{f.class}</Badge></Td>
              <Td>{f.term}</Td>
              <Td mono>${f.amount.toLocaleString()}</Td>
              <Td mono className="text-emerald-600">${f.paid.toLocaleString()}</Td>
              <Td mono className={f.balance > 0 ? "text-red-500 font-bold" : "text-slate-400"}>${f.balance.toLocaleString()}</Td>
              <Td mono>{f.dueDate}</Td>
              <Td mono>{f.paidDate}</Td>
              <Td><StatusBadge status={f.status} /></Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
