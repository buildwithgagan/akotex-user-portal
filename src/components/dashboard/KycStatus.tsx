
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type KycStatusType = "not_started" | "in_progress" | "in_review" | "verified" | "rejected";

const KycStatus = () => {
  // For demo purposes - this would typically come from an API
  const kycStatus: KycStatusType = "in_review";
  
  const getStatusColor = () => {
    if (kycStatus === "verified") return "text-green-500";
    else if (kycStatus === "rejected") return "text-red-500";
    else return "text-amber-500";
  };
  
  const getProgressValue = () => {
    switch (kycStatus) {
      case "not_started":
        return 0;
      case "in_progress":
        return 40;
      case "in_review":
        return 80;
      case "verified":
        return 100;
      case "rejected":
        return 70;
      default:
        return 0;
    }
  };
  
  return (
    <div className="space-y-4">
      {(kycStatus === "not_started" || kycStatus === "rejected") && (
        <div className="text-center">
          <Button className="w-full" variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Start KYC Process
          </Button>
        </div>
      )}
      
      {kycStatus === "in_progress" && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Continue your verification</p>
          <Button className="w-full">
            Continue KYC
          </Button>
        </div>
      )}
      
      {kycStatus === "verified" && (
        <div className="text-center">
          <p className="text-sm text-green-500 font-medium">
            Your identity has been verified ✓
          </p>
        </div>
      )}
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Verification Progress</span>
          <span className={getStatusColor()}>{kycStatus.replace("_", " ").toUpperCase()}</span>
        </div>
        <Progress value={getProgressValue()} className="h-2" />
      </div>
      
      <div className="space-y-1 text-sm">
        <p className="text-muted-foreground">Required documents:</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li className={kycStatus !== "not_started" ? "text-green-500" : ""}>
            Government-issued ID
          </li>
          <li className={["in_review", "verified"].includes(kycStatus as any) ? "text-green-500" : ""}>
            Proof of address
          </li>
          <li className={kycStatus === "verified" ? "text-green-500" : ""}>
            Selfie verification
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KycStatus;
