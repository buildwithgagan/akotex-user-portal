
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
              Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-akotex-red hover:bg-gray-100 font-bold text-xl py-8 px-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 font-inter border-2 border-white"
              >
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-akotex-red bg-transparent font-bold text-xl py-8 px-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 font-inter"
              >
                <Link to="/login">Login to Your Account</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image with floating app icons */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main person image */}
            <img 
              src="/lovable-uploads/eee369ea-dd8c-487b-855e-f65f965a390e.png" 
              alt="Investment Journey" 
              className="w-full max-w-lg h-auto object-contain"
            />
            
            {/* Floating app icons */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
              <img src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png" alt="Analytics App" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-32 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
              <img src="/lovable-uploads/09e0d919-7f27-4b5b-881a-beb6edaff475.png" alt="Investment App" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute top-48 right-12 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3s" }}>
              <img src="/lovable-uploads/f793ed30-0a6f-40bf-92c6-9325567266d1.png" alt="Building App" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute bottom-32 left-12 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "3s" }}>
              <img src="/lovable-uploads/325053c5-5a2a-4693-8944-ff80485b3874.png" alt="Real Estate App" className="w-full h-full object-cover" />
            </div>
            
            <div className="absolute bottom-48 right-16 w-16 h-16 bg-white rounded-2xl shadow-lg overflow-hidden animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }}>
              <img src="/lovable-uploads/fdb42648-3bb3-48f7-a8ea-e133fc69ce72.png" alt="Real Estate App 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
