
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const RecentTransactions = () => {
  const transactions = [
    {
      id: "TX123456",
      date: "2025-04-27",
      type: "Deposit",
      amount: "$5,000.00",
      status: "Completed"
    },
    {
      id: "TX123455",
      date: "2025-04-15",
      type: "Investment",
      amount: "$2,500.00",
      status: "Completed"
    },
    {
      id: "TX123454",
      date: "2025-04-01",
      type: "Deposit",
      amount: "$1,000.00",
      status: "Completed"
    },
    {
      id: "TX123453",
      date: "2025-03-20",
      type: "Investment",
      amount: "$3,000.00",
      status: "Completed"
    }
  ];

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell className={`
                ${transaction.status === "Completed" ? "text-green-600" : 
                transaction.status === "Pending" ? "text-amber-600" : 
                transaction.status === "Failed" ? "text-red-600" : ""}
              `}>
                {transaction.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="flex justify-center mt-4">
        <Button variant="outline" size="sm">View All Transactions</Button>
      </div>
    </div>
  );
};

export default RecentTransactions;
