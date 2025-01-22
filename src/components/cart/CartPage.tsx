import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';
import { CartItem as CartItemType } from '../../types';

// Mock data - replace with actual cart data
const cartItems: CartItemType[] = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    price: 245000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d8180?auto=format&fit=crop&q=80'
  }
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    // Implement quantity update logic
  };

  const handleRemove = (id: string) => {
    // Implement remove item logic
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Browse our collection to add some wines.</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-burgundy-600 text-white px-6 py-2 rounded-md hover:bg-burgundy-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block w-full bg-burgundy-600 text-white text-center px-6 py-3 rounded-md hover:bg-burgundy-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}