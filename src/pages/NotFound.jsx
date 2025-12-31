import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;

