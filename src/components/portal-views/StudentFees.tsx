import { Download, CreditCard } from "lucide-react";
import { StatusBadge, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";

export default function StudentFees() {
  return (
    <div className="space-y-5">
      <PageHeader title="Fee Details" subtitle="My payment history and upcoming dues" actions={<Btn variant="primary" icon={CreditCard}>Pay Online</Btn>} />
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Annual Fees", value: "$18,000", color: "text-slate-700" },
          { label: "Paid This Year", value: "$4,500", color: "text-emerald-600" },
          { label: "Balance Due", value: "$0 (Term 1)", color: "text-indigo-600" },
        ].map(s => <Card key={s.label} className="p-4 text-center"><p className={`text-xl font-bold ${s.color}`}>{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>)}
      </div>
      <TableWrapper>
        <thead><tr><Th>Term</Th><Th>Amount</Th><Th>Paid</Th><Th>Due Date</Th><Th>Paid On</Th><Th>Receipt</Th><Th>Status</Th></tr></thead>
        <tbody>
          {[
            { term: "Term 1 2023–24", amount: 4500, paid: 4500, due: "2023-09-15", paidOn: "2023-09-10", status: "Paid" },
            { term: "Term 2 2023–24", amount: 4500, paid: 0, due: "2024-01-15", paidOn: "—", status: "Pending" },
            { term: "Term 3 2023–24", amount: 4500, paid: 0, due: "2024-04-15", paidOn: "—", status: "Pending" },
          ].map((f, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <Td><span className="font-medium">{f.term}</span></Td>
              <Td mono>${f.amount.toLocaleString()}</Td>
              <Td mono>${f.paid.toLocaleString()}</Td>
              <Td mono>{f.due}</Td>
              <Td mono>{f.paidOn}</Td>
              <Td>
                {f.status === "Paid" && <button className="flex items-center gap-1 text-xs text-indigo-600 hover:underline"><Download size={12} />Download</button>}
              </Td>
              <Td><StatusBadge status={f.status} /></Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
