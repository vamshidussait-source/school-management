import { Download, CreditCard } from "lucide-react";
import { StatusBadge, PageHeader, Btn, TableWrapper, Th, Td, Card } from "@/components/shared";

export default function ParentFees() {
  return (
    <div className="space-y-5">
      <PageHeader title="Fee Payments" subtitle="Track and pay school fees" actions={<Btn variant="primary" icon={CreditCard}>Pay Online</Btn>} />
      <div className="grid grid-cols-3 gap-3">
        {[{ label: "Annual Total", value: "$18,000" }, { label: "Paid", value: "$4,500" }, { label: "Outstanding", value: "$13,500" }].map(s =>
          <Card key={s.label} className="p-4 text-center"><p className="text-xl font-bold text-indigo-600">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></Card>
        )}
      </div>
      <TableWrapper>
        <thead><tr><Th>Term</Th><Th>Amount</Th><Th>Due Date</Th><Th>Paid On</Th><Th>Status</Th><Th>Action</Th></tr></thead>
        <tbody>
          {[
            { term: "Term 1", amount: 4500, due: "2023-09-15", paid: "2023-09-10", status: "Paid" },
            { term: "Term 2", amount: 4500, due: "2024-01-15", paid: "—", status: "Pending" },
            { term: "Term 3", amount: 4500, due: "2024-04-15", paid: "—", status: "Pending" },
            { term: "Annual Activities", amount: 4500, due: "2023-08-31", paid: "2023-08-28", status: "Paid" },
          ].map((f, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <Td><span className="font-medium">{f.term}</span></Td>
              <Td mono>${f.amount.toLocaleString()}</Td>
              <Td mono>{f.due}</Td>
              <Td mono>{f.paid}</Td>
              <Td><StatusBadge status={f.status} /></Td>
              <Td>
                {f.status === "Pending" && <Btn variant="primary" size="xs" icon={CreditCard}>Pay Now</Btn>}
                {f.status === "Paid" && <Btn variant="ghost" size="xs" icon={Download}>Receipt</Btn>}
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
