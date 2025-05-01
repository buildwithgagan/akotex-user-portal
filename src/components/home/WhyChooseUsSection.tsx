
import { Check } from "lucide-react";

const features = [
  {
    title: "Professional Management",
    description: "Our team of experienced professionals manages your investments using proven strategies.",
  },
  {
    title: "Transparent Reporting",
    description: "Access detailed performance reports and portfolio insights at any time.",
  },
  {
    title: "Secure Platform",
    description: "Bank-level security and compliance with relevant regulations to protect your investments.",
  },
  {
    title: "Flexible Investment",
    description: "Start with a single payment or set up recurring investments to build your wealth steadily.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-akotex-red/10 rounded-full mb-3">
              <span className="text-sm font-medium text-akotex-red">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Akotex Wealth Advantage
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We provide a secure, transparent and professional investment experience designed to help you reach your financial goals.
            </p>
            
            <div className="grid gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-akotex-red rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-akotex-red/10 rounded-3xl -rotate-6 transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Wealth management" 
              className="relative z-10 rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
