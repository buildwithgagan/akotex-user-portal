
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InvestmentOptionsSection = () => {
  const investmentOptions = [
    {
      icon: "/lovable-uploads/bf11881d-f311-488a-abe7-cc3092afeeeb.png",
      title: "Diversified Portfolios",
      description: "Access to professionally managed portfolios with global diversification across multiple asset classes.",
      features: ["Low minimum investment", "Professional management", "Global diversification"]
    },
    {
      icon: "/lovable-uploads/fdb42648-3bb3-48f7-a8ea-e133fc69ce72.png", 
      title: "Real Estate Funds",
      description: "Invest in premium real estate projects with lower entry points and professional property management.",
      features: ["Prime locations", "Rental income", "Property appreciation"]
    },
    {
      icon: "/lovable-uploads/325053c5-5a2a-4693-8944-ff80485b3874.png",
      title: "Growth Investments", 
      description: "High-growth investment opportunities balanced for potential returns while managing market volatility.",
      features: ["Growth potential", "Risk management", "Portfolio optimization"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Diversified Investment Portfolios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Choose from our professionally managed investment portfolios, each tailored to meet different financial goals and risk preferences.
          </p>
        </div>
        
        {/* Investment Options Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {investmentOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md">
                <img src={option.icon} alt={option.title} className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                {option.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm font-inter">
                    <div className="w-2 h-2 bg-akotex-red rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link 
                to="/investments" 
                className="inline-flex items-center text-akotex-red font-bold font-inter hover:text-akotex-darkred transition-colors duration-300"
              >
                Learn More 
                <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Section CTA */}
        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-lg py-6 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
          >
            <Link to="/investments">View All Investment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
