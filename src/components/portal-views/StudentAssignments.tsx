import { StatusBadge, PageHeader, Btn, Card } from "@/components/shared";
import { ASSIGNMENTS } from "@/data/mock-data";

export default function StudentAssignments() {
  return (
    <div className="space-y-5">
      <PageHeader title="My Assignments" subtitle="All assignments and submission status" />
      <div className="space-y-3">
        {ASSIGNMENTS.map(a => (
          <Card key={a.id} className="p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{a.title}</h3>
                  <StatusBadge status={a.status === "Active" ? "Pending" : a.status === "Graded" ? "Active" : "Closed"} />
                </div>
                <p className="text-xs text-slate-400">{a.subject} · Class {a.class}</p>
                <p className="text-sm text-slate-600 mt-2">Due: <span className="font-medium">{a.due}</span></p>
              </div>
              <Btn variant={a.status === "Active" ? "primary" : "secondary"} size="xs">
                {a.status === "Active" ? "Submit" : a.status === "Graded" ? "View Grade" : "View"}
              </Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
