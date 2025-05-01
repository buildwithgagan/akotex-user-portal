
import { useState } from "react";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      type: "Visa",
      lastFourDigits: "4242",
      expiryDate: "12/2025",
      isDefault: true,
    },
    {
      id: "2",
      type: "Mastercard",
      lastFourDigits: "5555",
      expiryDate: "09/2026",
      isDefault: false,
    }
  ]);
  
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const handleAddCard = (event: React.FormEvent) => {
    event.preventDefault();
    
    // In a real app, this would process the form data and call an API
    toast.success("Payment method added successfully");
    setIsAddCardOpen(false);
  };
  
  const handleRemoveCard = (cardId: string) => {
    setPaymentMethods(currentMethods => 
      currentMethods.filter(method => method.id !== cardId)
    );
    toast.success("Payment method removed");
  };
  
  const handleSetDefault = (cardId: string) => {
    setPaymentMethods(currentMethods => 
      currentMethods.map(method => ({
        ...method,
        isDefault: method.id === cardId
      }))
    );
    toast.success("Default payment method updated");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Your Payment Methods</h3>
        
        <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
              <DialogDescription>
                Enter your card details to add a new payment method.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleAddCard}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Card</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <Card key={method.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <CardTitle>{method.type} ending in {method.lastFourDigits}</CardTitle>
                </div>
                {method.isDefault && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                    Default
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <CardDescription>Expires {method.expiryDate}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              {!method.isDefault && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleSetDefault(method.id)}
                >
                  Set as Default
                </Button>
              )}
              {method.isDefault ? (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  disabled
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveCard(method.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
