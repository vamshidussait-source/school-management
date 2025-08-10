"use client";

import { BookOpen, Search, Library } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, SearchBar, TableWrapper, Th, Td, Card } from "@/components/shared";
import { LIBRARY_BOOKS } from "@/data/mock-data";

export default function StudentLibrary() {
  return (
    <div className="space-y-5">
      <PageHeader title="Library" subtitle="Browse and manage your issued books" />
      <div className="grid grid-cols-3 gap-3">
        {[{ label: "Books Issued", value: "2" }, { label: "Books Due Soon", value: "1" }, { label: "Overdue", value: "0" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <Card>
        <div className="px-5 py-4 border-b border-slate-100">
          <p className="font-semibold text-slate-800">Currently Issued</p>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { book: "Advanced Mathematics Vol. 2", author: "Stewart James", issued: "2024-02-20", due: "2024-03-05", status: "Overdue" },
            { book: "Fundamentals of Physics", author: "Halliday & Resnick", issued: "2024-03-01", due: "2024-03-22", status: "Active" },
          ].map((b, i) => (
            <div key={i} className="px-5 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-12 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen size={18} className="text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800">{b.book}</p>
                <p className="text-xs text-slate-400">{b.author}</p>
                <p className="text-xs text-slate-400 mt-0.5">Issued: {b.issued} · Due: {b.due}</p>
              </div>
              <StatusBadge status={b.status} />
            </div>
          ))}
        </div>
      </Card>
      <div>
        <h3 className="font-semibold text-slate-800 mb-3">Browse Available Books</h3>
        <div className="flex items-center gap-3 mb-4">
          <SearchBar value="" onChange={() => {}} placeholder="Search books..." />
        </div>
        <TableWrapper>
          <thead><tr><Th>Title</Th><Th>Author</Th><Th>Category</Th><Th>Available</Th><Th>Action</Th></tr></thead>
          <tbody>
            {LIBRARY_BOOKS.map(b => (
              <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                <Td><span className="font-medium text-slate-800">{b.title}</span></Td>
                <Td>{b.author}</Td>
                <Td><Badge variant="info">{b.category}</Badge></Td>
                <Td><span className={`font-medium ${b.available > 0 ? "text-emerald-600" : "text-red-500"}`}>{b.available}</span></Td>
                <Td><Btn variant={b.available > 0 ? "primary" : "secondary"} size="xs" disabled={b.available === 0}>Request</Btn></Td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </div>
  );
}
