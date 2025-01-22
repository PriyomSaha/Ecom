import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, Wine } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-burgundy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wine className="h-8 w-8" />
            <span className="text-xl font-semibold">Vineyard Elite</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/collection" className="hover:text-burgundy-200">Collection</Link>
            <Link to="/exclusive" className="hover:text-burgundy-200">Exclusive</Link>
            <Link to="/about" className="hover:text-burgundy-200">About</Link>
            <Link to="/contact" className="hover:text-burgundy-200">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hover:text-burgundy-200">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/cart" className="hover:text-burgundy-200">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="hover:text-burgundy-200">
              <User className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden hover:text-burgundy-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <Link to="/collection" className="block py-2 hover:text-burgundy-200">Collection</Link>
            <Link to="/exclusive" className="block py-2 hover:text-burgundy-200">Exclusive</Link>
            <Link to="/about" className="block py-2 hover:text-burgundy-200">About</Link>
            <Link to="/contact" className="block py-2 hover:text-burgundy-200">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}