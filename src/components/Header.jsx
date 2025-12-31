import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-4xl font-bold text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded"
            aria-label="eYo! Home"
          >
            eYo!
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                  isActive('/') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                  isActive('/menu') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                aria-current={isActive('/menu') ? 'page' : undefined}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                  isActive('/contact') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`block py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                    isActive('/') 
                      ? 'text-green-600 font-semibold' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  aria-current={isActive('/') ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={closeMenu}
                  className={`block py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                    isActive('/menu') 
                      ? 'text-green-600 font-semibold' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  aria-current={isActive('/menu') ? 'page' : undefined}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className={`block py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded ${
                    isActive('/contact') 
                      ? 'text-green-600 font-semibold' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  aria-current={isActive('/contact') ? 'page' : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

