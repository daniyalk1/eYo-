import { useLocation } from 'react-router-dom';
import { menuItems } from '../data/menuItems';

function StructuredData() {
  const location = useLocation();

  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'eYo!',
      description: 'Healthy food delivery service in Karachi, Pakistan',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK'
      },
      servesCuisine: 'Healthy Food',
      priceRange: '$$',
      areaServed: {
        '@type': 'City',
        name: 'Karachi'
      }
    };

    if (location.pathname === '/menu') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Menu',
        name: 'eYo! Menu',
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: 'Bowls',
            hasMenuItem: menuItems
              .filter(item => item.category === 'Bowls')
              .map(item => ({
                '@type': 'MenuItem',
                name: item.name,
                description: item.description,
                offers: {
                  '@type': 'Offer',
                  price: item.price,
                  priceCurrency: 'PKR'
                }
              }))
          },
          {
            '@type': 'MenuSection',
            name: 'Salads',
            hasMenuItem: menuItems
              .filter(item => item.category === 'Salads')
              .map(item => ({
                '@type': 'MenuItem',
                name: item.name,
                description: item.description,
                offers: {
                  '@type': 'Offer',
                  price: item.price,
                  priceCurrency: 'PKR'
                }
              }))
          }
        ]
      };
    }

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
}

export default StructuredData;

