import { FaHardHat, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-500 p-2 rounded-lg">
                <FaHardHat className="text-slate-900 text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">DECO</span>
                <span className="text-amber-500 text-xs font-semibold">Construction Company</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building excellence since 2003. Your trusted partner in residential and commercial construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Machinery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, label: 'Facebook' },
                { icon: <FaTwitter />, label: 'Twitter' },
                { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                { icon: <FaInstagram />, label: 'Instagram' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center text-gray-300 hover:text-slate-900 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} DECO Construction Company. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Built with quality. Delivered with trust.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
