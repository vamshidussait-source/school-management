"use client";

import { useState } from "react";
import { Search, Download, Printer } from "lucide-react";
import { Badge, PageHeader, Btn, SearchBar, TableWrapper, Th, Td } from "@/components/shared";
import { CLASSES, EXAM_RESULTS } from "@/data/mock-data";

export default function AdminResults() {
  const [search, setSearch] = useState("");
  const filtered = EXAM_RESULTS.filter(r => r.student.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-5">
      <PageHeader title="Exam Results" subtitle="Student performance and grade records" actions={
        <>
          <Btn variant="secondary" icon={Printer}>Print Report Cards</Btn>
          <Btn variant="primary" icon={Download}>Export Results</Btn>
        </>
      } />
      <div className="flex items-center gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search student..." />
        <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
          <option>Term 1 Final</option><option>Mid-Term</option><option>Unit Test 1</option>
        </select>
        <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none">
          <option>All Classes</option>{CLASSES.map(c => <option key={c.id}>{c.name}</option>)}
        </select>
      </div>
      <TableWrapper>
        <thead><tr><Th>Student</Th><Th>Class</Th><Th>Math</Th><Th>English</Th><Th>Physics</Th><Th>Chemistry</Th><Th>Biology</Th><Th>%</Th><Th>Grade</Th><Th>Rank</Th></tr></thead>
        <tbody>
          {filtered.map(r => (
            <tr key={r.id} className="hover:bg-slate-50 transition-colors">
              <Td><span className="font-medium text-slate-800">{r.student}</span></Td>
              <Td><Badge variant="default">{r.class}</Badge></Td>
              {[r.math, r.english, r.physics, r.chemistry, r.biology].map((score, i) => (
                <Td key={i} mono>
                  <span className={score >= 90 ? "text-emerald-600 font-semibold" : score >= 75 ? "text-slate-700" : score > 0 ? "text-amber-600" : "text-slate-300"}>
                    {score > 0 ? score : "—"}
                  </span>
                </Td>
              ))}
              <Td mono><span className="font-bold">{r.percentage.toFixed(1)}%</span></Td>
              <Td>
                <span className={`font-bold text-sm ${r.grade.includes("+") ? "text-emerald-600" : r.grade === "A" ? "text-indigo-600" : "text-amber-600"}`}>{r.grade}</span>
              </Td>
              <Td>
                <span className={`font-mono font-bold text-sm ${r.rank === 1 ? "text-amber-500" : r.rank === 2 ? "text-slate-500" : "text-slate-400"}`}>#{r.rank}</span>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
