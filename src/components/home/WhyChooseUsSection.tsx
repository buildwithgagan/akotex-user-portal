
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "/lovable-uploads/1feac9d3-23a9-4db9-bf16-8af20bfd0900.png",
    title: "Professional Management",
    description: "Our team of experienced professionals manages your investments using proven strategies.",
  },
  {
    icon: "/lovable-uploads/ca1a4c4b-73b3-4153-a19b-1d26694e4439.png",
    title: "Transparent Reporting", 
    description: "Access detailed performance reports and portfolio insights at any time.",
  },
  {
    icon: "/lovable-uploads/c1121518-2d71-43e9-9d5c-fdc03af84aa1.png",
    title: "Secure Platform",
    description: "Bank-level security and compliance with relevant regulations to protect your investments.",
  },
  {
    icon: "/lovable-uploads/75e9b8ea-2586-4461-860c-a6a295d34341.png",
    title: "Flexible Investment",
    description: "Start with a single payment or set up recurring investments to build your wealth steadily.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-6 py-3 bg-gray-100 rounded-full mb-8">
              <span className="text-sm font-medium text-gray-600 font-inter">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins leading-tight">
              The <span className="text-akotex-red">Akotex</span> Wealth Advantage
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 font-inter leading-relaxed max-w-lg">
              We provide a secure, transparent and professional investment experience designed to help you reach your financial goals.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6"
                >
                  {/* Icon Badge */}
                  <div className="bg-gray-900 rounded-2xl p-4 flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 font-poppins text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-akotex-red hover:bg-akotex-red/90 text-white font-bold px-8 py-6 rounded-xl font-inter"
              >
                <Link to="/signup">Invest Now</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Professional wealth management" 
              className="rounded-2xl object-cover w-full h-[600px]"
            />
            
            {/* Mobile Phone Overlay */}
            <div className="absolute bottom-8 left-[-80px]">
              <div className="bg-white rounded-3xl p-2 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl p-1">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="p-4">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-1 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-6 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-sm">Funds</h3>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                          <div className="w-6 h-6 bg-akotex-red rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">1</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tabs */}
                      <div className="flex gap-4 mb-4">
                        <span className="text-xs text-akotex-red border-b-2 border-akotex-red pb-1">Available</span>
                        <span className="text-xs text-gray-500">Funded</span>
                      </div>
                      
                      {/* Fund Card */}
                      <div className="bg-gray-50 rounded-xl p-3 mb-4">
                        <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                          <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Chicago Skyline</div>
                        </div>
                        <h4 className="font-bold text-xs mb-1">Al Nahda Real Estate Fund</h4>
                        <p className="text-akotex-red text-lg font-bold mb-2">AED 1,236,002</p>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>Fund value</span>
                          <span>24 months</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Total net return</span>
                          <span>37.2%</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Annualized net return</span>
                          <span>18.6%</span>
                        </div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="flex justify-around pt-2 border-t border-gray-200">
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Red Dots */}
            <div className="absolute bottom-4 right-8 flex gap-2">
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
              <div className="w-3 h-3 bg-akotex-red rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
