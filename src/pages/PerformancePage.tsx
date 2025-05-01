
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, TrendingUp, ChartPieIcon } from "lucide-react";
import MonthlyPerformanceChart from "@/components/dashboard/MonthlyPerformanceChart";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import PerformanceBreakdown from "@/components/dashboard/PerformanceBreakdown";
import AssetClassPerformance from "@/components/dashboard/AssetClassPerformance";
import InvestmentRecommendations from "@/components/dashboard/InvestmentRecommendations";

const PerformancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
        <p className="text-muted-foreground">Track your investment performance over time</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Return on Investment</CardTitle>
            <CardDescription>Year to date performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">+14.8%</div>
            <p className="text-xs text-muted-foreground">+2.5% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Volatility</CardTitle>
            <CardDescription>Risk measurement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5.2%</div>
            <p className="text-xs text-muted-foreground">-0.8% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sharpe Ratio</CardTitle>
            <CardDescription>Risk-adjusted return</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.9</div>
            <p className="text-xs text-muted-foreground">+0.3 from last period</p>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-akotex-red bg-opacity-5 border-akotex-red">
        <InfoIcon className="h-4 w-4 text-akotex-red" />
        <AlertTitle className="text-akotex-red font-medium">Investment Insight</AlertTitle>
        <AlertDescription className="text-sm">
          Based on current market trends and historical data, ETFs and Real Estate are showing strong performance over the last year. Consider increasing allocation to these asset classes based on your risk profile.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
              <CardDescription>Your portfolio performance over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <MonthlyPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="quarterly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Performance</CardTitle>
              <CardDescription>Your portfolio performance over the past quarters</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <MonthlyPerformanceChart isQuarterly={true} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="yearly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Performance</CardTitle>
              <CardDescription>Your portfolio performance over the past years</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <MonthlyPerformanceChart isYearly={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceMetrics />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Performance Breakdown</CardTitle>
            <CardDescription>By asset class</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <PerformanceBreakdown />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-lg font-semibold">Asset Class Performance</CardTitle>
            <CardDescription>Performance comparison across different time periods</CardDescription>
          </div>
          <TrendingUp className="h-5 w-5 text-akotex-red" />
        </CardHeader>
        <CardContent className="pt-4">
          <AssetClassPerformance />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-lg font-semibold">Where to Invest?</CardTitle>
            <CardDescription>Strategic investment recommendations based on market analysis</CardDescription>
          </div>
          <ChartPieIcon className="h-5 w-5 text-akotex-red" />
        </CardHeader>
        <CardContent className="pt-4">
          <InvestmentRecommendations />
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformancePage;
