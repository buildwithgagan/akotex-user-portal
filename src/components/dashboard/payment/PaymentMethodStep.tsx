
import { CreditCard } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface PaymentMethodStepProps {
  paymentMethod: string | undefined;
  setPaymentMethod: (method: string) => void;
  onNext: () => void;
}

const PaymentMethodStep = ({ paymentMethod, setPaymentMethod, onNext }: PaymentMethodStepProps) => {
  const handleContinue = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    onNext();
  };

  return (
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
  );
};

export default PaymentMethodStep;
