import { BookOpen, Calendar, Bell, DollarSign } from "lucide-react";
import { Badge, PageHeader, Card } from "@/components/shared";
import { NOTIFICATIONS_DATA } from "@/data/mock-data";

export default function ParentAnnouncements() {
  return (
    <div className="space-y-5">
      <PageHeader title="Announcements" subtitle="School news and important notices" />
      <div className="space-y-3">
        {[
          ...NOTIFICATIONS_DATA,
          { id: 5, title: "Parent-Teacher Meeting", message: "Parent-Teacher meeting scheduled for March 22nd, 9 AM – 1 PM. Please book your slot through the portal.", type: "Event", audience: "Parents", date: "2024-03-04", sent: 847 },
          { id: 6, title: "School Holiday Notice", message: "School will remain closed on March 25th on account of the local festival. Regular classes resume on March 26th.", type: "Admin", audience: "All", date: "2024-03-03", sent: 1247 },
        ].map(n => (
          <Card key={n.id} className="p-5 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${n.type === "Fee" ? "bg-amber-50" : n.type === "Event" ? "bg-sky-50" : n.type === "Academic" ? "bg-indigo-50" : "bg-slate-100"}`}>
                {n.type === "Fee" ? <DollarSign size={18} className="text-amber-600" /> :
                 n.type === "Event" ? <Calendar size={18} className="text-sky-600" /> :
                 n.type === "Academic" ? <BookOpen size={18} className="text-indigo-600" /> :
                 <Bell size={18} className="text-slate-500" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-800">{n.title}</h3>
                  <Badge variant={n.type === "Fee" ? "warning" : n.type === "Event" ? "info" : "neutral"}>{n.type}</Badge>
                </div>
                <p className="text-sm text-slate-500">{n.message}</p>
                <p className="text-xs text-slate-400 mt-2">{n.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
