
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import InvestmentOptions from "@/components/dashboard/InvestmentOptions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import KycStatus from "@/components/dashboard/KycStatus";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const DashboardPage = () => {
  return (
    <div className="py-6 space-y-6">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,840.00</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$30,265.50</div>
            <p className="text-xs text-muted-foreground">+4.3% from initial investment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,420.40</div>
            <p className="text-xs text-muted-foreground">+2.5% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">KYC Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">In Review</div>
            <p className="text-xs text-muted-foreground">Submitted 2 days ago</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Portfolio Overview</CardTitle>
            <CardDescription>Your investment allocation and performance</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <PortfolioOverview />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">KYC Verification</CardTitle>
            <CardDescription>Complete your verification to unlock all features</CardDescription>
          </CardHeader>
          <CardContent>
            <KycStatus />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Investment Options</CardTitle>
            <CardDescription>Choose where to invest next</CardDescription>
          </CardHeader>
          <CardContent>
            <InvestmentOptions />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
            <CardDescription>Your recent investment activities</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
