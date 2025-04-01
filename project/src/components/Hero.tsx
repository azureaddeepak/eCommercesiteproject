import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt="Hero fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">Elegance Redefined</h1>
            <p className="text-xl mb-8">Discover our new collection</p>
            <button className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;