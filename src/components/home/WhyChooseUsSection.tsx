
import { Shield, Eye, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    title: "Professional Management",
    description: "Our team of experienced professionals manages your investments using proven strategies and market insights.",
  },
  {
    icon: <Eye className="h-6 w-6 text-white" />,
    title: "Transparent Reporting", 
    description: "Access detailed performance reports and portfolio insights at any time through our intuitive dashboard.",
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    title: "Secure Platform",
    description: "Bank-level security and compliance with relevant regulations to protect your investments and personal data.",
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Flexible Investment",
    description: "Start with a single payment or set up recurring investments to build your wealth steadily over time.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-6 py-3 bg-akotex-red/10 rounded-full mb-8">
              <span className="text-sm font-semibold text-akotex-red font-inter">The Akotex Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins leading-tight">
              Why Choose Akotex Wealth?
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 font-inter leading-relaxed">
              We provide a secure, transparent and professional investment experience designed to help you reach your financial goals with confidence.
            </p>
            
            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  {/* Icon Badge */}
                  <div className="bg-akotex-red rounded-2xl p-4 flex-shrink-0 shadow-lg">
                    {feature.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 font-poppins">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Professional wealth management" 
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
            
            {/* Floating Stats Overlay */}
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-akotex-red font-poppins">98%</div>
              <div className="text-sm text-gray-600 font-inter">Client Satisfaction</div>
            </div>
            
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-green-500 font-poppins">$2.5M</div>
              <div className="text-sm text-gray-600 font-inter">Avg Portfolio Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
