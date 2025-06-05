
// Define logos and their information
const partnerLogos = [
  {
    id: 1,
    name: "SoftBank Group",
    logo: "/lovable-uploads/3c35e68d-a948-4458-a773-4639db77617c.png",
    description: "Leading venture capital firm"
  },
  {
    id: 2,
    name: "BlackRock",
    logo: "/lovable-uploads/ad790466-06f6-44b7-8b53-c68aeaf2744b.png",
    description: "World's largest asset manager"
  },
  {
    id: 3,
    name: "Accel",
    logo: "/lovable-uploads/d24ba805-2050-47c0-974b-1969e8abe923.png",
    description: "Global venture capital firm"
  },
  {
    id: 4,
    name: "Emerald Capital",
    logo: "/lovable-uploads/2a18aa24-e586-4816-a476-9f545fc50931.png",
    description: "Investment firm focused on global growth"
  },
  {
    id: 5,
    name: "Sequoia Capital",
    logo: "SC",
    description: "Silicon Valley venture capital firm"
  },
  {
    id: 6,
    name: "Tiger Global",
    logo: "TG",
    description: "Multinational investment firm"
  }
];

const BackedBySection = () => {
  return (
    <section className="py-16 bg-akotex-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">We're backed by</h2>
          <p className="mt-3 text-gray-300">Industry leaders who believe in our vision</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {partnerLogos.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-xl bg-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 p-3">
                {partner.logo.startsWith('/') ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-xl md:text-2xl font-bold text-gray-900">
                    {partner.logo}
                  </div>
                )}
              </div>
              <h4 className="text-base font-medium mb-1">{partner.name}</h4>
              <p className="text-xs text-gray-400">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-300">
            Join the growing network of investors who trust Akotex with their investments
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackedBySection;
