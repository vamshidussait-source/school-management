import { StatusBadge, PageHeader, Card } from "@/components/shared";
import { STUDENTS, ASSIGNMENTS } from "@/data/mock-data";

export default function ParentHomework() {
  return (
    <div className="space-y-5">
      <PageHeader title="Homework Tracking" subtitle={`Assignments for ${STUDENTS[0].name}`} />
      <div className="space-y-3">
        {ASSIGNMENTS.map(a => (
          <Card key={a.id} className="p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{a.title}</h3>
                  <StatusBadge status={a.status === "Active" ? "Pending" : a.status} />
                </div>
                <p className="text-sm text-slate-500">{a.subject} · Class {a.class}</p>
                <p className="text-xs text-slate-400 mt-1">Due: <span className="font-medium text-slate-600">{a.due}</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Class submissions</p>
                <p className="text-sm font-semibold text-slate-700">{a.submitted}/{a.total}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
