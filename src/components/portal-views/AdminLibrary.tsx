"use client";

import { useState } from "react";
import { Search, Plus, Library } from "lucide-react";
import { Badge, PageHeader, Btn, SearchBar, TableWrapper, Th, Td, Card } from "@/components/shared";
import { LIBRARY_BOOKS } from "@/data/mock-data";

export default function AdminLibrary() {
  const [search, setSearch] = useState("");
  const filtered = LIBRARY_BOOKS.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-5">
      <PageHeader title="Library" subtitle="Book inventory and circulation management" actions={<Btn variant="primary" icon={Plus}>Add Book</Btn>} />
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Total Books", value: "3,847", color: "text-indigo-600" },
          { label: "Available", value: "3,219", color: "text-emerald-600" },
          { label: "Issued", value: "628", color: "text-amber-600" },
          { label: "Overdue Returns", value: "23", color: "text-red-600" },
        ].map(s => <Card key={s.label} className="p-4 text-center"><p className={`text-xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>)}
      </div>
      <div className="flex items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search books..." />
        <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
          <option>All Categories</option>
          {["Mathematics","Physics","Literature","Science","Chemistry","Computer Science"].map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <TableWrapper>
        <thead><tr><Th>Book ID</Th><Th>Title</Th><Th>Author</Th><Th>ISBN</Th><Th>Category</Th><Th>Copies</Th><Th>Available</Th><Th>Issued</Th></tr></thead>
        <tbody>
          {filtered.map(b => (
            <tr key={b.id} className="hover:bg-slate-50 transition-colors group">
              <Td mono>{b.id}</Td>
              <Td><span className="font-medium text-slate-800">{b.title}</span></Td>
              <Td>{b.author}</Td>
              <Td mono><span className="text-xs">{b.isbn}</span></Td>
              <Td><Badge variant="info">{b.category}</Badge></Td>
              <Td mono>{b.copies}</Td>
              <Td><span className={`font-semibold ${b.available > 0 ? "text-emerald-600" : "text-red-500"}`}>{b.available}</span></Td>
              <Td mono>{b.issued}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
