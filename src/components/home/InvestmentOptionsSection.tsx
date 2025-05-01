
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PieChart, Home, Calendar } from "lucide-react";
import { useState } from "react";

const InvestmentOptionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };
  
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="py-20 px-4 bg-akotex-lightgray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-akotex-red/10 rounded-full mb-3">
            <span className="text-sm font-medium text-akotex-red">Investment Options</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diversified Investment Portfolios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our professionally managed investment portfolios tailored to meet your financial goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <PieChart className="h-8 w-8 text-akotex-red" />,
              title: "Indices & ETFs",
              description: "Diversified portfolios of global indices and ETFs designed for steady growth and income.",
              minInvestment: "$1,000",
              return: "8% - 12%"
            },
            {
              icon: <Home className="h-8 w-8 text-akotex-red" />,
              title: "Real Estate",
              description: "Access premium real estate investments with lower entry points and professional management.",
              minInvestment: "$2,500",
              return: "7% - 10%"
            },
            {
              icon: <Calendar className="h-8 w-8 text-akotex-red" />,
              title: "Crypto Assets",
              description: "Strategic crypto portfolios balanced for growth potential while managing volatility.",
              minInvestment: "$500",
              return: "15% - 25%"
            }
          ].map((option, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl border border-gray-100 transition-all duration-500 flex flex-col ${
                hoveredCard === index 
                  ? "shadow-lg transform -translate-y-2" 
                  : "shadow-sm hover:shadow-md"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 bg-akotex-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 transform">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-5 min-h-[80px]">
                {option.description}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Minimum Investment</span>
                  <span className="font-semibold">{option.minInvestment}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-500">Avg. Annual Return</span>
                  <span className="text-akotex-red font-semibold">{option.return}</span>
                </div>
                <Link 
                  to="/investments" 
                  className="mt-6 inline-block text-akotex-red font-semibold group"
                >
                  <span className="inline-flex items-center group-hover:underline">
                    Learn more 
                    <span className="transform transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-akotex-red hover:bg-akotex-darkred transition-transform duration-300 hover:scale-105"
          >
            <Link to="/investments">View All Investment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
