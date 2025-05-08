
import { useEffect } from "react";

const BackedBySection = () => {
  // Save the uploaded image
  const backedByImage = "/lovable-uploads/eaa32de5-c431-4a88-bc71-a8a2756f694b.png";

  return (
    <section className="py-16 bg-akotex-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">We're backed by</h2>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full md:w-11/12 lg:w-10/12">
            <img 
              src={backedByImage} 
              alt="Our investors and partners" 
              className="w-full" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedBySection;
