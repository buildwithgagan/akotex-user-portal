
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface AmountStepProps {
  minInvestment: string;
  investmentAmount: string;
  setInvestmentAmount: (amount: string) => void;
  onNext: () => void;
}

const AmountStep = ({ minInvestment, investmentAmount, setInvestmentAmount, onNext }: AmountStepProps) => {
  const numericMinInvestment = parseInt(minInvestment.replace(/\D/g, ""));
  
  const handleContinue = () => {
    if (!investmentAmount) {
      toast.error("Please enter an investment amount");
      return;
    }
    
    const amount = parseFloat(investmentAmount);
    if (isNaN(amount) || amount < numericMinInvestment) {
      toast.error(`Minimum investment amount is ${minInvestment}`);
      return;
    }
    
    onNext();
  };

  return (
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
  );
};

export default AmountStep;
