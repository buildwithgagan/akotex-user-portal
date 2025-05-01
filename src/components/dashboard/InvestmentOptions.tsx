
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const InvestmentOptions = () => {
  const options = [
    { 
      name: "ETFs",
      description: "A balanced mix of stock-based ETFs", 
      riskLevel: "Medium"
    },
    { 
      name: "Real Estate",
      description: "Property investments with stable returns", 
      riskLevel: "Low-Medium"
    },
    { 
      name: "Crypto",
      description: "Diversified cryptocurrency portfolio", 
      riskLevel: "High"
    },
  ];

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <div 
          key={index} 
          className="border rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer"
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
      
      <Button className="w-full mt-4 gap-2 bg-akotex-red hover:bg-akotex-darkred">
        <CreditCard className="h-4 w-4" />
        Invest Now
      </Button>
    </div>
  );
};

export default InvestmentOptions;
