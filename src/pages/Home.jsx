import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import { menuItems } from '../data/menuItems';
import MenuCard from '../components/MenuCard';

function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Healthy Food, Delivered Fresh
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover delicious, nutritious meals made with love in Karachi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                View Menu
              </Link>
              <WhatsAppButton className="px-8 py-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Locally sourced, organic produce</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable service across Karachi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every meal prepared with care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Items
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try our most popular healthy meals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="text-green-600 hover:text-green-700 font-semibold text-lg"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

