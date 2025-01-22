import React from "react";
import { LogOut, X, ArrowLeftRight, UserPlus } from "lucide-react";

export default function SignOut() {
  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Account Settings</h3>

        {/* Sign Out Section */}
        <div className="p-4 border rounded-lg bg-white shadow-md flex items-center justify-between space-x-4">
          <p className="text-sm">Are you sure you want to sign out?</p>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-md text-sm font-medium transition">
              <LogOut className="h-4 w-4 mr-2" />
              Yes, Sign Out
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md text-sm font-medium transition">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </button>
          </div>
        </div>

        {/* Switch Account / Add Account Section */}
        <div className="p-4 border rounded-lg bg-white shadow-md flex items-center justify-between space-x-4 mt-4">
          <p className="text-sm">Manage your accounts:</p>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md text-sm font-medium transition">
              <ArrowLeftRight className="h-4 w-4 mr-2" />
              Switch Account
            </button>
            <button className="flex items-center px-4 py-2 bg-green-100 text-green-600 hover:bg-green-200 rounded-md text-sm font-medium transition">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
