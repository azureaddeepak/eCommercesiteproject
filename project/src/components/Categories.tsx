import React from 'react';

const categories = [
  {
    name: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
  },
  {
    name: 'Casual Collection',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc',
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="relative group cursor-pointer">
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-serif">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;