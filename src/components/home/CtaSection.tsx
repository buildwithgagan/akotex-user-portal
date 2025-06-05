
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, Zap } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-32 px-4 bg-akotex-black text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-akotex-red opacity-20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] bg-blue-500 opacity-15 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[25%] h-[25%] bg-purple-500 opacity-10 blur-[60px] rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-24 left-24 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl">
          <TrendingUp className="h-8 w-8 text-akotex-red" />
        </div>
      </div>
      <div className="absolute top-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl">
          <Shield className="h-8 w-8 text-blue-400" />
        </div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl">
          <Users className="h-8 w-8 text-green-400" />
        </div>
      </div>
      <div className="absolute bottom-24 right-24 animate-float" style={{ animationDelay: '3s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-xl">
          <Zap className="h-8 w-8 text-yellow-400" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins leading-tight">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-inter leading-relaxed">
              Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future and build lasting wealth.
            </p>
            
            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-xl py-8 px-10 rounded-xl shadow-2xl hover:shadow-akotex-red/25 transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-akotex-black bg-white/10 backdrop-blur-sm font-bold text-xl py-8 px-10 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/login">Login to View Dashboard</Link>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Right Image with Floating Icons */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Confident investor" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
              />
              
              {/* Enhanced Floating Stats */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl animate-float">
                <div className="text-3xl font-bold text-akotex-red font-poppins">+24%</div>
                <div className="text-sm text-gray-600 font-inter">Portfolio Growth</div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-green-500 font-poppins">$50K</div>
                <div className="text-sm text-gray-600 font-inter">Avg Investment</div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-3xl font-bold text-blue-500 font-poppins">5★</div>
                <div className="text-sm text-gray-600 font-inter">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
