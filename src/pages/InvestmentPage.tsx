
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, CreditCard, Info, PiggyBank } from "lucide-react";
import InvestmentOptions from "@/components/dashboard/InvestmentOptions";
import InvestmentPerformance from "@/components/dashboard/InvestmentPerformance";

const InvestmentPage = () => {
  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Investments</h1>
          <p className="text-muted-foreground">Browse and manage your investments</p>
        </div>
        <Button className="bg-akotex-red hover:bg-akotex-darkred">
          <PiggyBank className="mr-2 h-4 w-4" /> New Investment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,840.00</div>
            <p className="text-xs text-muted-foreground">Across all investment options</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$30,265.50</div>
            <p className="text-xs text-green-500">+$4,425.50 (+17.1%)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Expected Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5% - 12.3%</div>
            <p className="text-xs text-muted-foreground">Annual projected returns</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Investment Performance</CardTitle>
            <CardDescription>Track the performance of your investments over time</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <InvestmentPerformance />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Investment Strategy</CardTitle>
            <CardDescription>Your current allocation strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Strategy Type</span>
                <span className="font-medium">Balanced Growth</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Risk Profile</span>
                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Medium</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Time Horizon</span>
                <span className="font-medium">5+ years</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Info className="mr-2 h-4 w-4" /> Review Strategy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Available Investment Options</CardTitle>
          <CardDescription>Choose where to diversify your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <InvestmentOptions />
          
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Set up a recurring investment</h3>
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" /> Investment Calculator
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p className="mb-3">Setting up a recurring investment helps build your portfolio consistently over time.</p>
              <Button className="bg-akotex-red hover:bg-akotex-darkred">
                <CreditCard className="mr-2 h-4 w-4" /> Set Up Recurring Payment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentPage;
