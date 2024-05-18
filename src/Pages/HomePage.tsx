import { columns } from "@/Components/ui/columns";
import { DataTable } from "@/Components/ui/data-table";
import { Payment } from "@/lib/type";

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

const HomePage = () => {
  return (
    <div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

export default HomePage;
