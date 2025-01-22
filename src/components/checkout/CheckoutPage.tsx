import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from './AddressForm';
import { Address } from '../../types';

const initialAddress: Address = {
  fullName: '',
  street: '',
  city: '',
  state: '',
  postalCode: '',
  country: ''
};

export default function CheckoutPage() {
  const [address, setAddress] = useState<Address>(initialAddress);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement order submission logic
    navigate('/orders');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
            <form onSubmit={handleSubmit}>
              <AddressForm address={address} onChange={setAddress} />
              <div className="mt-8 border-t pt-6">
                <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                {/* Add payment form here */}
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm text-gray-500">
                    Payment integration will be implemented here
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-burgundy-600 text-white px-6 py-3 rounded-md hover:bg-burgundy-700"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}