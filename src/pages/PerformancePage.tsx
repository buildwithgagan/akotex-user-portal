
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, TrendingUp, ChartPieIcon, CalendarDays, History } from "lucide-react";
import MonthlyPerformanceChart from "@/components/dashboard/MonthlyPerformanceChart";
import PerformanceMetrics from "@/components/dashboard/PerformanceMetrics";
import PerformanceBreakdown from "@/components/dashboard/PerformanceBreakdown";
import AssetClassPerformance from "@/components/dashboard/AssetClassPerformance";
import InvestmentRecommendations from "@/components/dashboard/InvestmentRecommendations";
import HistoricalTrendsChart from "@/components/dashboard/HistoricalTrendsChart";
import MarketComparisonChart from "@/components/dashboard/MarketComparisonChart";

const PerformancePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance Analysis</h1>
        <p className="text-muted-foreground mt-2">
          Understanding market trends and investment performance to make informed decisions
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">Market Overview</h2>
            <p className="text-muted-foreground mb-4">
              Over the past year, we have witnessed significant fluctuations across various asset classes. 
              The market has shown resilience despite global economic challenges, with certain sectors 
              demonstrating remarkable growth potential.
            </p>
            <p className="text-muted-foreground">
              ETFs and Real Estate investments have consistently outperformed market expectations, 
              showing strong returns with relatively low volatility. Meanwhile, cryptocurrency 
              markets have experienced higher volatility but also higher potential returns for 
              investors willing to accept the associated risks.
            </p>
          </div>
          <div className="bg-muted/20 p-6 md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="h-5 w-5 text-akotex-red" />
              <h3 className="text-xl font-medium">Key Performance Highlights</h3>
            </div>
            <ul className="space-y-2 list-disc pl-5">
              <li>ETFs showing 14.2% annualized return with low volatility</li>
              <li>Real Estate investments up 9.8% year-over-year</li>
              <li>Technology sector outpacing broader market indices</li>
              <li>Bonds providing steady but modest 5.7% returns</li>
              <li>Cryptocurrency exhibiting high volatility with 28.5% potential returns</li>
            </ul>
          </div>
        </div>
      </Card>

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

      <Card>
        <CardHeader>
          <CardTitle>Investment Landscape Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              Our analysis of the current investment landscape reveals several key trends that investors should consider 
              when allocating assets. Market data indicates that diversification remains a crucial strategy, with a 
              balanced approach across different asset classes showing the most consistent results.
            </p>
            <p>
              <strong>ETFs and Index Funds:</strong> These continue to provide excellent exposure to broad market segments 
              with lower fees and good liquidity. Their consistent performance makes them suitable core holdings in most portfolios.
            </p>
            <p>
              <strong>Real Estate:</strong> Despite interest rate fluctuations, commercial and residential real estate has shown 
              remarkable resilience, particularly in high-demand metropolitan areas and emerging markets.
            </p>
            <p>
              <strong>Cryptocurrency:</strong> While demonstrating the highest volatility among all asset classes, cryptocurrencies 
              have also provided significant returns for risk-tolerant investors. We recommend limited exposure based on individual 
              risk tolerance.
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert className="bg-akotex-red bg-opacity-5 border-akotex-red">
        <InfoIcon className="h-4 w-4 text-akotex-red" />
        <AlertTitle className="text-akotex-red font-medium">Investment Insight</AlertTitle>
        <AlertDescription className="text-sm">
          Based on current market trends and historical data, ETFs and Real Estate are showing strong performance over the last year. Consider increasing allocation to these asset classes based on your risk profile.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-lg font-semibold">Historical Trends</CardTitle>
            <CardDescription>10-year performance analysis</CardDescription>
          </div>
          <History className="h-5 w-5 text-akotex-red" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-96">
            <HistoricalTrendsChart />
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Historical analysis shows that over the past decade, market cycles have lasted approximately 3-4 years on average. 
              The data indicates that investors who maintained positions through volatility typically outperformed 
              those who attempted to time market movements.
            </p>
            <p className="text-sm text-muted-foreground">
              During economic downturns, diversified portfolios with exposure to multiple asset classes demonstrated 
              greater resilience and faster recovery rates compared to concentrated positions.
            </p>
          </div>
        </CardContent>
      </Card>

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
            <CardTitle className="text-lg font-semibold">Market Comparison</CardTitle>
            <CardDescription>Performance against major market indices</CardDescription>
          </div>
          <TrendingUp className="h-5 w-5 text-akotex-red" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[400px]">
            <MarketComparisonChart />
          </div>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              When comparing our recommended portfolio allocations against major market indices, we observe 
              consistent outperformance with lower volatility. This is primarily attributed to our strategic 
              asset allocation model and dynamic rebalancing approach that adapts to changing market conditions.
            </p>
          </div>
        </CardContent>
      </Card>

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
        <CardHeader>
          <CardTitle>Investment Strategy Recommendations</CardTitle>
          <CardDescription>
            Based on comprehensive market analysis and historical performance data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our investment strategy recommendations are formulated using a combination of technical analysis, 
            fundamental research, and macroeconomic indicators. The following guidelines are designed to help 
            investors optimize their portfolios based on their individual risk tolerance and financial goals.
          </p>
          
          <h3 className="text-lg font-medium mt-4">Recommended Asset Allocation</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium">Conservative Profile</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>ETFs: 40%</li>
                <li>Bonds: 30%</li>
                <li>Real Estate: 20%</li>
                <li>Cash: 10%</li>
                <li>Crypto: 0%</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium">Moderate Profile</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>ETFs: 50%</li>
                <li>Real Estate: 25%</li>
                <li>Bonds: 15%</li>
                <li>Stocks: 5%</li>
                <li>Crypto: 3%</li>
                <li>Cash: 2%</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium">Aggressive Profile</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>ETFs: 40%</li>
                <li>Real Estate: 20%</li>
                <li>Stocks: 20%</li>
                <li>Crypto: 15%</li>
                <li>Bonds: 5%</li>
                <li>Cash: 0%</li>
              </ul>
            </div>
          </div>
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
