
import { FileText, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const KycStatus = () => {
  // This is a mock status - in a real app, this would come from your backend
  const status = "in_review"; // possible values: "not_started", "in_progress", "in_review", "verified", "rejected"
  
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className={`rounded-full p-2 ${
          status === "verified" 
            ? "bg-green-100 text-green-600" 
            : status === "rejected" 
            ? "bg-red-100 text-red-600" 
            : "bg-amber-100 text-amber-600"
        }`}>
          <FileText className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-medium">KYC Verification</h4>
          <p className="text-sm text-muted-foreground">
            {status === "not_started" && "Start your verification process to unlock all features."}
            {status === "in_progress" && "Continue your verification process."}
            {status === "in_review" && "Your documents are being reviewed. This may take 1-2 business days."}
            {status === "verified" && "Your identity has been verified. All features unlocked."}
            {status === "rejected" && "Your verification was rejected. Please resubmit with valid documents."}
          </p>
        </div>
      </div>

      {(status === "not_started" || status === "rejected") && (
        <Button className="w-full gap-2">
          <Upload className="h-4 w-4" />
          Start Verification
        </Button>
      )}

      {status === "in_progress" && (
        <Button className="w-full gap-2">
          <Upload className="h-4 w-4" />
          Continue Verification
        </Button>
      )}

      {status === "in_review" && (
        <div className="bg-amber-50 text-amber-700 p-3 rounded-md text-sm">
          Your documents are currently being reviewed by our team.
        </div>
      )}

      {status === "verified" && (
        <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm flex items-center gap-2">
          <Check className="h-4 w-4" />
          Verification complete
        </div>
      )}
    </div>
  );
};

export default KycStatus;
