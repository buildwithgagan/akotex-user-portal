
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-akotex-black text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Akotex Wealth Compass</h3>
            <p className="text-gray-400">
              Professional wealth management solutions for your financial growth and security.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-akotex-red">Home</Link></li>
              <li><Link to="/investments" className="hover:text-akotex-red">Investments</Link></li>
              <li><Link to="/performance" className="hover:text-akotex-red">Performance</Link></li>
              <li><Link to="/signup" className="hover:text-akotex-red">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-akotex-red">Terms of Service</a></li>
              <li><a href="#" className="hover:text-akotex-red">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-akotex-red">Compliance</a></li>
              <li><a href="#" className="hover:text-akotex-red">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@akotexwealth.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Financial District, New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Akotex Investment LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
