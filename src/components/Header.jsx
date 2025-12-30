import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-4xl font-bold text-green-600">
            eYo!
          </Link>
          
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`transition-colors ${
                  isActive('/menu') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

