import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleCall = () => {
    window.location.href = 'tel:9515379249';
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Vayuputra Multi Speciality Hospitals" className="h-16 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${isActive(link.path)
                    ? 'text-secondary'
                    : 'text-gray-700 hover:text-secondary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleCall}
                className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </button>
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Book Appointment</span>
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${isActive(link.path)
                    ? 'bg-secondary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Call Now</span>
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Book Appointment</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <a
        href="tel:9515379249"
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default Header;
