import React from 'react';
import { Package } from 'lucide-react';
import { Order } from '../../types';

// Mock data - replace with actual orders
const orders: Order[] = [
  {
    id: '1',
    date: '2024-03-15',
    status: 'delivered',
    total: 245000,
    items: [
      {
        id: '1',
        name: 'Château Margaux 2015',
        price: 245000,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d8180?auto=format&fit=crop&q=80'
      }
    ],
    shippingAddress: {
      fullName: 'John Doe',
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      postalCode: '400001',
      country: 'India'
    }
  }
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800'
};

export default function OrderHistory() {
  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Package className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-900">No orders yet</h2>
          <p className="mt-2 text-gray-500">When you place orders, they will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Order History</h1>
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order #{order.id}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                {order.items.map(item => (
                  <div key={item.id} className="flex items-center py-4 border-t">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity} × ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>₹{order.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}