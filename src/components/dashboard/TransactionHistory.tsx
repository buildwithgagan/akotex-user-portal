
import { useState } from "react";
import { Download, Search, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const transactions = [
  {
    id: "T12345",
    date: "2025-04-28",
    description: "Monthly Investment Deposit",
    amount: 5000,
    status: "completed"
  },
  {
    id: "T12344",
    date: "2025-04-15",
    description: "Dividend Payment",
    amount: 750,
    status: "completed"
  },
  {
    id: "T12343",
    date: "2025-04-01",
    description: "Portfolio Rebalance Fee",
    amount: -75,
    status: "completed"
  },
  {
    id: "T12342",
    date: "2025-03-28",
    description: "Monthly Investment Deposit",
    amount: 5000,
    status: "completed"
  },
  {
    id: "T12341",
    date: "2025-03-15",
    description: "Dividend Payment",
    amount: 720,
    status: "completed"
  },
  {
    id: "T12340",
    date: "2025-03-05",
    description: "Advisory Fee",
    amount: -250,
    status: "completed"
  },
];

const TransactionHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.date.includes(searchQuery)
  );

  return (
    <div className="space-y-4">
      <Card className="border overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50 pb-4">
          <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-8 w-[250px] border-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Export as Excel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[120px]">Transaction ID</TableHead>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="hover:bg-gray-50 border-b">
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className={`text-right whitespace-nowrap font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        <span className="flex items-center justify-end">
                          {transaction.amount >= 0 ? (
                            <ArrowUp className="w-3 h-3 mr-1 inline" />
                          ) : (
                            <ArrowDown className="w-3 h-3 mr-1 inline" />
                          )}
                          ${Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700">
                          {transaction.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      No transactions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionHistory;
