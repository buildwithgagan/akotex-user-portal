
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, PieChart, Home, Calendar } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-akotex-black via-black to-akotex-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Grow Your Wealth with Confidence
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Access professionally managed investments and secure your financial future with Akotex Wealth Compass.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold">
                  <Link to="/signup" className="flex items-center">
                    Start Investing Now <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  <Link to="/investments">
                    Explore Investment Options
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-akotex-red rounded-full opacity-20 blur-2xl"></div>
                <div className="relative bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                  <h3 className="text-2xl font-semibold mb-4">Investment Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Indices & ETFs</span>
                        <span className="font-semibold text-akotex-red">+12.4%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-akotex-red h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Real Estate</span>
                        <span className="font-semibold text-akotex-red">+8.7%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-akotex-red h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Crypto</span>
                        <span className="font-semibold text-akotex-red">+21.3%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-akotex-red h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Akotex Wealth Compass</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a secure, transparent and professional investment experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Professional Management",
                description: "Our team of experienced professionals manages your investments using proven strategies.",
              },
              {
                title: "Transparent Reporting",
                description: "Access detailed performance reports and portfolio insights at any time.",
              },
              {
                title: "Secure Platform",
                description: "Bank-level security and compliance with relevant regulations to protect your investments.",
              },
              {
                title: "Flexible Investment",
                description: "Start with a single payment or set up recurring investments to build your wealth steadily.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-akotex-red">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-akotex-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of investors who have chosen Akotex Wealth Compass to secure their financial future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-akotex-red hover:bg-akotex-darkred text-white font-bold">
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                <Link to="/login">Login to Your Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default HomePage;
