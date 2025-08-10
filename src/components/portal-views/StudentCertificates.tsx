import { Award, Download } from "lucide-react";
import { StatusBadge, PageHeader, Btn, Card } from "@/components/shared";

export default function StudentCertificates() {
  const certs = [
    { name: "Academic Excellence Certificate", date: "2023-12-15", type: "Academic", status: "Available" },
    { name: "Participation – Science Fair 2023", date: "2023-11-08", type: "Activity", status: "Available" },
    { name: "Sports Day – 3rd Place (100m)", date: "2023-09-22", type: "Sports", status: "Available" },
    { name: "Character Award – Term 1", date: "2024-01-10", type: "Character", status: "Pending" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Certificates" subtitle="Your achievements and certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <Card key={i} className="p-5 flex items-center gap-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={22} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">{c.name}</p>
              <p className="text-xs text-slate-400">{c.type} · {c.date}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <StatusBadge status={c.status} />
              {c.status === "Available" && <Btn variant="secondary" size="xs" icon={Download}>Download</Btn>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
