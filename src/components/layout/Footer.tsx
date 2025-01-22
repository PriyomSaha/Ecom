import React from 'react';
import { Facebook, Instagram, Twitter, Wine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Wine className="h-8 w-8" />
              <span className="text-xl font-semibold">Vineyard Elite</span>
            </div>
            <p className="text-gray-400">Premium wine selection for connoisseurs and enthusiasts.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="/order-tracking" className="text-gray-400 hover:text-white">Order Tracking</a></li>
              <li><a href="/wishlist" className="text-gray-400 hover:text-white">Wishlist</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-grow"
              />
              <button className="bg-burgundy-600 px-4 py-2 rounded-r-md hover:bg-burgundy-700">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vineyard Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}