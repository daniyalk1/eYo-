import { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

function MenuCard({ item }) {
  const [imageError, setImageError] = useState(false);
  const message = `Hi! I'd like to order ${item.name} (Rs. ${item.price}).`;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${item.name} - ${item.description}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-5">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-500 mb-2" aria-label={`Category: ${item.category}`}>
            {item.category}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
          <span className="text-2xl font-bold text-green-600" aria-label={`Price: ${item.price} rupees`}>
            Rs. {item.price}
          </span>
          <WhatsAppButton message={message} className="text-sm px-4 py-2" />
        </div>
      </div>
    </article>
  );
}

export default MenuCard;

