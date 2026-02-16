import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function TopBar() {
  const slides = [
    // Address
    <div className="flex items-center gap-3 justify-center">
      <div className="bg-white rounded-full p-2 shadow-sm">
        <MapPin size={16} className="text-sky-600" />
      </div>
      <span className="font-medium">2101 St Paul St, Baltimore MD</span>
    </div>,

    // Phone
    <a
      href="tel:+14109882335"
      className="flex items-center gap-3 justify-center"
    >
      <div className="bg-white rounded-full p-2 shadow-sm">
        <Phone size={16} className="text-sky-600" />
      </div>
      <span className="font-medium">+1 410-988-2335</span>
    </a>,

    // Social
    <div className="flex items-center gap-4 justify-center">
      {[
        <Facebook size={16} />,
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.901 1H22L14.62 9.21L23 23H16.42L11.09 15.62L4.9 23H1.8L9.69 14.07L1.7 1H8.42L13.24 7.7L18.901 1Z"/>
        </svg>,
        <Linkedin size={16} />,
        <Instagram size={16} />,
      ].map((icon, i) => (
        <a
          key={i}
          href="#"
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-full p-2 shadow-sm hover:bg-sky-500 hover:text-white hover:scale-110 transition duration-300"
        >
          {icon}
        </a>
      ))}
    </div>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full backdrop-blur-lg bg-orange-200/80 border-b border-white/30 shadow-md text-gray-900 text-sm">

      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center w-full">

          {/* Left Info */}
          <div className="flex items-center gap-10">

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <MapPin size={16} className="text-sky-600" />
              </div>
              <span className="font-medium">2101 St Paul St, Baltimore MD</span>
            </div>

            <a href="tel:+14109882335" className="flex items-center gap-3 hover:text-sky-600 transition">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Phone size={16} className="text-sky-600" />
              </div>
              <span className="font-medium">+1 410-988-2335</span>
            </a>

            <a href="mailto:careteam@dovehealthservices.com" className="flex items-center gap-3 hover:text-sky-600 transition">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Mail size={16} className="text-sky-600" />
              </div>
              <span className="font-medium">careteam@dovehealthservices.com</span>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {slides[2].props.children}
          </div>

        </div>

        {/* Mobile Rotating Content */}
        <div className="md:hidden flex justify-center items-center w-full transition-all duration-500">
          {slides[index]}
        </div>

      </div>
    </div>
  );
}
