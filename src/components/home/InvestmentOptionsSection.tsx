
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PieChart, Home, Bitcoin } from "lucide-react";
import { useState } from "react";

const InvestmentOptionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const investmentOptions = [
    {
      icon: <PieChart className="h-10 w-10 text-akotex-red" />,
      title: "Indices & ETFs",
      description: "Diversified portfolios of global indices and ETFs designed for steady growth and consistent income generation.",
      minInvestment: "$1,000",
      return: "8% - 12%",
      risk: "Low to Medium",
      features: ["Global diversification", "Professional management", "Quarterly dividends"]
    },
    {
      icon: <Home className="h-10 w-10 text-blue-500" />,
      title: "Real Estate",
      description: "Access premium real estate investments with lower entry points and professional property management.",
      minInvestment: "$2,500", 
      return: "7% - 10%",
      risk: "Medium",
      features: ["Prime locations", "Rental income", "Property appreciation"]
    },
    {
      icon: <Bitcoin className="h-10 w-10 text-orange-500" />,
      title: "Crypto Assets",
      description: "Strategic cryptocurrency portfolios balanced for growth potential while managing market volatility.",
      minInvestment: "$500",
      return: "15% - 25%",
      risk: "High",
      features: ["DeFi opportunities", "Staking rewards", "Portfolio rebalancing"]
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-akotex-red/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-akotex-red font-inter">Investment Portfolios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Diversified Investment Portfolios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Choose from our professionally managed investment portfolios, each tailored to meet different financial goals and risk preferences.
          </p>
        </div>
        
        {/* Enhanced Column Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {investmentOptions.map((option, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                hoveredCard === index 
                  ? "shadow-2xl transform -translate-y-4 border-akotex-red/30" 
                  : "shadow-lg hover:shadow-xl border-gray-100"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Vertical Divider Effect */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-akotex-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 lg:p-10">
                {/* Enhanced Icon Badge */}
                <div className="mb-8 w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  {option.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-poppins group-hover:text-akotex-red transition-colors duration-300">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-8 font-inter leading-relaxed text-lg min-h-[96px]">
                  {option.description}
                </p>
                
                {/* Enhanced Features List */}
                <div className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm font-inter">
                      <div className="w-2 h-2 bg-akotex-red rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Investment Details */}
                <div className="space-y-4 mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium font-inter">Minimum Investment</span>
                    <span className="font-bold text-gray-900 font-poppins">{option.minInvestment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium font-inter">Expected Return</span>
                    <span className="text-akotex-red font-bold font-poppins">{option.return}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium font-inter">Risk Level</span>
                    <span className="font-bold text-gray-900 font-poppins">{option.risk}</span>
                  </div>
                </div>
                
                {/* Enhanced CTA */}
                <Link 
                  to="/investments" 
                  className="group/link inline-flex items-center text-akotex-red font-bold text-lg font-inter hover:text-akotex-darkred transition-colors duration-300"
                >
                  Learn More 
                  <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Section CTA */}
        <div className="text-center mt-20">
          <Button 
            asChild 
            size="lg" 
            className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-lg py-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
          >
            <Link to="/investments">View All Investment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
