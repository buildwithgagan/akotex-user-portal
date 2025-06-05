import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-akotex-black text-gray-300 pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Skyscraper Outlines */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-5">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <rect x="100" y="50" width="80" height="150" fill="currentColor" />
            <rect x="200" y="30" width="60" height="170" fill="currentColor" />
            <rect x="280" y="60" width="70" height="140" fill="currentColor" />
            <rect x="370" y="20" width="90" height="180" fill="currentColor" />
            <rect x="480" y="40" width="75" height="160" fill="currentColor" />
            <rect x="580" y="10" width="65" height="190" fill="currentColor" />
            <rect x="670" y="45" width="85" height="155" fill="currentColor" />
            <rect x="780" y="25" width="70" height="175" fill="currentColor" />
            <rect x="870" y="55" width="80" height="145" fill="currentColor" />
            <rect x="970" y="35" width="75" height="165" fill="currentColor" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Social Icons Row */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-8">
            <a 
              href="#" 
              className="group bg-gray-800 hover:bg-akotex-red p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-akotex-red/25 hover:scale-110"
            >
              <Facebook size={24} className="group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="group bg-gray-800 hover:bg-akotex-red p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-akotex-red/25 hover:scale-110"
            >
              <Twitter size={24} className="group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="group bg-gray-800 hover:bg-akotex-red p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-akotex-red/25 hover:scale-110"
            >
              <Instagram size={24} className="group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="group bg-gray-800 hover:bg-akotex-red p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-akotex-red/25 hover:scale-110"
            >
              <Linkedin size={24} className="group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Enhanced 4-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center mb-8">
              <img 
                src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png" 
                alt="Akotex Group Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-8 font-inter leading-relaxed">
              Professional wealth management solutions for your financial growth and security in the modern economy.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-xl mb-8 font-poppins">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Home</Link></li>
              <li><Link to="/investments" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Investments</Link></li>
              <li><Link to="/performance" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Performance</Link></li>
              <li><Link to="/signup" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Sign Up</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-xl mb-8 font-poppins">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/terms" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Compliance</Link></li>
              <li><Link to="/security" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Security</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-xl mb-8 font-poppins">Contact</h4>
            <ul className="space-y-4">
              <li className="font-inter text-lg">
                <span className="block">Email: info@akotexwealth.com</span>
              </li>
              <li className="font-inter text-lg">
                <span className="block">Phone: +1 (555) 123-4567</span>
              </li>
              <li className="font-inter text-lg">
                <span className="block">Address: 123 Financial District, New York, NY</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-12" />
        
        {/* Enhanced Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm mb-12">
          <p className="font-inter text-lg">&copy; {new Date().getFullYear()} Akotex Investment LLC. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 lg:mt-0">
            <Link to="/terms" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Terms</Link>
            <Link to="/privacy" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Privacy</Link>
            <Link to="/compliance" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Compliance</Link>
            <Link to="/security" className="hover:text-akotex-red transition-colors duration-300 font-inter text-lg">Security</Link>
          </div>
        </div>

        {/* Disclaimer Section - keeping existing content */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="text-xs text-gray-500 leading-relaxed font-inter">
            <p className="mb-4">
              Akotex Investment LLC is regulated by the Financial Services Authority (FSA) as an Operator of a Property Investment Crowdfunding Platform. 
              At present there are no regulatory restrictions imposed on Akotex by the FSA. Akotex platform consists of the website and mobile app. 
              By using Akotex, you agree to be bound by the Terms & Conditions, Cookie Notice and Privacy Policy.
            </p>
            <p className="mb-4">
              All investments through Akotex carry risk and are not guaranteed. Past performance is not a reliable indicator of future results. 
              Please read Key Risks before investing. Akotex Investment LLC also has an Islamic Finance certification from the FSA. 
              Akotex is authorized to offer Shariah compliant investments.
            </p>
            <p className="mb-4">
              Akotex Financial Technology Company is regulated by the Capital Market Authority (CMA) to enter under its FinTech Lab 
              and licensed to launch real estate investment fund opportunities. The Akotex platform, which includes our website and mobile apps, 
              operates under the regulatory framework established by the CMA for innovative financial technologies.
            </p>
            <p>
              By using Akotex, you agree to abide by our Terms & Conditions, Cookie Notice, and Privacy Policy. 
              While offering unique investment opportunities in the real estate market, we remind our investors that all investments carry risks 
              and returns are not guaranteed. We encourage you to review the Key Risks before investing.
            </p>
          </div>
          <div className="mt-8 text-xs text-gray-500 font-inter">
            <p>123 Financial District, Suite 500, New York, NY 10001, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
