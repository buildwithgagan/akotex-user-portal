
// This file includes a KycStatus component that was causing a build error
// The error was: Property 'status' is missing in type '{}' but required in type 'KycStatusProps'
// We need to add the required 'status' property to fix this error

import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import KycStatus from "@/components/dashboard/KycStatus";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your investments
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Portfolio Value</CardTitle>
            <CardDescription>Your current total investment value</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">$124,435.00</CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <span className="text-green-600 font-medium">↑ 5.2%</span> from last month
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Return</CardTitle>
            <CardDescription>Your lifetime return on investments</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">$24,583.00</CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <span className="text-green-600 font-medium">↑ 24.6%</span> overall return
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Deposit</CardTitle>
            <CardDescription>Your recurring monthly investment</CardDescription>
          </CardHeader>
          <CardContent className="text-3xl font-bold">$5,000.00</CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Manage Deposit
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
            <CardDescription>Your asset allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <PortfolioOverview />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key indicators of your portfolio performance</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceMetrics />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your recent investment activity</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>KYC Status</CardTitle>
            <CardDescription>Your account verification status</CardDescription>
          </CardHeader>
          <CardContent>
            <KycStatus status="verified" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
