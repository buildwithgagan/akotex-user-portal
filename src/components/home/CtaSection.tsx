
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-akotex-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-akotex-red opacity-10 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] bg-akotex-red opacity-10 blur-[80px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold text-lg py-6">
              <Link to="/signup">Create Your Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-white/10 text-lg py-6">
              <Link to="/login">Login to Your Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
