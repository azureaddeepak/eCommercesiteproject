import React from 'react';

const products = [
  {
    name: 'Classic Black Suit',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
  },
  {
    name: 'White Dress Shirt',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176',
  },
  {
    name: 'Leather Oxford Shoes',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
  },
  {
    name: 'Silk Tie Collection',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1620228885847-9eab2a1adddc',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-serif text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.name} className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;