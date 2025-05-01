
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Home, Calendar } from "lucide-react";

const InvestmentOptionsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Diversified Investment Options</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our professionally managed investment portfolios tailored to meet your financial goals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-akotex-red">
            <CardContent className="pt-6">
              <div className="mb-4 bg-akotex-red bg-opacity-10 p-3 rounded-full w-fit">
                <PieChart className="h-6 w-6 text-akotex-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Indices & ETFs</h3>
              <p className="text-gray-600 mb-4">
                Diversified portfolios of global indices and ETFs designed for steady growth and income.
              </p>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red">8% - 12%</span>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-akotex-red">
            <CardContent className="pt-6">
              <div className="mb-4 bg-akotex-red bg-opacity-10 p-3 rounded-full w-fit">
                <Home className="h-6 w-6 text-akotex-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Access premium real estate investments with lower entry points and professional management.
              </p>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red">7% - 10%</span>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-akotex-red">
            <CardContent className="pt-6">
              <div className="mb-4 bg-akotex-red bg-opacity-10 p-3 rounded-full w-fit">
                <Calendar className="h-6 w-6 text-akotex-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Crypto Assets</h3>
              <p className="text-gray-600 mb-4">
                Strategic crypto portfolios balanced for growth potential while managing volatility.
              </p>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Avg. Annual Return</span>
                <span className="text-akotex-red">15% - 25%</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-akotex-red hover:bg-akotex-darkred">
            <Link to="/investments">View All Investment Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptionsSection;
