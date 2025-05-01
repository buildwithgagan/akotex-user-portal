
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard } from "lucide-react";

const BillingTab = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Billing information updated",
        description: "Your billing information has been saved successfully.",
        variant: "success",
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center">
                <CreditCard className="text-gray-500" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 04/2025</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
          <Button variant="outline" className="w-full">
            <CreditCard className="mr-2 h-4 w-4" />
            Add payment method
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>Manage your billing details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billingName">Name</Label>
              <Input id="billingName" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingEmail">Email</Label>
              <Input id="billingEmail" type="email" defaultValue="john.doe@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingAddress">Address</Label>
            <Input id="billingAddress" defaultValue="123 Main St" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billingCity">City</Label>
              <Input id="billingCity" defaultValue="San Francisco" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingState">State</Label>
              <Input id="billingState" defaultValue="CA" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingZip">ZIP / Postal code</Label>
              <Input id="billingZip" defaultValue="94105" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="mr-2">Cancel</Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BillingTab;
