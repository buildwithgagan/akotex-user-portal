
import { Badge } from "@/components/ui/badge";

const InvestmentRecommendations = () => {
  const recommendations = [
    {
      assetClass: "ETFs",
      riskLevel: "Low to Medium",
      suitableFor: ["Long-term investors", "Retirement planning", "Conservative portfolios"],
      allocation: "40-50%",
      reasoning: "ETFs offer diversification across multiple sectors with lower fees than actively managed funds. They have shown consistent performance over time and help reduce overall portfolio risk.",
      topPicks: ["Vanguard Total Market ETF", "iShares Core S&P 500", "Schwab US Dividend Equity ETF"],
      color: "green"
    },
    {
      assetClass: "Real Estate",
      riskLevel: "Medium",
      suitableFor: ["Income-focused investors", "Inflation hedging", "Portfolio diversification"],
      allocation: "15-25%",
      reasoning: "Real estate provides both appreciation potential and regular income through dividends. It acts as an effective inflation hedge and has shown resilient growth in the current economic climate.",
      topPicks: ["Vanguard Real Estate ETF", "Commercial REITs", "Residential property funds"],
      color: "blue"
    },
    {
      assetClass: "Stocks",
      riskLevel: "Medium to High",
      suitableFor: ["Growth investors", "Long time horizon", "Higher risk tolerance"],
      allocation: "20-30%",
      reasoning: "Individual stocks offer higher growth potential but come with increased volatility. Focus on companies with strong fundamentals, consistent dividend growth, and competitive advantages.",
      topPicks: ["Technology sector", "Healthcare", "Clean energy"],
      color: "purple"
    },
    {
      assetClass: "Bonds",
      riskLevel: "Low",
      suitableFor: ["Conservative investors", "Near-term goals", "Income generation"],
      allocation: "10-15%",
      reasoning: "Bonds provide stability and regular income to balance portfolio volatility. Current interest rate environment makes short to medium-term bonds more attractive.",
      topPicks: ["Treasury Inflation-Protected Securities", "Short-term corporate bonds", "Municipal bonds"],
      color: "amber"
    },
    {
      assetClass: "Crypto",
      riskLevel: "Very High",
      suitableFor: ["High risk tolerance", "Long time horizon", "Speculative positions"],
      allocation: "0-5%",
      reasoning: "Cryptocurrency offers high potential returns with extreme volatility. Consider only as a small speculative position with money you can afford to lose completely.",
      topPicks: ["Bitcoin", "Ethereum", "Established blockchain projects"],
      color: "red"
    }
  ];

  const getBadgeColor = (color) => {
    switch(color) {
      case "green": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "blue": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "purple": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "amber": return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      case "red": return "bg-red-100 text-red-800 hover:bg-red-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-2">Investment Strategy Overview</h3>
        <p className="text-sm text-muted-foreground">
          Based on market analysis and historical performance, we recommend a diversified portfolio 
          with emphasis on ETFs and Real Estate for the next 6-12 months. This strategy balances growth 
          potential with risk management in the current economic climate.
        </p>
      </div>
      
      {recommendations.map((rec, index) => (
        <div key={index} className="border rounded-lg p-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">{rec.assetClass}</h3>
            <div className="flex items-center gap-2 mt-1 md:mt-0">
              <span className="text-sm text-muted-foreground">Risk Level:</span>
              <Badge variant="outline" className={getBadgeColor(rec.color)}>
                {rec.riskLevel}
              </Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Recommended Allocation</h4>
              <div className="bg-gray-100 w-full h-6 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    rec.assetClass === "ETFs" ? "bg-green-500" : 
                    rec.assetClass === "Real Estate" ? "bg-blue-500" : 
                    rec.assetClass === "Stocks" ? "bg-purple-500" : 
                    rec.assetClass === "Bonds" ? "bg-amber-500" : "bg-red-500"
                  }`}
                  style={{ width: rec.allocation.split('-')[1] }}
                ></div>
              </div>
              <p className="text-sm mt-1">{rec.allocation} of portfolio</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Suitable For</h4>
              <div className="flex flex-wrap gap-2">
                {rec.suitableFor.map((item, i) => (
                  <Badge key={i} variant="outline" className={getBadgeColor(rec.color)}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Investment Reasoning</h4>
            <p className="text-sm text-muted-foreground">{rec.reasoning}</p>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Top Picks</h4>
            <div className="flex flex-wrap gap-2">
              {rec.topPicks.map((item, i) => (
                <Badge key={i} variant="outline" className="bg-akotex-red bg-opacity-10 text-akotex-red border-akotex-red">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <div className="rounded-lg border border-akotex-red border-dashed p-4 mt-8">
        <h3 className="font-medium text-akotex-red mb-2">Important Note</h3>
        <p className="text-sm">
          These recommendations are based on historical performance and current market analysis. 
          All investments carry risk, and past performance is not indicative of future results. 
          Consider consulting with a financial advisor to tailor an investment strategy to your specific goals and risk tolerance.
        </p>
      </div>
    </div>
  );
};

export default InvestmentRecommendations;
