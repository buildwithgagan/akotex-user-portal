
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AssetClassPerformance = () => {
  // Sample data for different time periods
  const performanceData = {
    threeMonths: [
      { assetClass: "ETFs", performance: 4.8, trend: "up", recommendation: "Strong Buy" },
      { assetClass: "Real Estate", performance: 2.3, trend: "up", recommendation: "Buy" },
      { assetClass: "Crypto", performance: 12.5, trend: "up", recommendation: "Hold" },
      { assetClass: "Stocks", performance: 3.6, trend: "up", recommendation: "Buy" },
      { assetClass: "Bonds", performance: 1.2, trend: "up", recommendation: "Hold" }
    ],
    sixMonths: [
      { assetClass: "ETFs", performance: 8.3, trend: "up", recommendation: "Strong Buy" },
      { assetClass: "Real Estate", performance: 5.7, trend: "up", recommendation: "Buy" },
      { assetClass: "Crypto", performance: -3.2, trend: "down", recommendation: "Sell" },
      { assetClass: "Stocks", performance: 7.1, trend: "up", recommendation: "Buy" },
      { assetClass: "Bonds", performance: 2.4, trend: "up", recommendation: "Hold" }
    ],
    oneYear: [
      { assetClass: "ETFs", performance: 14.2, trend: "up", recommendation: "Strong Buy" },
      { assetClass: "Real Estate", performance: 9.8, trend: "up", recommendation: "Buy" },
      { assetClass: "Crypto", performance: 28.5, trend: "up", recommendation: "Hold" },
      { assetClass: "Stocks", performance: 12.3, trend: "up", recommendation: "Buy" },
      { assetClass: "Bonds", performance: 5.7, trend: "up", recommendation: "Hold" }
    ],
    fiveYears: [
      { assetClass: "ETFs", performance: 68.7, trend: "up", recommendation: "Buy" },
      { assetClass: "Real Estate", performance: 42.3, trend: "up", recommendation: "Buy" },
      { assetClass: "Crypto", performance: 412.6, trend: "up", recommendation: "Hold" },
      { assetClass: "Stocks", performance: 58.9, trend: "up", recommendation: "Buy" },
      { assetClass: "Bonds", performance: 19.8, trend: "up", recommendation: "Hold" }
    ]
  };

  const renderPerformanceTable = (data) => (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset Class</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Trend</TableHead>
            <TableHead>Recommendation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.assetClass}</TableCell>
              <TableCell className={item.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                {item.trend === 'up' ? '+' : ''}{item.performance}%
              </TableCell>
              <TableCell>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${item.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {item.trend === 'up' ? '↑ Upward' : '↓ Downward'}
                </span>
              </TableCell>
              <TableCell className="font-medium">
                <span className={`
                  ${item.recommendation === 'Strong Buy' ? 'text-green-600' : ''}
                  ${item.recommendation === 'Buy' ? 'text-green-500' : ''}
                  ${item.recommendation === 'Hold' ? 'text-amber-500' : ''}
                  ${item.recommendation === 'Sell' ? 'text-red-500' : ''}
                `}>
                  {item.recommendation}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="space-y-4">
      <Tabs defaultValue="3m">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="3m">3 Months</TabsTrigger>
          <TabsTrigger value="6m">6 Months</TabsTrigger>
          <TabsTrigger value="1y">1 Year</TabsTrigger>
          <TabsTrigger value="5y">5 Years</TabsTrigger>
        </TabsList>
        <TabsContent value="3m">
          {renderPerformanceTable(performanceData.threeMonths)}
          <p className="mt-4 text-sm text-muted-foreground">
            ETFs show the strongest consistent performance in the short term with relatively low volatility.
          </p>
        </TabsContent>
        <TabsContent value="6m">
          {renderPerformanceTable(performanceData.sixMonths)}
          <p className="mt-4 text-sm text-muted-foreground">
            ETFs and stocks maintain steady growth while crypto shows increased volatility over this period.
          </p>
        </TabsContent>
        <TabsContent value="1y">
          {renderPerformanceTable(performanceData.oneYear)}
          <p className="mt-4 text-sm text-muted-foreground">
            All asset classes show positive returns over the one-year period, with crypto showing the highest returns but also the highest volatility.
          </p>
        </TabsContent>
        <TabsContent value="5y">
          {renderPerformanceTable(performanceData.fiveYears)}
          <p className="mt-4 text-sm text-muted-foreground">
            Long-term performance shows significant growth across all asset classes, with crypto leading but ETFs providing the most consistent risk-adjusted returns.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssetClassPerformance;
