
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvestmentPerformance from "@/components/dashboard/InvestmentPerformance";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import PerformanceBreakdown from "@/components/dashboard/PerformanceBreakdown";
import MonthlyPerformanceChart from "@/components/dashboard/MonthlyPerformanceChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const PerformancePage = () => {
  return (
    <div className="py-6 space-y-6">
      <DashboardHeader title="Performance Analytics" description="Track and analyze your investment performance" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+17.36%</div>
            <p className="text-xs text-green-600">+2.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Annual Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8%</div>
            <p className="text-xs text-green-600">+1.2% YTD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$847.20</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Medium</div>
            <p className="text-xs text-amber-500">6.4 / 10</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Performance Over Time</CardTitle>
            <CardDescription>Tracking your investment growth</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <InvestmentPerformance />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceMetrics />
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-4">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Monthly Performance</CardTitle>
              <CardDescription>Performance breakdown by month</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quarterly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quarterly Performance</CardTitle>
              <CardDescription>Performance breakdown by quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyPerformanceChart isQuarterly={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="yearly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Yearly Performance</CardTitle>
              <CardDescription>Performance breakdown by year</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyPerformanceChart isYearly={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Performance Breakdown</CardTitle>
          <CardDescription>Asset class performance comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <PerformanceBreakdown />
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformancePage;
