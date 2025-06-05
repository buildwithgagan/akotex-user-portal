
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-akotex-red text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white opacity-10 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[25%] h-[25%] bg-white opacity-10 blur-[60px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins leading-tight">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-inter leading-relaxed">
              Join thousands of investors who have chosen Akotex Wealth to secure their financial future and build lasting wealth.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-akotex-red hover:bg-gray-100 font-bold text-xl py-8 px-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-akotex-red bg-white/10 backdrop-blur-sm font-bold text-xl py-8 px-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/login">Login to View Dashboard</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/05254c05-4d1e-43c3-9904-c44466dd3ce5.png" 
              alt="Investment Journey" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
