import React, { useState } from 'react';
import { Plus, MapPin, Pencil, Trash2 } from 'lucide-react';
import { Address } from '../../types';

export default function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      fullName: 'John Doe',
      street: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      postalCode: '400001',
      country: 'India'
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setIsEditing(true);
  };

  const handleDelete = (address: Address) => {
    setAddresses(addresses.filter(a => a !== address));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(a => 
        a === editingAddress ? editingAddress : a
      ));
    } else {
      // Add new address
      setAddresses([...addresses, editingAddress as Address]);
    }
    setIsEditing(false);
    setEditingAddress(null);
  };

  if (isEditing) {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">
          {editingAddress ? 'Edit Address' : 'Add New Address'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={editingAddress?.fullName || ''}
              onChange={e => setEditingAddress({ ...editingAddress!, fullName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Street Address</label>
            <input
              type="text"
              value={editingAddress?.street || ''}
              onChange={e => setEditingAddress({ ...editingAddress!, street: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                value={editingAddress?.city || ''}
                onChange={e => setEditingAddress({ ...editingAddress!, city: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                value={editingAddress?.state || ''}
                onChange={e => setEditingAddress({ ...editingAddress!, state: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                value={editingAddress?.postalCode || ''}
                onChange={e => setEditingAddress({ ...editingAddress!, postalCode: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                value={editingAddress?.country || ''}
                onChange={e => setEditingAddress({ ...editingAddress!, country: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-burgundy-600 text-white px-4 py-2 rounded-md hover:bg-burgundy-700"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditingAddress(null);
              }}
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Saved Addresses</h3>
        <button
          onClick={() => {
            setEditingAddress({
              fullName: '',
              street: '',
              city: '',
              state: '',
              postalCode: '',
              country: ''
            });
            setIsEditing(true);
          }}
          className="flex items-center space-x-2 text-burgundy-600 hover:text-burgundy-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Address</span>
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-burgundy-600 mt-1" />
                <div>
                  <p className="font-medium">{address.fullName}</p>
                  <p className="text-gray-600">{address.street}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} {address.postalCode}
                  </p>
                  <p className="text-gray-600">{address.country}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(address)}
                  className="p-2 text-gray-400 hover:text-burgundy-600"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(address)}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}