import WhatsAppButton from './WhatsAppButton';

function MenuCard({ item }) {
  const message = `Hi! I'd like to order ${item.name} (Rs. ${item.price}).`;

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-600">Rs. {item.price}</span>
          <WhatsAppButton message={message} className="text-sm px-4 py-2" />
        </div>
      </div>
    </article>
  );
}

export default MenuCard;

