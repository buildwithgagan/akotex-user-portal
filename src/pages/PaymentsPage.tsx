
import { useState } from "react";
import { CreditCard, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import PaymentMethods from "@/components/dashboard/PaymentMethods";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import BillingDetails from "@/components/dashboard/BillingDetails";

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState("payment-methods");
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">
          Manage your payment methods and view transaction history
        </p>
      </div>

      <Tabs 
        defaultValue="payment-methods" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="transaction-history">Transaction History</TabsTrigger>
          <TabsTrigger value="billing-details">Billing Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="payment-methods" className="space-y-4">
          <PaymentMethods />
        </TabsContent>
        
        <TabsContent value="transaction-history" className="space-y-4">
          <TransactionHistory />
        </TabsContent>
        
        <TabsContent value="billing-details" className="space-y-4">
          <BillingDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsPage;
