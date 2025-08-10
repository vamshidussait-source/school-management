import { Edit, Phone, Mail, MapPin } from "lucide-react";
import { Badge, StatusBadge, Avatar, PageHeader, Btn, Card } from "@/components/shared";
import { STUDENTS } from "@/data/mock-data";

export default function StudentProfile() {
  const s = STUDENTS[0];
  return (
    <div className="space-y-5">
      <PageHeader title="My Profile" actions={<Btn variant="primary" icon={Edit}>Edit Profile</Btn>} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-6 flex flex-col items-center text-center">
          <Avatar name={s.name} size="lg" />
          <h2 className="text-lg font-bold text-slate-900 mt-3">{s.name}</h2>
          <p className="text-sm text-slate-500">{s.id}</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="default">Class {s.class}</Badge>
            <StatusBadge status={s.status} />
          </div>
          <div className="w-full mt-5 pt-4 border-t border-slate-100 space-y-3 text-left">
            {[[Mail, s.email], [Phone, s.phone], [MapPin, s.address]].map(([Icon, val], i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                <Icon size={14} className="text-slate-400 flex-shrink-0" />
                <span className="text-xs">{val as string}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-semibold text-slate-800 mb-4">Academic Information</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Roll Number", `#${s.roll}`],
              ["Class", s.class],
              ["Date of Birth", s.dob],
              ["Gender", s.gender],
              ["GPA", `${s.gpa.toFixed(1)} / 4.0`],
              ["Attendance", `${s.attendance}%`],
              ["Guardian", s.guardian],
              ["Fee Status", s.fees],
            ].map(([k, v]) => (
              <div key={k} className="bg-slate-50 rounded-lg p-3">
                <p className="text-xs text-slate-400">{k}</p>
                <p className="text-sm font-medium text-slate-700 mt-0.5">{v}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
