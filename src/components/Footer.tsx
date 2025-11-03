import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#DAEC8B] rounded-full flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-gray-800">BT</span>
              </div>
              <h3 className="text-xl font-bold text-white">Bluetick Reality</h3>
            </div>
            <p className="text-sm mb-4">
              Building Dreams, Brick by Brick in Bhopal. Your trusted partner in real estate.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm hover:text-[#DAEC8B] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-sm hover:text-[#DAEC8B] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-sm hover:text-[#DAEC8B] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('properties')}
                  className="text-sm hover:text-[#DAEC8B] transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-sm hover:text-[#DAEC8B] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">Third Floor, Plot No 155, Service Rd, Near Axis Bank, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">+91 7809909978</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">dealmakersindianar@gmail.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              
              <a
                href="https://www.instagram.com/bluetickrealty/" target='blank'
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#DAEC8B] hover:text-gray-900 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/bluetickrealty/" target='blank'
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#DAEC8B] hover:text-gray-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">© 2025 Bluetick Reality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
