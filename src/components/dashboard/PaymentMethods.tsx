
import { useState } from "react";
import { CreditCard, Plus, Trash2, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<string | null>(null);

  const handleAddCard = (event: React.FormEvent) => {
    event.preventDefault();
    
    // In a real app, this would process the form data and call an API
    toast.success("Payment method added successfully");
    setIsAddCardOpen(false);
  };
  
  const openDeleteConfirm = (cardId: string) => {
    setCardToDelete(cardId);
    setIsDeleteConfirmOpen(true);
  };
  
  const handleRemoveCard = () => {
    if (cardToDelete) {
      setPaymentMethods(currentMethods => 
        currentMethods.filter(method => method.id !== cardToDelete)
      );
      toast.success("Payment method removed");
      setIsDeleteConfirmOpen(false);
      setCardToDelete(null);
    }
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

  const getCardIcon = (type: string) => {
    return <CreditCard className="h-5 w-5" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Your Payment Methods</h3>
        
        <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" /> Add Payment Method
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
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
                  <Input id="cardName" placeholder="John Doe" className="border-input" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border-input" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" className="border-input" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" className="border-input" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Add Card</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {paymentMethods.length > 0 ? (
          paymentMethods.map((method) => (
            <Card key={method.id} className="overflow-hidden border border-border hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getCardIcon(method.type)}
                    <CardTitle className="text-lg">{method.type} •••• {method.lastFourDigits}</CardTitle>
                  </div>
                  {method.isDefault && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                      <Check className="h-3 w-3 mr-1" /> Default
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="py-4">
                <CardDescription>Expires {method.expiryDate}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between border-t bg-gray-50 py-3">
                {!method.isDefault && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleSetDefault(method.id)}
                    className="hover:bg-gray-100"
                  >
                    Set as Default
                  </Button>
                )}
                {method.isDefault ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    disabled
                    className="text-gray-400"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Cannot Remove Default
                  </Button>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => openDeleteConfirm(method.id)}
                    className="text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
        ) : (
          <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <CreditCard className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No payment methods added yet</p>
              <Button 
                onClick={() => setIsAddCardOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Payment Method
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Dialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove Payment Method</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove this payment method? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex space-x-2 justify-end">
            <Button variant="outline" onClick={() => setIsDeleteConfirmOpen(false)}>Cancel</Button>
            <Button 
              variant="destructive" 
              onClick={handleRemoveCard}
            >
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentMethods;
