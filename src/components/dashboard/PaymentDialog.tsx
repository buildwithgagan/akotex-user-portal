
import { useState } from "react";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  investmentName: string;
  minInvestment: string;
  onSuccess: () => void;
}

const PaymentDialog = ({ open, onOpenChange, investmentName, minInvestment, onSuccess }: PaymentDialogProps) => {
  const [paymentStep, setPaymentStep] = useState<"amount" | "method" | "confirmation" | "success">("amount");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(undefined);
  
  const numericMinInvestment = parseInt(minInvestment.replace(/\D/g, ""));
  
  const handleNextStep = () => {
    if (paymentStep === "amount") {
      if (!investmentAmount) {
        toast.error("Please enter an investment amount");
        return;
      }
      
      const amount = parseFloat(investmentAmount);
      if (isNaN(amount) || amount < numericMinInvestment) {
        toast.error(`Minimum investment amount is ${minInvestment}`);
        return;
      }
      
      setPaymentStep("method");
    } else if (paymentStep === "method") {
      if (!paymentMethod) {
        toast.error("Please select a payment method");
        return;
      }
      setPaymentStep("confirmation");
    } else if (paymentStep === "confirmation") {
      // In a real app, this would process the payment
      toast.success("Investment payment successful!");
      setPaymentStep("success");
    } else if (paymentStep === "success") {
      // Reset and close
      onSuccess();
      resetDialog();
    }
  };
  
  const resetDialog = () => {
    setPaymentStep("amount");
    setInvestmentAmount("");
    setPaymentMethod(undefined);
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) {
        resetDialog();
      } else {
        onOpenChange(true);
      }
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {paymentStep === "success" ? "Investment Successful!" : `Invest in ${investmentName}`}
          </DialogTitle>
          <DialogDescription>
            {paymentStep === "amount" && "Enter the amount you'd like to invest."}
            {paymentStep === "method" && "Choose your payment method."}
            {paymentStep === "confirmation" && "Please confirm your investment details."}
            {paymentStep === "success" && "Your investment has been successfully processed."}
          </DialogDescription>
        </DialogHeader>

        {paymentStep === "amount" && (
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="investmentAmount">Investment Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <Input
                  id="investmentAmount"
                  type="number"
                  placeholder={minInvestment.replace(/\D/g, "")}
                  className="pl-7"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum investment: {minInvestment}
              </p>
            </div>
          </div>
        )}

        {paymentStep === "method" && (
          <div className="grid gap-4 py-4">
            <Label>Select Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-5 w-5 text-akotex-red" /> Credit / Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="cursor-pointer">Bank Transfer</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {paymentStep === "confirmation" && (
          <div className="grid gap-4 py-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Investment</span>
                <span className="font-medium">{investmentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">${investmentAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">
                  {paymentMethod === "card" ? "Credit/Debit Card" : "Bank Transfer"}
                </span>
              </div>
              <div className="pt-2 mt-2 border-t text-xs text-muted-foreground">
                <p>By proceeding, you agree to our terms and investment risk disclaimer.</p>
              </div>
            </div>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="rounded-full bg-green-50 p-3 mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Investment Complete</h3>
            <p className="text-muted-foreground mb-4">
              You have successfully invested ${investmentAmount} in {investmentName}.
            </p>
          </div>
        )}

        <DialogFooter>
          {paymentStep !== "success" ? (
            <>
              <Button variant="outline" onClick={resetDialog}>Cancel</Button>
              <Button 
                onClick={handleNextStep} 
                className="bg-akotex-red hover:bg-akotex-darkred"
              >
                {paymentStep === "confirmation" ? "Confirm & Pay" : "Continue"}
              </Button>
            </>
          ) : (
            <Button 
              onClick={handleNextStep} 
              className="bg-akotex-red hover:bg-akotex-darkred w-full"
            >
              View My Investments
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
