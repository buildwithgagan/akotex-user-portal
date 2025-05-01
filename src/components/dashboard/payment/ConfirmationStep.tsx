
interface ConfirmationStepProps {
  investmentName: string;
  investmentAmount: string;
  paymentMethod: string | undefined;
}

const ConfirmationStep = ({ investmentName, investmentAmount, paymentMethod }: ConfirmationStepProps) => {
  return (
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
  );
};

export default ConfirmationStep;
