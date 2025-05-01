
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AmountStep from "./payment/AmountStep";
import PaymentMethodStep from "./payment/PaymentMethodStep";
import ConfirmationStep from "./payment/ConfirmationStep";
import SuccessStep from "./payment/SuccessStep";

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
  
  const handleNextStep = () => {
    if (paymentStep === "amount") {
      const numericMinInvestment = parseInt(minInvestment.replace(/\D/g, ""));
      
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
          <AmountStep 
            minInvestment={minInvestment}
            investmentAmount={investmentAmount}
            setInvestmentAmount={setInvestmentAmount}
            onNext={() => setPaymentStep("method")}
          />
        )}

        {paymentStep === "method" && (
          <PaymentMethodStep 
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            onNext={() => setPaymentStep("confirmation")}
          />
        )}

        {paymentStep === "confirmation" && (
          <ConfirmationStep 
            investmentName={investmentName}
            investmentAmount={investmentAmount}
            paymentMethod={paymentMethod}
          />
        )}

        {paymentStep === "success" && (
          <SuccessStep
            investmentName={investmentName}
            investmentAmount={investmentAmount}
          />
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
