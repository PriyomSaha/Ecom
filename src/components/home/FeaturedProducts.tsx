import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Château Margaux 2015",
    price: 245000,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d8180?auto=format&fit=crop&q=80",
    category: "Red Wine",
    rating: 4.9
  },
  {
    id: 2,
    name: "Dom Pérignon 2010",
    price: 185000,
    image: "https://images.unsplash.com/photo-1594144432583-13b7b1a49d3f?auto=format&fit=crop&q=80",
    category: "Champagne",
    rating: 4.8
  },
  {
    id: 3,
    name: "Opus One 2018",
    price: 275000,
    image: "https://images.unsplash.com/photo-1566452348683-79a7b01e7717?auto=format&fit=crop&q=80",
    category: "Red Wine",
    rating: 4.9
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-burgundy-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-burgundy-600 text-white py-2 rounded-md hover:bg-burgundy-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}