import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const FooterSection = () => {
  const footerData = [
    {
      title: "Company",
      items: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Market Report", href: "#" },
        { label: "Investment Guides", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { label: "support@akotex.com", href: "mailto:support@akotex.com" },
        { label: "+1 (555) 123-456", href: "tel:+1555123456" },
        { label: "123 Finance St, New York, NY", href: null },
      ],
    },
  ];
  return (
    <footer className="bg-[#04060B] bg-[url('/images/footerBg.png')] bg-contain bg-center bg-no-repeat text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-left">
            <div className="mb-4">
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src="/images/footerWhiteLogo.png"
                alt="logo"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs font-inter leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-4">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mapped Footer Sections */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-10 lg:mt-0">
            {footerData.map((section, index) => (
              <div
                key={index}
                className="flex flex-col lg:items-center sm:items-start text-left"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 font-poppins">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm font-inter">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-gray-300 transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs sm:text-sm font-inter text-gray-400">
            Akotex Investments © All Rights Reserved 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
