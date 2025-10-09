import { Plus } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";
import { HOSTEL_ROOMS } from "@/data/mock-data";

export default function AdminHostel() {
  return (
    <div className="space-y-5">
      <PageHeader title="Hostel Management" subtitle="Dormitory rooms and student accommodation" actions={<Btn variant="primary" icon={Plus}>Add Room</Btn>} />
      <div className="grid grid-cols-4 gap-3">
        {[{ label: "Total Rooms", value: "48" }, { label: "Occupied", value: "42" }, { label: "Available", value: "6" }, { label: "Total Residents", value: "89" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <TableWrapper>
        <thead><tr><Th>Room No.</Th><Th>Block</Th><Th>Type</Th><Th>Capacity</Th><Th>Occupied</Th><Th>Residents</Th><Th>Warden</Th><Th>Status</Th></tr></thead>
        <tbody>
          {HOSTEL_ROOMS.map(r => (
            <tr key={r.room} className="hover:bg-slate-50 transition-colors">
              <Td mono><span className="font-semibold">{r.room}</span></Td>
              <Td>{r.block}</Td>
              <Td><Badge variant="default">{r.type}</Badge></Td>
              <Td>{r.capacity}</Td>
              <Td><span className={r.occupied === r.capacity ? "text-red-500 font-medium" : r.occupied === 0 ? "text-slate-400" : "text-emerald-600 font-medium"}>{r.occupied}</span></Td>
              <Td><span className="text-xs text-slate-500">{r.students}</span></Td>
              <Td>{r.warden}</Td>
              <Td><StatusBadge status={r.occupied === 0 ? "Active" : r.occupied < r.capacity ? "Active" : "Pending"} /></Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
