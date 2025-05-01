
import { AlertCircle, CheckCircle, Clock, Loader2, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type KycStatus = "not_started" | "in_progress" | "in_review" | "verified" | "rejected";

interface KycStatusProps {
  status: KycStatus;
}

const getStatusIcon = (status: KycStatus) => {
  switch (status) {
    case "verified":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "rejected":
      return <XCircle className="h-5 w-5 text-red-500" />;
    case "in_review":
      return <Clock className="h-5 w-5 text-amber-500" />;
    case "not_started":
      return <AlertCircle className="h-5 w-5 text-gray-500" />;
    case "in_progress":
      return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
  }
};

const getStatusColor = (status: KycStatus) => {
  switch (status) {
    case "not_started":
      return "bg-gray-100 text-gray-500";
    case "in_progress":
      return "bg-blue-100 text-blue-500";
    case "in_review":
      return "bg-amber-100 text-amber-500";
    case "verified":
      return "bg-green-100 text-green-500";
    case "rejected":
      return "bg-red-100 text-red-500";
  }
};

const getStatusText = (status: KycStatus) => {
  switch (status) {
    case "not_started":
      return "Not Started";
    case "in_progress":
      return "In Progress";
    case "in_review":
      return "In Review";
    case "verified":
      return "Verified";
    case "rejected":
      return "Rejected";
  }
};

const getStatusMessage = (status: KycStatus) => {
  switch (status) {
    case "not_started":
      return "Please complete your KYC verification to access all platform features.";
    case "in_progress":
      return "Please complete your KYC verification process.";
    case "in_review":
      return "We're reviewing your submitted documents. This usually takes 1-2 business days.";
    case "verified":
      return "Your identity has been successfully verified. You have access to all platform features.";
    case "rejected":
      return "We couldn't verify your identity with the provided documents. Please resubmit with clearer documents.";
  }
};

const KycStatus = ({ status }: KycStatusProps) => {
  const icon = getStatusIcon(status);
  const colorClass = getStatusColor(status);
  const statusText = getStatusText(status);
  const statusMessage = getStatusMessage(status);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">KYC Verification</CardTitle>
        <CardDescription>Know Your Customer verification status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3">
          {icon}
          <div>
            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}>
              {statusText}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {statusMessage}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {status === "not_started" && (
          <Button className="w-full">Begin Verification</Button>
        )}
        {status === "in_progress" && (
          <Button className="w-full">Continue Verification</Button>
        )}
        {status === "rejected" && (
          <Button className="w-full">Resubmit Documents</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default KycStatus;
