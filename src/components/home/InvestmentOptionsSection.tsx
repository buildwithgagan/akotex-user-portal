
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PieChart, Home, Calendar, Eye } from "lucide-react";

const InvestmentOptionsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-akotex-red/10 rounded-full mb-3">
            <span className="text-sm font-medium text-akotex-red">Investment Options</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diversified Investment Portfolios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our professionally managed investment portfolios tailored to meet your financial goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6 bg-akotex-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <PieChart className="h-8 w-8 text-akotex-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Indices & ETFs</h3>
            <p className="text-gray-600 mb-5 min-h-[80px]">
              Diversified portfolios of global indices and ETFs designed for steady growth and income.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Minimum Investment</span>
                <span className="font-semibold">$1,000</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red font-semibold">8% - 12%</span>
              </div>
              <div className="flex justify-between mt-4">
                <Link to="/investments" className="inline-block text-akotex-red font-semibold hover:underline">
                  Learn more →
                </Link>
                <Button asChild size="sm" variant="outline" className="gap-1 border-akotex-red text-akotex-red hover:bg-akotex-red/10">
                  <Link to="/investments">
                    <Eye size={16} />
                    View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6 bg-akotex-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Home className="h-8 w-8 text-akotex-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real Estate</h3>
            <p className="text-gray-600 mb-5 min-h-[80px]">
              Access premium real estate investments with lower entry points and professional management.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Minimum Investment</span>
                <span className="font-semibold">$2,500</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red font-semibold">7% - 10%</span>
              </div>
              <div className="flex justify-between mt-4">
                <Link to="/investments" className="inline-block text-akotex-red font-semibold hover:underline">
                  Learn more →
                </Link>
                <Button asChild size="sm" variant="outline" className="gap-1 border-akotex-red text-akotex-red hover:bg-akotex-red/10">
                  <Link to="/investments">
                    <Eye size={16} />
                    View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="mb-6 bg-akotex-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-akotex-red" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crypto Assets</h3>
            <p className="text-gray-600 mb-5 min-h-[80px]">
              Strategic crypto portfolios balanced for growth potential while managing volatility.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Minimum Investment</span>
                <span className="font-semibold">$500</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red font-semibold">15% - 25%</span>
              </div>
              <div className="flex justify-between mt-4">
                <Link to="/investments" className="inline-block text-akotex-red font-semibold hover:underline">
                  Learn more →
                </Link>
                <Button asChild size="sm" variant="outline" className="gap-1 border-akotex-red text-akotex-red hover:bg-akotex-red/10">
                  <Link to="/investments">
                    <Eye size={16} />
                    View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-akotex-red hover:bg-akotex-darkred">
            <Link to="/investments">View All Investment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
