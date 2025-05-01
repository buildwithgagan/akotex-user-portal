
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentDialog from "@/components/dashboard/PaymentDialog";

const InvestmentOptions = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<{
    name: string;
    minInvestment: string;
  } | null>(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const options = [
    { 
      name: "ETFs",
      description: "A balanced mix of stock-based ETFs", 
      riskLevel: "Medium",
      minInvestment: "$1,000"
    },
    { 
      name: "Real Estate",
      description: "Property investments with stable returns", 
      riskLevel: "Low-Medium",
      minInvestment: "$2,500"
    },
    { 
      name: "Crypto",
      description: "Diversified cryptocurrency portfolio", 
      riskLevel: "High",
      minInvestment: "$500"
    },
  ];

  const handleInvestClick = (option) => {
    setSelectedOption(option);
    setPaymentDialogOpen(true);
  };
  
  const handlePaymentSuccess = () => {
    // Refresh or update the view as needed
    window.location.reload();
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <div 
          key={index} 
          className="border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => handleInvestClick(option)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">{option.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
            </div>
            <span className={`
              text-xs px-2 py-1 rounded-full
              ${option.riskLevel === "Low" ? "bg-green-100 text-green-700" : 
                option.riskLevel === "Medium" ? "bg-amber-100 text-amber-700" :
                option.riskLevel === "High" ? "bg-red-100 text-red-700" :
                "bg-blue-100 text-blue-700"}
            `}>
              {option.riskLevel}
            </span>
          </div>
        </div>
      ))}
      
      <Button 
        className="w-full mt-4 gap-2 bg-akotex-red hover:bg-akotex-darkred"
        onClick={() => navigate("/investments")}
      >
        <CreditCard className="h-4 w-4" />
        View More Investment Options
      </Button>

      {selectedOption && (
        <PaymentDialog
          open={paymentDialogOpen}
          onOpenChange={setPaymentDialogOpen}
          investmentName={selectedOption.name}
          minInvestment={selectedOption.minInvestment}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default InvestmentOptions;
