import React from 'react';

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center">
    <div className="mr-4">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const QuickStats = ({ matters }) => {
  const inProgress = matters.filter(m => m.status !== 'Completed').length;
  const awaitingClient = matters.filter(m => m.status === 'Awaiting Client').length;
  const completed = matters.filter(m => m.status === 'Completed').length;

  const iconClasses = "h-8 w-8 text-primary-color";

  const stats = [
    {
      title: 'In Progress',
      value: inProgress,
      icon: (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Awaiting Client',
      value: awaitingClient,
      icon: (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Completed',
      value: completed,
      icon: (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default QuickStats;
