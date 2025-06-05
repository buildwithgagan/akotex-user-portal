
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
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Mobile Mockup */}
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 relative overflow-hidden max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/3eb0e7bc-8cef-4115-9045-9978f42a3d48.png" 
                  alt="Investment App Interface" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📌</span>
                </div>
              </div>
              
              {/* Fund Performance Card */}
              <div className="absolute top-1/4 -right-8 bg-white rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-akotex-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">♥</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total fund claimed</p>
                    <p className="font-bold text-sm">AED 25,456.25</p>
                    <p className="text-xs text-green-500">+70%</p>
                  </div>
                </div>
              </div>
              
              {/* Map Pin Card */}
              <div className="absolute bottom-1/4 -right-6 bg-white rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🗺</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">£89</p>
                  </div>
                </div>
              </div>
              
              {/* 3D Building Card */}
              <div className="absolute bottom-8 -right-8">
                <div className="w-16 h-16 bg-white rounded-xl shadow-xl overflow-hidden">
                  <img src="/lovable-uploads/587eca2f-275a-43f2-a632-bdb3e4d49f08.png" alt="Building" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Investment Options */}
          <div className="space-y-8">
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
