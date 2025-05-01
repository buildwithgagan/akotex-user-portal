
import { useState } from "react";
import { CreditCard, Download, Plus, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <div className="bg-white rounded-lg p-1 shadow-sm border">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" value="payment-methods">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment Methods
            </TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" value="transaction-history">
              <Wallet className="h-4 w-4 mr-2" />
              Transaction History
            </TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" value="billing-details">
              <Download className="h-4 w-4 mr-2" />
              Billing Details
            </TabsTrigger>
          </TabsList>
        </div>
        
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
