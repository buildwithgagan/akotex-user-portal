
import { Star } from "lucide-react";

// Define logos and their information
const partnerLogos = [
  {
    id: 1,
    name: "Sequoia Capital",
    logo: "SC",
    description: "Leading venture capital firm"
  },
  {
    id: 2,
    name: "Andreessen Horowitz",
    logo: "a16z",
    description: "Silicon Valley venture capital firm"
  },
  {
    id: 3,
    name: "Tiger Global",
    logo: "TG",
    description: "Investment firm focused on global growth"
  },
  {
    id: 4,
    name: "SoftBank",
    logo: "SB",
    description: "Multinational conglomerate"
  },
  {
    id: 5,
    name: "Accel",
    logo: "A",
    description: "Global venture capital firm"
  },
  {
    id: 6,
    name: "BlackRock",
    logo: "BR",
    description: "World's largest asset manager"
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
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-akotex-red">
                <div className="text-xl md:text-2xl font-bold flex items-center">
                  <span>{partner.logo}</span>
                  <Star className="h-4 w-4 ml-1 fill-current" />
                </div>
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
