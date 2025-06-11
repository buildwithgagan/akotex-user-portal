
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 ">
      <div className="rounded-[30px] p-20 bg-[#EC3237] text-white relative overflow-hidden bg-[url('/images/cta_bg.png')] bg-cover bg-center bg-no-repeat">
     
      
      <div className="max-w-7xl mx-auto relative z-10 my-4">
        <div className="w-[500px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-6 font-poppins leading-tight">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-md md:text-xl mb-8 text-white/90 font-inter leading-relaxed">
              Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future.
            </p>
            
            {/* CTAs */}
            <div className="flex gap-2">
            <Button asChild variant="outline" className="bg-transparent font-light border-white text-white hover:bg-[#C32E32] shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/signup">Create Your Account</Link>
            </Button>
           
              <Button 
                 asChild variant="outline" className="bg-transparent font-light border-white text-white hover:bg-[#C32E32] shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/login">Login to Your Account</Link>
              </Button>
            </div>
          </div>
          
         
        </div>
      </div></div>
    </section>
  );
};

export default CtaSection;
