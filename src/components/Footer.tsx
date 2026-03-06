import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.png" alt="Vayuputra Multi Speciality Hospitals" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Providing expert medical care with compassion and excellence in Guntur.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-10 rounded-full hover:bg-secondary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-10 rounded-full hover:bg-secondary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-10 rounded-full hover:bg-secondary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-10 rounded-full hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>General Medicine</li>
              <li>Diabetology</li>
              <li>Maternity Care</li>
              <li>Gynaecology</li>
              <li>Infertility Treatment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Library Centre, 1st Lane Koritepadu<br />
                  Near RCM School, Vinayak Nagar<br />
                  Guntur – 522007, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:9515379249"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  9515379249
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@vayuputrahospitals.com"
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  info@vayuputrahospitals.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Vayuputra Multi Speciality Hospitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
