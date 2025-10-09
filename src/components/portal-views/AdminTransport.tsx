import { Bus, Plus, Edit } from "lucide-react";
import { Badge, PageHeader, Btn, Card } from "@/components/shared";
import { TRANSPORT_ROUTES } from "@/data/mock-data";

export default function AdminTransport() {
  return (
    <div className="space-y-5">
      <PageHeader title="Transport" subtitle="Bus routes and vehicle management" actions={<Btn variant="primary" icon={Plus}>Add Route</Btn>} />
      <div className="grid grid-cols-3 gap-3">
        {[{ label: "Active Routes", value: "3" }, { label: "Total Buses", value: "3" }, { label: "Students Enrolled", value: "125" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-2xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <div className="space-y-3">
        {TRANSPORT_ROUTES.map(r => (
          <Card key={r.id} className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Bus size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{r.route}</p>
                  <p className="text-xs text-slate-400">{r.bus} · Driver: {r.driver}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">{r.students} students</Badge>
                <Btn variant="ghost" size="xs" icon={Edit}>Edit</Btn>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-400">Stops</p>
                <p className="text-slate-700 font-medium text-xs mt-0.5">{r.stops}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-400">Departure</p>
                <p className="text-slate-700 font-medium">{r.departure}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-400">Return</p>
                <p className="text-slate-700 font-medium">{r.return}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
