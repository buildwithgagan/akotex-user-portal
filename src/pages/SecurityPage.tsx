
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Server, Database, Key } from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-akotex-red">Security Measures</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl mb-6">
            At Akotex Investment LLC, we implement industry-leading security measures to protect your 
            investments and personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Data Protection</h2>
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 mr-4 text-akotex-red" />
            <div>
              <p>
                We employ advanced encryption technologies to secure all sensitive data. 
                Your information is protected both at rest and in transit using industry-standard 
                protocols and algorithms.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Infrastructure Security</h2>
          <div className="flex items-center mb-4">
            <Server className="h-8 w-8 mr-4 text-akotex-red" />
            <div>
              <p>
                Our infrastructure is hosted in secure data centers with 24/7 monitoring, 
                redundant power supplies, and multiple layers of physical security.
              </p>
            </div>
          </div>

          <Separator className="my-10" />

          <h2 className="text-2xl font-semibold mb-6">Key Security Features</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">Encryption</h3>
                </div>
                <p className="text-gray-600">
                  256-bit AES encryption for all sensitive data and communications
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Key className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                </div>
                <p className="text-gray-600">
                  Additional security layer requiring two forms of verification
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">Regular Backups</h3>
                </div>
                <p className="text-gray-600">
                  Automated backups and disaster recovery procedures
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 mr-2 text-akotex-red" />
                  <h3 className="text-lg font-medium">Fraud Monitoring</h3>
                </div>
                <p className="text-gray-600">
                  Advanced systems to detect and prevent unauthorized activity
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Regular Security Audits</h2>
          <p>
            We conduct regular security audits and vulnerability assessments to ensure our systems 
            remain secure against new and emerging threats. These include:
          </p>

          <ul className="my-6 list-disc pl-6">
            <li className="mb-3">Penetration testing by independent security experts</li>
            <li className="mb-3">Vulnerability scanning and remediation</li>
            <li className="mb-3">Code security reviews</li>
            <li className="mb-3">Compliance audits</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Employee Security Training</h2>
          <p>
            All employees undergo regular security awareness training to ensure they follow 
            best practices in protecting client information and are alert to potential security threats.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Security Incident Response</h2>
          <p>
            We maintain a comprehensive incident response plan to quickly address any security 
            incidents that may arise. Our team is available 24/7 to monitor and respond to 
            potential security threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
