import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-8 sm:my-16 px-4 sm:px-6 lg:px-0">
      <div
        className="rounded-[20px] sm:rounded-[30px] p-8 sm:p-12 lg:p-20 bg-[#EC3237] text-white relative overflow-hidden bg-[url('/images/cta_bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto relative z-10 my-4">
          <div className="w-full sm:w-[500px]">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 font-poppins leading-tight">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 font-inter leading-relaxed">
                Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  variant="outline"
                  className="bg-[#131D31] w-fit lg:bg-transparent font-light border-white text-white hover:bg-[#C32E32] shadow-xl transition-all duration-300 hover:scale-105 sm:w-auto text-sm sm:text-base py-4 sm:py-5 px-6 sm:px-8"
                >
                  <Link to="/signup">Create Your Account</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-[#131D31] w-fit lg:bg-transparent font-light border-white text-white hover:bg-[#C32E32] shadow-xl transition-all duration-300 hover:scale-105 sm:w-auto text-sm sm:text-base py-4 sm:py-5 px-6 sm:px-8"
                >
                  <Link to="/login">Login to Your Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;