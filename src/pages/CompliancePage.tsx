
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const CompliancePage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-akotex-red">Compliance Framework</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl mb-6">
            At Akotex Investment LLC, we maintain the highest standards of regulatory compliance
            to ensure the security and trust of our clients.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Regulatory Compliance</h2>
          <p>
            Akotex Investment LLC operates under strict compliance with all applicable financial regulations
            and is registered with the appropriate regulatory bodies, including:
          </p>
          
          <ul className="my-6 list-disc pl-6">
            <li className="mb-3">Securities and Exchange Commission (SEC)</li>
            <li className="mb-3">Financial Industry Regulatory Authority (FINRA)</li>
            <li className="mb-3">Commodity Futures Trading Commission (CFTC)</li>
            <li className="mb-3">National Futures Association (NFA)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Anti-Money Laundering (AML) Policy</h2>
          <p>
            We maintain a robust Anti-Money Laundering program designed to prevent the use of our
            services for money laundering or terrorist financing activities.
            Our AML policy includes:
          </p>

          <ul className="my-6 list-disc pl-6">
            <li className="mb-3">Thorough Know Your Customer (KYC) procedures</li>
            <li className="mb-3">Ongoing transaction monitoring</li>
            <li className="mb-3">Suspicious activity reporting</li>
            <li className="mb-3">Regular staff training on AML procedures</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Know Your Customer (KYC)</h2>
          <p>
            Our KYC program ensures we verify the identity of all clients before they can use our
            investment services. This process typically includes:
          </p>

          <ul className="my-6 list-disc pl-6">
            <li className="mb-3">Identity verification through official identification documents</li>
            <li className="mb-3">Verification of address and contact information</li>
            <li className="mb-3">Assessment of risk factors</li>
            <li className="mb-3">Periodic review and updates of client information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Compliance Certifications</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8">
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">ISO 27001</h3>
                </div>
                <p className="text-gray-600">Information Security Management</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">SOC 2 Type II</h3>
                </div>
                <p className="text-gray-600">Service Organization Control</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Compliance Updates</h2>
          <p>
            We regularly update our compliance policies to reflect changes in regulations and best
            practices. For more information about our compliance framework, please contact our
            compliance team.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild className="bg-akotex-red hover:bg-red-600">
            <Link to="/security">Learn About Our Security Measures</Link>
          </Button>
          <Button variant="outline">
            <Link to="/contact">Contact Compliance Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
