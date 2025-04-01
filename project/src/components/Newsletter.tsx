import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 text-gray-300">Stay updated with our latest collections and exclusive offers</p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black"
            />
            <button className="bg-white text-black px-8 py-2 hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;