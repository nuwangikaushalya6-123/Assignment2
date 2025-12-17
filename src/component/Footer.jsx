import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const TavernLogo = () => (
  <div className="w-24 h-auto">
    <div className="text-white text-3xl font-serif leading-none">THE TAVERN</div>
    <div className="text-white text-xs tracking-widest uppercase">Coffee House</div>
  </div>
);

// Navigation link arrays
const NavLinks1 = [
  { name: 'Home', path: '/' },
  { name: 'Our History', path: '/aboutUs' },
  { name: 'Mission', path: '/aboutUs' },
  { name: 'Vision', path: '/aboutUs' },
  { name: 'Values', path: '/aboutUs' },
];

const NavLinks2 = [
  { name: 'Order Online', path: '/contact' },
  { name: 'Full Menu', path: '/menu' },
  { name: 'AboutUs', path: '/aboutus' },
  { name: 'Services', path: '/services' },
  { name: 'Galary', path: '/galary' },
  { name: 'ContactUs', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">

        {/* Column 1: Logo & Contact Info */}
        <div>
          <TavernLogo />
          <div className="mt-6 text-sm">
            <p className="font-semibold text-white mb-2">The Tavern Coffee House</p>
            <p>123 Main Street, Colombo</p>
            <p className="mt-2">+94 145698756</p>
            <p className="mt-4 font-semibold text-white">Open Monday - Friday</p>
            <p>8am-9pm</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><FaFacebookF className="w-5 h-5 hover:text-white transition-colors" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="w-5 h-5 hover:text-white transition-colors" /></a>
              <a href="#" aria-label="TikTok"><FaTiktok className="w-5 h-5 hover:text-white transition-colors" /></a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links 1 */}
        <div className="text-sm">
          {NavLinks1.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block mt-1 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 3: Navigation Links 2 */}
        <div className="text-sm">
          {NavLinks2.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block mt-1 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Column 4: Mission Statement */}
        <div className="text-sm leading-relaxed">
          <p>
            Once a neighborhood bar, now a nonprofit coffeehouse, The Tavern is where strong coffee
            fuels stronger careers and the strongest community. Join us in transforming Buckeye—one
            cup, one connection at a time.
          </p>
        </div>

      </div>

      {/* Separator Line */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400">
        <p>
          &copy;{new Date().getFullYear()}. The Haven Coffee House.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
