import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">About Us</h3>
            <p className="text-gray-600">
              The Formal Store offers premium formal wear and accessories for the modern gentleman and lady.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Contact Us</li>
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Store Locator</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 The Formal Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;