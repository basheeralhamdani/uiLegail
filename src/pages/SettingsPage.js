import React, { useState } from 'react';

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: 'Jane Doe, Esq.',
    email: 'jane.doe@example.com',
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

  const [branding, setBranding] = useState({
    firmName: 'Legail',
    logoUrl: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    primaryColor: '#4F46E5',
  });

  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleNotificationChange = (e) => {
    const { id, checked } = e.target;
    setNotifications(prev => ({ ...prev, [id]: checked }));
  };

  const handleBrandingChange = (e) => {
    const { id, value } = e.target;
    setBranding(prev => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h2>

      <div className="space-y-12">
        {/* Profile Settings */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="name" value={profile.name} onChange={handleProfileChange} className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" value={profile.email} onChange={handleProfileChange} className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="email" checked={notifications.email} onChange={handleNotificationChange} className="h-4 w-4 text-primary-color border-gray-300 rounded" />
              <label htmlFor="email" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="push" checked={notifications.push} onChange={handleNotificationChange} className="h-4 w-4 text-primary-color border-gray-300 rounded" />
              <label htmlFor="push" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Push Notifications</label>
            </div>
          </div>
        </div>

        {/* White-Labeling Settings */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Branding</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Firm Name</label>
              <input type="text" id="firmName" value={branding.firmName} onChange={handleBrandingChange} className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Logo URL</label>
              <input type="text" id="logoUrl" value={branding.logoUrl} onChange={handleBrandingChange} className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Primary Color</label>
              <input type="color" id="primaryColor" value={branding.primaryColor} onChange={handleBrandingChange} className="mt-1 h-10 w-20 p-1 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
            <button className="bg-primary-color hover:bg-primary-color-hover text-white font-bold py-2 px-4 rounded-lg">
                Save Settings
            </button>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
