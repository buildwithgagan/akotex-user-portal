import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-akotex-black text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png" 
                alt="Akotex Group Logo" 
                className="h-8 w-auto mr-2"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Professional wealth management solutions for your financial growth and security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-akotex-red">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akotex-red">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akotex-red">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akotex-red">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-akotex-red transition-colors">Home</Link></li>
              <li><Link to="/investments" className="hover:text-akotex-red transition-colors">Investments</Link></li>
              <li><Link to="/performance" className="hover:text-akotex-red transition-colors">Performance</Link></li>
              <li><Link to="/signup" className="hover:text-akotex-red transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="hover:text-akotex-red transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-akotex-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-akotex-red transition-colors">Compliance</Link></li>
              <li><Link to="/security" className="hover:text-akotex-red transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="block">Email: info@akotexwealth.com</span>
              </li>
              <li className="flex items-center">
                <span className="block">Phone: +1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="block">Address: 123 Financial District, New York, NY</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Akotex Investment LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-akotex-red transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-akotex-red transition-colors">Privacy</Link>
            <Link to="/compliance" className="hover:text-akotex-red transition-colors">Compliance</Link>
            <Link to="/security" className="hover:text-akotex-red transition-colors">Security</Link>
          </div>
        </div>

        {/* New Disclaimer Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-xs text-gray-500 leading-relaxed">
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
          <div className="mt-6 text-xs text-gray-500">
            <p>123 Financial District, Suite 500, New York, NY 10001, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
