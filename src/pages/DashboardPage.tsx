
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Upload, PieChart, CreditCard, Bell, FileText, Settings, User } from "lucide-react";
import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import InvestmentOptions from "@/components/dashboard/InvestmentOptions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import KycStatus from "@/components/dashboard/KycStatus";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <DashboardHeader />
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="investments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Investment Options</CardTitle>
              <CardDescription>Choose your preferred investment vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Investment options content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Reports</CardTitle>
              <CardDescription>Track your investment performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Performance reports content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
              <CardDescription>Set up one-time or recurring investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Payment options content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>View and download your reports and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Documents content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Settings content will go here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
