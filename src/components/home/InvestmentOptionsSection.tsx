
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InvestmentOptionsSection = () => {
  const investmentOptions = [
    {
      icon: "/lovable-uploads/3835b7a9-3c48-443d-a2d7-9a6635541d0b.png",
      title: "Indices & ETFs",
      description: "Diversified portfolios of global indices and ETFs designed for steady growth and income.",
      minInvestment: "$1,000",
      avgReturn: "8% - 12%"
    },
    {
      icon: "/lovable-uploads/cb56cb6c-0f62-4b2e-8f44-c736269af0f3.png", 
      title: "Real Estate",
      description: "Access premium real estate investments with lower entry points and professional management.",
      minInvestment: "$2,500",
      avgReturn: "7% - 10%"
    },
    {
      icon: "/lovable-uploads/bd60af5c-db27-493d-8681-a56025d9eb9d.png",
      title: "Crypto Assets", 
      description: "Strategic crypto portfolios balanced for growth potential while managing volatility.",
      minInvestment: "$500",
      avgReturn: "15% - 25%"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Mobile Mockup */}
          <div className="relative">
          <div className="mb-16">
          <div className="inline-block bg-white border border-gray-200 rounded-lg px-4 py-2 mb-6">
            <span className="text-sm text-gray-600 font-medium">Investment Options</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Diversified<br />
            <span className="text-akotex-red">Investment Portfolios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-md font-inter">
            Choose from our professionally managed investment portfolios tailored to meet your financial goals.
          </p>
        </div>
            <div className="bg-gray-900 rounded-3xl p-6 relative overflow-hidden max-w-md ">
              {/* Phone Frame */}
              <div className=" rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/invest.png" 
                  alt="Investment App Interface" 
                  className="w-full h-auto"
                />
              </div>
              
            </div>
          </div>
          
          {/* Right Side - Investment Options */}
          <div className="space-y-8 md:mt-[200px]">
            {investmentOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src={option.icon} alt={option.title} className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 font-poppins text-gray-900">
                      {option.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                      {option.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 font-inter">Minimum Investment</p>
                        <p className="font-bold text-gray-900">{option.minInvestment}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-inter">Avg. Annual Return</p>
                        <p className="font-bold text-gray-900">{option.avgReturn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
