import { Plus } from "lucide-react";
import { Badge, StatusBadge, PageHeader, Btn, TableWrapper, Th, Td } from "@/components/shared";

export default function AdminInventory() {
  const items = [
    { id: "INV001", name: "Whiteboard Markers (Box)", category: "Stationery", qty: 145, unit: "Box", reorder: 50, cost: 8.50, status: "In Stock" },
    { id: "INV002", name: "A4 Paper Reams", category: "Stationery", qty: 280, unit: "Ream", reorder: 100, cost: 5.00, status: "In Stock" },
    { id: "INV003", name: "Lab Safety Goggles", category: "Lab Equipment", qty: 48, unit: "Pair", reorder: 40, cost: 12.00, status: "Low Stock" },
    { id: "INV004", name: "Scientific Calculators", category: "Electronics", qty: 60, unit: "Piece", reorder: 30, cost: 18.00, status: "In Stock" },
    { id: "INV005", name: "Sports Balls (Football)", category: "Sports", qty: 12, unit: "Piece", reorder: 20, cost: 25.00, status: "Low Stock" },
    { id: "INV006", name: "First Aid Kits", category: "Medical", qty: 8, unit: "Kit", reorder: 5, cost: 45.00, status: "In Stock" },
  ];
  return (
    <div className="space-y-5">
      <PageHeader title="Inventory" subtitle="School supplies and equipment management" actions={<Btn variant="primary" icon={Plus}>Add Item</Btn>} />
      <TableWrapper>
        <thead><tr><Th>Item</Th><Th>ID</Th><Th>Category</Th><Th>Qty</Th><Th>Unit</Th><Th>Reorder Level</Th><Th>Unit Cost</Th><Th>Status</Th></tr></thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
              <Td><span className="font-medium text-slate-800">{item.name}</span></Td>
              <Td mono>{item.id}</Td>
              <Td><Badge variant="info">{item.category}</Badge></Td>
              <Td mono><span className={item.qty <= item.reorder ? "text-red-500 font-bold" : ""}>{item.qty}</span></Td>
              <Td>{item.unit}</Td>
              <Td mono>{item.reorder}</Td>
              <Td mono>${item.cost.toFixed(2)}</Td>
              <Td><StatusBadge status={item.status} /></Td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </div>
  );
}
