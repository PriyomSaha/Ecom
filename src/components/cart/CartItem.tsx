import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface Props {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: Props) {
  return (
    <div className="flex items-center py-4 border-b">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-grow ml-4">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-burgundy-600">₹{item.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 p-2 text-gray-400 hover:text-red-500"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}