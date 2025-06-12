
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, CreditCard, PieChart, Home, Calendar, TrendingUp, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import PaymentDialog from "@/components/dashboard/PaymentDialog";

const InvestmentOptionsPage = () => {
  const navigate = useNavigate();
  const [selectedInvestment, setSelectedInvestment] = useState<{
    name: string;
    minInvestment: string;
  } | null>(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const etfOptions = [
    {
      name: "Global Market ETF",
      description: "Broad exposure to global stock markets",
      minInvestment: "$1,000",
      returns: "8% - 11%",
      riskLevel: "Medium",
      features: ["Diversified exposure", "Quarterly dividends", "Low expense ratio"]
    },
    {
      name: "Tech Sector ETF",
      description: "Focused on technology growth companies",
      minInvestment: "$1,500",
      returns: "10% - 14%",
      riskLevel: "Medium-High",
      features: ["Industry leaders", "High growth potential", "Innovation exposure"]
    },
    {
      name: "Dividend Income ETF",
      description: "Focus on stable dividend-paying companies",
      minInvestment: "$1,000",
      returns: "6% - 9%",
      riskLevel: "Low-Medium",
      features: ["Regular income", "Lower volatility", "Established companies"]
    }
  ];
  
  const realEstateOptions = [
    {
      name: "Commercial Property Fund",
      description: "Diversified commercial real estate portfolio",
      minInvestment: "$2,500",
      returns: "7% - 9%",
      riskLevel: "Medium",
      features: ["Regular rental income", "Property appreciation", "Professional management"]
    },
    {
      name: "Residential REIT",
      description: "Investments in multi-family residential properties",
      minInvestment: "$3,000",
      returns: "6% - 8%",
      riskLevel: "Low-Medium",
      features: ["Stable occupancy rates", "Monthly distributions", "Urban focus"]
    },
    {
      name: "Development Projects",
      description: "Funding for new real estate developments",
      minInvestment: "$5,000",
      returns: "9% - 12%",
      riskLevel: "Medium-High",
      features: ["Higher growth potential", "Project diversification", "Exit strategy"]
    }
  ];
  
  const cryptoOptions = [
    {
      name: "Blue-Chip Crypto Index",
      description: "Portfolio of established cryptocurrencies",
      minInvestment: "$500",
      returns: "12% - 20%",
      riskLevel: "High",
      features: ["Major cryptocurrencies", "Weighted allocation", "Regular rebalancing"]
    },
    {
      name: "DeFi Innovation Fund",
      description: "Exposure to decentralized finance protocols",
      minInvestment: "$1,000",
      returns: "18% - 25%",
      riskLevel: "Very High",
      features: ["Cutting-edge protocols", "Staking rewards", "Governance tokens"]
    },
    {
      name: "Crypto-Mining Operations",
      description: "Investment in mining infrastructure",
      minInvestment: "$2,000",
      returns: "15% - 22%",
      riskLevel: "High",
      features: ["Hardware ownership", "Daily mining rewards", "Energy-efficient operations"]
    }
  ];

  const handleInvestClick = (option: { name: string; minInvestment: string }) => {
    setSelectedInvestment(option);
    setPaymentDialogOpen(true);
  };
  
  const handlePaymentSuccess = () => {
    navigate('/dashboard/investments');
  };

  const renderInvestmentCard = (option, index) => (
    <Card key={index} className="overflow-hidden border border-gray-100 hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <CardTitle>{option.name}</CardTitle>
        <CardDescription>{option.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Minimum Investment</span>
            <span className="font-semibold">{option.minInvestment}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Expected Annual Return</span>
            <span className="text-akotex-red font-semibold">{option.returns}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Risk Level</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              option.riskLevel.includes("Low") ? "bg-green-100 text-green-800" : 
              option.riskLevel.includes("Medium") ? "bg-amber-100 text-amber-800" : 
              "bg-red-100 text-red-800"
            }`}>
              {option.riskLevel}
            </span>
          </div>
          <div className="pt-3">
            <h4 className="text-sm font-medium mb-2">Key Features</h4>
            <ul className="space-y-1">
              {option.features.map((feature, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-akotex-red" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 pt-4">
        <Button 
          className="w-full bg-akotex-red hover:bg-akotex-darkred"
          onClick={() => handleInvestClick(option)}
        >
          <CreditCard className="mr-2 h-4 w-4" /> 
          Invest Now
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Investment Options</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of investment products designed to meet your financial goals and risk tolerance.
          </p>
        </div>
        
        <Tabs defaultValue="etf" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-xl h-full border">
              <TabsTrigger value="etf" className="flex items-center gap-2 py-3">
                <PieChart className="h-4 w-4" />
                <span className="hidden sm:inline">Indices & ETFs</span>
                <span className="sm:hidden">ETFs</span>
              </TabsTrigger>
              <TabsTrigger value="realestate" className="flex items-center gap-2 py-3">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Real Estate</span>
                <span className="sm:hidden">Real Estate</span>
              </TabsTrigger>
              <TabsTrigger value="crypto" className="flex items-center gap-2 py-3">
                <Wallet className="h-4 w-4" />
                <span className="hidden sm:inline">Crypto Assets</span>
                <span className="sm:hidden">Crypto</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="etf">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-akotex-red/10 p-4 rounded-full">
                  <PieChart className="h-6 w-6 text-akotex-red" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Indices & ETFs</h2>
                  <p className="text-gray-600">Diversified portfolios of global indices and ETFs</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-4xl">
                Our ETF investments provide broad market exposure with the liquidity and transparency 
                of exchange-traded funds. These portfolios are designed for steady growth and consistent income.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etfOptions.map((option, index) => renderInvestmentCard(option, index))}
            </div>
          </TabsContent>
          
          <TabsContent value="realestate">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-akotex-red/10 p-4 rounded-full">
                  <Home className="h-6 w-6 text-akotex-red" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Real Estate</h2>
                  <p className="text-gray-600">Premium real estate investment opportunities</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-4xl">
                Our real estate investments give you access to high-quality property investments without 
                the hassle of direct ownership. Benefit from professional management and diversified property exposure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realEstateOptions.map((option, index) => renderInvestmentCard(option, index))}
            </div>
          </TabsContent>
          
          <TabsContent value="crypto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-akotex-red/10 p-4 rounded-full">
                  <Wallet className="h-6 w-6 text-akotex-red" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Crypto Assets</h2>
                  <p className="text-gray-600">Strategic cryptocurrency investment portfolios</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-4xl">
                Our crypto portfolios are carefully balanced to capture the growth potential of digital assets 
                while managing volatility. These investments provide exposure to blockchain innovation and emerging technologies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cryptoOptions.map((option, index) => renderInvestmentCard(option, index))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <div className="inline-block p-6 bg-gray-50 rounded-xl border border-gray-100 max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Ready to start investing?</h3>
            <p className="text-gray-600 mb-4">
              Create an account to start building your portfolio or log in to manage your existing investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-akotex-red hover:bg-akotex-darkred">
                <Link to="/signup">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Start Investing
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {selectedInvestment && (
        <PaymentDialog
          open={paymentDialogOpen}
          onOpenChange={setPaymentDialogOpen}
          investmentName={selectedInvestment.name}
          minInvestment={selectedInvestment.minInvestment}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default InvestmentOptionsPage;
