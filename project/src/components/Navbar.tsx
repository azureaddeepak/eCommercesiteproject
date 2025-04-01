import React from 'react';
import { ShoppingBag, Menu, Search, User, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer" />
            <Search className="h-6 w-6 cursor-pointer" />
          </div>
          
          <div className="text-2xl font-serif">
            THE FORMAL STORE
          </div>
          
          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 cursor-pointer" />
            <Heart className="h-6 w-6 cursor-pointer" />
            <ShoppingBag className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;