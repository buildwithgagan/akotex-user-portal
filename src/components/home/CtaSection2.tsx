
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection2 = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 ">
      <div className="rounded-[30px] p-20 bg-[#000] text-white relative overflow-hidden bg-[url('/images/cta_bg.png')] bg-cover bg-center bg-no-repeat">
     
      
      <div className="max-w-7xl mx-auto relative z-10 my-4">
        <div className="w-[500px]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-6 font-poppins leading-tight">
            Ready to Build Your Custom Portfolio?
            </h2>
            <p className="text-md md:text-xl mb-8 text-white/90 font-inter leading-relaxed">
            It only takes 2 minutes to begin
            </p>
            
            {/* CTAs */}
            <div className="flex gap-2">
            <Button asChild className="bg-[#EC3237] font-light text-white hover:bg-[#fff] hover:text-black shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/signup">Invest Now</Link>
            </Button>
           
            
            </div>
          </div>
          
         
        </div>
      </div></div>
    </section>
  );
};

export default CtaSection2;
