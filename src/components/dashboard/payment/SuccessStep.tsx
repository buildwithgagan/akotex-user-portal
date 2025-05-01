
import { CheckCircle2 } from "lucide-react";

interface SuccessStepProps {
  investmentName: string;
  investmentAmount: string;
}

const SuccessStep = ({ investmentName, investmentAmount }: SuccessStepProps) => {
  return (
    <div className="py-6 flex flex-col items-center text-center">
      <div className="rounded-full bg-green-50 p-3 mb-4">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h3 className="font-medium text-lg mb-2">Investment Complete</h3>
      <p className="text-muted-foreground mb-4">
        You have successfully invested ${investmentAmount} in {investmentName}.
      </p>
    </div>
  );
};

export default SuccessStep;
