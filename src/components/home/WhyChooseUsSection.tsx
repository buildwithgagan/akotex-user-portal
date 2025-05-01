
const features = [
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
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Akotex Wealth Compass</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a secure, transparent and professional investment experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-akotex-red">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
