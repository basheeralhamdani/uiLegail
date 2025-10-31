import React from 'react';

const notificationsData = [
  { id: 1, text: 'Client John B. Grantor has submitted their intake form.', time: '15m ago', read: false },
  { id: 2, text: 'The draft for the "Lady Bird Deed" for Eleanor Vance is ready for your review.', time: '1h ago', read: false },
  { id: 3, text: 'Mary Testator has signed the "Will" document.', time: 'Yesterday', read: true },
  { id: 4, text: 'A new matter has been created for Peter Principal.', time: '3 days ago', read: true },
];

const NotificationsPanel = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Notifications</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto">
        {notificationsData.map(notification => (
          <div key={notification.id} className={`p-4 ${notification.read ? '' : 'bg-blue-50 dark:bg-blue-900/20'}`}>
            <p className="text-sm text-gray-700 dark:text-gray-300">{notification.text}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
          </div>
        ))}
      </div>
      <div className="p-2 border-t border-gray-200 dark:border-gray-700 text-center">
        <button className="text-sm text-primary-color hover:underline">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
