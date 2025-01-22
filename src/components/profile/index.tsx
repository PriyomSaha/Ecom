import React, { useState, Suspense } from "react";
import {
  User,
  MapPin,
  Bell,
  Shield,
  CreditCard,
  LogOut,
  Loader,
} from "lucide-react";

// Lazy load the components
const PersonalInfo = React.lazy(() => import("./PersonalInfo"));
const AddressBook = React.lazy(() => import("./AddressBook"));
const NotificationSettings = React.lazy(() => import("./NotificationSettings"));
const SecuritySettings = React.lazy(() => import("./SecuritySettings"));
const PaymentMethods = React.lazy(() => import("./PaymentMethods"));
const SignOut = React.lazy(() => import("./Signout"));

const tabs = [
  {
    id: "personal",
    label: "Personal Info",
    icon: <User className="w-5 h-5" />,
  },
  { id: "addresses", label: "Addresses", icon: <MapPin className="w-5 h-5" /> },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="w-5 h-5" />,
  },
  { id: "security", label: "Security", icon: <Shield className="w-5 h-5" /> },
  {
    id: "payment",
    label: "Payment Methods",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: "signout",
    label: "Sign Out",
    icon: <LogOut className="w-5 h-5" />,
    className: "mt-auto text-red-600 hover:bg-red-50",
  },
];

export default function ProfileLayout() {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo />;
      case "addresses":
        return <AddressBook />;
      case "notifications":
        return <NotificationSettings />;
      case "security":
        return <SecuritySettings />;
      case "payment":
        return <PaymentMethods />;
      case "signout":
        return <SignOut />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg ${
                  activeTab === tab.id
                    ? "bg-burgundy-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              <Suspense fallback={<Loader />}>{renderContent()}</Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
