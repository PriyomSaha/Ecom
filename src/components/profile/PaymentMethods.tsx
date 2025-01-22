import React from 'react';
import { CreditCard, Plus } from 'lucide-react';

const savedCards = [
  {
    id: '1',
    type: 'Visa',
    last4: '4242',
    expiry: '12/24'
  }
];

export default function PaymentMethods() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Saved Payment Methods</h3>
        <div className="space-y-4">
          {savedCards.map(card => (
            <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <CreditCard className="h-8 w-8 text-burgundy-600" />
                <div>
                  <p className="font-medium">
                    {card.type} ending in {card.last4}
                  </p>
                  <p className="text-sm text-gray-500">Expires {card.expiry}</p>
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button className="flex items-center space-x-2 text-burgundy-600 hover:text-burgundy-700">
          <Plus className="h-5 w-5" />
          <span>Add New Payment Method</span>
        </button>
      </div>
    </div>
  );
}