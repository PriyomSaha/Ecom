import React, { useState } from "react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: {
      orders: true,
      promotions: true,
      newsletter: false,
      reminders: true,
    },
    smsNotifications: {
      orders: true,
      promotions: false,
      reminders: false,
    },
  });

  const handleToggle = (category: string, type: string) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [type]:
          !prev[category as keyof typeof prev][
            type as keyof (typeof prev)[keyof typeof prev]
          ],
      },
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {Object.entries(settings.emailNotifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-700 capitalize">{key}</span>
              <button
                onClick={() => handleToggle("emailNotifications", key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full \${
                  value ? 'bg-burgundy-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition \${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">SMS Notifications</h3>
        <div className="space-y-4">
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          {Object.entries(settings.smsNotifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-700 capitalize">{key}</span>
              <button
                onClick={() => handleToggle("smsNotifications", key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full \${
                  value ? 'bg-burgundy-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
