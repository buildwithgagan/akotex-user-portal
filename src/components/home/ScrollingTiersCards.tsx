import { Button } from "@/components/ui/button";
import { Heart, UserPlus, TrendingUp } from "lucide-react";

const images = [
  "https://framerusercontent.com/images/UJALQDL962ip2pPl8RHf0Oxc4.png",
  "https://framerusercontent.com/images/s2VIW1maALrWQjJOBHEakeA0mo.png",
  "https://framerusercontent.com/images/WMfYl2E9KsHXoDTt0eKxWore76s.png",
  "https://framerusercontent.com/images/LOc83O25yDcPMFDaja8bI3c4CGw.png",
  "https://framerusercontent.com/images/c1uo7cX0vhw4EulA64URBQjVHM.png",
];

const benefits = [
  {
    icon: <Heart className=" w-6 h-6" />,
    title: "Earn cashback",
    description:
      "Get up to 3% of your investment added to your Rewards wallet, helping you grow your portfolio faster",
  },
  {
    icon: <UserPlus className=" w-6 h-6" />,
    title: "Share and earn",
    description:
      "Invite your friends to join Stake – when they invest, you both earn. Everyone wins when you spread the word!",
  },
  {
    icon: <TrendingUp className=" w-6 h-6" />,
    title: "Level up",
    description:
      "The more you invest, the faster you move through the tiers – unlocking bigger perks, bonuses, and exclusive offers.",
  },
];

export default function ScrollingTiersLogos() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 lg:py-20">
      <div
        className="max-w-8xl mx-auto"
        style={{
          background: "linear-gradient(180deg, #EEF4F8 0%, #FFFFFF 100%)",
          borderRadius: "30px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <section className="text-start px-4 py-20">
            <div className="inline-block bg-akotex-red/20 border border-akotex-red rounded-lg px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6">
              <span className="text-md text-akotex-red font-black">
                Rewarding investing experience
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 max-w-xl">
              Start earning <span className="text-akotex-red">rewards</span> as
              you grow your <span className="text-akotex-red">investments</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mb-6">
              Get cashback, referral bonuses, and exclusive perks to enhance
              your investment journey. From early access to funds to premium
              insights, the more you invest, the more you earn.
            </p>

            <Button className="bg-gray-900 text-white hover:bg-gray-700 px-6 py-2 rounded-md mb-14">
              Learn about Rewards
            </Button>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center px-6">
                  <div className="bg-akotex-red/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-akotex-red">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cards */}
          <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-white to-red-100 rounded-2xl ">
            <div className="group">
              <div className="flex gap-10 animate-scroll-x group-hover:animate-scroll-x-slow">
                {[...images, ...images].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`logo-${i}`}
                    className="w-auto object-contain h-[700px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
